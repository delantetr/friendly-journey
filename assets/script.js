// Dom Navigation-------------------------------------------------------------
var holidayButton = document.querySelector('#holiday-button');
var cityButton = document.querySelector('#city-button');
var stateButton = document.querySelector('#state-button');
var venueButton = document.querySelector('#venue-button');
var holidayList = document.getElementById("holiday-list");
var tableWindow = document.querySelector('#holiday-table');
var tableBody = document.querySelector('#h-table-body');
var holidayDropdown = document.querySelector('#holiday-dropdown');



// GLobal Variables-----------------------------------------------------------
var options;
var holidayList;
var eventArray = []

// API Request Variables----------------------------------------------------------------
var newYears = 'https://api.seatgeek.com/2/events?datetime_utc=2023-01-01&client_id=OTY5OTA0MnwxNjg2Njc3NjUxLjQ2ODczMDc'
var mlk = 'https://api.seatgeek.com/2/events?datetime_utc=2023-01-16&client_id=OTY5OTA0MnwxNjg2Njc3NjUxLjQ2ODczMDc'
var presidentsDay = 'https://api.seatgeek.com/2/events?datetime_utc=2023-02-20&client_id=OTY5OTA0MnwxNjg2Njc3NjUxLjQ2ODczMDc'
var goodFriday = 'https://api.seatgeek.com/2/events?datetime_utc=2023-04-07&client_id=OTY5OTA0MnwxNjg2Njc3NjUxLjQ2ODczMDc'
var goodFridayTX = 'https://api.seatgeek.com/2/events?datetime_utc=2023-04-07&venue.state=TX&client_id=OTY5OTA0MnwxNjg2Njc3NjUxLjQ2ODczMDc'
var memorialDay = 'https://api.seatgeek.com/2/events?datetime_utc=2023-05-29&client_id=OTY5OTA0MnwxNjg2Njc3NjUxLjQ2ODczMDc'
var juneteenth = 'https://api.seatgeek.com/2/events?datetime_utc=2023-06-19&client_id=OTY5OTA0MnwxNjg2Njc3NjUxLjQ2ODczMDc'
var independenceDay = 'https://api.seatgeek.com/2/events?datetime_utc=2023-07-04&client_id=OTY5OTA0MnwxNjg2Njc3NjUxLjQ2ODczMDc'
var laborDay = 'https://api.seatgeek.com/2/events?datetime_utc=2023-09-04&client_id=OTY5OTA0MnwxNjg2Njc3NjUxLjQ2ODczMDc'
var columbusDay = 'https://api.seatgeek.com/2/events?datetime_utc=2023-10-09&client_id=OTY5OTA0MnwxNjg2Njc3NjUxLjQ2ODczMDc'
var veteransDay = 'https://api.seatgeek.com/2/events?datetime_utc=2023-11-10&client_id=OTY5OTA0MnwxNjg2Njc3NjUxLjQ2ODczMDc'
var thanksgiving = 'https://api.seatgeek.com/2/events?datetime_utc=2023-11-23&client_id=OTY5OTA0MnwxNjg2Njc3NjUxLjQ2ODczMDc'
var christmas = 'https://api.seatgeek.com/2/events?datetime_utc=2023-12-25&client_id=OTY5OTA0MnwxNjg2Njc3NjUxLjQ2ODczMDc'



// Holiday Selector----------------------------------------------------------
// holidayButton.addEventListener('click', onHolidayButtonClick);


function onHolidayButtonClick() {
  console.log('Click Confirmed \n-----------------------------------------------');
}

function populateHolidays(){
  console.log('Get Holidays \n----------------------------------------------------------------------------------------');
  var holidayRequest = 'https://date.nager.at/api/v3/publicholidays/2023/US';

  fetch(holidayRequest)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log('Total Holiday Data');
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
// TESTS TO MAKE SURE ELEMENT IS NOT NULL (NOT NEEDED FOR FUNCTIONALITY)
// if (tableBody !== null) {
//   tableBody.textContent = 'Some text';
// } else {
//   console.error('Error: Element not found');
// }


holidayList.addEventListener('click', holidayChoice) 



    function holidayChoice(event) {
        console.log('Get Events \n--------------------------------------------------------------------------------------');
        console.log('Holiday Choice Confirm')
        console.log(event.target);
        console.log('Total Event Data');
        // var eventRequest = 'https://api.seatgeek.com/2/events?datetime_utc=2023-06-19&client_id=OTY5OTA0MnwxNjg2Njc3NjUxLjQ2ODczMDc'
        fetch()
            .then(function (response) {
                return response.json();
                })
            .then(function (data) {
                // console.log('Events List \n---------------------------');
                console.log(data);
                // console.log(data.events[0].title)
                for(var i = 0; i < data.events.length; i++) {
                    var createTableRow = document.createElement('tr');
                    var tableData = document.createElement('td');
                    var link = document.createElement('a');

                    link.textContent = data.events[i].title;
                    console.log('Event Title');
                    // console.log(data[i].title);

                    tableData.appendChild(link);
                    createTableRow.appendChild(tableData);
                    tableBody.appendChild(createTableRow);
                }
            })
    }       

//     var eventRequest = 'https://api.seatgeek.com/2/events?datetime_utc.lte=2023-11-25&client_id=OTY5OTA0MnwxNjg2Njc3NjUxLjQ2ODczMDc'
    
//     fetch(eventRequest)
//         
//         })
//             for (var i = 0; i < data.length; i++) {
//                 // Creating elements, tablerow, tabledata, and anchor
//                 var createTableRow = document.createElement('tr');
//                 var tableData = document.createElement('td');

//                 tableData.textContent = data[0].title;
//                 console.log(tableData);

//                 createTableRow.appendChild(tableData);
//                 tableBody.appendChild(createTableRow);
//             }
//             // eventArray.push(eventRequest);
//             // data.json.stringify(eventArray)
            
//         })
        
    
//     console.log(eventArray);
    
// }





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




//When this script gets loaded -------------------------------------------------------------------
populateHolidays();
