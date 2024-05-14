// var msg = document.querySelector('#message');
// var btn = document.querySelector('#btn');
// var ans = document.querySelector('#ans');


// btn.addEventListener('click', function () {
//     let assistent = msg.value.toLowerCase();
//     let reply = '';

//     if (assistent.match('hello')) {
//         reply = 'Hello there!';
//     } else if (assistent.match('how are you?')) {
//         reply = "I'm Fine & you?";
//     } else if (assistent.match('what is your name?')) {
//         reply = "I am Robot & I am Sakline's assistant";
//     } else if (assistent.match('where are you from?')) {
//         reply = "I'm from bangladesh";
//     } else if (assistent.match('who is your wife?')) {
//         reply = "My cute angle Akhi Talukder";
//     } else if (assistent.match('who is akhi')) {
//         reply = "Akhi is my life partner";
//     } else {
//         reply = "i don't undrestand";
//     }

//     ans.innerHTML = reply;

//     var voice = new SpeechSynthesisUtterance(reply);

//     window.speechSynthesis.speak(voice);

// });




var msg = document.querySelector('#message');
var btn = document.querySelector('#btn');
var ans = document.querySelector('#ans');

btn.addEventListener('click', function () {
    let google = msg.value;
    let reply = '';

    if (google.match('hello')) {
        reply = 'hello dear';

    } else if (google.match('how are you')) {
        reply = 'i am fine and you';
    } else {
        reply = "i can't undrestand";
    }

    ans.innerHTML = reply;
    var voice = new SpeechSynthesisUtterance(reply);
    window.speechSynthesis.speak(voice);

})