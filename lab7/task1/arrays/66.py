k = 0
n = int(input())
a = list(map(int, input().split()))
for i in range(1, len(a)):
    if a[i] > a[i - 1]:
        k += 1
print(k)