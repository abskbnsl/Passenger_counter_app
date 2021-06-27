let count=0

let saveEl= document.getElementById("save-el")

function increment(){
    count+=1
    document.getElementById("number").innerHTML=count
}
function save(){
    let temp=count  + " - "
    saveEl.textContent+=temp
    count=0
    document.getElementById("number").innerHTML=count

}
function clean(){
    document.getElementById("save-el").textContent="Previous entries:"
    
}