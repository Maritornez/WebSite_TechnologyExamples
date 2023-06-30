document.addEventListener( "DOMContentLoaded" ,  function(event) {});

//2
document.querySelector('#header').innerHTML = "Анкета (вариант 16)";

//3
window.onload = function () {
    var a = document.querySelector('#header');
    a.onmouseout = function(e) {
        a.className = '';
    };
    a.onmouseover = function(e) {
        a.className = 'redHeader';
    };
};

//4
let timeNode = document.getElementById('time-node');
 
function getCurrentTimeString() {
    let date = new Date();
    return date.getDate() + ':' + '0' + String(Number(date.getMonth())+1) + ':' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes();
}

timeNode.innerHTML = getCurrentTimeString();
setInterval(() => timeNode.innerHTML = getCurrentTimeString(), 1000);

//5
console.log(document.getElementsByTagName('input').length);

//6
let label = document.getElementsByTagName('textarea');
for (let i = 0; i < label.length; i++) label[i].style.fontWeight = 'bold';
for (let i = 0; i < label.length; i++) label[i].style.color = 'green';

//7
var spanCourse = document.getElementById("spanCourse");
spanCourse.parentNode.removeChild(spanCourse);

//8
let select = document.querySelector('#select');
let option = document.createElement('option');
option.value = 'mixed';
option.innerHTML = 'очно-заочная';
select.append(option);

//9
let intro = document.createElement('p');
intro.innerHTML = 'Здесь вы можете пройти опрос по теме видеоигр.';
document.getElementById("form").before(intro);

//10
function validateForm() {
    let x = document.getElementById('birthday').value;
    if (Number(x.slice(0, -6)) < 1916) return false; else return true;
} 

//11
function f1() {    
    if (document.getElementById('checkboxCom').checked == false) document.getElementById('textarea').style.display='none';
    if (document.getElementById('checkboxCom').checked == true) document.getElementById('textarea').style.display='block';
}

f1();
setInterval(f1, 50);

//12
document.forms.form1.onsubmit = function() {
    var firstName = this.firstName.value;
    var lastName = this.lastName.value;
    var gender = this.gender.value;
    var birthday = this.birthday.value;
    var education_form = this.education_form.value;
    var question1 = this.question1.value;
    var comment = this.comment.value;
    
    console.log(firstName);
    console.log(lastName);
    console.log(gender);
    console.log(birthday);
    console.log(education_form);
    console.log(question1);

    var checkboxes = document.getElementsByClassName('checkbox');
    var checkboxesChecked = []; // можно в массиве их хранить, если нужно использовать 
    for (var index = 0; index < checkboxes.length; index++) {
       if (checkboxes[index].checked) {
          checkboxesChecked.push(checkboxes[index].value); // положим в массив выбранный
          console.log(checkboxes[index].value); // делайте что нужно - это для наглядности
       }
    }

    console.log(comment);
    return false;
};


