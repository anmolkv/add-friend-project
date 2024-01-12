var a = document.querySelector("#add")
var b = document.querySelector("h5")

var click = 0;
a.addEventListener("click",function(){
    if(click == 0){

        b.textContent= "Friends"
        b.style.color= "green"
        a.textContent="Remove"
        click = 1
    }else{
        b.textContent= "Stranger"
        b.style.color= "red"
        a.textContent="Add Friend"
        click =  0
        console.log("hiiiiiiii")
    }
})
