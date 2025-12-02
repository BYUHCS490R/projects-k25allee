document.getElementById('Form').addEventListener('submit',function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const comment = document.getElementById('comments').value;
    const joke = document.getElementById('one', 'two').value;
    const favorite = document.getElementById('favorite').value;
    const rating = document.getElementById('rating').value;

    if (!name || !email) {
        alert("You need a name & email.")
        return;
    }
    if (!date) {
        alert("Please select the date.")
        return;
    }
    if(!comment) {
        alert("You have not written a comment yet.")
        return;
    }
    if(!favorite) {
        alert("Please select your favorite character.")
        return;
    }
    if (!rating || rating >5) {
        alert("Please enter a number 1-5.")
        return;
    }

    const FormData = {
        Name: name,
        Email: email,
        Date: date,
        Comment: comment,
        Joke: joke,
        FavoriteCharacter: favorite,
        Rating: rating
    }

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "Submit.json", true);
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
})