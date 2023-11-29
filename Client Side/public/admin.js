function search_sort() {
  document.getElementById("searchInput").addEventListener("input", function () {
    let input, filter, table, tbody, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tbody = document.getElementById("TableData");
    tr = tbody.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td");
      for (let j = 0; j < td.length; j++) {
        txtValue = td[j].textContent || td[j].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
          break; // Break the inner loop to avoid displaying the row multiple times
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  });
}
let sortOrders = []; // Array to keep track of sort order for each column
function sortTable(columnIndex) {
  let table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
  // Initialize sort order for the column if not already set
  if (!sortOrders[columnIndex]) {
    sortOrders[columnIndex] = 1; // 1 for ascending
  } else {
    sortOrders[columnIndex] *= -1; // Toggle between ascending (1) and descending (-1)
  }

  while (switching) {
    switching = false;
    rows = table.rows;

    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("td")[columnIndex];
      y = rows[i + 1].getElementsByTagName("td")[columnIndex];

      let xValue = x.innerHTML.toLowerCase();
      let yValue = y.innerHTML.toLowerCase();

      if (sortOrders[columnIndex] === 1 ? xValue > yValue : xValue < yValue) {
        shouldSwitch = true;
        break;
      }
    }

    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

let hasRun = false;
let AdminAllTask;
/**
 */
function welcome() {
  let dat = localStorage.getItem("check");
  if (dat == 1) {
    Swal.fire({
      title: "Welcome Admin",
      timer: 2000,
      showConfirmButton: false,
      icon: "success",
    });
    localStorage.setItem("check", 0);
  }
}
function adminTask() {
  let AdminTask = new XMLHttpRequest();
  AdminTask.open("Get", "http://localhost:8080/admintask");
  AdminTask.send();
  AdminTask.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        AdminAllTask = JSON.parse(this.responseText);
        localStorage.setItem("Admin Task", this.responseText);
        DisplayAdminTask();
        welcome();
        newData1();
      }
    }
  };
}
function filtertable(field) {
  let data1 = "";
  if (field == "Status") {
    DisplayAdminTask();
  } else {
    for (let i = 0; i < AdminAllTask.length; i++) {
      if (field == AdminAllTask[i].Status) {
        data1 += `<tr>
        <td>${i + 1}</td>
        <td><img src="https://tse3.mm.bing.net/th/id/OIP.cLWOmjHM6bwQg_1XULU8yAAAAA?pid=ImgDet&w=158&h=198&c=7" alt="">${
          AdminAllTask[i].Title
        }</td>
        <td>${AdminAllTask[i].Description}</td>
        <td  onclick="Popup('${AdminAllTask[i].Comments}','${
          AdminAllTask[i].Completion_Date
        }','${AdminAllTask[i].Assigned}')"d="point"> ${
          AdminAllTask[i].Assigned
        }</td>
        <td class=${AdminAllTask[i].Priority}> ${AdminAllTask[i].Priority}</td>
        <td><p class=${AdminAllTask[i].Status}>${
          AdminAllTask[i].Status
        }</p></td>
        <td>  <button type="button" data-bs-toggle="modal"  data-bs-target="#editModal"class="edit-btn" onclick="edittask('${
          AdminAllTask[i]._id
        }')"><i class="fas fa-edit"></i> Edit</button>
        <button type="button" class="delete-btn" data-bs-toggle="modal" id="DeleteButton" data-bs-target="#staticBackdrop"  onclick="onestepDelete('${
          AdminAllTask[i]._id
        }')"><i class="fas fa-trash-alt"></i> Delete</button></td</tr>`;
      }
    }
    document.getElementById("TableData").innerHTML = data1;
    document.getElementById("");
  }
}
function DisplayAdminTask() {
  let Data = "";
  for (let i = 0; i < AdminAllTask.length; i++) {
    Data += `<tr>
        <td>${i + 1}</td>
        <td><img src="https://tse3.mm.bing.net/th/id/OIP.cLWOmjHM6bwQg_1XULU8yAAAAA?pid=ImgDet&w=158&h=198&c=7" alt="">${
          AdminAllTask[i].Title
        }</td>
        <td>${AdminAllTask[i].Description}</td>
        <td onclick="Popup('${AdminAllTask[i].Comments}','${
      AdminAllTask[i].Completion_Date
    }','${AdminAllTask[i].Assigned}')"id="point"> ${
      AdminAllTask[i].Assigned
    }</td>
        <td class=${AdminAllTask[i].Priority}> ${AdminAllTask[i].Priority}</td>
        <td><p class=${AdminAllTask[i].Status}>${
      AdminAllTask[i].Status
    }</p></td>
        <td>  <button type="button" data-bs-toggle="modal"  data-bs-target="#editModal"class="edit-btn" onclick="edittask('${
          AdminAllTask[i]._id
        }')"><i class="fas fa-edit"></i> Edit</button>
        <button type="button" class="delete-btn" data-bs-toggle="modal" id="DeleteButton" data-bs-target="#staticBackdrop"  onclick="onestepDelete('${
          AdminAllTask[i]._id
        }')"><i class="fas fa-trash-alt"></i> Delete</button></td</tr>`;
  }
  document.getElementById("TableData").innerHTML = Data;
  search_sort();
}
function Popup(Data, Data1, Data2) {
  const dateStr = Data1;
  const normalDate = new Date(dateStr).toISOString().slice(0, 10);
  const date1 = new Date(Data1);
  const date2 = new Date(); // Today's date
  const timeDiff = date1.getTime() - date2.getTime();
  let daysDiff;
  if (timeDiff > 0) {
    daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  } else {
    daysDiff = 0;
  }
  Swal.fire({
    title: `<h2 style="color: #333; font-weight: bold;text-align:center">${Data2}</h2><h2 style="color: #333; font-weight: bold;">Comments : ${Data}</h2><h2 style="color: #333; font-weight: bold;text-align:center">Submission Date : ${normalDate}</h2> <span style="color: #333;">Remaining Date : ${daysDiff} Days</span>`,
    icon: "info",
    customClass: {
      titleContainer: {
        backgroundColor: "#fff",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "5px",
      },
    },
  });
}
function validateInput(input) {
  let errorMessage = document.getElementById("errorMessage");
  if (input.value.trim() === "") {
    errorMessage.textContent = "Please fill in all required fields.";
  } else if (input.getAttribute("email") === "text" && !input.checkValidity()) {
    errorMessage.textContent = "Please enter a valid email address.";
  } else {
    errorMessage.textContent = "";
  }
}
function edittask(unique_id) {
  let popupData1 = "";
  let Assigned_dropdown1 = localStorage.getItem("LoginData");
  Assigned_dropdown1 = JSON.parse(Assigned_dropdown1);
  popupData1 += ` <option selected>Select UserName</option>`;
  for (let i = 0; i < Assigned_dropdown1.length; i++) {
    popupData1 += `<option value=${Assigned_dropdown1[i].User_name}>${Assigned_dropdown1[i].User_name}</option>`;
  }
  document.getElementById("username1").innerHTML = popupData1;
  let Edit_modal_task = `<button type="button" class="btn btn-primary"  data-bs-dismiss="modal"onclick="EditTaskUpdate('${unique_id}')">Save changes</button>`;
  document.getElementById("editmodalDOM").innerHTML = Edit_modal_task;
  for (let i = 0; i < AdminAllTask.length; i++) {
    if (AdminAllTask[i]._id == unique_id) {
      document.getElementById("titleInput1").value = AdminAllTask[i].Title;
      document.getElementById("descriptionInput1").value =
        AdminAllTask[i].Description;
      document.getElementById("username1").value = AdminAllTask[i].Assigned;
      document.getElementById("statusDropdown1").value = AdminAllTask[i].Status;
      document.getElementById("priorityInput1").value =
        AdminAllTask[i].Priority;
      document.getElementById("DateInputUpdate").value =
        AdminAllTask[i].Completion_Date;
    }
  }
}
function EditTaskUpdate(UpdateTask) {
 
 let  AllADMIN_Task = JSON.parse(localStorage.getItem("Admin Task"));
  let TitleUpdate = document.getElementById("titleInput1").value;
  let DescriptionUpdate = document.getElementById("descriptionInput1").value;
  let UsernameUpdate = document.getElementById("username1").value;
  let StatusUpdate = document.getElementById("statusDropdown1").value;
  let PriorityUpdate = document.getElementById("priorityInput1").value;
  let UpdateDate = document.getElementById("DateInputUpdate").value;
  let CommentsUpdate;
  for (let j = 0; AllADMIN_Task.length; j++) {
    if (AllADMIN_Task[j]._id == UpdateTask) {
      CommentsUpdate = AllADMIN_Task[j].Comments;
    }
  }
  let UpdateTask1 = new XMLHttpRequest();
  UpdateTask1.open("PUT", `http://localhost:8080/admintask/${UpdateTask}`);
  UpdateTask1.setRequestHeader("Content-Type", "application/json");
  UpdateTask1.send(
    JSON.stringify({
      Title: TitleUpdate,
      Description: DescriptionUpdate,
      Assigned: UsernameUpdate,
      Status: StatusUpdate,
      Priority: PriorityUpdate,
      Notification: false,
      Completion_Date: UpdateDate,
      Comments: CommentsUpdate,
    })
  );
  UpdateTask1.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        AdminTask();
      }
    }
  };

  Swal.fire({
    title: "Edit a Task is Successfull",
    timer: 2000,
    showConfirmButton: false,
    icon: "success",
  });
  event.preventDefault();
}
function onestepDelete(id) {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      popup: "custom-buttons",
      confirmButton: "close",
      cancelButton: "delete",
    },
    buttonsStyling: false,
  });
  swalWithBootstrapButtons
    .fire({
      title: "Are you sure you want to delete this?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes,Delete it!",
      cancelButtonText: "No,Cancel",

      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        DeleteTask(id);
        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
          showConfirmButton: false,
          timer: 1000,
        });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your Task Mangement Data is safe",
          icon: "success",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    });
}
function DeleteTask(objectid) {
  let DeleteTask = new XMLHttpRequest();
  DeleteTask.open("Delete", `http://localhost:8080/admintask/${objectid}`);
  DeleteTask.send();
  DeleteTask.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        AdminTask();
      }
    }
  };
}
function AdminCheck() {
  event.preventDefault();
  let errorMessage = document.getElementById("errorMessage");
  const Admin_Username = document.getElementById("AdminUsername").value;
  const Admin_Password = document.getElementById("AdminPassword").value;
  if (Admin_Username.trim() === "" || Admin_Password.trim() === "") {
    errorMessage.textContent = "Please fill in all required fields.";
    return;
  }
  let a = 1;
  localStorage.setItem("check", a);
  errorMessage.textContent = "";
  if (
    Admin_Password == "Dhane@123" &&
    Admin_Username == "sdhaneshan10@gmail.com"
  ) {
    window.location.replace("http://localhost:9015/admin.html");
  } else {
    Swal.fire({
      title: "Username or Password is Invalid.",
      icon: "warning",
      confirmButtonText: "OK",
    });
  }
}
function Add() {
  let popupData = "";
  let Assigned_dropdown = localStorage.getItem("LoginData");
  Assigned_dropdown = JSON.parse(Assigned_dropdown);
  popupData += ` <option selected>Select UserName</option>`;
  for (let i = 0; i < Assigned_dropdown.length; i++) {
    popupData += `<option value=${Assigned_dropdown[i].User_name}>${Assigned_dropdown[i].User_name}</option>`;
  }
  document.getElementById("usernameInput").innerHTML = popupData;
}

