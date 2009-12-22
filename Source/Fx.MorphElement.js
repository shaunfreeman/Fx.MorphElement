/*
---
name: Fx.MorphElement.js
description: Creates a morph effect on any element using predefined styles.
authors: Shaun Freeman
requires:
    core:1.2.4:
    - Fx.Morph
    - Fx.Transitions
provides: [Fx.MorphElement, Fx.MorphElement.Effects]
license: MIT-style license
version: 1.0.2
...
*/

Fx.MorphElement = new Class({
	
	Extends: Fx.Morph,
	
	options: {
		wrap: true,
		wrapClass: 'morphElementWrap',
		FxTransition : $empty,
		hideOnInitialize: false,
		width: null,
		height: null
	},
	
	initialize: function(el, options) {
		this.setOptions(options);
		this.parent(el, this.options.FxTransition);
		
		if (!this.options.width) this.setOptions({width: this.element.getWidth()});
		if (!this.options.height) this.setOptions({height: this.element.getHeight()});
		
		if (this.options.wrap) {
			this.wrap = new Element('div', {
				'id': this.element.get('id') + '_wrap',
				'class': this.options.wrapClass,
				'styles': {
					'height': this.options.height,
					'width': this.options.width,
					'overflow': 'hidden'
				}
			}).wraps(this.element);
		}
		
		this.element.setStyle('overflow', 'auto');
		
		if (this.options.hideOnInitialize) {
			this.element.store('fxEffect:flag', 'hide');
			this.start(this.options.hideOnInitialize);
		} else {
			this.element.store('fxEffect:flag', 'show');
			this.set({'opacity': [1,1]});
		}
	},
	
	start: function(fx) {
		
		var flag = this.element.retrieve('fxEffect:flag');
		
		var styles = {
			'margin-top': [0, 0],
			'margin-left': [0, 0],
			'width': [this.options.width, this.options.width],
			'height': [this.options.height, this.options.height],
			'opacity': [1, 1]
		};
		
		fx = fx.split(':');
		
		if (fx.length > 1) {
			fx = Fx.MorphElement.Effects[fx[0]][fx[1]][flag];
		} else {
			fx = Fx.MorphElement.Effects[fx[0]][flag];
		}
		
		$H(fx).each(function(hash, hashIndex){
			hash.each(function(item, index){
				if ($type(item) == 'string') {
					hash[index] = item.substitute({'width': this.options.width, 'height': this.options.height});
				}
			}.bind(this));
			styles[hashIndex] = hash
		}.bind(this));
		
		this.element.store('fxEffect:flag', (flag == 'hide') ? 'show' : 'hide');
		
		return this.parent(styles);
	}
});

Element.Properties.morphElement = {

	set: function(options){
		var morphElement = this.retrieve('morphElement');
		if (morphElement) morphElement.cancel();
		return this.eliminate('morphElement').store('morphElement:options', $extend({link: 'cancel'}, options));
	},

	get: function(options){
		if (options || !this.retrieve('morphElement')){
			if (options || !this.retrieve('morphElement:options')) this.set('morphElement', options);
			this.store('morphElement', new Fx.MorphElement(this, this.retrieve('morphElement:options')));
		}
		return this.retrieve('morphElement');
	}

};

Element.implement({

	morphElement: function(props){
		this.get('morphElement').start(props);
		return this;
	}

});

Fx.MorphElement.Effects = $H({
	blind: {
		up: {
			hide: {'height': ['{height}', 0]},
			show: {
				'margin-top': ['{height}', 0],
				'height': [0, '{height}']
			}
		},
		down: {
			hide: {
				'margin-top': ['{height}'],
				'height': [0]
			},
			show: {'height': [0, '{height}']}
		},
		left: {
			hide: {'width': ['{width}', 0]},
			show: {
				'margin-left': ['{width}', 0],
				'width': [0, '{width}']
			}
		},
		right: {
			hide: {
				'margin-left': ['{width}'],
				'width': [0]
			},
			show: {'width': [0, '{width}']}
		}
	},
	slide: {
		up: {
			hide: {
				'margin-top': [0, '-{height}'],
				'width': ['{width}'],
				'height': ['{height}']
			},
			show: {'margin-top': ['{height}', 0]}
		},
		down: {
			hide: {
				'margin-top': [0, '{height}'],
				'width': ['{width}'],
				'height': ['{height}']
			},
			show: {'margin-top': ['-{height}', 0]}
		},
		left: {
			hide: {
				'margin-left': [0, '-{width}'],
				'width': ['{width}'],
				'height': ['{height}']
			},
			show: {'margin-left': ['{width}', 0]}
		},
		right: {
			hide: {
				'margin-left': [0, '{width}'],
				'width': ['{width}'],
				'height': ['{height}']
			},
			show: {'margin-left': ['-{width}', 0]}
		}
	},
	fade: {
		hide: {'opacity': [1, 0]},
		show: {'opacity': [0, 1]}
	}
});
