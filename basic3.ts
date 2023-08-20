//tuples

const person3 = {
    name: "Faruk2",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: [2, "test"],
  };
  
  console.log(person3.role[0] + " : " + person3.role[1]);
  
  person3.role.push("admin");
  person3.role[1] = 10;
  
  enum Role {
    ADMIN,
    READ_ONLY = 3,
    AUTHOR = "author",
  }
  const person4 = {
    name: "Faruk2",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN,
  };
  
  if (person4.role === Role.ADMIN) {
    console.log("it is admin");
  }
  //using any
  let favouriteActivities: any;
  favouriteActivities = ["Sports", 3, true];
  console.log(favouriteActivities[1]);
  
  
  //union types
  function combine(input1: number | string, input2: number | string) {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number") {
      result = input1 + input2;
    } else {
      result = input1.toString() + input2.toString();
    }
    return result;
  }
  
  const combinedAges = combine(30, 26);
  console.log(combinedAges);
  
  const combinedNames = combine("Max", "Anna");
  console.log(combinedNames);
  
  //literal types
  
  type CardinalDirection =
      | "North"
      | "East"
      | "South"
      | "West";
  
  function move(distance: number, direction: CardinalDirection) {
      // ...
  }
  
  move(1,"North"); // Okay
  //move(1,"Nurth"); // Error!