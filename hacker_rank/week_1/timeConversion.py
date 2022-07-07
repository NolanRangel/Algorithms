


def timeConversion(s):
    timeArr = []
    formattedTime = ''
    
    # push method
    for i in range(len(s)):
        timeArr.append(s[i])
        
    # splice method
    if timeArr[8] == 'P' and (timeArr[0] + timeArr[1]) == '12':
        formattedTime = "".join(map(str, timeArr[0:8]))

    if timeArr[8] == 'P' and (timeArr[0] + timeArr[1]) != '12':
        zero = int(timeArr[0])
        one = int(timeArr[1])
        timeArr[0] = zero + 1
        timeArr[1] = one + 2
        #type conversion of a list with mixed data types
        formattedTime = "".join(map(str, timeArr[0:8]))
        
    if timeArr[8] == 'A' and (timeArr[0] + timeArr[1]) == '12':
        zero = int(timeArr[0])
        one = int(timeArr[1])
        timeArr[0] = zero - 1
        timeArr[1] = one - 2
        #type conversion of a list with mixed data types
        formattedTime = "".join(map(str, timeArr[0:8]))
        
    if timeArr[8] == 'A' and (timeArr[0] + timeArr[1]) != '12':
        formattedTime = "".join(map(str, timeArr[0:8]))
        
        
        
    return formattedTime
        
        
        
print(timeConversion('12:01:00PM'))
print(timeConversion('12:01:00AM'))
print(timeConversion('09:37:11AM'))
print(timeConversion('07:05:45PM'))
print(timeConversion('10:05:45PM'))