Fx.MorphElement
====================================



![Screenshot](http://github.com/vincentbluff/Fx.MorphElement/raw/master/screenshot.png)

Requirements
------------

* [MooTools Core 1.2.4](http://mootools.net/core): Fx.Morph, Fx.Transitions (and their dependencies)

### Extends:

- [Fx.Morph][]

### Syntax
	var myFx = new Fx.MorphElement(el, {options});

### Arguments

1. el - (*element*) the id of the element or the eleemnt itself.
2. options - (*options*) a key/value set of options.

### Options
- width: (*string*), the width of the element. (Default: null)
- height: (*string*), the height of the element. (Default: null)
- wrap: (*boolean*),  whether to wrap the element or not. (Default: true)
- wrapClass: (*string*), The CSS Class name of the element wrap. (Default: 'morphElementWrap')
- FxTransition : An Fx.Transitions (*object*). see MooTools Fx for options. (Default: {transition: 'linear', duration, 'long'}),
- hideOnInitialize: (*boolean*),  whether to hide the element when the class is initialize or not. (Default: true)

### Returns:

* (*object*) A new Fx.MorphElement instance.

### See Also:

- [Fx.Morph][]


### Fx.MorphElement Method: set
-------------------------------

[Fx.Morph]: http://www.mootools.net/docs/Fx/Fx.Morph
