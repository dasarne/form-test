"use strict";
//Describes the model of the entry formage
var Entry = (function () {
    function Entry(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    return Entry;
}());
exports.Entry = Entry;
