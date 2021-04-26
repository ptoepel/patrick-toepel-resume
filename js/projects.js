/*
const githubURL = `https://api/github/users/`;

const fetchMe = async(me)=>{
    const apiCall = await fetch(githubURL + `${me}?client_id=${clientID}&client_secret=${clientSecret}`);
}
*/


const githubAPIUser = "https://api.github.com/users/ptoepel";

const proxy = 'https://cors-anywhere.herokuapp.com/';

fetch(githubAPIUser)
.then(response => response.json())
.then(data => {
  //console.log(data); // Prints result from `response.json()` in getRequest
})
.catch(error => console.error(error))