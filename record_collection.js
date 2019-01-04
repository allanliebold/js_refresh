var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
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
    }
};
var collectionCopy = JSON.parse(JSON.stringify(collection));

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

updateRecords(5439, "artist", "ABBA");
