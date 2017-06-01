$(function() {
  var height = parseInt(prompt("height? (in inches)"));

  if (height <= 44) {
    alert("you're too short");
  } else if (height > 44 && height <= 55) {
    $("div#Ride1").toggle().addClass("ridable");
  } else if (height >= 55 && height < 57) {
    $("div#Ride1").toggle().addClass("ridable");
    $("div#Ride2").toggle().addClass("ridable");
  } else if (height >= 57 && height < 66) {
    $("div#Ride2").toggle().addClass("ridable");
  } else if (height >=66 && height < 71) {
    $("div#Ride2").toggle().addClass("ridable");
    $("div#Ride3").toggle().addClass("ridable");
  } else {
    alert("you're too tall");
  }

  $("#submitButton").click(function(event){
    event.preventDefault();
    $("div#Ride1").show();
    $("div#Ride2").show();
    $("div#Ride3").show();
  });
});
