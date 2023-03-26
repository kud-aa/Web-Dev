def min(a):
    m = a[0]
    for i in range(1, len(a)):
        if(m > a[i]):
            m = a[i]
    return m


l = list(map(int, input().split()))
print(min(l))
