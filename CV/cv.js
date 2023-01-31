


document.getElementById("boton").addEventListener('click',function () {
    
   

    document.getElementById("contacto").innerHTML= "Luis Mosti - lmosti@gmail.com - (+54) 9 11 6 881 8989";


});

document.addEventListener("DOMContentLoaded", () => {
    
    const $boton = document.querySelector("#botonexportarapdf");
    $boton.addEventListener("click", () => {
        const $elementoParaConvertir = document.body; 
        html2pdf()
            .set({
                margin: 0,
                filename: 'Luis-Mosti-CV.pdf',
                image: {
                    type: 'jpeg',
                    quality: 0.98
                },
                html2canvas: {
                    scale: 3, 
                    letterRendering: true,
                    width: 1400,
                },
                jsPDF: {
                    unit: "mm",
                    format: "a4",
                    orientation: 'portrait', 
                }
            })
            .from($elementoParaConvertir)
            .save()
            .catch(err => console.log(err));
    });
});