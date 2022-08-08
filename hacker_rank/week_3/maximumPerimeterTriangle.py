


def maximumPerimeterTriangle(sticks):
    s = sorted(sticks,reverse=True)
    for i in range(len(sticks)-2):
        print(len(sticks)-2)
        if(s[i] < s[i+1] + s[i+2]):
            return (s[i+2],s[i+1],s[i])
    return [-1]


print(maximumPerimeterTriangle([1,2,3]));
print(maximumPerimeterTriangle([1,1,1,2,3,5]));
print(maximumPerimeterTriangle([1,1,1,3,3]));
print(maximumPerimeterTriangle([9, 2015, 5294, 58768, 285, 477, 72, 13867, 97, 22445, 48, 36318, 764, 8573, 183, 3270, 81, 1251, 59, 95094]));