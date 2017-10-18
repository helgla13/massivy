//1) Создать массив, длина которого строится от числа, которое введет пользователь
// (предложить пользователю ввести число). Заполнить массив числами
// (порядковый номер элемента массива)

var a = prompt("выведи число");
var arr = [];
arr.length=a;
for (i=0; i<a; i++)
{
   arr[i]=i;
}
alert(arr);
console.log

//2) Создать массив, длина которого строится от числа, которое введет пользователь
// (предложить пользователю ввести число).
//Заполнить массив числами (порядковый номер элемента массива в квадрате)

var a = prompt("выведи число");
var arr = [];
arr.length=a;
for (i=0; i<a; i++)
{
    arr[i]=Math.pow(i,2);
}
alert(arr);
console.log

//3) Создать массив, длина которого строится от числа, которое введет пользователь
//(предложить пользователю ввести число). Заполнить массив числами, где на четных
// местах в котором стоят единицы, а на нечетных местах - числа, равные остатку от
// деления своего номера на 5

var a = prompt("выведи число");
var arr = [];
arr.length=a;
for (i=0; i<a; i++){
    if(i%2==0){
       arr[i]=1;
    }
    else{
        arr[i]=i%5;
    }
}
alert(arr);
console.log

//4) Создать массив из случайных целых чисел от 0 до n, где n вводит пользователь.

var a = prompt("выведи число");
var arr = [];
arr.length=10;
for (i=0; i<10; i++){
    arr[i]=Math.floor(Math.random()*a);
}
alert(arr);
console.log

//5) Определить, содержит ли массив данное число x

var x = 8;
var num = [1,20,15,25,43,7,13,2,1,3,8,4,28,24,];
if(num.indexOf(x)!=-1){
    alert("Содержит");
}
else{
    alert("Не содержит");
}

//6) Найти количество четных чисел в массиве.

var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var count = 0;
for(i=0;i<=20;i++)
{
    if (arr[i] % 2 == 0) {
        count++;
    }
}
alert(count);
    console.log

//7) Найдите сумму четных чисел массива

var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var sum = 0;
for(i=0;i<=20;i++)
{
    if (arr[i] % 2 == 0) {
        sum = sum +arr[i];
    }
}
alert(sum);
console.log

//8) Найдите сумму чисел массива, которые стоят на четных индексах.

var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var sum = 0;
for(i=0;i<20;i++)
{
    if (i % 2 == 0) {
        sum = sum +arr[i];
    }
}
alert(sum);
console.log

//9) Найдите наибольший элемент массива

var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,22,15,16,88,18,19,20];
alert(Math.max.apply(null, arr));

//11) Удалить в массиве все числа, которые повторяются более двух раз.

function unique(mas) {
    var result = [];
    next:
    for(i=0; i<=mas.length; i++){
        var num = mas[i];
        for (m = 0; m < result.length; m++){
            if (result[m] == num)
                continue next;
        }
        result.push(num)
    }
    return result;
}
var arr = [1,8,3,4,5,6,7,8,9,13,11,12,13,22,8,16,88,18,13,20];
alert(unique(arr));
console.log

// 10) Определите, есть ли в массиве повторяющиеся элементы и отобразить их

function unique(mas) {
    var result = [];
    for(i=0; i<mas.length; i++){
        for (m=i-1; m>=0; m--){
            if (mas[m]==mas[i]){
                var is_unique = true;
                for (n=0; n<result.length; n++) {
                    if (result[n] == result[i]) {
                        is_unique = false;
                        break;
                    }
                }
                if(is_unique){
                    result.push(arr[i]);
                }
                break;
            }
        }
    }
    return result;
}
var arr = [1,8,3,4,5,6,7,8,9,13,11,12,13,22,8,16,88,18,13,20];
alert(unique(arr));
console.log

//12) Создать многомерный массив 5х5 и заполнить случайными целыми числами.
//По результату матрицы, нужно взять числа по диагонали и вывести в одномерный
// массив.

var arr = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,20],
    [21,22,23,24,25]
];
var array = [];
for (i=0; i<arr.length; i++)
    for (a = 0; a < arr.length; a++) {
        if (i === a) {
            array.push(arr[i][a]);
        }
    }
alert(array);
console.log

//13) Создать массив 5х5 и подсчитать сумму двух диагоналей

var arr = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,20],
    [21,22,23,24,25]
];
sum1 = 0;
sum2 =0;
for (i=0; i<arr.length; i++){
    sum1 +=arr[i][i]}
for (i=0; i<arr.length; i++){
    sum2 += arr[i][arr.length - 1 - i];
}
alert(sum1+sum2);
console.log
