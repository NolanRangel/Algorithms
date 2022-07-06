


def miniMaxSum(arr):
    
    min = arr[0]
    max = arr[0]
    accMin = 0
    accMax = 0
    
    for i in range(len(arr)):
        if arr[i] < min:
            min = arr[i]
        if arr[i] > max:
            max = arr[i]
            
            
    for j in range(len(arr)):
        if arr[j] < max:
            accMin += arr[j]
        if arr[j] > min:
            accMax += arr[j]
        
    for y in range(len(arr) - 1):
        if arr[y] == arr[y + 1]:
            accMin += arr[y]
            accMax += arr[y]
            
            
    print(accMin, accMax)
    
    
miniMaxSum([1, 3, 5, 7, 9])
miniMaxSum([1, 2, 3, 4, 5])
miniMaxSum([7, 69, 2, 221, 8974])
miniMaxSum([5, 5, 5, 5, 5])