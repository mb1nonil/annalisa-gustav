

$("#scroll-btn-js").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#scroll-target-js").offset().top
    }, 2000);
});

var form = document.getElementById("osaform");
    
async function handleSubmit(event) {
  event.preventDefault();
  $("#osabtn").attr("disabled", true).text("Skickar...");


  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    $("#osaform").html("<h3>Tack, ditt meddelande har skickats</h3>");

  }).catch(error => {
    $("#osaform").html("<h3>Tyvärr blev det något fel när ditt meddelande skickades, försök igen senare eller skicka direkt till gustav_nordal@hotmail.com</h3>");
  });
}
form.addEventListener("submit", handleSubmit)