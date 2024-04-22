// This file is action_js

let selector = document.querySelector(".selector");
let li = document.querySelectorAll(".navigation ul li");

let index_value = 0;
let left_position = 0;

li.forEach((item, index) => {
    selector.style.width = li[0].clientWidth + "px";
    selector.style.left = left_position + "px";

    item.onclick = function(){
        selector.style.width = item.clientWidth + "px";
        index_value = index;
        get_left_position();
        selector.style.left = left_position + "px";
        left_position = 0;
    }
});

function get_left_position(){
    for (let i=0; i<index_value; i++){
        let element = li[i];
        left_position += element.clientWidth;
    }
}