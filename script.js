

document.getElementById("btnNo").style.transition = "transform 0.020s ease-in-out";
document.getElementById("btnNo").addEventListener("mouseover", function () {
    const nuevaX = Math.random() * 450 - 225;
    const nuevaY = Math.random() * -300 - 50;

    this.style.transform = `translate(${nuevaX}px, ${nuevaY}px)`;
});

document.getElementById("btnSi").addEventListener("click", function () {
    Swal.fire({
        position:"top-center",
        title:"Soy el hombre más feliz del mundo🥰💗💝",
        showConfirmButton:false,
        timer:1500, 
    });
});

document.getElementById("btnNo").addEventListener("click", function () {
    Swal.fire({
        imageUrl:"mimimi.png",
        imageHeight:350,
        imageAlt:"A tall image", 
    });
});
