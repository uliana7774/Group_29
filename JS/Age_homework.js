//Создать переменную “age_1” и присвоить ей значение 10
let age_1 = 10;
//Создать переменную “age_2” и присвоить ей значение 18
let age_2 = 18;
//Создать переменную “age_3” и присвоить ей значение 60
let age_3 = 60;
//Создать if в котором будете проверять значение переменной age_1 
//Если age_1 < age_2, вывести в консоль “You don’t have access cause your age is ” + age_1 + “ It’s less then ” 
//Если age_1 >=  age_2 и age_1 <  age_3, вывести в консоль “Welcome  !”
//Если age_1  > age_3, вывести в консоль “Keep calm and look Culture channel”.
//Иначе выводите “Technical work”.
if (age_1<age_2){
console.log(" You don't have access cause your age is " + age_1 + " it's less than " + age_2)
}
else if (age_1>=age_2 && age_1<age_3){
console.log("Welcome!")
}
else if (age_1>age_3){
    console.log("Keep calm and look Culture channel")
}
else {
    console.log("Technical work");
}