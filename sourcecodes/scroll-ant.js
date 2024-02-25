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
  if (element.getAttribute('data-scrollAnt-one-time')=='null'||element.getAttribute('data-scrollAnt-one-time')===""||element.getAttribute('data-scrollAnt-one-time')!="true") {      
    element.classList.remove("scrolled");
  }
};
 
const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    let getStartTime = window.innerWidth<=990?0:el.getAttribute('data-scrollant-time')=='null'||el.getAttribute('data-scrollant-time')===""?0:el.getAttribute('data-scrollant-time');
    let startTime = el.getAttribute('data-scrollant-responsive')=='null'||el.getAttribute('data-scrollant-responsive')===""||el.getAttribute('data-scrollant-responsive')!="false"?getStartTime:el.getAttribute('data-scrollant-time');
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


// const scorllUp = document.querySelector('.scorll-up');
//   window.addEventListener('scroll', ()=>{
//     if (window.scrollY < 250){  
//       scorllUp.classList.add('hide');
//     }else if(window.scrollY >= 250){
//       scorllUp.classList.remove('hide');
//     }
//   });

//   $('.btn-toTop').click(()=>{
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   });

  // window.addEventListener("load", (event) => {
  //   scrollElements.forEach((ele)=>{
  //     if (elementInView(ele, 75)) {
  //       displayScrollElement(ele);
  //     }
  //   })
  // });
var toTop = document.querySelector('.btnToTop');
var menu = document.querySelector('.mainMenu-list');
let scrollHeight = menu?menu.offsetTop:0;
window.addEventListener('scroll', ()=>{
  if (menu && screen.width > 910) {
    if(window.pageYOffset >= scrollHeight){
      // if (menu) {
      //   menu.classList.add('scrollDown')
      // }
      if (toTop) {
        toTop.classList.remove('top') 
      }

    }else{
      if (toTop) {
        toTop.classList.add('top')
      }
      // if (menu) {
      //   menu.classList.remove('scrollDown')
      // } 
      
    }
  }
});

if (toTop) {
  toTop.addEventListener('click',()=>{window.scrollTo(0, 0);});
}