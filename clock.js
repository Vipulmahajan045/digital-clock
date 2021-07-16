setInterval(function(){
    var currentime = new Date();
    var hours = currentime.getHours();
    var minites = currentime.getMinutes();
    var seconds = currentime.getSeconds();
    var period = "AM";
    if(hours >= 12){
        period = "PM"
    }
    if(hours > 12){
        hours =  hours - 12;

    }
    if(seconds < 10){
        seconds = "0" + seconds;

    }
    if(minites < 10){
        minites = "0" + minites;
    }  
    var clockTime = hours + ":" + minites + ":" + seconds + ":" + period;
    var clock = document.getElementById('clock');
    clock.innerText = clockTime;
},1000);
