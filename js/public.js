$(document).ready(function(){
    $.ajax({
        url:"http://127.0.0.1:5501/nav.json",
        type:"get",
        success:function(res){
          console.log(res)
        } 
        
    })
   var wid = $(window).width()
      console.log(wid)
    $(".item").children().hover(function(){
      
      $(this).addClass("blo")
    },function(){

    })
})

const bor = document.querySelector(".borger")
const aaa = document.querySelector(".bbb")
bor.addEventListener('click',()=>{
  aaa.classList.toggle("open")
})


const top1 = document.querySelector(".scr_top")

// const bo = document.querySelector("body")
top.addEventListener('click',()=>{
  // timer = setInterval(function(){
  //   var toTop = document.createElement.scrollTop ||document.body.scrollTop;
  //   var speed = Math.floor(-toTop / 6)
  //   document.documentElement.scrollTop = document.body.scrollTop = toTop + speed
  //   // isTop = true
  //   if(toTop == 0){
  //     clearInterval(timer)
  //   }
  // },30)

  
  timer = setInterval(function(){
    //获取滚动条的滚动高度
    var osTop = document.documentElement.scrollTop || document.body.scrollTop;
    //用于设置速度差，产生缓动的效果
    var speed = Math.floor(-osTop / 6);
    document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;
    isTop =true;  //用于阻止滚动事件清除定时器
    if(osTop == 0){
        clearInterval(timer);
    }
},30);
})
// console.log(speed)

