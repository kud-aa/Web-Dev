a = int(input())
i = 2
print(1, end = ' ')
while i <= a:
    test = i
    flag = True
    while test != 1:
        if test%2 == 0:
            test/=2
        else:
            flag = False
            break
    if flag:
        print(i, end = ' ')
    i+= 1
