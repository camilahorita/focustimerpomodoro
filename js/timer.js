
export default function Timer ({
  minutesDisplay,
  secondsDisplay,
  timerTimeOut,
  resetControls,
  minutes,
})
{
  function updateDisplay (minutes, seconds){
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
  }

  function reset(){
    updateDisplay(minutes,0);
    clearTimeout(timerTimeOut);
  }

  function countdown (){
    timerTimeOut= setTimeout(function(){
      let seconds = Number(secondsDisplay.textContent);
      let minutes = Number(minutesDisplay.textContent);

      if (seconds <=0 && minutes <= 0){
        resetControls();
        return
      }

      if (seconds<=0) {
        seconds=5;
        minutes = minutes-1;
      }

      updateDisplay(minutes, (seconds-1));

      countdown();

    }, 1000)

    function updateMinutes(newMinutes){
      minutes = newMinutes;
    }
  }

  return{
    countdown,
    reset,
    updateDisplay,
    updateMinutes

  }
}
