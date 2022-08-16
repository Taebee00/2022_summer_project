let cp_cnt=document.querySelector('#cnt')

let cnt = 1;
setInterval(()=>{
    cnt=cnt+1;
    cp_cnt.textContent=cnt;
},1000)