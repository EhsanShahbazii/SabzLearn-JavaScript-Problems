const $ = document;
let tableEmployee = $.getElementById("tableEmployee"),
  tableRole = $.getElementById("tableRole"),
  employeeInput = $.getElementById("employee"),
  taskInput = $.getElementById("task"),
  addTask = $.getElementById("addTask");

let empName = $.getElementById("employees"),
  rolesField = $.getElementById("role"),
  addEmp = $.getElementById("addEmp");

let taskWho = $.getElementById("taskWho"),
  showTaskWho = $.getElementById("showTaskWho"),
  showt = $.getElementById("showt"),
  showTaskBtn = $.getElementById("showTaskBtn");

let task, name, role;
let empData = [{}];

addTask.addEventListener("click", () => {
  name = employeeInput.value;
  task = taskInput.value;

  if (name && task) {
    let i = empData.findIndex((emp) => emp.name === name);
    if (i > 0) {
      empData[i].task = task;
    } else {
      alert("employee not found. try again.");
    }
    employeeInput.value = "";
    taskInput.value = "";
    alert(`employee name: ${name} with task: ${task} added.`);
  } else {
    alert("please fill the inputs");
  }
});

addEmp.addEventListener("click", () => {
  name = empName.value;
  role = rolesField.value;

  if (name && role) {
    tableEmployee.innerHTML += `<td>${name}</td>`;
    tableRole.innerHTML += `<td>${role}</td>`;
    empData.push({ name, role, task: "" });
    empName.value = "";
    rolesField.value = "";
    alert(`new employee name: ${name} with role: ${role} is added!`);
  } else {
    alert("please fill the inputs");
  }
});

showTaskBtn.addEventListener("click", () => {
  name = showt.value;
  let i = empData.findIndex((em) => em.name === name);
  if (i > 0) {
    let user = empData[i];
    taskWho.innerText = user.name;
    showTaskWho.innerText = user.task;
    showt.value = "";
  } else {
    alert("please add correct employee name.");
  }
});
