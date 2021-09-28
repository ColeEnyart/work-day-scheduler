// selectors
var saveButtonEl = $(".saveBtn");
var textAreaEl = $(".text");
var currentDay = $("#currentDay");

// global variables
var allNotes = [];

// current time
function currentTime(){
    var now = moment();
    currentDay.text(now.format("MMMM DD, YYYY"));
    
}

// past, present, future
function aChristmasCarol(){

}

// saveBtn click equals text saved to local storage
// saved events persist
saveButtonEl.on("click", function () {
    // save to local storage
    /* var text = textAreaEl.val();
    localStorage.setItem('text', text); */
    // output text on refresh?

    $(".text").each( function(){
        $(this).val();

        // add each value to the allNotes array
        allNotes.push(this);
        console.log(allNotes);

        // allNotes into storage stringify
        var storage = JSON.stringify(allNotes);
        localStorage.setItem("text", storage);

    })
});

currentTime();