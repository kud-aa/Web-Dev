a = int(input())
flag = True
while a != 0:
    if a%10 == 0 and flag:
        a//=10
        continue
    flag = False
    print(a%10, end='')
    a//=10
