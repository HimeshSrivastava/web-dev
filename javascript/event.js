






function toggleHide(){
    let btn = document.getElementsByClassName('btn');
    let para =document.getElementById('para');
//   para.style.display ='none';
  if(para.style.display != 'none'){
    para.style.display ='none';
  }
  else{
    para.style.display ='block';
  }
}
let para =document.getElementById('para');
para.addEventListener("click", function run(){
    console.log("clicked");
    let conf=confirm("are you sure");
    console.log(conf);
});