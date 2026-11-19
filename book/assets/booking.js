(function(){
  var C=window.BOOK||{},f=document.getElementById('bk');if(!f)return;
  var dv=document.getElementById('dichvu'),gm=document.getElementById('game'),gl=document.getElementById('gamelbl');
  C.games.concat(['Khác / không áp dụng']).forEach(function(g){var o=document.createElement('option');o.value=g;o.textContent=g;gm.appendChild(o)});
  var map={caster:'Game Caster – Bình luận viên',mc:'MC – Người dẫn chương trình','hop-tac':'Project Collaboration – Hợp tác dự án ngắn hạn'};
  var q=new URLSearchParams(location.search).get('dichvu');if(q&&map[q])dv.value=map[q];
  function sync(){var cast=dv.value.indexOf('Game Caster')===0;gm.required=cast;gl.querySelector('span').style.display=cast?'':'none'}
  dv.addEventListener('change',sync);sync();
  var d=document.getElementById('ngay');try{d.min=new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Ho_Chi_Minh'}).format(new Date())}catch(e){}
  var err=document.getElementById('err'),ok=document.getElementById('ok'),btn=document.getElementById('send');
  function show(m){err.textContent=m;err.hidden=false;err.scrollIntoView({block:'center',behavior:'smooth'})}
  f.addEventListener('submit',function(e){
    e.preventDefault();err.hidden=true;
    if(f.elements.website.value)return;                       // ô bẫy spam
    if(!f.checkValidity()){f.reportValidity();return}
    var fd=new FormData(f),code='BB-'+Date.now().toString(36).slice(-5).toUpperCase(),b=new URLSearchParams();
    b.set('ma',code);['hoten','dichvu','game','ngay','gio','thoiluong','hinhthuc','sukien','ngansach','lienhe','ghichu'].forEach(function(k){b.set(k,fd.get(k)||'')});
    if(!C.endpoint){show('Form đang ở chế độ thử nên CHƯA gửi đi đâu cả. Chủ trang hãy làm bước kết nối Google Sheet trong HUONG-DAN.md. Tạm thời bạn nhắn trực tiếp qua Zalo '+C.zalo+'.');return}
    btn.disabled=true;btn.textContent='Đang gửi...';
    fetch(C.endpoint,{method:'POST',mode:'no-cors',body:b}).then(function(){
      document.getElementById('code').textContent=code;f.hidden=true;ok.hidden=false;ok.scrollIntoView({block:'center',behavior:'smooth'});
    }).catch(function(){btn.disabled=false;btn.textContent='Gửi yêu cầu';show('Chưa gửi được, bạn thử lại hoặc nhắn Zalo '+C.zalo+' giúp mình nhé.')});
  });
})();
