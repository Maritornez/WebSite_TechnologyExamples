//1
let a = 16;
let b = 6;

//2
if (a>b) console.log('a>b');
if (a<b) console.log('a<b');
if (a==b) console.log('a=b');
if (a!=b) console.log('a!=b');
if (a>=b) console.log('a>=b');
if (a<=b) console.log('a<=b');
if (a==2*b+a/4) console.log('a=2*b+a/4');
if (a+b==22) console.log('a+b=22');

//3
console.log(a==16 ? 'a=16' : 'a!=22');

//4
let c = a+b;
console.log('a+b=', c);

//5
console.log('a+b+1=', ++c);

//6
let array = ['1', '2', '3', '4', '5', '6'];

//7, 8
for (let i = 0; i < array.length; i++)
{
    if (array[i].indexOf('3') == 0)
        console.log(array[i] + '!');
    else
        console.log(array[i]);
}

//9
array.splice(1, 1);
array.splice(3, 1);
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

//10, 11
function videogame()
{
    alert('Видеоигры');
}

//12
let boolVar = false;

//13
boolVar = confirm("Вы уверены?");
console.log(boolVar);

//14
console.log(Number("12"));

//15
let videogameObj = 
{
    name: "Human Resource Machine\n",
    number: 16,
    arrStr: ["1", "2", "3"],
    arrNum: [4, 5, 6],
    author:
    {
        name: "Аллан Бломквист",
        age: 25
    },
    date: new Date()
}

for (const key in videogameObj)
{
    if (typeof(videogameObj[key]) == "object")
        for (const key2 in videogameObj[key]) 
        {
            console.log(key + "." + key2 + ": " + videogameObj[key][key2]);
        }
    else
        console.log(key + ": " + videogameObj[key]);
}

videogameObj.arrStr[0] = "videogame";
console.log(videogameObj.arrStr[0]);

let max = videogameObj.arrNum[0];
for(let j = 1; j < videogameObj.arrStr.length; j++)
{
    if (videogameObj.arrNum[j] > max)
        max = videogameObj.arrNum[j];
}
console.log(max);

//16, 17
function up(myStr)
{
    return myStr.toUpperCase();
}
console.log(up("hello"));

//18
console.log(videogameObj.date);
