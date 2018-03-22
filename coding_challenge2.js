var years = [1977, 1980, 1991, 1958];
var ages = []

function calculateAge(year) {
  return 2018 - year;  
}

for (i = 0; i < years.length; i++) {
  ages.push(calculateAge(years[i]));  
}

for (i = 0; i < ages.length; i++) {
  if (ages[i] > 18) {
    console.log('Person ' + (i+1) + ' is an adult.'); 
  } else {
    console.log(' Person ' + (i+1) + ' is a minor.'); 
  }
}
