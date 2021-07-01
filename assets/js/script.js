var apiKey = "efb4547d0196c6d11a2e7fdc94d272bc";
var today = moment().format('L');
var searchHistoryList = [];

function currentCondition(city) {

    var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
};
