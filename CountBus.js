//Inirialize the count as 0
// Listen for clicks on the increment button
//Increment the count variable when the button is clicked
//change the count-el in the HTML to reflect the new count

var count = 0;

// function increment() {
//     count++;
//     console.log("The count is " + count);
// }

//Another way to do this is
var countIncrement = document.getElementById("count-el");

console.log(countIncrement);

function increment() {
    count++;
    countIncrement.innerText = count;
}

var getSaveEl = document.getElementById("save-el");

var c = 0;

//To save the count
function save() {
    //2.Create a variable that contains both the count and the dash separator, i.e. "12 - "
    //3.Render the variable in the save-el using innerText
    //NB: Make sure to not delete the existing content of the paragraph
    c++;
    if (c == 1) {
        getSaveEl.innerText += " " + count;
    } else {
        getSaveEl.innerText += " - " + count;
    }

    countIncrement.textContent = 0;

    count = 0;

}