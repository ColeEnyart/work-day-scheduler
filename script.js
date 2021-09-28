// selectors
var saveButtonEl = $('.saveBtn');
var textAreaEl = $('.text');

// global variables

// current day
function currentDay(){

}

// past, present, future
function aChristmasCarol(){

}

// saveBtn click equals text saved to local storage
// saved events persist
saveButtonEl.on('click', function () {
    // save to local storage
    var text = textAreaEl.val();
    localStorage.setItem('text', text);
    // output text on refresh?
});