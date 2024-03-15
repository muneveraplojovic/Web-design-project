let input = document.getElementById("passw");
let generateBtn = document.getElementById("generateBtn")

const apiUrl = "https://passwordinator.onrender.com?char=true";

const fetchDataFromAPI = (apiUrl) => {
    return fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => (input= document.write(data.data)))
    .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
    });
};
// fetchDataFromAPI(apiUrl);