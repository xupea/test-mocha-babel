import Hello from '../src/hello.js'

var assert = require('assert')
describe('test Hello class', function() {

  describe('test height', function() {

    it('', function() {
      var hello = new Hello()
      hello.height = 100
      hello.width = 200
      assert.equal(hello.height, 100)
    })
  })
})
