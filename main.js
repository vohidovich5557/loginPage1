let username = document.querySelector('.input_username');
let password = document.querySelector('.input_password');
let submit = document.querySelector('.submit');
let box = document.querySelector('.box');
let user_btn = document.querySelector('.user_btn');
let pass_box = document.querySelector('.pass_box');
let pass_btn = document.querySelector('.pass_btn');

let saveArray = [];
let passArray = [];



const render = () => {

    box.innerHTML = saveArray.map((item) => `
    <h2 class="user_desc">Username:</h2>
       <p class = "username_text">${item.usename}</p>   
    `).join("");
    user_btn.innerHTML = saveArray.map((item) => `
   <button class = "delet1" onclick = "delet(${item.id})">Delet</button>
       <button class = "edit1" onclick = "edit(${item.id})">Edit</button>
   `);
    pass_box.innerHTML = passArray.map((item) => `
      <h2 class = "pass_desc">Password:</h2>
      <p class = "password_text">${item.passcode}</p>
   `).join("");
    pass_btn.innerHTML = passArray.map((item) => `
   <button class = "delet1" onclick = "deletPass(${item.id})">Delet</button>
   <button class = "edit1" onclick = "editPass(${item.id})">Edit</button>
   `)

};



submit.addEventListener('click', (e) => {
    if (username.value.length == "null" && passcode.value.length == "null") {

    }
    e.preventDefault();
    saveArray.push({ id: Date.now(), usename: username.value });
    passArray.push({ id: Date.now() + 1, passcode: password.value });
    username.value = " ";
    password.value = " ";
    let oldUsers = JSON.parse(localStorage.getItem("username"));
    let newUsers = [saveArray, ... oldUsers];
    localStorage.setItem("username", JSON.stringify(newUsers));
    let oldPass = JSON.parse(localStorage.getItem("password"));
    let newPass = [passArray, ... oldUsers];
    localStorage.setItem("password", JSON.stringify(newPass));
    render();
});


const delet = (id) => {
    for (let i = 0; i < saveArray.length; i++) {
        if (saveArray[i].id === id) {
            saveArray.splice(i, 1);
        }
    }

    render();
};

const edit = (id) => {
    for (let i = 0; i < saveArray.length; i++) {
        if (saveArray[i].id == id) {
            saveArray[i].usename = prompt("soz kiriting: ");
        }
    }
    render();
};

const deletPass = (id) => {
    for (let i = 0; i < passArray.length; i++) {
        if (passArray[i].id === id) {
            passArray.splice(i, 1);
        }
    }

    render();
};

const editPass = (id) => {
    for (let i = 0; i < passArray.length; i++) {
        if (passArray[i].id == id) {
            passArray[i].passcode = prompt("soz kiriting: ");
        }
    }
    render();
};







console.log(passArray);
console.log(saveArray);



