function visualTraverseTree(){
  var root=document.getElementById("root");
  preOrderTraverse(root);
}
function preOrderTraverse(node){
  if(node){
    array.push(node);
    preOrderTraverse(node.firstElementChild);
    preOrderTraverse(node.lastElementChild);
  }
}
var eventUtil={
  addHandler:function(element,type,handler){
    if(element.removeEventListener){
      element.addEventListener(type,handler,false);
    }else if(element.attachEvent){
      element.attachEvent("on"+type,handler);
    }else{
      element["on"+type]=handler;
    }
  },
  removeHandler:function(element,type,handler){
    if(element.removeEventListener){
      element.removeEventListener(type,handler,false);
    }else if(element.attachEvent){
      element.detachEvent("on"+type,handler);
    }else{
      element["on"+type]=null;
    }
  }
};
var animationUtil={
  i:0,
  flag:0,
  interval:0,
  arr:new Array(),
  addAnimation:function(){
    animationUtil.removeAnimation();
    var length=animationUtil.arr.length;
    animationUtil.interval=setInterval(function () {
      if(animationUtil.flag==0){
        animationUtil.arr[animationUtil.i].style.backgroundColor="#00ff00";
        animationUtil.flag=1;
      }else{
        animationUtil.arr[animationUtil.i].style.backgroundColor="#ffffff";
        animationUtil.flag=0;
        if(animationUtil.i==length-1){
          animationUtil.i=-1;
        }
        animationUtil.i++;
     }
   }, 1000);
   },
   removeAnimation:function (){
     window.clearInterval(animationUtil.interval);
     animationUtil.arr[animationUtil.i].style.backgroundColor="#ffffff";
     animationUtil.i=0;
     animationUtil.flag=0;
     animationUtil.interval=0;
   }
 };
var array=new Array();
//var i;//interval中当前染色的结点
//var interval;//interval的id
visualTraverseTree();

animationUtil.arr=array;
var preOrderBtn=document.getElementById("preOrderBtn");
var stopBtn=document.getElementById("stopBtn");
eventUtil.addHandler(preOrderBtn,"click",animationUtil.addAnimation);
eventUtil.addHandler(stopBtn,"click",animationUtil.removeAnimation);
