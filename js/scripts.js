$(function() {
  var height = parseInt(prompt("height? (in inches)"));

  if (height < 44) {
    alert("you're too short");
  } else if (height > 44 && <= 55) {
    // ride 1
  } else if (height >= 55 && height < 57) {
    // ride 1 & 2
  } else if (height >= 57 && height < 66) {
    // ride 2
  } else if (height >=66 && height < 71) {
    // ride 2 & 3
  } else {
    alert("you're too tall");
  }
});
