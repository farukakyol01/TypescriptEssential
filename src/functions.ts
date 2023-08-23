function add(n1: number, n2: number): number {
    return n1 + n2;
  }
  
  function printResult(num: number): void {
    console.log("Result : " + num);
  }
  
  function printResult1(num: number): undefined {
    console.log("Result : " + num);
    return;
  }
  let combineValues: (a: number, b: number) => number;
  combineValues = add;
  
  //let combineValues: Function;
  //////combineValues = add;
  
  printResult(combineValues(1, 2));
  
  function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
  }
  
  addAndHandle(2, 6, printResult);
  
  addAndHandle(10, 20, (result) => {
    console.log("Result : " + result);
  });
  
  let userInput: unknown;
  let userName: string;
  
  userInput = 5;
  userInput = "Max";
  
  if (typeof userInput === "string") {
    userName = userInput;
  }
  
  function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code };
  }
  generateError('An error occured!',500);