var i=0;
var printString;
var moji="ようこそ！！";

function printMoji(){
    document.getElementById("text").innerText=moji.substring(0,i++);
    if(i<=moji.length){
        setTimeout("printMoji()",300);
    }
}
function mailcolor(mcolor){
    document.getElementById("mclr").style.backgroundColor=mcolor;
}
function chgcr(ccolor){
    document.getElementById("cmoji").style.backgroundColor=ccolor;
}
function chgcr2(ccolor2){
    document.getElementById("cmoji2").style.backgroundColor=ccolor2;
}
function chgcr3(ccolor3){
    document.getElementById("cmoji3").style.backgroundColor=ccolor3;
}
function chgcr4(ccolor4){
    document.getElementById("cmoji4").style.backgroundColor=ccolor4;
}