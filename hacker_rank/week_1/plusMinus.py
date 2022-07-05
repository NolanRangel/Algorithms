from decimal import *


# Decimal module uses getcontext().prec to set the amount of zeroes past the decimal. 
# function does not print out expected output but passed the hackerrank challenge


def plusMinus(arr):
    getcontext().prec = 6
    
    positive = 0
    negative = 0
    zero = 0
    length = len(arr)
    
    for i in range(len(arr)):
        if arr[i] == 0:
            zero += 1
        if arr[i] >= 1:
            positive += 1
        if arr[i] <= -1:
            negative += 1
            
    
    positiveValue = Decimal(positive) / Decimal(length)
    print(positiveValue)
    negativeValue = Decimal(negative) / Decimal(length)
    print(negativeValue)
    zeroValue = Decimal(zero) / Decimal(length)
    print(zeroValue)
    

    
    
plusMinus([1, 1, 0, -1, -1])
print('********')
plusMinus([-4, 3, -9, 0, 4, 1])