// simple interactions: menu toggle and login modal
document.addEventListener('DOMContentLoaded',function(){
  const menu = document.getElementById('menuBtn');
  const nav = document.getElementById('navList');
  if(menu && nav){
    menu.addEventListener('click',()=>{nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex'});
  }
  const menu2 = document.getElementById('menuBtn2');
  const nav2 = document.getElementById('navList2');
  if(menu2 && nav2){menu2.addEventListener('click',()=>{nav2.style.display = nav2.style.display === 'flex' ? 'none' : 'flex'});}

  // modal
  const openLogin = document.getElementById('openLogin');
  const loginModal = document.getElementById('loginModal');
  const closeLogin = document.getElementById('closeLogin');
  const cancelLogin = document.getElementById('cancelLogin');
  if(openLogin && loginModal){
    openLogin.addEventListener('click',()=>{loginModal.setAttribute('aria-hidden','false');document.getElementById('memberId').focus();});
  }
  if(closeLogin){closeLogin.addEventListener('click',()=>{loginModal.setAttribute('aria-hidden','true');});}
  if(cancelLogin){cancelLogin.addEventListener('click',()=>{loginModal.setAttribute('aria-hidden','true');});}

  const loginForm = document.getElementById('loginForm');
  if(loginForm){
    loginForm.addEventListener('submit',e=>{
      e.preventDefault();
      // placeholder: show success and close modal
      alert('This is a prototype. Integrate with backend auth.');
      loginModal.setAttribute('aria-hidden','true');
    });
  }
});
