document.getElementById('Form').addEventListener('submit',function(event) {
                event.preventDefault();
                
                const fullname = document.getElementById('fullname').value;
                const email = document.getElementById('email').value;
                const pass = document.getElementById('pass').value;
                const age = document.getElementById('age').value;

                if (!fullname || !email) {
                    alert("You need a name and email.");
                    return;
                }
                if (!age || age <18) {
                    alert("You need to be 18.");
                    return;
                }

                const FormData = {
                    name: fullname,
                    email: email,
                    password: pass,
                    age: age
                }
                
                //alert("Form submitted");
                const xhr = new XMLHttpRequest();
                xhr.open("GET", "submit.json", true);
                xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        alert("Form submitted successfully!");
                        const response = JSON.parse(xhr.responseText);
                        console.log(response);
                        //document.getElementById('Form').reset();
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