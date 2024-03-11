let input=document.getElementById("input");

let getbtn=document.getElementById("btn");
let result=document.getElementById("post");

let postimg=["img/1.jpeg","img/2.jpeg","img/3.jpeg","img/4.jpeg","img/5.jpeg","img/me.jpg"];
let arr=[]
let count=1;
let edit=false

getbtn.addEventListener('click',ans);

function ans(e){
	e.preventDefault()
	
	readpost()
}
let data={}
function readpost(a){

	console.log(a)
	if(a==undefined){
		randomPic=postimg[Math.floor(Math.random()*postimg.length)]
		
		let obj={
			text:input.value,
		src:randomPic,
		id:count++,
		like:0
		}

		arr.push(obj)
	
		input.value=''
	
		createpost(arr)
	}
 else{
	createpost(a)
 }
  
	
}
function createpost(a){

	let all=document.querySelectorAll('.post-area')
	
	all.forEach((e)=>{                     //already irukka post remove Pannnidu Apram vara value Print Panna 
		e.remove()
	})

	
	a.forEach(e => {
		result.innerHTML+=`<div class="post-area">
	<p class='name'>${e.text}</p>
	
     <span class="options"> 
	 <div class="content">
	 
	 <i onclick="editpost(this)" class="bi bi-pencil-square">Edit</i>
	 
	 <i onclick="removepost(this)" class="bi bi-trash3">Dlete</i>
	<i onclick="likepost(this)"    class="bi bi-heart">like <span id="liked">${e.like}</span></i>
	 
	
	
	 </span>
	 <img src=${e.src} class="post-img">
	 </div>
	</div>
	`
		
	});
	
     
}


function editpost(e){

	let a=e.parentElement.parentElement.parentElement

	input.value=e.parentElement.parentElement.previousElementSibling.innerHTML //Edit Click Pandrapo Inout Value Show panna

	e.parentElement.parentElement.parentElement.remove();
	

	let name=a.querySelector('.name').innerHTML

	let aA=arr.filter((a)=>{
         return a.text!=name
	})
	

	arr=aA  //Array value Update Pandrathukku

}
function removepost(e){
	e.parentElement.parentElement.parentElement.remove();

	let a=e.parentElement.parentElement.parentElement

	let name=a.querySelector('.name').innerHTML
	let aA=arr.filter((a)=>{
         return a.text!=name
	})
	

	arr=aA
		
}

function likepost(e){

edit=true
	let a=e.parentElement.parentElement.parentElement

	let name=a.querySelector('.name').innerHTML

	let b=arr.find(e=>e.text==name)
	console.log(b)

	let all=arr.map((e)=>{
		return e.id==b.id ? {...e,like:++e.like}:e
	})

	console.log(all)

	readpost(all)
}