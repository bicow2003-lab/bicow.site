(function(){
  var C=window.BOOK||{start:19,end:22};
  var top=document.querySelector('.top'),nav=document.querySelector('.top nav'),bg=document.querySelector('.burger');
  function sc(){if(top)top.classList.toggle('solid',window.scrollY>30)}window.addEventListener('scroll',sc,{passive:true});sc();
  if(bg)bg.addEventListener('click',function(){var o=nav.classList.toggle('open');bg.setAttribute('aria-expanded',o)});
  if(nav)nav.addEventListener('click',function(e){if(e.target.closest('a'))nav.classList.remove('open')});
  /* hiện dần khi cuộn + đếm số */
  var io=('IntersectionObserver' in window)?new IntersectionObserver(function(es){es.forEach(function(e){
    if(!e.isIntersecting)return;var t=e.target;t.classList.add('in');io.unobserve(t);
    t.querySelectorAll('[data-count]').forEach(count)})},{threshold:.15}):null;
  function count(el){var n=+el.dataset.count,s=performance.now();(function f(t){var p=Math.min((t-s)/1200,1);el.textContent=Math.round(n*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)})(s)}
  window.revealScan=function(){document.querySelectorAll('.rv:not([data-o])').forEach(function(el){el.setAttribute('data-o','1');if(io)io.observe(el);else{el.classList.add('in')}})};
  revealScan();
  /* trạng thái nhận booking theo giờ Việt Nam */
  var sts=document.querySelectorAll('.status');
  function vnHour(){try{return +new Intl.DateTimeFormat('en-GB',{hour:'2-digit',hour12:false,timeZone:'Asia/Ho_Chi_Minh'}).format(new Date())%24}catch(e){return new Date().getHours()}}
  var h=vnHour(),on=h>=C.start&&h<C.end;sts.forEach(function(st){st.className='status'+(on?' on':'');
    st.querySelector('b').textContent=on?'Đang trong giờ nhận booking':'Nhận booking '+C.start+':00 – '+C.end+':00 hằng ngày'});
  var y=document.getElementById('y');if(y)y.textContent=new Date().getFullYear();
})();
