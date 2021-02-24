M = int(input())
N = int(input())
K = int(input())

rows = []
cols = []

for i in range(M+1):
    rows.append(False)

for i in range(N+1):
    cols.append(False)

for i in range(K):
    c = input().split(" ")
    d = c[0]
    num = int(c[1])
    if d == 'R':
        rows[num] = not rows[num]
    else:
        cols[num] = not cols[num]

flippedR = 0
flippedC = 0

for i in range(M+1):
    if rows[i]:
        flippedR += 1

for i in range(N+1):
    if cols[i]:
        flippedC += 1

print(flippedC*M+flippedR*N-2*flippedC*flippedR)