var tasks = {};

var date = function(){
    const now = moment().format('dddd, MMMM Do YYYY')
    $("#currentDay").text(now);
};
date()

// $("task-text").on("click", function(event) {
//     var toDoTask = $("#task-text")
//         .val()
//         .trim();

//     tasks.push(toDoTask);

//     localStorage.setItem(toDoTask, JSON.stringify(value));
// })

// var tasks = JSON.parse(localStorage.getItem("tasklist")) || [];
// var tasksEl = JSON.parse(localStorage.getItem(id, value))

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

load();
var timeHandler = function(taskEl) {
    var hour = $(taskEl).find("span").text().trim();
    console.log(hour);
}
// var hour = $("span").text();
// console.log(hour)

// var time = moment().format('HH:mm');
// console.log(time)


//     var taskSpan = $("<span>").addClass("badge badge-primary badge-pill").text(taskDate);
  
//     var taskP = $("<p>").addClass("m-1").text(taskText);
    
//     taskLi.append(taskSpan, taskP);

//     timeHandler(taskLi);

//       // append to ul list on the page
//   $("#list-" + taskList).append(taskLi);
// };
