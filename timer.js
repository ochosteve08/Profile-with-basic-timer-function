let profilePic=document.getElementById("profile");
let myMessage=document.getElementById("message");
let firstParagraph=document.getElementById('text1');
let secondParagraph=document.getElementById('text2');
let colorChanger= document.getElementById('color-changer');
let color=['red','orange','yellow','green', 'blue', 'indigo','violet'];
let count= 0;

const pix=()=>{
  profilePic.className = "show"
}
const div=()=>{
    myMessage.className = "show"
}

const  first=()=>{
    firstParagraph.className ="show"
}

const second=()=>{
    secondParagraph.className="show"
}
const changeColor=()=>{

  if(count== color.length){
    //colorChanger.style.background= color[0];
    count=0;
  }
    colorChanger.style.background= color[count];
    count++;
}

setTimeout(pix,2000)
setTimeout(div,3000)
setTimeout(first,4500)
setTimeout(second,6000)
let slide=setInterval(changeColor, 3000);

colorChanger.onclick= function(){


    clearInterval(slide);
    colorChanger.innerHTML=''

}
