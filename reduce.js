  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => acc + curr); // acc: acculumator & curr: currentValue
console.log(sum); // 0+1 =1 1+2= 3 3+3=6 .... total of all number added up is 10

// Reduce method takes 2 parameters, the function and the initial value. If initial value
// isn't specified then it automatically takes the first value in the array as the first accumulator(!).
// GOOD PRACTICE: always give initial value!



const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property
let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalExperience);

// Grouping by a property, and totaling it too
let experienceByProfession = teamMembers.reduce((acc, curr) => { //curr is first member in the array as you start.
      let key = curr.profession;
      if (!acc[key]) { // if the key doesn't yet exist in the new object.
        acc[key] = curr.yrsExperience; // the key (profession) will be added and value set to years experience.
      } else {
        acc[key] += curr.yrsExperience; // if key (profession) already exist then add experience to total.
      }
      return acc;
    }, {}); //The type of result you want will determine the initial value you set! In this case an empty object.

console.log(experienceByProfession);