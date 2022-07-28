// gallery 
const gallery = (() => {
    const buttons = document.querySelectorAll("[data-mobile-gallery-button]");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            let counter = button.dataset.mobileGalleryButton === "next" ? 1 : -1;
            const allPaintings = document.querySelectorAll("[data-active]");
            let mainPainting = (() => {
                for (let i = 0; allPaintings.length > i; i++) {
                    if ([...allPaintings][i].dataset.active === "main" && allPaintings.length -1 != i
                        && counter === 1) {
                        return i+1
                    }
                    if ([...allPaintings][i].dataset.active === "main" && allPaintings.length -1 === i
                        && counter === 1) {
                        return 0
                    }
                    if ([...allPaintings][i].dataset.active === "main" && i != 0
                    && counter === -1) {
                        return i - 1
                    }
                    if ([...allPaintings][i].dataset.active === "main" && i === 0
                        && counter === -1) {
                        return  allPaintings.length - 1
                    }
                }
            })(); 
            let prevPainting = 0;
            let delPainting = 0;
            let nextPainting = 0;
            const forward = (() => { 
                if (counter === 1) {
                    if (mainPainting - 1 === 0){
                        nextPainting = mainPainting + 1;
                        delPainting = allPaintings.length - 1;
                        prevPainting = mainPainting - 1;                        
                    }
                    if (mainPainting === 0) {
                        nextPainting = mainPainting + 1;
                        delPainting = allPaintings.length - 2;
                        prevPainting = allPaintings.length - 1;                        
                    }
                    if (mainPainting === allPaintings.length -1) {
                        nextPainting = 0;
                        delPainting = mainPainting - 2;
                        prevPainting = mainPainting - 1;                        
                    }          
                    if (mainPainting -1 != 0 && mainPainting != allPaintings.length - 1
                        && mainPainting != 0) {
                        nextPainting = mainPainting + 1;
                        delPainting = mainPainting -2;
                        prevPainting = mainPainting -1;                        
                    }
                }
            })();  
            const backwards = (() => {
                if (counter === -1) {
                    if (mainPainting === 0) {
                        nextPainting = mainPainting + 1;
                        delPainting = mainPainting + 2;
                        prevPainting = allPaintings.length - 1;                        
                    }
                    if (mainPainting === allPaintings.length - 1){
                        nextPainting = 0;
                        delPainting = 1;
                        prevPainting = mainPainting - 1;                         
                    }
                    if (mainPainting + 1 === allPaintings.length - 1) {
                        nextPainting = mainPainting +1;
                        delPainting = 0;
                        prevPainting = mainPainting - 1;                        
                    }
                    if (mainPainting !=0 && mainPainting != allPaintings.length - 1
                        && mainPainting + 1 != allPaintings.length - 1) {
                        nextPainting = mainPainting + 1;
                        delPainting = mainPainting + 2;
                        prevPainting = mainPainting - 1;                        
                    } 
                }
            })();
            const rotator = (() => {
                [...allPaintings][mainPainting].dataset.active = "main";  
                [...allPaintings][nextPainting].dataset.active = "next";   
                [...allPaintings][prevPainting].dataset.active = "prev";                                          
                [...allPaintings][delPainting].dataset.active = "";                
            })();         
        })
    })
})();
