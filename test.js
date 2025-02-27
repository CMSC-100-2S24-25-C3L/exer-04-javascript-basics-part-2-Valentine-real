import { generateUniqueID, addAccount } from './index.js'

console.log(addAccount(["Alan", "Turing", "aturing@w3c.com", 58]));
console.log(addAccount(["Val", "Alamillo", "aaa@bbb.com", 20]));
console.log(addAccount(["Alan", "Turing", "aturingw3c.com", 58]));
console.log(addAccount(["Val", "Alamillo", "aaa@bbb.com"]));