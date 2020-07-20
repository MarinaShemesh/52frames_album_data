//old

///
// let elements = document.getElementsByClassName(sub_photo_in - live)[0].innerHTML;
// console.log(elements);


// new
//throw this code in the console of https://52frames.com/albums




let elements = document.getElementsByClassName("sub_photo_in-live");
let data = [];

for (let i = 0; i < elements.length; ++i)
    data.push(elements[i].innerHTML);
console.log(data);


//in the console do the following:
//1.Right-click an object in Chrome's console and select Store as Global Variable from the context menu. It will return something like temp1 as the variable name.
//2.Now write copy (temp1) in the console
//3. Control + V where you need to data
//4. Run useArray () to clean the data


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
let useArray = function () {
    let cleanArray = function () {
        let newString = [];
        for (let i = 0; i < temp1.length; i++) {
            newString.push(temp1[i].replace("photos", ""));
        }
        return newString;

    }

    let useString = [];
    for (let j = 0; j < temp1.length; j++) {
        useString.push(cleanArray()[j].trim());
    }
    return useString.map(Number);

}

useArray()