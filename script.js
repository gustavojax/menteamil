document.getElementById("resultForm").addEventListener("submit", function(event) {
  event.preventDefault();

  emailjs.sendForm("service_mzxvi1q", "res_menteamil", this)
    .then(function() {
      document.getElementById("status").innerText = "Email enviado com sucesso!";
    }, function(error) {
      document.getElementById("status").innerText = "Erro ao enviar: " + error.text;
    });
});