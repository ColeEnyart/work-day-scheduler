// selectors
var saveButtonEl = $(".saveBtn");
var textAreaEl = $(".text");
var currentDay = $("#currentDay");

saveButtonEl.on("click", saveEvent);

// global variables

// select what to run when page first loads
function pageLoad() {
    showText();
    currentTime();
    aChristmasCarol();
}

function showText() {
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        $("div[data-hour='" + key + "'] textarea").val(value);
    }
}

// current time
function currentTime() {
    currentDay.text(moment().format("MMMM DD, YYYY"));
}

// past, present, future
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

function saveEvent(event) {
    var btn = $(event.target);
    var i = saveButtonEl.index(btn);

    var text = textAreaEl.eq(i);
    var value = text.val();
    var key = text.parent("div").attr("data-hour");
    localStorage.setItem(key, value);
}

pageLoad();