// var focus=document.querySelector('.focus');
//         var startX=0;
//         var shartY=0;
//         var x=0;
//         var y=0;
//         focus.addEventListener('touchstart',function(e){
//             startX=e.targetTouches[0].pageX;
//             startY=e.targetTouches[0].pageY;
//             x=this.offsetLeft;
//             y=this.offsetTop;
//         });
//         focus.addEventListener('touchmove',function(e){
//             var moveX=e.targetTouches[0].pageX-startX;
//             var moveY=e.targetTouches[0].pageY-startY;
//             if((x+moveX)>30){
//                 focus.style.background='url(https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDUvNTkxNjY4MzYwNTc4MTlhMDVjNGZmNmQ5NWFjMzU0OGItOTAud2VicA_p_p100_p_3D_p_p100_p_3D.webp)'
//             }
//         })
var link=document.querySelector('.title-show-link');
var yinc=document.querySelector('.yinc');
var html=document.querySelector('html')
link.addEventListener('click',function(){
    yinc.style.display='block'
    // console.log('222')
})
// html.addEventListener('click',function(){
//     yinc.style.display='none'
// })