
const employee = {
  name: "Vitalii",
  surname: "Klichko",
};

function createObject({ name, surname, age = 41, salary = 55000 }) {
  const user = {
    name: name,
    surname: surname,
    age: age,
    salary: salary,
  };
  return user;
}
console.log(createObject(employee));
