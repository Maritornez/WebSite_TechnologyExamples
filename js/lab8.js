//1
let uri = "https://api.ipify.org/?format=json";
let xhr = new XMLHttpRequest();
xhr.open('GET', uri);
xhr.send();
xhr.onload = function() {
    // Преобразование полученного текста в JSON-объект
    var obj = JSON.parse(xhr.response);
    document.querySelector('#text').innerHTML += ('<p> ip-адрес: ' + obj.ip + '</p>');
};

//2, 3
let uri1 = "https://restcountries.eu/rest/v2/name/russia/?format=json";
let xhr1 = new XMLHttpRequest();
xhr1.open('GET', uri1);
xhr1.send();
xhr1.onload = function() {
    // Преобразование полученного текста в JSON-объект
    var obj1 = JSON.parse(xhr1.response);
    document.querySelector('#text').innerHTML += 'Информация о стране:'
    document.querySelector('#text').innerHTML += ('<p>Название: ' + obj1[0].altSpellings[3] + ' (' + obj1[0].name + ')</p>'); //название
    document.querySelector('#text').innerHTML += ('<p>Столица: ' + obj1[0].capital + '</p>'); //столица
    document.querySelector('#text').innerHTML += ('<p>Регион: ' + obj1[0].region + '</p>'); //регион
    document.querySelector('#text').innerHTML += ('<p>Альт. название: ' + obj1[0].nativeName + '</p>'); //nativeName
    document.querySelector('#text').innerHTML += ('<p>Язык: ' + obj1[0].languages[0].nativeName + '</p>'); //
    document.querySelector('#text').innerHTML += ('<p>Название страны на японском: ' + obj1[0].translations.ja + '</p>'); //
    document.querySelector('#text').innerHTML += ('<img src="' + obj1[0].flag + '" alt="img">'); //флаг
};

//4
let uri2 = "http://numbersapi.com/random/date";
let xhr2 = new XMLHttpRequest();
xhr2.open('GET', uri2);
xhr2.send();
xhr2.onload = function() {
    document.querySelector('#text').innerHTML += ('<p>Случайная дата: ' + xhr2.response + '</p>');
};

//5

function buttonClick() {
    let adress = document.getElementById('adress').value;
    console.log(adress);
    let uri3 = "https://geocode-maps.yandex.ru/1.x/?apikey=7b9fb346-cd33-469e-aa8e-746121e5f942&format=json&geocode=" + adress;
    let xhr3 = new XMLHttpRequest();
    xhr3.open('GET', uri3);
    xhr3.send();
    xhr3.onload = function() {
        var obj3 = JSON.parse(xhr3.response);
        //console.log(obj3);
        for (let i = 0; i < obj3.response.GeoObjectCollection.featureMember.length; i++) {
            document.querySelector('#text').innerHTML += ('<p>Геокодер: Адрес: ' + obj3.response.GeoObjectCollection.featureMember[i].GeoObject.name + ' Описание: ' + obj3.response.GeoObjectCollection.featureMember[i].GeoObject.description + '</p>');
        }
    };    
}