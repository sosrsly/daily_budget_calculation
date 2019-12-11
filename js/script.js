'use strict';

let money,
    time;

money = +prompt("Ваш бюджет на месяц?");
time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {

    let q = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");

    if (q != "" && b != "" && q.length < 30 && typeof (q) === "string" &&
     typeof (q) != null && typeof (b) != null) {
        console.log("done");
        appData.expenses[q] = b;
    } else {
        alert("Неверно введено");
        i--;
    }

}

// let i = 0;
// while (i < 2) {
//     let q = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");

//     if (q != "" && b != "" && q.length < 30 &&
//         typeof (q) === "string" && typeof (q) != null && typeof (b) != null) {
//         console.log("done");
//         appData.expenses[q] = b;
//         i++;
//     } else {
//         alert("Неверно введено");
//         continue;
//     }
// } 

// let i = 0;
// do {
//     let q = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");

//     if (q != "" && b != "" && q.length < 30 &&
//         typeof (q) === "string" && typeof (q) != null && typeof (b) != null) {
//         console.log("done");
//         appData.expenses[q] = b;
//         i++;
//     } else {
//         alert("Неверно введено");
//     }
// }
// while (i < 2);

appData.moneyPerDay = appData.budget / 30;

if (appData.moneyPerDay <= 500) {

    alert("Низкий уровень дохода, твой расход в день: " + appData.moneyPerDay);
} else if (appData.moneyPerDay <= 2000 && appData.moneyPerDay > 500) {
    alert("Средний уровень дохода, твой расход в день: " + appData.moneyPerDay);
} else if (appData.moneyPerDay > 2000) {
    alert("Высокий уровень дохода, твой расход в день: "+ appData.moneyPerDay);
} else {
    alert("С твоим бюджетом что-то не так...");
}