function validation() {
    var user = document.getElementsByName('fname').value;
    var userl = document.getElementByName('lname').value;
    var email = document.getElementByName('email').value;
    var pass = document.getElementByName('pass').value;
    var cpass = document.getElementByName('cpass').value;
    var phone = document.getElementByName('phone').value;

    if (user == "") {
        document.getElementByName('username').innerHTML = "* Mesto za ime je prazno";
        return false;
    } else {
        document.getElementByName('username').innerHTML = "";
    }
    if ((user.length <= 2) || (user.length > 20)) {
        document.getElementByName('username').innerHTML = "* Neodgovarajući format";
        return false;
    } else {
        document.getElementByName('username').innerHTML = "";
    }
    if (!isNaN(user)) {
        document.getElementByName('username').innerHTML = "* Dozvoljeni su samo karakteri";
        return false;
    } else {
        document.getElementByName('username').innerHTML = "";
    }

    if (email == "") {
        document.getElementByName('email').innerHTML = "* Mesto za email je prazno";
        return false;
    } else {
        document.getElementByName('email').innerHTML = "";
    }
    if (email.indexOf('@') <= 0) {
        document.getElementByName('email').innerHTML = "* Nije dobar format";
        return false;
    }
    if (email.charAt(email.length - 4) != '.') {
        document.getElementByName('email').innerHTML = "* Nije dobar format";
        return false;
    }

    if (pass == "") {
        document.getElementByName('password').innerHTML = "* Mesto za lozinku je prazno";
        return false;
    } else {
        document.getElementByName('password').innerHTML = "";
    }
    if (pass.length <= 8) {
        document.getElementByName('password').innerHTML = "* Lozinka mora biti duza od 8 slova";
        return false;
    } else {
        document.getElementByName('password').innerHTML = "";
    }
    if (pass != cpass) {
        document.getElementByName('password2').innerHTML = "* Lozinke se ne poklapaju";
        return false;
    } else {
        document.getElementByName('password2').innerHTML = "";
    }

    if (cpass == "") {
        document.getElementByName('password2').innerHTML = "* Mesto za potvrdu lozinke je prazno";
        return false;
    } else {
        document.getElementByName('password2').innerHTML = "";
    }

}