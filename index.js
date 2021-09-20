function addItem(){
    let item = document.getElementById("box");
    let list = document.getElementById("list-item");
    
    if(item.value != ""){
        let make_li = document.createElement("li");
        make_li.appendChild(document.createTextNode(item.value));
        list.appendChild(make_li);
        item.value = "";

        make_li.onclick = function(){
            this.parentNode.removeChild(this);
        }
    }
    else{
        alert("Please add a value to item");
    }
}