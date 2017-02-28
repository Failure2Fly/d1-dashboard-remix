// 1. Count the number of records in the "Current Quarter Details" table.
var numberOfRecords = document.querySelectorAll('tbody tr');
// numberOfRecords= Array.from(numberOfRecords);

console.log(numberOfRecords.length);

// 2. Set each dashboard image to different images, one for each season. Make sure you also set the alt="" attribute with an appropriate description.
var dashboardImages = document.querySelectorAll('img');
// dashboardImages = Array.from(dashboardImages);

dashboardImages[0].src = 'https://unsplash.it/200/200?image=423';
dashboardImages[1].src = 'https://unsplash.it/200/200?image=33';
dashboardImages[2].src = 'https://unsplash.it/200/200?image=244';
dashboardImages[3].src = 'https://unsplash.it/200/200?image=167';

console.log(dashboardImages);


// 3. Below each dashboard image, there's a season/quarter name. Below those, there are three dots. Replace those three dots with a randomly generated number formatted as currency, like $12,589.00.
// var randomNumber;
var quarterTotal = document.querySelectorAll('.text-muted');
// quarterTotal = Array.from(quarterTotal);

quarterTotal.forEach(function(randomNumber){
    var money = Math.ceil(Math.random(0) * 100000);
    randomNumber.innerHTML = ('$' + money + '.00');   
});

console.log(quarterTotal);

// 4. Change the currently selected left side menu item from Overview to Reports.

var overview = document.querySelectorAll('li')[4];
// var overview = document.querySelectorAll()
overview.classList.remove('active');

var reports = document.querySelectorAll('li')[5];
reports.classList.add('active')


console.log(reports);

// 5. Set the default search input value to "Q4 sales".
var searchValue = document.querySelector("input").value = "Q4 sales";

console.log(searchValue);



// var styleDeclaration = document.styleSheets[0].cssRules[0].style;
// var cssValue = styleDeclaration.getPropertyCSSValue("color");
// console.log(cssValue.cssText);


// 6. Add the "table-hover" class to the table. See the Bootstrap table docs.
tableHover = document.querySelector('table');
hovering = tableHover.classList.add('table-hover');

console.log(tableHover);


// 7. Add the "success" class to the 7th - 10th row of the table, like: <tr class="success">...</tr>
tableGreen = document.querySelectorAll('tr')[7];
green = tableGreen.classList.add('success');
tableGreen = document.querySelectorAll('tr')[8];
green = tableGreen.classList.add('success');
tableGreen = document.querySelectorAll('tr')[9];
green = tableGreen.classList.add('success');
tableGreen = document.querySelectorAll('tr')[10];
green = tableGreen.classList.add('success');

console.log(tableGreen);

// 8. Change the table header names to: ID, First Name, Last Name, Department, Client.
tableHeader = document.querySelectorAll('th')[0];
header = tableHeader.innerText = ('ID');
tableHeader = document.querySelectorAll('th')[1];
header = tableHeader.innerText = ('First Name');
tableHeader = document.querySelectorAll('th')[2];
header = tableHeader.innerText = ('Last Name');
tableHeader = document.querySelectorAll('th')[3];
header = tableHeader.innerText = ('Department');
tableHeader = document.querySelectorAll('th')[4];
header = tableHeader.innerText = ('Client');

console.log(tableHeader)

// 9. Make an array of objects, each object representing a single row in the table. Remove the commas from the ID column and convert it to an actual Number data type. Example: [{id: 1001, firstName: 'Lorem', lastName: 'ipsum', department: 'dolor', client: 'sit'}]

var arrayOfObjects =  [];
var rows = document.querySelectorAll('tbody tr')

rows.forEach(function(row) {
    var object = {};
    object.id = Number(row.children[0].innerText.replace(/,/g,''));
    object.firstName = row.children[1].innerText;
    object.lastName = row.children[2].innerText;
    object.department = row.children[3].innerText;
    object.client = row.children[4].innerText;

    arrayOfObjects.push(object);
})
console.log(arrayOfObjects);


// Alternative way
// rows.forEach(function(row) {
//     var object = {
//     id: Number(row.children[0].innerText.replace(/,/g,'')),
//     firstName: row.children[1].innerText,
//     lastName: row.children[2].innerText,
//     department: row.children[3].innerText,
//     client: row.children[4].innerText,
//     }
// })




// 10. Make each word in the table capitalized.

document.querySelector('.table').classList.add('text-capitalize')
// Another way to do this. 
// document.querySelector('.table').style.textTransform = 'capitalize';


