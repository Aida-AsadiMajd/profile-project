
const inputBtn = document.getElementById("inputBtn");
const inputColor = document.getElementById("inputColor");
const modalBox = document.getElementById("modalBox");
const modal = document.getElementById("modal");
const saveBtn = document.getElementById("saveBtn");
const modalName = document.getElementById("modalName");
const headerName = document.getElementById("header1");
const profileImg = document.getElementById("profileImg");
const radioChar = document.getElementById("radioChar");
const modalColor = document.getElementsByClassName("modalColor");
const bodyTag = document.getElementsByTagName('body');
const colorPick1 = document.getElementById('modCol1');
const colorPick2 = document.getElementById('modCol2');

inputBtn.addEventListener ('click', () => {
    modal.style.display= "block";
});

modal.addEventListener ('click', (e)=>{
    if(e.srcElement === modal){
        modal.style.display= "none";

    }
});

saveBtn.addEventListener('click', (e)=>{
    if(modalName.value !== ""){
        headerName.innerHTML= modalName.value;
        modal.style.display= "none";
    } else{
        modal.style.display= "none";
    }
})

const labelIn = document.querySelectorAll("#radioChar");
    labelIn.forEach((i) =>{
    i.addEventListener('click', (ev) => {
        profileImg.src=ev.target.previousElementSibling.src;
   })
})

colorPick1.addEventListener('change', ()=>{
    let a = colorPick2.value;
    let b = colorPick1.value;
    inputBtn.style.backgroundColor=b;
    bodyTag[0].style = `background-image: linear-gradient(45deg,${b} 8%, ${a} 8% 16%, ${b} 16% 24%,rgba(240, 239, 239, 0.464) 24% 80%, ${a} 80% 90%, ${b} 90% 100%)`;
 })

colorPick2.addEventListener('change', ()=>{
    let a = colorPick2.value;
    let b = colorPick1.value;
    bodyTag[0].style = `background-image: linear-gradient(45deg,${b} 8%, ${a} 8% 16%, ${b} 16% 24%,rgba(240, 239, 239, 0.464) 24% 80%, ${a} 80% 90%, ${b} 90% 100%)`;
 })