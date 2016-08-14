import * as nunjucks from "nunjucks";

export class Bar {

	constructor(id, value, limit) {
		this.id = id; 
		this.limit = limit;
		this.$el = document.createElement('li');
		this.$el.setAttribute('id', this.id);
		this.$el.setAttribute('class', 'bar');
		this.setCurrentValue(value);
	}

	getCurrentValue() {
		return this.currentvalue;
	}

	setCurrentValue(value) {
		this.currentvalue = Math.max(0, value);
		var percentage = this.getProgressPercentage();
		this.$el.setAttribute('data-currentvalue', this.currentvalue);
		this.$el.setAttribute('data-percentage', percentage + "%");
		this.updateBar(percentage);
	}

	addPercentageValue(value) {
		var percentage = this.getProgressPercentage(),
			newpercentage = Math.max(0, percentage + value);
		this.currentvalue = Math.floor(newpercentage * this.limit / 100);
		// due to floor(), it is possible that the current value was not correct
		// we need to check to ensure that our percentage value are correct to the ratio of currentvalue and limit
		if (this.getProgressPercentage() != newpercentage) {
			this.currentvalue = Math.ceil(newpercentage * this.limit / 100);
		}
		this.$el.setAttribute('data-currentvalue', this.currentvalue);
		this.$el.setAttribute('data-percentage', newpercentage + "%");
		this.updateBar(newpercentage);
	}

	updateBar(percentage) {
		let bar = this.$el.querySelector('div');
		if (bar) {
			bar.style.width = Math.min(100, Math.max(0, percentage)) + "%";
			if (percentage > 100) {
				this.$el.classList.add("overflow");
			} else {
				this.$el.classList.remove("overflow");
			}
		}
	}

	getProgressPercentage(cantBeOver100 = false) {
		var v = Math.floor(this.currentvalue * 100 / this.limit);
		if (cantBeOver100) {
			v = Math.min(v, 100);
		}
		return v;
	}

	render() {
		this.$el.innerHTML = '<div style="width:' + this.getProgressPercentage(true) + "%" + '"></div>';
		return this.$el;
	}

}

export class ProgressBar {
	
	constructor(el, config) {
		this.el = el;
		this.config = config;
		this.bars = this.config.bars.map((v, idx) => {
			return new Bar('progress-' + (idx + 1), v, this.config.limit);
		});
		this.render();
	}

	// main function to render markup
	render() {
		var $el = document.querySelector(this.el);
		$el.innerHTML = nunjucks.render('app.html', this.config);

		// render bar
		this.bars.forEach((bar) => {
			$el.querySelector('.bars').appendChild(bar.render());
		});

		// attach event
		var btns = $el.querySelectorAll('.btn');
		for (let i = 0; i < btns.length; i++) {
			btns[i].addEventListener('click', this.updateProgressBar.bind(this));
		}
	}

	updateProgressBar(e) {
		var $el = document.querySelector(this.el);
		var currentbar = $el.querySelector(".currentbar").value;
		var amount = parseInt(e.currentTarget.value);
		var bar = this.bars[currentbar];
		bar.addPercentageValue( amount );  
	}
}