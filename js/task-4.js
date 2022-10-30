
const satoshi2020 = {
  name: "Nick",
  surname: "Sabo",
  age: 51,
  country: "Japan",
  birth: "1979-08-21",
  location: {
    lat: 38.869422,
    lng: 139.876632,
  },
};

const satoshi2019 = {
  name: "Dorian",
  surname: "Nakamoto",
  age: 44,
  hidden: true,
  country: "USA",
  wallet: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
  browser: "Chrome",
};

const satoshi2018 = {
  name: "Satoshi",
  surname: "Nakamoto",
  technology: "Bitcoin",
  country: "Japan",
  browser: "Tor",
  birth: "1975-04-05",
};

const fullProfile = { ...satoshi2018, ...satoshi2019, ...satoshi2020 };

console.log(fullProfile);

const abjArr = Object.entries(fullProfile); // отримаю колекцію масивів

document.write('Досье о возможной личности Сатоши Накамото <ol start="1">');
abjArr.forEach(([key, value]) => {
  // перевірка типу властивості об'єкта
  if (typeof value == "object") {
    // претворюю об'єкт в JSON строку;
    value = JSON.stringify(value)
      // видалити {} з строки;
      .slice(1, -1)
      //додати пробіл після ":" та "," в строку;
      .replace(/:/g, ": ")
      .replace(/,/g, ", ");
    document.write(`<li>${key} - ${value};</li>`);
  } else {
    document.write(`<li>${key} - ${value};</li>`);
  }
});
document.write("<ol>");
