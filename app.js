const sound = new Audio('landras.mp3');
const showalarm = document.querySelector('.alarm input');
let timer;

function setAlarm(el){
    let time = document.querySelector('.alarmTime').valueAsNumber;
    showalarm.classList.remove('hide');
      if(isNaN(time)){
      alert("Click ok to set alarm");
    return;
}


const alarm = new Date(time);
const alarmTime = new Date(alarm.getUTCFullYear(),alarm.getUTCMonth(), alarm.getUTCDate(),alarm.getUTCHours(),alarm.getUTCMinutes(),alarm.getUTCSeconds());
const duration = alarmTime.getTime() - (new Date()).getTime();

if(duration <0){
    alert('Time is already passed');
    return;
}

timer = setTimeout(initAlarm, duration);
    el.innerHTML = "<span class='glyphiconglyphicon-remove'></span> Cancel Alarm";
    el.setAttribute('onclick','cancelAlarm(this);');
    el.setAttribute('class','btnbtn-danger');
}


function cancelAlarm(el){
    el.innerHTML = "<span class ='glyphiconglyphicon-time'></span> Set Alarm";
    el.setAttribute('onclick','setAlarm(this);');
    el.setAttribute('class','btnbtn-success');
    clearTimeout(timer);
}

function initAlarm(){
    sound.loop = true;
    sound.play();
    document.getElementById('alarmButton').style.display ='none';
    document.getElementById('selectButton').style.display ='';
}

function stopAlarm(){
    sound.pause();
    sound.currentTime = 0;
    document.getElementById('selectButton').style.display = 'none';
    cancelAlarm(document.getElementById('alarmButton'));
    document.getElementById('alarmButton').style.display = '';
}

function snoozeAlarm(){
    stopAlarm();
    setTimeout(() => {
        initAlarm();
    }, 300000);
    button.innerText = "Cancel Alarm";
    button.setAttribute('onclick','cancelAlarm(this);');
}



//digital clock
const clock = document.querySelector('.clock');

let tick = () => {
    const now = new Date();

    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    clock.innerHTML =`
        <span>${h}</span> :
        <span>${m}</span> :
        <span>${s}</span>

    `; 

}

setInterval(tick, 1000);




//timer = setTimeout(initAlarm, duration);
//     el.innerHTML = "<span class='glyphiconglyphicon-remove'></span> Cancel Alarm";
//     el.setAttribute('onclick','cancelAlarm(this);');
//     el.setAttribute('class','btnbtn-danger');
// }


// function cancelAlarm(el){
//     el.innerHTML = "<span class ='glyphiconglyphicon-time'></span> Set Alarm";
//     el.setAttribute('onclick','setAlarm(this);');
//     el.setAttribute('class','btnbtn-success');
//     clearTimeout(timer);
// }

// function initAlarm(){
//     sound.loop = true;
//     sound.play();
//     document.getElementById('alarmButton').style.display ='none';
//     document.getElementById('selectButton').style.display ='';
// }

// function stopAlarm(){
//     sound.pause();
//     sound.currentTime = 0;
//     document.getElementById('selectButton').style.display = 'none';
//     cancelAlarm(document.getElementById('alarmButton'));
//     document.getElementById('alarmButton').style.display = '';
// }

// function snoozeAlarm(){
//  stopAlarm();
//     setTimeout(() => {
//         initAlarm();
//     }, 300000);
//     button.innerText = "Cancel Alarm";
//     button.setAttribute('onclick','cancelAlarm(this);');
//}

