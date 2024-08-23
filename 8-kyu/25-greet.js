function greet(language) {
    const languages = [
      ["english", "Welcome"],
      ["czech", "Vitejte"],
      ["danish", "Velkomst"],
      ["dutch", "Welkom"],
      ["estonian", "Tere tulemast"],
      ["finnish", "Tervetuloa"],
      ["flemish", "Welgekomen"],
      ["french", "Bienvenue"],
      ["german", "Willkommen"],
      ["irish", "Failte"],
      ["italian", "Benvenuto"],
      ["latvian", "Gaidits"],
      ["lithuanian", "Laukiamas"],
      ["polish", "Witamy"],
      ["spanish", "Bienvenido"],
      ["swedish", "Valkommen"],
      ["welsh", "Croeso"]
    ];
  
    for (let i = 0; i < languages.length; i++) {
      if (languages[i][0] === language) {
        return languages[i][1]; 
      }
    }
  
    return "Welcome";
  }
  

console.log(greet('swedish'));

