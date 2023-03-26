n=int(input())
k = list(map(int, input().split()))
ans = 0
p = k[0]
for i in k:
    if i > p:
        ans+=1
    p = i
print(ans)
