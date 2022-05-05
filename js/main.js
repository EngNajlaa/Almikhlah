const btn = document.querySelector('#go-up');
btn.onclick = ()=>{
    window.scrollTo({
        left:0,
        top:0,
        behavior:"smooth",
    });
}
window.onscroll =()=>{
    if(window.scrollY>=500){
        btn.style.display ="block"
    }else{
        btn.style.display="none"
    }
}

