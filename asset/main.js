function moveElement(ele,x_final,y_final,interval){//ele為元素物件
    var x_pos=ele.offsetLeft;
    var y_pos=ele.offsetTop;
    var dist=0;
    if(ele.movement){//防止懸停
      clearTimeout(ele.movement);
    }
    if(x_pos==x_final&&y_pos==y_final){//先判斷是否需要移動
      return;
    }
    dist=Math.ceil(Math.abs(x_final-x_pos)/10);//分10次移動完成
    x_pos = x_pos<x_final ? x_pos+dist : x_pos-dist;
     
    dist=Math.ceil(Math.abs(y_final-y_pos)/10);//分10次移動完成
    y_pos = y_pos<y_final ? y_pos+dist : y_pos-dist;
     
    ele.style.left=x_pos+'px';
    ele.style.top=y_pos+'px';
     
    ele.movement=setTimeout(function(){//分10次移動，自呼叫10次
      moveElement(ele,x_final,y_final,interval);
    },interval)
  }

  function moveIndex(list,num){//移動小圓點
    for(var i=0;i<list.length;i++){
      if(list[i].className=='on'){//清除li的背景樣式
        list[i].className='';
      }
    }
    list[num].className='on';
  }

  var img=document.getElementById('img');
var list=document.getElementById('index').getElementsByTagName('li');
var index=0;//這裡定義index是變數，不是屬性
 
var nextMove=function(){//一直向右移動，最後一個之後返回
  index+=1;
  if(index>=list.length){
    index=0;
  }
  moveIndex(list,index);
  moveElement(img,-720*index,0,20);
};

var img=document.getElementById('img');
var list=document.getElementById('index').getElementsByTagName('li');
var index=0;//這裡定義index是變數，不是屬性
 
var nextMove=function(){//一直向右移動，最後一個之後返回
  index+=1;
  if(index>=list.length){
    index=0;
  }
  moveIndex(list,index);
  moveElement(img,-720*index,0,20);
};

var play=function(){
    timer=setInterval(function(){
      nextMove();
    },2500);
  };


  for(var i=0;i<list.length;i++){//滑鼠覆蓋上哪個小圓圈，圖片就移動到哪個小圓圈，並停止
    list[i].index=i;//這裡是設定index屬性，和index變數沒有任何聯絡
    list[i].onmouseover= function () {
      var clickIndex=parseInt(this.index);
      moveElement(img,-720*clickIndex,0,20);
      index=clickIndex;
      moveIndex(list,index);
      clearInterval(timer);
    };
    list[i].onmouseout= function () {//移開後繼續輪播
      play();
    };
  }
  



  

  var num_jia = document.getElementById("num-jia");
        var num_jian = document.getElementById("num-jian");
        var input_num = document.getElementById("input-num");

        num_jia.onclick = function() {

            input_num.value = parseInt(input_num.value) + 1;
        }

        num_jian.onclick = function() {

            if(input_num.value <= 0) {
                input_num.value = 0;
            } else {

                input_num.value = parseInt(input_num.value) - 1;
            }

        }

        function msg() {
  alert("已成功加入購物車!");
}

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$(function () {
  var $win = $(window);
  var $backToTop = $('.js-back-to-top');
  // 當用戶滾動到離頂部100像素時，展示回到頂部按紐
  $win.scroll(function () {
    if ($win.scrollTop() > 100) {
      $backToTop.show();
    } else {
      $backToTop.hide();
    }
  });

  // 當用戶點擊按鈕時，通過動畫效果返回頭部

  $backToTop.click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 200);
  });
});