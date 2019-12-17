'use strict';

let money, time;

let startCalculation      = document.getElementById("start"),
    budgetValue           = document.getElementsByClassName("budget-value")[0],
    dayBudgetValue        = document.getElementsByClassName("daybudget-value")[0],
    levelValue            = document.getElementsByClassName("level-value")[0],
    expensesValue         = document.getElementsByClassName("expenses-value")[0],
    optionalExpensesValue = document.getElementsByClassName("optionalexpenses-value")[0],
    incomeValue           = document.getElementsByClassName("income-value")[0],
    mothSavingsValue      = document.getElementsByClassName("monthsavings-value")[0],
    yearSavingsValue      = document.getElementsByClassName("yearsavings-value")[0],
    expensesItem          = document.getElementsByClassName("expenses-item"),
    expensesBTN           = document.getElementsByTagName("button")[0],
    optionalExpensesBTN   = document.getElementsByTagName("button")[1],
    countBudgetBTN        = document.getElementsByTagName("button")[2],
    optionalExpensesItem  = document.querySelectorAll(".optionalexpenses-item"),
    chooseIncome          = document.querySelector(".choose-income"),
    savings               = document.querySelector("#savings"),
    sumValue              = document.querySelector("#sum"),
    percentValue          = document.querySelector("#percent"),
    yearValue             = document.querySelector(".year-value"),
    monthValue            = document.querySelector(".month-value"),
    dayValue              = document.querySelector(".day-value");

let incomeLevel = function(item) {
    if (item <= 500) {
        levelValue.textContent = "Низкий уровень дохода";
    } else if (item <= 2000 && item > 500) {
        levelValue.textContent = "Средний уровень дохода";
    } else if (item > 2000) {
        levelValue.textContent = "Высокий уровень дохода";
    } else {
        levelValue.textContent = "С твоим бюджетом что-то не так...";
    }
};

expensesBTN.disabled = true;
optionalExpensesBTN.disabled = true;
countBudgetBTN.disabled = true;

startCalculation.addEventListener("click", function() {
    money = +prompt("Ваш бюджет на месяц?","");

    while (money == null || money == "" || isNaN(money)) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }

    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

    expensesBTN.disabled = false;
    optionalExpensesBTN.disabled = false;
    countBudgetBTN.disabled = false;

});

expensesBTN.addEventListener("click", function() {
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++) {

        let q = expensesItem[i].value,
            b = expensesItem[++i].value;
    
        if (q != "" && b != "" && q.length < 30 && typeof (q) === "string" &&
         typeof (q) != null && typeof (b) != null) {
            appData.expenses[q] = b;
            sum += +b;
        }
    }
    expensesValue.textContent = sum;
    let dayValueWithExpenses = 
    ((+appData.budget - +expensesValue.textContent) / 30).toFixed(1);
    
    dayBudgetValue.textContent = dayValueWithExpenses;
    incomeLevel(dayValueWithExpenses);
});

optionalExpensesBTN.addEventListener("click", function() {
    let text = "";
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let q = optionalExpensesItem[i].value;
       appData.optionalExpenses[i] = q;
       text += appData.optionalExpenses[i] + " ";
    }
    optionalExpensesValue.textContent = text;
});

countBudgetBTN.addEventListener("click", function() {
    appData.moneyPerDay = 
    ((+appData.budget - +expensesValue.textContent) / 30).toFixed(1);

    dayBudgetValue.textContent = appData.moneyPerDay.toFixed(1);
    incomeLevel(appData.moneyPerDay);
});

chooseIncome.addEventListener("change", function() {
    incomeValue.textContent = chooseIncome.value;
    let str = chooseIncome.value;
    appData.income = str.split(" ");
});

savings.addEventListener("click", function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener("change", function() {
    if (appData.savings == true) {
        let save = +sumValue.value,
        percent = +percentValue.value;
        appData.monthIncome = (save / 100 / 12 * percent).toFixed(1);
        mothSavingsValue.textContent = (save / 100 / 12 * percent).toFixed(1);
        yearSavingsValue.textContent = (save / 100 * percent).toFixed(1);

    } 
});

percentValue.addEventListener("change", function() {
    if (appData.savings == true) {
        let save = +sumValue.value,
        percent = +percentValue.value;
        appData.monthIncome = (save / 100 / 12 * percent).toFixed(1);
        mothSavingsValue.textContent = (save / 100 / 12 * percent).toFixed(1);
        yearSavingsValue.textContent = (save / 100 * percent).toFixed(1);

    } 
});


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let options = {
    width: 1024,
    heigth: 1024,
    name: "test"
};

delete options.width;
console.log(options);

options.color = {
    border: true,
    name: "again"
};

console.log(options);

for (let key in options) {
    console.log("свойство " + key + " значение " + options[key]);
}

console.log(Object.keys(options).length);

let arr = ["one", 2, 3, "four", 5];
arr.pop();
arr.push("5");
console.log(arr);

arr.forEach(function (item, i) {
    console.log(i + " " + item);
});




