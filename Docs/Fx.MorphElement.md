Fx.MorphElement
===============

Fx.MorphElement is a class that extends Fx.Morph to add an easy way to add some common effects to any element using CSS Styles.

Inherits methods, properties, options and events from [Fx.Morph][].

![Screenshot](http://github.com/vincentbluff/Fx.MorphElement/raw/master/screenshot.png)

Requirements
------------

* [MooTools Core 1.2.4](http://mootools.net/core): Fx.Morph, Fx.Transitions (and their dependencies)

### Extends:

- [Fx.Morph][]

How to use
----------

### Syntax
	#JS
	var myFx = new Fx.MorphElement(el, {options});

### Arguments

1. el - (*element*) the id of the element or the eleemnt itself.
2. options - (*options*) a key/value set of options.

### Options
- width: (*string*), the width of the element. (Default: the width of the actual element)
- height: (*string*), the height of the element. (Default: the height of the actual element)
- wrap: (*boolean*),  whether to wrap the element or not. (Default: true)
- wrapClass: (*string*), The CSS Class name of the element wrap. (Default: 'morphElementWrap')
- FxTransition : An Fx.Transitions (*object*). see MooTools [Fx][] for options. (Default: {transition: 'linear', duration, 'long'}),
- hideOnInitialize: (*mixed*),  whether to hide the element when the class is initialize using a style from Fx.MorphElement.Effects. (Default: false)

### Returns:

* (*object*) A new Fx.MorphElement instance.

### Example:

Morphing using an object:

	#JS
	var myFx = new Fx.MorphElement($('me1'), {
		wrap: true,
		width: '200px',
		height: '200px',
		FxTransition:  {
			transition: 'linear',
			duration: 'long'
		},
		hideOnInitialize: 'slide:right'
	});
	
	myFx.start('slide:right');

### See Also:

- [Fx][]
- [Fx.Morph][]

### Fx.MorphElement Method: start
---------------------------------

Executes a transition from the Fx.MorphElement.Effects (*object*).

### Syntax:

	#JS
	myFx.start(properties);

### Arguments:

1. properties - (*string*) An *string* representing a CSS styles which can be found within the Fx.MorphElement.Effects (*object*).

### Returns:

* (*object*) This Fx.MorphElement instance.

### Examples:
	
	#JS
	var myEffects = new Fx.MorphElement('myElement', {
		wrap: true,
		width: '200px',
		height: '200px',
		FxTransition:  {
			transition: 'linear',
			duration: 'long'
		},
		hideOnInitialize: 'slide:up'
	});

	myEffects.start('slide:up');

Hash: Element.Properties
========================

see [Element.Properties][]

Element Property: morph
-----------------------

### Setter

Sets a default Fx.MorphElement instance for an Element.

#### Syntax:

	#JS
	el.set('morphElement', options);

#### Arguments:

1. options - (*object*) The Fx.MorphElement options.

#### Returns:

* (*element*) This Element.

#### Examples:

	#JS
	el.set('morphElement', {
		FxTransition: {
			duration: 'long',
			transition: 'bounce:out'
		}
	});
	el.morphElement('slide:down');

### Getter

Gets the default Fx.MorphElement instance for the Element.

#### Syntax:

	#JS
	el.get('morphElement');

#### Arguments:

1. options - (*object*, optional) The Fx.MorphElement options. If these are passed in, a new instance will be generated.

#### Returns:

* (*object*) The Fx.MorphElement instance.

#### Examples:

	el.set('morph', {
		FxTransition: {
			duration: 'long',
			transition: 'bounce:out'
		}
	});
	el.morphElement('blind:left');
	el.get('morphElement'); //The Fx.MorphElement instance.

Native: Element
===============

Element Method: morph
---------------------

Animates an Element given the properties passed in.

### Syntax:

	#JS
	myElement.morphElement(properties);

### Arguments:

1. properties - (*string*) The CSS properties in the Fx.MorphElement.Effects (*object*) to animate.

### Returns:

* (*element*) This Element.

### Example:

	#JS
	$('myElement').morphElement('slide:left');

Fx.MorphElement.Effects
=======================

A Hash (*object*) that holds all the styles for the effect to transition.

### Styles already defined

- blind:up
- blind:down
- blind:left
- blind:right
- slide:up
- slide:down
- slide:left
- slide:right
- fade

[Fx]: http://www.mootools.net/docs/Fx/Fx
[Fx.Morph]: http://www.mootools.net/docs/Fx/Fx.Morph
[Element.Properties]: http://www.mootools.net/docs/Element/Element/#Element-Properties
