/* ---------------------------------------------- */

// SUPERSEDED CODE
  // THIS STILL DOESNT CATCH CANCELLED ENTRIES
  // do {
  //   employee.firstName = prompt("First Name").trim();
  // } while (employee.firstName == null);

  // do {
  //   employee.lastName = prompt("Last Name").trim();
  // } while (employee.lastName == null);

  // do {
  //   employee.salary = prompt("Salary").trim();
  // } while (employee.salary == null);


// SUPERCEDED While with i Increment 
//     while (empRecordComplete === false) {
//     // SUPERSEDED EXAMPLE 
//     // input = prompt("First Name");
//     // employeesArray.push({ firstName: input });
//     // console.log(employeesArray);
//     employee.firstName = prompt("First Name").trim();
//     // i++;
//     employee.lastName = prompt("Last Name").trim();
//     // i++;
//     employee.salary = prompt("Salary").trim();
//     // i++;
//     empRecordComplete = true;
//   }

//   employeesArray.push(employee);
//   console.log(employeesArray);

//   if (confirm("Do you wish to add another Employee?")) {
//     // i = 0;
//     empRecordComplete = false;
//     console.log("User elected to add Additional Employee.")
//     collectEmployees();
//   } else {
//     // i = 0;
//     empRecordComplete = true;
//     console.log("User did not add Additional Employee.")
//     console.log(employeesArray)
//     return employeesArray;  // RETURN THIS ARRAY INSTEAD OF DECLARING AS GLOBAL?????
//   }
// }