def array_front9(nums):
    for i in xrange(4):
        if i < len(nums) and nums[i] == 9:
            return True
                  
    return False
