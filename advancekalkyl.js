// let history = [];
// let historyTwo = history.slice(3);
function startLoop() {
  do {
    choice = Number(
      prompt(
        "Välj ett av dessa alternativ: \n1: Starta Kalkylatorn \n2: Kolla på youtube \n3: Avsluta"
      )
    );
    choice === 1
      ? advanceCalculator()
      : choice === 2
      ? goToYouTube()
      : choice !== 3
      ? console.log("ERROR: Du måste skriva in ett tal mellan 1-3")
      : null;
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
    let value = prompt(
      "1. Addition (+)\n 2. subtraktion (-)\n 3. division (/)\n 4. multiplikation (*)\n 5. modulus (%)\n 6. Upphöjt (^)"
    );
    let numbTwo = parseFloat(prompt("Skriv in ett till."));
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
      for (let i = 0; i < history.length; i++) {}

      isRunning = false;
      let userContinue = prompt(
        "Tidigare beräkningar\n" +
          historyTwo +
          "\nVill du forsätta? skriv in ja eller nej"
      );

      if (userContinue.toLowerCase() === "ja") {
        advanceCalculator();
      } else {
        console.log("Du måste srkiva in ja eller nej.");
      }
    }
  }
}
