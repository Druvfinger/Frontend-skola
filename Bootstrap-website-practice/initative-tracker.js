function selected(event, item) {
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
function selected1(event, item){
    let x = document.querySelector(".popout-container");
    console.log(item.parentNode.parentNode);
}
    /*
    if(item.parentNode === x){
        console.log("yes");
    }
    }



/*
characterbar container
    character picture container
    character container

    condition bar

    popout container

*/

