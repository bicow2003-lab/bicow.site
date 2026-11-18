(function(){
  var io=('IntersectionObserver' in window)?new IntersectionObserver(function(es){es.forEach(function(e){
    if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12}):null;
  window.revealScan=function(){document.querySelectorAll('.rv:not(.in):not([data-o])').forEach(function(el){
    el.setAttribute('data-o','1');if(io)io.observe(el);else el.classList.add('in')})};
  revealScan();
  document.addEventListener('click',function(e){
    var b=e.target.closest('button.ask');if(!b)return;
    var p=b.dataset.phone,a=document.createElement('a');
    a.className='ask done'+(b.classList.contains('zalo-fab')?' zalo-fab':'');
    a.href='https://zalo.me/'+p;a.target='_blank';a.rel='noopener';
    a.textContent=p.replace(/(\d{4})(\d{3})(\d{3})/,'$1 $2 $3')+' · Mở Zalo';b.replaceWith(a);
  });
  var bar=document.querySelector('.prog');
  function on(){var h=document.documentElement,m=h.scrollHeight-h.clientHeight;if(bar)bar.style.transform='scaleX('+(m>0?h.scrollTop/m:0)+')'}
  window.addEventListener('scroll',on,{passive:true});on();
})();
