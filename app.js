// 主题切换 + 自动年份，全站共用
(function(){
  var saved = localStorage.getItem('theme');
  if(saved) document.documentElement.setAttribute('data-theme', saved);
  document.addEventListener('click', function(e){
    var btn = e.target.closest('.theme-btn');
    if(!btn) return;
    var cur = document.documentElement.getAttribute('data-theme');
    var next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
  var yr = document.getElementById('yr');
  if(yr) yr.textContent = new Date().getFullYear();
})();
