
const clients1 = [
  "Гилберт",
  "Сальваторе",
  "Пирс",
  "Соммерс",
  "Форбс",
  "Донован",
  "Беннет",
];
const clients2 = ["Пирс", "Зальцман", "Сальваторе", "Майклсон"];

const clientsTotal = [...new Set([...clients1, ...clients2])];

console.log(clientsTotal);
