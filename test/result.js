describe('result', function() {
  it('should return a Q Promise when call `promise` method', function() {
    var func = function() {};
    func.promise().toString().should.equal('[object Promise]');
  });

  it('should extend Q Promise with Array methods: `every`, `some`, `map`, `reduce` and `filter`', function() {
    var func = function() {};
    func.promise().map.should.be.a('function');
    func.promise().reduce.should.be.a('function');
    func.promise().some.should.be.a('function');
    func.promise().every.should.be.a('function');
    func.promise().filter.should.be.a('function');
  });

  it('should also return a Q Promise when call the Array methods we extended', function() {
    var func = function() {
      return [];
    };
    func.promise().map(function() {}).toString().should.equal('[object Promise]');
    func.promise().reduce(function() {}).toString().should.equal('[object Promise]');
    func.promise().some(function() {}).toString().should.equal('[object Promise]');
    func.promise().every(function() {}).toString().should.equal('[object Promise]');
    func.promise().filter(function() {}).toString().should.equal('[object Promise]');
  });
});

