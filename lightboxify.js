let lightboxify=function(t,e={}){let l={overlayOpacity:overlayOpacity=.75,escapeClosesLightbox:escapeClosesLightbox=!0,lightboxBackground:lightboxBackground="white",maxImageWidth:maxImageWidth=90,maxImageHeight:maxImageHeight=80,lightboxPadding:lightboxPadding=30,transition:transition=!0};e={...l,...e};let i=document.querySelectorAll(t),a=!1,o=function(t){t.style.maxWidth=e.maxImageWidth+"vw",t.style.maxHeight=e.maxImageHeight+"vh"};for(let t=0;t<i.length;t++)i[t].addEventListener("click",(function(l){l.preventDefault(),a=!0;let s=document.createElement("div");s.classList.add("lightbox-overlay"),s.style.position="fixed",s.style.top=0,s.style.left=0,s.style.backgroundColor=`rgba(0, 0, 0, ${e.overlayOpacity})`,s.style.width="100vw",s.style.height="100vh",document.querySelector("body").appendChild(s);let n=document.createElement("section");n.classList.add("lightbox"),n.style.position="fixed",n.style.top="50%",n.style.left="50%",n.style.transform="translate(-50%, -50%)",n.style.msTransform="translate(-50%, -50%)",n.style.backgroundColor=e.lightboxBackground,n.style.padding=e.lightboxPadding+"px",n.style.borderRadius="5px",s.appendChild(n);let d=document.createElement("img");d.src=i[t].getAttribute("href"),d.style.display="block",!1===e.transition?(d.style.maxWidth=e.maxImageWidth+"vw",d.style.maxHeight=e.maxImageHeight+"vh"):(d.style.maxWidth="10vw",d.style.maxHeight="10vh",d.style.transition="all 0.75s",setTimeout(o,20,d)),n.appendChild(d);let r=document.createElement("div");r.classList.add("lightbox-close"),r.style.position="absolute",r.style.top=0,r.style.right=0,r.style.width="48px",r.style.height="48px",r.style.transform="translate(50%, -50%)",r.style.msTransform="translate(50%, -50%)",r.style.border=0,r.style.outline="none",r.style.background="none",r.style.backgroundSize="contain",r.style.backgroundImage="url(dist/img/close-button.png)",r.style.opacity="0.75",n.appendChild(r),r.addEventListener("click",(function(){s.remove()})),r.addEventListener("mouseover",(function(){r.style.opacity="1"})),r.addEventListener("mouseout",(function(){r.style.opacity="0.75"})),e.escapeClosesLightbox&&document.addEventListener("keyup",(function(t){27===t.keyCode&&!0===a&&s.remove()})),s.addEventListener("click",(function(t){t.target.classList.contains("lightbox-overlay")&&s.remove()}))}))};
//# sourceMappingURL=lightboxify.js.map