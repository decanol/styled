module.exports = function styled(base = null) {

 return function (pieces, ...functions) {

     return function (args = {}) {
         var result = '';
         if (base !== null) {
             result += base(args);
         }
         result += pieces[0];
         for (var i = 0; i < functions.length; ++i) {
             result += functions[i](args) + pieces[i + 1];
         }
         return result.replace(/(?:\r\n|\r|\n|\t)/g,'');
     }
 }
};