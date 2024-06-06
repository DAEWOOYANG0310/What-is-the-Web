let Link = {
  setcolor:function(color){
let alist = document.querySelectorAll('a');
let i = 0;
while(i < alist.length){
alist[i].style.color = color;
i = i + 1;
}
}
}


let Body = {
setcolor:function(color){
  document.querySelector('body').style.color = color;
},
setbackgroundcolor:function(color){
  document.querySelector('body').style.backgroundColor = color;
}
}
function nightdayhandler(self){
if(document.querySelector('#night_day').value === 'night'){
 Body.setbackgroundcolor('black');
 Body.setcolor('white');
 self.value = 'day'
 Link.setcolor('powderblue')
}else{
Body.setbackgroundcolor('white');
Body.setcolor('black');
self.value = 'night'
Link.setcolor('blue')

}
}





