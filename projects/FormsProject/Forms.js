document.getElementById('Form').addEventListener('submit',function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('passw').value;
    const age = document.getElementById('age').value;
    const password = pass.length;

    if (!name || !email) {
        alert("You need a name and email.");
        return;
    }
    if (!pass || password <8) {
        alert("Your password needs to be atleast 8 characters.")
        return;
    }
    if (!age || age <18) {
        alert("You need to be 18 or older.");
        return;
    }
    
    const FormData = {
        name: name,
        email: email,
        password: pass,
        age: age
    }

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "SubmitM.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function(){
        if (xhr.readyState=== 4 && xhr.status === 200) {
            alert("Form submitted successfully!");
            const response = JSON.parse(xhr.responseText);
            console.log(response);
            document.getElementById('Form').innerHTML = '';
            document.getElementById('message').innerText = response.message;
        }
        else if (xhr.readyState ===4) {
            alert("Error submitting form.");
        }
    };
    xhr.send(JSON.stringify(FormData));
    console.log(FormData);
});