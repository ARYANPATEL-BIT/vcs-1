function rollDice(){

    const numberOfDice = document.getElementById("number").value;
    const diceValues = document.getElementById("diceValue");
    const diceImages = document.getElementById("diceImages");
    let values = [];
    let images = [];

    for( let i = 0; i < numberOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice_images/${value}.png" alt="Dice: ${value}">`);
    }
    diceValues.textContent = values.join(", ");
    diceImages.innerHTML = images.join(" ");
}

