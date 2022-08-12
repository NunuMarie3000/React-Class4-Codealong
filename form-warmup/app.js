'use strict';
// Back to basics -- Forms in HTML

//submit a console.log('submitted');
//update our h2 on user input


// 1. DOM node (Form, input, etc)
let form = document.getElementById('myForm');
let userName = document.getElementById('name');
let h2 = document.getElementById('nameHeader');


// 2.addEventListener( )
// form.addEventListener('submit')

// 3.HandleChange()
let handleChange = (e)=>{
    e.preventDefault();
    console.log(e.target.value); //gets whatever the user has chosen/entered/submitted
    let newName = (e.target.value)
    h2.textContent = `Welcome, ${newName}`;
}

//we wanna log something to the console on form submit
let handleSubmit = (e)=>{
    e.preventDefault();
    let text = 'Form Submitted!';
    console.log(text);
    alert(text);
}
userName.addEventListener('input', handleChange);
form.addEventListener('submit', handleSubmit);

// 4.event.preventDefault( )

// 5. What happens next?? YOU decide :D




















