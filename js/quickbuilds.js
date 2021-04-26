const githubSection = document.getElementById('github');
const work = githubSection.querySelector('#github ul');
const githubAPIRepo = "https://api.github.com/users/ptoepel/repos";



fetch(githubAPIRepo)
.then(response => response.json())
.then(data => {

    for(var i = 0; data.length > i ; i++){

        var gitName = data[i].name;
        var description = data[i].description;
        var url = data[i].html_url;
        var createdAt = new Date(data[i].created_at);
        var updatedAt = new Date(data[i].updated_at);
        var tmpTxt =createdAt.getMonth() + 1 + "-";
        tmpTxt += createdAt.getDay() + "-";
        tmpTxt += createdAt.getFullYear();
        createdAt = tmpTxt;
        tmpTxt = "";

        tmpTxt = updatedAt.getMonth() + 1 + "-";
        tmpTxt += updatedAt.getDay() + "-";
        tmpTxt += updatedAt.getFullYear();
        updatedAt = tmpTxt;


        var li = document.createElement('li');
        li.innerHTML = `<a href="${url}">${gitName}</a><span>created: ${createdAt}</span><span>updated: ${updatedAt}</span>`;
        work.appendChild(li);


    }
    return work;
})
.catch(error => console.error(error))