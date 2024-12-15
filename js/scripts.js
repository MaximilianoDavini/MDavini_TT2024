function nuevaTarjetavs() {

    var resultado = window.confirm('¿Estas seguro?');
if (resultado === true) {
    window.alert('¡Excelente decisión!, Felicitaciones.');
    document.getElementById('visual').innerHTML += 
    `<div>
    <h5 class="card-title">Visual Studio Code</h5>
    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, esse.</p>
    <br>
    </div>`
     } else { 
        window.alert('Pareces indeciso');
       }
     }

function nuevaTarjetah() {

    var resultado = window.confirm('¿Estas seguro?');
if (resultado === true) {
    window.alert('¡Excelente decisión!, Felicitaciones.');
    document.getElementById('html').innerHTML += 
    `<div>
    <h5 class="card-title">HTML 5</h5>
    <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, voluptates!</p>
    <br>
    </div>`
} else { 
    window.alert('Pareces indeciso');
}
}

function nuevaTarjetagt() {

    var resultado = window.confirm('¿Estas seguro?');
if (resultado === true) {
    windows.alert('¡Excelente decisión!, Felicitaciones.');
    document.getElementById('github').innerHTML += 
    `<div>
    <h5 class="card-title">GitHub</h5>
    <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, aperiam!</p>
    <br>
    </div>`
} else { 
    window.alert('Pareces indeciso');
}

}

function enviarMsj() {
    var resultado = window.confirm('¿Enviamos el mensaje?');
if (resultado === true) {
    window.alert('Mensaje enviado con exito!');
} else { 
    window.alert('Mensaje cancelado.');
}
}