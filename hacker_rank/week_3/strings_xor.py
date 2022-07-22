

# Debug challenge
# first function is bugged
# second is solved


# 1
# def strings_xor(s, t):
#     res = ""
#     for i in range(len(s)):
#         if s[i] = t[i]:
#             res = '0';
#         else:
#             res = '1';

#     return res

# s = input()
# t = input()
# print(strings_xor(s, t))





# 2
def strings_xor(s, t):
    res = ""
    for i in range(len(s)):
        if s[i] == t[i]:
            res += '0';
        else:
            res += '1';

    return res

s = input()
t = input()
print(strings_xor(s, t))