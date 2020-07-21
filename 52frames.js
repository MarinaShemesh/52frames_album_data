
//throw this code in the console of https://52frames.com/albums

///this gets the number of photos in the album:

let numData = [];
let getData = function () {

    let elements = document.getElementsByClassName("sub_photo_in-live");


    for (let i = 0; i < elements.length; i++)
        numData.push(elements[i].innerHTML);
    //console.log(data);

}

getData()

numData


///this the text values


let weekDataArray = [];

let cleanText = function () {

    let weekDataEntries = [];
    let week = document.getElementsByClassName("week_in-live");

    for (let i = 0; i < week.length; i++) {
        weekDataEntries.push(week[i].innerText);

    }

    for (let j = 0; j < weekDataEntries.length; j++) {
        weekDataArray.push(weekDataEntries[j].replace("\n", ""));

    }
}

cleanText()


//in the console do the following:
//1.Right-click an numData in Chrome's console and select Store as Global Variable from the context menu. It will return something like temp1 as the variable name.

//2. Runc cleanNum() to clean the data


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++

///fist I get rid of the word "photos"
///then I get rid of the empty spaces




let numEntries = [];


let cleanNum = function () {
    let cleanArray = function () {
        let newString = [];
        for (let i = 0; i < temp1.length; i++) {
            newString.push(temp1[i].replace("photos", ""));
        }
        return newString;

    }

    for (let j = 0; j < temp1.length; j++) {
        numEntries.push(cleanArray()[j].trim());
    }


}

cleanNum()

/// then I turn the string numbers into real numbers


/// this get the final data in one array when I push the push the two arrays into an object


let finalArray = function () {

    let cleanNumEntries = numEntries.map(Number);

    const result2 = {};
    weekDataArray.forEach((key, i) => result2[key] = cleanNumEntries[i]);
    console.log(result2);
}

finalArray()



{
    "Week 28:Edited by Someone Else": 1588,
    "Week 27:Complementary Colors": 1669,
    "Week 26:Flashlight": 1599,
    "Week 25:Make a Background": 1655,
    "Week 24:Hands": 1732,
    "Week 23:Dancing": 1674,
    "Week 22:50 Feet from Home": 1907,
    "Week 21:Symmetry": 1831,
    "Week 20:Not What You See": 1783,
    "Week 19:Roll of Film": 1994,
    "Week 18:Low Key": 1981,
    "Week 17:Soft": 2064,
    "Week 16:Fast Shutter Speed": 1973,
    "Week 15:A Different Angle": 2032,
    "Week 14:Curves": 2096,
    "Week 13:Line From A Song": 1985,
    "Week 12:Books": 2053,
    "Week 11:Triangular Composition": 2090,
    "Week 10:Abandoned": 2250,
    "Week 9:Extreme Contrast": 2297,
    "Week 8:Pairs": 2342,
    "Week 7:Intentional Color Palette": 2399,
    "Week 6:Rule of Thirds": 2495,
    "Week 5:Shoot from Above": 2507,
    "Week 4:Fill the Frame": 2610,
    "Week 3:Wabi-Sabi": 2532,
    "Week 2:Leading Lines": 2663,
    "Week 1:Self-Portrait": 2513
  }

  //in the console do the following:
//1.Right-click an result in Chrome's console and select Store as Global Variable from the context menu. It will return something like temp2 as the variable name.
//2.type copy(temp2) on the console
//3. Paste in the fianl52framesWeeklyData.js file
//