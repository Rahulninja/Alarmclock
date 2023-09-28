const hour = document.querySelector('#hour');
const minute = document.querySelector('#minute');
const AmPm = document.querySelector('#ampm');
const setAlarmBtn = document.querySelector('#setBtn');
const content = document.querySelector('#content');
const ringTone = new Audio('files/ringtone.mp3');
const secondBtn = document.querySelector('#secondBtn');
const body = document.querySelector('body');
const resumeBtn = document.querySelector('#resumeBtn');
const welcomeBackScreen = document.querySelector('#welcomeBack');
const alarmTimeIndicator = document.querySelector('#alarmText');
let CurrentTime = document.querySelector('#currentTime');
// Check if user has exited webpage
if (!localStorage.getItem('userExited')) {
    localStorage.setItem('userExited', 'false');
} else {
    // Check if user has returned to webpage and had previously set an alarm then show him resume button
    if (localStorage.getItem('userExited') == 'true' && localStorage.getItem('isAlarmSet') == 'true') {
        welcomeBackScreen.className = 'welcomeBack flex';
    }
}

// Play ringtone continously on resume
if (!localStorage.getItem('wantToPlay')) {
    localStorage.setItem('wantToPlay', 'no');
}
// Hide Alarm indicator if alarm is not set
if (localStorage.getItem('alarmTime') == "00:00:AM")
    alarmTimeIndicator.className = "d-none";

// Add class to content
if (!localStorage.getItem('contentClass')) {
    localStorage.setItem('contentClass', 'content flex');
    content.className = localStorage.getItem('contentClass');
} else {
    content.className = localStorage.getItem('contentClass');
}

// Set button text
if (!localStorage.getItem('btnText')) {
    localStorage.setItem('btnText', 'Set Alarm');
    setAlarmBtn.textContent = localStorage.getItem('btnText');
} else {
    setAlarmBtn.textContent = localStorage.getItem('btnText');
}

// Set defualt isAlarm
if (!localStorage.getItem('isAlarmSet')) {
    localStorage.setItem('isAlarmSet', 'false');
}
// Set default alarm time
if (!localStorage.getItem('alarmTime')) {
    localStorage.setItem('alarmTime', '00:00:PM');
}

// Set hour values
for (let i = 12; i > 0; i--) {
    i = i < 10 ? "0" + i : i;
    let option = ` <option value="${i}">${i}</option>`;
    hour.firstElementChild.insertAdjacentHTML("afterend", option);
}
// Set Minute values
for (let i = 59; i >= 0; i--) {
    i = i < 10 ? "0" + i : i;
    let option = ` <option value="${i}">${i}</option>`;
    minute.firstElementChild.insertAdjacentHTML("afterend", option);
}
// Set AM/PM values
for (let i = 2; i > 0; i--) {
    let am_pm = i == 1 ? "AM" : "PM";
    let option = `<option value="${am_pm}">${am_pm}</option>`;
    AmPm.firstElementChild.insertAdjacentHTML("afterend", option);
}
