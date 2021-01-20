N = int(input())

# Bottom Left
x1 = 105
y1 = 105
# Top Right
x2 = 0
y2 = 0
for i in range(N):
	cord = input().split(",")
	x = int(cord[0])
	y = int(cord[1])
	# Minimum for bottom left, maximum for top right
	x1 = min(x, x1)
	y1 = min(y, y1)
	x2 = max(x, x2)
	y2 = max(y, y2)

print(f'{x1-1},{y1-1}')
print(f'{x2+1},{y2+1}')