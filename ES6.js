const pets = [
  { name: "Max", type: "dog", bornOn: 2018 },
  { name: "Angel", type: "cat", bornOn: 2015 },
  { name: "Jasper", type: "dog", bornOn: 2016 }
];
let petsWithAge = pets.map((pet) => {
const age = Date().getFullYear() - pet.bornOn;
  return {...pet, age};
})


let dogs = pets.filter((pet)=> pet.type==="dog")


  let jasper = petsWithAge.find((pet)=> pet.name === "Jasper");
  
console.log(`Jasper is ${jasper.age} years old`);