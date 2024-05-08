const input = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const output = document.getElementById("output");
let timesOfInvalidInput = 0;

convertButton.addEventListener("click", () => {
  //if input is empty
  if (input.value === "") {
    timesOfInvalidInput++;
    output.innerHTML = `
    <h1>Please provide a valid number ${
      timesOfInvalidInput > 10 ? ">:(" : ""
    }</h1>
    <h2>You have provided invalid input ${timesOfInvalidInput} times...</h2>
    `;
    return;
  }
  //if input is less than 0
  if (input.value < 0) {
    timesOfInvalidInput++;
    output.innerHTML = `
    <h1>Please enter a number greater than or equal to 1 ${
      timesOfInvalidInput > 10 ? ">:(" : ""
    }</h1>
    <h2>You have provided invalid input ${timesOfInvalidInput} times...</h2>
    `;
    return;
  }
  //if input is greater than 399
  if (input.value > 3999) {
    timesOfInvalidInput++;
    output.innerHTML = `
    <h1>Please enter a number less than or equal to 3999 ${
      timesOfInvalidInput > 10 ? ">:(" : ""
    }</h1>
    <h2>You have provided invalid input ${timesOfInvalidInput} times...</h2>
    `;
    return;
  }

  //split the input into an array
  const reverseArr = input.value.split("").reverse();
  console.log("Reversed number: " + reverseArr);
  const numeral = convert(reverseArr).reverse().join("");
  output.innerText = numeral;
});

/**
 * Resets the output
 */
const reset = () => {
  output.innerHTML = "";
};

/**
 * Converts the given array to an array of roman numerals using the getRomanNumeral method
 *
 * @param arr - the array to be converted
 */
const convert = (arr) => {
  //initialize a converted string
  const converted = [];
  //loop through each number in the array, adding the corresponding roman numeral
  for (let i = 0; i < arr.length; i++) {
    converted.push(getRomanNumeral(arr, i + 1));
  }
  return converted;
};

/**
 * Method to convert a number to a roman numeral based on it's digit
 *
 * @param arr - the array of numbers
 * @param digit - what digit the number is
 */
const getRomanNumeral = (arr, digit) => {
  let numeral = "";
  switch (digit) {
    //FIRST DIGIT CASE =================================================
    case 1:
      //if the number is less than four, add the right number of Is
      if (arr[0] < 4) {
        for (let i = 0; i < arr[0]; i++) {
          numeral += "I";
        }
      }
      //if the number is 4, make it IV
      else if (arr[0] == 4) {
        numeral = "IV";
      }
      //if the number is between 4 and 9, add V to the numeral and add an I for the difference between the number and 5
      else if (arr[0] > 4 && arr[0] < 9) {
        numeral = "V";
        for (let i = arr[0] - 5; i > 0; i--) {
          numeral += "I";
        }
      }
      //if the number is 9, it is IX
      else {
        numeral = "IX";
      }
      break;
    //SECOND DIGIT CASE ======================================================
    case 2:
      //if the number is less than four, add the right number of Xs
      if (arr[1] < 4) {
        for (let i = 0; i < arr[1]; i++) {
          numeral += "X";
        }
      }
      //if the number is 4, make it IL
      else if (arr[1] == 4) {
        numeral = "IL";
      }
      //if the number is between 4 and 9, add V to the numeral and add an X for the difference between the number and 5
      else if (arr[1] > 4 && arr[1] < 9) {
        numeral = "L";
        for (let i = arr[1] - 5; i > 0; i--) {
          numeral += "X";
        }
      }
      //if the number is 9, it is XC
      else {
        numeral = "XC";
      }
      break;
    //THIRD DIGIT CASE =======================================================
    case 3:
      //if the number is less than four, add the right number of Xs
      if (arr[2] < 4) {
        for (let i = 0; i < arr[2]; i++) {
          numeral += "C";
        }
      }
      //if the number is 4, make it CD
      else if (arr[2] == 4) {
        numeral = "CD";
      }
      //if the number is between 4 and 9, add V to the numeral and add an I for the difference between the number and 5
      else if (arr[2] > 4 && arr[2] < 9) {
        numeral = "D";
        for (let i = arr[2] - 5; i > 0; i--) {
          numeral += "C";
        }
      }
      //if the number is 9, it is IX
      else {
        numeral = "CM";
      }
      break;
    //FOURTH DIGIT CASE =======================================================
    case 4:
      //if the number is less than four, add the right number of Xs
      if (arr[3] < 4) {
        for (let i = 0; i < arr[3]; i++) {
          numeral += "M";
        }
      } else {
        numeral = "";
      }
      break;
    default:
      numeral = "";
      break;
  }
  return numeral;
};
