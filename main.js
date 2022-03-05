const compartir = document.getElementById("compartir");
const perfil = document.querySelector(".perfil");
const share = document.querySelector(".share")
const compartirt = document.getElementById("compartir-2");


compartir.addEventListener("click", funciona);
compartirt.addEventListener("click", sirve);

function funciona() {
        if(share.className ==="share active"){
            share.classList.remove ("active");
            compartir.classList.remove("compartir-3");
        }else{
            share.classList.add ("active");
            compartir.classList.add("compartir-3");
        }
        
}

function sirve(){
    share.classList.remove ("active");
}


    
