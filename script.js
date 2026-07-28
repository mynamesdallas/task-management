const modal = document.querySelector("#modalContainer");
const modalInputs = document.querySelector(".modal-body");
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
notesInput.placeholder = "Specific notes for employee..."

modalInputs.append(workTitleInput, employeeInput, locationInput, notesInput);

modal.appendChild(modalInputs)