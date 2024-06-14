function myFun(){
    let newBtn = document.createElement("button");
    newBtn.innerText = "Click me"
    console.log(newBtn.innerText);

    newBtn.style.backgroundColor = "red";
    newBtn.style.color = "white";

    document.querySelector("body").prepend(newBtn)

}
//solving this by using classList
function fun2(){
    let para = document.querySelector(".myStyle");
    console.log(para.getAttribute("class"));
//Using setAttribute    
    // para.setAttribute("class", "newPara");
//Using classList
    para.classList.add("newPara");
}