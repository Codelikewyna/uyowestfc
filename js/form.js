

function send() {
  event.preventDefault();
  var name = document.querySelector("#name").value;
  var subject = document.querySelector("#subject").value;
  var message = document.querySelector("#message").value;
    
  var body = "Name: " + name + "%0D%0A%0D%0AMessage: " + message;
  window.location.href = "mailto:uyowestfc15@gmail.com?subject=" + subject + "&body=" + body;
}