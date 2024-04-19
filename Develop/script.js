// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects

  const employees = []; //This is my array for storing

  let addEmployees = true;
  while (addEmployees) {
    // Ive added a while loop to add additional employees

    const firstName = prompt("Enter Employee First name: "); //Now ive added my objects
    const lastName = prompt("Enter Employee Last name: ");
    const salary = prompt("Enter employee salary: ");

    if (isNaN(salary)) {
      salary = 0;
    }
    employeeObject = {
      firstName: firstName,
      lastName: lastName,
      salary: parseFloat(salary),
    }; //Objects
    employees.push(employeeObject);
    console.log(employees);

    addEmployees = confirm("add another employee?");
    if (!addEmployees) {
      //added an if statement with not(!) to have a false statement.
      break;
    }
  }

  return employees; //this will stop my function
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  let employeeTotalSalary = 0; // We start with the value of 0.
  for (let i = 0; i < employeesArray.length; i++) {
    employeeTotalSalary += employeesArray[i].salary;
  }
  const averageSalary = employeeTotalSalary / employeesArray.length;
  console.log(
    `The Average Salary employee salary between our ${
      employeesArray.length
    } employee(s) is $${averageSalary.toFixed(2)}`
  );
  return averageSalary;
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const index = getRandomInt(employeesArray.length);
  const random_employee = employeesArray[index];
  const full_name = random_employee.firstName + " " + random_employee.lastName;
  console.log(`Congratulations to ${full_name}, our random drawing winner!`);
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

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
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
