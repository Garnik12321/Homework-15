// function countOddAndEven(arr) {
//     const oddNumberArr = [];
//     const evenNumberArr = [];
//     for (let i = 0; i < arr.length; i++){ 
//         if (arr[i] % 2 == 0) {
//             evenNumberArr.push(arr[i]);
//         }
//         else {
//             oddNumberArr.push(arr[i]);
//         }
//     }
//     return `odd : ${oddNumberArr.length}, even ${evenNumberArr.length}`
// }



const people = [
    {
    name: "tim",
    address: {
    city: "paris",
    },
    age: 35,
    },

    {
    name: "john",
    address: {
    city: "tbilisi",
    },
    age: 35,
    },

    {
    name: "alex",
    address: {
    city: "new york",
    },
    age: 16,
    },
    
    {
    name: "martha",
    address: {
    city: "leco",
    },
    age: 22,
    },
    
    {
    name: "tom",
    address: {
    city: "como",
    },
    age: 38,
    },
    
    {
    name: "jack",
    address: {
    city: "moscow",
    },
    age: 19,
    },
    
    {
    name: "bob",
    address: {
    city: "bern",
    },
    age: 43,
    }
];

function olderPeople (object) {
    const olderPeopleArr = [];
    for (let i = 0; i < object.length; i++){
        if (object[i].age >= 21){
            olderPeopleArr.push(object[i]);
        }
    }
    return olderPeopleArr;
}

console.log(olderPeople(people));