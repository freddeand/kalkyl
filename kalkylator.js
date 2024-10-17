// Tar emot användaren tal
let numbOne = Number(
  prompt(
    "Hej och välkommen till kalkylatorn: Skriv in önskat tal mellan 0 - 100"
  )
);
// Tar emot användaren operatör
let value = prompt(
  "Addition (+), subtraktion (-), multiplikation (*), division (/), modulus (%)"
);
// Tar emot användarens andra Tal
let numbTwo = Number(prompt("Skriv in ett till tal mellan 0 - 100"));
// resultat Undefined
let resultat = 0;

// if/else switch för att använda value.

if (isNaN(numbOne) || isNaN(numbTwo)) {
  console.log("Du måste skriva in nummer.");
  alert("Du måste skriva in ett nummer.");
} else
  switch (value) {
    case "+":
      resultat = numbOne + numbTwo;
      console.log("resultat: ", resultat);
      alert(`Resultat ${resultat}`);
      break;
    case "-":
      resultat = numbOne - numbTwo;
      console.log("resultat: ", resultat);
      alert(`Resultat ${resultat}`);
      break;
    case "/":
      resultat = numbOne / numbTwo;
      console.log("resultat: ", resultat);
      alert(`Resultat ${resultat}`);
      break;
    case "*":
      resultat = numbOne * numbTwo;
      console.log("resultat: ", resultat);
      alert(`Resultat ${resultat}`);
      break;
    case "%":
      resultat = numbOne % numbTwo;
      console.log("resultat: ", resultat);
      alert(`Resultat ${resultat}`);
      break;
    default:
      console.log("felaktigt operatör.");
      alert("Felaktig operatör!");
      break;
  }
