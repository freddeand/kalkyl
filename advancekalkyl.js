function startLoop() {
  const menuText =
    "Välj ett av dessa alternativ: \n1: Starta Kalkylatorn \n2: Kolla på youtube \n3: Avsluta";
  const errorText = "Du skrev fel. Det måste vara en siffra mellan 1 och 3.";
  let promptText = menuText;
  do {
    choice = Number(prompt(promptText));

    choice === 1
      ? advanceCalculator()
      : choice === 2
      ? goToYouTube()
      : choice === 0
      ? (choice = 3)
      : (promptText = errorText.toUpperCase() + "\n\n" + menuText);
    console.log("ERROR: Du måste skriva in ett tal mellan 1-3");

    console.log(choice);
  } while (choice !== 3);
}
// Sends user to youtube to learn about basic math.
function goToYouTube() {
  window.location = "https://www.youtube.com/watch?v=TMubSggUOVE";
  console.log(window.location);
}
// numbOne inputs the users number, value inputs the users operator, numbTwo inputs the users number
// array for result history.
let history = [];

function advanceCalculator() {
  let isRunning = true;

  while (isRunning) {
    let numbOne = parseFloat(
      prompt(
        "Hej och välkommen till kalkylatorn: Skriv in önskat tal för att utföra en uträkning."
      )
    );
    if (isNaN(numbOne)) {
      return;
    }
    let value = prompt(
      `Du har skrivit in ${numbOne}\nVälj någon av operatorerna\n1. Addition (+)\n 2. subtraktion (-)\n 3. division (/)\n 4. multiplikation (*)\n 5. modulus (%)\n 6. Upphöjt (^)`
    );
    if (value === null) {
      return;
    }
    let numbTwo = parseFloat(prompt("Skriv in ett till."));
    if (isNaN(numbTwo)) {
      return;
    }

    let symbol;
    let result;
    let validResult = true;
    // if/else switch to evaluate the users value.

    if (isNaN(numbOne) || isNaN(numbTwo)) {
      console.log("Du måste skriva in nummer.");
      alert("Du måste skriva in ett nummer.");
      validResult = false;
    } else
      switch (value) {
        case "1":
          symbol = "+";
          result = numbOne + numbTwo;
          break;
        case "2":
          symbol = "-";
          result = numbOne - numbTwo;
          break;
        case "3":
          symbol = "/";
          if (numbTwo === 0) {
            console.log("Du kan inte dela med noll.");
            alert("Du kan inte dela med noll.");
            validResult = false;
          } else {
            result = numbOne / numbTwo;
          }
          break;
        case "4":
          symbol = "*";
          result = numbOne * numbTwo;
          break;
        case "5":
          symbol = "%";
          if (numbTwo === 0) {
            console.log("Du kan inte modulus med noll.");
            alert("Du kan inte modulus med noll.");
            validResult = false;
          } else {
            result = numbOne % numbTwo;
          }
          break;
        case "6":
          symbol = "^";
          result = numbOne ** numbTwo;
          break;

        default:
          console.log("felaktigt operatör.");
          alert("Felaktig operatör!");
          validResult = false;
          break;
      }

    if (validResult) {
      // Kollar om resultatet är utan decimaler, avrundar annars till 2 decimaler.
      let resultNoDec = parseFloat(result.toFixed(0));
      if (result === resultNoDec) {
        // Är redan heltal avrunda inte till två decimaler.
      } else {
        result = result.toFixed(2);
      }

      // show result and helps you choose if you want to continue calculating or end the calculator.
      console.log("Resultat: ", result);
      alert(`Resultat ${result}`);

      history.push(
        `Du har skrivit in ${numbOne} ${symbol} ${numbTwo} = ${result}\n`
      );
      const historyTwo = history.slice(-3);
      console.log(history);

      // Alternative solution to get the last three items just to have a for-loop.
      // let i = history.length - 3;
      // if (i < 0) {
      //   i = 0;
      // }
      // for (; i < history.length; i++) {
      //   console.log(`${history[i]}`);
      // }

      // isRunning = false;
      let userContinue;
      do {
        userContinue = prompt(
          "Tidigare beräkningar\n" +
            historyTwo +
            "\nVill du forsätta? skriv in ja eller nej"
        );

        if (userContinue === null || userContinue === "nej") {
          isRunning = false;
        } else if (userContinue.toLowerCase() === "ja") {
          advanceCalculator();
        } else {
          alert("Du måste skriva in ja eller nej.");
          console.log("Du måste skriva in ja eller nej.");
        }
      } while (
        userContinue != "ja" &&
        userContinue != "nej" &&
        userContinue != null
      );
    }
  }
}
