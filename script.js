const modal = document.querySelector("#modalContainer");
const modalInputs = document.querySelector(".modal-body");
const openBtn = document.querySelector("#openModalBtn");
const closeBtn = document.querySelector("#closeModalBtn");
const modalFooter = document.querySelector(".modal-footer");
const outputContainer = document.querySelector("#outputContainer");

openBtn.addEventListener("click", () => {
    modal.showModal();
});

closeBtn.addEventListener("click", () => {
    modal.close();
});

const workTitleInput = document.createElement("input");
workTitleInput.type = "text";
workTitleInput.className = "work-title-input input";
workTitleInput.placeholder = "Enter work here...";

const employeeInput = document.createElement("input");
employeeInput.type = "text";
employeeInput.className = "employee-input input";
employeeInput.placeholder = "Assigned to...";

const locationInput = document.createElement("input");
locationInput.type = "text";
locationInput.className = "location-input input";
locationInput.placeholder = "Enter job address";

const notesInput = document.createElement("textarea");
notesInput.className = "notes-input input";
notesInput.placeholder = "Specific notes for employee...";

const sendTask = document.createElement("button");
sendTask.id = "sendTaskBtn";
sendTask.textContent = "Assign Task";

const deleteTask = document.createElement("button");
deleteTask.id = "deleteTaskBtn";
deleteTask.textContent = "Remove from list"

sendTask.addEventListener("click", () => {
    const workTitle = workTitleInput.value;
    const assignedTo = employeeInput.value;
    const location = locationInput.value;
    const notes = notesInput.value;

    if (!workTitle.trim() && !assignedTo.trim()) return;

    workTitleInput.value = "";
    employeeInput.value = "";
    locationInput.value = "";
    notesInput.value = "";

    const taskCard = document.createElement("div");
    taskCard.className = "task-card";

    taskCard.innerHTML = `
        <div class="task-card-header">
            <h3 class="task-title">${workTitle || "Untitled Task"}</h3>
            <span class="task-assignee">${assignedTo || "Unassigned"}</span>
        </div>
        <div class="task-card-body">
            ${location ? `<p class="task-location">📍 ${location}</p>` : ''}
            ${notes ? `<p class="task-notes">${notes}</p>` : ''}
        </div>
    `;

    taskCard.appendChild(deleteTask)

    deleteTask.addEventListener("click", () => {
        taskCard.remove()
    })

    outputContainer.appendChild(taskCard);
    modal.close();
});

modalFooter.appendChild(sendTask);
modalInputs.append(workTitleInput, employeeInput, locationInput, notesInput);