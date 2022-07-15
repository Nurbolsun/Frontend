let person = {
    first_name: 'Baktilek',
    last_name: 'Taalaibek uulu',
    age: 30,
    date: '15.05.1992',
    location: 'Bishkek'
};
console.log(person.date + " Age:"+ person.age);

var fruits = ['Ялоко' , 'Банан','Ананас'];
console.log(fruits[0]);

let years = prompt ('Сколько вам лет?', 18);

alert('Вам ' + years + ' лет!');

// let summ1 = prompt('1.Введите цифра');
// let summ2 = prompt('2.Введите цифра');
// let result;
// result = summ1*summ2;
// alert (result);

// var x = prompt('1.Введите цифра');
// var y = prompt('2.Введите цифра');
// var result2;
// var result2 = eval(x) + eval(y) ;
// alert (result2);

var summ = prompt ('Сколько будет 2+2?');
if (summ==4) {
    alert('Ответ правильный, красавчик!')
} else {
    alert('Ответ не правильный')
};



