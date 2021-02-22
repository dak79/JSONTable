let data;
// Event Listener
addEventListener('load', init);

function init() {
  let create = document.querySelector('#btnCreate');
  create.addEventListener('click', createTable);

}




function createTable() {
  let queryURL = "https://gist.githubusercontent.com/heiswayi/7fde241975ed8a80535a/raw/ff1caaeaf62bd6740ab7cafcd61f1215de173379/datatables-data.json";

  let xhr = new XMLHttpRequest();
  xhr.open('GET', queryURL, true);

  xhr.onload = function(evt) {
    let jsonResponse = this.response;
    data = JSON.parse(jsonResponse);
    console.log(data.data[0][1]);
    displayTable(data);
  };

  xhr.onerror = function(err) {
    console.log("Error: " + err);
  };
  xhr.send();
}

function displayTable(data) {
  let div = document.querySelector("#myTable");
  div.innerHTML = "";

  let table = document.createElement("table");
  data.data.forEach(function(current) {
    let row = table.insertRow();
    let name = row.insertCell();
    name.innerHTML = current[0];
    let position = row.insertCell();
    position.innerHTML = current[1];
    let city = row.insertCell();
    city.innerHTML = current[2];

    let age = row.insertCell();
    age.innerHTML = current[3];
    let start = row.insertCell();
    start.innerHTML = current[4];
    let salary = row.insertCell();
    salary.innerHTML = current[5];
  });
  div.appendChild(table);

}
