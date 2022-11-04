// function createHTML(data) {
//     let html = ``;
//
//
//
//     // console.log(data);
//     for (let i = 0; i < data.length; i += 1) {
//         // let title = new title(data);
//         html += `
//                         <div class="card behind">
//                         <img class="card-img-top" src="" alt="Card image cap">
//                             <h6 class="title card-header d-flex justify-content-center">${data[i].title}</h6>
//                             <h6 class="temp d-flex justify-content-center fw-bold">Movie Title: ${data[i].title}</h6>
//                             <hr>
//                             <p class="forecastFont ms-4">Director: <b>${data[i].director}</b></p>
//
//                             <hr>
//                             <p class="forecastFont ms-4">Rating: <b>${data[i].rating}</b></p>
//
//                             <hr>
//                             <p class="forecastFont ms-4">Genre: <b>${data[i].genre}</b></p>
//
//                             <hr>
//                             <p class="forecastFont ms-4">ID: <b>${data[i].id}</b></p>
//                             <a href="#" class="btn btn-primary">Go somewhere</a>
//                         </div>
//                     `
//     }
//     return html;
// }
//
// async function renderAllCards(){
//     const url = 'https://planet-peach-snarl.glitch.me/movies';
//     let res = await fetch(url);
//     let movieData = await res.json();
//     document.querySelector('#tester').innerHTML = createHTML(movieData);
// }
//

/*===== LOGIN SHOW and HIDDEN =====*/
const signUp = document.getElementById('sign-up'),
    signIn = document.getElementById('sign-in'),
    loginIn = document.getElementById('login-in'),
    loginUp = document.getElementById('login-up')


signUp.addEventListener('click', ()=>{
    // Remove classes first if they exist
    loginIn.classList.remove('block')
    loginUp.classList.remove('none')

    // Add classes
    loginIn.classList.toggle('none')
    loginUp.classList.toggle('block')
})

signIn.addEventListener('click', ()=>{
    // Remove classes first if they exist
    loginIn.classList.remove('none')
    loginUp.classList.remove('block')

    // Add classes
    loginIn.classList.toggle('block')
    loginUp.classList.toggle('none')
})