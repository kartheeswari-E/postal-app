document.body.innerHTML=`
<div id="nav-container">
<div id="logo-container">
<span>P</span>ostal App</div></div>
 <div id="box">
 <div id="sub">
 <input  id="search" placeholder="Enter the Pincode">
 <button id="click">Search</button>
 </div>
 <div id="resultss">
</div>
</div>`

var result=document.getElementById('click')
result.addEventListener('click',async()=>{        
    try{
 let response=await fetch("https://api.postalpincode.in/pincode/"
 +search.value)             
.then(response=>response.json()) 
   
  .then(data=>showResult(data))
   } catch(err){                     
 resultss.innerText="Error"}

})
async function showResult(data){  

    try{ 
    let ol=document.createElement("ol")
       
    let div=document.createElement("div")
    let pin=document.createElement("div")
    pin.innerHTML=`<h4 class="show"><p class="clr">PINCODE:<p>${data[0].PostOffice[0].Pincode}<h4>`;
      let name=document.createElement("div") 
      name.innerHTML=`<h4 class="shows"><p class="clr">NAME:<p>${ data[0].PostOffice[0].Name}</h4>`
    let dis=document.createElement("div")
     dis.innerHTML=`<h4 class="shows"><p class="clr">DISTRICT:<p>${data[0].PostOffice[0].District}<h4>`;
   let bt=document.createElement("div") 
      bt.innerHTML=`<h4 class="shows"><p class="clr">BRANCH TYPE:<p>${data[0].PostOffice[0].BranchType}</h4>`
    let divs=document.createElement("div")
     divs.innerHTML=`<h4 class="shows"><p class="clr">DIVISION:<p>${data[0].PostOffice[0].Division}<h4>`;
  let reg=document.createElement("div") 
     reg.innerHTML=`<h4 class="shows"><p class="clr">REGION:<p>${data[0].PostOffice[0].Region}</h4>`
 let con=document.createElement("div") 
      con.innerHTML=`<h4 class="shows"><p class="clr">COUNTRY:<p>${data[0].PostOffice[0].Country}</h4>`
     let state=document.createElement("div") 
      state.innerHTML=`<h4 class="shows"><p class="clr">STATE:<p>${data[0].PostOffice[0].State}</h4>`
         
     div.append(pin,name,bt,dis,state,divs,reg,con,);
ol.append(div);

resultss.append(ol)}
catch(Error){

p.innerHTML="ERROR Data Not Found Please Refresh The Page";
}
} 

