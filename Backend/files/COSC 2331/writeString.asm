; hello world program
section .data
  msg1 db 'hello world; passing two parameters using stack!!', 10
  msg1_len equ $-msg1
  msg2 db 'it is real fun learning assembly language', 10
  msg2_len equ $-msg2

section .bss

section .text
  global _start
  _start:

  push msg1
  push msg1_len
  call writeString

  push msg2
  push msg2_len
  call writeString

  mov eax, 1
  mov ebx, 0
  int 80h

  ;;; void writeString(String str, int strLen)
  ;; function:  outputs characters at str (strLen of them) to stdout
  ;; recieves: str, a String address, at which a string of length, strLen, is stored.
  ;; returns:  nothing.
writeString:
  push ebp   ; sets basepointer
  mov ebp, esp

  mov edx, [ebp+8]
  mov ecx, [ebp+12]
  mov eax, 4
  mov ebx, 1
  int 80h

  pop ebp ; returns ebp to previous point.
  ret 8
