var requestUrl = 'https://date.nager.at/api/v3/publicholidays/2023/US'

fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
    })

var requestUrl = 'https://api.seatgeek.com/2/events?datetime_utc=2023-11-25&venue.city=charlotte&client_id=OTY5OTA0MnwxNjg2Njc3NjUxLjQ2ODczMDc'

fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
    })
