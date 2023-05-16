const boxes = document.querySelectorAll('.box');

checkBoxes();

window.addEventListener('scroll', checkBoxes);

function checkBoxes(){
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        //Box top -> Info about the top position of a dom ellement
        //Compared to the viewport
        const boxTop = box.getBoundingClientRect().top;
    
        if (boxTop < triggerBottom){
            box.classList.add('show');
        }else{
            box.classList.remove('show');
        }
    });
}