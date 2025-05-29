//Day 1
//1.Reverse String...

// function reversestring(str){

// let reversestr=""
//  for(i=str.length-1;i>=0;i--){
//        reversestr +=str[i]
//  }
//  return reversestr;

// }

// reversestring('tcsnqt');

//2.Reverse Array...

// let Array=['t','c','s','n','q','t']
// function reverseArray(arr){
//      let reversedarr=[];
//      for (i=arr.length-1;i>=0;i--){
//         reversedarr.push(arr[i])
//      }
//      return reversedarr;
// }
// console.log(reverseArray(Array));

//3.Sum of even numbers in an array
// let array=[10,31,20,32,11];

// function sumEvenNumbers(arr){
//     let total=0;
//     arr.forEach(element => {
//         if(element % 2==0)
//             total+=element
//     });
    
   
//     return total
// }

// console.log(sumEvenNumbers(array))



//4.Return maximum number in an array
// let array=[10,31,20,32,11];

// function findMaximumNumber(arr){
//      let max=arr[0];
//      arr.forEach(num => {
//           if(num>max)
//             max=num
//      });
//     return max;
// }
// console.log(findMaximumNumber(array))


//5.Write a function that takes a string and returns an object

// let str="tcsnqt"

// function convertToObject(str){
//      let output={}
//      for (let i=0;i<str.length;i++){
//           let char=str[i];
//           if(output[char]){
//                output[char]+=1
//           }
//           else{
//                output[char]=1
//           }
//      }
//      return output
// }
// console.log(convertToObject(str))

// //6.find duplicate numbers in array
// let array =[10,31,20,32,11,20,10];


// function findDuplicates(arr){
// let seen={};
// let duplicate=[];

// for (let num of arr){
     
//      if (seen[num]){
          
//           if(!duplicate.includes(num)) duplicate.push(num)
//      }
//      else{
//           seen[num]=true;
//      }
     
     
// }
// console.log(seen);
// return duplicate
// }

// console.log(findDuplicates(array));

//7. Write a function that takes a string and returns an object with character frequencies.

// let str="success";
// let arr=Array.from(str);
// function strfrequency(arr){
//      let output={};
    // type1
// for (let i=0;i<arr.length;i++){
//      if(output[arr[i]]){
//           output[arr[i]] +=1
//      }
//      else{
//           output[arr[i]] =1
//      }
// }

//type 2

// for(let num of arr){
//      (output[num])=(output[num]|| 0)+1;
// }


// return output
// }
// console.log(strfrequency(arr))



//8.find the second largest number

// let array = [10, 5, 40, 25, 30];
// let max=-Infinity;
// let second=--Infinity;

// for (let num of array){
//      if(num>max){
//           second=max;
//           max=num
//      }
//      else if(num>second&& num !==max){
//           second = num;
//      }
// }
// console.log(second)
// console.log(array.sort((a,b)=>b-a)[1])

//9.sum unique numbers 

// let array=[10,5, 40, 25, 30];
// let frequency={}
// array.forEach(element=>{
//          frequency[element]= (frequency[element] || 0) +1
           
// })
// let sum=0;

// for (key in frequency){
//      if(frequency[key]===1){
//          sum+=parseInt(key);
//      }

// }
// console.log(sum)


// 10.find the second largest number
// let arr = [42, 85, 12, 65, 100, 100];
// let max=-Infinity;
// let second=-Infinity;
// let unique=[];
// let seen={};

// for(let i=0;i<arr.length;i++){
//     seen[arr[i]] = (seen[arr[i]] || 0) + 1;
// }
// for(let i=0;i<arr.length;i++){
//     if(seen[arr[i]]===1){
//        unique.push(arr[i]);
//     }
    
// }




// for (num of unique){
//     if(num>max){
//         second=max
//         max=num
//     }
//     else if(num>second && num!==max) 
//     {
//         second=num
//     }
    
// }
// console.log(second)

// //11.Given a paragraph of text, find the word(s) that occur most frequently.

// let text = "Success is not final, failure is not fatal. It is the courage to continue that counts!";
// let words=text.replaceAll('!','').replaceAll(',','').replaceAll('.','').toLowerCase().split(' ');
// let map=new Map();
// let max=-Infinity;
// let val="";

// for(word of words){
//      map.set(word,(map.get(word)|| 0)+1);
// }
// for(let[key,value] of map){
//     if(value>max){ 
//        max=value;
//        val=key;
//     }
// }

// console.log(`most frequent word is :${val} =>${max} times`)

//12.Given a string, find the first character that does not repeat. If all characters repeat, return "None".

let str="aabbcc";
let map=new Map();
let val='';

for (s of str){
    map.set(s,(map.get(s)||0)+1)
}

for (let [key,value]of map){
    if(value===1){
        val=key;
        break;
    }
}

console.log(val!==''?val:'none')