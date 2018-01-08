const digitDisplaySegments = {
    '0' : ['one', 'two', 'three', 'four', 'five', 'six'],
    '1' : ['two', 'three'],
    '2' : ['one', 'two', 'four', 'five', 'seven'],
    '3' : ['one', 'two', 'three', 'four', 'seven'],
    '4' : ['two', 'three', 'six', 'seven'],
    '5' : ['one', 'three', 'four', 'six', 'seven'],
    '6' : ['one', 'three', 'four', 'five', 'six', 'seven'],
    '7' : ['one', 'two', 'three'],
    '8' : ['one', 'two', 'three', 'four', 'five', 'six', 'seven'],
    '9' : ['one', 'two', 'three', 'six', 'seven'],
  }
  var COUNT = 0;
  var TIMER;
  var GAME = {
    poweredOn : false,
    score     : 0,
    pattern   : [],
    started   : false,
    moveDelay : 1000,
    lightTime : 500
  };
  
  // ******* EVENTS **********
  
  $(document).ready(function(){
    console.log('testing');
    //segmentTest();
  });
  
  $('.on-off.switch').click(function(){
    toggleOnOff();
  });
  
  $('.game-button').click(function(e){
    if(GAME.started){
      playerSelection(e.target.id)
    }
  });
  
  //************END OF EVENTS **************
  
  function toggleOnOff(){
    if (GAME.poweredOn){
      $('.on-off.switch').removeClass('on');
      GAME.poweredOn = false;
    }else{
      $('.on-off.switch').addClass('on');
      GAME.poweredOn = true;
    }
  }
  
  function playerSelection(selection){
    lightGameButton(selection);
  }
  
  function lightGameButton(buttonId){
    console.log('lighting ' + buttonId);
    $('#' + buttonId).addClass('lit');
    setTimeout(function(){
    console.log('dimming button ' + buttonId);
    $('#' + buttonId).removeClass('lit');
  }, GAME.lightTime);
  }
  
  function displayScore(score){
    console.log('changing score to ' + score.toString());
    let firstDigit = Math.floor(score / 10);
    let secondDigit = score % 10;
    
    if (firstDigit){changeFirstDigit(firstDigit)}
    changeSecondDigit(secondDigit);
  }
  
  function changeFirstDigit(number){
    displayDigit('.first.digit', number.toString());
  }
  
  function changeSecondDigit(number){
    displayDigit('.second.digit', number.toString());
  }
  //Pass digit as digit classname and number as the number to be displayed
  function displayDigit(digit, number){
    $(digit).find('.lit').removeClass('lit');
    digitDisplaySegments[number].forEach(function(segment){
      $(digit).find('.' + segment).addClass('lit');
    });
  }
  
  function segmentTest(){
    TMIMER = setInterval(changeDigits, 1000);
  }
  
  function changeDigits(){
    if (COUNT > 99){
      window.clearInterval(TIMER);
      console.log(complete);
    }else{
      displayScore(COUNT);
      COUNT++;
    }
  }