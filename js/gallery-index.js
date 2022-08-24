const gallery = (() => {
    // gallery for mobile and tablet
    const buttonsSides = document.querySelectorAll("[data-mobile-gallery-button]");
    const allPaintings = document.querySelectorAll("[data-active]");
    let enlargedMobileGallery = false;  
    let enlargedWideGallery = false;  
    buttonsSides.forEach(button => {        
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
            if (window.innerWidth > 480 && enlargedMobileGallery === true){    
                mainPicture.style.visibility = "visible"
                prevPicture.style.visibility = "hidden";
                nextPicture.style.visibility = "hidden";                    
            } else if (enlargedMobileGallery === false) {
                mainPicture.style.visibility = "visible"
                prevPicture.style.visibility = "visible";
                nextPicture.style.visibility = "visible"; 
            } else if (window.innerWidth <= 480) {
                prevPicture.style.visibility = "visible";
                nextPicture.style.visibility = "visible";     
            }
        });
    });
    // mobile enlarge and close enlargement
    const enlarging = (() => {        
        allPaintings.forEach(painting => {
            painting.addEventListener("click", () => {
                enlargedMobileGallery = true;
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
    const closeEnlarging = (() => {
                const close =  document.getElementById("close-enlarged-gallery");
                const mobGal = document.getElementById("index-mobile-gallery");
                close.addEventListener("click", () => {
                    closeFun();                    
                })        
                const closeFun = () => {
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
                    enlargedMobileGallery = false;
                }   
                return {closeFun}     
    })();     
    //wide screen
    const allPaintings768 = document.querySelectorAll(".index-gallery-wide-size768");
    const gallery768 = document.getElementById("index-gallery");
    const sliderGallery = document.querySelector(".index-slider-gallery");
    const largeImg = document.getElementById("index-gallery-enlarged-img");   
    const enlargedGalleryWide = document.getElementById("index-gallery-enlarged");
    const buttonsPrevNext = document.querySelectorAll(".index-gallery-buttons")
    let mainPaintingLarge;
    // enlarge
    allPaintings768.forEach(painting => {
        painting.addEventListener("click", () => {
            mainPaintingLarge = painting;
            mainPaintingLarge.dataset.active = "main";
            enlargedGalleryWide.style.display = "block";
            sliderGallery.style.display = "none";
            document.querySelector(".navbar").style.visibility = "hidden";
            gallery768.style.height = "100vh";           
            largeImg.src = painting.src;
            document.getElementById("index-body").style.overflow = "hidden";
            gallery768.scrollIntoView();
            gallery768.style.position = "relative";
            gallery768.style.backgroundColor = "rgba(32, 108, 167, 0.8)";
            document.getElementById("index-body").style.backgroundImage = "none";
            enlargedWideGallery = true;
        })
    })
    // next picture previous picture
    buttonsPrevNext.forEach(button => {
        button.addEventListener("click", () => {          
            let mainPainting = (() => {
                for (let i = 0; allPaintings768.length > i; i++) {
                    if([...allPaintings768][i].dataset.active === "main"){
                        return i;               
                    }
                } 
            })();
            let paintingForward = (() => {
                let forward = (jumptofront) => {
                    if(jumptofront === 0) {
                        [...allPaintings768][[...allPaintings768].length - 1].dataset.active = "";
                        [...allPaintings768][jumptofront].dataset.active = "main";
                        largeImg.src = [...allPaintings768][jumptofront].src;
                    } else {
                        [...allPaintings768][mainPainting].dataset.active = "";
                        [...allPaintings768][mainPainting + 1].dataset.active = "main";
                        largeImg.src = [...allPaintings768][mainPainting + 1].src;
                    }
                }
                if (button.dataset.galleryButton === "next" && [...allPaintings768].length - 1 > mainPainting){                
                    forward();
                } else if (button.dataset.galleryButton === "next" && [...allPaintings768].length - 1 === mainPainting) {
                    forward(0);
                } 
            })();
            let paintingBackwards = (() => {
                let backwards = (jumptoback) => {
                    if(jumptoback === 7) {
                        [...allPaintings768][0].dataset.active = "";
                        [...allPaintings768][jumptoback].dataset.active = "main";
                        largeImg.src = [...allPaintings768][jumptoback].src;
                    } else {
                        [...allPaintings768][mainPainting].dataset.active = "";
                        [...allPaintings768][mainPainting - 1].dataset.active = "main";
                        largeImg.src = [...allPaintings768][mainPainting - 1].src;
                    }
                }
                if (button.dataset.galleryButton === "prev" && mainPainting != 0){                
                    backwards();
                } else if (button.dataset.galleryButton === "prev" && mainPainting === 0) {
                    backwards(7);
                } 
            })();          
        })       
    }) 
    //close enlarged gallery
    const closeEnlargedWideGallery = document.getElementById("close-enlarged-gallery-wrapper-large");
    minimizeEnlargedWideGallery = () => {
            mainPaintingLarge.dataset.active = "";
            enlargedGalleryWide.style.display = "";
            sliderGallery.style.display = "";
            document.querySelector(".navbar").style.visibility = "visible";
            gallery768.style.height = "";           
            document.getElementById("index-body").style.overflow = "";
            gallery768.scrollIntoView();
            gallery768.style.position = "";
            gallery768.style.backgroundColor = "";
            document.getElementById("index-body").style.backgroundImage = "";
            enlargedWideGallery = false;
    }
    closeEnlargedWideGallery.addEventListener("click", () => {
        minimizeEnlargedWideGallery ()
    })
    //on tilt close enlarged gallery
    let tiltClose =(() => {
        if (enlargedWideGallery === true) {
            const mediaQueryLandscape = window.matchMedia('(orientation: landscape)');
            const mediaQueryPortrait = window.matchMedia('(orientation: portrait)');    
            function tiltLandscape(e) {
                if (e.matches && '(orientation: landscape)') {               
                    minimizeEnlargedWideGallery();  
                } else {
                    closeEnlarging.closeFun();                             
                }          
            }
            mediaQueryLandscape.addListener(tiltLandscape);
            tiltLandscape(mediaQueryLandscape);

            function tiltPortrait(e) {
                if (e.matches && '(orientation: portrait)') {               
                    minimizeEnlargedWideGallery();
                } else {                       
                    closeEnlarging.closeFun();
                }        
            }        
            mediaQueryPortrait.addListener(tiltPortrait);
            tiltPortrait(mediaQueryPortrait);
        }
    })();

    // //tilt gallery when rotating screen with enlargedMobileGallery gallery
    // let lockScreen = (() => {
    //     const mediaQuery = window.matchMedia('(orientation: landscape)');
    //     const gallery = document.querySelector("#index-mobile-gallery");
    //     const galleryLarge = document.querySelector("#index-gallery");
    //     const allImg = document.querySelectorAll(".painting-mobile-img");
    //     //tilt landscape
    //     function tilt(e) { 
    //         // screens under 769px
    //         if (e.matches && enlargedMobileGallery === true) {
    //             document.querySelector(".navbar").style.visibility = "hidden";
    //             //screens over 768px
    //             if (window.innerWidth > 768) {
    //                 document.querySelector(".navbar").style.visibility = "hidden";
    //                 galleryLarge.style.display = "none";
    //                 gallery.style.display = "block";
    //             }
    //             gallery.style.transformOrigin = "left top";
    //             gallery.style.width = "100vw"; 
    //             gallery.style.height = "100vh"               
    //             gallery.style.position = "absolute";
    //             gallery.style.top = "100%";
    //             gallery.style.left = "0%";
    //             gallery.style.overflow = "hidden";
    //             gallery.scrollIntoView();                
    //             allPaintings.forEach(painting => {
    //                 painting.style.height = "90vh";
    //                 if (painting.dataset.active != "main") {
    //                 painting.style.visibility = "hidden";
                            
    //                 }
    //             })
                
    //             document.getElementById("about-us-text").style.backgroundImage = "none";
    //         }
    //     }
    //     mediaQuery.addListener(tilt)
    //     tilt(mediaQuery)
    // })();
    //gallery for screen wider than 768px

    
})();
 