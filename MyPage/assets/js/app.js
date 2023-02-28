function OpenContent(){
    document.querySelector('.opening').classList.add('opening_hidden');
}

setTimeout(OpenContent, 4000);

function LoadContent(){
    document.querySelector('.loading').classList.add('loading_remplace');
}

setTimeout(LoadContent, 4000);

function closeloadContent(){
    document.querySelector('.loading').classList.add('loading_hidden')
}

setTimeout(closeloadContent, 7000);

function WelcomeContent(){
    document.querySelector('.welcome').classList.add('welcome_remplace');
}

setTimeout(WelcomeContent, 7000);

function ShowButton(){
    document.querySelector('.button').classList.add('button_visible');
}
setTimeout(ShowButton, 8000);

const Checkform = document.querySelector('input');

Checkform.addEventListener('input', (e) => {
    if(e.target.value.length >=3) {
        Checkform.style.borderColor = "rgb(66, 180, 0";
}
    else{
        Checkform.style.borderColor = "rgb(255, 34, 34)";
    }
})

const Checkpassword = document.querySelector('#password');

Checkpassword.addEventListener('input', (e) => {
    if(e.target.value.length >=6) {
        Checkpassword.style.borderColor = "orange";
}
    else{
        Checkpassword.style.borderColor = "rgb(255, 34, 34)";
    }
})

Checkpassword.addEventListener('input', (e) => {
    if(e.target.value.length >=10) {
        Checkpassword.style.borderColor = "rgb(66, 180, 0";
}
})

Checkpassword.addEventListener('input', (e) => {
    if(e.target.value.length >=16) {
        Checkpassword.style.borderColor = "rgb(0, 140, 255)";
}
})