const add3 = (a: number, b: number) => a + b;
console.warn(add3(3, 545));

const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hikings"];
activeHobbies.push(...hobbies);

for (const hobby of activeHobbies) {
  console.log("Hobby : " + hobby.toLowerCase());
}

const person10 = { name: "Max", age: 30 };
const copiedPerson = { ...person10 };

const add88 = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add88(34, 234, 3.4, 3);
console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);
