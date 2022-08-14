
def pickingNumbers(a):  
    max_len = 0
    counters = [0]*101
    for i in range(len(a)):
        counters[a[i]] += 1
    
    for j in range(len(counters)-1):
        length = counters[j+1] + counters[j]
        if length > max_len: max_len = length
        
    return(max_len)


print(pickingNumbers([1, 1, 2, 2, 4, 4, 5, 5, 5]));
print(pickingNumbers([1, 2, 2, 3, 1, 2]));
print(pickingNumbers([4, 6, 5, 3, 3, 1]));