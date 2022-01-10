const spanDate = document.getElementById("date");
const spanMonth = document.getElementById("month");
const spanYear = document.getElementById("year");
const spanWeekday = document.getElementById("weekday");

const todoContainer = document.getElementById('todo-container');

function loadbody() {
    // console.log('body is loaded');
    const date = new Date();
    const month = date.toLocaleString('default', { month: 'long' });
    const myDate = date.getDate();
    const year = date.getFullYear();
    const day = date.toLocaleDateString('default', { weekday: 'long' });

    spanDate.innerText = myDate;
    spanMonth.innerText = month;
    spanYear.innerText = year;
    spanWeekday.innerText = day;

}

// checking if user is signed in or not
auth.onAuthStateChanged(user => {
    if (user) {
        console.log('user is signed in at users.html');
        document.getElementById('conect-btn').style.display = 'none';
    }
    else {
        alert('your login session has expired or you have logged out, login again to continue');
       // location = "login.html";
       document.getElementById('conect-btn').style.display = 'block';
    }
})

// retriving todos
function renderData(individualDoc) {

    // parent div
    let parentDiv = document.createElement("div");
    parentDiv.className = "container todo-box";
    parentDiv.setAttribute('data-id', individualDoc.id);

    // todo div
    let todoDiv = document.createElement("div");
    todoDiv.textContent = individualDoc.data().todos;

    // button
    let trash = document.createElement("button");

    let i = document.createElement("i");
    i.className = "fas fa-trash";

    // appending
    trash.appendChild(i);

    parentDiv.appendChild(todoDiv);
    parentDiv.appendChild(trash);

    // todoContainer.innerHTML += `
    //     <div class="container todo-box" id ="${individualDoc.doc.id}">
    //       <div>${individualDoc.doc.data().todos}</div>
    //       <button onClick="deleteTodo('${individualDoc.doc.id}','${user.uid}')"><i class='fas fa-trash'></i></button>
    //     </div>
    //     `
    todoContainer.appendChild(parentDiv);

    // trash clicking event
    trash.addEventListener('click', e => {
        let id = e.target.parentElement.parentElement.getAttribute('data-id');
        auth.onAuthStateChanged(user => {
            if (user) {
                fs.collection(user.uid).doc(id).delete();
            }
        })
    })
}

// retriving username
auth.onAuthStateChanged(user => {
    const username = document.getElementById('username');
    const usemail = document.getElementById('useremail');
    const rm = document.getElementById('rm');
    if (user) {
        fs.collection('users').doc(user.uid).get().then((snapshot) => {
            // console.log(snapshot.data().Name);
            username.innerText = snapshot.data().Name;
            usemail.innerText = snapshot.data().Email;
            rm.innerText = snapshot.data().Rmov;
        })
    }
    else {
        // console.log('user is not signed in to retrive username');
    }
})


// logout
function logout() {
    auth.signOut();
}

// realtime listners
auth.onAuthStateChanged(user => {
    if (user) {
        fs.collection(user.uid).onSnapshot((snapshot) => {
            let changes = snapshot.docChanges();
            changes.forEach(change => {
                if (change.type == "added") {
                    renderData(change.doc);
                }
                else if (change.type == 'removed') {
                    let li = todoContainer.querySelector('[data-id=' + change.doc.id + ']');
                    todoContainer.removeChild(li);
                }
            })
        })
    }
})