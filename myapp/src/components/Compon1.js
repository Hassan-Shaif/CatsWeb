function Compon1(){
    const data = new Date()
    const hours = data.getHours()
    const minutes = data.getMinutes()
    const seconds = data.getSeconds()
    var msg
    console.log(hours)
    if(hours < 12){
        msg = 'Morning !'
    }else if(hours >= 12 && hours < 18){
        msg =  "Afternoon !"
    }else{
        msg = 'Night!'
    }
  return(
    <h6 className="greeting">{hours}:{minutes}:{seconds}</h6>
  );
}

export default Compon1;