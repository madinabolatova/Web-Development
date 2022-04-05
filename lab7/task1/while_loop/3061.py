n = int(input())
k = 2
s = 1
if n == 1:
    print('0')
else:
    while k < n:
        k *= 2
        s += 1
    print(s)