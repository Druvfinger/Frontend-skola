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


let testArray = [
    {image: "img/Condition Icons/Advantage.png",text:"Advantage", id: 1},
    {image: "img/Condition Icons/Disadvantage.png",text:"Disadvantage", id:2},
    {image: "img/Condition Icons/Charmed.png",text:"Charmed", id:3}
]


function swap(event, item){
    //what we clicked values
    let temparr = Array.from(item.children)
    let pickedImage = temparr[0].src
    let id = temparr[0].id
    let pickedText = temparr[1].innerHTML
    //values to change to
    let imageToChangeTo

    /*
    temparr[0].src = testArray[1].image
    temparr[1].innerHTML = testArray[1].text
    testArray[1].image = temparr[0].src
    console.log(temparr[0].src) */
}

console.log()