document.addEventListener('DOMContentLoaded', () => {

    const submitButton = document.querySelector('#submit');

    submitButton.addEventListener('click', () => {
        event.preventDefault();
        let name = document.querySelector('#first__name').value;
        let lastName = document.querySelector('#last__name').value;

        console.log(`First name: ${name}`);
        console.log(`Last name: ${lastName}`);

        sessionStorage.setItem('name', name);
        sessionStorage.setItem('lastName', lastName);

        document.querySelector('#first__name').value = "";
        document.querySelector('#last__name').value = "";

        // window.location.href = "http://localhost:5000/other.html"; //Redirect to new URL
        window.open(
            'http://localhost:5000/other.html',
            'popup',
            'width=600,height=600,scrollbars=no,resizable=no'
        ); //Open new Windows Custom size
    })

});



// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.querySelector('#formulario');
//     const logSubmit = event => {
//         event.preventDefault();
//         const name = document.querySelector('[name="firstname"]').value;
//         const lastname = document.querySelector('[name="lastname"]').value;
//
//         console.log(`Firstname: ${name}`);
//         console.log(`Lastname: ${lastname}`);
//     }
//
//     form.addEventListener('submit', logSubmit);
//
// });