(function(){
  var D=window.BICOW||{xe:[],yeuThich:[],phone:''};
  var CAR='<svg viewBox="0 0 120 50" aria-hidden="true"><path d="M6 36c0-5 3-7 9-8l16-9c5-3 11-4 18-4h22c8 0 14 3 19 8l9 5c8 1 13 3 13 8v4H6z"/><circle cx="32" cy="38" r="8" fill="#0e0e12"/><circle cx="92" cy="38" r="8" fill="#0e0e12"/></svg>';
  function el(t,c,x){var e=document.createElement(t);if(c)e.className=c;if(x!=null)e.textContent=x;return e}
  function norm(s){return String(s).normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d').toLowerCase()}
  function src(a){return /^(https?:)?\/\//.test(a)||a.charAt(0)==='/'?a:'/assets/cars/'+a}
  function fig(c){var f=el('figure');if(c.anh){var i=new Image();i.src=src(c.anh);i.alt=c.ten+' – '+c.hang;i.loading='lazy';f.appendChild(i)}else f.innerHTML=CAR;return f}
  function card(c,i,fav){
    var a=el('article','card rv'+(fav?' fav':''));a.style.setProperty('--d',(i%4)*.09+'s');a.appendChild(fig(c));
    var d=el('div');d.appendChild(el('span','tag',c.hang+' · 1:64'));d.appendChild(el('h3','',c.ten));
    if(!fav){d.appendChild(el('span','badge'+(c.ban?' sale':''),c.ban?'Có bán':'Sưu tầm riêng'));
      if(c.ban){var b=el('button','ask','Trao đổi với mình qua Zalo');b.dataset.phone=D.phone;d.appendChild(b)}}
    a.appendChild(d);return a}
  var fg=document.getElementById('fav-grid');
  if(fg)D.yeuThich.forEach(function(c,i){fg.appendChild(card(c,i,true))});
  var grid=document.getElementById('car-grid'),chips=document.getElementById('chips'),q=document.getElementById('q'),cnt=document.getElementById('count'),empty=document.getElementById('empty');
  if(!grid)return;
  var hang='',brands=[];D.xe.forEach(function(c){if(brands.indexOf(c.hang)<0)brands.push(c.hang)});
  function chip(label,val){var b=el('button','chip',label);b.type='button';b.dataset.v=val;b.setAttribute('aria-pressed',val===hang?'true':'false');chips.appendChild(b)}
  function drawChips(){chips.innerHTML='';chip('Tất cả ('+D.xe.length+')','');brands.forEach(function(h){
    chip(h+' ('+D.xe.filter(function(c){return c.hang===h}).length+')',h)})}
  function render(){
    var k=norm(q.value.trim());
    var list=D.xe.filter(function(c){return (!hang||c.hang===hang)&&(!k||norm(c.ten+' '+c.hang).indexOf(k)>=0)});
    grid.innerHTML='';list.forEach(function(c,i){grid.appendChild(card(c,i,false))});
    cnt.textContent='Đang hiện '+list.length+' / '+D.xe.length+' xe';empty.hidden=list.length>0;
    if(window.revealScan)revealScan()}
  chips.addEventListener('click',function(e){var b=e.target.closest('.chip');if(!b)return;hang=b.dataset.v;drawChips();render()});
  q.addEventListener('input',render);drawChips();render();
})();
