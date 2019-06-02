


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

  else if ($("#image1").parent().is($("#choose-enemy"))) {
    $("#chosen-enemy").append($("#image1"))
    $("#hide-row").css("display", "none")
    $("#choose-enemy").remove()
    $("#chosen-enemy-label").css("display", "block")
    $("#image1").css("border", "3px solid red")
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

  else if ($("#image2").parent().is($("#choose-enemy"))) {
    $("#chosen-enemy").append($("#image2"))
    $("#hide-row").css("display", "none")
    $("#choose-enemy").remove()
    $("#chosen-enemy-label").css("display", "block")
    $("#image1").css("border", "3px solid green")
    $("#image2").css("border", "3px solid red")
  }


})


//image 3 function//////////////////////////////////////////////////////

$("#image3").click(function () {

  if ($("#image3").parent().is($("#choose-jedi"))) {
    $("#image3").css("color", "green")

    $("#chosen-jedi").append($("#image3"))
    $("#choose-enemy").append($("#image1"), $("#image2"), $("#image4"))
    $("#choose-jedi").remove()
    $("#image4").css("color", "green")
    $("#image3").css("border", "3px solid green")
  }

  else if ($("#image3").parent().is($("#choose-enemy"))) {
    $("#chosen-enemy").append($("#image3"))
    $("#hide-row").css("display", "none")
    $("#choose-enemy").remove()
    $("#chosen-enemy-label").css("display", "block")
    $("#image3").css("border", "3px solid red")
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
  else if ($("#image4").parent().is($("#choose-enemy"))) {
    $("#chosen-enemy").append($("#image4"))
    $("#hide-row").css("display", "none")
    $("#choose-enemy").remove()
    $("#chosen-enemy-label").css("display", "block")
    $("#image4").css("border", "3px solid red")
  }
})


//button onclick function///////////////////////////////////////////////////////

$("#button").click(function () {

  //getting enemies score value/////////////////////////////////////////////////

  let enemy = ($("#chosen-enemy").children())
  let enemyScore = (enemy.children()[2].innerHTML)
  console.log(enemyScore)
  let randoEnemy = Math.floor(Math.random() * 25 + 1)
  enemyScore = enemyScore - randoEnemy
  enemy.children()[2].innerHTML = enemyScore




  $("#enemy-damage").text(`The Enemy took ${randoEnemy} Damage!!!`)




  //getting heroes value/////////////////////////////////////////////////////////

  let jedi = ($("#chosen-jedi").children())
  let jediScore = (jedi.children()[2].innerHTML)
  let randoJedi = Math.floor(Math.random() * 25 + 1)
  jediScore = jediScore - randoJedi
  jedi.children()[2].innerHTML = jediScore
  console.log(jediScore)
  // console.log(heroScore)

  $("#jedi-damage").text(`Your Hero took ${randoJedi} Damage!!!`)

  if (jediScore <= 0 && enemyScore > 0) {
    console.log("you lost")
    $("#button").prop("disabled", "true")
    setTimeout(reload, 5000)
  }
  else if (jediScore > 0 && enemyScore <= 0) {
    console.log("loser")
    $("#button").prop("disabled", "true")
    setTimeout(reload, 3000)

  }
  else if (jediScore <= 0 && enemyScore <= 0) {
    $("#button").prop("disabled", "true")
    setTimeout(reaload,3000)
    console.log("tied")
  }



})


let reload = () => {
  location.reload()
}