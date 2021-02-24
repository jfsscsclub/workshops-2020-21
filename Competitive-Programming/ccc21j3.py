i = ""
prev = ""

while True:
    i = input()
    if i == "99999":
        break
    s = int(i[0])+int(i[1])
    if s == 0:
        print(f'{prev} {i[2:]}')
    elif s%2 == 1:
        print(f'left {i[2:]}')
        prev = "left"
    else:
        print(f'right {i[2:]}')
        prev = "right"