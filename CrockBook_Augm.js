//
// Augmenting types
//

Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};

//====================================

Number.method('integer', function (  ) {
    return Math[this < 0 ? 'ceil' : 'floor'](this);
});

document.writeln((-10 / 3).integer(  ));  // -3

Object.method('makeInt', function( ) {
  
/*   if (this.typeof !== 'number')  {
     
     return("keine nuemmerlein");
   }else
     {
       return("nuemmerlein");
     }
*/  
  return this.typeof !== Number ? parseInt(this) * 3 : "nuemmerlein";
     
});


document.writeln((4). makeInt( )); 


//wieso gibt er nicht "nuemmerlein" aus, wenn ich eine Zahl mitgebe ??