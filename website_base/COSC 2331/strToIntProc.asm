; PROMPT USER FOR A number
; REMEMBER WHAT WE READ FROM KEYBOARD IS A charater string
; CONVERT IT INTO AN INTEGER USING A SUBROUTINE
; ADD 10 TO THIS number
; CONVERT IT BACK TO A CHARACTER STRING SO THAT WE CAN PRINT IT
; CALL APPROPRIATE READ AND WRTIE SUBROUTINES
; ASSUMPTIONS 1: ONLY UNSIGNED NUMNBERS LESS THAN 65000
; ASSUMPTION 2: USER ENTERS A VALID NUMBER SEQUENCE ONLY

section .data
  msg1 db 'Enter a number less than 65000!!', 10
  msg1_len equ $-msg1
  msg2 db 'The given number added to 10 is  --> '
  msg2_len equ $-msg2
  newLine db 10
  newLine_len equ $-newLine
  dataBufferLen equ 80


section .bss
  dataBuffer resb 80
  dataReadLen resd 1
  number resd 1
  newNumberStr resb 80
  newNumberStrLen resd 1

section .text
  global _start
  _start:
  ; prompt for a number using msg1
  push dword msg1
  push dword msg1_len
  call writeString

  push dword dataBuffer
  push dword dataBufferLen
  call readString

  ; after this call, eax has the return value of number of characters read
  dec eax  ; decrement eax to account for the newLine
  mov dword [dataReadLen], eax ; move this value onto the variable

  ; print the msg2 first
  push dword msg2
  push dword msg2_len
  call writeString

    ; call stringToInt routine to convert the string read through keyboard to a number
  push dword [dataReadLen]
  push dword dataBuffer
  call stringToInt

  ; the return value (converted int ) is in eax
  mov dword [number], eax ; move this value into a variable

  ; change the value to know that it works
  add  eax, 10
  mov dword [number], eax

  ; now call the integer to String function so that we can convert the number to
  ; ascii characters as this is the only way to print it in monitor
  push dword newNumberStr
  push dword [number]
  call intToString

  ; returns the length of the string in eax
  mov dword [newNumberStrLen], eax  ; save this value into the variable


  ; call the writeString to print the newNumberStr
  push dword newNumberStr
  push dword [newNumberStrLen]
  call writeString

  ; print a new line
  push dword newLine
  push dword newLine_len
  call writeString

  ; system exit
  mov eax, 1
  mov ebx, 0
  int 80h


  ;; int intToString(int valueToConvert, StringAddress strAddr)
  ;; function: to convert an integer to a string to be output to a screen.
  ;; receives: valueToConvert, an integer to convert to a string (only positive)
  ;;           strAddr, the address at which to place the string
  ;; returns:  the length of the string that was stored at strAddr

  ; convert int to string
  ;initalization part
  intToString:

          push ebp
          mov ebp, esp

          push ebx
          push ecx
          push edx
          push edi

          mov eax, [ebp+8] 	; parameter1 ,valueToConvert
          mov ebx, [ebp+12] 	;parameter2, strAddr to write the output


          mov  edi, 10   ; keep dividing by 10; so move dividend into edi
          xor edx, edx   ; set edx to 0
          xor ecx, ecx   ; set ecx to 0
          ; start the loop
        convertToStr:
          div edi     ; eax has the integer value to convert; So, divide it by 10;
          cmp eax, 0  ;  after division eax has quotient and edx gets the reminder
          jz done     ;  if quotient is 0, we are done
          add edx, '0'  ; otherwise convert the integer value to the corresponding ascii char
                        ; by adding '0' to it.
          push edx     ; push that value onto stack
          inc ecx     ; ecx keeps count of the number of ascii char bytes
          xor edx, edx  ; reset edx
          jmp convertToStr

          done:
          add edx, '0'
          push edx
          inc ecx

          mov eax, ecx ; number of string length to be retuned
          xor edx, edx
          stackLoop:
              pop edx   ; pop the value pushed onto the stack into any reg other than
                        ; eax, ecx and ebx (eax & ecx contains the number of char)
              mov byte [ebx], dl ; ebx has the address of the string (2nd parameter)
                                 ;  move the byte value only
              inc ebx   ;  and then increment the address
              loop stackLoop  ; keep poping the char value until ecx (the count) is zero

          pop edi    ; restore the register values
          pop edx    ; eax has the number of charaters that are written in the strAddr
          pop ecx
          pop ebx

          pop ebp  ; restore ebp value
          ret 8



  ;;; int stringToInt(StringAddress strAddr, int strLen)
  ;; function: takes in a string of chars and converts it from ascii to an integer
  ;; receives: strAddr, the address of the string containing the integer
  ;;           strLen, the length of the string at strAddr
  ;; returns:  the int value of the given string at strAddr with length strLen
