(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,456,156);


(lib.gradient_img = function() {
	this.initialize(img.gradient_img);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,242);


(lib.image_01 = function() {
	this.initialize(img.image_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,478);


(lib.image_02 = function() {
	this.initialize(img.image_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,584);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.txt_learnMore = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C9C9C6").s().p("AhwCoIAAlPIDhAAIAAA9IigAAIAABMICgAAIAAA8IigAAIAABNICgAAIAAA9g");
	this.shape.setTransform(141.65,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C9C9C6").s().p("AA9CoIg2hqIhKAAIAABqIhBAAIAAlPICHAAQA5AAAiAhQAhAfgBAxQAAAggPAaQgQAbgbAOIBBB7gAhDADIBCAAQAeAAAQgQQAPgQAAgYQAAgZgPgOQgQgPgeAAIhCAAg");
	this.shape_1.setTransform(111.5,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C9C9C6").s().p("Ah5B6QgygzAAhHQAAhHAygyQAygzBHABQBHgBAzAzQAyAyAABHQAABHgyAzQgyAzhIgBQhHABgygzgAhLhMQgfAfAAAtQAAAtAfAgQAfAfAsAAQAtAAAfgfQAfggAAgtQAAgtgfgfQgfgggtAAQgsAAgfAgg");
	this.shape_2.setTransform(74.675,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C9C9C6").s().p("ABkCoIAAjqIhkCGIhiiEIAADoIhBAAIAAlPIBAAAIBjCLIBniLIA8AAIAAFPg");
	this.shape_3.setTransform(34.8,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C9C9C6").s().p("ABLCoIiXjrIAADrIg/AAIAAlPIBGAAICSDkIAAjkIA/AAIAAFPg");
	this.shape_4.setTransform(-14.675,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C9C9C6").s().p("AA9CoIg2hqIhLAAIAABqIhAAAIAAlPICHAAQA5AAAiAhQAgAfABAxQAAAggQAaQgQAbgcAOIBDB7gAhEADIBDAAQAdAAARgQQAPgQAAgYQAAgZgPgOQgRgPgdAAIhDAAg");
	this.shape_5.setTransform(-47.5,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C9C9C6").s().p("ABcCoIgWg9IiLAAIgWA9IhDAAIB/lPIA/AAIB/FPgAgwAwIBhAAIgxiEg");
	this.shape_6.setTransform(-81.625,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C9C9C6").s().p("AhwCoIAAlPIDhAAIAAA9IigAAIAABMICgAAIAAA8IigAAIAABNICgAAIAAA9g");
	this.shape_7.setTransform(-113.35,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C9C9C6").s().p("AhtCoIAAlPIBBAAIAAEQICaAAIAAA/g");
	this.shape_8.setTransform(-141.875,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_learnMore, new cjs.Rectangle(-152.9,-17.2,305.9,34.5), null);


(lib.txt_is = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003DA6").s().p("AgLBdQgRgKgIgSIArgNQADAJAHAEQAHAEAJAAQAJAAAEgDQAEgEAAgEQAAgDgCgBIgGgEIgogKQgIgCgHgFQgIgEgEgHQgFgIAAgLQAAgJAFgIQAEgJAIgGQAIgGAKgEQAMgEANABQAMgBAKADQAJACAIAFQAIAEAGAGIALAPIgpALQgHgMgQAAQgIAAgEACQgEACAAAFQAAAEAHACIApAKQAJADAHAEQAIAGAFAHQAFAIAAAMQAAAIgEAJQgEAIgIAHQgIAHgMAEQgMAEgQAAQgcABgPgLgAhbBlIAAiMIAtAAIAACMgAhYg5QgHgIAAgLQAAgLAHgIQAHgHAMgBQAMABAHAHQAHAIAAALQAAALgHAIQgHAHgMAAQgMAAgHgHg");
	this.shape.setTransform(-94.725,14.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_is, new cjs.Rectangle(-107.1,-3.2,24.39999999999999,38.2), null);


(lib.txt_inside = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003DA6").s().p("ABkBjQgMgFgJgKQgJgJgFgNQgGgOAAgRQAAgRAGgOQAFgMAIgKQAKgJAMgFQAMgFAMAAQAOAAAJAFQAKAEAGAJIAAhQIAsAAIAADMIgrAAIAAgRQgIAJgJAGQgLAFgNAAQgLAAgMgFgAB5ABQgFADgEAEQgFAFgDAFQgCAGAAAGQAAAIACAFQADAGAFAEQAEAEAFADQAHADAGAAQAGAAAHgDQAFgDAFgEQADgEADgGQACgFAAgIQAAgGgCgGQgDgFgDgFQgFgEgFgDQgHgBgGAAQgGAAgHABgAiABeQgRgKgIgTIAsgMQADAIAIAEQAHAFAIAAQAJAAAEgEQAFgDgBgFQABgCgDgCIgGgDIgngKQgKgCgHgFQgHgFgFgHQgEgIgBgLQABgJAEgIQAEgJAIgFQAIgHALgDQAMgEANAAQAMAAAKACQAKADAHAEQAIAFAGAFIALAPIgpALQgGgMgRABQgIAAgEABQgEADAAAEQAAAEAHADIApAKQAJACAHAFQAJAFAEAIQAFAHAAAMQAAAIgEAJQgEAIgHAIQgJAGgMAFQgMAEgQAAQgcAAgQgKgAEJBiQgNgFgKgLQgKgKgEgMQgFgOgBgPQAAgPAGgOQAGgMAKgJQAJgLAOgFQAOgGAPAAQAQAAAOAGQANAEAKALQAKAJAFAMQAGAOAAAPIAAAPIhpAAQAEALAHAGQAJAFAMAAQAKAAAIgDQAGgFAFgGIAkAUQgMAPgPAIQgPAHgXAAQgSABgOgGgAFGANQgDgJgIgEQgIgFgKAAQgLAAgIAFQgIAFgEAIIA8AAIAAAAgAgBBlIAAiLIAsAAIAACLgAjRBlIAAhQQAAgMgFgGQgFgGgLABQgKgBgGAGQgHAGAAAPIAABNIgrAAIAAiLIArAAIAAAQQAHgJAJgFQAKgFAMAAQAYAAAOAPQANAOAAAZIAABYgAltBlIAAiLIAtAAIAACLgAgCg4QgGgIAAgMQAAgLAGgIQAHgHALAAQAMAAAIAHQAGAIAAALQAAAMgGAIQgIAGgMAAQgLAAgHgGgAlqg4QgGgIAAgMQAAgLAGgIQAIgHALAAQAMAAAIAHQAGAIAAALQAAAMgGAIQgIAGgMAAQgLAAgIgGg");
	this.shape.setTransform(-0.35,-0.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_inside, new cjs.Rectangle(-39.7,-19.1,78.5,38.2), null);


(lib.txt_better_04 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1140A0").s().p("ACxBdQgOgFgJgKQgKgLgFgNQgFgNAAgPQAAgQAGgLQAFgOAKgKQAKgKAOgFQANgGAQAAQAQAAANAGQAOAEAKAKQAJAKAGAOQAFAMAAAPIAAAQIhpAAQAEAKAIAFQAJAGAMAAQAKAAAHgDQAHgFAFgHIAjAVQgLAPgPAHQgPAJgYgBQgRAAgOgFgADuAIQgEgIgHgFQgIgFgLAAQgLAAgHAFQgIAFgEAIIA8AAIAAAAgABLBgQgJgDgGgHQgHgGgDgLQgDgKAAgQIAAgwIgZAAIAAgnIAZAAIAAgeIArgYIAAA2IAiAAIAAAnIgiAAIAAAtQAAALADADQADAEAGAAQAGAAAGgFIATAhQgHAGgKAEQgJACgLAAQgMAAgJgCgAgiBgQgJgDgGgHQgHgGgDgLQgDgKAAgQIAAgwIgZAAIAAgnIAZAAIAAgeIArgYIAAA2IAhAAIAAAnIghAAIAAAtQAAALADADQADAEAGAAQAGAAAFgFIATAhQgHAGgKAEQgIACgLAAQgMAAgJgCgAjFBdQgOgFgKgKQgJgLgFgNQgFgNAAgPQAAgQAFgLQAGgOAKgKQAJgKAOgFQAOgGAPAAQARAAANAGQANAEAKAKQAKAKAFAOQAGAMAAAPIAAAQIhpAAQAEAKAIAFQAIAGAMAAQALAAAHgDQAHgFAEgHIAkAVQgLAPgQAHQgPAJgXgBQgRAAgOgFgAiJAIQgDgIgIgFQgHgFgLAAQgLAAgIAFQgIAFgEAIIA8AAIAAAAgAElBgIAAiMIArAAIAAAUQAGgMAKgFQAKgFAOAAQAHAAAGABIALAFIgQAqQgDgCgFgBQgFgCgGAAQgNAAgIAGQgHAHAAARIAABFgAmPBgIAAi9IBLAAQAjAAARAOQASAOAAAbQAAANgGAIQgFAKgJAGQALAFAGAKQAGAKAAAOQAAAegTAOQgTAOgjAAgAliA4IAgAAQANAAAGgEQAGgFAAgKQAAgIgGgFQgGgFgOAAIgfAAgAligTIAhAAQAMAAAFgGQAFgEAAgIQAAgIgGgEQgFgEgMgBIggAAg");
	this.shape.setTransform(1.875,0.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_better_04, new cjs.Rectangle(-38.1,-9.7,80,39.5), null);


(lib.txt_better_03 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1140A0").s().p("ADWBdQgOgFgKgKQgJgLgFgNQgFgNAAgPQAAgQAFgLQAGgOAKgKQAJgKAOgFIAIgDIAjAjQgGgCgHAAQgLAAgIAFQgIAFgEAIIA8AAIAAgBIAhAiIheAAQAEAKAIAFQAIAGAMAAQALAAAHgDQAHgFAEgHIAkAVQgLAPgQAHQgPAJgXgBQgRAAgOgFgABwBgQgKgDgGgHQgGgGgEgLQgDgKAAgQIAAgwIgYAAIAAgnIAYAAIAAgeIArgYIAAA2IAjAAIAAAnIgjAAIAAAtQAAALAEADQADAEAGAAQAGAAAFgFIAUAhQgIAGgJAEQgKACgLAAQgLAAgJgCgAACBgQgJgDgGgHQgGgGgEgLQgDgKAAgQIAAgwIgYAAIAAgnIAYAAIAAgeIAqgYIAAA2IAjAAIAAAnIgjAAIAAAtQAAALAEADQADAEAGAAQAGAAAFgFIAUAhQgIAGgJAEQgKACgLAAQgLAAgJgCgAihBdQgOgFgJgKQgKgLgFgNQgFgNAAgPQAAgQAGgLQAFgOAKgKQAKgKAOgFQANgGAQAAQAQAAANAGQAOAEAKAKQAJAKAGAOQAFAMAAAPIAAAQIhpAAQAEAKAIAFQAJAGAMAAQAKAAAHgDQAHgFAFgHIAjAVQgLAPgPAHQgPAJgYgBQgRAAgOgFgAhkAIQgEgIgHgFQgIgFgLAAQgLAAgHAFQgIAFgEAIIA8AAIAAAAgAFKBgIAAghIAhAhgAlqBgIAAi9IBLAAQAjAAARAOQARAOAAAbQAAANgFAIQgFAKgJAGQALAFAGAKQAGAKAAAOQAAAegUAOQgTAOgiAAgAk+A4IAgAAQANAAAGgEQAGgFAAgKQAAgIgFgFQgGgFgPAAIgfAAgAk+gTIAhAAQAMAAAFgGQAFgEAAgIQAAgIgFgEQgFgEgMgBIghAAg");
	this.shape.setTransform(-1.775,0.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C8EBA").s().p("ACxBdQgOgFgJgKQgKgLgFgNQgFgNAAgPQAAgQAGgLQAFgOAKgKQAKgKAOgFQANgGAQAAQAQAAANAGQAOAEAKAKQAJAKAGAOQAFAMAAAPIAAAQIhpAAQAEAKAIAFQAJAGAMAAQAKAAAHgDQAHgFAFgHIAjAVQgLAPgPAHQgPAJgYgBQgRAAgOgFgADuAIQgEgIgHgFQgIgFgLAAQgLAAgHAFQgIAFgEAIIA8AAIAAAAgABLBgQgJgDgGgHQgHgGgDgLQgDgKAAgQIAAgwIgZAAIAAgnIAZAAIAAgeIArgYIAAA2IAiAAIAAAnIgiAAIAAAtQAAALADADQADAEAGAAQAGAAAGgFIATAhQgHAGgKAEQgJACgLAAQgMAAgJgCgAgiBgQgJgDgGgHQgHgGgDgLQgDgKAAgQIAAgwIgZAAIAAgnIAZAAIAAgeIArgYIAAA2IAhAAIAAAnIghAAIAAAtQAAALADADQADAEAGAAQAGAAAFgFIATAhQgHAGgKAEQgIACgLAAQgMAAgJgCgAjFBdQgOgFgKgKQgJgLgFgNQgFgNAAgPQAAgQAFgLQAGgOAKgKQAJgKAOgFQAOgGAPAAQARAAANAGQANAEAKAKQAKAKAFAOQAGAMAAAPIAAAQIhpAAQAEAKAIAFQAIAGAMAAQALAAAHgDQAHgFAEgHIAkAVQgLAPgQAHQgPAJgXgBQgRAAgOgFgAiJAIQgDgIgIgFQgHgFgLAAQgLAAgIAFQgIAFgEAIIA8AAIAAAAgAElBgIAAiMIArAAIAAAUQAGgMAKgFQAKgFAOAAQAHAAAGABIALAFIgQAqQgDgCgFgBQgFgCgGAAQgNAAgIAGQgHAHAAARIAABFgAmPBgIAAi9IBLAAQAjAAARAOQASAOAAAbQAAANgGAIQgFAKgJAGQALAFAGAKQAGAKAAAOQAAAegTAOQgTAOgjAAgAliA4IAgAAQANAAAGgEQAGgFAAgKQAAgIgGgFQgGgFgOAAIgfAAgAligTIAhAAQAMAAAFgGQAFgEAAgIQAAgIgGgEQgFgEgMgBIggAAg");
	this.shape_1.setTransform(1.875,0.15);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_better_03, new cjs.Rectangle(-38.1,-9.7,80,39.5), null);


(lib.txt_better_02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1140A0").s().p("ADWBdQgOgFgKgKQgJgLgFgNQgFgNAAgPQAAgQAFgLQAGgOAKgKQAJgKAOgFIAIgDIAjAjQgGgCgHAAQgLAAgIAFQgIAFgEAIIA8AAIAAgBIAhAiIheAAQAEAKAIAFQAIAGAMAAQALAAAHgDQAHgFAEgHIAkAVQgLAPgQAHQgPAJgXgBQgRAAgOgFgABwBgQgKgDgGgHQgGgGgEgLQgDgKAAgQIAAgwIgYAAIAAgnIAYAAIAAgeIArgYIAAA2IAjAAIAAAnIgjAAIAAAtQAAALAEADQADAEAGAAQAGAAAFgFIAUAhQgIAGgJAEQgKACgLAAQgLAAgJgCgAACBgQgJgDgGgHQgGgGgEgLQgDgKAAgQIAAgwIgYAAIAAgnIAYAAIAAgeIAqgYIAAA2IAjAAIAAAnIgjAAIAAAtQAAALAEADQADAEAGAAQAGAAAFgFIAUAhQgIAGgJAEQgKACgLAAQgLAAgJgCgAihBdQgOgFgJgKQgKgLgFgNQgFgNAAgPQAAgQAGgLQAFgOAKgKQAKgKAOgFQANgGAQAAQAQAAANAGQAOAEAKAKQAJAKAGAOQAFAMAAAPIAAAQIhpAAQAEAKAIAFQAJAGAMAAQAKAAAHgDQAHgFAFgHIAjAVQgLAPgPAHQgPAJgYgBQgRAAgOgFgAhkAIQgEgIgHgFQgIgFgLAAQgLAAgHAFQgIAFgEAIIA8AAIAAAAgAFKBgIAAghIAhAhgAlqBgIAAi9IBLAAQAjAAARAOQARAOAAAbQAAANgFAIQgFAKgJAGQALAFAGAKQAGAKAAAOQAAAegUAOQgTAOgiAAgAk+A4IAgAAQANAAAGgEQAGgFAAgKQAAgIgFgFQgGgFgPAAIgfAAgAk+gTIAhAAQAMAAAFgGQAFgEAAgIQAAgIgFgEQgFgEgMgBIghAAg");
	this.shape.setTransform(-1.775,0.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C8EBA").s().p("ACxBdQgOgFgJgKQgKgLgFgNQgFgNAAgPQAAgQAGgLQAFgOAKgKQAKgKAOgFQANgGAQAAQAQAAANAGQAOAEAKAKQAJAKAGAOQAFAMAAAPIAAAQIhpAAQAEAKAIAFQAJAGAMAAQAKAAAHgDQAHgFAFgHIAjAVQgLAPgPAHQgPAJgYgBQgRAAgOgFgADuAIQgEgIgHgFQgIgFgLAAQgLAAgHAFQgIAFgEAIIA8AAIAAAAgABLBgQgJgDgGgHQgHgGgDgLQgDgKAAgQIAAgwIgZAAIAAgnIAZAAIAAgeIArgYIAAA2IAiAAIAAAnIgiAAIAAAtQAAALADADQADAEAGAAQAGAAAGgFIATAhQgHAGgKAEQgJACgLAAQgMAAgJgCgAgiBgQgJgDgGgHQgHgGgDgLQgDgKAAgQIAAgwIgZAAIAAgnIAZAAIAAgeIArgYIAAA2IAhAAIAAAnIghAAIAAAtQAAALADADQADAEAGAAQAGAAAFgFIATAhQgHAGgKAEQgIACgLAAQgMAAgJgCgAjFBdQgOgFgKgKQgJgLgFgNQgFgNAAgPQAAgQAFgLQAGgOAKgKQAJgKAOgFQAOgGAPAAQARAAANAGQANAEAKAKQAKAKAFAOQAGAMAAAPIAAAQIhpAAQAEAKAIAFQAIAGAMAAQALAAAHgDQAHgFAEgHIAkAVQgLAPgQAHQgPAJgXgBQgRAAgOgFgAiJAIQgDgIgIgFQgHgFgLAAQgLAAgIAFQgIAFgEAIIA8AAIAAAAgAElBgIAAiMIArAAIAAAUQAGgMAKgFQAKgFAOAAQAHAAAGABIALAFIgQAqQgDgCgFgBQgFgCgGAAQgNAAgIAGQgHAHAAARIAABFgAmPBgIAAi9IBLAAQAjAAARAOQASAOAAAbQAAANgGAIQgFAKgJAGQALAFAGAKQAGAKAAAOQAAAegTAOQgTAOgjAAgAliA4IAgAAQANAAAGgEQAGgFAAgKQAAgIgGgFQgGgFgOAAIgfAAgAligTIAhAAQAMAAAFgGQAFgEAAgIQAAgIgGgEQgFgEgMgBIggAAg");
	this.shape_1.setTransform(1.875,0.15);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_better_02, new cjs.Rectangle(-38.1,-9.7,80,39.5), null);


(lib.txt_and = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003DA6").s().p("AHPBhQgHgHAAgLQAAgMAHgHQAHgIAMABQALgBAHAIQAHAHAAAMQAAALgHAHQgHAHgLAAQgMAAgHgHgADHBaQgOgPAAgbIAAhWIAtAAIAABOQAAAMAFAGQAGAHAKAAQAKAAAGgHQAGgGAAgOIAAhMIAtAAIAACKIgsABIAAgQQgHAJgJAFQgKAFgMAAQgYAAgNgOgAiaBjQgLgFgJgKQgJgJgGgNQgFgOAAgRQAAgRAFgOQAGgMAIgKQAJgJAMgFQAMgFANAAQANAAAKAFQAKAEAGAJIAAhQIArAAIAADMIgrAAIAAgRQgHAJgKAGQgKAFgNAAQgMAAgMgFgAiEABQgFADgFAEQgEAFgDAFQgCAGAAAGQAAAIACAFQADAGAEAEQAFAEAFADQAGADAHAAQAGAAAGgDQAGgDAEgEQAEgEADgGQACgFAAgIQAAgGgCgGQgDgFgEgFQgEgEgGgDQgGgBgGAAQgHAAgGABgAneBlQgJgDgGgGQgGgFgEgHQgDgJAAgJQAAgLAEgJQAFgJAIgGQAJgGALgDQAMgEAOAAIAhAAIAAgBQAAgIgGgFQgGgFgMgBQgKAAgHAFQgGACgEAHIgpgRQALgOAQgKQAQgIAZAAQAgAAARAPQARAOAAAbIAABWIgqAAIAAgTQgHAKgMAGQgNAGgQAAQgLAAgJgDgAnGAwQgGAEAAAGQAAAMARAAQAFAAAGgDIAJgEIAIgHQAEgEABgFIAAgCIgbAAQgMAAgFADgAGBBkQgJgCgGgHQgHgHgDgKQgDgLAAgQIAAgvIgZAAIAAgmIAZAAIAAgfIArgXIAAA2IAiAAIAAAmIgiAAIAAAtQAAALADAEQADADAGAAQAGAAAGgFIATAhQgHAGgKADQgJADgLAAQgMAAgJgDgABABiQgOgGgKgKQgKgKgFgNQgGgNAAgPQAAgPAGgOQAFgMAKgJQAKgLAOgFQAOgGAQAAQAQAAAOAGQAOAFAKALQAKAJAGAMQAGAOAAAPQAAAPgGANQgGANgKAKQgKAKgNAGQgOAGgRgBQgQABgOgGgABSABQgGADgEAEQgEAFgDAFQgCAGAAAGQAAAIACAFQADAGAEAEQAEAEAGADQAGADAGAAQAHAAAGgDQAGgDAEgEQAEgEADgGQACgFAAgIQAAgGgCgGQgDgFgEgFQgEgEgGgDQgGgBgHAAQgGAAgGABgAkDBlIAAhQQAAgMgFgGQgGgGgLABQgJgBgGAGQgHAGAAAPIAABNIgsAAIAAiLIAsAAIAAAQQAHgJAJgFQAKgFAMAAQAXAAAOAPQAOAOAAAZIAABYg");
	this.shape.setTransform(27.875,-0.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_and, new cjs.Rectangle(-25.6,-19.1,106.30000000000001,38.2), null);


(lib.txt_Addition = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003DA6").s().p("AGYBjQgMgFgJgKQgIgJgGgOQgFgNgBgRQABgRAFgNQAGgNAIgKQAJgJAMgFQAMgFAMAAQAOAAAKAEQAKAGAGAIIAAhQIArAAIAADMIgrAAIAAgRQgHAJgKAGQgKAFgNAAQgMAAgMgFgAGuACQgFACgFAEQgEAEgDAGQgCAGAAAGQAAAHACAGQADAFAEAFQAFAEAFACQAGADAGABQAHgBAGgDQAGgCAEgEQAEgFADgFQACgGAAgHQAAgGgCgGQgDgGgEgEQgEgEgGgCQgGgCgHAAQgGAAgGACgAD2BjQgMgFgJgKQgJgJgFgOQgGgNAAgRQAAgRAGgNQAFgNAIgKQAKgJAMgFQALgFANAAQAOAAAJAEQAKAGAGAIIAAhQIArAAIAADMIgqAAIAAgRQgHAJgKAGQgLAFgNAAQgMAAgLgFgAELACQgFACgEAEQgFAEgDAGQgBAGAAAGQAAAHABAGQADAFAFAFQAEAEAFACQAGADAHABQAGgBAHgDQAFgCAFgEQADgFADgFQACgGABgHQgBgGgCgGQgDgGgDgEQgFgEgFgCQgHgCgGAAQgHAAgGACgABQBlQgIgDgGgFQgHgGgEgIQgDgHAAgKQAAgLAFgJQAEgJAJgGQAIgGALgDQAMgEAOAAIAhAAIAAgBQAAgJgGgEQgGgFgMAAQgKAAgHADQgGADgEAHIgpgSQALgNARgJQAQgJAYAAQAgAAARAPQARAPAAAaIAABWIgqAAIAAgSQgHAJgMAGQgNAGgQAAQgLAAgJgDgABoAwQgFAEgBAGQAAALARAAQAFAAAGgCIAJgEIAIgHQAEgEACgEIAAgDIgbAAQgNAAgFADgAtLBaQgOgQAAgaIAAhXIAtAAIAABPQAAAMAGAGQAFAHAKAAQALAAAFgHQAHgGAAgOIAAhNIAsAAIAACMIgsAAIAAgQQgHAJgJAFQgJAFgMAAQgZAAgNgOgAMuBiQgOgGgKgJQgKgKgFgOQgGgNABgPQgBgQAGgMQAFgNAKgKQAKgKAOgFQAOgGAQAAQAQAAAOAGQAOAFAKAKQAKAKAGANQAGAMAAAQQAAAPgGANQgFAOgLAKQgKAJgNAGQgOAFgRAAQgQAAgOgFgANBACQgHACgEAEQgEAEgCAGQgDAGAAAGQAAAHADAGQACAFAEAFQAEAEAHACQAFADAGABQAIgBAFgDQAGgCAFgEQAEgFACgFQADgGAAgHQAAgGgDgGQgCgGgEgEQgFgEgGgCQgFgCgIAAQgGAAgFACgAKFBlQgKgDgGgHQgHgGgDgLQgDgKAAgQIAAgwIgYAAIAAgnIAYAAIAAgeIArgYIAAA2IAiAAIAAAnIgiAAIAAAtQAAALAEADQACAEAHAAQAFAAAGgFIATAhQgHAGgKAEQgJACgLAAQgLAAgJgCgAlYBiQgPgFgJgKQgKgLgEgNQgGgNAAgPQABgQAFgMQAGgNAJgKQAKgKAOgFQAOgGAPAAQARAAANAGQANAEAKAKQAJAKAGANQAGANgBAPIAAAQIhoAAQAEAKAHAFQAJAGAMAAQALAAAGgDQAIgFAEgHIAkAVQgMAPgPAHQgPAJgYgBQgQAAgOgFgAkcANQgEgJgHgEQgIgFgLAAQgKAAgIAFQgIAEgEAJIA8AAIAAAAgAvwBgQgRgIgNgNQgNgNgIgRQgIgTABgUQgBgTAIgSQAIgSANgNQANgNARgIQASgHAUgBQAUABATAHQARAIANANQANANAIASQAHASAAATQAAAUgHATQgIARgNANQgNANgRAIQgSAHgVAAQgUAAgSgHgAvegqQgJAFgIAGQgGAIgEAJQgEAKAAAKQAAALAEAKQAEAJAGAHQAIAHAJAFQAJAEALAAQAMAAAJgEQAJgFAIgHQAGgHAFgJQADgKAAgLQAAgKgDgKQgFgJgGgIQgIgGgJgFQgKgEgLAAQgKAAgKAEgAP/BlIAAhQQAAgLgGgHQgFgFgLgBQgKABgFAFQgHAHAAAOIAABNIgsAAIAAiMIAsAAIAAARQAHgJAJgFQAJgFAMAAQAYAAAOAPQAOAOAAAZIAABYgALFBlIAAiMIAtAAIAACMgAIWBlIAAiMIAtAAIAACMgAhcBlIgdhQIgcBQIgqAAIgsiMIAsAAIAYBQIAchQIAlAAIAcBQIAZhQIAsAAIgvCMgAnABlIAAhQQAAgLgEgHQgGgFgLgBQgJABgHAFQgGAHAAAOIAABNIgsAAIAAiMIAsAAIAAARQAHgJAJgFQAKgFAMAAQAXAAAOAPQANAOAAAZIAABYgArBBlIAAiMIArAAIAAAUQAGgMAJgFQALgFANAAQAIAAAFABIAMAFIgQAqQgDgCgGgCQgEgCgGAAQgNAAgIAHQgIAHABARIAABFgALJg5QgHgHAAgMQAAgLAHgIQAHgHAMAAQAMAAAHAHQAHAIAAALQAAAMgHAHQgHAIgMgBQgMABgHgIgAIZg5QgHgHAAgMQAAgLAHgIQAHgHAMAAQALAAAIAHQAHAIAAALQAAAMgHAHQgIAIgLgBQgMABgHgIg");
	this.shape.setTransform(-0.2,-11.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_Addition, new cjs.Rectangle(-109.9,-29.7,219.3,38.2), null);


(lib.image_02_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.image_02();
	this.instance.setTransform(-250,-292);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_02_1, new cjs.Rectangle(-250,-292,500,584), null);


(lib.image_01_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.image_01();
	this.instance.setTransform(-250,-239);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_01_1, new cjs.Rectangle(-250,-239,500,478), null);


(lib.gradient = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.gradient_img();
	this.instance.setTransform(-250,-121);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.gradient, new cjs.Rectangle(-250,-121,500,242), null);


(lib.gradent_CTA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(201,201,198,0.298)","rgba(201,201,198,0)"],[0,0.608],-125.1,0,125.2,0).s().p("AziH1IPpvpIXdAAIAAPpg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.gradent_CTA, new cjs.Rectangle(-125.1,-50,250.3,100.1), null);


(lib.cta_BG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(-220,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_BG, new cjs.Rectangle(-220,-70,456,156), null);


(lib.BSWH_Logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1140A0").s().p("AgNAOQgGgFAAgJQAAgIAGgFQAFgGAIAAQAIAAAGAGQAGAFAAAIQAAAJgGAFQgGAGgIAAQgIAAgFgGgAgLgLQgEAFAAAGQAAAHAEAFQAFAFAGgBQAHABAEgFQAFgFAAgHQAAgGgFgFQgEgFgHABQgGgBgFAFgAAGAMIgGgKIgDAAIAAAKIgEAAIAAgXIAIAAQAIABAAAGQAAAEgGACIAHAKgAgDgBIADAAQAFABAAgEQAAgEgFAAIgDAAg");
	this.shape.setTransform(3.275,-22.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1140A0").s().p("AhNjhICbAAIAAEnIibCcg");
	this.shape_1.setTransform(9.025,-81.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C8EBA").s().p("AiZBOICbibICYAAIAACbg");
	this.shape_2.setTransform(16.65,-66.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F5B846").s().p("AhNAAIAAiZICbAAIAAEzg");
	this.shape_3.setTransform(-8.55,-74.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1140A0").s().p("AjhBOIAAibIEnAAICcCbg");
	this.shape_4.setTransform(-23.35,-66.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F5B846").s().p("AhNCaIAAkzICbCbIAACYg");
	this.shape_5.setTransform(9.025,-41.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1140A0").s().p("AhFBOIicibIHDAAIAACbg");
	this.shape_6.setTransform(23.825,-49.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1140A0").s().p("AhNDiIAAknICbicIAAHDg");
	this.shape_7.setTransform(-8.55,-34.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3C8EBA").s().p("AiZBOIAAibIEzAAIibCbg");
	this.shape_8.setTransform(-16.175,-49.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3C8EBA").s().p("AgjApQgPgQAAgZQAAgXAPgQQAOgRAYAAQARAAAOAKQANALACARIgXAAQgCgIgGgFQgGgFgJAAQgKABgGAFQgHAFgDAIQgDAJAAAIQAAAQAIAKQAHALAOAAQAMAAAGgGQAHgGABgLIgYAAIAAgRIAuAAIAAA5IgQAAIgCgMQgLAPgTAAQgYAAgOgQg");
	this.shape_9.setTransform(25.775,98.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3C8EBA").s().p("AAWA2IgshIIgBAAIAABIIgWAAIAAhsIAYAAIAsBJIABAAIAAhJIAWAAIAABsg");
	this.shape_10.setTransform(13.25,98.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3C8EBA").s().p("AgLA2IAAhsIAXAAIAABsg");
	this.shape_11.setTransform(4.15,98.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3C8EBA").s().p("AgNA2IgjhsIAYAAIAYBNIAAAAIAZhNIAYAAIgkBsg");
	this.shape_12.setTransform(-4.125,98.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3C8EBA").s().p("AAXA2IgCgHIgCgSQAAgJgFgEQgFgEgIAAIgXAAIAAAqIgYAAIAAhsIA6AAQAOABAJAIQAIAJAAANQAAAVgRAFIAAABQAPAEACAVIAAAEIAAALIACAGIACAEgAgWgEIAZAAQAQAAAAgQQAAgPgQAAIgZAAg");
	this.shape_13.setTransform(-15.5,98.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3C8EBA").s().p("AgLA2IAAhsIAXAAIAABsg");
	this.shape_14.setTransform(-24.7,98.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1140A0").s().p("AAgBMIgDgKIgCgaQgCgNgGgFQgFgGgMAAIghAAIAAA8IghAAIAAiXIBRAAQAUAAAMAMQAMAOAAAQQAAAcgYAJIAAAAQAUAGACAeIABAPIADAPIACAGgAgfgGIAkAAQAXgBAAgVQAAgVgXAAIgkAAg");
	this.shape_15.setTransform(104.425,65.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1140A0").s().p("Ag5BMIAAiXIBxAAIAAAcIhPAAIAAAhIBIAAIAAAZIhIAAIAAAlIBRAAIAAAcg");
	this.shape_16.setTransform(87.775,65.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1140A0").s().p("AgQBMIAAh7IgtAAIAAgcIB7AAIAAAcIgtAAIAAB7g");
	this.shape_17.setTransform(71.925,65.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1140A0").s().p("AAfBMIg+hkIgBAAIAABkIgfAAIAAiXIAhAAIA+BlIAAhlIAgAAIAACXg");
	this.shape_18.setTransform(55.45,65.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1140A0").s().p("Ag5BMIAAiXIBxAAIAAAcIhPAAIAAAhIBIAAIAAAZIhIAAIAAAlIBRAAIAAAcg");
	this.shape_19.setTransform(38.9,65.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1140A0").s().p("AgyA5QgUgXAAghQAAgjAUgWQAVgWAhAAQAZAAATAOQASAPADAZIggAAQgBgLgKgIQgJgHgNAAQgOAAgJAHQgKAIgDALQgEAKAAAPQAAAVAKAPQAKAPAUgBQAPAAAJgJQAJgKABgPIAhAAQgDAdgSAQQgSASgcgBQghAAgVgWg");
	this.shape_20.setTransform(21.675,65.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1140A0").s().p("Ag1BMIAAiXIAiAAIAAB7IBJAAIAAAcg");
	this.shape_21.setTransform(-2.125,65.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1140A0").s().p("AAoBMIgMgiIg3AAIgMAiIgiAAIA5iXIAiAAIA4CXgAgTARIAnAAIgUg3IAAAAg");
	this.shape_22.setTransform(-18.375,65.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1140A0").s().p("AgxA5QgVgWAAgiQAAgjAVgWQAUgWAhAAQAaAAASAOQASAPADAZIggAAQgCgLgJgIQgKgHgMAAQgNAAgKAHQgKAIgDALQgEALAAAOQAAAWAKAOQALAPATgBQAQAAAHgJQAJgIADgRIAfAAQgCAdgSAQQgSASgcgBQghAAgUgWg");
	this.shape_23.setTransform(-35.65,65.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1140A0").s().p("AgQBMIAAiXIAhAAIAACXg");
	this.shape_24.setTransform(-48.775,65.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1140A0").s().p("AhCBMIAAiXIBCAAQAdAAATATQATATAAAlQAAAigSAVQgRAVggAAgAghAwIAeAAQAOAAAMgLQALgMAAgWQAAgYgKgNQgLgNgWAAIgYAAg");
	this.shape_25.setTransform(-61.6,65.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1140A0").s().p("Ag5BMIAAiXIBxAAIAAAcIhPAAIAAAhIBIAAIAAAZIhIAAIAAAlIBQAAIAAAcg");
	this.shape_26.setTransform(-78.45,65.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1140A0").s().p("AAyBMIAAhqIAAAAIglBqIgZAAIglhqIgBAAIAABqIgfAAIAAiXIAvAAIAjBoIAAAAIAihoIAvAAIAACXg");
	this.shape_27.setTransform(-97.425,65.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1140A0").s().p("AgqB0QgVgLgOgSQgZghAAgtQgBg3AigoQAigoA0AAQAmAAAZAWQAXAVAAAdQAAAJgDAGQgCAFghAAIhuAAQgMgBgDADQgCACAAAMQAAAvAaAeQAcAiAtAAQAQAAAMgGQAOgGANgRQAFgBADACQADACABAEQgOAcgdAPQgZANgbAAQgbAAgYgLgAgjhZQgTARgBAQQAAAEAEAAIArAAQA1AAAIgHQAEgBAAgKQAAgPgKgLQgMgMgYAAQgYAAgWATg");
	this.shape_28.setTransform(200.85,25.65);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1140A0").s().p("AgiB9QgMgPAAgfIAAiJQAAgMgCgCQgCgDgJAAIgRAAQgCgCgBgEQgBgEACgDQAbgHAMgLQAOgNALgXQAJgDAEAGIAAAbQAAAIABACQABACAIAAIBCAAQAGADgBAKQAAAJgEADIhEAAQgIAAAAADQgCACAAAJIAABvQAAAhAGAOQAKAVAbAAQAJAAAHgDQAGgDAJgGQAEAAACAEQABAEgBADQgJALgPAHQgSAJgVAAQgjAAgOgTg");
	this.shape_29.setTransform(181.4854,23.95);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1140A0").s().p("AAACxQghAAgXACQgDgBAAgGQgBgGADgCIANgCQAQgCAEgJQADgIAAghIAAhqQAAgRgCgFQgDgGgMgIIgFgDQgCgCAAgEQABgEACgCQAKgDAVgKQAUgKAKgGQAEAAACAEQgDAjAAAnIAABsQAAAhAEAIQADAJAQACIANACQADADgBAFQAAAGgEABQgYgCggAAgAgah8QgIgJAAgNQAAgOAJgJQAJgJAOAAQANAAAIAKQAJAIAAANQAAAQgKAIQgIAIgNAAQgOgBgJgIg");
	this.shape_30.setTransform(165.625,19.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#1140A0").s().p("ABQDWQgiAAgWACQgDgBAAgGQgBgGADgCIAMgCQARgCADgJQADgIAAghIAAhWQAAgegOgRQgPgQgcAAQgbAAgTAPQgIAHgCAFQgDAFAAAQIAABlQAAAhAEAIQADAJAQACIANACQADACgBAGQAAAGgDABQgYgCghAAQghAAgaACQgDgBAAgGQgBgGADgCIAPgCQAQgCAEgJQADgHAAgiIAAkPQAAgcgDgHQgCgHgGACIgOgNIgLgDQgCgBgBAAQgCAAAAAAQAAgBAAAAQAAAAABAAQAeAAAUgMQAMgGASgPQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQgCAkAAAmIAAB/QAAAJADABQApgeAnAAQAoAAAUAXQASATAAAiIAABlQAAAhADAIQAEAJAPACIARACQADACgBAGQAAAGgDABQgegCgfAAg");
	this.shape_31.setTransform(143.634,16.075);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#1140A0").s().p("ABQDLQgMgigYg4IgkhRQgzBogYBDQgCABgFAAIgJgBIiclcQgLgWgGgHQgKgMgRgCIgPgBQgCgDAAgFQABgFADgBQAZABAlABQAlgBAggBQAEABAAAFQAAAFgDADIgOABQgUACAAAIQAAALAgBGQAhBKBHCVQAbg4ATgpQAKgVAAgDQAAgFgFgKQgVgxgthgQgIgPgHgIQgKgIgOgCIgOgBQgEgEABgEQAAgFAEgBQAaABAmABQAugBATgBQAEABAAAFQAAAEgCAEIgPABQgSACgCAFQgCAGAJAUQASArAcA+QATgnAQgnQAQgmgBgLQAAgKgQgBIgSgBQgDgEABgFQAAgEAEgBQAYABAgABQAmgBAUgBQADABABAFQAAAEgDAEIgRABQgRABgMARIgVAkQgSAhgdA/QgFAKAAAEQAAAEAEAKIA+CIQAehEAYg6QAhhPAPgoQASgxAAgFQAAgOgUgBIgRgBQgEgEAAgEQAAgFAEgBIA6ACQAhgBAXgBQADABABAFQAAAEgDAEIgLABQgVACgNAVQgIAMgeBGIgsBkQgoBdgjBdQgDABgEAAQgFAAgEgBg");
	this.shape_32.setTransform(105.0744,18.05);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1140A0").s().p("AiOCGQglgfAAguQAAhCBFgdQgYgZAAgbQABgfAVgWQAWgVAgAAQAWAAARAMQARANAAATQAAAUgQANQgNAKgMAAQgMAAAHgKIAFgIQADgJgDgKQgDgJgIgGQgJgHgNgBQgQgBgLAKQgMAJAAAPQAAAPALALQAMAMAfARQAzAbAWAUQAmAgAaA2QAUgZAAggQAAgYgOgQQgHgJgOgDQgRgBgNALQgEADgEgCQgFgCABgMQACgPAPgKQAPgKAWAAQAJAAAVAEQARADAGAAQAKAAAFgGIADgCQAFAAACAEQgBARgJAKQgKALgWAFQAJARAAAVQAAAqghAlQAOAZAPAKQAPAKAWAAQAJAAAGgCIAKgCQAEAAAAAEQAAAIgRAGQgRAFgYAAQgXAAgPgGQgPgGgUgSQgeASgVAGQgXAHgaAAQg2AAglgfgAiFAWQABAvAhAjQAhAiArAAQARAAAMgDQAMgEATgKQgNgPgNgTIgLgSQgXgggXgXQgOgNgYgRIgNgKQgkAIAAAog");
	this.shape_33.setTransform(65.75,21.525);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#1140A0").s().p("AgiB9QgMgPAAgfIAAiJQAAgMgCgCQgCgDgJAAIgRAAQgCgCgBgEQgBgEACgDQAbgHAMgLQAOgNALgXQAJgDAEAGIAAAbQAAAIABACQABACAIAAIBCAAQAFADAAAKQAAAJgEADIhEAAQgIAAAAADQgCACAAAJIAABvQAAAhAGAOQAKAVAbAAQAJAAAHgDQAGgDAJgGQAEAAACAEQABADgBAEQgYAbgnAAQgjAAgOgTg");
	this.shape_34.setTransform(34.4833,23.95);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#1140A0").s().p("AgjB9QgMgPAAgfIAAiJQAAgMgBgDQgCgCgJAAIgRAAQgDgCAAgEQgBgEACgDQAbgIAMgLQANgLAMgYQADgBADAAQAFABACADIAAAbQAAAIABACQABABAHAAIBDAAQAFAEAAAKQAAAJgEADIhEAAQgIAAAAACQgCACAAAKIAABvQAAAgAGAPQAKAUAbAAQAJAAAHgDQAGgCAJgGQADAAACAEQACADgBADQgYAcgnAAQgjAAgPgTg");
	this.shape_35.setTransform(16.32,23.9667);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#1140A0").s().p("AhZBdQgjgiAAg4QAAg3AlglQAlglA1AAQAzAAAjAiQAkAkAAA2QAAA5gjAkQgkAkg3AAQg1AAgjgigAg1hQQgTAbAAAxQAAAsATAhQAVAkAkAAQAlAAASgiQAOgbAAgpQAAgsgRggQgVgngmAAQgfAAgTAcg");
	this.shape_36.setTransform(-6.825,25.65);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1140A0").s().p("AhJBgQgjgiAAg3QAAg0AjgmQAogrBGAAQAeAAAXALQAJAGAAARQAAAJgEAGQgEAIgFAAQgFAAgEgFQgKgNgPgJQgRgKgSABQgggBgYAZQgaAbAAAuQABAmAYAdQAbAiAtAAQAXAAASgKQANgJAMgRQAEAAADACQADADABADQgOAggfAQQgaAOgeAAQgxAAgggfg");
	this.shape_37.setTransform(-30.95,25.65);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#1140A0").s().p("AhmC6QgFgKgFgbQgFgZgBgXQACgDAFAAQAFgBACADQAbBaBNAAQAjgBAUgUQATgUAAgdQAAgYgIgRQgLgXgegUIg5gkQhAgrAAg9QAAgsAggdQAigeA3AAQAcAAAcAIQANADAIAAQAEAMAEAVQADAWAAATQgCACgFACQgGAAgCgDQgIgcgOgRQgVgWgnAAQgmAAgTAWQgNASAAAaQAAArAzAfIAvAfQBLAtAABFQAAAygjAfQgjAeg5AAQg3AAgngWg");
	this.shape_38.setTransform(-57.525,17.65);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#1140A0").s().p("AgcB+QgiAAgWACQgDgBAAgGQgBgGADgCIAMgCQAQgCAEgJQADgIAAghIAAhpQAAgSgCgFQgDgGgMgIIgFgDQgCgCAAgEQAAgEACgCQAKgCAUgLIAfgQQAFABAAAEIAAAjQAAAEACAAQAVgSAKgGQATgMAPAAQALAAAIAIQAIAGAAALQAAANgJAIQgIAGgJABQgFgBgIgEQgOgKgNAAQgMAAgJANQgHAKAAAkIAABRQAAAhAEAJQADAIAQACIAWACQADACgBAGQAAAGgDABQgmgCgcAAg");
	this.shape_39.setTransform(-79.7286,24.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#1140A0").s().p("AhYBdQgkgiAAg4QAAg3AlglQAlglA1AAQAzAAAjAiQAkAkAAA2QAAA5gjAkQgkAkg3AAQg1AAgigigAg1hQQgTAbAAAxQAAAsATAhQAVAkAkAAQAlAAASgiQAOgbAAgpQAAgsgRggQgVgngmAAQgfAAgTAcg");
	this.shape_40.setTransform(-103.875,25.65);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#1140A0").s().p("AAADWQghAAgYACQgDgBgBgGQAAgGADgCIANgCQARgCADgJQADgIAAghIAAkPQAAgcgCgGQgDgJgNgHIgGgDQgCgCAAgFQAAgEACgCQAtgPATgKQAEAAACAEQgCAkAAAmIAAEcQAAAhADAIQAEAJAQACIAOACQADADAAAFQgBAGgDABQgbgCgfAAg");
	this.shape_41.setTransform(-124.275,16.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#1140A0").s().p("AhvC1QgGgHAAgMQAAgLAHgHQAGgGALAAIALAAQANAAAHgKQAVggAJgYQAGgSAAgHQAAgNgLgdIguiAQgKgagEgGQgIgMgOgCIgPgDQgDgDABgFQAAgGAEgBIA5ABIA0gBQAEABAAAGQABAFgEADIgPADQgNACAAAFQAAAHASAyIATA3QAOAqACABQAEgCATgrIAUgvQAVgyAAgKQAAgIgOgCIgTgDQgDgDAAgFQABgGADgBIA1ABIAugBQADABABAGQAAAFgDADIgKABQgOADgMAOQgJANgQAiIgiBFQg4B1gkBRQgNAcgaAAQgMAAgIgHg");
	this.shape_42.setTransform(-141.6506,32.475);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#1140A0").s().p("AAYBtQgGgJgEAAQgCAAgHADIgNAJIgVAKQgMAFgLAAQgaAAgQgOQgSgQAAgaQAAgSAKgLQAMgMAcgKIBGgZQAHgCACgFQABgDAAgIIABgbQABgVgJgOQgLgRgYgBQgOABgLAGQgNAHAAANQgCARgEAEQgPAMgUAAQgIAAAAgJQAAgXAngaQAngZAhAAQAgAAAQATQAQASgCAhIgDBoQgDA0AeABQAHgBAIgDIAIgFQAEAAAAAJQAAAEgOAKQgRAMgTAAQgZAAgOgSgAgNAUQgdAJgLAJQgNAKAAAQQAAALAHALQALAOAUAAQAIAAAMgFQAKgFAFgFQAFgFACgHIABgRIACgjQAAgIgHAAQgIAAgPAHg");
	this.shape_43.setTransform(-164.825,25.65);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#1140A0").s().p("AhMDGIhFACQgDgBgBgGQAAgFADgDIALgCQAXgEAFgMQAFgKAAgxIAAjjQAAgkgFgJQgFgMgUgCIgTgCQgEgCABgGQAAgFADgCQAygEBQAAQBDAAAhAQQAuAXAAA1QgBAegQAVQgPARgeAOQAAAHALACQAfAFAWAWQAcAdAAArQAAA2gnAfQgqAghNAAIhJgCgAgvgBQgGABAAAKIAABZQAAAzAMAPQAOAQAhAAQArAAAYgTQAbgWAAgrQAAgrgXgaQgfghhAAAQgXAAgGAEgAgsixQgJADAAAMIAAB7QAAAMAEADQAEACAXgBQAwgCAVgQQAYgSAAgpQAAgpgbgVQgYgTglAAQgUAAgHAEg");
	this.shape_44.setTransform(-195.6,17.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BSWH_Logo, new cjs.Rectangle(-211.1,-104.3,422.29999999999995,208.7), null);


(lib.txt_01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// txt_Addition
	this.instance = new lib.txt_Addition();
	this.instance.setTransform(0.05,-14.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-4.15,alpha:1},13,cjs.Ease.quadOut).wait(132));

	// txt_is
	this.instance_1 = new lib.txt_is();
	this.instance_1.setTransform(0.05,-8.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({y:-0.95,alpha:1},15,cjs.Ease.quadOut).wait(125));

	// txt_Better
	this.instance_2 = new lib.txt_better_02();
	this.instance_2.setTransform(-40.3,14.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(33).to({_off:false},0).wait(112));

	// Layer_8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_20 = new cjs.Graphics().p("AhvBpIjTjRIKFAAIAADRg");
	var mask_graphics_21 = new cjs.Graphics().p("AhvBpIjTjRIKFAAIAADRg");
	var mask_graphics_22 = new cjs.Graphics().p("AhvBpIjTjRIKFAAIAADRg");
	var mask_graphics_23 = new cjs.Graphics().p("AhvBpIjTjRIKFAAIAADRg");
	var mask_graphics_24 = new cjs.Graphics().p("AhvBpIjTjRIKFAAIAADRg");
	var mask_graphics_25 = new cjs.Graphics().p("AhvBpIjTjRIKFAAIAADRg");
	var mask_graphics_26 = new cjs.Graphics().p("AhvBpIjTjRIKFAAIAADRg");
	var mask_graphics_27 = new cjs.Graphics().p("AhvBpIjTjRIKFAAIAADRg");
	var mask_graphics_28 = new cjs.Graphics().p("AhvBpIjTjRIKFAAIAADRg");
	var mask_graphics_29 = new cjs.Graphics().p("AhvBpIjTjRIKFAAIAADRg");
	var mask_graphics_30 = new cjs.Graphics().p("AhvBpIjTjRIKFAAIAADRg");
	var mask_graphics_31 = new cjs.Graphics().p("AhvBpIjTjRIKFAAIAADRg");
	var mask_graphics_32 = new cjs.Graphics().p("AhvB/IjTjRIKFgBIAADSg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(20).to({graphics:mask_graphics_20,x:29.325,y:14.825}).wait(1).to({graphics:mask_graphics_21,x:25.075,y:14.825}).wait(1).to({graphics:mask_graphics_22,x:21.175,y:14.825}).wait(1).to({graphics:mask_graphics_23,x:17.625,y:14.825}).wait(1).to({graphics:mask_graphics_24,x:14.475,y:14.825}).wait(1).to({graphics:mask_graphics_25,x:11.725,y:14.825}).wait(1).to({graphics:mask_graphics_26,x:9.325,y:14.825}).wait(1).to({graphics:mask_graphics_27,x:7.275,y:14.825}).wait(1).to({graphics:mask_graphics_28,x:5.575,y:14.825}).wait(1).to({graphics:mask_graphics_29,x:4.275,y:14.825}).wait(1).to({graphics:mask_graphics_30,x:3.375,y:14.825}).wait(1).to({graphics:mask_graphics_31,x:2.825,y:14.825}).wait(1).to({graphics:mask_graphics_32,x:2.625,y:12.675}).wait(1).to({graphics:null,x:0,y:0}).wait(112));

	// txt_Better
	this.instance_3 = new lib.txt_better_03();
	this.instance_3.setTransform(-40.3,14.6);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20).to({_off:false},0).to({_off:true},13).wait(112));

	// txt_Better
	this.instance_4 = new lib.txt_better_04();
	this.instance_4.setTransform(-40.3,7.35);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({y:14.6,alpha:1},11,cjs.Ease.quadOut).to({_off:true},13).wait(112));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.9,-36.3,213.5,60.9);


(lib.cta_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.txt_learnMore();
	this.instance.setTransform(0.5,0.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},12).wait(66).to({_off:true},1).wait(26));

	// Layer_5
	this.instance_1 = new lib.gradent_CTA();
	this.instance_1.setTransform(195.95,0);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:74.85,alpha:1},17,cjs.Ease.quadOut).wait(61).to({_off:true},1).wait(26));

	// _Path__1
	this.instance_2 = new lib.cta_BG();
	this.instance_2.setTransform(0,0.1);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},12).wait(66).to({_off:true},1).wait(26));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-220,-69.9,541.1,156);


// stage content:
(lib.BSWH_IrvingFacility_300x600_v02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [263];
	// timeline functions:
	this.frame_263 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(263).call(this.frame_263).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,2,0,3).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(264));

	// learn_more_btn
	this.instance = new lib.cta_btn("synched",0);
	this.instance.setTransform(148.6,557.55,0.3627,0.3627);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(185).to({_off:false},0).wait(79));

	// BSWH_Logo
	this.instance_1 = new lib.BSWH_Logo();
	this.instance_1.setTransform(150.1,469.5,0.5114,0.5114,0,0,0,0.1,0.1);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},10).wait(254));

	// angle_shape
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgdsA5CMAAAhkUMA7ZgNwMAAAByEg");
	this.shape_1.setTransform(140.05,713.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("EgdsA5CMAAAhkTMA7ZgNwMAAAByDg");
	this.shape_2.setTransform(140.05,708.65);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("EgdsA5CMAAAhkTMA7ZgNxMAAAByEg");
	this.shape_3.setTransform(140.05,695.35);
	this.shape_3._off = true;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("EgdsA5DMAAAhkVMA7ZgNwMAAAByFg");
	this.shape_4.setTransform(140.05,642.1);
	this.shape_4._off = true;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("EgdsA5DMAAAhkVMA7ZgNvMAAAByEg");
	this.shape_5.setTransform(140.05,553.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("EgdsA5DMAAAhkUMA7ZgNwMAAAByEg");
	this.shape_6.setTransform(140.05,677.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{y:713.1}}]}).to({state:[{t:this.shape_1,p:{y:713.1}}]},98).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_1,p:{y:673.15}}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5,p:{y:553.3}}]},1).to({state:[{t:this.shape_5,p:{y:495.6}}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5,p:{y:389.05}}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},4).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5,p:{y:657.6}}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1,p:{y:713.1}}]},1).wait(134));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(99).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false,y:349.1},0).wait(1).to({y:318.05},0).to({_off:true},1).wait(2).to({_off:false,y:278.1},0).wait(4).to({_off:true},1).wait(4).to({_off:false,y:533.35},0).wait(1).to({y:571.05},0).wait(1).to({y:604.35},0).to({_off:true},1).wait(5).to({_off:false,y:710.9},0).to({_off:true},1).wait(134));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(100).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false,y:295.85},0).to({_off:true},1).wait(7).to({_off:false,y:393.5},0).to({_off:true},1).wait(1).to({_off:false,y:491.15},0).to({_off:true},1).wait(6).to({_off:false,y:693.1},0).to({_off:true},1).wait(136));
	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(102).to({_off:false},0).wait(1).to({y:602.15},0).to({_off:true},1).wait(2).to({_off:false,y:437.9},0).to({_off:true},1).wait(4).to({_off:false,y:282.55},0).to({_off:true},1).wait(5).to({_off:false,y:338},0).to({_off:true},1).wait(1).to({_off:false,y:444.55},0).to({_off:true},1).wait(4).to({_off:false,y:633.2},0).to({_off:true},1).wait(3).to({_off:false,y:704.2},0).to({_off:true},1).wait(135));

	// txt_01
	this.instance_2 = new lib.txt_01("synched",0,false);
	this.instance_2.setTransform(148.05,74.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(23).to({_off:false},0).wait(241));

	// txt_inside
	this.instance_3 = new lib.txt_inside();
	this.instance_3.setTransform(193.7,89.35);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(112).to({_off:false},0).wait(152));

	// txt_and
	this.instance_4 = new lib.txt_and();
	this.instance_4.setTransform(66.55,117.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(112).to({_off:false},0).wait(152));

	// gradient
	this.instance_5 = new lib.gradient();
	this.instance_5.setTransform(150.2,92.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(112).to({_off:false},0).wait(152));

	// white_fade
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("EgaFA0/MAAAhp9MA0MAAAMAAABp9g");
	this.shape_7.setTransform(147.05,317.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.933)").s().p("EgaFA0/MAAAhp9MA0MAAAMAAABp9g");
	this.shape_8.setTransform(147.05,317.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.867)").s().p("EgaFA0/MAAAhp9MA0MAAAMAAABp9g");
	this.shape_9.setTransform(147.05,317.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.8)").s().p("EgaFA0/MAAAhp9MA0MAAAMAAABp9g");
	this.shape_10.setTransform(147.05,317.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.733)").s().p("EgaFA0/MAAAhp9MA0MAAAMAAABp9g");
	this.shape_11.setTransform(147.05,317.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.667)").s().p("EgaFA0/MAAAhp9MA0MAAAMAAABp9g");
	this.shape_12.setTransform(147.05,317.125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.6)").s().p("EgaFA0/MAAAhp9MA0MAAAMAAABp9g");
	this.shape_13.setTransform(147.05,317.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.533)").s().p("EgaFA0/MAAAhp9MA0MAAAMAAABp9g");
	this.shape_14.setTransform(147.05,317.125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.467)").s().p("EgaFA0/MAAAhp9MA0MAAAMAAABp9g");
	this.shape_15.setTransform(147.05,317.125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.4)").s().p("EgaFA0/MAAAhp9MA0MAAAMAAABp9g");
	this.shape_16.setTransform(147.05,317.125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.333)").s().p("EgaFA0/MAAAhp9MA0MAAAMAAABp9g");
	this.shape_17.setTransform(147.05,317.125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.267)").s().p("EgaFA0/MAAAhp9MA0MAAAMAAABp9g");
	this.shape_18.setTransform(147.05,317.125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.2)").s().p("EgaFA0/MAAAhp9MA0MAAAMAAABp9g");
	this.shape_19.setTransform(147.05,317.125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.133)").s().p("EgaFA0/MAAAhp9MA0MAAAMAAABp9g");
	this.shape_20.setTransform(147.05,317.125);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.067)").s().p("EgaFA0/MAAAhp9MA0MAAAMAAABp9g");
	this.shape_21.setTransform(147.05,317.125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0)").s().p("EgaFA0/MAAAhp9MA0MAAAMAAABp9g");
	this.shape_22.setTransform(147.05,317.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7}]},116).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).wait(133));

	// image_02_jpg
	this.instance_6 = new lib.image_02_1();
	this.instance_6.setTransform(149.95,292.05);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(112).to({_off:false},0).to({scaleX:1.1464,scaleY:1.1464},120,cjs.Ease.quadOut).wait(32));

	// white_fade
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("EgaFA0/MAAAhp9MA0MAAAMAAABp9g");
	this.shape_23.setTransform(147.05,317.125);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.898)").s().p("EgaFA0/MAAAhp9MA0MAAAMAAABp9g");
	this.shape_24.setTransform(147.05,317.125);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.8)").s().p("EgaFA0/MAAAhp9MA0MAAAMAAABp9g");
	this.shape_25.setTransform(147.05,317.125);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,255,0.698)").s().p("EgaFA0/MAAAhp9MA0MAAAMAAABp9g");
	this.shape_26.setTransform(147.05,317.125);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.6)").s().p("EgaFA0/MAAAhp9MA0MAAAMAAABp9g");
	this.shape_27.setTransform(147.05,317.125);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,255,255,0.502)").s().p("EgaFA0/MAAAhp9MA0MAAAMAAABp9g");
	this.shape_28.setTransform(147.05,317.125);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.4)").s().p("EgaFA0/MAAAhp9MA0MAAAMAAABp9g");
	this.shape_29.setTransform(147.05,317.125);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,255,255,0.302)").s().p("EgaFA0/MAAAhp9MA0MAAAMAAABp9g");
	this.shape_30.setTransform(147.05,317.125);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,255,255,0.2)").s().p("EgaFA0/MAAAhp9MA0MAAAMAAABp9g");
	this.shape_31.setTransform(147.05,317.125);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(255,255,255,0.102)").s().p("EgaFA0/MAAAhp9MA0MAAAMAAABp9g");
	this.shape_32.setTransform(147.05,317.125);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(255,255,255,0)").s().p("EgaFA0/MAAAhp9MA0MAAAMAAABp9g");
	this.shape_33.setTransform(147.05,317.125);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(255,255,255,0.067)").s().p("EgaFA0/MAAAhp9MA0MAAAMAAABp9g");
	this.shape_34.setTransform(147.05,317.125);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(255,255,255,0.133)").s().p("EgaFA0/MAAAhp9MA0MAAAMAAABp9g");
	this.shape_35.setTransform(147.05,317.125);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(255,255,255,0.267)").s().p("EgaFA0/MAAAhp9MA0MAAAMAAABp9g");
	this.shape_36.setTransform(147.05,317.125);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(255,255,255,0.333)").s().p("EgaFA0/MAAAhp9MA0MAAAMAAABp9g");
	this.shape_37.setTransform(147.05,317.125);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(255,255,255,0.467)").s().p("EgaFA0/MAAAhp9MA0MAAAMAAABp9g");
	this.shape_38.setTransform(147.05,317.125);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(255,255,255,0.533)").s().p("EgaFA0/MAAAhp9MA0MAAAMAAABp9g");
	this.shape_39.setTransform(147.05,317.125);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(255,255,255,0.667)").s().p("EgaFA0/MAAAhp9MA0MAAAMAAABp9g");
	this.shape_40.setTransform(147.05,317.125);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(255,255,255,0.733)").s().p("EgaFA0/MAAAhp9MA0MAAAMAAABp9g");
	this.shape_41.setTransform(147.05,317.125);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(255,255,255,0.867)").s().p("EgaFA0/MAAAhp9MA0MAAAMAAABp9g");
	this.shape_42.setTransform(147.05,317.125);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(255,255,255,0.933)").s().p("EgaFA0/MAAAhp9MA0MAAAMAAABp9g");
	this.shape_43.setTransform(147.05,317.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23}]}).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},88).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_23}]},1).wait(151));

	// image_01_jpg
	this.instance_7 = new lib.image_01_1();
	this.instance_7.setTransform(145.9,199.05,1.1,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:0.3,regY:0.2,scaleX:1.2999,scaleY:1.2999,x:143.95,y:211},120).wait(144));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-31.4,200.1,500,878.1);
// library properties:
lib.properties = {
	id: 'CE4A800F7D87429483811C3DCB880A36',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"Bitmap1.png", id:"Bitmap1"},
		{src:"gradient_img.png", id:"gradient_img"},
		{src:"image_01.jpg", id:"image_01"},
		{src:"image_02.jpg", id:"image_02"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['CE4A800F7D87429483811C3DCB880A36'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;