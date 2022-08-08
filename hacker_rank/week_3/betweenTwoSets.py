

def getTotalX(a, b):
    result = 0
    
    print(max(a))
    print(min(b))
    for i in range(max(a), min(b)+1):
        isFactorMultiple = True
        
        for ele in a:
            print(a)
            if i % ele != 0:
                isFactorMultiple = False
                break
            
        for ele in b:
            if ele % i != 0:
                isFactorMultiple = False
                break
                
        if isFactorMultiple == True:
            result += 1
                
                
    return result



getTotalX([2, 6], [24, 36]);
getTotalX([2, 3], [2, 4]);