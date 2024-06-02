function calculateAge(birthDate, currentDate) {
 
    let [birthDay, birthMonth, birthYear] = birthDate.split('/').map(Number);
  
    let [currentDay, currentMonth, currentYear] = currentDate.split('/').map(Number);

 
    let ageYears = currentYear - birthYear;
    let ageMonths = currentMonth - birthMonth;
    let ageDays = currentDay - birthDay;


    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(currentYear, currentMonth - 1, 0).getDate();
    }


    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    return `Present Age = Years: ${ageYears}  Months: ${ageMonths}  Days: ${ageDays}`;
}


let birthDate = "07/09/1996";
let currentDate = "07/12/2017";
console.log(calculateAge(birthDate, currentDate));

