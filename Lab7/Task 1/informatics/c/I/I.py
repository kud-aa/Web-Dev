a = int(input())
ans = 0
for i in range(1, int(a**0.5)+1):
    if a%i == 0:
        ans+=2
        if(i*i == a):
            ans-=1
print(ans)
