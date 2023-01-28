const title = document.getElementById("todoTitle");
const desc = document.getElementById("todoDesc");
const submit = document.getElementById("addBtn");
const list = document.getElementById("todoList");
const alertElement = document.getElementById("alert");

const todoslist = [];

const createElementFun = () => {
    const hasTodos = localStorage.getItem('LcTodo');
    const parsedTodos = JSON.parse(hasTodos);
    if (parsedTodos && parsedTodos.length > 0) {
    parsedTodos.forEach (function(item) {
        const listItemDetails = document.createElement("div");
        const h2= document.createElement("h2");
        const p= document.createElement("p");
        const ulList= document.createElement("li");
        const ulListBtnBase = document.createElement("button");
        ulListBtnBase.className = "btnBaseClass";
        h2.innerHTML= item.title;
        p.innerHTML= item.desc;
        listItemDetails.append(h2,p);

        const listItemActions = document.createElement("div");
        const deleteBtn= document.createElement("button");
        deleteBtn.innerHTML="X";
        const EditBtn= document.createElement("button");
        EditBtn.innerHTML="E";
        const checkBtn= document.createElement("button");
        checkBtn.innerHTML="C";
        listItemActions.append(deleteBtn, EditBtn, checkBtn);
        ulListBtnBase.append(listItemDetails, listItemActions);
        ulList.appendChild(ulListBtnBase);
        list.appendChild(ulList);
    })
    }}


createElementFun();

submit.addEventListener ('click', 
addBtnFun = (e) => {
    e.preventDefault();
    if(!title.value){
        alertElement.style.display = "block";
    } else {
        alertElement.style.display = "none";
        const newTodo = {
        title:title.value, 
        desc:desc.value
        };
        todoslist.push(newTodo);
      

        const hasTodos = localStorage.getItem('LcTodo');
        const parsedTodos = JSON.parse(hasTodos);

        if (parsedTodos && parsedTodos.length > 0) {
            margedData= [...parsedTodos , newTodo ];
            const stringifyTodos = JSON.stringify(margedData);
            localStorage.setItem('LcTodo', stringifyTodos);
        }else{
            const stringifyTodos = JSON.stringify(todoslist);
            localStorage.setItem('LcTodo', stringifyTodos);
        }
        

        list.innerHTML ="";
        createElementFun();
        title.value= "";
        desc.value="";
    }
})