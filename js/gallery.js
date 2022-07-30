// gallery 
const gallery = (() => {
    const buttons = document.querySelectorAll("[data-mobile-gallery-button]");
    const allPaintings = document.querySelectorAll("[data-active]");
    buttons.forEach(button => {        
        button.addEventListener("click", () => {
            let counter = button.dataset.mobileGalleryButton === "next" ? 1 : -1;            
            mainPainting = (() => {
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
        });
    });
    const enlargen = (() => {        
        allPaintings.forEach(painting => {
            painting.addEventListener("click", () => {
                const mobGal = document.getElementById("index-mobile-gallery");              
                mobGal.style.height = "100vh";
                allPaintings.forEach(painting => {
                    painting.style.width = "100vw"
                });
                mobGal.scrollIntoView();  
                mobGal.style.backgroundColor = "rgba(32, 108, 167, 0.6)";
                mobGal.style.backgroundImage = "";
                document.getElementById("close-enlarged-gallery-wrapper").style.visibility = "visible";
                document.getElementById("index-body").style.overflow = "hidden";
                document.querySelector(".navbar-mobile").style.visibility = "hidden";               
                document.getElementById("see-more-mobile-gallery-a").style.color = "rgba(255,255,255, 0.5)";
                document.getElementById("see-more-mobile-gallery").style.backgroundColor = "rgba(0, 0, 0, 0.2)";
                
            })    
        }) 
    })();   
    const closeEnlargen = (() => {
                const close =  document.getElementById("close-enlarged-gallery");
                close.addEventListener("click", () => {
                    document.getElementById("close-enlarged-gallery-wrapper").style.visibility = "hidden";
                    document.getElementById("index-body").style.overflow = "";
                    document.querySelector(".navbar-mobile").style.visibility = "visible";   
                    document.getElementById("index-mobile-gallery").style.backgroundColor = "";
                    document.getElementById("index-mobile-gallery").style.height = ""
                    document.getElementById("index-mobile-gallery").scrollIntoView();
                    document.getElementById("see-more-mobile-gallery-a").style.color = "";
                document.getElementById("see-more-mobile-gallery").style.backgroundColor = "";
                    allPaintings.forEach(painting => {
                        painting.style.width = ""
                    });
                })
    })();   
})();
