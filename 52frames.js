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


let temp_1 = [
    "\n                                        1587 photos\n                                    ",
    "\n                                        1670 photos\n                                    ",
    "\n                                        1600 photos\n                                    ",
    "\n                                        1656 photos\n                                    ",
    "\n                                        1733 photos\n                                    ",
    "\n                                        1675 photos\n                                    ",
    "\n                                        1909 photos\n                                    ",
    "\n                                        1833 photos\n                                    ",
    "\n                                        1785 photos\n                                    ",
    "\n                                        1996 photos\n                                    ",
    "\n                                        1983 photos\n                                    ",
    "\n                                        2066 photos\n                                    ",
    "\n                                        1975 photos\n                                    ",
    "\n                                        2034 photos\n                                    ",
    "\n                                        2098 photos\n                                    ",
    "\n                                        1987 photos\n                                    ",
    "\n                                        2055 photos\n                                    ",
    "\n                                        2092 photos\n                                    ",
    "\n                                        2251 photos\n                                    ",
    "\n                                        2299 photos\n                                    ",
    "\n                                        2344 photos\n                                    ",
    "\n                                        2401 photos\n                                    ",
    "\n                                        2496 photos\n                                    ",
    "\n                                        2509 photos\n                                    ",
    "\n                                        2612 photos\n                                    ",
    "\n                                        2534 photos\n                                    ",
    "\n                                        2665 photos\n                                    ",
    "\n                                        2515 photos\n                                    "
];




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


