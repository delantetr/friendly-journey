// Dom Navigation-------------------------------------------------------------
var holidayWindow = document.querySelector('#holiday-window');
var cityWindow = document.querySelector('#city-window');
var stateWindow = document.querySelector('#state-window');
var venueWindow = document.querySelector('#venue-window');

// GLobal Variables-----------------------------------------------------------


// Holiday Selector----------------------------------------------------------
holidayWindow.addEventListener('click', handleMouseEnter);

function handleMouseEnter() {
  console.log('Click Confirmed \n-----------------------------------------------');
  var holidayRequest = 'https://date.nager.at/api/v3/publicholidays/2023/US';

  fetch(holidayRequest)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var specificValue = data[0].localName;

      console.log('Total Holiday Data \n--------------------------------');
      console.log(data);
      console.log('Specific Data Selection \n----------------------------');
      console.log(specificValue);
      
      var holidayList = document.createElement('ul');
      holidayList.textContent = specificValue;
      holidayWindow.appendChild(holidayList);
    });
}





  


// var requestUrl = 'https://api.seatgeek.com/2/events?datetime_utc=2023-11-25&venue.city=charlotte&client_id=OTY5OTA0MnwxNjg2Njc3NjUxLjQ2ODczMDc'

// fetch(requestUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//         var specificValue = data.events;

//         console.log('Total Event Data \n-----------------------------------');
//         console.log(data);
//         console.log('Specfic Data selection \n------------------------------');
//         console.log(specificValue);
//     })
