


def matchingStrings(strings, queries):
    map = {}
    output = []
    
    for s in strings:
        if s in map:
            map[s] += 1
        else:
            map[s] = 1
            
    for q in queries:
        if q in map:
            output.append(map[q])
        else:
            output.append(0)
            
    return output



print(matchingStrings(['ab', 'ab', 'abc'], ['ab', 'abc', 'bc']));
print(matchingStrings(['aba', 'baba', 'aba', 'xzxb'], ['aba', 'xzxb', 'ab']));
print(matchingStrings(['def', 'de', 'fgh'], ['de', 'lmh', 'fgh']));