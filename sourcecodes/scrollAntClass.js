class scrollAnt {
    scrollOffsetGet;
    element;

    constructor(element) {
        this.element = element; 
    }

    elementInView(el, scrollOffset = 0) {
        const elementTop = el.getBoundingClientRect().top
       
        return (
          elementTop <= 
          ((window.innerHeight || document.documentElement.clientHeight) * (scrollOffset/100))
        )
    }

    displayScrollElement(element) {  
        element.classList.add("scrolled");    
    }

    hideScrollElement(element) {
        if (element.getAttribute('scrollAnt-one-time')=='null'||element.getAttribute('scrollAnt-one-time')===""||element.getAttribute('scrollAnt-one-time')!="true") {      
          element.classList.remove("scrolled");
        }
    }

    handleScrollAnimation() {
        scrollElements.forEach((el) => {
          let getStartTime = window.innerWidth<=990?0:el.getAttribute('scrollAnt-time')=='null'||el.getAttribute('scrollAnt-time')===""?0:el.getAttribute('scrollAnt-time');
          let startTime = el.getAttribute('scrollAnt-responsive')=='null'||el.getAttribute('scrollAnt-responsive')===""||el.getAttribute('scrollAnt-responsive')!="false"?getStartTime:el.getAttribute('scrollAnt-time');
          if (elementInView(el, 75)) {
            const Timeout = setTimeout(()=>{
                displayScrollElement(el);
            }, startTime*150);
          } else {
            const Timeout = setTimeout(()=>{
                hideScrollElement(el);
            }, startTime*150);
          }
        })
    }

    init() {
        window.addEventListener('scroll', () => {
            handleScrollAnimation();
        })
    }
}