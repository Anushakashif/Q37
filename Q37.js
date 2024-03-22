"use strict";
// 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I 
// love typescript. Make a large shirt and a medium shirt with a default message, and a shirt of any size with a 
// different message.
function makeShirt(size = 'large', text = 'I love typescript') {
    console.log(`you order a ${size}, shirt that says ${text}`);
}
makeShirt();
makeShirt('medium');
//different message
makeShirt('small', 'But First Coffee');
