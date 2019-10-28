; asg7_alewis3.asm
; Asg #7
; COSC 2331-01

section .data
  array dd 5,6,7,8,9,2,1,0,2,4,8,6,3,9,7
  arrayLen equ 15
  WORD_SIZE equ 4
  newline db 10 ; Define a newline character
  line1 db "All elements of the array: "
  line1_len equ $ - line1
  line2 db "Values at even indices: "
  line2_len equ $ - line2
  line3 db "Values at odd indices: "
  line3_len equ $ - line3

section .bss
temp resd 1   ;variable to hold a dword

section .text
global _start:
_start:

call printWholeArray
call printEven
call printOdd

mov ebx, 0
mov eax, 1
int 80h

;void printWholeArray will put the whole array into
;the uninitialized variable temp
printWholeArray:

;print first string
  push line1
  push line1_len
  call writeString

;initialization
  mov eax, array    ;array location
  mov ebx, 0        ;index
  mov ecx, arrayLen ;array length

arrayLoop:

  mov BYTE dl, [eax + ebx * WORD_SIZE];
  inc ebx
  add dl, '0'
  mov [temp], dl

  push temp
  push dword 1
  call writeString

  loop arrayLoop

  push newline
  push 1
  call writeString

  ret ;return for printWholeArray

;void printEven will put all the even indices of the array
;into the uninitialized variable even
printEven:

;print first string
  push line2
  push line2_len
  call writeString

;initialization
  mov eax, array    ;array location
  mov ebx, 0        ;index
  mov ecx, arrayLen ;array length

evenLoop:

  mov BYTE dl, [eax + ebx * WORD_SIZE];
  add ebx, 2
  add dl, '0'
  mov [temp], dl

  push temp
  push dword 1
  call writeString

  cmp ebx, ecx
  jle evenLoop

  push newline
  push 1
  call writeString

  ret ;return for printEven

  ;void printOdd will put all the odd indices of the array
  ;into the uninitialized variable odd
  printOdd:

  ;print first string
    push line3
    push line3_len
    call writeString

  ;initialization
    mov eax, array    ;array location
    mov ebx, 1        ;index starts at 1
    mov ecx, arrayLen ;array length

oddLoop:

    mov BYTE dl, [eax + ebx * WORD_SIZE];
    add ebx, 2
    add dl, '0'
    mov [temp], dl

    push temp
    push dword 1
    call writeString

    cmp ebx, ecx
    jle oddLoop

    push newline
    push 1
    call writeString

    ret ;return for printOdd

;;; void writeString(String str, int strLen)
;; function:  outputs characters at str (strLen of them) to stdout
;; recieves: str, a String address, at which a string of length, strLen, is stored.
;; returns:  nothing.
writeString:
push ebp   ; sets basepointer
mov ebp, esp

pushad

mov edx, [ebp+8]
mov ecx, [ebp+12]
mov eax, 4
mov ebx, 1
int 80h

popad

pop ebp ; returns ebp to previous point.
ret 8
