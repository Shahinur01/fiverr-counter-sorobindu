const fiverCountDown=(date,time,fiverOutput,interval=null)=>{
    let start_time=Date.now();
    let end_time=new Date(date + ' ' + time);
    let order_time=Math.floor(Math.abs(end_time.getTime() - start_time));
    // get value form time
    let total_seconds=Math.floor(order_time / 1000);
    let total_minutes=Math.floor(total_seconds /60);
    let total_hours=Math.floor(total_minutes / 60);
    let total_day=Math.floor(total_hours / 24);
    
    
    let hours = total_hours -(total_day * 24);
    let minutes=total_minutes -(total_day * 24 *60 ) -(hours * 60);
    let seconds = total_seconds-(total_day * 24 * 60 *60 )-(hours * 60)-(minutes * 60);
    
    if (total_seconds <=0) {
        clearInterval(interval);
    }
    
    // console.log();
    fiverOutput.innerHTML=`<h1 class="btn btn-primary">${total_day} days- ${hours} hours ${minutes} minutes ${seconds} seconds</h1>`;
}