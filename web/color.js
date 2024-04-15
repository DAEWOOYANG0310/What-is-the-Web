var body = {
  backgroundsetColor:function(color){
  document.querySelector('body').style.backgroundColor = color;
},
  setColor:function(color){
    document.querySelector('body').style.color = color;
  }
} 
var links = {
    setColor:function(color){
    var alist = document.querySelectorAll('a');
     var i = 0;
     while(i < alist.length){
     alist[i].style.color = color;
     i = i + 1;
}
  }
}


function nightdayHandler(self){
  var target=document.querySelector('body')
  if(self.value === 'night'){
     body.backgroundsetColor('black');
     self.value = 'day'; 
     body.setColor('white'); 
     links.setColor('white');  
  }else{
    body.backgroundsetColor('white');
    self.value = 'night'; 
    body.setColor('black'); 
    links.setColor('black');
    } 
  }