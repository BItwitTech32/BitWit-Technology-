document.addEventListener("DOMContentLoaded", () => {
    console.log("Bitwit Technologies Website Loaded!");

    const services = document.querySelectorAll(".service");
    services.forEach(service => {
        service.addEventListener("mouseover", () => {
            service.style.transform = "rotate(3deg)";
        });
        service.addEventListener("mouseout", () => {
            service.style.transform = "rotate(0deg)";
        });
    });
});
