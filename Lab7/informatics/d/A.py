n=int(input())
k = list(map(int, input().split()))
flag = True
for i in k:
    if flag:
        print(i, end = ' ')
    flag = flag != True
