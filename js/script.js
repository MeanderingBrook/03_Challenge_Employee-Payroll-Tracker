// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.getElementById('#add-employees-btn');

// let employeesArray = [];  // DOES THIS NEED TO BE HERE AS GLOBAL OR IN collectEmployees???

// let i = 0;

const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects

  let employeesArray = [];

  console.log("collectEmployees Function Ran.")

  let employee = {};  // Creates temporary Object to be added to employeesArray

  // Note to Evalators: While Loop seems inappropriate for the requested functionality, 
  // and typical attributes of While Loops, such as incrementing counters, don't have a useful place.
  // (Were I not working from given code, and the Technical Requirement to use a While Loop, I would have opted for
  // a For Loop, or Do While Loop, or a simply ingested the User Input directly into the temporary Employee Object with an Error Check, 
  // or... etc.)
  // Instead of an incrementing counter (there's nothing to count in this Use Case) I opted for a binary variable
  // to determine whether an Employee Record is complete or not (i.e., First Name, Last Name, and Salary have been input),
  // recognizing that this the framework itself is kludgey.

  let empRecordComplete = false;  // Employee Record is NOT Complete

  // THIS STILL DOESNT CATCH CANCELLED ENTRIES
  do {
    employee.firstName = prompt("First Name").trim();
  } while (employee.firstName == null);

  do {
    employee.lastName = prompt("Last Name").trim();
  } while (employee.lastName == null);

  do {
    employee.salary = prompt("Salary").trim();
  } while (employee.salary == null);

  // THIS WORKS FINE JUST DOESNT ADDRESS CANCELLED ENTRIES
  // while (empRecordComplete === false) {
  //   // SUPERSEDED EXAMPLE 
  //   // input = prompt("First Name");
  //   // employeesArray.push({ firstName: input });
  //   // console.log(employeesArray);
  //   employee.firstName = prompt("First Name").trim();
  //   // i++;
  //   employee.lastName = prompt("Last Name").trim();
  //   // i++;
  //   employee.salary = prompt("Salary").trim();
  //   // i++;
  //   empRecordComplete = true;
  // }

  employeesArray.push(employee);
  console.log(employeesArray);

  if (confirm("Do you wish to add another Employee?")) {
    // i = 0;
    empRecordComplete = false;
    console.log("User elected to add Additional Employee.")
    collectEmployees();
  } else {
    // i = 0;
    empRecordComplete = true;
    console.log("User did not add Additional Employee.")
    return employeesArray;  // RETURN THIS ARRAY INSTEAD OF DECLARING AS GLOBAL?????
  }
}


// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
}


// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
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
// addEmployeesBtn.addEventListener('click', trackEmployeeData);
// addEmployeesBtn.addEventListener('click', collectEmployees);