stringToInt:
  push ebp
  mov ebp, esp

  push ebx   ; save only those registers whose values need to be
  push ecx    ; restored at the end of the function
  push edx
  push esi
  push edi

  mov edi, [ebp+8] 	;strAddr
	mov esi, [ebp+12] 	;Counter/strLen


  ; convert string to int
  ; initialization part
  xor edx, edx      ; set edx to 0
  xor eax, eax      ; eax has the value of sum . set sum to 0 initially
  mov ebx, 10       ; ebx takes the value of the multiplicant
  mov cl, [edi]     ; take the first byte into cl register
test esi, esi ; test the counter at the beginning once to make sure we have some data
jz allDone
convertOneByteAtATime:
  ; loop part
    mul ebx        ; edx:eax = eax * ebx
                  ; As eax is treated as sum  and ebx = 10, we get sum = sum *10
    mov byte cl, [edi] ; take the next byte in the buffer
    sub cl, '0'  ; convert from ascii char to int value
    add eax, ecx ; sum = sum *10 + value
    inc edi   ; increment the buffer index
    dec esi   ; as esi contains strLen decrement it until it is 0
    jnz convertOneByteAtATime


allDone:
    ; at the end of the loop 'eax' contains the value of the integer
    ; eax has the return value from the function

    pop edi  ; restore all the other registers based on  order
    pop esi  ; in which it got pushed onto the stack at the start
    pop edx  ; of the function call
    pop ecx
    pop ebx

    pop ebp  ; restore ebp value
    ret 8    ; return back to called function



; void writeString(*str, strlen)
writeString:
  push ebp            ; Obligatory pushing of EBP
  mov ebp, esp        ; EBP = ESP

  pushad        ; Save all registers values so we can
                ; restore them later

  mov edx, [ebp+8]    ;  first argument: message length
  mov ecx, [ebp+12]   ; second argument: pointer to message to write
  mov ebx, 1   ; file handle (stdout)
  mov eax, 4   ;system call number (sys_write)
  int 80h  ; call kernel to perform the interrupt

  popad    ; restore all the register values

  pop ebp    ; restore ebp value
  ret 8      ; return back to called function
            ; reclaim the stack space occupied by the two parameters
            ; that were pushed onto stack before this function was called




; int readString(string buffer, int bufLength)
readString:
  push ebp            ; Obligatory pushing of EBP
  mov ebp, esp        ; EBP = ESP

  push ebx          ; Save only relevant registers values so we can
  push ecx          ; restore them later. Note that we are using eax
  push edx          ; to return the number of bytes read

  mov edx, [ebp+8]   ;  first argument: max message length that can be read
  mov ecx, [ebp+12]  ; second argument: pointer to message buffer to write
  mov ebx, 2    ; file handle (stdin) i.e. keyboard
  mov eax, 3    ;system call number (sys_read)
  int 80h       ; call kernel to perform the interrupt

  pop edx     ; restore the register values in the right order
  pop ecx
  pop ebx

  pop ebp        ;restore ebp value
  ret 8       ; return back to called function
              ; reclaim the stack space occupied by the two parameters
              ; that were pushed onto stack before calling this function
