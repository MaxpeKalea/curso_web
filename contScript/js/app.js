

////////////////////////////////////////////////////////////////
// function declarations

function quePaises()
{
    let select = document.getElementById('regions');
    let region = select.options[select.selectedIndex].value;

    let url = 'https://restcountries.eu/rest/v2/all';
    fetch(url)
        .then(data => data.json())
        .then(data => {
            let countries = data;

            let regional_countries = [];
            countries.forEach(item => {
                if (item.region == region) {
                    regional_countries.push(item.name);
                }
            });

            if (regional_countries.length > 0) {
                setTheCountries(regional_countries, region);
            }
        });
}

function setTheCountries(countries, region)
{
    let result_title = 'Hay ' + countries.length
        + ' países en "' + region + '"';

    let html = '';
    countries.forEach(item => {
        html += '<li>' + item + '</li>';
    });

    document.getElementById('selected-region').innerHTML = result_title;
    document.getElementById('founded-countries').innerHTML = html;
}


////////////////////////////////////////////////////////////////
// add event listeners

document.querySelector('#regions')
    .addEventListener('change', quePaises);
