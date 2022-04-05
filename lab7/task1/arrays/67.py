n = int(input())
cnt = 0
arr = list(map(int, input().split()))
for i in range(1, n - 1):
    if(arr[i] < 0 and arr[i + 1] < 0) or (arr[i] > 0 and arr[i + 1] > 0):
        cnt += 1
if cnt > 0:
    print('YES')
else:
    print('NO')