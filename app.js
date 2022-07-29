const fiverCounter=document.getElementById("fiverCounter");
const fiverOutput=document.getElementById("fiverOutput");
// const alarm=document.getElementById("alarm");
// const stop_alarm=document.getElementById("stopAlarm");

let count;
fiverCounter.onsubmit=(e)=>{
    e.preventDefault();
    clearInterval(count);
    const form_data=new FormData(e.target);
    const {date,time} = Object.fromEntries(form_data.entries());

    count=setInterval(()=>{

        fiverCountDown(date,time,fiverOutput,count);
},1000);
}
// stop_alarm.onclick=(e)=>{
//   e.preventDefault();
//   alarm.pause();
// }