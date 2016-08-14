import {DataManager} from 'datamanager';
import {ProgressBar, Bar} from 'progressbar';

/* Not doing this test because it makes an ajax request
	This will fail in PhantomJS.
	It however works in browser

QUnit.module('Test DataManager');

QUnit.test('getData() return a Promise', assert => {
	let p = DataManager.getData();
	assert.equal(p instanceof Promise, true);
});
*/
QUnit.module('Test Bar');

QUnit.test('Init Bar() with id as Id1 value of 20 and limit of 80', assert => {
	let bar = new Bar("Id1", 20, 80);
	assert.equal(bar.id, "Id1", "Expect Id is Id1");
	assert.equal(bar.currentvalue, 20, "Expect currentvalue is 20");
	assert.equal(bar.limit, 80, "Expect limit is 80");
	assert.equal(bar.getCurrentValue(), 20, "Expect method getCurrentValue() returns 20");
	assert.equal(bar.getProgressPercentage(), 25, "Expect getProgressPercentage() return 25");
});

QUnit.test('Init Bar() with id as Id2 value of 80 and limit of 90', assert => {
	let bar = new Bar("Id2", 80, 90);
	assert.equal(bar.id, "Id2", "Expect Id is Id2");
	assert.equal(bar.currentvalue, 80, "Expect currentvalue is 80");
	assert.equal(bar.limit, 90, "Expect limit is 90");
	assert.equal(bar.getCurrentValue(), 80, "Expect method getCurrentValue() returns 80");
	assert.equal(bar.getProgressPercentage(), 88, "Expect getProgressPercentage() return 88");
});

QUnit.test('Bar.addPercentageValue', assert => {
	let bar = new Bar("Id1", 20, 80);

	// increase percentage to +30
	bar.addPercentageValue(30);
	assert.equal(bar.getProgressPercentage(), 55, "Expect getProgressPercentage() return 55");
	assert.equal(bar.getProgressPercentage(true), 55, "Expect getProgressPercentage(true) returns 55");
	assert.equal(bar.getCurrentValue(), 44, "Expect method getCurrentValue() returns 44");

	// increase percentage to +10
	bar.addPercentageValue(10);
	assert.equal(bar.getProgressPercentage(), 65, "Expect getProgressPercentage() return 65");
	assert.equal(bar.getProgressPercentage(true), 65, "Expect getProgressPercentage(true) return 65");
	assert.equal(bar.getCurrentValue(), 52, "Expect method getCurrentValue() returns 52");

	// increase percentage to +50 (overflow)
	bar.addPercentageValue(50);
	assert.equal(bar.getProgressPercentage(), 115, "Expect getProgressPercentage() return 115");
	assert.equal(bar.getProgressPercentage(true), 100, "Expect getProgressPercentage(true) return 100");
	assert.equal(bar.getCurrentValue(), 92, "Expect method getCurrentValue() returns 92");

	// decrease percentage by -80
	bar.addPercentageValue(-80);
	assert.equal(bar.getProgressPercentage(), 35, "Expect getProgressPercentage() return 35");
	assert.equal(bar.getProgressPercentage(true), 35, "Expect getProgressPercentage(true) return 35");
	assert.equal(bar.getCurrentValue(), 28, "Expect method getCurrentValue() returns 28");

	// decrease percentage by -40 (under 0)
	bar.addPercentageValue(-40);
	assert.equal(bar.getProgressPercentage(), 0, "Expect getProgressPercentage() return 0");
	assert.equal(bar.getProgressPercentage(true), 0, "Expect getProgressPercentage(true) return 0");
	assert.equal(bar.getCurrentValue(), 0, "Expect method getCurrentValue() returns 0");
});

QUnit.test('Bar.setCurrentValue', assert => {
	let bar = new Bar("Id1", 20, 80);

	// current value = 30
	bar.setCurrentValue(30);
	assert.equal(bar.getProgressPercentage(), 37, "Expect getProgressPercentage() return 37");
	assert.equal(bar.getProgressPercentage(true), 37, "Expect getProgressPercentage(true) returns 37");
	assert.equal(bar.getCurrentValue(), 30, "Expect method getCurrentValue() returns 30");

	// current value = 100
	bar.setCurrentValue(100);
	assert.equal(bar.getProgressPercentage(), 125, "Expect getProgressPercentage() return 125");
	assert.equal(bar.getProgressPercentage(true), 100, "Expect getProgressPercentage(true) return 100");
	assert.equal(bar.getCurrentValue(), 100, "Expect method getCurrentValue() returns 100");

	// current value = 0 instead of -10
	bar.setCurrentValue(-10);
	assert.equal(bar.getProgressPercentage(), 0, "Expect getProgressPercentage() return 0");
	assert.equal(bar.getProgressPercentage(true), 0, "Expect getProgressPercentage(true) return 0");
	assert.equal(bar.getCurrentValue(), 0, "Expect method getCurrentValue() returns 0");
});

QUnit.test('Bar.render', assert => {
	let bar = new Bar("Id1", 20, 80);
	let node = bar.render();
	assert.equal(node instanceof Node, true, "returns a DOM element");
	let div = node.querySelector('div');
	assert.notEqual(div, null, "has a child element DIV");
	assert.equal(div.style.width, "25%", "DIV has width=25%");
});

QUnit.test('Bar.updateBar', assert => {
	let bar = new Bar("Id1", 20, 80);
	let node = bar.render();
	let div = node.querySelector('div');
	
	bar.updateBar(-10);
	assert.equal(div.style.width, "0%", "DIV now has width=0%");
	assert.notOk(node.classList.contains('overflow'), "bar is not overflow");

	bar.updateBar(50);
	assert.equal(div.style.width, "50%", "DIV now has width=50%");
	assert.notOk(node.classList.contains('overflow'), "bar is not overflow");

	bar.updateBar(100);
	assert.equal(div.style.width, "100%", "DIV now has width=100%");
	assert.notOk(node.classList.contains('overflow'), "bar is not overflow");

	bar.updateBar(120);
	assert.equal(div.style.width, "100%", "DIV now still has width=100% even it is set to 120%");
	assert.ok(node.classList.contains('overflow'), "bar is overflow");

	bar.updateBar(20);
	assert.equal(div.style.width, "20%", "DIV now has width=20%");
	assert.notOk(node.classList.contains('overflow'), "bar is not overflow");
});

QUnit.module('Test ProgressBar');

QUnit.test('Init ProgressBar()', assert => {
	let config = {
		bars: [20, 50],
		limit: 100,
		buttons: [10, 65, -25]
	};

	let pb = new ProgressBar("#progressbars", config);
	assert.equal(pb.el, "#progressbars", "Expect element id is #progressbars");
	assert.equal(pb.bars.length, 2, "Expect there are 2 bars");
});