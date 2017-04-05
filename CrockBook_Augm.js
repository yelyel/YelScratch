//
// Augmenting types
//

// Funktionen sind Objekte. Wir definieren eine Funktion
// mit dem Namen 'methode', die eine Funktion 'func' mit
// dem Namen an dieses Funktionen-Objekt heftet. Wir können
// die Funktion auf der Funktion mit dem Namen 'name' aufrufen.

Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};

// Beispiel:

Number.method('integer', function() {
    // Wenn die Number - das this - kleiner als 0 ist wird
    // ganzzalig aufgerundet, sonst abgerundet.
    return Math[this < 0 ? 'ceil' : 'floor'](this);
});

console.log(Number(-2.9).integer());  // -2
console.log(Number(2.9).integer());   //  2
console.log(typeof (-10 / 3)  === 'number'); // true
console.log((-10 / 3).integer()); // 3


// Weiteres Beispiel:

Object.method('makeInt', function() {
    
    return typeof this.a === 'number' ? this.a : 'nuemmerlein'; 
});

console.log({}.makeInt());     // nuemmerlein
console.log({a:42}.makeInt()); // 42


//wieso gibt er nicht "nuemmerlein" aus, wenn ich eine Zahl mitgebe ??