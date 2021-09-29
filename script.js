// selectors
var saveButtonEl = $(".saveBtn");
var textAreaEl = $(".text");
var currentDay = $("#currentDay");

// global variables
var allNotes = [];
var storage;

// select what to run when page first loads
function pageLoad(){
    currentTime();
    savedText();
}

// current time
function currentTime(){
    var now = moment();
    currentDay.text(now.format("MMMM DD, YYYY"));
    
    /* aChristmasCarol(); */
}

// past, present, future
function aChristmasCarol(){
    var fakeTime = "Tue Sep 28 2021 " + "09:00:00" + " GMT-0400";
    var timeObj = moment(fakeTime);
    console.log(timeObj);

    $(".container")
}

// saveBtn click equals text saved to local storage
// saved events persist
saveButtonEl.on("click", function () {
    // save to local storage
    /* var text = textAreaEl.val();
    localStorage.setItem('text', text); */
    // output text on refresh?

    $(".text").each( function(){
        var select = $(this).val();

        // add each value to the allNotes array
        allNotes.push(select);
        console.log(allNotes);

        // allNotes into storage stringify
        storage = JSON.stringify(allNotes);
        localStorage.setItem("text", storage);

    })
});

function savedText() {
    var retrievedText = localStorage.getItem("text");
    console.log("retrievedText: ", retrievedText);
    textAreaEl.append(retrievedText);
}

pageLoad();