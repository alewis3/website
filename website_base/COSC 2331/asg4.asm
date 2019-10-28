
section .data
	prompt db "Please enter your goals for COSC 2331 in 80 characters!",10
	prompt_len equ $-prompt
	response db "So your goals are: "
	response_len equ $-response

section .bss
	input resd 80

section .text
global _start
_start:

	mov eax, 4
	mov ebx, 1
	mov ecx, prompt
	mov edx, prompt_len
	int 80h

	mov eax, 3
	mov ebx, 2
	mov ecx, input
	mov edx, 80
	int 80h

	mov eax, 4
	mov ebx, 1
	mov ecx, response
	mov edx, response_len
	int 80h

	mov eax, 4
	mov ebx, 1
	mov ecx, input
	mov edx, 80
	int 80h

	mov eax, 1
	int 80h

