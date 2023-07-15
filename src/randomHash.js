const randomString = () => {

  let hash = [];

  function getRandomLetter() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const randomIndex = Math.floor(Math.random() * alphabet.length); // genera una letra del abecedario
    return alphabet[randomIndex];
  }

  function getRandomNumber() {
    const number = Math.floor(Math.random() * 10); // Genera un número aleatorio entre 0 y 9
    return number;
  }

  function who() {
    const randomNum = Math.floor(Math.random() * 10 + 1);
    let who = "";
    if (randomNum % 2 === 0) {
      who = getRandomLetter(); // Elimina la redeclaración de `who` aquí
    } else {
      who = getRandomNumber(); // Elimina la redeclaración de `who` aquí
    }
    return who;
  }

  for (let i = 0; i < 6; i++) {
    hash.push(who());
  }

  hash = hash.join("")
  console.log(hash);
  return hash;

};

export default randomString;

  
  //const randomLetter = getRandomLetter();
  //console.log(randomLetter);
  
  //const randomNumber = getRandomNumber();
  //console.log(randomNumber);

