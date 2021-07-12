function updateText(){
    let text = document.getElementById("inputtext").value;
    document.getElementById("outputtext").innerHTML = text;
}

function turnBold(elem){
    elem.classList.toggle('active');
    document.getElementById("outputtext").classList.toggle("boldc")
}
function turnItalic(elem){
    elem.classList.toggle('active');
    document.getElementById("outputtext").classList.toggle("italicc")
}
function turnUnderline(elem){
    elem.classList.toggle('active');
    document.getElementById("outputtext").classList.toggle("underlinec")
}
function turnAlign(elem, align){
    document.getElementById("outputtext").style.textAlign = align;
    let btn = document.getElementsByClassName("align");
    for(let i = 0; i < btn.length; i++ ){
        btn[i].classList.remove('active');
    }
    elem.classList.add('active');
}
