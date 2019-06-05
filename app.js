

let fightClick = 1;
let beaten = 0;
let rowClear = 0;
///Image 1 function///////////////////////////////////


$("#image1").click(function () {
  console.log($("#image1").parent())

  if ($("#image1").parent().is($("#choose-jedi"))) {

    $("#changing-title").text("Chosen Champion")
    $("#image1").css("color", "green")

    $("#chosen-jedi").append($("#image1"))

    $("#choose-enemy").append($("#image2"), $("#image3"), $("#image4"))
    $("#choose-jedi").remove()
    $("#chosen-jedi").css("color", "green")
    $("#image1").css("border", "3px solid green")
  }

  else if ($("#image1").parent().is($("#choose-enemy")) && rowClear === 0) {
    rowClear++
    $("#chosen-enemy").append($("#image1"))
    // $("#hide-row").css("display", "none")
    // $("#choose-enemy").remove()
    $("#chosen-enemy-label").css("display", "block")
    $("#image1").css("border", "3px solid red")
    enableButton()
    $("#reaction-text-row").empty()
  }


})


//Image 2 function////////////////////////////////////////////////

$("#image2").click(function () {

  if ($("#image2").parent().is($("#choose-jedi"))) {
    $("#image2").css("color", "green")

    $("#chosen-jedi").append($("#image2"))
    $("#choose-enemy").append($("#image1"), $("#image3"), $("#image4"))
    $("#choose-jedi").remove()
    $("#image2").css("border", "3px solid green")

  }

  else if ($("#image2").parent().is($("#choose-enemy")) && rowClear === 0) {
    rowClear++
    $("#chosen-enemy").append($("#image2"))
    // $("#hide-row").css("display", "none")
    // $("#choose-enemy").remove()
    $("#chosen-enemy-label").css("display", "block")
    $("#image1").css("border", "3px solid green")
    $("#image2").css("border", "3px solid red")
    enableButton()
    $("#reaction-text-row").empty()
  }


})


//image 3 function//////////////////////////////////////////////////////

$("#image3").click(function () {

  if ($("#image3").parent().is($("#choose-jedi"))) {
    $("#image3").css("color", "green")

    $("#chosen-jedi").append($("#image3"))
    $("#choose-enemy").append($("#image1"), $("#image2"), $("#image4"))
    $("#choose-jedi").remove()
    $("#image3").css("border", "3px solid green")
  }

  else if ($("#image3").parent().is($("#choose-enemy")) && rowClear === 0) {
    rowClear++
    $("#chosen-enemy").append($("#image3"))
    // $("#hide-row").css("display", "none")
    // $("#choose-enemy").remove()
    $("#chosen-enemy-label").css("display", "block")
    $("#image3").css("border", "3px solid red")
    enableButton()
    $("#reaction-text-row").empty()
  }

})


//image 4 function///////////////////////////////////////////////////////////

$("#image4").click(function () {

  if ($("#image4").parent().is($("#choose-jedi"))) {
    $("#image4").css("color", "green")

    $("#chosen-jedi").append($("#image4"))
    $("#choose-enemy").append($("#image1"), $("#image2"), $("#image3"))
    $("#choose-jedi").remove()
    $("#image4").css("border", "3px solid green")
  }
  else if ($("#image4").parent().is($("#choose-enemy")) && rowClear === 0) {
    rowClear++
    $("#chosen-enemy").append($("#image4"))
    // $("#hide-row").css("display", "none")
    // $("#choose-enemy").remove()
    $("#chosen-enemy-label").css("display", "block")
    $("#image4").css("border", "3px solid red")
    enableButton()
    $("#reaction-text-row").empty()
  }
})


//button onclick function///////////////////////////////////////////////////////

