const translations = {
    tl: {
        "Where is this?":"Saan ito?",
        "How much is the fare?":"Magkano ang pamasahe?",
        "Delicious":"Masarap",
        "What is your name?":"Ano ang pangalan mo?",
        "How are you?":"Kumusta ka?",
        "I have a question":"Meron akong tanong",
        "Can you please take a picture of me?":"Pwede mo akong kuhaan ng litrato?",
        "How much is this?":"Magkano ito?",
        "Thank you":"Salamat",
        "Did you eat?":"Kumain kana?",
        "I need help":"Kailangan ko ng tulong",
        "Goodbye":"Paalam",
        "Excuse me":"Pasintabi po",
        "Good morning":"Magandang Umaga",
        "Good afternoon":"Magandang Hapon",
        "Good evening":"Magandang Gabi",
        "I love you":"Mahal Kita",
        "I don't understand":"Hindi kita maintindihan",
        "You're welcome":"Walang anuman",
        "Nice to meet you":"Ikinagagalak kitang makilala",
        "I'm hungry":"Ako ay nagugutom",
        "No problem":"Walang Problema",
        "How old are you?":"Ilang taon kana?",
        "Where is the restroom?":"Saan ang banyo?",
        "I feel sick":"Masama ang pakiramdam ko",
        "I have some trouble":"Mayroon akong problema",
        "I want a translator":"Gusto ko ng taga-translate",
        "It hurts":"Masakit",
        "Please call a doctor":"Pakitawag ang doktor",
        "May I have the bill?":"Maaari ko bang makuha ang bayarin?"    
    },
    fr: {
      hello: "bonjour",
      world: "monde",
      how: "comment",
      are: "êtes",
      you: "vous",
      good: "bon",
      morning: "matin",
      night: "nuit",
      thank: "merci",
      please: "s'il vous plaît",
      yes: "oui",
      no: "non",
      friend: "ami",
      love: "amour",
      cat: "chat",
      dog: "chien",
      food: "nourriture",
      house: "maison",
      car: "voiture",
      water: "eau"
    },
    de: {
      hello: "hallo",
      world: "welt",
      how: "wie",
      are: "sind",
      you: "du",
      good: "gut",
      morning: "morgen",
      night: "nacht",
      thank: "danke",
      please: "bitte",
      yes: "ja",
      no: "nein",
      friend: "freund",
      love: "liebe",
      cat: "katze",
      dog: "hund",
      food: "essen",
      house: "haus",
      car: "auto",
      water: "wasser"
    }
  };
  
 // Event listener for the translate button
    document.getElementById("translateButton").addEventListener("click", () => {
    const phrase = document.getElementById("phraseSelect").value;
    const language = document.getElementById("languageSelect").value;
  
    const translatedText = translations[language]?.[phrase] || "Translation not available.";
    document.getElementById("outputText").textContent = translatedText;
  });
  