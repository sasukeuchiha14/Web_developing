var NumberOfCards = 0;

function addVideo() {
    NumberOfCards++;

    var time = '12:34';
    
    text = '<div class="card">' +
                `<div class="number">${NumberOfCards}</div>` +
                '<div class="img">' +
                    `<img src="https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ">` +
                    `<div class="time">${time}</div>` +
                '</div>' +
                '<div class="about">' +
                    `<p class="title">${title}</p>` +
                    `<p class="about">${channelName} • ${views} views • ${monthsOld} months ago</p>` +
                    '<p>&nbsp;</p>' +
                '</div>' +
            '</div>'
    ;

    if (document.getElementById('cards').innerHTML == '') {
        document.getElementById('cards').innerHTML = text;
    }
    else {
        document.getElementById('cards').innerHTML += '<br>' + text;
    }
}