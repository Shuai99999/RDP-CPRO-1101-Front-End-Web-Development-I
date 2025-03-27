let oak = {
  height: 75,
  type: "deciduous",
  colours: {
    leaves: "green",
    trunkBark: "grey-brown",
    branchBark: "brown",
  },
};

const oak_shallow = oak;
oak_shallow.colours.leaves = "yellow";

console.log("oak: ");
console.log(oak.colours.leaves);
console.log("");
console.log("oak_shallow: ");
console.log(oak_shallow.colours.leaves);

const oak_deep = Object.assign({}, oak);
oak_deep.colours.leaves = "red";
console.log("");
console.log("oak_deep: ");
console.log(oak_deep.colours.leaves);
