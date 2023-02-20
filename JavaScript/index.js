const horaEl = document.getElementById("hora");
const minutosEl = document.getElementById("minutos");
const segundosEl = document.getElementById("segundos");
const ampmEl = document.getElementById("ampm");


function updateReloj(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";
    if (h > 11){
        ampm = "PM";
    }
    if (h > 12){
        h = h - 12;
    }

    h = h<10 ? "0" + h : h;
    m = m<10 ? "0" + m : m;
    s = s<10 ? "0" + s : s;

    horaEl.innerText = h;
    minutosEl.innerText = m;
    segundosEl.innerText = s;
    ampmEl.innerText = ampm;
    // ampmEl, (innerText = ampm);
    setTimeout(()=>{
        updateReloj()
    }, 1000)
}

updateReloj();