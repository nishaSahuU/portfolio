const menuTabs = document.querySelector(".myskills-tabs");
menuTabs.addEventListener("click", function (e) {
    if (e.target.classList.contains("myskills-tab-item") && !e.target.classList.contains("active")) {
        const target = e.target.getAttribute("data-target");
        menuTabs.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const menuSection = document.querySelector(".myskills-section");
        menuSection.querySelector(".myskills-tab-content.active").classList.remove("active");
        menuSection.querySelector(target).classList.add("active"); 
    }
});