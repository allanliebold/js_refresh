var years = [1977, 1980, 1991, 1958];
var ages = [];
var ofAge = [];

function calculateAge(year) {
  return 2018 - year;  
}

function calculateMonths(year) {
  
}

for (var i = 0; i < years.length; i++) {
  ages[i] = calculateAge(years[i]);  
}

for (i = 0; i < ages.length; i++) {
  if (ages[i] > 18) {
    console.log('Person ' + (i+1) + ' is an adult.'); 
    ofAge.push(true);
  } else {
    console.log(' Person ' + (i+1) + ' is a minor.'); 
    ofAge.push(false);
  }
}
