function changedBtn(text) {
    const btnTest = document.querySelector(`.${text}-button`);
    if(btnTest.classList.contains('black')){                
        btnTest.classList.remove('black');
    } else {
        btnTest.classList.add('black');
    }
}