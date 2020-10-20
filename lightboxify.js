// Plugin file

let lightboxify = function(selector, optionsObj = {}){

    let defaults = {
        overlayOpacity = 0.75,
        escapeClosesLightbox = true,
        lightboxBackground = `white`,
        maxImageWidth = 90,
        maxImageHeight = 80,
        lightboxPadding = 30,
        transition = true,
    }

    optionsObj = {
        ...defaults,
        ...optionsObj
    }


    let lightboxLinks = document.querySelectorAll(selector)
    let contentDIV = document.querySelector(`.content`)
    let lightboxOn = false;

    let expandLightbox = function(inputIMG){
        inputIMG.style.maxWidth = `${optionsObj.maxImageWidth}vw`
        inputIMG.style.maxHeight = `${optionsObj.maxImageHeight}vh`
    }

    for(let i=0;i<lightboxLinks.length;i++){
        lightboxLinks[i].addEventListener(`click`, function(event){
            event.preventDefault()
            lightboxOn = true;
            let overlayDIV = document.createElement(`div`)
            overlayDIV.classList.add(`lightbox-overlay`)
            overlayDIV.style.position = `fixed`
            overlayDIV.style.top = 0
            overlayDIV.style.left = 0
            overlayDIV.style.backgroundColor = `rgba(0, 0, 0, ${optionsObj.overlayOpacity})`
            overlayDIV.style.width = `100vw`
            overlayDIV.style.height = `100vh`
            contentDIV.appendChild(overlayDIV)
            let lightboxSECTION = document.createElement(`section`)
            lightboxSECTION.classList.add(`lightbox`)
            lightboxSECTION.style.position = `fixed`
            lightboxSECTION.style.top = `50%`
            lightboxSECTION.style.left = `50%`
            lightboxSECTION.style.transform = `translate(-50%, -50%)`
            lightboxSECTION.style.msTransform = `translate(-50%, -50%)`
            lightboxSECTION.style.backgroundColor = optionsObj.lightboxBackground
            lightboxSECTION.style.padding = `${optionsObj.lightboxPadding}px`
            lightboxSECTION.style.borderRadius = `5px`
            overlayDIV.appendChild(lightboxSECTION)
            let lightboxIMG = document.createElement(`img`)
            lightboxIMG.src = lightboxLinks[i].getAttribute(`href`)
            lightboxIMG.style.display = `block`
            if(optionsObj.transition === false){
                lightboxIMG.style.maxWidth = `${optionsObj.maxImageWidth}vw`
                lightboxIMG.style.maxHeight = `${optionsObj.maxImageHeight}vh`
            }
            else{
                lightboxIMG.style.maxWidth = `10vw`
                lightboxIMG.style.maxHeight = `10vh`
                lightboxIMG.style.transition = `all 0.75s`
                setTimeout(expandLightbox, 20, lightboxIMG)
            }          
            lightboxSECTION.appendChild(lightboxIMG)
            let closeDIV = document.createElement(`div`)
            closeDIV.classList.add(`lightbox-close`)
            closeDIV.style.position = `absolute`
            closeDIV.style.top = 0
            closeDIV.style.right = 0
            closeDIV.style.width = `48px`
            closeDIV.style.height = `48px`
            closeDIV.style.transform = `translate(50%, -50%)`
            closeDIV.style.msTransform = `translate(50%, -50%)`
            closeDIV.style.border = 0
            closeDIV.style.outline = `none`
            closeDIV.style.background = `none`
            closeDIV.style.backgroundSize = `contain`
            closeDIV.style.backgroundImage = `url(dist/img/close-button.png)`
            closeDIV.style.opacity = `0.75`
            lightboxSECTION.appendChild(closeDIV)
            closeDIV.addEventListener(`click`, function(){
                overlayDIV.remove()
                lightboxOn === false
            })
            closeDIV.addEventListener(`mouseover`, function(){
                closeDIV.style.opacity = `1`
            })
            closeDIV.addEventListener(`mouseout`, function(){
                closeDIV.style.opacity = `0.75`
            })
            if(optionsObj.escapeClosesLightbox){
                document.addEventListener(`keyup`, function(key){
                    if (key.keyCode === 27 && lightboxOn === true) { 
                        overlayDIV.remove()
                        lightboxOn === false
                    }
                })
            }
            overlayDIV.addEventListener(`click`, function(area){
                if(area.target.classList.contains(`lightbox-overlay`)){
                    overlayDIV.remove()
                }
            })
        })
    }

}
