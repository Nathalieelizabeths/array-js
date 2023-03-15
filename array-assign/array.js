//Find the last element of the following arrays.
 const arr1 = [3,7,34,90,12];
const last=arr1[arr1.length-1];
console.log(last);

 const arr2 = [true, "green", "where",12,56];
 const least=arr2[arr2.length-1];
 console.log(least);

 //Write a JS program that will join the following array elements into a string

 const myPets = ["Cow", "Bird", "Snake", "Dog"];
 let mypets=myPets.join();
 console.log(mypets)

 //Write a JS script to sort the following array items
let numbers = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
let sortedArray=numbers.sort();
console.log(sortedArray)

 //Write a program to remove duplicates from the following array.
//Console the array without duplicates, and console another array that only contains the duplicates

var arr = ["apple", "mango", "apple","orange", "mango", "mango"];
let notDuplicate=arr.filter((orange,index)=>{
    return arr.indexOf(orange)===index;
})
console.log(notDuplicate)
let noDuplicate=arr.filter((orange,index)=>{
    return arr.indexOf(orange)!==index;
})
console.log(noDuplicate);
//Write a JS script to search for the following word in the array.
//"way"
//If the word is present, console it else console "the search word was not found"
let arr5 = ["the", "way", "x", 4];
let find ="way"
if(find=="way"){
    console.log(find)
}
else{
    console.log("the search word was not found")
}
//Write a JS script to sort the following string
let word = "sevink"
console.log(word.split(``).sort().join(``))