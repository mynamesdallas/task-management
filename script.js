const modal = document.querySelector("#modalContainer");
const modalInputs = document.querySelector(".modal-body");
const openBtn = document.querySelector("#openModalBtn");
const closeBtn = document.querySelector("#closeModalBtn");
const modalFooter = document.querySelector(".modal-footer");
const outputContainer = document.querySelector("#outputContainer");

openBtn.addEventListener("click", () => {
    modal.showModal()
})

closeBtn.addEventListener("click", () => {
    modal.close();
})

const workTitleInput = document.createElement("input");
workTitleInput.type = "text";
workTitleInput.className = "work-title-input, input";
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

sendTask.addEventListener("click", () => {
    const workTitle = workTitleInput.value;
    workTitleInput.value = "";
    const assignedTo = employeeInput.value;
    employeeInput.value = "";
    const location = locationInput.value;
    locationInput.value = "";
    const notes = notesInput.value;
    notesInput.value = "";

    const outputDisplay = document.querySelector("div");
    outputDisplay.className = "output-display";
    const titleDisplay = document.createElement("h2");

    outputDisplay.appendChild(titleDisplay)
    titleDisplay.textContent = workTitle;


    
})

modalFooter.appendChild(sendTask)

modalInputs.append(workTitleInput, employeeInput, locationInput, notesInput);

modal.append(modalInputs, modalFooter)