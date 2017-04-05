//
// Scope
//====================================

var foo = function (  ) {
    var a = 3, b = 5;

    var bar = function (  ) {
        var b = 7, c = 11;

// At this point, a is 3, b is 7, and c is 11

        a += b + c;
     return(document.writeln(this.a));
// At this point, a is 21, b is 7, and c is 11

    };

// At this point, a is 3, b is 5, and c is not defined

    bar(  );
          


// At this point, a is 21, b is 5
    
foo();
    

      
       document.writeln(b);
       //document.writeln(c);    
};
    
document.writeln("who am You");


////Wie gott verdammt noch mal kann ich hier deie Werte ausschreiben ????
