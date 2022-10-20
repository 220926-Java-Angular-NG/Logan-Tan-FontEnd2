let mainDiv = document.getElementById("main");

let header = document.createElement('h1');
header.innerHTML = "Hi There";
if(mainDiv){
    mainDiv.prepend(header);
} else{
    console.log("null");
}
let checklist = document.getElementById("checklist");
document.getElementById("add").addEventListener("click",appendtolist);
document.getElementById("remove").addEventListener("click",rmlst)
function appendtolist(event){
    event.preventDefault();
    let item = document.createElement('label');
    let br = document.createElement('br');
    let box = document.createElement('input');
    item.innerHTML= document.getElementById("value").value;
    document.getElementById("value").value = "";
    box.setAttribute("type","checkbox");
    checklist.appendChild(box);
    checklist.appendChild(item);
    checklist.appendChild(br);


}
function rmlst(){
}