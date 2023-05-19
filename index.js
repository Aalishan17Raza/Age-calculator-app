const input_year = document.querySelector('#year');
const input_day = document.querySelector('#day');
const input_month = document.querySelector('#month');

const error_month = document.querySelector('.error-month');
const error_year = document.querySelector('.error-year');
const error_day = document.querySelector('.error-day');

let isValid = false;

input_day.addEventListener('input', (e) => {
    if (e.target.value > 31) {
        error_day.textContent = 'Must be a valid date';
        input_day.style.border='1.5px solid var(--Light-red)';
        isValid = false;
    }else if(+e.target.value===0){
        error_day.textContent = 'This field is required';
        input_day.style.border='1.5px solid var(--Light-red)';
        isValid = false;
    }else {
        isValid = true;
        input_day.style.border='1.5px solid var(--Purple)';
        error_day.textContent = ''
    }
    
})

input_month.addEventListener('input', (e) => {
    if (e.target.value > 12 || e.target.value < 0
        || !Number.isInteger(+e.target.value)) {
        error_month.textContent = 'Must be a valid month';
        input_month.style.border='1.5px solid var(--Light-red)';
        isValid = false;
    }else if(+e.target.value===0){
        error_month.textContent = 'This field is required';
        input_month.style.border='1.5px solid var(--Light-red)';
        isValid = false;
    } else {
        isValid = true;
        input_month.style.border='1.5px solid var(--Purple)';
        error_month.textContent = ''
    }
    
})

input_year.addEventListener('input', (e) => {
    const date = new Date();
    if (e.target.value > date.getFullYear() ||!Number.isInteger(+e.target.value)) {
        error_year.textContent = 'Must be a valid year';
        input_year.style.border='1.5px solid var(--Light-red)';
        isValid = false;
    }else if(+e.target.value===0){
        error_year.textContent = 'This field is required';
        input_year.style.border='1.5px solid var(--Light-red)';
        isValid = false;
    } else {
        isValid = true;
        input_year.style.border='1.5px solid var(--Purple)';
        error_year.textContent = ''
    }
})


const output_year = document.querySelector('.output-year');
const output_month = document.querySelector('.output-month');
const output_day = document.querySelector('.output-day');
const submit_btn = document.querySelector('.submit-btn');
submit_btn.addEventListener('click', AgeCalculator);

function AgeCalculator() {
    if(!isValid){
        alert("Error! input values properly");
        return;
    }
    //current date values
    const currDate = new Date();
    let currYear=currDate.getFullYear();
    let currMonth=currDate.getMonth();
    let currDay=currDate.getDate();

    //year
    let yearAge=currYear- (+input_year.value);
    
    //month
    let monthAge;
    if(currMonth >= +input_month.value){
        monthAge=currMonth- (+input_month.value)+1;
    }else{
        yearAge--;
        monthAge=12+currMonth- (+input_month.value)+1;
    }

    //day
    let dayAge;
    if(currDay>=(+input_day.value)){
        dayAge=currDay-(+input_day.value);
    }else{
        monthAge--;
        dayAge=31+currDay-(+input_day.value);
        if (monthAge < 0) {  
            monthAge = 11;  
            yearAge--;  
        }  
    }

    let age={
        years:yearAge,
        months: monthAge,
        days: dayAge
    };

    output_day.innerHTML=age.days;
    output_month.innerHTML=age.months;
    output_year.innerHTML=age.years;
    return;
}