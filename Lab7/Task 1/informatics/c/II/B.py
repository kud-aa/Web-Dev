a = int(input())
i = 2
while i <= a:
    if a%i == 0:
        print(i)
        exit()
    i+=1
