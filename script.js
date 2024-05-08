function capturekeys (event){//agregamos la funcion para realizar un evento 
    //obtener el campo de entrada y el elemento de muestra
    var pressedkeysInput = document.getElementById ("pressedkeys");
    var muestra = document.getElementById("lblPressedkeys");

    var pressedkeys =[]; //arreglo para almacenar teclas presionadas
    var key = event.key;//obtener la tecla presionada

    //agrega la tecla presionada al campo de entrada y el elemento
    muestra.innerHTML +=key;
    pressedkeys.push(key);
    pressedkeysInput.value = pressedkeys;
}

    document.getElementById("keyFrom").addEventListener("submit", function(event){
        event.preventDefault();//evita que el formulario se envie de f

        //obtener el campo de entrada de las teclas con las teclas presionadas y mostrar
        var pressedkeysInput = document.getElementById("pressedkeys");
        alert("Teclas presionadas: " + pressedkeysInput.value);
    });
