addEventListener('DOMContentLoaded', () => {

    const  imagenes = ['imagenes/img1.jpg', 'imagenes/img2.jpg', 'imagenes/img3.jpg', 'imagenes/img.jpg']

    let i = 1
    const img1 = document.querySelector('#img')
    const img2 = document.querySelector('#img2')
    const barraProgreso = document.querySelector('#barra-progreso')
    const divIndicadores = document.querySelector('#indicadores')

    let porcentaje_base = 100/imagenes.length
    let porcentaje_actual = porcentaje_base

    for (let index = 0; index < imagenes.length; index++) {
        const div = document.createElement('div')
        div.classList.add('puntos')
        div.id = index
        divIndicadores.appendChild(div)
    }

    barraProgreso.style.width = `${porcentaje_base}%`
    img1.src = imagenes[0]
    const circulos = document.querySelectorAll('.puntos')
    circulos[0].classList.add('resaltado')

    const barra = () => {
        img2.src = imagenes[i]
        const circulo_actual = Array.from(circulos).find(el => el.id ==i)
        Array.from(circulos).forEach(cir => cir.classList.remove('resaltado'))
        circulo_actual.classList.add('resaltado')

        img2.classList.add('activa')
        i++
        porcentaje_actual+= porcentaje_base
        barraProgreso.style.width = `${porcentaje_actual}%`

        if(i == imagenes.length){
            i = 0
            porcentaje_actual = porcentaje_base - porcentaje_base
        }

        setTimeout(() => {
        img1.src = img2.src
        img2.classList.remove('activa')
        }, 1000)

    }

    setInterval(barra, 4000)
})