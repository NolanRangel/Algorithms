import math

def gradingStudents(grades):
    gradeBook = []
    
    for g in grades:
        if g < 38:
            gradeBook.append(g)
        elif g >= 38 and (g % 5) >= 3:
            gradeBook.append(math.ceil(g / 5) * 5)
        else:
            gradeBook.append(g)
            
            
    return gradeBook


# def gradingStudents(grades):
#     return [i + (i >= 35) * (5 - i % 5 < 3) * (5 - i % 5) for i in grades] 



print(gradingStudents([38, 84, 29, 57]));
print(gradingStudents([73, 67, 38, 33]));