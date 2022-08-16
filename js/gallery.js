// gallery 
const gallery = (() => {
    const buttons = document.querySelectorAll("[data-mobile-gallery-button]");
    const allPaintings = document.querySelectorAll("[data-active]");
    let enlargened = false;
    buttons.forEach(button => {        
        button.addEventListener("click", () => {
            let counter = button.dataset.mobileGalleryButton === "next" ? 1 : -1;            
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
            // screen size 480 - 768            
                let prevPicture = document.querySelector("[data-active='prev']");
                let nextPicture = document.querySelector("[data-active='next']");
                let mainPicture = document.querySelector("[data-active='main']");
            if (window.innerWidth > 480 && window.innerWidth < 769 && enlargened === true){    
                mainPicture.style.visibility = "visible"
                prevPicture.style.visibility = "hidden";
                nextPicture.style.visibility = "hidden";                    
            } else if (enlargened === false) {
                mainPicture.style.visibility = "visible"
                prevPicture.style.visibility = "visible";
                nextPicture.style.visibility = "visible"; 
            } else if (window.innerWidth <= 480) {
                prevPicture.style.visibility = "visible";
                nextPicture.style.visibility = "visible";     
            }
        });
    });
    const enlargen = (() => {        
        allPaintings.forEach(painting => {
            painting.addEventListener("click", () => {
                enlargened = true;
                const mobGal = document.getElementById("index-mobile-gallery");              
                mobGal.style.height = "100vh";
                allPaintings.forEach(painting => {
                    painting.style.width = "100vw"
                }); 
                document.getElementById("index-body").style.overflow = "hidden";
                mobGal.scrollIntoView();  
                mobGal.style.backgroundColor = "rgba(32, 108, 167, 0.2)";
                mobGal.style.backgroundImage = "none";
                document.getElementById("close-enlarged-gallery-wrapper").style.visibility = "visible";
               
                document.querySelector(".navbar-mobile").style.visibility = "hidden";               
                document.getElementById("see-more-mobile-gallery-a").style.color = "rgba(255,255,255, 0.5)";
                document.getElementById("see-more-mobile-gallery").style.display = "block";
                document.getElementById("see-more-mobile-gallery").style.backgroundColor = "rgba(0, 0, 0, 0.2)";
                document.getElementById("index-body").style.backgroundImage = "none"; 
               
                if (window.innerWidth > 480 && window.innerWidth < 769){
                    document.querySelector(".navbar").style.visibility = "hidden";
                    let prevPicture = document.querySelector("[data-active='prev']");
                    let nextPicture = document.querySelector("[data-active='next']");
                    prevPicture.style.visibility = "hidden";
                    nextPicture.style.visibility = "hidden";   
                    allPaintings.forEach(painting => {
                        painting.style.height= "100vh"
                    });                  
                }
            })    
        }) 
    })();   
    const closeEnlargen = (() => {
                const close =  document.getElementById("close-enlarged-gallery");
                close.addEventListener("click", () => {
                    const mobGal = document.getElementById("index-mobile-gallery");
                    document.getElementById("close-enlarged-gallery-wrapper").style.visibility = "hidden";
                    document.getElementById("index-body").style.overflow = "";
                    document.querySelector(".navbar-mobile").style.visibility = "visible";   
                    document.getElementById("index-body").style.backgroundImage = "";
                    document.getElementById("see-more-mobile-gallery-a").style.color = "";
                    document.getElementById("see-more-mobile-gallery").style.display = "";
                    mobGal.style.backgroundColor = "";
                    mobGal.style.backgroundImage = "";
                    mobGal.style.height = ""
                    mobGal.scrollIntoView();
                    mobGal.style.color = "";
                document.getElementById("see-more-mobile-gallery").style.backgroundColor = "";
                    allPaintings.forEach(painting => {
                        painting.style.width = ""
                        painting.style.height = ""
                    });
                    if (window.innerWidth > 480 && window.innerWidth < 769){
                        document.querySelector(".navbar").style.visibility = "visible";
                        let prevPicture = document.querySelector("[data-active='prev']");
                        let nextPicture = document.querySelector("[data-active='next']");
                        prevPicture.style.visibility = "visible";
                        nextPicture.style.visibility = "visible";                        
                    }
                    enlargened = false;
                })
    })();   
})();
