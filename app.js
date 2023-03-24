let form = document.getElementById("new-student");
let students = document.getElementById("students-list");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let full_name = event.target.fullName.value;
    let date_of_birth = event.target.birthday.value;
    let phone_number = event.target.phoneNumber.value;
    let grade = event.target.Grade.value;
    let gender = event.target.gender.value;
    console.log(full_name, date_of_birth, phone_number, grade, gender);
    render(full_name, date_of_birth, phone_number, grade, gender);
    form.reset();
});
let n = 0;
function render(full_name, date_of_birth, phone_number, grade, gender) {

    n++;

    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.textContent = `${n}`;
    let td2 = document.createElement("td");
    td2.textContent = `${full_name}`;
    let td3 = document.createElement("td");
    td3.textContent = `${date_of_birth}`
    let td4 = document.createElement("td");
    td4.textContent = `${phone_number}`;
    let td5 = document.createElement("td");
    td5.textContent = `${grade}`;
    let td6 = document.createElement("td");
    td6.textContent = `${gender}`;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    students.appendChild(tr);

}