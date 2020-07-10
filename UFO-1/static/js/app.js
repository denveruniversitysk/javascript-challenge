// from data.js
var tableData = data;

// Reference tbody element
var tableBody = document.querySelector("tbody");

// Reference datetime element
var dateTime = document.querySelector("#datetime");
var cityInput = document.querySelector("#ufo-table");

// Reference filter button element
var searchButton = document.querySelector("#filter-btn");

// Add an event listener to search button element
searchButton.addEventListener("click", Searchbuttonclick);

// Render tableData to tbody
function renderData() {
  tableBody.innerHTML = "";
  for (var i = 0; i < tableData.length; i++) {
    var data = tableData[i];
    var rows = Object.keys(data);
    var input = tableBody.insertRow(i);
    for (var j = 0; j < rows.length; j++) {
      var field = rows[j];
      var cell = input.insertCell(j);
      cell.innerText = data[field];
    }
  }
}

function Searchbuttonclick(event) {
  event.preventDefault();

  var filterDate = dateTime.value.trim();
  if (filterDate != "") {
    tableData = data.filter(function (data) {
      var dataDate = data.datetime;
      return dataDate === filterDate;
    });
};
renderData();
  }
function resetData() {
  tableData = data;
  dateTime.value = "";

  renderData();
}

// Render table when index.html loads
renderData();



