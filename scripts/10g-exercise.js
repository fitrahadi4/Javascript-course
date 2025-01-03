let btnNow = '';
let btnBefore = '';

function changedBtn(text) {
    const btnTest = document.querySelector(`.${text}-button`);

    if(btnTest.classList.contains('gray')){                
        btnTest.classList.remove('gray');
    } else {
        btnTest.classList.add('gray');
    }
}
function checkedBtn(text) {
    
    if(btnNow === '') {
        btnNow = text;
        changedBtn(btnNow);
    } else if (btnNow === text) {
        changedBtn(btnNow);
    } 
    else {
        btnBefore = btnNow;
        if(!document.querySelector(`.${btnBefore}-button`).classList.contains('gray')) {
            changedBtn(btnBefore);
        }
        btnNow = text;
        changedBtn(btnNow);
    }
}