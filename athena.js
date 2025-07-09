// === ATHENA INTERFACE – SHIMMERWAKE AI LOG FRAGMENTATION MODULE ===

const entries = [
  "“e-trained and responds to bagpipes.”",
  "Crowd control tip: give kids a selfie—they’ll believe anything.",
  "Maintenance: hydrophone cables secure, artifact pulsing like a disco ball.",
  "The hard part comes next.",
  "Pie supply low—morale at risk.",
  "Vanessa’s Debrief: I kept thinking—if Champ can smile, she was smiling tonight.",
  "She felt pride; she felt fear. Got the crowd to clap, got the monster to come, but this was only practice.",
  "FRED: 100% functional. Boat: 95%. Dignity: we’ll get back to you.",
  "Scotland looks just like the movies—except now I'm starring in the wrong genre.",
  "Tether—too short. Next time: bring more cable, fewer assumptions.",
  "Champ’s scared but stubborn. She 'trusts' us, or something like trust.",
  "I can’t really sleep—too many dreams, too many worries.",
  "FRED Log #99: Crew vocalizations = fear / awe / bonding. Emotions not found.",
  "Suggested fix: tighten servo C7 or play happy.wav.",
  "FRED Log #112: Step 1 — get bearings. Step 2 — accept the rulebook is gone.",
  "Spyder: 'Vessel Dauntless requesting northbound passage.'",
  "Lock Master: 'Dauntless, it’s gonna be 10–15 minutes.'",
  "Spyder: 'Thank you. We’ll hold.'",
  "HUDSON RIVER — MORNING. Golden light shimmers on ripples. A kayaker waves near a tow barge.",
  "Wayne: 'Two-and-a-half knots — forty minutes to lunch.'",
  "Vanessa: 'Tubes firm, deck stowage clear. Thrusters?'",
  "Wayne: 'Port, starboard, bow, stern — green. Touch-and-go tested.'",
  "Spyder: 'ROV charged. No leaks. Trial run ready.'",
  "Vanessa: (smiles) 'Perfect. Five miles to Ryan’s Wake — fat Reubens and cold lagers await.'",
  "Adamsian Note: 'An experiment has begun' = robot asks, 'Are you sure this is a good idea?' and everyone ignores it.",
  "In the Dauntless log, if FRED said it, it probably really happened — possibly to a Klingon drinking song.",
  "Nothing prepares you for the moment your wildest stories come true — especially the ones you never meant to write."
];

function insertRandomLog() {
  const logElement = document.createElement("div");
  logElement.className = "block fade-in";
  const entry = entries[Math.floor(Math.random() * entries.length)];
  logElement.innerHTML = `<h2>📡 Incoming Log Fragment</h2><p>${entry}</p>`;

  document.body.appendChild(logElement);
}

// Insert a random log every 10 seconds (optional chaos)
setInterval(insertRandomLog, 10000);

// OR: just inject one at load
window.onload = () => {
  insertRandomLog();
};

