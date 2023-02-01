
const form = document.querySelector("#taxForm");
form.addEventListener("submit", function(event) {
event.preventDefault();
const salary = parseInt(document.querySelector("#salary").value);

const oldStandard = parseInt(document.querySelector("#oldStandard").value);
const oldHRA = checkNan(parseInt(document.querySelector("#oldHRA").value));
const oldAllowance = checkNan(parseInt(document.querySelector("#oldAllowance").value));
const old80C = checkNan(parseInt(document.querySelector("#old80C").value));
const old80D = checkNan(parseInt(document.querySelector("#old80D").value));
const old80TTA = checkNan(parseInt(document.querySelector("#old80TTA").value));
const old80EEA = checkNan(parseInt(document.querySelector("#old80EEA").value));
const old24 = checkNan(parseInt(document.querySelector("#old24").value));

const taxableIncome = salary - oldHRA -oldAllowance - oldStandard - old80C - old80D - old80TTA - old80EEA - old24;

document.querySelector("#oldRegimeResult").innerHTML = oldRegime(taxableIncome);
document.querySelector("#newRegimeResult").innerHTML = newRegime(salary);
document.querySelector("#latestNewRegimeResult").innerHTML = latestNewRegime(salary);

document.querySelector("#latestvsOldPercentage").innerHTML = reductionPercentage(oldRegime(taxableIncome), latestNewRegime(salary)) + "%" ;
document.querySelector("#latestvsNewPercentage").innerHTML = reductionPercentage(newRegime(salary), latestNewRegime(salary)) + "%";


document.querySelector("#banner").style.display = "block";

});

function checkNan(value){
return isNaN(value) ? 0 : value;
}
  
function reductionPercentage(oldValue, newValue) {
let percentage = ((oldValue - newValue) / oldValue) * 100;
return Math.round(percentage);
}

function oldRegime(salary) {
let tax = 0;
if (salary <= 500000)
{
    return 0;
}
if (salary <= 250000) {
    tax = 0;
} else if (salary <= 500000) {
    tax = (salary - 250000) * 0.05;
} else if (salary <= 1000000) {
    tax = (salary - 500000) * 0.2 + 12500;
} else {
    tax = (salary - 1000000) * 0.3 + 112500;
}
return tax;
}

function newRegime(salary) {
let tax = 0;
if (salary <= 500000)
{
    return 0;
}
if (salary <= 250000) {
    tax = 0;
} else if (salary <= 500000) {
    tax = (salary - 250000) * 0.05;
} else if (salary <= 750000) {
    tax = (salary - 500000) * 0.1 + 12500;
} else if (salary <= 1000000) {
    tax = (salary - 750000) * 0.15 + 37500;
} else if (salary <= 1250000) {
    tax = (salary - 1000000) * 0.2 + 75000;
} else if (salary <= 1500000) {
    tax = (salary - 1250000) * 0.25 + 125000;
} else {
    tax = (salary - 1500000) * 0.3 + 187500;
}
return tax;
}

function latestNewRegime(salary) {
let tax = 0;

if (salary <= 700000)
{
    return 0;
}

if (salary >= 1550000)
{
    salary = salary - 52500;
}

if (salary <= 300000) {
    tax = 0;
} else if (salary <= 600000) {
    tax = (salary - 300000) * 0.05;
} else if (salary <= 900000) {
    tax = 15000 + 0.1 * (salary - 600000);
} else if (salary <= 1200000) {
    tax = 45000 + 0.15 * (salary - 900000);
} 
    else if (salary <= 1500000) {
    tax = 90000 + 0.2 * (salary - 1200000);
}
    else {
        tax = 150000 + 0.3 * (salary - 1500000);
    }
return tax;
}   