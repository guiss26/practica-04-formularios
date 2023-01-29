console.log('funcionando')

const formulario = document.querySelector('#formulario')
const btnEnviar = document.querySelector('#btnEnviar')
const btnCargando = document.querySelector('#btnCargando')

const toast = document.querySelector('.toast')

formulario.addEventListener('submit', e => {
    // console.log('me diste click')
    e.preventDefault()

    const datos = new FormData(formulario)

    console.log('campo email', datos.get('emailCampo'))
    console.log('campo password', datos.get('passCampo'))
    console.log('campo checkbox', datos.get('checkCampo'))

    btnEnviar.classList.add('d-none') //le estamos diciendo que en este boton se le va agregar la clase d-none
    btnCargando.classList.remove('d-none')//le estamos diciendo que es este boton se quitará la clase d-none

    window.setTimeout(() => {
        btnEnviar.classList.remove('d-none')
        btnCargando.classList.add('d-none')

        const eventoToast = new bootstrap.Toast(toast)
        eventoToast.show()
    },3000)

    formulario.reset()

})

