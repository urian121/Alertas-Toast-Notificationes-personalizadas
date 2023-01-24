
const wrapper   = document.querySelector(".wrapper"),
toast           = wrapper.querySelector(".toast"),
closeIcon       = toast.querySelector(".close-icon");



window.onload = ()=>{

    closeIcon.onclick = ()=>{ 
        wrapper.classList.add("hide");
    }

    setTimeout(()=>{ 
        wrapper.classList.add("hide");
    }, 5000);
}
