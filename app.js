  //skor-number
  var skorNumber = document.querySelector(".skor-number");

  //Button click
  const crazyButtons = document.querySelectorAll('.btn-crazy');

  //start timer
  const startButton = document.querySelector('[data-action="start"]');

  const minutes = document.querySelector('.minutes');
  const seconds = document.querySelector('.seconds');
  let timerTime = 00;
  let isRunning = false;
  let interval;


  //FUNCTIONS

  function Crazy() {
    const offsetLeft = Math.random() * (window.innerWidth - this.clientWidth);
    const offsetTop = Math.random() * (window.innerHeight - this.clientHeight);

    this.style.top = offsetTop + 'px';
    this.style.left = offsetLeft + 'px';
  }


  function startTimer() {
    if (isRunning) return;

    isRunning = true;
    interval = setInterval(incrementTimer, 1000);
  }

  function stopTimer() {
    if (!isRunning) return;

    isRunning = false;
    clearInterval(interval);
  }

  function resetTimer() {
    stopTimer();
    timerTime = 0;
    minutes.innerText = '00';
    seconds.innerText = '00';
  }

  function incrementTimer() {
    timerTime++;
    console.log(timerTime);
    const numOfMinutes = Math.floor(timerTime / 60);
    const numOfSeconds = timerTime % 60;

    minutes.innerText = pad(numOfMinutes);
    seconds.innerText = pad(numOfSeconds);
    if (timerTime === 30) {
      if (confirm(`Tebrikler Skor ${skorNumber.innerHTML}.Yeniden başlamak ister misiniz?`)) {
        window.location.reload();
      }
      resetTimer();
    }
  }

  function pad(number) {
    return (number < 10) ? '0' + number : number;
  }


  // Event Listeners
  crazyButtons.forEach(button => button.addEventListener('click', () => {
    skorNumber.innerHTML = parseInt(skorNumber.innerHTML) + 1;
  }));
  crazyButtons.forEach(button => button.addEventListener('mouseenter', Crazy));
  startButton.addEventListener('click', startTimer);