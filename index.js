var unquotedValidator = require('unquoted-property-validator');
function Enum(){
  this._args = Array.prototype.slice.call(arguments);
  for(var i=0; i<this._args.length; i++){
    var val = this._args[i];
    var key = val.toUpperCase();
    if(unquotedValidator(key).needsQuotes){
      console.warn('The enum value '+val+' ('+key+') cannot be accessed without quotes, which is probably not what you want.');
    }
    this[key] = val;
  }
}
Enum.prototype.array = function(){
  return this._args.slice(0);
}

module.exports = Enum;
