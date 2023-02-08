import {ref} from 'vue'

export default  function ColorPickerGameLogic (){

    const colors = ["green", "red", "blue", "purple"];
    let message = ref("Pick a color...");

    const matchColor = (value) => {
      // do a random color based on the array index dynamically;
      const randomNumber = Math.floor(Math.random() * `${colors.length - 1}`) + 1; //between 1 -  array length

      if (colors[randomNumber] === value) {
        message.value = `You win... [answer: ${colors[randomNumber]}]`;
        return;
      }

      message.value = `You loose [answer: ${colors[randomNumber]}]`;
    };

    return {colors, message, matchColor}

}