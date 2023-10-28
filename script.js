const light = document.getElementById('light');
var aobut = document.querySelector('#about');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX - light.offsetWidth / 2;
    const y = e.clientY - light.offsetHeight / 2;
    light.style.left = x + 'px';
    light.style.top = y + 'px';
});

document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
           
            targetSection.scrollIntoView({ behavior: 'smooth' });

            const h1 = targetSection.querySelector("h1");
            if (h1) {
                const h1Style = getComputedStyle(h1);
                h1.style.color = "rgb(11, 48, 106)";
                h1.style.position = "relative";
                h1.style.overflow = "hidden";

            
                const border = document.createElement('div');
                border.style.position = "absolute";
                border.style.bottom = "0";
                border.style.left = "0";
                border.style.width = "100%";
                border.style.height = "1px";
                border.style.background = "white";
                border.style.transform = "scaleX(0)";
                border.style.transformOrigin = "left";
                border.style.transition = "transform 2s";

                h1.appendChild(border);

                
                setTimeout(function () {
                    h1.style.padding = "5px";
                    h1.style.color = h1Style.color;
                    border.style.transform = "scaleX(1)";
                }, 1000); 

                
                setTimeout(function () {
                    if (h1) {
                        h1.style.color = ""; 
                        h1.style.position = "";
                        h1.style.overflow = "";
                        h1.removeChild(border);
                    }
                }, 3000); 
            }
        }
    });
});


function setActiveMenuItem() {
    const sections = document.querySelectorAll("div[id]");
    const scrollY = window.scrollY;

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 0; 
        const sectionBottom = sectionTop + section.offsetHeight;
        const sectionId = section.getAttribute("id");
        const menuItem = document.querySelector(`.navbar a[href="#${sectionId}"]`);

        if (scrollY >= sectionTop && scrollY < sectionBottom) {
            if (!menuItem.classList.contains("active")) {
                document.querySelectorAll(".navbar a.active").forEach((el) => el.classList.remove("active"));
                menuItem.classList.add("active");
            }
        }
    });
}

window.addEventListener("scroll", setActiveMenuItem);

document.querySelectorAll(".navbar a").forEach((menuItem) => {
    menuItem.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = menuItem.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            const targetOffset = targetSection.offsetTop - 0;
            window.scrollTo({ top: targetOffset, behavior: "smooth" });
        }
    });
});

