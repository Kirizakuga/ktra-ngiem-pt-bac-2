function solver(){
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = parseFloat(document.getElementById('c').value);
    if(isNaN(a) || isNaN(b) || isNaN(c)){
        document.getElementById("ketqua").innerHTML = "vui long nhap a,b,c";
        return;
    }
    var delta = b*b - 4*a*c;
    
    
    if (delta > 0){
        document.getElementById('ketqua').innerHTML = "pt co 2 nghiem phan biet";
        return;
    }
    else if(delta === 0 ){
        document.getElementById('ketqua').innerHTML = "pt co nghiem kep";
        return;
    }
    else{
        document.getElementById('ketqua').innerHTML = "pt vo nghiem";
        return;
    }
    
}

document.getElementById('solve').addEventListener('click', solver)
document.getElementById('solve').addEventListener('click', function(){
    const sound = document.getElementById('sound');
    sound.currentTime = 0;
    sound.play();
});