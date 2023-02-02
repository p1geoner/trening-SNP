let navItem = document.querySelectorAll('.tabs__header-item');
let contentItem = document.querySelectorAll('.tabs__body-content');
let contTab = document.querySelectorAll('.tab-2');
let navTab = document.querySelectorAll('.tab');
function open(){
    
    navItem.forEach(function(elem){
        elem.classList.remove('active');
    })
    contentItem.forEach(function(elem){
        elem.classList.remove('active');
    })
    navTab.forEach(function(elem){
        elem.classList.add('active');
    })
    contTab.forEach(function(elem){
        elem.classList.add('active');
    })
    
}

navItem.forEach(function(elem){
    elem.addEventListener('click',activeTab);
})
function activeTab(){
    navItem.forEach(function(elem){
        elem.classList.remove('active');
    })
    this.classList.add('active');
    let tabName = this.getAttribute('data-tab');
    // console.log(tabName);
    activeTabContent(tabName);
    }
function activeTabContent(tabName){
    contentItem.forEach(function(item){
        if(item.classList.contains(tabName)){
            item.classList.add('active');
            
        }else{
            item.classList.remove('active');
        }
    })
};
  let logo = document.getElementById('logo');
  let elem =document.getElementById('header'); 
  const fixedHeaderClassName= 'fixed';
  const height=450;
  window.addEventListener('scroll', (ev)=>{
    if(scrollY>height){
      logo.src="images/logo-black.svg";
      elem.classList.add(fixedHeaderClassName);
    }else{
      logo.src="images/logo.svg";
      elem.classList.remove(fixedHeaderClassName);
    }
  })
  
