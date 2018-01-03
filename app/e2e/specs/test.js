const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
const expect = chai.expect;

describe('Todo app test', function() {
    beforeEach(function() {
        browser.get('http://127.0.0.1:9001/');
    });

    it('Cannot click the button without any input', function() {
        //const todoText = element(by.name('todoText'));
        const todoButton = element(by.buttonText('Add To List'));
        //todoText.sendKeys('todo item');
        //expect( todoText.getAttribute('value') ).to.eventually.equal('todo item');
        expect( todoButton.isEnabled() ).to.eventually.be.false;
    });
});
