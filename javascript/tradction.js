// const trad=document.getElementById('eng');
//       eng=document.getElementById('body2');
//       trad.addEventListener('change',function(){
//         if(this.checked){
//             window.location.href="aithdido-e.html"
//         }
//       })
//       const trad2=document.getElementById('arb');
//             trad2.addEventListener('change',function(){
//                 if(this.checked){
//                     window.location.href="aithdido.html"
//                 }
//             })
t=document.getElementById("div*");
let ville=[];
for(var i=1;i<=7;i++){
    a=document.getElementById('boxh'+i).textContent;
    console.log(a)
    j=eval(i - 1)
    ville[j]=a;
    }
// ville=["oudadi" ,"املشيل" ,"ابوخنان" ,"تاغيغاشت" ,"الغازي"  ,"ايت علي وداود" ,"امردول اوراغ"]
for(var i=0;i<ville.length;i++){
    t.innerHTML+='<div class="button"><button onclick="div'+i+'()">click</button><div class="test" value="0"  >'+ville[i]+'</div></div>';
}

var a=document.getElementsByClassName("test");
c=0;
function div0(){
      c=c + 10 //eval(a[0].getAttribute("value"));
    if(c<100){
    a[0].style.width=c +"%";
}
a[0].setAttribute("value",c);
// newcontent=window.getComputedStyle(a[0],"::after").getPropertyValue("content");
// a[0].style.setProperty('--content-value',100)
    
}
c2=0;
function div1(){
    c2=c2 + 10;
    if(c2<100){
    a[1].style.width=c2 +"%";
}
a[1].setAttribute("value",c2)
}
c3=0;
function div2(){
    c3=c3 + 10;
    if(c3<100){
    a[2].style.width=c3 +"%";
}
a[2].setAttribute("value",c3)
}
c4=0;
function div3(){
    c4=c4 + 10;
    if(c4<100){
    a[3].style.width=c4 +"%";
}
a[3].setAttribute("value",c4)
}

c5=0;
function div4(){
    c5=c5 + 10;
    if(c5<100){
    a[4].style.width=c5 +"%";
}
a[4].setAttribute("value",c5)
}
c6=0;
function div5(){
    c6=c6 + 10;
    if(c6<100){
    a[5].style.width=c6 +"%";
}
a[5].setAttribute("value",c6)
}
c7=0;
function div6(){
    c7=c7 + 10;
    if(c7<100){
    a[6].style.width=c7 +"%";
}
a[6].setAttribute("value",c7)
}

