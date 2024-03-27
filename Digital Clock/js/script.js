setInterval (() =>{
    let hours = document.getElementById('hours')
    let minutes = document.getElementById('minutes')
    let seconds = document.getElementById('seconds')
    let ampm = document.getElementById('ampm')
    
    //time indicators
    let hh = document.getElementById('hh')
    let mm = document.getElementById('mm')
    let ss = document.getElementById('ss')

    //dots
    let dotH = document.querySelector('.hr_dot');
    let dotM = document.querySelector('.min_dot');
    let dotS = document.querySelector('.sec_dot');

    //current time values
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ap = h >= 12 ? 'PM' : 'AM';

    //convert to 12hr format 
    if (h > 12){
        h = h - 12;
    }

    //format 0 before single digit values
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    // set time and label
    hours.innerHTML = h + ' Hours';
    minutes.innerHTML = m + ' Minutes';
    seconds.innerHTML = s + ' Seconds';
    ampm.innerHTML = ap;

    //circle and dot locations
    hh.style.strokeDashoffset = 440 - (440* h) / 12;
    mm.style.strokeDashoffset = 440 - (440* m) / 60;
    ss.style.strokeDashoffset = 440 - (440* s) / 60;

    dotH.style.transform = `rotate(${h * 30}deg)`;
    dotM.style.transform = `rotate(${m * 6}deg)`;
    dotS.style.transform = `rotate(${s * 6}deg)`;

},1000);