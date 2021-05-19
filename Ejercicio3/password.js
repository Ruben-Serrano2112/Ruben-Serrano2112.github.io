function verifacionContraseña() {
    let inputName = document.querySelector("#password")
        if (inputName.lenght<=8) {
            console.log("La contraseña es correcta");
        }
        else {
            console.log("La contraseña es incorrecta");
        }
}