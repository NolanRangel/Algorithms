

def twoArrays(k, A, B):
    # Write your code here  
    A = sorted(A)
    B = sorted(B, reverse=True)
    
    for i in range(len(A)):
        if A[i] + B[i] < k:
            return 'NO'
    
    return "YES"


print(twoArrays(10, [2, 1, 3], [7, 8, 9]));
print(twoArrays(5, [1, 2, 2, 1], [3, 3, 3, 4]));