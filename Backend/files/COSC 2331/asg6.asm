;asg6 - amanda lewis
;cosc 2331-01 spr 2018

section .data
    number dw 0x000F  ;our original number
    newLine db 10

section .bss
    strOut resb 16    ;string for holding binary number

section .text
global _start:
_start:

    mov ecx, 16       ;count variable for 16 bits
    mov ax, 0x8000    ;mask
    mov dx, [number]  ;starting w/ first bit of number
    mov ebx, strOut   ;use ebx to hold strOut

testLoop:
    test dx, ax       ;test dx with mask in ax
    jz addZero        ;jump zero to add a zero
    jnz addOne        ;jump not zero to add a one
resume:
    shr ax, 1         ;mask=mask/2
    dec ecx           ;count=count-1
    jz finish         ;jump zero to the ending
    jnz testLoop      ;sys-writes and exit

addZero:
    mov byte [ebx], '0'       ;put a 0 in strOut
    inc ebx            ;increment to next char
    jmp resume        ;resume loop

addOne:
    mov byte [ebx], '1'       ;put a 1 in strOut
    inc ebx            ;increment to next char
    jmp resume        ;resume loop

finish:
    mov eax, 4        ;sys-write of strOut
    mov ebx, 1
    mov ecx, strOut
    mov edx, 16
    int 80h

    mov eax, 4        ;add a newLine
    mov ebx, 1
    mov ecx, newLine
    mov edx, 1
    int 80h

    mov eax, 1        ;sys-exit
    mov ebx, 0
    int 80h
