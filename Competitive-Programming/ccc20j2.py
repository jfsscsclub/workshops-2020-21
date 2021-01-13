P = int(input())
N = int(input())
R = int(input())

total = 0
days = 0

if R == 1:
    print(int(P/N))
else: 
    # Keep counting until greater than P
    while total <= P:
        total += N
        N *= R
        days += 1

    print(days-1)