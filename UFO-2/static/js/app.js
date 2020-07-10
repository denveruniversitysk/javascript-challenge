// from data.js
var tableData = data;

// Reference tbody element
var tableBody = document.querySelector("tbody");

// Reference datetime element
var dateTime = document.querySelector("#datetime");
var dataCity = document.querySelector("#city")
var dataState = document.querySelector("#state")
var dataCountry = document.querySelector("#country")
var dataShape = document.querySelector("#shape")

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

  // Filter through dateTime
  var filterDate = dateTime.value.trim();
  if (filterDate != "") {
    tableData = data.filter(function (data) {
      var dataDate = data.datetime;
      return dataDate === filterDate;
    });
  }
 
    // Filter through dataCountry
    var filterCountry = dataCountry.value.trim();
    if (filterCountry != "") {
      tableData = tableData.filter(function (data) {
        var dataCountry = data.country;
        return dataCountry === filterCountry;
      });
    }

    // Filter through dataState
    var filterState = dataState.value.trim();
    if (filterState != "") {
      tableData = tableData.filter(function (data) {
        var dataState = data.state;
        return dataState === filterState;
      });
    }

    // Filter through dataCity
    var filterCity = dataCity.value.trim();
    if (filterCity != "") {
      tableData = tableData.filter(function (data) {
        var dataCity = data.city;
        return dataCity === filterCity;
      });
    }

    // Filter through dataShape
    var filterShape = dataShape.value.trim();
    if (filterShape != "") {
      tableData = tableData.filter(function (data) {
        var dataShape = data.shape;
        return dataShape === filterShape;
      });
    }

renderData();
  }
function resetData() {
  tableData = data;
  dateTime.value = "";

  renderData();
}

// Render table when index.html loads
renderData();
console.log(filteredResults)


