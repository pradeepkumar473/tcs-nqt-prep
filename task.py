##Day 1
##Reverse string...

# def reverse_string(s):
#     result=''
#     for i in range(len(s)-1,-1,-1):
#         result +=s[i]
#     return result

# print(reverse_string("tcsnqt"))

# ##2.Reverse Array...
# Array=['t','c','s','n','q','t']


# def reverse_arr(arr):
#     return arr[::-1]

# print(reverse_arr(Array))
    
#3.sum even number in an array
# array=[10,31,20,32,11]

# def sumEvenNumbers(arr):
   
#     #type 1
#     # total=0
   

#     # for i in range(len(arr)):
#     #     if arr[i] % 2==0:
#     #         total+=arr[i]
#     # return total


#    #type 2
#     # return sum(num for num in arr if arr % 2==0)

# print(sumEvenNumbers(array))

#4.find maxmum number in array
# array=[10,31,20,32,11]

# def findMaxNum(array):
#     max=array[0]
#     for num in array:
#         if num >max:
#           max=num
#     return max

# print(findMaxNum(array))

#5.Write a function that takes a string and returns an object
str ='tcsnqt'

def convertToObject(str):
    output={}
    for char in str:
        if char in output:
            output[char]+=1
        else:
            output[char]=1
    return output

print(convertToObject(str))