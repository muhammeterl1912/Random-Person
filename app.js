// Selectors
const img = document.querySelector(".random-picture");
const randomTitle = document.querySelector(".random-title");
const randomName = document.querySelector(".random-first");
const randomLastName = document.querySelector(".random-last");
const mail = document.querySelector(".e-mail span");
const adress = document.querySelector(".adress span");
const phone = document.querySelector(".phone span");
const button = document.querySelector("button");
const body = document.querySelector("body");

// Fetch
const fetchData = async () => {
  try {
    const response = await fetch("https://randomuser.me/api/a");
    console.log(response);
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    const data = await response.json();
    responseData(data);
  } catch (error) {
    errorHandling(error);
  }
};

fetchData();

const responseData = (data) => {
  let result = data.results[0];

  img.src = result.picture.large;
  randomTitle.textContent += `${result.name.title}.`;
  randomName.textContent += result.name.first;
  randomLastName.textContent += result.name.last;
  mail.textContent += result.email;
  adress.textContent += `${result.location.street.name} ${result.location.city} ${result.location.postcode} ${result.location.country}`;
  phone.textContent += result.phone;
};

// Error Handling
const errorHandling = (error) => {
  body.innerHTML = `<h3>${error}</h3>`;
};

//   Event
button.addEventListener("click", () => {
  location.reload();
});
