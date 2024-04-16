menuBar();
function menuBar(){
    let menu=document.querySelector(".menu");
    let list=document.querySelector(".list");
    let canc=document.querySelector(".cancel");
    let menuDrop=document.querySelector(".menu-drop");
    let disp=0;
    menu.addEventListener("click",(e)=>{
        if(disp==0){
            disp=1;
            list.style.display="none";
            canc.style.display="inline-block";
            menuDrop.style.display="block";
        }else{
            disp=0;
            list.style.display="inline-block";
            canc.style.display="none";
            menuDrop.style.display="none";
        }
    })
}
