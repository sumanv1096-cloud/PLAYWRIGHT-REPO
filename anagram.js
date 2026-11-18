let s1 = "listen";
let s2 = "silent";

let sorted1 = s1.split("").sort().join("");
let sorted2 = s2.split("").sort().join("");

if (sorted1 === sorted2) {
  console.log("anagram");
} else {
  console.log("not anagram");
}  
