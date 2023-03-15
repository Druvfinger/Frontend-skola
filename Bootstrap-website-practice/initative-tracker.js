function selected(event, item) {
    let itemToInsertBefore = document.getElementById('#clear');
    if(item.style.backgroundColor === "rgb(220, 53, 69)"){
        item.style.backgroundColor = "white"
        item.parentNode.append(item)
    }else{
    item.style.backgroundColor = 'rgb(220, 53, 69)';
    item.parentNode.insertBefore(item, item.parentNode.firstChild);
    }
}

function clearConditions(){
    let x = Array.from(document.querySelectorAll('.condition-icon-container')).forEach(e => e.style.backgroundColor = "white")
}

function expandConditionbar(){
    let item = document.querySelector(".popout-container");
    if(item.style.display === "grid"){
        item.style.display = "none";
    }else{
        item.style.display = "grid";
    }
}

