console.log("Hello World!");

let numbOne = Number(
  prompt("Hej och välkommen till kalkylatorn: Skriv in önskat tal")
);

let value = prompt(
  "Addition (+), subtraktion (-), multiplikation (*), division (/), modulus (%)"
);

let numbTwo = Number(prompt("Skriv in ett till tal"));

let resultat = 0;

if (isNaN(numbOne) || isNaN(numbTwo)) {
  console.log("Du måste skriva in nummer.");
  alert("Du måste skriva in ett nummer.");
} else
  switch (value) {
    case "+":
      resultat = numbOne + numbTwo;
      break;
  }
console.log("resultat: ", resultat);
alert(`Resultat ${resultat}`);
