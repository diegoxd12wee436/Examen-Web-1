//Bienvenida XD
window.onload = function() { alert("Bienvenido a mi biografia🔥👌")}
//cambiar foto al clickear mi foto 
const pic  = document.getElementById("pic")
const fileInput = document.getElementById("fileInput")

//click
pic.addEventListener("click", ()=> {fileInput.click()})

//ahora si voy a cmabiar la foto
fileInput.addEventListener("change",(event)=> 
    {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
            pic.src = e.target.result; // cambia la imagen al archivo elegido
        };
        reader.readAsDataURL(file);
      }
    });