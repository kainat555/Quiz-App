let date = new Date(new Date().setTime(0));
  let time = date.getTime();
  let seconds = Math.floor((time % (100 * 60)) / 1000);
let minutes = Math.floor((time % (1000 * 60)) / 1000);
  

  setInterval(function(){
      if(seconds < 59){
      seconds++;
      }
      else{
    minutes++;
    seconds = 0;
      }
    if(seconds < 10){
        document.querySelector("#timer").innerHTML = `0${minutes}:0${seconds}`; 
    }
    else{
      document.querySelector("#timer").innerHTML = `0${minutes}:${seconds}`;
    }
  } , 1000)