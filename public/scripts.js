(function() {
  var btn = document.querySelector("#refresh")
var span = document.querySelector("#price")
btn.addEventListener('click', function () {
  var xhr = new XMLHttpRequest()
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var data = JSON.parse(xhr.responseText)
      var rate = data.bpi.USD.rate
      span.innerText = rate;
    }
  }
  xhr.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json")
  xhr.send()
})
})()

