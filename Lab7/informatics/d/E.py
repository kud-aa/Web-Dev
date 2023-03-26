n=int(input())
k = list(map(int, input().split()))
for i in range(1, len(k)):
    if k[i] * k[i-1] > 0:
        print('YES')
        exit()
    if k[i] >= 0 and k[i-1] >= 0:
        print('YES')
        exit()
print('NO')
