const scrollElements = document.querySelectorAll(".scrollAnt");
const elementInView = (el, scrollOffset = 0) => {
  const elementTop = el.getBoundingClientRect().top;
 
  return (
    elementTop <= 
    ((window.innerHeight || document.documentElement.clientHeight) * (scrollOffset/100))
  );
};
const displayScrollElement = (element) => {  
      element.classList.add("scrolled");    
};
const hideScrollElement = (element) => {
  if (element.getAttribute('scrollAnt-one-time')=='null'||element.getAttribute('scrollAnt-one-time')===""||element.getAttribute('scrollAnt-one-time')!="true") {      
    element.classList.remove("scrolled");
  }
};
 
const handleScrollAnimation = () => {
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
window.addEventListener('scroll', () => {
  handleScrollAnimation();
})


const scorllUp = document.querySelector('.scorll-up');
  window.addEventListener('scroll', ()=>{
    if (window.scrollY < 250){  
      scorllUp.classList.add('hide');
    }else if(window.scrollY >= 250){
      scorllUp.classList.remove('hide');
    }
  });

  $('.btn-toTop').click(()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener("load", (event) => {
    scrollElements.forEach((ele)=>{
      if (elementInView(ele, 75)) {
        displayScrollElement(ele);
      }
    })
  });
  