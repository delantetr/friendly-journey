// // Dom Navigation-------------------------------------------------------------
var holidayButton = document.querySelector('#holiday-button');
var cityButton = document.querySelector('#city-button');
var stateButton = document.querySelector('#state-button');
var venueButton = document.querySelector('#venue-button');
var holidayList = document.getElementById("holiday-list");
var tableWindow = document.querySelector('#holiday-table');
var tableBody = document.querySelector('#h-table-body');
var holidayDropdown = document.querySelector('#holiday-dropdown');



// // GLobal Variables-----------------------------------------------------------
var options;
var eventArray = []

// // API Request Variables----------------------------------------------------------------
var newYearsRequest = 'https://api.seatgeek.com/2/events?datetime_utc=2023-01-02&client_id=OTY5OTA0MnwxNjg2Njc3NjUxLjQ2ODczMDc'
var mlkRequest = 'https://api.seatgeek.com/2/events?datetime_utc=2023-01-16&client_id=OTY5OTA0MnwxNjg2Njc3NjUxLjQ2ODczMDc'
var presidentsDayRequest = 'https://api.seatgeek.com/2/events?datetime_utc=2023-02-20&client_id=OTY5OTA0MnwxNjg2Njc3NjUxLjQ2ODczMDc'
var goodFridayRequest = 'https://api.seatgeek.com/2/events?datetime_utc=2023-04-07&client_id=OTY5OTA0MnwxNjg2Njc3NjUxLjQ2ODczMDc'
var goodFridayTXRequest = 'https://api.seatgeek.com/2/events?datetime_utc=2023-04-07&venue.state=TX&client_id=OTY5OTA0MnwxNjg2Njc3NjUxLjQ2ODczMDc'
var memorialDayRequest = 'https://api.seatgeek.com/2/events?datetime_utc=2023-05-29&client_id=OTY5OTA0MnwxNjg2Njc3NjUxLjQ2ODczMDc'
var juneteenthRequest = 'https://api.seatgeek.com/2/events?datetime_utc.gte=2023-06-19&client_id=OTY5OTA0MnwxNjg2Njc3NjUxLjQ2ODczMDc'
var independenceDayRequest = 'https://api.seatgeek.com/2/events?datetime_utc=2023-07-04&client_id=OTY5OTA0MnwxNjg2Njc3NjUxLjQ2ODczMDc'
var laborDayRequest = 'https://api.seatgeek.com/2/events?datetime_utc=2023-09-04&client_id=OTY5OTA0MnwxNjg2Njc3NjUxLjQ2ODczMDc'
var columbusDayRequest = 'https://api.seatgeek.com/2/events?datetime_utc=2023-10-09&client_id=OTY5OTA0MnwxNjg2Njc3NjUxLjQ2ODczMDc'
var veteransDayRequest = 'https://api.seatgeek.com/2/events?datetime_utc=2023-11-10&client_id=OTY5OTA0MnwxNjg2Njc3NjUxLjQ2ODczMDc'
var thanksgivingRequest = 'https://api.seatgeek.com/2/events?datetime_utc=2023-11-23&client_id=OTY5OTA0MnwxNjg2Njc3NjUxLjQ2ODczMDc'
var christmasRequest = 'https://api.seatgeek.com/2/events?datetime_utc=2023-12-25&client_id=OTY5OTA0MnwxNjg2Njc3NjUxLjQ2ODczMDc'



// // Holiday Selector----------------------------------------------------------
holidayButton.addEventListener('click', populateHolidays);


    function populateHolidays(){
    // console.log('Get Holidays \n----------------------------------------------------------------------------------------');
    var holidayRequest = 'https://date.nager.at/api/v3/publicholidays/2023/US';
    

    fetch(holidayRequest)
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
        // console.log('Total Holiday Data');
        // console.log(data);
        
        //   console.log('Holiday Names \n---------------------------------------------------');
        for (var i = 0; i < data.length; i++) {
            // console.log(data[i].localName);

            var holiday = document.createElement('li');
            holiday.textContent = data[i].localName;
            holiday.setAttribute('id', data[i].localName.toLowerCase().replace(/\s+/g, '-').replace(/,/g, '').replace(/'/g, '').replace(/\./g, ''));
            holidayList.appendChild(holiday);
            // console.log(holiday);

            holiday.addEventListener('click', printEvents);
        }
        });
        
    }

    
