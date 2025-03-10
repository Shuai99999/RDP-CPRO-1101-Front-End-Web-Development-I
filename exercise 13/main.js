let input1 = prompt("Please input the first number: ", [null]);
// console.log(typeof input1);

let input2 = prompt("Please input the second number: ", [null]);
// console.log(input2);

if (typeof input1 === "string" && input2 > 20)
  // console.log("Javascript is the best coding language.");
  alert("Javascript is the best coding language.");

if (typeof input1 === "number" || input2 === null)
  // console.log("Javascript is not the best coding language.");
  alert("Javascript is not the best coding language.");

// input1 = Number(input1);

if (typeof input1 != "number")
  // console.log("Javascript is the most interesting coding language.");
  alert("Javascript is the most interesting coding language.");

// console.log(input2 ?? "input 2 is null.");
alert(input2 ?? "input 2 is null.");
