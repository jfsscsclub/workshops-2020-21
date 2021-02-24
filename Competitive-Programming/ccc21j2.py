N = int(input())

winner = ""
price = 0

for i in range(N):
    name = input()
    bid = int(input())
    if bid > price:
        winner = name
        price = bid

print(winner)