var requestUrl = 'https://date.nager.at/api/v3/publicholidays/2023/US'

fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        var specificValue = data[0].date;

        console.log('Total Holiday Data \n--------------------------------');
        console.log(data);
        console.log('Specfic Data Selection \n----------------------------');
        console.log(specificValue);
    })

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
