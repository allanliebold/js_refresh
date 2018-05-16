
class Element {
  constructor (name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}

class Park extends Element {
  constructor(name, buildYear, area, numTrees) {
    super(name, buildYear);
    this.area = area;
    this.numTrees = numTrees;
  }
  
  treeDensity() {
    const density = this.numTrees / this.area;
    console.log(`${this.name} has a tree density of ${density} trees per square km.`);
  }
}

class Street extends Element {
  constructor(name, buildYear, length, size = 3) {
    super(name, buildYear);    
    this.length = length;
    this.size = size;
  }
  
  classifyStreet() {
    const classification = new Map();
    classification.set(1, 'tiny');
    classification.set(2, 'small');
    classification.set(3, 'normal');
    classification.set(4, 'big');
    classification.set(5, 'huge');
    
    console.log(`${this.name}, built in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
  }
}

const allParks = [new Park('Green Park', 1987, 0.2, 215), 
                  new Park('National Park', 1894, 2.9, 3541),
                  new Park('Oak Park', 1953, 0.4, 949)];

const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4),
                    new Street('Evergreen Terrace', 2008, 2.7, 2),
                    new Street('4th Street', 1972),
                    new Street('Sunset Boulevard', 1982, 2.5, 5)];

function calc(arr) {
  var sum = arr.reduce((prev, curr, idx) => prev + curr, 0);
  return [sum, sum / arr.length];
}

function reportParks(p) {
  console.log('-----Parks Report-----');
  // Density
  p.forEach(el => el.treeDensity());
  
  // Average Age
  const ages = p.map(el => new Date.getFullYear() - el.buildYear);
  const [totalAge, avgAge] = calc(ages);
  console.log(`Our ${p.length} parks have an average age of ${avgAge} years.`);
  
  // More than 1000 trees
  const i = p.map(el => el.numTrees);
  
}

function reportStreets(s) {
  console.log('-----Streets Report-----');
}

reportParks(allParks);
reportStreets(allStreets);
