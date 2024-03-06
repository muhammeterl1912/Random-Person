
fetch("https://randomuser.me/api/")
  .then((response) => response.json())
  .then((data) => {
    let result = data.results[0];
 
    console.log(result)

  })
  .catch((error) => {
    console.error("Hata:", error);
  });
