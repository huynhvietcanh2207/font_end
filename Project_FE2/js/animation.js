const button = document.querySelector('.btn-3d'); 
const sectionNike = document.querySelector('.section-nike');

function isIntoView(el) {
    const rect = el.getBoundingClientRect();
    return rect.bottom <= window.innerHeight;
}

isIntoView(button);
isIntoView(sectionNike);

window.addEventListener("scroll", () => {
    if (isIntoView(button)) {
        button.classList.add("active");
        console.log('Class active đã được thêm vào');
    }
    if (isIntoView(sectionNike)) {
        sectionNike.classList.add("active");
        console.log('Class active đã được thêm h1 vào');
    }
})