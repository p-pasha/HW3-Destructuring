
const user1 = {
  name: "John",
  years: 30,
  //   isAdmin: true,
};


function createNewUser({ name, years, isAdmin = false }) {
  const user = {
    name,
    years,
    isAdmin,
  };
  return user;
}
const newUser = createNewUser(user1);
console.log(newUser);
// document.write(`Object user = ${JSON.stringify(newUser)} `);
// document.write(`Object user = ${Object.entries(newUser)}`);
document.write(
  `name: ${newUser.name}, years: ${newUser.years}, isAdmin: ${newUser.isAdmin}.`
);
