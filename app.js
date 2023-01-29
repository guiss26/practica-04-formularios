console.log('funcionando')

const formulario = document.querySelector('#formulario')
const btnEnviar = document.querySelector('#btnEnviar')
const btnCargando = document.querySelector('#btnCargando')
const toast =document.querySelector('.toast')

formulario.addEventListener('submit', (e)=>{/*Vamos a 'escuchar' de nuestro formulario cuando se le de al submit */
    console.log('me diste click')
    e.preventDefault()/**Que detenga todo lo que haga el navegador por defecto */

    const datos = new FormData(formulario)
    console.log('campo Email', datos.get('emailCampo'))/*Para recoger la información */
    console.log('campo Password', datos.get('passCampo'))
    console.log('campo Checkbox', datos.get('checkCampo'))

    btnEnviar.classList.add('d-none')
    btnCargando.classList.remove('d-none')
    window.setTimeout(() => {
        btnEnviar.classList.remove('d-none')
        btnCargando.classList.add('d-none')

        const eventoToast = new boostrap.Toast(toast)
        eventoToast.show()/*Para que aparezca el toast, que aparecerá después de los 3s */
    },3000)/*La cantidad de segundos que s eva a demorar */

    formulario.reset()
}) 
