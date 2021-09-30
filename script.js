// selectors
var saveButtonEl = $(".saveBtn");
var textAreaEl = $(".text");
var currentDayEl = $("#currentDay");

// add handler for click on button
saveButtonEl.on("click", saveEvent);

// select what to run when page first loads
function init() {
    showText();
    currentDay();
    aChristmasCarol();
}

// get what is in local storage and 
function showText() {
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        $("div[data-hour='" + key + "'] textarea").val(value);
    }
}

// display current day
function currentDay() {
    currentDayEl.text(moment().format("MMMM DD, YYYY"));
}

// figure out past, present, future
function aChristmasCarol() {
    $("div.row").each(function () {
        var now = moment().format("HH");
        var row = $(this);
        var hh = row.attr("data-hour");

        if (hh < now) {
            row.children("textarea").addClass("past").removeClass("future", "present");
        } else if (hh > now) {
            row.children("textarea").addClass("future");
        } else {
            row.children("textarea").addClass("present");
        }
    })
}

// save to local storage the event of each index
function saveEvent(event) {
    var btn = $(event.target);
    var i = saveButtonEl.index(btn);

    var text = textAreaEl.eq(i);
    var value = text.val();
    var key = text.parent("div").attr("data-hour");
    localStorage.setItem(key, value);
}

init();