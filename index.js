import {appendFileSync} from 'node:fs';
import {v4 as uuidv4} from 'uuid';
import validator from 'validator';

const generateUniqueID = (firstName, lastName) => {
    // slice is used to get the values from indices 0 to 7 (8 is not included)
    var uid = firstName.toLowerCase()[0] + lastName.toLowerCase() + uuidv4().slice(0,8);
    return uid;
}

const addAccount = ([firstName, lastName, email, age]) => {
    // undefined is equivalent to false so check if any are false
    if (firstName && lastName && email && age){
        // not isEmpty because we want it to not be empty
        if (!validator.isEmpty(firstName) && !validator.isEmpty(lastName) && !validator.isEmpty(email)){
            // ***$***.*** format
            if (validator.isEmail(email)){
                // is at least 18
                if (age >= 18){
                    // backticks make string formatting easier so its used here
                    var user = `${firstName},${lastName},${email},${age},${generateUniqueID(firstName, lastName)}`;
                    
                    // adding \n to file to make adding new entries readable
                    appendFileSync('users.txt', user+'\n');
                    return true;
                }
            }
        }
    }
    return false;
}

export { generateUniqueID, addAccount }