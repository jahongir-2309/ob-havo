document.addEventListener("DOMContentLoaded" , (e)=>{
    document.querySelector("#form").addEventListener("submit",(e)=>{
        let ism =document.querySelector("#ism").value.trim()
        let email =document.querySelector("#email").value.trim()
        let parol1 =document.querySelector("#parol1").value.trim()
        let parol2 =document.querySelector("#parol2").value.trim()
        e.preventDefault()
        if(ism && email && parol1==parol2 && parol1.length >=5){
            localStorage.setItem(ism, "ism");
            localStorage.setItem(email, "email");
            localStorage.setItem(parol1, "parol1");
            window.location.href = './index.html'; 
        }
    })

    
})