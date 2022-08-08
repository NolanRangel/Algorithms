def findZigZagSequence(a, n):
    a.sort()
    mid = int(n/2)  # edited    mid = int((n + 1)/2
    a[mid], a[n-1] = a[n-1], a[mid]

    st = mid + 1
    ed = n - 2  # edited    ed = n - 1
    print(a)
    print(mid)
    print(st)
    print(ed)
    while(st <= ed):
        a[st], a[ed] = a[ed], a[st]
        st = st + 1
        ed = ed - 1 # edited    ed = ed + 1

    for i in range (n):
        if i == n-1:
            print(a[i])
        else:
            print(a[i], end = ' ')
    return


print(findZigZagSequence([2,3,5,1,4], 5))