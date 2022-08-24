//index.html    
    //expand text in content 
const expandText = (() => {
    if ( document.URL.includes("index.html") ) {    
        const textColumn = document.getElementById("about-us-text-p");
        const textColumn2 = document.getElementById("about-us-text-p2");
        let toggler = document.createElement("div");
        toggler.className = "toggler";
        textColumn.appendChild(toggler);
        
        toggler.addEventListener("click", (e) => {
            textColumn2.classList.toggle("open");
            textColumn2.appendChild(toggler);
            if (textColumn2.classList != "open") {
                textColumn.appendChild(toggler);        
            }
        })
    }
})();










