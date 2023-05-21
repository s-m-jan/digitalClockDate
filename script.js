
const date = document.querySelector("#date");
const time = document.querySelector("#time");

setInterval(update, 1000);

function update(){
    let now = new Date();
    let hours = now.getHours() + 1;
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    if(seconds < 10){
        seconds = '0' + seconds;
    }
    if(minutes < 10){
        minutes = '0' + minutes;
    }
    if(hours < 10){
        hours = '0' + hours;
    }

   

    let timeString = `${hours}:${minutes}:${seconds}`;
    
    time.innerHTML = changeNumbers(timeString);
    let year = now.toLocaleDateString("fa-IR", {year : 'numeric'})
    let day = now.toLocaleDateString("fa-IR", {day : 'numeric'})
    let month = now.toLocaleDateString("fa-IR", {month : 'long'})
    let weekday = now.toLocaleDateString("fa-IR", {weekday : 'long'})
  
    let dateString = `${weekday}، ${day} ${month} ${year}`;
    date.innerHTML = dateString;
}

function changeNumbers(input){
    const farsiDigits = ["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"];
    let output = '';

    for (let i = 0; i < input.length; i++) {
        if(input[i] >= 0 && input[i] <= 9){
            output += farsiDigits[input[i]]
        }
        else{
            output += input[i];
        }
        
        
    }
    return output

}


