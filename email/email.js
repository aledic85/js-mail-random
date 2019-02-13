var UserEmail = ["email@gmail.com", "email1@gmail.com", "email2@gmail.com", "email3@gmail.com", "email4@gmail.com", "email5@yahoo.com", "email6@gmail.com", "email7@gmail.com", "email8@gmail.com", "email9@gmail.com"];
var YourEmail = prompt("Inserisci la tua mail: ");
var logged

for (i = 0; i < UserEmail.length; i++) {
  var UserRegistered = (UserEmail[i]);
  if (UserRegistered == YourEmail){
    logged = true;
  }
}

if (YourEmail = logged) {
  alert("Hai effettuato l'accesso")
} else {
  alert("Non hai effettuato l'accesso")
}