function TaskSave() {
  event.preventDefault();
  let TitleAdd = document.getElementById("titleInput").value;
  let DescriptionAdd = document.getElementById("descriptionInput").value;
  let UsernameAdd = document.getElementById("usernameInput").value;
  let StatusAdd = document.getElementById("statusDropdown").value;
  let PriorityAdd = document.getElementById("priorityInput").value;
  let Remain_time = document.getElementById("DateInput").value;
  if (
    TitleAdd.trim() == "" ||
    DescriptionAdd.trim() == "" ||
    UsernameAdd == "Select UserName" ||
    PriorityAdd == "Select Priority" ||
    StatusAdd == "Select Status"
  ) {
    Swal.fire({
      title: "Please fill All fields",
      timer: 2000,
      showConfirmButton: false,
      icon: "warning",
    });
  } else {
    let AddTask = new XMLHttpRequest();
    AddTask.open("POST", "http://localhost:8080/admintask");
    AddTask.setRequestHeader("Content-Type", "application/json");
    AddTask.send(
      JSON.stringify({
        Title: TitleAdd,
        Description: DescriptionAdd,
        Assigned: UsernameAdd,
        Status: StatusAdd,
        Priority: PriorityAdd,
        Notification: false,
        Completion_Date: Remain_time,
      })
    );
    AddTask.onreadystatechange = function () {
      if (this.readyState == 4) {
        if (this.status == 200) {
          AdminTask();
        }
      }
    };

    Swal.fire({
      title: "Save a Task is Successfull",
      timer: 2000,
      showConfirmButton: false,
      icon: "success",
    });
  }
  clearModal();
}
function clearModal() {
  document.getElementById("titleInput").value = "";
  document.getElementById("descriptionInput").value = "";
  document.getElementById("usernameInput").selectedIndex = 0;
  document.getElementById("statusDropdown").selectedIndex = 0;
  document.getElementById("priorityInput").selectedIndex = 0;
}
window.onload = AdminTask;

