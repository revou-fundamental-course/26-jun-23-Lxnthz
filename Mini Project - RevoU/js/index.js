const username =  document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message');
const forms = document.getElementById('forms');
const submit = document.querySelector('.button');

forms.addEventListener('submit', function(e){
    e.preventDefault();

    if(username.value === "" || email.value === "" || phone.value === "" || message.value === ""){
        alert("please fill the forms")
    }else{
        alert('Thanks for submitting!')
    };

})

submit.addEventListener('click', () => {
    console.log("name: " + username.value)
    console.log("email: " + email.value)
    console.log("phone: " + phone.value)
    console.log("message: " + message.value)

        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('phone').value = "";
        document.getElementById('message').value = "";
    });

