var date = function(){
    const now = moment().format('dddd, MMMM Do YYYY')
    $("#currentDay").text(now);
};
date()
