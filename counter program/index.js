let count = 0;
count = Number(count);

document.getElementById("Dcr").onclick=function(){
    count -=1;
    document.getElementById("Lab").innerHTML= count;
}

document.getElementById("Res").onclick=function(){
    count =0;
    document.getElementById("Lab").innerHTML= count;
}

document.getElementById("Inr").onclick=function(){
    count +=1;
    document.getElementById("Lab").innerHTML= count;
}