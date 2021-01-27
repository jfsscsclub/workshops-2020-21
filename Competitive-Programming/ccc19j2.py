L = int(input())

for i in range(L):
	line = input().split(" ")
	N = int(line[0])
	x = line[1]
	for j in range(N):
		print(x, end="")
	print("")