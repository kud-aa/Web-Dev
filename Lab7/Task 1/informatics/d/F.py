n=int(input())
ans = 0
k = list(map(int, input().split()))
for i in range(2, len(k)):
    if k[i-1] > k[i] and k[i-1] > k[i-2]:
        ans += 1
print(ans)
