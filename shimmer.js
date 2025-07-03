document.addEventListener("DOMContentLoaded", () => {
    const quotes = [
      "Please observe appropriate silence and wonder.",
      "Artifact pulsing like a disco ball. Crowd reacting positively.",
      "Ripple Ring Protocol engaged. Receive instructions through side-eye.",
      "Well, Fiona, you could call it Close Encounters of the Loch Kind...",
      "Be careful what you tie to your home.",
      "Tonight the world bent further than I expected.",
      "Kids now believe we're time travelers.",
      "Sheep have filed a union complaint.",
      "Activating Nessie demonstration protocol. Please keep all hands and smartphones inside the safety area.",
      "The portal shimmered. I think the air sighed back."
    ];
  
    const quoteEl = document.getElementById("athena-quote");
  
    let index = 0;
    setInterval(() => {
      quoteEl.textContent = quotes[index % quotes.length];
      index++;
    }, 5000);
  });
  