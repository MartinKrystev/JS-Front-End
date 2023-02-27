function listOfNames(arr) {
   return arr
     .sort((a, b) => a.localeCompare(b))
     .map((el, index) => `${index + 1}.${el}`)
     .join('\n');


}
// console.log(
//     listOfNames(["John", "Bob", "Christina", "Ema"])
// )
