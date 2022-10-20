let mainDiv = document.getElementById("main");

let header = document.createElement('h1');
header.innerHTML = "Hi There";
if(mainDiv){
    mainDiv.prepend(header);
} else{
    console.log("null");
}
let boxes = document.getElementById("boxes");
let dess = document.getElementById("des");
document.getElementById("add").addEventListener("click",appendtolist);
document.getElementById("remove").addEventListener("click",rmfe)
document.getElementById("red").addEventListener("click",red)
document.getElementById("blue").addEventListener("click",blue)
document.getElementById("green").addEventListener("click",green)
document.getElementById("grey").addEventListener("click",grey)
function appendtolist(event){

    event.preventDefault();
    let item = document.createElement('label');
    let box = document.createElement('input');
    item.innerHTML= `<p>${document.getElementById("value").value}</p>`
    if(document.getElementById("value").value.length > 0){
        document.getElementById("value").value = "";
        box.classList.add('listele');
        item.classList.add('des');
        box.setAttribute("type","checkbox");
        boxes.appendChild(box);
        dess.appendChild(item);
        //checklist.appendChild(br);
    }


}
function rmfe(){
    let lst = document.getElementsByClassName('listele');
    let des = document.getElementsByClassName('des');
    let brb = document.getElementsByClassName('brb');
    let brd = document.getElementsByClassName('brd');
    for (let i = 0; i < lst.length; i++) {
        if(lst[i].checked){ //remove the first checked element
            lst[i].remove();
            des[i].remove();
            break;
        }
    }
}
function red(){
    document.body.style.backgroundColor = "red"
    document.body.style.color="violet"
}
function blue(){
    document.body.style.backgroundColor = "blue"
    document.body.style.color="aquamarine"
}
function green(){
    document.body.style.backgroundColor = "green"
    document.body.style.color="yellowgreen"
}
function grey(){
    document.body.style.backgroundColor = "grey"
    document.body.style.color="white"
}