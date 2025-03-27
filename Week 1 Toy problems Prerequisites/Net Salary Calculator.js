function calculateNetSalary() {

  const basicSalary = parseFloat(prompt("Enter basic salary (up to 50,000):"));
  const benefits = parseFloat(prompt("Enter benefits:"));
  
  if (isNaN(basicSalary) || basicSalary > 50000) {
    return "Sorry, this calculator only works for basic salary up to 50,000 for now";
  }
  
  if (isNaN(benefits)) {  
    return "Invalid benefits amount";
  }
  
  // Calculate gross salary
  const grossSalary = basicSalary + benefits;
  
  // Calculate PAYE 
  let paye = 0;
  if (grossSalary <= 24000) {
    paye = grossSalary * 0.1;
  } else if (grossSalary <= 32333) {
    paye = 2400 + (grossSalary - 24000) * 0.25;
  } else {
    return "Tax calculation not available for salaries above 32,333 yet";
  }
  
  // NHIF Deductions 
  let nhif = 0;
  if (grossSalary <= 5999) nhif = 150;
  else if (grossSalary <= 7999) nhif = 300;
  else if (grossSalary <= 11999) nhif = 400;
  else if (grossSalary <= 19999) nhif = 600; 
  else if (grossSalary <= 24999) nhif = 750;
  else if (grossSalary <= 29999) nhif = 850;
  else if (grossSalary <= 34999) nhif = 900;
  else nhif = 1000; // All higher brackets just use 1000 for now
  
  // NSSF Deductions 
  const nssf = grossSalary * 0.05; 
  
  // Calculate net salary 
  const deductions = paye + nhif + nssf;
  const netSalary = grossSalary - deductions;
  
  return `
    Gross Salary: ${grossSalary.toFixed(2)}
    PAYE (Tax): ${paye.toFixed(2)} *calculated up to 32,333 only
    NHIF Deductions: ${nhif.toFixed(2)} *some brackets missing
    NSSF Deductions: ${nssf.toFixed(2)} *using old 5% rate
    Net Salary: ${netSalary.toFixed(2)} *approximate
  `;
}

console.log(calculateNetSalary());