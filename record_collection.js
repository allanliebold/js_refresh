// Record Collection
// collection Object
var collection = {
    "2549": {
      "album": "Title",
      "artist": "",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
        },

};

// Save a copy of the collection as a JSON Object

var collectionCopy = JSON.parse(JSON.stringify(collection));
var collectionCopy2 = JSON.parse(JSON.stringify(collection));
var collectionCopy3 = JSON.parse(JSON.stringify(collection));

// Update Records Function
function updateRecords(id, prop, value) {
  if(value == "") {
    delete collection[id][prop];
    return collection
  }
  if(prop == "tracks") {
    if(collection[id].hasOwnProperty("tracks") == false) {
      collection[id]["tracks"] = [];
    }
    if(value != "") {
      collection[id]["tracks"].push(value);
      return collection;
    }
  }  
  collection[id][prop] = value;
  return collection;
}

/*
updateRecords(5439, "artist", "ABBA");
console.log(collection[5439]["artist"]); // ABBA
updateRecords(2245, "tracks", "");
updateRecords();
*/
