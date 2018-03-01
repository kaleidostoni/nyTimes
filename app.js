//traemos elementos del html
const form = document.getElementById('search-form');
//console.log(form);
const searchField = document.getElementById('search-keyword');
//console.log(searchField);
const responseContainer = document.getElementById('response-container');
//console.log(responseContainer);

//agregando evento submit a nuestro formulario
form.addEventListener('submit', function (e) {
    e.preventDefault();
    responseContainer.innerHTML = '';
    searchedForText = searchField.value;
    getNews();
});

// función para crear el request de la API

function getNews() {
    const articleRequest = new XMLHttpRequest();
    articleRequest.open('GET', `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=dbc4e3e5dd66440ab826a9887bb84cd7`);
    articleRequest.onload = addNews;
    articleRequest.onerror = handlerError;
    articleRequest.send();
}

//función cuando hay error en la petición
function handlerError() {
    console.log('Se ha presentado un error');
}

//función agregar noticias
//function addNews(){
//console.log(this.responseText);
//     const data = JSON.parse(this.responseText);
//     console.log(data);
//     const response = data.response;
//     console.log(response);
//     const article = data.response.docs[0];
//     console.log(article);
//     const title = article.headline.main;
//     console.log(title);
//     const snippet = article.snippet;

//     let li = document.createElement('li');
//     li.className = 'articleClass';
//     li.innerText = snippet;

//     responseContainer.appendChild(li);
// };

function addNews() {
    const data = JSON.parse(this.responseText);
    const response = data.response;
    const article = data.response.docs;
    article.map(function (article, index) {
        if (index <= 4) {
            const title = article.headline.main;
            //console.log(title);
            const snippet = article.snippet;
            //console.log(snippet);
            let li = document.createElement('li');
                li.className = 'articleClass';
                li.innerText = snippet;

                responseContainer.appendChild(li);
        }
    })
};
