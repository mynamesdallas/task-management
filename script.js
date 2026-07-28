const modal = document.querySelector("#modalContainer");
const openBtn = document.querySelector("#openModalBtn");
const closeBtn = document.querySelector("#closeModalBtn");

openBtn.addEventListener("click", () => {
    modal.showModal()
})

closeBtn.addEventListener("click", () => {
    modal.close();
})

const workTitleInput = document.createElement("input");
workTitleInput.type = "text";
workTitleInput.className = "work-title-input";
workTitleInput.placeholder = "Enter work here...";

const employeeInput = document.createElement("input");
employeeInput.type = "text";
employeeInput.className = "employee-input";
employeeInput.placeholder = "Assigned to...";

const locationInput = document.createElement("input");
locationInput.type = "text";
locationInput.className = "location-input";
locationInput.placeholder = "Enter job address";

const notesInput = document.createElement("textarea");
notesInput.className = "notes-input";
notesInput.placeholder = "Specific notes for employee..."

modal.append(workTitleInput, employeeInput, locationInput, notesInput)