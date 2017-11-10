
var p = document.getElementById('text');
p.innerHTML += ' js';
p.insertAdjacentHTML('afterend',' dada '); //beforebegin, afterbegin, beforeend, afterend (указываем в каком месте мы распологаем нашь текст)
//p.outerHTML = '<div class="test"> Privet </div>'; //заменяет используемый тег на указанный в outerHTML



// сравнение введенного числа
/*
function f1() {
    var a,b,

    b = document.getElementById('result');
    a = parseFloat(document.getElementById('num1').value);
        if (a==100) {
            b.innerHTML = "da";
        } else if (a<100){
            b.innerHTML = "bolshe";
        } else {
            b.innerHTML = "men'she";
    }
}*/



//  Math - загадывает число, пользователь угадывает
/*

var rNum , numRes;
rNum = Math.floor((Math.random() *10) +1);
//numRes = document.getElementById('r-result');
//numRes.innerHTML = rNum;

function f2() {
    var num,outR;
    num = document.getElementById('num1').value;
    outR = document.getElementById('result');

    if ( num == rNum) {
        outR.innerHTML = "Ugadal";
    } else {
        outR.innerHTML = "ne ugadali";
    }
}
*/





//  ЦИКЛЫ

/*
function f3() {
    var r1, r2;
    r1 = document.getElementById('result');
    r2 = document.getElementById('r-result');
    /!*for (i=0;i<=20;i--){
        r1.innerHTML += " " +i ;
    }*!/
    var a= 0 ;
    while ( a <10){
        a++;
        r1.innerHTML +=a+" ";

    }
    var j=50;
    do {
        r2.innerHTML+=j +" ";
        j--;
    }
    while (j>30);
}*/



//  МАССТВЫ

// .lenght - показывает количесво элементов в массиве




/// shift/unshift - Добавляет/удаляет в начало массива элемент

var arr = ["Яблоко", "Апельсин", "Груша"];

for (var key=0;key<arr.length; key++) {
    console.log( arr[key] );
}

var a = new Array(5);
console.log(a);

var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[1][1]);




var m = [33, 55, {age: 33},"3232, 3232" , null];
m[1] = 44;
//m.pop();                               // pop() - удаляет последний элемент из массива
m.push(111,[312,'dsads',3232]);         // push() - добавляект в конец массива элемент
//alert (m[2]);


m.push("PK");

m[m.length] = 'OOP';
//m.shift();
console.log(m);

var style = ['«Джаз»', '«Блюз»'];
console.log(style);
style[style.length]= '«Рок-н-Ролл»';
console.log(style);
style[style.length -2]= '«Классика»';
console.log(style);
//alert(style.shift());
console.log(style);
style.unshift('«Рэп»', '«Регги»');
console.log(style);



var random = ['«Джаз»', '«Блюз»', '«Рок-н-Ролл»','«Рэп»', '«Регги»','«Классика»'];

var rMass = parseInt(Math.random() * random.length);
console.log(random[rMass] );
console.log(Math.floor( Math.random()*6 )   );
console.log(random.length );



    var spaceMM = [];
while (true) {
    value = prompt('Ведите элемент массива', ' ');
    if (value === "" || value === null ) break;


    spaceMM.push(+value);
}

var sum = 0;
for (var i = 0; i < spaceMM.length; i++) {
    sum += spaceMM[i];
}

alert( sum );