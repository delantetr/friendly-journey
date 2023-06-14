// Dom Navigation
var holidayWindow = document.querySelector('#holiday-window');

holidayWindow.addEventListener('click', handleMouseEnter);

function handleMouseEnter(event) {
    console.log('Mouse entered the element');
    var holidayRequest = 'https://date.nager.at/api/v3/publicholidays/2023/US'

  fetch(holidayRequest)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
          var specificValue = data[0].date;
  
          console.log('Total Holiday Data \n--------------------------------');
          console.log(data);
          // console.log('Specfic Data Selection \n----------------------------');
          // console.log(specificValue);
          var holidayList = document.createElement('ul');
         holidayList.textContent = specificValue;
        holidayWindow.appendChild(holidayList);
      })

      
}

function handleMouseLeave(event) {
    console.log('Mouse left the element');
  }



  


var requestUrl = 'https://api.seatgeek.com/2/events?datetime_utc=2023-11-25&venue.city=charlotte&client_id=OTY5OTA0MnwxNjg2Njc3NjUxLjQ2ODczMDc'

fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        var specificValue = data.events;

        console.log('Total Event Data \n-----------------------------------');
        console.log(data);
        console.log('Specfic Data selection \n------------------------------');
        console.log(specificValue);
    })
