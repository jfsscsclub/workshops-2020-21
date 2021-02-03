T = input()
S = input()

found = False

for i in range(len(S)):
    if found:
        break
    for j in range(len(T)-len(S)+1):
        sub = T[j:j+len(S)]
        if S == sub:
            found = True
            break
    S = S[1:] + S[0]

if found:
    print("yes")
else:
    print("no")