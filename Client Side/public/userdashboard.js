let taskdetails;
let Username_find;
let UserName_Login;
let AllADMIN_Task;
function data() {
  let drop1 = document.getElementById("dropdownpri").value;
  let drop2 = document.getElementById("dropdownsts").value;
  if (drop1 == "Priority" && drop2 == "Status") {
    let table_Data1 = "";
    let j = 0;
    for (let i = 0; i < AllADMIN_Task.length; i++) {
      if (
        UserName_Login == AllADMIN_Task[i].Assigned &&
        !(AllADMIN_Task[i].Status == "Completed")
      ) {
        table_Data1 += `<tr>
            <td>${j + 1}</td>
            <td>${AllADMIN_Task[i].Title}</td>
            <td>${AllADMIN_Task[i].Description}</td>
            <td>${AllADMIN_Task[i].Comments}</td>
            <td>${AllADMIN_Task[i].Priority}</td>
            <td>${AllADMIN_Task[i].Status}</td>
            <td>${AllADMIN_Task[i].SubmissionDate}</td>
            <td>${AllADMIN_Task[i].RemainingDays}</td>
            <td><button type="button" data-bs-toggle="modal"  data-bs-target="#editModal"class="edit-btn" onclick="edittask('${
              AllADMIN_Task[i]._id
            }')"><i class="fas fa-edit"></i> Edit</button></td>
            </tr>
            `;
        j++;
      } else if (UserName_Login == AllADMIN_Task[i].Assigned) {
        table_Data1 += `<tr>
          <td>${j + 1}</td>
          <td>${AllADMIN_Task[i].Title}</td>
          <td>${AllADMIN_Task[i].Description}</td>
          <td>${AllADMIN_Task[i].Comments}</td>
          <td>${AllADMIN_Task[i].Priority}</td>
          <td>${AllADMIN_Task[i].Status}</td>
          <td>${AllADMIN_Task[i].SubmissionDate}</td>
          <td>${AllADMIN_Task[i].RemainingDays} Days</td>
          <td>Done</td>
          </tr>
          `;
        j++;
      }
    }
    document.getElementById("data1").innerHTML = table_Data1;
    tableckeck();
  } else if (!(drop1 == "Priority") && drop2 == "Status") {
    let table_Data2 = "";
    let j = 0;
    for (let i = 0; i < AllADMIN_Task.length; i++) {
      if (
        UserName_Login == AllADMIN_Task[i].Assigned &&
        drop1 == AllADMIN_Task[i].Priority &&
        !(AllADMIN_Task[i].Status == "Completed")
      ) {
        table_Data2 += `<tr>
            <td>${j + 1}</td>
            <td>${AllADMIN_Task[i].Title}</td>
            <td>${AllADMIN_Task[i].Description}</td>
            <td>${AllADMIN_Task[i].Comments}</td>
            <td>${AllADMIN_Task[i].Priority}</td>
            <td>${AllADMIN_Task[i].Status}</td>
            <td>${AllADMIN_Task[i].SubmissionDate}</td>
            <td>${AllADMIN_Task[i].RemainingDays} Days</td>
            <td><button type="button" data-bs-toggle="modal"  data-bs-target="#editModal"class="edit-btn" onclick="edittask('${
              AllADMIN_Task[i]._id
            }')"><i class="fas fa-edit"></i> Edit</button></td>
            </tr>`;
        j++;
      } else if (
        UserName_Login == AllADMIN_Task[i].Assigned &&
        drop1 == AllADMIN_Task[i].Priority
      ) {
        table_Data2 += `<tr>
          <td>${j + 1}</td>
          <td>${AllADMIN_Task[i].Title}</td>
          <td>${AllADMIN_Task[i].Description}</td>
          <td>${AllADMIN_Task[i].Comments}</td>
          <td>${AllADMIN_Task[i].Priority}</td>
          <td>${AllADMIN_Task[i].Status}</td>
          <td>${AllADMIN_Task[i].SubmissionDate}</td>
          <td>${AllADMIN_Task[i].RemainingDays} Days</td>
          <td>Done</td>
          </tr>
          `;
        j++;
      }
    }
    document.getElementById("data1").innerHTML = table_Data2;
    tableckeck();
  } else if (drop1 == "Priority" && !(drop2 == "Status")) {
    let table_Data3 = "";
    let j = 0;
    for (let i = 0; i < AllADMIN_Task.length; i++) {
      if (
        UserName_Login == AllADMIN_Task[i].Assigned &&
        drop2 == AllADMIN_Task[i].Status &&
        !(AllADMIN_Task[i].Status == "Completed")
      ) {
        table_Data3 += `<tr>
            <td>${j + 1}</td>
            <td>${AllADMIN_Task[i].Title}</td>
            <td>${AllADMIN_Task[i].Description}</td>
            <td>${AllADMIN_Task[i].Comments}</td>
            <td>${AllADMIN_Task[i].Priority}</td>
            <td>${AllADMIN_Task[i].Status}</td>
            <td>${AllADMIN_Task[i].SubmissionDate}</td>
            <td>${AllADMIN_Task[i].RemainingDays} Days</td>
            <td><button type="button" data-bs-toggle="modal"  data-bs-target="#editModal"class="edit-btn" onclick="edittask('${
              AllADMIN_Task[i]._id
            }')"><i class="fas fa-edit"></i> Edit</button></td>
            </tr>`;
        j++;
      } else if (
        UserName_Login == AllADMIN_Task[i].Assigned &&
        drop2 == AllADMIN_Task[i].Status
      ) {
        table_Data3 += `<tr>
          <td>${j + 1}</td>
          <td>${AllADMIN_Task[i].Title}</td>
          <td>${AllADMIN_Task[i].Description}</td>
          <td>${AllADMIN_Task[i].Comments}</td>
          <td>${AllADMIN_Task[i].Priority}</td>
          <td>${AllADMIN_Task[i].Status}</td>
          <td>${AllADMIN_Task[i].SubmissionDate}</td>
          <td>${AllADMIN_Task[i].RemainingDays} Days</td>
          <td>Done</td>
          </tr>
          `;
        j++;
      }
    }
    document.getElementById("data1").innerHTML = table_Data3;
    tableckeck();
  } else {
    let table_Data4 = "";
    let j = 0;
    for (let i = 0; i < AllADMIN_Task.length; i++) {
      if (
        UserName_Login == AllADMIN_Task[i].Assigned &&
        drop1 == AllADMIN_Task[i].Priority &&
        drop2 == AllADMIN_Task[i].Status &&
        !(AllADMIN_Task[i].Status == "Completed")
      ) {
        table_Data4 += `<tr>
            <td>${j + 1}</td>
            <td>${AllADMIN_Task[i].Title}</td>
            <td>${AllADMIN_Task[i].Description}</td>
            <td>${AllADMIN_Task[i].Comments}</td>
            <td>${AllADMIN_Task[i].Priority}</td>
            <td>${AllADMIN_Task[i].Status}</td>
            <td>${AllADMIN_Task[i].SubmissionDate}</td>
            <td>${AllADMIN_Task[i].RemainingDays} Days</td>
            <td><button type="button" data-bs-toggle="modal"  data-bs-target="#editModal"class="edit-btn" onclick="edittask('${
              AllADMIN_Task[i]._id
            }')"><i class="fas fa-edit"></i> Edit</button></td>
            </tr>`;
        j++;
      } else if (
        UserName_Login == AllADMIN_Task[i].Assigned &&
        drop1 == AllADMIN_Task[i].Priority &&
        drop2 == AllADMIN_Task[i].Status
      ) {
        table_Data4 += `<tr>
          <td>${j + 1}</td>
          <td>${AllADMIN_Task[i].Title}</td>
          <td>${AllADMIN_Task[i].Description}</td>
          <td>${AllADMIN_Task[i].Comments}</td>
          <td>${AllADMIN_Task[i].Priority}</td>
          <td>${AllADMIN_Task[i].Status}</td>
          <td>${AllADMIN_Task[i].SubmissionDate}</td>
          <td>${AllADMIN_Task[i].RemainingDays} Days</td>
          <td>Done</td>
          </tr>
          `;
        j++;
      }
    }
    document.getElementById("data1").innerHTML = table_Data4;
    tableckeck();
  }
  document.getElementById("dropdownpri").selectedIndex = 0;
  document.getElementById("dropdownsts").selectedIndex = 0;
}
function displayTable() {
  let table_Data = "";
  newData();
  AllADMIN_Task = JSON.parse(localStorage.getItem("Admin Task"));
  Username_find = JSON.parse(localStorage.getItem("LoginData"));
  for (let i = 0; i < Username_find.length; i++) {
    if (localStorage.getItem("Username") == Username_find[i].Email_id) {
      UserName_Login = Username_find[i].User_name;
    }
  }
  console.log(AllADMIN_Task);
  let j = 0;
  document.getElementById("para").innerHTML = "Welcome " + UserName_Login;
  for (let i = 0; i < AllADMIN_Task.length; i++) {
    if (
      UserName_Login == AllADMIN_Task[i].Assigned &&
      !(AllADMIN_Task[i].Status == "Completed")
    ) {
      table_Data += `<tr>
        <td>${j + 1}</td>
        <td>${AllADMIN_Task[i].Title}</td>
        <td>${AllADMIN_Task[i].Description}</td>
        <td>${AllADMIN_Task[i].Comments}</td>
        <td>${AllADMIN_Task[i].Priority}</td>
        <td>${AllADMIN_Task[i].Status}</td>
        <td>${AllADMIN_Task[i].SubmissionDate}</td>
        <td>${AllADMIN_Task[i].RemainingDays} Days</td>
        <td><button type="button" class="edit-btn" onclick="openSweetAlert('${
          AllADMIN_Task[i]._id
        }')"><i class="fas fa-edit"></i> Edit</button></td>
        </tr>
        `;
      j++;
    } else if (UserName_Login == AllADMIN_Task[i].Assigned) {
      table_Data += `<tr>
        <td>${j + 1}</td>
        <td>${AllADMIN_Task[i].Title}</td>
        <td>${AllADMIN_Task[i].Description}</td>
        <td>${AllADMIN_Task[i].Comments}</td>
        <td>${AllADMIN_Task[i].Priority}</td>
        <td>${AllADMIN_Task[i].Status}</td>
        <td>${AllADMIN_Task[i].SubmissionDate}</td>
        <td>${AllADMIN_Task[i].RemainingDays} Days</td>
        <td>Done</td>
        </tr>
        `;
      j++;
    }
  }
  document.getElementById("data1").innerHTML = table_Data;
  Task_Notification();

  search_sort();
  tableckeck();
}
function search_sort() {
  document.getElementById("searchInput").addEventListener("input", function () {
    let input, filter, table, tbody, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("editableTable");
    tbody = document.getElementById("data1");
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
function openSweetAlert(progress_change) {
  const htmlContent = `<input type="text"id="comm"class="input123"placeholder="Please enter the Comments....">
      <div style="display: flex; flex-direction: row;justify-content:space-around">
          <input type="radio" name="progress" value="In Progress" id="inputProgress" class="custom-radio"> In Progress
          <input type="radio" name="progress" value="Completed" id="inputCompleted" class="custom-radio"> Completed
          <input type="radio" name="progress" value="Pending" id="inputPending" class="custom-radio"> Pending
      </div>
  `;

  // Open SweetAlert2 modal with custom HTML content
  Swal.fire({
    title: "Select Progress and Comments",
    html: htmlContent,
    confirmButtonText: "Submit",
    showCancelButton: true,
    cancelButtonText: "Cancel",
    focusConfirm: false,
    preConfirm: () => {
      // Retrieve the selected value
      const progress_Value = document.querySelector(
        'input[name="progress"]:checked'
      );
      if (!progress_Value) {
        Swal.showValidationMessage("Please select the Radio Button");
        return false;
      }
      const commentscheck = document.getElementById("comm").value;
      if (commentscheck.trim() == "") {
        Swal.showValidationMessage("Please Fill the Comment Field.");
        return false;
      }
      const progressValue = progress_Value.value;
      return progressValue;
    },
  }).then((result) => {
    // Display the selected value
    localStorage.setItem("Progess", result.value);
    let dataComment = document.getElementById("comm").value;
    localStorage.setItem("Comments", dataComment);

    if (result.isConfirmed) {
      Progesschange(progress_change);
      Swal.fire({
        title: "Selected Progress's : " + result.value,
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  });
}
function AdminTaskNew() {
  let AdminTask = new XMLHttpRequest();
  AdminTask.open("Get", "http://localhost:8080/admintask");
  AdminTask.send();
  AdminTask.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        // AdminAllTask = JSON.parse(this.responseText);
        localStorage.setItem("Admin Task", this.responseText);
        displayTable();
      }
    }
  };
}
function Progesschange(progress_change) {
  console.log(progress_change);
  AllADMIN_Task = JSON.parse(localStorage.getItem("Admin Task"));
  let localdata = localStorage.getItem("Progess");
  let localcomments = localStorage.getItem("Comments");
  console.log(typeof localdata);
  let Update_task = new XMLHttpRequest();
  Update_task.open("PUT", `http://localhost:8080/admintask/${progress_change}`);
  Update_task.setRequestHeader("Content-Type", "application/json");
  Update_task.send(
    JSON.stringify({
      Status: localdata,
      Comments: localcomments,
    })
  );
  Update_task.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        AdminTaskNew();
      }
    }
  };
}
window.onload = displayTable;
function sortTable(columnIndex) {
  let table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    dir,
    switchcount = 0;
  table = document.getElementById("editableTable");
  switching = true;
  dir = "asc";
  if (
    document
      .getElementById("icon-" + getColumnId(columnIndex))
      .innerHTML.includes("up")
  ) {
    dir = "desc";
  }

  while (switching) {
    switching = false;
    rows = table.rows;

    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("td")[columnIndex];
      y = rows[i + 1].getElementsByTagName("td")[columnIndex];

      let xValue = isNaN(parseFloat(x.innerHTML))
        ? x.innerHTML.toLowerCase()
        : parseFloat(x.innerHTML);
      let yValue = isNaN(parseFloat(y.innerHTML))
        ? y.innerHTML.toLowerCase()
        : parseFloat(y.innerHTML);

      if (dir === "asc") {
        if (xValue > yValue) {
          shouldSwitch = true;
          break;
        }
      } else if (dir === "desc") {
        if (xValue < yValue) {
          shouldSwitch = true;
          break;
        }
      }
    }

    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount++;
    } else {
      if (switchcount === 0 && dir === "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
  resetIcons();
  if (dir === "asc") {
    document.getElementById("icon-" + getColumnId(columnIndex)).innerHTML =
      '<i class="fas fa-sort-up"></i>';
  } else {
    document.getElementById("icon-" + getColumnId(columnIndex)).innerHTML =
      '<i class="fas fa-sort-down"></i>';
  }
}
function resetIcons()
 {
  document.getElementById("icon-id").innerHTML = '<i class="fas fa-sort"></i>';
  document.getElementById("icon-title").innerHTML =
    '<i class="fas fa-sort"></i>';
  document.getElementById("icon-description").innerHTML =
    '<i class="fas fa-sort"></i>';
  document.getElementById("icon-comments").innerHTML =
    '<i class="fas fa-sort"></i>';
  document.getElementById("icon-priority").innerHTML =
    '<i class="fas fa-sort"></i>';
  document.getElementById("icon-status").innerHTML =
    '<i class="fas fa-sort"></i>';
  document.getElementById("icon-remainingdays").innerHTML =
    '<i class="fas fa-sort"></i>';
}
function getColumnId(columnIndex) {
  switch (columnIndex) {
    case 0:
      return "id";
    case 1:
      return "title";
    case 2:
      return "description";
    case 3:
      return "comments";
    case 4:
      return "priority";
    case 5:
      return "status";
    case 7:
      return "remainingdays";
    default:
      return "";
  }
}

function tableckeck() {
  let table = document.getElementById("editableTable");
  let searchinput = document.getElementById("searchInput");
  let replacementImage = document.getElementById("replaceimage");
  if (table.getElementsByTagName("tbody")[0].childElementCount === 0) {
    table.style.display = "none";
    replacementImage.style.display = "block";
    searchinput.style.display = "none";
  } else {
    table.style.display = "table";
    replacementImage.style.display = "none";
    searchinput.style.display = "block";
  }
}
function Task_Notification() {
  let Notification_Task = localStorage.getItem("Admin Task");
  Notification_Task = JSON.parse(Notification_Task);
  console.log("Notification Username :", UserName_Login);
  for (let i = 0; i < Notification_Task.length; i++) {
    if (
      UserName_Login == Notification_Task[i].Assigned &&
      Notification_Task[i].Notification == false
    ) {
      if (Notification_Task[i].Status == "Completed") {
        Swal.fire({
          icon: "success",
          title: Notification_Task[i].Description,
          text: "Status :" + Notification_Task[i].Status,
        });
        update_Notification(Notification_Task[i]._id);
      } else {
        Swal.fire({
          icon: "warning",
          title: Notification_Task[i].Description,
          text: "Status : " + Notification_Task[i].Status,
        });
        update_Notification(Notification_Task[i]._id);
      }
    }
  }
}

function update_Notification(task) {
  console.log(task);
  let Update_Notification = new XMLHttpRequest();
  Update_Notification.open("PUT", `http://localhost:8080/admintask/${task}`);
  Update_Notification.setRequestHeader("Content-Type", "application/json");
  Update_Notification.send(
    JSON.stringify({
      Notification: true,
    })
  );
  Update_Notification.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        console.log("Notification is done");
        AdminTaskNew();
      }
    }
  };
}

function newData() {
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
