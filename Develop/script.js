var i = 1;
var currentTime = moment();
var hourTimesArr = [];

var date = function(){
    const now = moment().format('dddd, MMMM Do YYYY')
    $("#currentDay").text(now);
};
date()

$('button').on("click", function() {
    $('input').each(function() {
        var id = $(this).attr('id');
        var value = $(this).val();

        localStorage.setItem(id, JSON.stringify(value));
    })

});

var load = function() {
    $('input[type="text"').each(function(){
        var id = $(this).attr('id');
        var value = JSON.parse(localStorage.getItem(id))
        
        $(this).val(value);
    })
};

$("span.hour-item").each(function() {
    var id = $(this).attr('id');
    var timeCheck = moment(JSON.stringify(id), "HH:mm a");
    timeBetween = currentTime.isAfter(timeCheck)
        if(timeBetween) {
            $("div[id=task-text-div]").each(function() {
            $(this).addClass(' bg-secondary');
        })
        } else if(!timeBetween) {
            $("div[id=task-text-div]").each(function() {
            $(this).addClass(' bg-danger');
        })
        } else {
            $("div[id=task-text-div]").each(function() {
                $(this).addClass(' bg-primary');
            })
        };
});

load();
