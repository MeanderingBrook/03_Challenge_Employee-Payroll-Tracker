// Console Test Scripts:
// populateEmpArray()
// displayAverageSalary(employeesArray)
// getRandomEmployee(employeesArray)

// Note to Evalators: A While Loop seems inappropriate for the requested functionality, 
// and typical attributes of While Loops, such as incrementing counters, don't have a useful place.
// (Were I not working from given code, and the Technical Requirement to use a While Loop, I would have opted for
// a For Loop, or Do While Loop, or a simply ingested the User Input directly into the temporary Employee Object with an Error Check 
// before pushing the values to employeesArray, or... etc.)
// Instead of an incrementing counter (there's nothing to count in this Use Case) I opted for a binary variable
// to determine whether an Employee Record is complete or not (i.e., First Name, Last Name, and Salary have been input),
// recognizing that this the framework itself is kludgey.

let employeesArray = [];  // Must be Global Array

let currencyDollar = new Intl.NumberFormat('en-US', {  // https://www.freecodecamp.org/news/how-to-format-number-as-currency-in-javascript-one-line-of-code/
    style: 'currency',
    currency: 'USD',
});

// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.getElementById("add-employees-btn");

// Populates employeesArray with sample data for Development
function populateEmpArray() {

  let employee01 = {};  // Creates temporary Object to be pushed to employeesArray

  employee01.firstName = "Andrew";
  employee01.lastName = "Anderson";
  employee01.salary = 100;

  employeesArray.push(employee01);


  let employee02 = {};
  
  employee02.firstName = "Barnard";
  employee02.lastName = "Brown";
  employee02.salary = 200;

  employeesArray.push(employee02);


  let employee03 = {};
  
  employee03.firstName = "Carl";
  employee03.lastName = "Cooper";
  employee03.salary = 300;

  employeesArray.push(employee03);


  let employee04 = {};
  employee04.firstName = "Dale";
  employee04.lastName = "Davidson";
  employee04.salary = 400;

  employeesArray.push(employee04);

  
  let employee05 = {};

  employee05.firstName = "Eric";
  employee05.lastName = "Elphson";
  employee05.salary = 500;

  employeesArray.push(employee05);


  let employee06 = {};

  employee06.firstName = "Frederick";
  employee06.lastName = "Ferguson";
  employee06.salary = 600;

  employeesArray.push(employee06);


  console.log("Function-Populated Array", employeesArray);
  console.log(`Function-populated employeesArray Values: ${JSON.stringify(employeesArray)}`);
};

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects

  console.log("collectEmployees Function Ran.")

  let employee = {};  // Creates temporary Object to be pushed to employeesArray

  let empRecordComplete = false;  // Employee Record (Array Object: First Name, Last Name, Salary) is NOT Complete

  // THIS WORKS FINE JUST DOESNT ADDRESS CANCELLED ENTRIES
  while (empRecordComplete === false) {
    employee.firstName = prompt("First Name").trim();
    employee.lastName = prompt("Last Name").trim();
    employee.salary = parseFloat(prompt("Salary").trim());  // Converts User Input from String to Float
    empRecordComplete = true;
  }

  employeesArray.push(employee);
  console.log("Current employeesArray Values:", employeesArray);

  if (confirm("Do you wish to add another Employee?")) {
    empRecordComplete = false;
    console.log("User elected to add Additional Employee.");
    collectEmployees();
  } else {
    empRecordComplete = true;
    console.log("User elected not to add Additional Employee.");
    console.log("Final employeesArray Values:", employeesArray);
    return employeesArray;  // DONT THINK THIS NEEDS TO BE RETURNED SINCE ARRAY IS GLOBAL?????
  }
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  
  let countSalaries = 0;
  let sumSalary = 0;
  let avgSalary = 0;

  // Superseded for Salary-specific count; Object.key counts Keys not Elements (Salaries)
  // let numEmp = 0;
  // numEmp = Object.keys(employeesArray).length
  // console.log(numEmp);

  // Superseded for forEach
  // for (const salary of employeesArray) {
  //   if (salary.status !== null) countSalaries++;
  // }

  // Superseded for forEach
  // for (const salary of employeesArray) {
  //   if (salary.status) countSalaries += 1;
  // };

  employeesArray.forEach(salary => {
    countSalaries += 1;  // 'var += 1' syntax recommended by Instructor, rather than 'var++'
  });
  countSalaryOutput = `Count of Employee Salaries: ${countSalaries}.`;
  // console.log(`Count of Employee Salaries: ${countSalaries}.`);
  console.log(countSalaryOutput);

  sumSalary = employeesArray.reduce((i, {salary}) => i + salary, 0);  // https://stackoverflow.com/questions/16600925/how-can-i-add-a-variable-to-console-log
  sumSalaryOutput = `Sum of Employee Salaries: ${currencyDollar.format(sumSalary)}.`;
  console.log(sumSalaryOutput);

  avgSalary = sumSalary / countSalaries;
  avgSalaryOuput = `Average Employee Salary: ${currencyDollar.format(avgSalary)}.`
  console.log(avgSalaryOuput);

  console.log(`The average Employee Salary of the ${countSalaries} recorded Salary(s) is, ${currencyDollar.format(avgSalary)}.`);


  // Create HTML Elements for Calculated Function Output

  // HTML Element: Count of Employee Salaries
  const paraEmpSalary = document.createElement("p");  // Creates new <p> Element
  const empSalaryNode = document.createTextNode(countSalaryOutput);  // Creates Text Node for paraEmpSalary
  paraEmpSalary.appendChild(empSalaryNode);  // Appends Text Node to <p> Element
  const countSalaryPara = document.getElementById("calcOutput");  // Finds existing Element to which to Append
  countSalaryPara.appendChild(paraEmpSalary);  // Appends new Element to existing Element

  // HTML Element: Sum of Employee Salaries
  const paraSumSalary = document.createElement("p");  // Creates new <p> Element
  const sumSalaryNode = document.createTextNode(sumSalaryOutput);  // Creates Text Node for paraSumSalary
  paraSumSalary.appendChild(sumSalaryNode);  // Appends Text Node to <p> Element
  const sumSalaryPara = document.getElementById("calcOutput");  // Finds existing Element to which to Append
  sumSalaryPara.appendChild(paraSumSalary);  // Appends new Element to existing Element

  // HTML Element: Average Employee Salary
  const paraAvgSalary = document.createElement("p");  // Creates new <p> Element
  const avgSalaryNode = document.createTextNode(avgSalaryOuput);  // Creates Text Node for paraAvgSalary
  paraAvgSalary.appendChild(avgSalaryNode);  // Appends Text Node to <p> Element
  const avgSalaryPara = document.getElementById("calcOutput");  // Finds existing Element to which to Append
  avgSalaryPara.appendChild(paraAvgSalary);  // Appends new Element to existing Element

// populateEmpArray()
// displayAverageSalary(employeesArray)

}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee

  const randomEmployee = Math.floor(Math.random() * employeesArray.length);

  console.log(`Congratulations to ${employeesArray[randomEmployee].firstName} ${employeesArray[randomEmployee].lastName}, our random drawing winner!`);
}


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
// addEmployeesBtn.addEventListener('click', collectEmployees);

