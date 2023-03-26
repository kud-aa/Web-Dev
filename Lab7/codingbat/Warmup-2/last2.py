def last2(str):
    if len(str) < 2:
        return 0
          
    count = 0
    end = str[len(str)-2:]
                
    for i in xrange(len(str) - 2):
        if str[i:i+2] == end:
            count += 1
                                  
    return count
