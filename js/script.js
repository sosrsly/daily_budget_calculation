'use strict';

let money,
    time;

function start() {
    money = +prompt("Ваш бюджет на месяц?");

    while (money == null || money == "" || isNaN(money)) {
        money = +prompt("Ваш бюджет на месяц?");
    }

    time = prompt("Введите дату в формате YYYY-MM-DD"); 
}

// start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};


function chooseExpenses() {
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
}

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Сколько денег накоплено?", ""),
        procent = +prompt("Под какой процент?", "");

        appData.monthIncome = save / 100 / 12 * procent;
        alert("Ваш доход от накоплений за месяц состовляет: " + appData.monthIncome);
    }
}

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Возможный расход в день: " + appData.moneyPerDay);
}

function detectLevel() {
    if (appData.moneyPerDay <= 500) {

        console.log("У вас низкий уровень дохода");
    } else if (appData.moneyPerDay <= 2000 && appData.moneyPerDay > 500) {
        console.log("У вас средний уровень дохода");
    } else if (appData.moneyPerDay > 2000) {
        console.log("У вас высокий уровень дохода");
    } else {
        console.log("С твоим бюджетом что-то не так...");
    }
}

function chooseOptExpenses() {

        for (let i = 1; i <= 3; i++) {
            let q = prompt("Статья необязательных расходов", "");
           appData.optionalExpenses[i] = q;
        }
        console.log(appData.optionalExpenses);     
}


// chooseExpenses();

// checkSavings();

// detectDayBudget();

// detectLevel();

chooseOptExpenses();