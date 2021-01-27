N = int(input())

for i in range(N):
	S = input()
	S += " "
	cnt = 1
	for j in range(len(S)-1):
		if S[j+1] == S[j]:
			cnt += 1
		else:
			print(str(cnt) + " " + S[j] + " ", end="")
			cnt = 1
	print("")