let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let ampm = document.getElementById('ampm');


setInterval(() =>{

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = h >= 12 ? "PM" : "AM" ;

    // let hh = document.querySelector('hh');
    // let mm = document.querySelector('mm');
    // let ss = document.querySelector('ss');


    // 24 hour clock to 12 hour clock converter
    if(h>12){
        h=h-12;
    }
    h = (h<10) ? `0${h}` : `${h}` ;
    m = (m<10) ? `0${m}` : `${m}` ;
    s = (s<10) ? `0${s}` : `${s}` ;
    
    
    hours.innerHTML = h + "<br><span>Hours</span>";
    minutes.innerHTML = m + "<br><span>Minutes</span>";
    seconds.innerHTML = s + "<br><span>Seconds</span>";
    ampm.innerHTML = am;


    let hh = document.querySelector('#hh');
    let mm = document.querySelector('#mm');
    let ss = document.querySelector('#ss');

    hh.style.strokeDashoffset = 440 - (440*h) / 12;
    // 12 hours clock
    mm.style.strokeDashoffset = 440 - (440*m) / 60;
    // 60 minutes
    ss.style.strokeDashoffset = 440 - (440*s) / 60;
    // 60 seconds



    let hr_dot = document.querySelector('.hr_dot')
    // 360 / 12  = 30
    let min_dot = document.querySelector('.min_dot')
     // 360 / 60  = 6
    let sec_dot = document.querySelector('.sec_dot')
    // 360 / 60  = 6

    hr_dot.style.transform = `rotate(${h*30}deg)`
    min_dot.style.transform = `rotate(${m*6}deg)`
    sec_dot.style.transform = `rotate(${s*6}deg)`


}, 0)