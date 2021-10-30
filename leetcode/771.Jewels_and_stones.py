j  = types of stoner == jewels
s = current stones I have , for each character here is consider to be type of stones 
Question : how many  of the sotne you have are also jewels 

You're given

example : 
Input -> j = 'aA'; S = "aAAbbbb" 
expected output -> 3

Input -> j = "z", s = "ZZ"
Output-> 0 



O(n)

class JewelsAndStone: 
    def Solution(self,j,s):
        count  - 0 
        for a in s : 
            for b in j : 
                if a == s :
                    count = count +1
            
