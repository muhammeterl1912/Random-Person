// Selectors
const img = document.querySelector(".random-picture");
const randomTitle = document.querySelector(".random-title");
const randomName = document.querySelector(".random-first");
const randomLastName = document.querySelector(".random-last");
const mail = document.querySelector(".e-mail span");
const adress = document.querySelector(".adress span");
const phone = document.querySelector(".phone span");
const button = document.querySelector("button");

// Fetch
fetch("https://randomuser.me/api/")
  .then((response) => {
if(!response.ok){
  throw new Error("Something went wrong!")
}
   return  response.json()
  })
  .then((data) => {
    let result = data.results[0];
    console.log(result);

    img.src = result.picture.large;
    randomTitle.textContent += `${result.name.title}.`;
    randomName.textContent += result.name.first;
    randomLastName.textContent += result.name.last;
    mail.textContent += result.email;
    adress.textContent += `${result.location.street.name} ${result.location.city} ${result.location.postcode} ${result.location.country}`;
    phone.textContent += result.phone;
  })
  .catch((error) => {
  document.write()
  });
//   Event
button.addEventListener("click",()=>{location.reload();
})