


def breakingRecords(scores):
    min = scores[0]
    max = scores[0]
    minCount = 0
    maxCount = 0
    
    
    for i in range(len(scores)):
        if scores[i] < min:
            min = scores[i]
            minCount += 1
        elif scores[i] > max:
            max = scores[i]
            maxCount += 1
            
            
    return [maxCount, minCount]
        
        
        
print(breakingRecords([12, 24, 10, 24]))
print(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]))
print(breakingRecords([100, 45, 41, 60, 17, 41, 45, 43, 100, 40, 89, 92, 34, 6, 64, 7, 37, 81, 32, 50]))
print(breakingRecords([100000, 9, 3, 10, 2, 20]))