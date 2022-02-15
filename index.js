console.log("HEllo world");
//Implicit Types
var varString = "Hello world";
varString = "2"; // dili pwede mag integer if naa na data type
//Explicit Types:
var varName = "Joseph";
var varAge = 21;
var nameNAge = ["jOSEPH", 21, { name: "joseph", age: 21 }];
//enums is helpful addition to the standard set of data type from javascript, thus allow the developer to define a set of named constant. This makes it easy to document intents, a set of distinct cases
var Cedenos;
(function (Cedenos) {
    Cedenos[Cedenos["Jushua"] = 0] = "Jushua";
    Cedenos[Cedenos["Joseph"] = 1] = "Joseph";
    Cedenos[Cedenos["Jacob"] = 2] = "Jacob";
    Cedenos[Cedenos["Joyce"] = 3] = "Joyce";
    Cedenos[Cedenos["Lala"] = 4] = "Lala";
    Cedenos[Cedenos["Aj"] = 5] = "Aj";
})(Cedenos || (Cedenos = {}));
var joseph = Cedenos.Joseph;

joseph = {"awit":22}
console.log(joseph);
