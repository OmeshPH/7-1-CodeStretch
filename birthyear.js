let birthYear = parseInt(prompt("Enter your year of birth:"));

console.log("Birth year entered:", birthYear);

if (birthYear % 2 === 0 && birthYear % 3 === 0) {
  alert("booyakasha");
  console.log("Result: booyakasha (divisible by 2 and 3)");
} else if (birthYear % 2 === 0) {
  alert("cowabunga");
  console.log("Result: cowabunga (divisible by 2)");
} else if (birthYear % 3 === 0) {
  alert("radical,Radical,radical");
  console.log("Result: radical,Radical,radical (divisible by 3)");
} else {
  alert("Not a special year");
  console.log("Result: Not a special year");
}