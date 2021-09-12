


$("#scroll-btn-js").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#scroll-target-js").offset().top
    }, 2000);
});

$("#osaform").on("submit", function(e){
e.preventDefault();

$("#osabtn").attr("disabled", true).text("Skickar...");

console.log({
    name: $("#osaname").val(),
    email: "mb1nonil@hotmail.com",
    subject: "OSA från bröllopssidan",
    message: $("#osamessage").val()
    
    });
$.ajax({
url:"https://functionapp120210912175231.azurewebsites.net/api/Function1?code=yFoxpKubjXvGZRB5iwq/evSlXR30W6cSXaaDOu3s2Fiq7itgeFyzaA==",
data: JSON.stringify({
name: $("#osaname").val(),
email: "mb1nonil@hotmail.com",
subject: "OSA från bröllopssidan",
message: $("#osamessage").val()

}),
method:"POST",
success: function(){
    $("#osaform").html("<h3>Tack, ditt meddelande har skickats</h3>");

},
error: function(){

    $("#osaform").html("<h3>Tyvärr blev det något fel när ditt meddelande skickades, försök igen senare eller skicka direkt till gustav_nordal@hotmail.com</h3>");

}

})
})