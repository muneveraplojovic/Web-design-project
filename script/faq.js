function toggleFAQ(answerId) {
    var answer = document.getElementById(answerId);
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
      // Postavite visinu div-a unutar funkcije
      let div = document.getElementById("ddd"); // Promenjen ID
      div.style.height = "6rem";
    }
    
  }
  