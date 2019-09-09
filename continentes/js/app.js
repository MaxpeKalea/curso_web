
document.querySelector('#continentes').addEventListener('change', quePaises);



function quePaises()
{
    let elSelect = document.getElementById('continentes');
    let continente = elSelect.options[elSelect.selectedIndex].value;

    let url = 'https://restcountries.eu/rest/v2/all';
    fetch(url)
        .then(data => data.json())
        .then(data => {
            let paises = data;

            let aPaises = [];
            paises.forEach(item => {
                if (item.region == continente) {
                    let bandera = `<img scr="${item.flag}"/>`
                    aPaises.push(`Nombre: ${item.name} -- Capital: ${item.capital} -- Bandera: ${bandera} --`);
                }
            });

            if (aPaises.length > 0) {
                renderPaises(aPaises, continente);
            }
        });
}

function renderPaises(paises, continente)
{
    let cabecera = 'Hay ' + paises.length
        + ' países en "' + continente + '"';

    let html = '';
    paises.forEach(item => {
        html += '<li>' + item + '</li>';
    });

    document.getElementById('el-continente').innerHTML = cabecera;
    document.getElementById('sus-paises').innerHTML = html;
}



