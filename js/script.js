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

// Formats Number Values as Currency ($U.S.)
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


  let employee02 = {};  // Creates temporary Object to be pushed to employeesArray
  
  employee02.firstName = "Barnard";
  employee02.lastName = "Brown";
  employee02.salary = 200;

  employeesArray.push(employee02);


  let employee03 = {};  // Creates temporary Object to be pushed to employeesArray
  
  employee03.firstName = "Carl";
  employee03.lastName = "Cooper";
  employee03.salary = 300;

  employeesArray.push(employee03);


  let employee04 = {};  // Creates temporary Object to be pushed to employeesArray
  
  employee04.firstName = "Dale";
  employee04.lastName = "Davidson";
  employee04.salary = 400;

  employeesArray.push(employee04);

  
  let employee05 = {};  // Creates temporary Object to be pushed to employeesArray

  employee05.firstName = "Eric";
  employee05.lastName = "Elphson";
  employee05.salary = 500;

  employeesArray.push(employee05);


  let employee06 = {};  // Creates temporary Object to be pushed to employeesArray

  employee06.firstName = "Frederick";
  employee06.lastName = "Ferguson";
  employee06.salary = 600;

  employeesArray.push(employee06);


  console.log("Function-Populated Array", employeesArray);
};


// Collect employee data
// TODO: Get user input to create and return an array of employee objects
const collectEmployees = function() {

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
// TODO: Calculate and display the average salary
const displayAverageSalary = function(employeesArray) {
  
  let countSalaries = 0;
  let sumSalary = 0;
  let avgSalary = 0;

  // Calculate Count of Employee Salaries
  employeesArray.forEach(salary => {
    countSalaries += 1;  // 'var += 1' syntax recommended by Instructor, rather than 'var++'
  });
  countSalaryTitle = `Count of Employee Salaries: `;
  // Console Log Output
  console.log(countSalaryOutput = `Count of Employee Salaries: ${countSalaries}.`);

  // Calculate Sum of Salaries
  sumSalary = employeesArray.reduce((i, {salary}) => i + salary, 0);  // https://stackoverflow.com/questions/16600925/how-can-i-add-a-variable-to-console-log
  sumSalaryFormatted = currencyDollar.format(sumSalary);
  sumSalaryTitle = `Sum of Employee Salaries: `;
  // Console Log Output
  console.log(sumSalaryOutput = `Sum of Employee Salaries: ${sumSalaryFormatted}.`);

  // Calculate Average Salary
  avgSalary = currencyDollar.format(sumSalary / countSalaries);
  avgSalaryTitle = `Average Employee Salary: `
  // Console Log Output
  console.log(`The average Employee Salary of the ${countSalaries} recorded Salary(s) is, ${avgSalary}.`);


  // Create HTML Elements for Calculated Function Output

  // Create HTML Element: Employee Data Summary Container Div
  const divDataSummary = document.createElement("div");  // Creates new <div> Element
  const referenceNode = document.querySelector('#cardfooter');  // Finds existing Element ID to which to Append
  referenceNode.after(divDataSummary);  // Appends new <div> to identified Element ID
  divDataSummary.setAttribute("class", "summary");  // Assigns Class to <div> Element
  divDataSummary.setAttribute("id", "dataSummary");  // Assigns ID to <div> Element


  // Create HTML Element: Employee Data Summary Header
  const headDataSummary = document.createElement("h2");  // Creates new <h2> Element
  const headTitleNode = document.createTextNode("Employee Data Summary");  // Creates Text Node for new <h2> with Text
  headDataSummary.append(headTitleNode);  // Appends Text Node to <h2> Element
  const divDataSummaryNew = document.getElementById("dataSummary");  // Finds existing Element ID to which to Append
  divDataSummaryNew.appendChild(headDataSummary); // Appends new <h2> to existing <div> Element
  headDataSummary.setAttribute("id", "headerDataSummary");
  
  const refDataSumHeaderNode = document.querySelector('#headerDataSummary'); // Identifies existing Header Element ID to which to Append


  // Create HTML Element: Average Employee Salary
  const divAvgSalary = document.createElement("div");  // Create new Container <div> Element
  refDataSumHeaderNode.after(divAvgSalary); // Appends new <div> to identified Element ID
  divAvgSalary.setAttribute("class", "output");
  divAvgSalary.setAttribute("id", "divAvgSalary")

  const headAvgSalary = document.createElement("h3"); // Creates new <h3> Element
  const paraAvgSalary = document.createElement("p");  // Creates new <p> Element

  const headAvgSalaryNode = document.createTextNode(avgSalaryTitle)  // Creates Text Node for paraSumSalary
  const paraAvgSalaryNode = document.createTextNode(avgSalary);  // Creates Text Node for paraAvgSalary

  headAvgSalary.append(headAvgSalaryNode);  // Appends Text Node to <p> Element
  paraAvgSalary.appendChild(paraAvgSalaryNode);  // Appends Text Node to <p> Element

  const avgSalaryHead = document.getElementById("divAvgSalary");  // Finds existing Element to which to Append
  const avgSalaryPara = document.getElementById("divAvgSalary");  // Finds existing Element to which to Append

  avgSalaryHead.appendChild(headAvgSalary);  // Appends new Element to existing Element
  avgSalaryPara.appendChild(paraAvgSalary);  // Appends new Element to existing Element


  // Create HTML Element: Sum of Employee Salaries
  const divSumSalary = document.createElement("div");  // Create new Container <div> Element
  refDataSumHeaderNode.after(divSumSalary); // Appends new <div> to identified Element ID
  divSumSalary.setAttribute("class", "output");
  divSumSalary.setAttribute("id", "divSumSalary")

  const headSumSalary = document.createElement("h3"); // Creates new <h3> Element
  const paraSumSalary = document.createElement("p");  // Creates new <p> Element

  const headSumSalaryNode = document.createTextNode(sumSalaryTitle)  // Creates Text Node for paraSumSalary
  const paraSumSalaryNode = document.createTextNode(sumSalaryFormatted);  // Creates Text Node for paraSumSalary
  
  headSumSalary.appendChild(headSumSalaryNode);  // Appends Text Node to <p> Element
  paraSumSalary.appendChild(paraSumSalaryNode);  // Appends Text Node to <p> Element
  
  const sumSalaryHead = document.getElementById("divSumSalary"); // Finds existing Element to which to Append
  const sumSalaryPara = document.getElementById("divSumSalary");  // Finds existing Element to which to Append
  
  sumSalaryHead.appendChild(headSumSalary);  // Appends new Element to existing Element
  sumSalaryPara.appendChild(paraSumSalary);  // Appends new Element to existing Element


  // Create HTML Element: Count of Employee Salaries
  const divCountSalary = document.createElement("div");  // Create new Container <div> Element
  refDataSumHeaderNode.after(divCountSalary); // Appends new <div> to identified Element ID
  divCountSalary.setAttribute("class", "output");
  divCountSalary.setAttribute("id", "divCountSalary")

  const headCountSalary = document.createElement("h3"); // Creates new <h3> Element
  const paraCountSalary = document.createElement("p");  // Creates new <p> Element

  const headCountSalaryNode = document.createTextNode(countSalaryTitle)  // Creates Text Node for Function Variable, countSalaryTitle
  const paraCountSalaryNode = document.createTextNode(countSalaries);  // Creates Text Node for Function Variable, countSalaries
  
  headCountSalary.appendChild(headCountSalaryNode);  // Appends Text Node to <h3> Element
  paraCountSalary.appendChild(paraCountSalaryNode);  // Appends Text Node to <p> Element

  const countSalaryHead = document.getElementById("divCountSalary");  // WAS dataSummary WAS calcOutput Finds existing Element ID to which to Append
  const countSalaryPara = document.getElementById("divCountSalary");  // WAS dataSummary WAS calcOutput Finds existing Element ID to which to Append
  
  countSalaryHead.appendChild(headCountSalary);  // Appends new Element to existing Element
  countSalaryPara.appendChild(paraCountSalary);  // Appends new Element to existing Element
}


// Select a random employee
// TODO: Select and display a random employee
const getRandomEmployee = function(employeesArray) {

  const randomEmployee = Math.floor(Math.random() * employeesArray.length);
  randomEmpOutput = `Congratulations to ${employeesArray[randomEmployee].firstName} ${employeesArray[randomEmployee].lastName}, our random drawing winner!`;
  // Console Log Output
  console.log(randomEmpOutput);


  // Create HTML Element: Random Employee Container Div
  const divRandomEmp = document.createElement("div");  // Creates new <div> Element
  const referenceNode = document.querySelector('#carddiv');  // Finds existing Element ID to which to Append
  referenceNode.after(divRandomEmp);  // Appends new <div> to identified Element ID
  divRandomEmp.setAttribute("class", "randonemp");  // Assigns Class to Element
  divRandomEmp.setAttribute("id", "randomEmp");  // Assigns ID to Element


  // Create HTML Element: Random Employee Header
  const headRandomEmp = document.createElement("h2");  // Creates new <h2> Element
  const headEmpNode = document.createTextNode("Random Employee Winner!");  // Creates Text Node for new <h2> with Text
  headRandomEmp.append(headEmpNode);  // Appends Text Node to <h2> Element
  const divRandomEmpNew = document.getElementById("randomEmp");  // Finds existing Element ID to which to Append
  divRandomEmpNew.appendChild(headRandomEmp); // Appends new <h2> to existing <div> Element
  headRandomEmp.setAttribute("id", "headerRandomEmp");
  
  const refRandomEmpHeader = document.querySelector('#headerRandomEmp'); // Identifies existing Header Element ID to which to Append

  // Create HTML Element: Random Employee Winner
  const paraRandomEmp = document.createElement("p");  // Create new Container <p> Element
  // paraRandomEmp.setAttribute("class", "output");  // Assigns Class to Element

  const paraRandomEmpNode = document.createTextNode(randomEmpOutput);  // Creates Text Node for paraAvgSalary

  paraRandomEmp.appendChild(paraRandomEmpNode);  // Appends Text Node to <p> Element

  const randomEmpPara = document.getElementById("headerRandomEmp");  // Finds existing Element to which to Append

  randomEmpPara.appendChild(paraRandomEmp);  // Appends new Element to existing Element
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

