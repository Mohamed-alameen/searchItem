let popUp=document.getElementById('popUp')
let headOne=document.getElementById('headOne');
let headTwo=document.getElementById('headTwo');
let headThree=document.getElementById('headThree');
let headFour=document.getElementById('headFour');
let headFive=document.getElementById('headFive');
let headSix=document.getElementById('headSix');
input = document.getElementById("myInput");


let iphoneData=()=>{
    let div=document.createElement('div')
    let h1=document.createElement('h1')
    let p=document.createElement('p')
    var inp=document.createElement('input')
    let but=document.createElement('button')
    let cancel=document.createElement('button')
    let brk=document.createElement('br')
    h1.className='h1';
    h1.innerText='I -Phone'
    inp.className='input'
    but.className='button'
    cancel.className='cancel'
    p.innerText='The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface.'
    but.innerText='Done'
    cancel.innerText='❌';
    but.setAttribute('onclick','getValue(event)')
    cancel.setAttribute('onclick','getCancel()')
    div.append(h1,cancel,p,inp,brk,but)
    popUp.className='iphoneShows'
    popUp.innerHTML=div.innerHTML
}

let getCancel=()=>{
    popUp.className='iphoneShow'
}

let getValue=(event)=>{
    let par=event.target.parentNode.children[0]
    let input=event.target.parentNode.children[3]
    par.innerText= input.value
    headOne.innerText=input.value
    // popUp.className='iphoneShow'
}


let redmiData=()=>{
    let div=document.createElement('div')
    let h1=document.createElement('h1')
    let p=document.createElement('p')
    var inp=document.createElement('input')
    let but=document.createElement('button')
    let cancel=document.createElement('button')
    let brk=document.createElement('br')
    h1.className='h1'
    inp.className='input'
    cancel.className='cancel'
    h1.innerText='REDMI-7A'
    p.innerText='The company is a major player in the electronics industry, and Xiaomi phones are known for being wallet-friendly and of high quality.'
    but.innerText='Done'
    cancel.innerText='❌'
    but.setAttribute('onclick','getValue2(event)')
    div.append(h1,cancel,p,inp,brk,but)
    popUp.className='iphoneShows'
    but.className='button'
    cancel.setAttribute('onclick','getCancel()')
    popUp.innerHTML=div.innerHTML
}

let getValue2=(event)=>{
    let par=event.target.parentNode.children[0]
    let input=event.target.parentNode.children[3]
    par.innerText= input.value
    headTwo.innerText=input.value
    // popUp.className='iphoneShow'
}


let oppoData=()=>{
    let div=document.createElement('div')
    let h1=document.createElement('h1')
    let p=document.createElement('p')
    var inp=document.createElement('input')
    let but=document.createElement('button')
    let cancel=document.createElement('button')
    let brk=document.createElement('br')
    h1.className='h1'
    cancel.className='cancel'
    but.className='button'
    h1.innerText='OPPO-K3'
    p.innerText=' Oppo smartphones offer superb value for money and are certainly fierce competition for those looking for handsets that are fast and powerful with excellent camera features '
    but.innerText='Done'
    cancel.innerText='❌'
    but.setAttribute('onclick','getValue3(event)')
    cancel.setAttribute('onclick','getCancel()')
    div.append(h1,cancel,p,inp,brk,but)
    popUp.className='iphoneShows'
    popUp.innerHTML=div.innerHTML
}


let getValue3=(event)=>{
    let par=event.target.parentNode.children[0]
    let input=event.target.parentNode.children[3]
    par.innerText= input.value
    headThree.innerText=input.value
    // popUp.className='iphoneShow'
}


let pocoData=()=>{
    let div=document.createElement('div')
    let h1=document.createElement('h1')
    let p=document.createElement('p')
    var inp=document.createElement('input')
    let but=document.createElement('button')
    let cancel=document.createElement('button')
    let brk=document.createElement('br')
    h1.className='h1'
    cancel.className='cancel'
    but.className='button'
    h1.innerText='POCO-F2PRO'
    p.innerText='The Poco F series is often a bit more powerful and faster. Poco smartphone also often have a Pro version. These devices can handle a bit more than the base model.'
    but.innerText='Done'
    cancel.innerText='❌'
    but.setAttribute('onclick','getValue4(event)')
    cancel.setAttribute('onclick','getCancel()')
    div.append(h1,cancel,p,inp,brk,but)
    popUp.className='iphoneShows'
    popUp.innerHTML=div.innerHTML
}


let getValue4=(event)=>{
    let par=event.target.parentNode.children[0]
    let input=event.target.parentNode.children[3]
    par.innerText= input.value
    headFour.innerText=input.value
    // popUp.className='iphoneShow'
}

let vivoData=()=>{
    let div=document.createElement('div')
    let h1=document.createElement('h1')
    let p=document.createElement('p')
    var inp=document.createElement('input')
    let but=document.createElement('button')
    let cancel=document.createElement('button')
    let brk=document.createElement('br')
    h1.className='h1'
    cancel.className='cancel'
    but.className='button'
    h1.innerText='VIVO-S1'
    p.innerText='Vivo phones are known for their outstanding camera setups and specifications and, for most of the part, it is true. Be it a flagship model in the companys lineup or a mid-range phone,.'
    but.innerText='Done'
    cancel.innerText='❌'
    but.setAttribute('onclick','getValue5(event)')
    cancel.setAttribute('onclick','getCancel()')
    div.append(h1,cancel,p,inp,brk,but)
    popUp.className='iphoneShows'
    popUp.innerHTML=div.innerHTML
}

let getValue5=(event)=>{
    let par=event.target.parentNode.children[0]
    let input=event.target.parentNode.children[3]
    par.innerText= input.value
    headFive.innerText=input.value
    // popUp.className='iphoneShow'
}

let oneplusData=()=>{
    let div=document.createElement('div')
    let h1=document.createElement('h1')
    let p=document.createElement('p')
    var inp=document.createElement('input')
    let but=document.createElement('button')
    let cancel=document.createElement('button')
    let brk=document.createElement('br')
    h1.className='h1'
    but.className='button'
    cancel.className='cancel'
    h1.innerText='ONEPLUS-9R'
    p.innerText='OnePlus phones are known for their solid battery life and fast charging support, which is why so many users prefer them. OnePlus 8T, OnePlus 8T+,'
    but.innerText='Done'
    cancel.innerText='❌'
    but.setAttribute('onclick','getValue6(event)')
    cancel.setAttribute('onclick','getCancel(event)')
    div.append(h1,cancel,p,inp,brk,but)
    popUp.className='iphoneShows'
    popUp.innerHTML=div.innerHTML
}


let getValue6=(event)=>{
    let par=event.target.parentNode.children[0]
    let input=event.target.parentNode.children[3]
    par.innerText= input.value
    headSix.innerText=input.value
    // popUp.className='iphoneShow'
}


function myFunction() {
    var input, filter,a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("img");
    a = div.getElementsByTagName("div");
     if(input.value.length>0){
        popUp.className='popupRe'
    }
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
   



  }