// }
// TESTS TO MAKE SURE ELEMENT IS NOT NULL (NOT NEEDED FOR FUNCTIONALITY)
// if (tableBody !== null) {
//   tableBody.textContent = 'Some text';
// } else {
//   console.error('Error: Element not found');
// }



    function printEvents(event) {
        var holidayChoice = event.target;
        holidayChoice.setAttribute('data-state', 'hidden');
        var state = holidayChoice.getAttribute('data-state');
        var holiday = holidayChoice.getAttribute('id');
        // console.log(holiday);

        
        if (state === 'hidden' && holiday === 'new-years') {
            fetchNewYearsEvents();
        } else if (state === 'hidden' && holiday === 'martin-luther-king-jr-day') {
                fetchMLKEvents();
        } else if (state === 'hidden' && holiday === 'presidents-day') {
                fetchPresidentsDayEvents(); 
        } else if (state === 'hidden' && holiday === 'good-friday') {
                fetchGoodFridayEvents(); 
        } else if (state === 'hidden' && holiday === 'memorial-day') {
                fetchMemorialDayEvents();
        } else if (state === 'hidden' && holiday === 'juneteenth') {
                fetchJuneteenthEvents();
        } else if (state === 'hidden' && holiday === 'independence-day') {
                fetchIndependenceDayEvents();
        } else if (state === 'hidden' && holiday === 'labor-day') {
                fetchLaborDayEvents();
        } else if (state === 'hidden' && holiday === 'columbus-day') {
                fetchColumbusDayEvents();
        } else if (state === 'hidden' && holiday === 'veterans-day') {
                fetchVeteransDayEvents();
        } else if (state === 'hidden' && holiday === 'thanksgiving-day') {
                fetchThanksgivingEvents();
        } else if (state === 'hidden' && holiday === 'christmas-day') {
                fetchChristmasEvents();
            } 
    }


        function fetchNewYearsEvents () {
            fetch(newYearsRequest)
                .then(function (response) {
                    return response.json();
                    })
                .then(function (data) {
                    // tableBody.innerHTML = '';
                    // console.log('Events List \n---------------------------');
                    // console.log(data);
                    // console.log(data.events[0].title)
                    for(var i = 0; i < data.events.length; i++) {
                        var createTableRow = document.createElement('tr');
                        var tableData = document.createElement('td');
                        var link = document.createElement('a');

                        link.textContent = data.events[i].title;
                        // console.log('Event Title');
                        // console.log(data.events[i].title);

                        tableData.appendChild(link);
                        createTableRow.appendChild(tableData);
                        tableBody.appendChild(createTableRow);
                    }
                })
        }
        function fetchMLKEvents () {
                fetch(mlkRequest)
                    .then(function (response) {
                        return response.json();
                        })
                    .then(function (data) {
                        tableBody.innerHTML = '';
                        // console.log('Events List \n---------------------------');
                        // console.log(data);
                        // console.log(data.events[0].title)
                        for(var i = 0; i < data.events.length; i++) {
                            var createTableRow = document.createElement('tr');
                            var tableData = document.createElement('td');
                            var link = document.createElement('a');
        
                            link.textContent = data.events[i].title;
                            // console.log('Event Title');
                            // console.log(data.events[i].title);
        
                            tableData.appendChild(link);
                            createTableRow.appendChild(tableData);
                            tableBody.appendChild(createTableRow);
                        }
                    })
        }
        function fetchPresidentsDayEvents () {
                fetch(presidentsDayRequest)
                    .then(function (response) {
                        return response.json();
                        })
                    .then(function (data) {
                        tableBody.innerHTML = '';
                        // console.log('Events List \n---------------------------');
                        // console.log(data);
                        // console.log(data.events[0].title)
                        for(var i = 0; i < data.events.length; i++) {
                            var createTableRow = document.createElement('tr');
                            var tableData = document.createElement('td');
                            var link = document.createElement('a');
        
                            link.textContent = data.events[i].title;
                            // console.log('Event Title');
                            // console.log(data.events[i].title);
        
                            tableData.appendChild(link);
                            createTableRow.appendChild(tableData);
                            tableBody.appendChild(createTableRow);
                        }
                    })
        }
        function fetchGoodFridayEvents () {
                fetch(goodFridayRequest)
                    .then(function (response) {
                        return response.json();
                        })
                    .then(function (data) {
                        tableBody.innerHTML = '';
                        // console.log('Events List \n---------------------------');
                        // console.log(data);
                        // console.log(data.events[0].title)
                        for(var i = 0; i < data.events.length; i++) {
                            var createTableRow = document.createElement('tr');
                            var tableData = document.createElement('td');
                            var link = document.createElement('a');
        
                            link.textContent = data.events[i].title;
                            // console.log('Event Title');
                            // console.log(data.events[i].title);
        
                            tableData.appendChild(link);
                            createTableRow.appendChild(tableData);
                            tableBody.appendChild(createTableRow);
                        }
                    })
        }
        function fetchMemorialDayEvents () {
                fetch(memorialDayRequest)
                    .then(function (response) {
                        return response.json();
                        })
                    .then(function (data) {
                        tableBody.innerHTML = '';
                        // console.log('Events List \n---------------------------');
                        // console.log(data);
                        // console.log(data.events[0].title)
                        for(var i = 0; i < data.events.length; i++) {
                            var createTableRow = document.createElement('tr');
                            var tableData = document.createElement('td');
                            var link = document.createElement('a');
        
                            link.textContent = data.events[i].title;
                            // console.log('Event Title');
                            // console.log(data.events[i].title);
        
                            tableData.appendChild(link);
                            createTableRow.appendChild(tableData);
                            tableBody.appendChild(createTableRow);
                        }
                    })
        }
        function fetchJuneteenthEvents () {
                fetch(juneteenthRequest)
                    .then(function (response) {
                        return response.json();
                        })
                    .then(function (data) {
                        tableBody.innerHTML = '';
                        console.log('Events List \n---------------------------');
                        console.log(data);
                        // console.log(data.events[0].title)
                        for(var i = 0; i < data.events.length; i++) {
                            var createTableRow = document.createElement('tr');
                            var tableData = document.createElement('td');
                            var name = document.createElement('a');
                            var venue = document.createElement('a');
                            var city = document.createElement('a');
                            var time = document.createElement('a');
        
                            name.textContent = data.events[i].title;
                            venue.textContent = data.events[i].venue.name;
                            city.textContent = data.events[i].venue.city;
                            time.textContent = data.events[i].datetime_local;
                            // console.log('Event Title');
                            // console.log(data.events[i].title);
        
                            tableData.appendChild(name);
                            tableData.appendChild(venue);
                            tableData.appendChild(city);
                            tableData.appendChild(time);
                            createTableRow.appendChild(tableData);
                            tableBody.appendChild(createTableRow);
                        }
                    })
        }
        function fetchIndependenceDayEvents () {
                fetch(independenceDayRequest)
                    .then(function (response) {
                        return response.json();
                        })
                    .then(function (data) {
                        tableBody.innerHTML = '';
                        // console.log('Events List \n---------------------------');
                        // console.log(data);
                        // console.log(data.events[0].title)
                        for(var i = 0; i < data.events.length; i++) {
                            var createTableRow = document.createElement('tr');
                            var tableData = document.createElement('td');
                            var link = document.createElement('a');
        
                            link.textContent = data.events[i].title;
                            // console.log('Event Title');
                            // console.log(data.events[i].title);
        
                            tableData.appendChild(link);
                            createTableRow.appendChild(tableData);
                            tableBody.appendChild(createTableRow);
                        }
                    })
        }
        function fetchLaborDayEvents () {
                fetch(laborDayRequest)
                    .then(function (response) {
                        return response.json();
                        })
                    .then(function (data) {
                        tableBody.innerHTML = '';
                        // console.log('Events List \n---------------------------');
                        // console.log(data);
                        // console.log(data.events[0].title)
                        for(var i = 0; i < data.events.length; i++) {
                            var createTableRow = document.createElement('tr');
                            var tableData = document.createElement('td');
                            var link = document.createElement('a');
        
                            link.textContent = data.events[i].title;
                            // console.log('Event Title');
                            // console.log(data.events[i].title);
        
                            tableData.appendChild(link);
                            createTableRow.appendChild(tableData);
                            tableBody.appendChild(createTableRow);
                        }
                    })
        }
        function fetchColumbusDayEvents () {
                fetch(columbusDayRequest)
                    .then(function (response) {
                        return response.json();
                        })
                    .then(function (data) {
                        tableBody.innerHTML = '';
                        // console.log('Events List \n---------------------------');
                        // console.log(data);
                        // console.log(data.events[0].title)
                        for(var i = 0; i < data.events.length; i++) {
                            var createTableRow = document.createElement('tr');
                            var tableData = document.createElement('td');
                            var link = document.createElement('a');
        
                            link.textContent = data.events[i].title;
                            // console.log('Event Title');
                            // console.log(data.events[i].title);
        
                            tableData.appendChild(link);
                            createTableRow.appendChild(tableData);
                            tableBody.appendChild(createTableRow);
                        }
                    })
        }
        function fetchVeteransDayEvents () {
                fetch(veteransDayRequest)
                    .then(function (response) {
                        return response.json();
                        })
                    .then(function (data) {
                        tableBody.innerHTML = '';
                        // console.log('Events List \n---------------------------');
                        // console.log(data);
                        // console.log(data.events[0].title)
                        for(var i = 0; i < data.events.length; i++) {
                            var createTableRow = document.createElement('tr');
                            var tableData = document.createElement('td');
                            var link = document.createElement('a');
        
                            link.textContent = data.events[i].title;
                            // console.log('Event Title');
                            // console.log(data.events[i].title);
        
                            tableData.appendChild(link);
                            createTableRow.appendChild(tableData);
                            tableBody.appendChild(createTableRow);
                        }
                    })
        }
        function fetchThanksgivingEvents () {
                fetch(thanksgivingRequest)
                    .then(function (response) {
                        return response.json();
                        })
                    .then(function (data) {
                        tableBody.innerHTML = '';
                        // console.log('Events List \n---------------------------');
                        // console.log(data);
                        // console.log(data.events[0].title)
                        for(var i = 0; i < data.events.length; i++) {
                            var createTableRow = document.createElement('tr');
                            var tableData = document.createElement('td');
                            var link = document.createElement('a');
        
                            link.textContent = data.events[i].title;
                            // console.log('Event Title');
                            // console.log(data.events[i].title);
        
                            tableData.appendChild(link);
                            createTableRow.appendChild(tableData);
                            tableBody.appendChild(createTableRow);
                        }
                    })
        }
        function fetchChristmasEvents () {
                fetch(christmasRequest)
                    .then(function (response) {
                        return response.json();
                        })
                    .then(function (data) {
                        tableBody.innerHTML = '';
                        // console.log('Events List \n---------------------------');
                        // console.log(data);
                        // console.log(data.events[0].title)
                        for(var i = 0; i < data.events.length; i++) {
                            var createTableRow = document.createElement('tr');
                            var tableData = document.createElement('td');
                            var link = document.createElement('a');
        
                            link.textContent = data.events[i].title;
                            // console.log('Event Title');
                            // console.log(data.events[i].title);
        
                            tableData.appendChild(link);
                            createTableRow.appendChild(tableData);
                            tableBody.appendChild(createTableRow);
                        }
                    })
        }