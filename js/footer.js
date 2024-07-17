const currentYear = (() => {
    let year = document.querySelector(".year");
    let yearNow = new Date().getFullYear();
    if (yearNow === 2022) {
        year.innerText =`© ${yearNow}`;
    } else {
        year.innerText =`© 2022 - ${yearNow}`;
    }
})();