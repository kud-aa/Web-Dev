def XOR(x, y):
    return x!=y

a = list(map(int, input().split()))
print(1 if XOR(a[0], a[1]) else 0)
