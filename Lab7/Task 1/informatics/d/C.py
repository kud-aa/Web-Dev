n=int(input())
k = list(map(int, input().split()))
ans = 0
for i in k:
    if i > 0:
        ans+=1
print(ans)
