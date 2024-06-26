// GLOBALS __dirname, __filename, module,process,require
// console.log(process)

// const zolo = "zoro"
// const ruffy = "luffy"

// const welcome =(name)=>{
//     // console.log("HAVE YOU MET", name)
//     console.log(`HAVE YOU MET ${name}`)
// }

// welcome(zolo)
// welcome(ruffy)
// welcome("new_one")

const _ = require('lodash')

const items = [1,[2,[3,[5]]]]
const flattenItems = _.flattenDeep(items)
console.log(flattenItems)