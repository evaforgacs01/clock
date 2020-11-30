 setInterval (function(){
const clock = document.querySelector('.display');
const time = new Date();
const hr = time.getHours();
const min = time.getMinutes();
const sec = time.getSeconds();

clock.textContent = hr +':' + min + ':' + sec;

});


