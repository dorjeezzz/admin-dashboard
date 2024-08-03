const button = document.querySelectorAll("#btn");

button.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        alert("these are not real buttons!\nthey don't do anything");
    })
});