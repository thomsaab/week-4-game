$( document ).ready(function(){
    var Random=Math.floor(Math.random()*100+20)
    // Selects a random number to be shown at the start of the game
    // Number should be should be between 19 - 120
    //
    $('#randomNumber').text(Random);
    // Appending random number to the randomNumber id in the html doc
    //
    var guess1= Math.floor(Math.random()*10+2)
    var guess2= Math.floor(Math.random()*10+2)
    var guess3= Math.floor(Math.random()*10+2)
    var guess4= Math.floor(Math.random()*10+2)
    // Setting up random numbers for each jewel
    // Random number has to be between 1 - 12
    // 
    var userTotal= 0; 
    var wins= 0;
    var losses = 0;
    //  Decaring variables for tallies
  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);
  //resets the game
  function reset(){
        Random=Math.floor(Math.random()*100+20);
        console.log(Random)
        $('#randomNumber').text(Random);
        guess1= Math.floor(Math.random()*10+2);
        guess2= Math.floor(Math.random()*10+2);
        guess3= Math.floor(Math.random()*10+2);
        guess4= Math.floor(Math.random()*10+2);
        userTotal= 0;
        $('#finalTotal').text(userTotal);
        } 
  //adds the wins to the userTotal
  function winner(){
  alert("You won!");
    wins++; 
    $('#numberWins').text(wins);
    reset();
  }
  //addes the losses to the userTotal
  function loser(){
  alert ("You lose!");
    losses++;
    $('#numberLosses').text(losses);
    reset()
  }
  //sets up click for jewels
    $('#one').on ('click', function(){
      userTotal = userTotal + guess1;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
            //sets win/lose conditions
          if (userTotal == Random){
            winner();
          }
          else if ( userTotal > Random){
            loser();
          }   
    })  
    $('#two').on ('click', function(){
      userTotal = userTotal + guess2;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
          if (userTotal == Random){
            winner();
          }
          else if ( userTotal > Random){
            loser();
          } 
    })  
    $('#three').on ('click', function(){
      userTotal = userTotal + guess3;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal);
  //sets win/lose conditions
            if (userTotal == Random){
            winner();
          }
          else if ( userTotal > Random){
            loser();
          } 
    })  
    $('#four').on ('click', function(){
      userTotal = userTotal + guess4;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
        
            if (userTotal == Random){
            winner();
          }
          else if ( userTotal > Random){
            loser();
          }
    });   
  }); 