// Dom Navigation-------------------------------------------------------------
var holidayButton = document.querySelector('#holiday-button');
var cityButton = document.querySelector('#city-button');
var stateButton = document.querySelector('#state-button');
var venueButton = document.querySelector('#venue-button');
var holidayList = document.getElementById("holiday-list");

// GLobal Variables-----------------------------------------------------------




// Holiday Selector----------------------------------------------------------
// holidayButton.addEventListener('click', onHolidayButtonClick);


function onHolidayButtonClick() {
  console.log('Click Confirmed \n-----------------------------------------------');
}

function populateHolidays(){
  console.log('Get holidays');
  var holidayRequest = 'https://date.nager.at/api/v3/publicholidays/2023/US';

  fetch(holidayRequest)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
    //   console.log('Total Holiday Data \n--------------------------------');
      console.log(data);
      
    //   console.log('Holiday Names \n---------------------------------------------------');
      for (var i = 0; i < data.length; i++) {
        // console.log(data[i].localName);

        var holiday = document.createElement('li');
        holiday.textContent = data[i].localName;
        holidayList.appendChild(holiday);
      }
    });
}

// City Selector--------------------------------------------------------------
cityButton.addEventListener('click', citySearch);

function citySearch() {
    console.log('Click Confirmed \n-----------------------------------------');
    var cityRequest = 'https://api.seatgeek.com/2/events?datetime_utc=2023-11-25&venue.city=charlotte&client_id=OTY5OTA0MnwxNjg2Njc3NjUxLjQ2ODczMDc'
}
// State Selector--------------------------------------------------------------
stateButton.addEventListener('click', stateSearch);

function stateSearch() {
    console.log('Click Confirmed \n-----------------------------------------');
    var stateRequest = 'https://api.seatgeek.com/2/events?datetime_utc=2023-11-25&venue.city=charlotte&client_id=OTY5OTA0MnwxNjg2Njc3NjUxLjQ2ODczMDc'
}
// Venue Selector--------------------------------------------------------------
venueButton.addEventListener('click', venueSearch);

function venueSearch() {
    console.log('Click Confirmed \n-----------------------------------------');
    var requestUrl = 'https://api.seatgeek.com/2/events?datetime_utc=2023-11-25&venue.city=charlotte&client_id=OTY5OTA0MnwxNjg2Njc3NjUxLjQ2ODczMDc'
}



//When this script gets loaded -------------------------------------------------------------------
populateHolidays();