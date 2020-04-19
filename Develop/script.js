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

load();

    $("div[id=hour-item] span[id]").each(function() {
        var id = $(this).attr('id');
        // hourTimesArr.push(this.id);
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
// $('span[id^="hour_"]', '#hour-item').each(function(index) {
//     var hourEl = (this.id);
//     $('#' + hourEl).html(i + '. ');

//     i++;
//     console.log(hourEl);
//     });



// var timeHandler = function() {
//     var hour = $(taskEl).find("span").text().trim();
//     console.log(hour);
// }



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
