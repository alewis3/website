section .data
		prompt db "Please enter a message (up to 50 characters): ", 10
		prompt_len equ $-prompt

section .bss
		msg resb 50

section .text
global _start:
_start:

		mov eax, 4		; first sys-write for the prompt
		mov ebx, 1
		mov ecx, prompt
		mov edx, prompt_len
		int 80h

		mov eax, 3		;sys-read to take in and store users msg
		mov ebx, 2
		mov ecx, msg
		mov edx, 50
		int 80h

		mov eax, 4		;second sys-write to echo original msg back
		mov ebx, 1
		mov ecx, msg
		mov edx, 50
		int 80h

		mov ecx, msg

toUpper:

		mov al, [ecx]  ;move the char that ecx points at into al
		cmp al, 0x0		;if null, go back and print
		je printUpper
		cmp al, 0xA		;if newline, reached the end of line
		je printUpper		;print completed string
		cmp al, 'a'		;if below letter 'a', continue
		jb nextUpper
		cmp al, 'z'		;if above letter 'z', continue on
		ja nextUpper
		sub al, 0x20		;if not, its a lowercase letter, so subtract 20h
		mov [ecx], al	;move changed letter back into [ecx]
		jmp nextUpper	;move onto next letter

printUpper:

		mov eax, 4			;sys-write the uppercase msg
		mov ebx, 1
		mov ecx, msg
		mov edx, 50
		int 80h

		mov ecx, msg

toLower:
		mov al, [ecx]	;move char that ecx points at into al
		cmp al, 0x0		;if null, go back and print
		je printLower
		cmp al, 0xA		;if newline, reached the end of line
		je printLower		;print completed string
		cmp al, 'A'		;if below 'A', continue
		jb nextLower
		cmp al, 'Z'		;if above 'Z', continue
		ja nextLower
		add al, 0x20		;else, its an uppercase letter, so add 20h
		mov [ecx], al	;move changed letter back into value of ecx
		jmp nextLower	;move onto next letter

printLower:

		mov eax, 4			;last sys-write for lowercase msg
		mov ebx, 1
		mov ecx, msg
		mov edx, 50
		int 80h

		jmp done				;jump to the end of the program once done

nextUpper:
    inc ecx					;increment ecx
    jmp toUpper			;jump back to uppercase loop

nextLower:
		inc ecx					;increment ecx
		jmp toLower			;jump back to lowercase loop

done:
		mov eax, 1		;system exit
		mov ebx, 0
		int 80h
