// На підставі значень в змінних та їх типів, обчислити кількість років особи яка живе у 2030 році. Вивести результат в консоль в форматі:
// у (рік) році (ІМ'Я) (прізвище) буде мати вік(обчислене число) років. правильне ім'я Ілля
// (рік), (ІМ'Я), (прізвище),(обчислене число) виводити через змінні ${}
let yearBorn = "1984";
const currentYear = "2030";
let fullName = "Іванов лля ";
let name = "лля";
let surname = "Іванов";

let sasha = Number(yearBorn);
let sasha2 = Number(currentYear);
let old = sasha2 - sasha;
let ssa = fullName.split(" ");
let correctName = "І" + ssa[1];
console.log(
  `У ${currentYear} році І${name} ${surname} буде мати вік ${old}років.`
);

// console.log(correctName.charAt(2));
// console.log(correctName.charAt(2));
// console.log(correctName.charAt(correctName.length - 1));
