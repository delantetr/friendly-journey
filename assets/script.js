// Dom Navigation-------------------------------------------------------------
var holidayButton = document.querySelector('#holiday-button');
var cityButton = document.querySelector('#city-button');
var stateButton = document.querySelector('#state-button');
var venueButton = document.querySelector('#venue-button');
var tableBody = document.querySelector('#holiday-table');



// GLobal Variables-----------------------------------------------------------
var options;
var holidayList;
var eventArray = []

// Holiday Selector----------------------------------------------------------
holidayButton.addEventListener('click', selectHoliday);

function selectHoliday() {
//   console.log('Click Confirmed \n-----------------------------------------------');
  var holidayRequest = 'https://date.nager.at/api/v3/publicholidays/2023/US';

  fetch(holidayRequest)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
    //   console.log('Total Holiday Data \n--------------------------------');
    //   console.log(data);

    //   console.log('Holiday Names \n---------------------------------------------------');
      for (var i = 0; i < data.length; i++) {
        // console.log(data[i].localName);
        options = data[i].localName;

        var holidayList = document.createElement('ul');
        holidayList.textContent = options;
        holidayButton.appendChild(holidayList);
      }
    })
}


holidayButton.addEventListener('click',holidayChoice);

function holidayChoice(event) {
    console.log(event.target);

    var eventRequest = 'https://api.seatgeek.com/2/events?datetime_utc.lte=2023-11-25&client_id=OTY5OTA0MnwxNjg2Njc3NjUxLjQ2ODczMDc'
    
    fetch(eventRequest)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                // Creating elements, tablerow, tabledata, and anchor
                var createTableRow = document.createElement('tr');
                var tableData = document.createElement('td');

                tableData.textContent = data[0].title;
                console.log(tableData);

                createTableRow.appendChild(tableData);
                tableBody.appendChild(createTableRow);
            }
            // eventArray.push(eventRequest);
            // data.json.stringify(eventArray)
            
        })
        
    
    console.log(eventArray);
    
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
