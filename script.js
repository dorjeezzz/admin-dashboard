const button = document.querySelectorAll("#btn");

button.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        alert("these are not real buttons!\nthey don't do anything");
    })
});

const sideitem = document.querySelectorAll(".sidei");

sideitem.forEach((itm)=>{
    itm.addEventListener("mouseover", (e)=>{
        itm.style.backgroundColor = "rgb(45, 135, 205)";
    });
    itm.addEventListener("mouseout", (e)=>{
        itm.style.backgroundColor = "rgb(20, 143, 245)";
    });
});