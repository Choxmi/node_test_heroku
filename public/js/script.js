const weatherForm = document.querySelector('form')
const input = document.querySelector('input')
const msg = document.querySelector('#result')
weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault(); 
    msg.innerHTML = 'Loading';
    //http://localhost:3000/weather this is not valid in Heroku. So read from root
    fetch('/weather?address='+input.value).then((response) => {
        response.json().then(({forecast = 'Anything is possible', location, error}={})=>{
            console.log(forecast,location,error)
            msg.innerHTML = forecast + ' | ' +location;
        })
    })
    console.log("TEST");
})