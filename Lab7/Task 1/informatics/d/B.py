n=int(input())
k = list(map(int, input().split()))
for i in k:
    if i%2 == 0:
        print(i, end = ' ')
