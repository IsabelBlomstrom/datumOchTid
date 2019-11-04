window.onload = setUp
function setUp() {
    weekday()
    month()
    setInterval(time, 1000)
}


function weekday() {
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Söndag";
    break;
  case 1:
    day = "Måndag";
    break;
  case 2:
    day = "Tisdag";
    break;
  case 3:
    day = "Onsdag";
    break;
  case 4:
    day = "Torsdag";
    break;
  case 5:
    day = "Fredag";
    break;
  case 6:
    day = "Lördag";
    break;
  default:
    day = "Okänd dag";
}
document.getElementById("weekday").innerText = day;
}


function month() {
    let month;
    switch (new Date().getMonth()) {
      case 0:
        month = "Januari";
        break;
      case 1:
        month = "Februari";
        break;
      case 2:
        month = "Mars";
        break;
      case 3:
        month = "April";
        break;
      case 4:
        month = "Maj";
        break;
      case 5:
        month = "Juni";
        break;
      case 6:
        month = "Juli";
        break;
        case 7:
        month = "Augusti";
        break;
        case 8:
        month = "September";
        break;
        case 9:
        month = "Oktober";
        break;
        case 10:
        month = "November";
        break;
        case 11:
        month = "December";
        break;
      default:
        month = "Okänd månad";
    }
    document.getElementById("month").innerText = month;
    
    }

    function time() {
        let currentTime = new Date(); 
        let time = currentTime.getHours() + ":"  
                + currentTime.getMinutes() + ":" 
                + currentTime.getSeconds();



               /* if(time.toString().length == 1) {
                    time = '0'+time;
               }
               if(time.toString().length == 1) {
                    time = '0'+time;
               }
               if(time.toString().length == 1) {
                    time = '0'+time;
               }   */

        document.getElementById("time").innerText = time;
    }