var Q = require('q');
Object.defineProperty(Function.prototype, 'promise', {
  set: function() {},
  get: function() {
    var self = this;
    return function() {
      var args = Array.prototype.slice.call(arguments);
      args.unshift(self);
      var func = self.bind.apply(self, args);

      return Q({
        then: function(fulfilled, rejected) {
          func(function(err, result) {
            if (err) {
              rejected(err);
            } else {
              fulfilled(result);
            }
          });
        }
      });
    };
  }
});

var properties = ['map', 'some', 'filter', 'reduce', 'every'];

properties.forEach(function(property) {
  Q.makePromise.prototype[property] = function(iterator) {
    var self = this;
    var args = arguments;

    return Q({
      then: function(fulfilled, rejected) {
        self.then(function(result) {
          fulfilled(result[property].apply(result, args));
        }, function(reason) {
          rejected(reason);
        });
      }
    });
  };
});

