//1. storing the values within the array
let fruit:string[]=["apple", "mango","banana","papaya"]
let prices: number[]=[100,200,300]
let fruitAndPrices: (string|number)[]=["apple",200,"papaya",100,"banana",200]

//2. Accessing the values from the array
console.log(`fruit array = ${fruit}`)
console.log(`prices array = ${prices}`)
console.log(`fruits and prices are= ${fruitAndPrices}`)
console.log(fruit[1])
console.log(prices[0])
console.log(fruitAndPrices[3])


//3. add additional value to the existing array at the end.
fruit.push("kiwi")
console.log(fruit)

//Remove the last value from the array
fruit.pop();
console.log(fruit)

////5.Add additional value to the existing array at the begining. 
fruit.unshift("kiwi");
console.log(fruit)

//6. Remove the begining value from the array.
fruit.shift();
console.log(fruit)

//7. Adding additional value to the existing array at a specific index by deleting existing values 
fruit.splice(1,0,"abc1")
console.log(fruit)

//8. Create a new array by extracting the values from the existing array. 
let veggies:string[]=["carrot","onion","brinjal","potato"]
let availableVeg:string[]=veggies.slice(1,3) //onion,brinjal
console.log(availableVeg)

//9. Create a new array by concatenating two or more arrays together. 
let veggiAndAvlVeggi:string[]= veggies.concat(availableVeg)
console.log(veggiAndAvlVeggi)

//10. Find the index of a specific value within the array. 
console.log(veggies.indexOf("mannn"))
console.log(veggies.indexOf("carrot"))

//11. Iterate all the values from the array. 
for (let i of veggies)
{
    console.log(i)
}
 console.log("###################3333");

let arry1:string[]=["1","2","3","4","5"]
console.log(arry1)


//12. Reverse the values within the array. 
 arry1.reverse();
 console.log(arry1);


//13. Sort the values within the array.
arry1.sort();
console.log(arry1)