import { app } from "./fconfig.js"
import { getDatabase, set, ref, get, child, update, remove } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js';

console.log("hello world");
const db = getDatabase();
console.log(app);

let addBtn = document.getElementById('addBtn')
let selectBtn = document.getElementById('selectBtn')
let updateBtn = document.getElementById('updateBtn')
let deleteBtn = document.getElementById('deleteBtn')

let name, roll, age, branch;
let names = [], rolls = [], ages = [], branches = [];
function readDet() {
    name = document.getElementById('name').value;
    roll = document.getElementById('roll').value;
    age = document.getElementById('age').value;
    branch = document.getElementById('branch').value;
}
// function addStudent() {
//     set(ref(db, "students/" + roll), { name, roll, age, branch }).then(() => {
//         alert("Data added Successfully")
//     })
//         .catch((err) => {    
//             alert(err);
//         })
// }

// function selectUsers() {
//     get(child(ref(db), 'students')).then((snapshot) => {
//         let starr = snapshot.val();
//         console.log(starr)
//     });
// }

addBtn.addEventListener('click', (e) => {
    readDet();
    set(ref(db, "students/" + roll), { name, roll, age, branch }).then(() => {
        alert("Data added Successfully")
    })
        .catch((err) => {
            alert(err);
        })
})

selectBtn.addEventListener('click', () => {
    get(child(ref(db), 'students')).then((snapshot) => {
        
        // if(table!=null) table.destroy();
        
        let data = snapshot.val();
        var table = document.getElementById('mytable');
        if(table!=null) table.innerHTML="";
        // console.log(data);
        // data.forEach(ele => {
        //     ({ name, age, roll, branch } = ele);
        //     console.log(name, age, roll, branch);
        //     ele.then(s => {
        //         console.log(s)
        //     }).catch(err => {
        //         console.log(err)
        //     })
        // })
        // console.log(snapshot.val())
        // console.log(starr)

        // data.forEach((val)=>console.log(val));
        let i=0;
        table.style.border="1px solid white";
        table.style.width="600px";
        table.style.marginBottom = "100px"
        var row = table.insertRow(i);i++;
        (row.insertCell(0)).innerHTML = "Name";
        (row.insertCell(1)).innerHTML = "RollNo";
        (row.insertCell(2)).innerHTML = "Age";
        (row.insertCell(3)).innerHTML = "Branch";
        row.style.fontSize = "20px"
        for(var st in data) {
            ({name,age,roll,branch} = data[st]);
            row = table.insertRow(i);i++;
            (row.insertCell(0)).innerHTML = name;
            (row.insertCell(1)).innerHTML = roll;
            (row.insertCell(2)).innerHTML = age;
            (row.insertCell(3)).innerHTML = branch;
            row.style.border = "1px solid white";
            console.log(name,age,roll,branch);
        }
        
    });
})

updateBtn.addEventListener('click', () => {
    readDet()
    update(ref(db, "students/" + roll), { name, roll }).then(() => {
        alert("Data Updated Successfully")
    })
        .catch((err) => {
            alert(err);
        })
})

deleteBtn.addEventListener('click', () => {
    roll = document.getElementById('roll').value;
    remove(ref(db, 'students/' + roll), roll)
})
