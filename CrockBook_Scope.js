//
// Scope
//====================================

var foo = function( ) {
    
    var a = 3, b = 5;

    var bar = function (  ) {
        
        var b = 7, c = 11;
        
        console.log(a, b, c);  // 3, 7, 11
        
        a += b + c;  // a = 21
        return a;
    };

    console.log(bar()); // 21
    console.log(b); // 5, c ist nicht definiert.
    
    return [a, b]
};        
    
console.log(foo());  // a = 21, b = 5
console.log('who am You? yeL?');    

////Wie gott verdammt noch mal kann ich hier deie Werte ausschreiben ????
/// Du musst es nur richtig machen...
