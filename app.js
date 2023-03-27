let arr=[];
if(localStorage.arr != null){
    arr=JSON.parse(localStorage.arr);
    render();
}
let form = document.getElementById("new-student");
let students = document.getElementById("students-list");
let card =document.getElementById("card");


form.addEventListener("submit", (event) => {
    event.preventDefault();
    let full_name = event.target.fullName.value;
    let date_of_birth = event.target.birthday.value;
    let phone_number = event.target.phoneNumber.value;
    let grade = event.target.Grade.value;
    let gender = event.target.gender.value;
    let major = event.target.major.value;
    let image =event.target.image.value;
    console.log(full_name, date_of_birth, phone_number, grade, gender,major,image);
    form.reset();

let std1 =new Student(full_name, date_of_birth, phone_number, grade, gender,major,image);
arr.push(std1);
localStorage.setItem("arr",JSON.stringify(arr));
    render1(full_name, date_of_birth, phone_number, grade, gender);
    render();
});
let n = 0;
function render1(full_name, date_of_birth, phone_number, grade, gender) {

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
function Student(full_name, date_of_birth, phone_number, grade, gender,major,image){
this.full_name=full_name;
this.date_of_birth=date_of_birth;
this.phone_number=phone_number;
this.grade=grade;
this.gender=gender;
this.major=major;
this.image=image;
}

function render(){
for (let i = 0; i < arr.length; i++) {

    


    let div =document.createElement("div");
let ul =document.createElement("ul");
let img1 =document.createElement("img");
img1.src=`${arr[i].image}`;
let li2 =document.createElement("li")
li2.textContent=`Name: ${arr[i].full_name}`;
let li3 =document.createElement("li")
li3.textContent=`Phone Number: ${arr[i].phone_number}`;
let li4 =document.createElement("li")
li4.textContent=`Major: ${arr[i].major}`;

div.appendChild(img1)
ul.appendChild(li2)
ul.appendChild(li3)
ul.appendChild(li4)
div.appendChild(ul)
card.appendChild(div)
}
}