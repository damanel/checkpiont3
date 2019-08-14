var getText=document.getElementsByClassName("mytext")[0];

function changeBolde(){
    if(getText.style.fontWeight=="normal"){
        getText.style.fontWeight="bold";

    }
    else{
        getText.style.fontWeight="normal";
    }
    
}
function changeItalic(){

    if(getText.style.fontStyle=="normal"){
        getText.style.fontStyle="italic";
    }
    else{
        getText.style.fontStyle="normal";
    }
}
function underline(){
    if(getText.style.textDecoration=="none"){
        getText.style.textDecoration="underline";
    }
    else{
        getText.style.textDecoration="none";
    }
}
function changesize(){
    getText.style.fontSize=document.getElementById("fs").value; 
}
function changefamily(){
    getText.style.fontFamily=document.getElementById("fm").value;
}