$("#button").click(function () {

  //getting enemies score value/////////////////////////////////////////////////
  // console.log($("#chosen-enemy").children()[0])



  let enemy = ($("#chosen-enemy").children())
  // console.log($("#chosen-enemy").children().length)
  let enemyScore = (enemy.children()[2].innerHTML)
  // console.log(enemyScore)
  let randoEnemy = jediDamage()
  enemyScore = enemyScore - randoEnemy
  enemy.children()[2].innerHTML = enemyScore






  $("#enemy-damage").text(`The Enemy took ${randoEnemy} Damage!!!`)




  //getting heroes value/////////////////////////////////////////////////////////

  //if (beaten === 0) {
    let jedi = ($("#chosen-jedi").children())
    let jediScore = (jedi.children()[2].innerHTML)
    let randoJedi = sithDamage()
    jediScore = jediScore - randoJedi
    jedi.children()[2].innerHTML = jediScore
    console.log(jediScore)
    // console.log(heroScore)

    $("#jedi-damage").text(`Your Hero took ${randoJedi} Damage!!!`)

    //else if statemetn tree depending on who wins the current iteration of battle

    if (jediScore <= 0 && enemyScore > 0) {
      jediScore = 0
      loseText()
      jedi.children()[2].innerHTML = jediScore
      console.log("you lost")
      $("#button").prop("disabled", "true")
      setTimeout(reload, 3000)
    }
    else if (jediScore > 0 && enemyScore <= 0) {
      enemyScore = 0
      winText()
      enemy.children()[2].innerHTML = enemyScore
      console.log("loser")
      $("#button").prop("disabled", "true")
      // setTimeout(reload, 3000)

    }
    else if (jediScore <= 0 && enemyScore <= 0) {
      jediScore = 0;
      enemyScore = 0;
      tieText()
      enemy.children()[2].innerHTML = enemyScore
      jedi.children()[2].innerHTML = jediScore

      $("#button").prop("disabled", "true")
      setTimeout(reload, 3000)
      console.log("tied")
    }
  //}



})

// Reload the entire page on win or loss function
let reload = () => {
  location.reload()
}
// 3 groups of text that will append to the bottom of the page depening on the score results

//wintext will handle the difference betweent the first and final iteration of winning the round vs game
let winText = () => {
  if (beaten < 2) {
    let winnerBanner = $("<h1>")
    winnerBanner.text("Congratulations! Pick Your Next Victim")
    winnerBanner.css({ "color": "green", "font-weight": "800", "font-size": "60px" })
    $("#reaction-text-row").append(winnerBanner)
    beaten++
    $("#chosen-enemy").empty()
    rowClear=0
  }

  // iteration of code that rus if all 3 cards have been beaten
  else if (beaten === 2){
    let wonBanner = $("<h1>")
    wonBanner.text("Congratulation Young Jedi! You Saved the Galaxy")
    wonBanner.css({"color": "green", "font-weight":"800", "font-size": "60px"})
    $("#reaction-text-row").append(wonBanner)
    $("#chosen-enemy").empty()
    setTimeout(reload, 5000)
  }
}


// only displays if lose, very hard to do


let loseText = () => {
  let loserBanner = $("<h1>")
  loserBanner.text("The Galaxy Descends Into Chaos")
  loserBanner.css({ "color": "red", "font-weight": "800", "font-size": "60px" })
  $("#reaction-text-row").append(loserBanner)
}

//tie text, edge case very uncommon

let tieText = () => {
  let tieBanner = $("<h1>");
  tieBanner.text("No True Winner, Try Again!")
  tieBanner.css({ "color": "blue", "font-weight": "800", "font-size": "60px" })
  $("#reaction-text-row").append(tieBanner)
}


// calculates and adds up the damage of the jedi

let jediDamage = () => {
  let damage = 5
  let damageOutput = 5 * fightClick;
  fightClick++
  return damageOutput
}

//calculates sith damage

let sithDamage = () => {
  let output = Math.floor(Math.random()*20)
  return output
}
//button function used to enable button after next enemy is clicked, after it is disabled due to enemy dying

let enableButton = () => {
  document.getElementById("button").disabled = false
}

