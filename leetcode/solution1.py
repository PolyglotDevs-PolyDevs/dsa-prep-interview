j = "aA"
s = "aAAbbbbbb"
count = 0
def jewels_and_stones():
    for  c  in  j: 
        if c in s : 
            count = count +1
    return count 

jewels_and_stones()
print(f"the proper amount is {count}")