function newData1() {
  let arr = [];
  AllADMIN_Task = JSON.parse(localStorage.getItem("Admin Task"));
  for (let i = 0; i < AllADMIN_Task.length; i++) {
    const obj = {
      _id: AllADMIN_Task[i]._id,
      Title: AllADMIN_Task[i].Title,
      Description: AllADMIN_Task[i].Description,
      Assigned: AllADMIN_Task[i].Assigned,
      Comments: AllADMIN_Task[i].Comments,
      Completion_Date: AllADMIN_Task[i].Completion_Date,
      Notification: AllADMIN_Task[i].Notification,
      Priority: AllADMIN_Task[i].Priority,
      Status: AllADMIN_Task[i].Status,
      createdAt: AllADMIN_Task[i].createdAt,
      updatedAt: AllADMIN_Task[i].updatedAt,
    };
    const dateStr = AllADMIN_Task[i].Completion_Date;
    const normalDate = new Date(dateStr).toISOString().slice(0, 10);
    const date1 = new Date(dateStr);
    const date2 = new Date(); // Today's date
    const timeDiff = date1.getTime() - date2.getTime();
    let daysDiff;
    if (timeDiff > 0) {
      daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    } else {
      daysDiff = 0;
    }
    obj.SubmissionDate = normalDate;
    obj.RemainingDays = daysDiff;
    arr.push(obj);
  }
  localStorage.setItem("Admin Task", JSON.stringify(arr));
}
