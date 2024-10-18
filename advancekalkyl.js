function avanceradKalkylator () {

// Tar emot användaren tal
let numbOne = parseFloat(
  prompt(
    "Hej och välkommen till kalkylatorn: Skriv in önskat tal mellan 0 - 100"
  )
);
// Tar emot användaren operatör
let value = prompt(
  "Addition (+), subtraktion (-), multiplikation (*), division (/), modulus (%), procent (procent)"
);
// Tar emot användarens andra Tal
let numbTwo = parseFloat(prompt("Skriv in ett till tal mellan 0 - 100"));
// console.log("isnan", isNaN(numbTwo), numbTwo);

let resultat;
let giltigtResultat = true;
// if/else switch för att använda value.

if (isNaN(numbOne) || isNaN(numbTwo)) {
  console.log("Du måste skriva in nummer.");
  alert("Du måste skriva in ett nummer.");
  giltigtResultat = false;
} else
  switch (value) {
    case "+":
      resultat = numbOne + numbTwo;
      break;
    case "-":
      resultat = numbOne - numbTwo;
      break;
    case "/":
      if (numbTwo === 0) {
        console.log("Du kan inte dela med noll.");
        alert("Du kan inte dela med noll.");
        giltigtResultat = false;
      }
      else {
        resultat = numbOne / numbTwo;
      }
      break;
    case "*":
      resultat = numbOne * numbTwo;
      break;
    case "%":
      if (numbTwo === 0) {
        console.log("Du kan inte modulus med noll.");
        alert("Du kan inte modulus med noll.");
        giltigtResultat = false;
      }
      else {
        resultat = numbOne % numbTwo;
      }
      break;
    case "procent":
      resultat = numbOne * 0.01 * numbTwo;
      break;
    default:
      console.log("felaktigt operatör.");
      alert("Felaktig operatör!");
      giltigtResultat = false;
      break;
  }

  if (giltigtResultat) {
    // Kollar om resultatet är utan decimaler, avrundar annars till 2 decimaler.
    let resultatUtanDecimaler = parseFloat(resultat.toFixed(0));
    if (resultat === resultatUtanDecimaler) {
      // Är redan heltal avrunda inte till två decimaler.
    }
    else {
      resultat = resultat.toFixed(2);
    }

    // Visa resultat
    console.log("Resultat: ", resultat);
    alert(`Resultat ${resultat}`);
  }
}