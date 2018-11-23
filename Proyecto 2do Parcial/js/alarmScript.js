var alarmSound = new Audio();
alarmSound.src ="../../sound/alarm.mp3";
var alarmTimer;

function setAlarm(button) {
    var ms = document.getElementById('alarmTime').valueAsNumber;
    if(isNaN(ms)) {
        alert('Invalid Date');
        return;
    }

    var alarm = new Date(ms);
    var alarmTime = new Date(alarm.getUTCFullYear(), alarm.getUTCMonth(), alarm.getUTCDate(),
        alarm.getUTCHours(), alarm.getUTCMinutes(), alarm.getUTCSeconds());

    var differenceInMs = alarmTime.getTime() - (new Date()).getTime();

    if(differenceInMs < 0) {
        alert('Specified time is already passed');
        return;
    }

    alarmTimer = setTimeout(initAlarm, differenceInMs);
    button.innerText = 'Cancel Alarm';
    button.setAttribute('onclick', 'cancelAlarm(this);');
}

function cancelAlarm(button) {
    clearTimeout(alarmTimer);
    button.innerText = 'Set Alarm';
    button.setAttribute('onclick', 'setAlarm(this);');
    alarmSound.pause();
}

function initAlarm() {
    alarmSound.play();
    alarmSound.loop = true;
    document.getElementById('alarmOptions').style.display = '';
    document.getElementById('sendMail').style.display = '';
}

function stopAlarm() {
    alarmSound.pause();
    alarmSound.currentTime = 0;
    document.getElementById('alarmOptions').style.display = 'none';
    document.getElementById('snoozeMsg').style.display = 'none';
    cancelAlarm(document.getElementById('alarmButton'));
}

function snooze() {
    stopAlarm();
    alarmTimer = setTimeout(initAlarm, 300000); // 5 * 60 * 1000 = 5 Minutes
    document.getElementById("alarmBox").style.height = "510px";
    document.getElementById('snoozeMsg').style.display = '';
}

function mailSent() {
    var inputEmail = document.getElementById('email');
    email = inputEmail.value;
    var inputBody = document.getElementById('body');
    body = inputBody.value;

    window.location.href = "mailto:" + email + "?subject=" + "I need some help!" + "&body=" + body;

}
