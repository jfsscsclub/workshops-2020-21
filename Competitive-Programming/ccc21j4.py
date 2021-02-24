S = input()

L = 0
M = 0

not_L_in_L = 0
not_M_in_M = 0
M_in_L = 0
L_in_M = 0

for i in range(len(S)):
    if S[i] == 'L':
        L += 1
    if S[i] == 'M':
        M += 1

for i in range(L):
    if S[i] != 'L':
        not_L_in_L += 1
    if S[i] == 'M':
        M_in_L += 1

for i in range(L, L+M):
    if S[i] != 'M':
        not_M_in_M += 1
    if S[i] == 'L':
        L_in_M += 1

print(not_M_in_M+not_L_in_L-min(M_in_L, L_in_M))