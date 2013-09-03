describe('property', function() {
  it('should extend the Function with the `promise` property', function() {
    var func = function() {};
    func.promise.should.be.a('function');
  });

  it('should not be the own property of the function', function() {
    var func = function() {};
    func.should.not.have.ownProperty('promise');
  });
});

