// 1. import the data from data.js
const tableData = data;

// 2. Point our data to our HTML page
//tell JavaScript what type of element the data will be displayed in
// data will be placed in a table- reference the tbody HTML tag using D3.
// D3 is a JavaScript library that produces sophisticated and highly dynamic graphics in an HTML webpage.
var tbody = d3.select("tbody");

// 3. Build the table to display all of the UFO sightings.
// Iterate through the array of objects in our data file and then append them to a table row.
// Clearing existing data is important because we’ll be appending data from the array in the following code. 
// Without clearing it, the users will end up with pre-filtered data.
function buildTable(data) {
    tbody.html("");
}

// 4. Create another function specifically for building the table.
data.forEach((dataRow) => {
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
      }
    );
  });

// 5. Add the ability to filter the data.
function handleClick() {
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
 
 // 6. Apply a filter method that will match the datetime value to the filtered date value
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

// 7. Build the Filtered Table
//  Pass in filteredData variable as the argument so that only the data that matches the filter is displayed.
    buildTable(filteredData);
};