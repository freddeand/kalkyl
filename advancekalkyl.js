function startLoop() {
  do {
    choice = Number(
      prompt(
        "Välj ett av dessa alternativ: \n1: Starta Kalkylatorn, \n2: Kolla på youtube, \n3: Avsluta"
      )
    );
    if (choice === 1) {
      avanceradKalkylator();
    } else if (choice === 2) {
      goToYouTube();
    } else if (choice === 3) {
    } else {
    }
  } while (choice !== 3);
}
function goToYouTube() {
  window.location = "https://www.youtube.com/watch?v=TMubSggUOVE";
  console.log(window.location);
}

function avanceradKalkylator() {
  // Tar emot användaren tal
  let numbOne = parseFloat(
    prompt(
      "Hej och välkommen till kalkylatorn: Skriv in önskat tal mellan 0 - 100"
    )
  );
  // Tar emot användaren operatör
  let value = prompt(
    "1. Addition (+)\n 2. subtraktion (-)\n 3. multiplikation (*)\n 4. division (/)\n 5. modulus (%)\n 6. Upphöjt (^)"
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
      case "1":
        resultat = numbOne + numbTwo;
        break;
      case "2":
        resultat = numbOne - numbTwo;
        break;
      case "3":
        if (numbTwo === 0) {
          console.log("Du kan inte dela med noll.");
          alert("Du kan inte dela med noll.");
          giltigtResultat = false;
        } else {
          resultat = numbOne / numbTwo;
        }
        break;
      case "4":
        resultat = numbOne * numbTwo;
        break;
      case "5":
        if (numbTwo === 0) {
          console.log("Du kan inte modulus med noll.");
          alert("Du kan inte modulus med noll.");
          giltigtResultat = false;
        } else {
          resultat = numbOne % numbTwo;
        }
        break;
      case "6":
        resultat = numbOne ^ numbTwo;
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
    } else {
      resultat = resultat.toFixed(2);
    }

    // Visa resultat
    console.log("Resultat: ", resultat);
    alert(`Resultat ${resultat}`);
  }
}
