// Business logic

function roboTalk(input) {
  let userNumber = [];
  for (let i = 0; i <= input; i++) {
    userNumber.push(i.toString());

    if (userNumber[i].includes("3")) {
      userNumber[i] = " Won't you be my neighbor?";
    } else if (userNumber[i].includes("2")) {
      userNumber[i] = " Boop!";
    } else if (userNumber[i].includes("1")) {
      userNumber[i] = " Beep!";
    }
  }
  return userNumber;
}

// User interface logic 

$(document).ready(function() {
  $("form#intakeForm").submit(function(event) {
    event.preventDefault();

    let number = parseInt($("#input").val());

    const talk = roboTalk(number);

    $("#userResults").text(talk);
  });
});