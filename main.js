function start(){
    navigator.mediaDevices.getUserMedia({audio: true});
    c= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/F6itBjh4n/model.json', mr);
}

function mr(){
    c.classify(gr);
}

function gr(error,results){
    console.log("Got Result", gr);
}

dog=0;
cat=0;
lion=0;
cow=0;

function gr(error,results){
if (error){
    console.log(error);
}
else{
    console.log(results);
    r= Math.floor(Math.random()*255)+1;
g= Math.floor(Math.random()*255)+1;
b= Math.floor(Math.random()*255)+1;
}
}

document.getElementById("n").innerHTML= results[0].label;
document.getElementById("n").style.color="rgb("+r+","+g+","+b+")";
document.getElementById("cn").style.color="rgb("+r+","+g+","+b+")";
res=results[0].label;
image=document.getElementById("image");

if (res=="Barking"){
image.src="https://townsquare.media/site/40/files/2017/03/Dog-.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89";
dog=dog+1;
document.getElementById("cn").innerHTML=dog;
}
else if(res=="Meowing"){
    image.src="https://www.nj.com/resizer/mg42jsVYwvbHKUUFQzpw6gyKmBg=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.nj.com/home/njo-media/width2048/img/somerset_impact/photo/sm0212petjpg-7a377c1c93f64d37.jpg";
    cat=cat+1;
    document.getElementById("cn").innerHTML=cat;
}
else if(res=="Roaring"){
    image.src="https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlvbiUyMGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";
    lion=lion+1;
    document.getElementById("cn").innerHTML=lion;
}
else{
    image.src="https://s-i.huffpost.com/gen/1343509/images/o-COWTIPPING-PHYSICS-facebook.jpg";
    cow=cow+1;
    document.getElementById("cn").innerHTML=cow;
}