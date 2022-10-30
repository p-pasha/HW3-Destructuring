
const array = ["value", () => "showValue"];

const [value, showValue] = array;

alert(value); // має бути виведено 'value'
alert(showValue());  // має бути виведено 'showValue'

// console.log(showValue); // () => "showValue"
