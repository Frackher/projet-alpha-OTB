let submit = document.querySelector("#submit");
let responseFail = document.querySelector("#ajaxResponseFail");
let responseSuccess = document.querySelector("#ajaxResponseSuccess");

document.querySelector("#contact-email").addEventListener("focus", function() {
    responseFail.style.display = "none";
    responseSuccess.style.display = "none";
})
document.querySelector("#contact-name").addEventListener("focus", function() {
    responseFail.style.display = "none";
    responseSuccess.style.display = "none";
})
document.querySelector("#contact-message").addEventListener("focus", function() {
    responseFail.style.display = "none";
    responseSuccess.style.display = "none";
})



function sendMail() {
    let email = document.querySelector("#contact-email").value;
    let subject = "Projet Alpha";
    let name = document.querySelector("#contact-name").value;
    let msg = document.querySelector("#contact-message").value;

    let errorMsg = "Veuillez renseigner tous les champs";

    if (email == "" || name == "" || msg == "") {
        responseFail.style.display = "block";
        responseFail.innerHTML = errorMsg;
    } else {
        let successMsg = "Message envoyé !";
        let failMsg = "Message non envoyé, essayez à nouveau.";
    }

    let formdata = new FormData();
    formdata.append("name", name);
    formdata.append("email", email);
    formdata.append("subject", subject);
    formdata.append("msg", msg);

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            responseFail.style.display = "none";
            responseSuccess.style.display = "block";
            responseSuccess.innerHTML = successMsg;
        } else if (this.readyState == 4 && this.status != 200) {
            responseSuccess.style.display = "none";
            responseFail.style.display = "block";
            responseFail.innerHTML = failMsg;
        }
    }

    xhttp.open("POST", "mail.php", true);
    xhttp.send(formdata);
}




submit.addEventListener('click', sendMail());