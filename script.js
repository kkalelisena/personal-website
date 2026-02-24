var form = document.getElementById("iletisim-formu");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    var data = new FormData(form);
    fetch(form.action,{
        method: form.method,
        body: data,
        headers: {
            'Accept' : 'application/json'
        }
    })
    .then(response => {
        if (response.ok){
            alert("Mesajınız başarıyla gönderildi! Size en kısa sürede dönüş yapacağım.");
            form.reset();}
            else{
                alert("Eyvah! Mesaj gönderilirken bir sorun oluştu.");
            }
    })
    .catch(error => {
        alert("Bir hata oluştu, lütfen bağlantınızı kontrol edip tekrar deneyin.");
    });
});
var temaButonu = document.getElementById("tema-butonu");
var temaIkonu = document.getElementById("tema-ikonu");
temaButonu.addEventListener("click", function(){
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")){
        temaIkonu.className = "fa-solid fa-moon";
    }
    else{
        temaIkonu.className = "fa-solid fa-sun";
    }
});