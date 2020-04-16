var tasks = {};

var date = function(){
    const now = moment().format('dddd, MMMM Do YYYY')
    $("#currentDay").text(now);
};
date()

var checkSlot = function(taskText, taskDate, taskList) {
    var taskLi = $("<span>").addClass("d-flex flex-column badge badge-primary badge-pill");

    var taskSpan = $("<span>").addClass("badge badge-primary badge-pill").text(taskDate);
  
    var taskP = $("<p>").addClass("m-1").text(taskText);
    
    taskLi.append(taskSpan, taskP);

    timeHandler(taskLi);

      // append to ul list on the page
  $("#list-" + taskList).append(taskLi);
};


var timeHandler = function(taskEl) {
    var hour = $(taskEl).find("span").text().trim();
    console.log(hour);
}
// var hour = $("span").text();
// console.log(hour)

// var time = moment().format('HH:mm');
// console.log(time)
