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



(lib.image_01 = function() {
	this.initialize(img.image_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,319,50);// helper functions:

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
	this.shape.graphics.f("#003DA6").s().p("AgEAsQgIgFgEgIIAUgGQABADAEADQADACAFAAQADAAADgCQAAAAABgBQAAAAAAAAQAAgBABgBQAAAAAAgBIgBgCIgEgBIgRgFIgIgDQgDgCgCgEQgDgDAAgGQAAgDADgEQACgEAEgDQADgDAFgCQAFgBAGAAIALABIAIACIAGAGIAFAGIgTAFQgDgFgIAAIgGABQAAAAgBABQAAAAAAAAQAAABgBAAQAAABAAAAQAAACAEABIATAFIAIADQAEACACAEQACAEAAAFQAAAEgCAEQgCAFgDACQgEAEgFACQgGACgIAAQgNAAgHgFgAgrAwIAAhCIAVAAIAABCgAgpgaQgEgEAAgFQAAgGAEgDQADgEAGAAQAFAAADAEQAEADAAAGQAAAFgEAEQgDADgFAAQgGAAgDgDg");
	this.shape.setTransform(-23.325,-54.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_is, new cjs.Rectangle(-107.1,-59.7,88.39999999999999,94.7), null);


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
	this.shape.graphics.f("#003DA6").s().p("AAvAvQgFgDgEgEQgFgEgCgHQgDgGAAgJQAAgHADgHQACgGAEgFQAFgEAFgCQAGgCAGAAQAGAAAFACQAFACADAEIAAgmIAUAAIAABgIgUAAIAAgHQgEAFgEACQgFACgGAAQgGABgGgDgAA6ABIgFACIgDAFQgCADAAADQAAAEACACIADAFQACACADABQADACADAAQADAAADgCQACgBACgCIAEgFIABgGIgBgGIgEgFIgEgCIgGgBIgGABgAg8AtQgJgFgDgKIAVgFQABAEAEACQADACAEAAIAGgBQABAAAAgBQABgBAAAAQAAgBAAAAQAAgBAAAAIgBgCIgDgDIgSgEIgIgDIgGgGQgCgDAAgGQAAgEACgDQACgEAEgDQAEgDAFgBQAGgCAFgBIALACIAJADIAGAEIAFAHIgTAGQgDgGgJAAIgFABQgBAAAAABQAAAAAAAAQgBABAAAAQAAABAAAAQAAAAAAAAQABABAAAAQAAABABAAQAAABABAAIAUAFQAEAAAEADQADADACADQADADAAAHQAAADgCAFQgCAEgDACQgEAEgGACQgGACgHAAQgNAAgIgEgAB/AuQgHgDgFgEQgEgFgDgGQgCgGAAgIQAAgHADgGQACgFAFgFQAEgFAHgCQAHgDAHAAQAHAAAHADQAHACAEAFQAEAEADAGQADAFAAAIIAAAHIgyAAQACAFAEADQAEADAFAAQAFAAADgCIAGgFIARAKQgFAGgIAEQgHAEgLAAQgIAAgGgDgACbAGQgBgEgEgCQgEgDgFAAQgFAAgDADQgEACgCAEIAcAAIAAAAgAAAAvIAAhAIAUAAIAABAgAhjAvIAAglQAAgGgDgDQgCgCgFAAQgFAAgDACQgCADAAAHIAAAkIgWAAIAAhAIAWAAIAAAGQACgEAFgCQAEgCAGAAQALAAAHAHQAHAGAAAMIAAApgAitAvIAAhAIAVAAIAABAgAAAgaQgEgEAAgGQAAgGAEgDQACgDAGgBQAFABAEADQADADAAAGQAAAGgDAEQgEACgFAAQgGAAgCgCgAirgaQgEgEAAgGQAAgGAEgDQADgDAFgBQAGABAEADQADADAAAGQAAAGgDAEQgEACgGAAQgFAAgDgCg");
	this.shape.setTransform(-164.125,-57.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_inside, new cjs.Rectangle(-181.7,-62.8,220.5,81.9), null);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1140A0").s().p("ACYBQQgWgVAAghQAAgaAQgVQAQgUAZgHIAdAeIgIAAQgOAAgLAHQgLAIgEAMIBMAAIAeAdIgegdIACAAQgDgKgIgHQgHgIgLgBIgBgBIgdgeQAKgDAKAAQAhAAAWAWQAVAVAAAgIAAAOIgJAAIhrAAQADAPAMAJQALAHAQAAQAZAAAMgTIAeASQgLAQgQAJQgRAJgXAAQgjAAgWgWgABBBaQgNgOAAgdIAAg9IgbAAIAAghIAbAAIAAggIAlgWIAAA2IAnAAIAAAhIgnAAIAAA8QAAAUARAAQAHAAAGgFIARAeQgPALgUAAQgYAAgMgMgAgrBaQgNgOAAgdIAAg9IgbAAIAAghIAbAAIAAggIAlgWIAAA2IAmAAIAAAhIgmAAIAAA8QAAAUAQAAQAHAAAGgFIARAeQgPALgTAAQgYAAgMgMgAjWBQQgVgVAAghQAAgfAWgXQAWgWAhAAQAhAAAWAVQAVAWAAAfIAAAOIh1AAQAEAPALAJQALAHARAAQAYAAAMgTIAfASQgMAQgPAJQgSAJgXAAQgjAAgWgWgAi3gLQgKAIgFAMIBPAAQgEgNgKgHQgKgIgPABQgOAAgLAHgAFOBjIAAAAIAAAAIglglIAlAlIglAAIAAglIAAhtIAlAAIAAAXQAFgNALgHQAKgGAPAAQAOAAALAGIgOAlQgDgDgFgBQgFgBgHgBQggABAAAhIAABOIABAAgAmPBjIAAjGIBTAAQAhAAASAOQASAPAAAbQAAANgGAKQgGAKgLAHQAMAFAHALQAHAMAAAPQAAAdgTAPQgTAPgiAAgAlpBBIAuAAQAPgBAJgGQAIgHAAgMQAAgLgIgHQgIgGgSAAIgsAAgAlpgTIAuAAQAPAAAHgGQAHgHAAgKQAAgMgHgFQgIgGgOAAIguAAgAC7gwg");
	this.shape.setTransform(4.075,-0.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_better_04, new cjs.Rectangle(-35.9,-10.4,80,20.4), null);


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
	this.shape.graphics.f("#003DA6").s().p("ADbAuQgDgDAAgGQAAgGADgDQAEgEAFAAQAGAAADAEQAEADAAAGQAAAGgEADQgDADgGAAQgFAAgEgDgAC3AwQgFgCgDgDQgDgDgBgEQgCgGAAgIIAAgWIgMAAIAAgRIAMAAIAAgPIAVgLIAAAaIAQAAIAAARIgQAAIAAAVQgBAGACABQACACADAAQACAAADgCIAJAPIgIAFQgFABgFAAQgFAAgEgBgABeAqQgGgGAAgOIAAgnIAVAAIAAAkQABAGACADQACACAFAAQAFAAADgCQACgDAAgHIAAgjIAWAAIAABBIgVAAIAAgIIgIAHQgEACgGAAQgLAAgHgHgAAeAuQgHgCgEgFQgEgFgDgGQgDgGABgIQgBgGADgHQADgFAEgFQAEgFAHgCQAHgDAIAAQAHAAAHADQAGACAGAFQAEAFACAFQAEAHAAAGQAAAIgEAGQgCAGgEAFQgGAFgGACQgHADgHAAQgIAAgHgDgAAnABIgFADIgDAFIgBAFIABAGQABADACABQACAEADAAQADACADAAQADAAACgCQADAAADgEIADgEIABgGIgBgFIgDgFIgGgDIgFgBIgGABgAhIAvQgGgDgEgEQgFgEgCgHQgCgGAAgJQAAgHACgHQACgFAFgFQAEgFAGgBQAFgDAGAAQAHAAAEADQAFABACAEIAAglIAVAAIAABgIgVAAIAAgIQgCAFgGACQgEACgGAAQgGAAgFgCgAg+ABIgFADIgDAFIgBAFIABAGIADAEQACAEADAAQADACADAAQADAAACgCQADAAADgEIACgEIABgGIgBgFIgCgFIgGgDIgFgBIgGABgAjiAwIgHgEQgDgDgCgDIgCgIQAAgGACgEQACgEAFgDQAEgDAFgCQAGgCAGAAIAQAAIAAAAQAAgEgDgCQgCgCgGAAQgFAAgDACQgDAAgCAEIgUgIQAGgGAHgFQAIgEAMAAQAPAAAIAGQAJAIgBAMIAAApIgUAAIAAgJQgEAFgFACQgGADgHAAIgKgBgAjXAXQgCABAAAEQAAAFAHAAIAFgBIAFgCIAEgDIACgFIAAgBIgMAAQgGgBgDADgAh7AwIAAgmQAAgFgBgDQgDgCgGgBQgEABgDACQgDACAAAIIAAAkIgUAAIAAhBIAUAAIAAAHQAEgEADgCQAGgDAFAAQALAAAHAGQAFAIAAALIAAAqg");
	this.shape.setTransform(10.2,-86.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_and, new cjs.Rectangle(-25.6,-91.2,106.30000000000001,110.30000000000001), null);


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
	this.shape.graphics.f("#003DA6").s().p("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");
	this.shape.setTransform(-83.3315,-51.6539,0.7428,0.7428);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_Addition, new cjs.Rectangle(-134.8,-56.7,244.20000000000002,65.2), null);


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

}).prototype = getMCSymbolPrototype(lib.image_01_1, new cjs.Rectangle(-250,-239,319,50), null);


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

	// BSWH_Logo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEAD34").s().p("AAFCNIAAiJIBEBGIAABDgAhIhJIAAhDIBFAAIAACIg");
	this.shape.setTransform(104.275,-870.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1786B3").s().p("AFJCuQgIgKAAgOQAAgQAIgLQAJgKAQAAQAKAAAJAGQAIAHABALIgOAAQgBgGgEgCQgEgDgFAAQgHAAgEADQgEADgCAFIgBANQAAAIADAHQAFAHAKAAQAHAAAFgEQADgEAAgHIgPAAIAAgLIAdAAIAAAkIgJAAIgBgIQgIAKgLAAQgPAAgKgKgAEgC2IgdgtIAAAAIAAAtIgNAAIAAhDIAOAAIAcAtIABAAIAAgtIAOAAIAABDgADSC2IAAhDIAOAAIAABDgACeC2IgXhDIAQAAIAPAwIABAAIAOgwIAPAAIgWBDgABuC2IgCgEIgBgMQAAgEgDgDQgCgDgGAAIgPAAIAAAaIgOAAIAAhDIAkAAQAIgBAGAGQAGAGAAAIQAAAMgLAFQAJACABANIABAKIABAEIAAACgABRCSIAQAAQAKAAAAgLQAAgJgKAAIgQAAgAAfC2IAAhDIAPAAIAABDgAl+gkIAAhGICJAAIhGBGgAjshzIBEhFIBEAAIAABFg");
	this.shape_1.setTransform(128.5,-859.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1B3B98").s().p("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MAOQAMAPAUAAQAIAAAFgDQAGgDAGgIQAEgBABAEQgGANgNAHQgLAGgMgBQgNAAgKgEgARMhiQgIAHgBAHQAAABAAAAQAAAAAAAAQABAAAAAAQABAAAAAAIATAAQAYAAADgDQACAAAAgFQAAgGgFgFQgFgFgLAAQgLAAgJAJgAP2gLQgFgHAAgNIAAg9IAAgHQgBgBgFAAIgHAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQgBAAAAgBIABgDQAMgDAFgFQAGgFAFgLIAEAAQAAAAAAAAQABABAAAAQAAAAABAAQAAABAAAAIAAAMQAAABAAABQAAAAAAABQAAAAABABQAAAAAAAAQAAAAAAAAQABABAAAAQABAAAAAAQABAAABAAIAeAAQABACAAAEQAAAEgBABIgeAAQgBAAgBAAQgBAAAAAAQgBAAAAABQAAAAgBAAQAAABAAAEIAAAyQgBAOADAHQAFAJAMAAQAEAAADgBIAHgEQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIABACQgLAMgRAAQgQAAgHgIgAFrgLQgGgHAAgNIAAg9IAAgHQgBgBgEAAIgIAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIABgDQAMgDAFgFQAGgFAFgLIADAAQABAAAAAAQAAABABAAQAAAAAAAAQAAABABAAIAAAMQAAABAAABQAAAAAAABQAAAAAAABQAAAAABAAQAAAAAAAAQAAABABAAQAAAAABAAQABAAAAAAIAeAAQACACABAEQgBAEgCABIgeAAQgBAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAAAQgBABAAAEIAAAyQAAAOADAHQAFAJAMAAQAEAAADgBIAGgEQABAAAAAAQAAAAABAAQAAABAAAAQAAAAABABIABACQgLAMgRAAQgRAAgGgIgAEagLQgFgHAAgNIAAg9IgBgHQgBgBgDAAIgIAAIgBgDIAAgDQANgDAFgFQAFgFAFgLIADAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAIAAAMIABAEQAAAAAAAAQABABAAAAQABAAAAAAQABAAABAAIAeAAQACACAAAEQAAAEgCABIgfAAIgDABIgBAFIAAAyQAAAOADAHQAEAJANAAQADAAAEgBIAGgEIADACIAAACQgLAMgRAAQgQAAgHgIgACcgRQgQgQAAgZQAAgYARgRQAQgQAYAAQAXAAAPAPQAQAQAAAYQAAAZgPAQQgQARgZgBQgYAAgPgOgACshfQgJANAAAWQAAATAJAPQAJAPARAAQAQAAAHgOQAHgMAAgTQAAgTgIgOQgJgSgRAAQgOAAgIAMgAA4gQQgQgPAAgZQAAgXAQgRQASgTAfAAQANAAAKAFQAEACAAAIQAAAEgBADQgCADgCAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgMgOgPAAQgPAAgKALQgLAMAAAUQAAARALAOQALAPAUAAQALAAAIgFQAGgEAFgHQABgBAAAAQAAAAABABQAAAAABAAQAAAAABABIABACQgGAOgOAHQgMAGgMAAQgXAAgOgNgAkRgRQgQgQAAgZQAAgYARgRQAQgQAYAAQAWAAAQAPQAQAQAAAYQAAAZgQAQQgQARgYgBQgYAAgPgOgAkChfQgIANAAAWQAAATAIAPQAKAPARAAQAPAAAJgOQAGgMAAgTQAAgTgIgOQgJgSgRAAQgOAAgJAMgAntgLQgDgDgCAAIgDABIgHAEIgJAEQgFACgFAAQgLAAgIgGQgIgHAAgMQAAgHAFgFQAEgFANgFIAggLQADgBABgDIABgEIAAgNQAAgJgEgFQgEgJgMABQgGAAgFACQgFADgBAGQAAAIgDABQgGAGgIAAQgFgBAAgDQABgLARgLQASgLAPAAQAOAAAHAIQAGAIAAAPIgCAuQgBAYAOAAQADAAAEgCIACgBQABAAABAAQAAAAAAAAQABABAAAAQAAABAAABQAAACgGAEQgJAGgHgBQgLAAgHgIgAn+gyQgNAEgFAEQgFAFgBAGQAAAGAEAEQAFAHAIAAQAFAAAEgCIAIgFQACgCAAgDIABgIIABgQQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAQgEAAgHACgAu3jLIBEAAIAACCIhEBFgAyJgEIAAhFICDAAIBGBFgAHGgRQgRgOAAgVQAAgdAfgNQgLgMABgLQgBgOAKgKQAKgJAOAAQAKAAAHAFQAHAFABAJQAAAKgIAFQgFAEgFAAQgGAAAEgEIACgEQABgEgBgEQgCgEgDgDQgEgCgGgBQgHAAgFAEQgFAEAAAGQAAAHAFAFQAFAFANAIQAYAMAKAJQAQAOAMAYQAJgLAAgOQAAgKgHgIQgCgFgHAAQgHgBgGAEQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBgBQgCgBAAgEQACgHAGgFQAHgEAJAAIAOABIAKABQAEABACgDIAAAAIACgBQABAAAAAAQAAAAABAAQAAABAAAAQABAAAAABQAAAPgSAEQADAIAAAJQAAASgOARQAGALAHAFQAGAEAKAAQAEABADgCIAFgBQAAAAAAAAQAAAAABAAQAAABAAAAQAAABAAAAQAAAEgIADQgHABgLAAQgKAAgHgCQgGgDgJgHQgNAHgKAEQgKACgLAAQgZAAgQgNgAHKhEQAAAVAPAQQAOAPAUAAQAGAAAGgBIAPgGIgMgQIgGgIQgJgOgKgJQgHgHgLgIIgGgDQgPADAAARgAO/gGIgYABIgCgDIABgEIAFgBQAIgBABgDQACgEAAgQIAAguQAAgIgBgCQgBgDgGgDIgCgCIgBgDIABgCIAPgGIANgHQABAAAAABQABAAAAAAQAAAAAAAAQABABAAAAIgCAhIAAAvQAAAQACAEQACADAHABIAFABQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAgBABIgZgBgAiMgGIgYABQAAgBgBAAQAAAAAAAAQAAgBAAAAQgBgBAAAAIABgEIAGgBQAHgBACgDQABgEAAgQIAAguQAAgIgBgCQgBgDgGgDIgBgCIgBgDIABgCIAMgGIAOgHQABABAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIAAAPIABADIAPgLQAIgFAHAAQAFAAADADQADADABAFQAAAFgFAEQgDADgDAAQgDAAgEgCQgGgEgFAAQgHAAgDAFQgDAFgBAPIAAAkQABAQABAEQACAEAHAAIAKABIABAEQAAAAAAABQgBAAAAABQAAAAAAAAQgBAAAAABIgegBgAlEgGIgZABQgBgBAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAAAQAAgBABAAIAGgBQAHgBABgDQACgEABgQIAAh4QAAgLgCgEQgBgDgGgDIgDgCQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIABgCQAUgIAJgEQAAAAABAAQAAAAABAAQAAABAAAAQAAAAABABIgBAgIAAB+QAAAQABAEQACADAHABIAHABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAgBABIgZgBgAqigGIgfABQAAgBAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAgEIAGgBQAKgCACgFQACgFAAgVIAAhmQAAgPgCgEQgCgFgIgCIgJAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAAAQABAAAAgBQAWgCAjAAQAfAAAOAHQAUALABAXQAAANgIAJQgGAIgOAGQAAAEAFAAQANADALAKQAMAMgBAUQAAAYgRANQgSAOgjABIgggBgAqWhfQgCABAAAFIAAAnQAAAWAGAHQAGAHAPAAQATAAAKgJQAMgJAAgTQABgTgLgMQgNgOgdAAQgLgBgDACgAqUitQgBAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAIgBAFIAAA2QAAAFACACQACABAKAAQAVgBALgIQAKgIAAgSQAAgSgMgKQgLgIgRAAQgJABgDABgAO0iMQgEgEAAgFQAAgHAEgEQAEgEAGAAQAHAAADAEQAEAFAAAFQAAAHgFADQgEADgFAAQgHABgDgEg");
	this.shape_2.setTransform(200,-870.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BSWH_Logo, new cjs.Rectangle(83.8,-891.1,1471.7,307.4), null);


(lib.better_animation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// txt_Better
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C8EBA").s().p("AAEAmIAAhtIAlAAIAAAXQAFgNALgHQAKgGAPAAQAOAAALAGIgOAlQgEgCgFgCQgEgBgHAAQggAAAAAjIAABMIAAAAgAgSAPIgegdIACAAQgDgLgIgHQgIgHgLgCIgegeQALgDAKAAQAhAAAVAVQAWAWAAAgIAAAOg");
	this.shape.setTransform(-6.9,16.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1140A0").s().p("AC4BQQgVgVAAghQAAgaAQgUQAPgVAZgGIAeAeIgJgBQgOgBgLAJQgKAHgFAMIBNAAIAdAdIhrAAQAEAPALAJQALAHARABQAYgBAMgTIAfASQgMAQgPAJQgSAJgXAAQgjAAgWgWgABiBaQgNgOAAgdIAAg9IgbAAIAAghIAbAAIAAggIAlgWIAAA2IAnAAIAAAhIgnAAIAAA7QAAAWAQgBQAHABAHgGIARAeQgPALgUAAQgYAAgMgMgAgLBaQgNgOAAgdIAAg9IgbAAIAAghIAbAAIAAggIAlgWIAAA2IAmAAIAAAhIgmAAIAAA7QAAAWAQgBQAHABAGgGIARAeQgPALgUAAQgYAAgLgMgAi1BQQgWgVAAghQAAgfAXgXQAWgWAhAAQAhAAAVAWQAWAUAAAhIAAANIh1AAQADAPAMAJQALAHAQABQAZgBAMgTIAeASQgLAQgQAJQgRAJgYAAQgiAAgWgWgAiWgKQgLAHgEAMIBOAAQgDgMgKgIQgLgHgOAAQgOgBgLAJgAFvBjIAAAAIAAAAgAFKBjIAAglIAlAlgAluBjIAAjGIBSAAQAhAAASAOQASAPAAAaQAAAOgGALQgFAJgMAHQANAGAHAKQAGAMAAAPQAAAdgTAPQgSAPgiAAgAlIBAIAtAAQAQAAAIgGQAIgHAAgMQAAgMgHgGQgJgGgRAAIgsAAgAlIgTIAuAAQAOAAAIgHQAHgGAAgLQAAgLgIgFQgHgGgPAAIgtAAg");
	this.shape_1.setTransform(-39.475,14.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},27).to({state:[{t:this.shape},{t:this.shape_1}]},116).to({state:[]},1).wait(1));

	// txt_Better
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C8EBA").s().p("AAEAmIAAhtIAlAAIAAAXQAFgNALgHQAKgGAPAAQAOAAALAGIgOAlQgEgCgFgCQgEgBgHAAQggAAAAAjIAABMIAAAAgAgSAPIgegdIACAAQgDgLgIgHQgIgHgLgCIgegeQALgDAKAAQAhAAAVAVQAWAWAAAgIAAAOg");
	this.shape_2.setTransform(-6.9,16.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1140A0").s().p("AC4BQQgVgVAAghQAAgaAQgUQAPgVAZgGIAeAeIgJgBQgOgBgLAJQgKAHgFAMIBNAAIAdAdIhrAAQAEAPALAJQALAHARABQAYgBAMgTIAfASQgMAQgPAJQgSAJgXAAQgjAAgWgWgABiBaQgNgOAAgdIAAg9IgbAAIAAghIAbAAIAAggIAlgWIAAA2IAnAAIAAAhIgnAAIAAA7QAAAWAQgBQAHABAHgGIARAeQgPALgUAAQgYAAgMgMgAgLBaQgNgOAAgdIAAg9IgbAAIAAghIAbAAIAAggIAlgWIAAA2IAmAAIAAAhIgmAAIAAA7QAAAWAQgBQAHABAGgGIARAeQgPALgUAAQgYAAgLgMgAi1BQQgWgVAAghQAAgfAXgXQAWgWAhAAQAhAAAVAWQAWAUAAAhIAAANIh1AAQADAPAMAJQALAHAQABQAZgBAMgTIAeASQgLAQgQAJQgRAJgYAAQgiAAgWgWgAiWgKQgLAHgEAMIBOAAQgDgMgKgIQgLgHgOAAQgOgBgLAJgAFvBjIAAAAIAAAAgAFKBjIAAglIAlAlgAluBjIAAjGIBSAAQAhAAASAOQASAPAAAaQAAAOgGALQgFAJgMAHQANAGAHAKQAGAMAAAPQAAAdgTAPQgSAPgiAAgAlIBAIAtAAQAQAAAIgGQAIgHAAgMQAAgMgHgGQgJgGgRAAIgsAAgAlIgTIAuAAQAOAAAIgHQAHgGAAgLQAAgLgIgFQgHgGgPAAIgtAAg");
	this.shape_3.setTransform(-39.475,14.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},27).to({state:[{t:this.shape_2},{t:this.shape_3}]},116).to({state:[]},1).wait(1));

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

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(20).to({graphics:mask_graphics_20,x:29.325,y:14.825}).wait(1).to({graphics:mask_graphics_21,x:25.275,y:14.825}).wait(1).to({graphics:mask_graphics_22,x:21.275,y:14.825}).wait(1).to({graphics:mask_graphics_23,x:17.575,y:14.825}).wait(1).to({graphics:mask_graphics_24,x:14.325,y:14.825}).wait(1).to({graphics:mask_graphics_25,x:11.575,y:14.825}).wait(1).to({graphics:mask_graphics_26,x:9.325,y:14.825}).wait(1).to({graphics:null,x:0,y:0}).wait(118));

	// txt_Better
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3C8EBA").s().p("AAEAmIAAhtIAlAAIAAAXQAFgNALgHQAKgGAPAAQAOAAALAGIgOAlQgEgCgFgCQgEgBgHAAQggAAAAAjIAABMIAAAAgAgSAPIgegdIACAAQgDgLgIgHQgIgHgLgCIAAgBIgegdQALgDAKAAQAhAAAVAVQAWAWAAAgIAAAOg");
	this.shape_4.setTransform(-6.9,16.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1140A0").s().p("AC4BQQgVgVAAghQAAgaAQgUQAPgVAZgGIAeAdIgJAAQgOgBgLAJQgKAHgFAMIBNAAIAdAdIhrAAQAEAPALAJQALAHARABQAYgBAMgTIAfASQgMAQgPAJQgSAJgXAAQgjAAgWgWgABiBaQgNgOAAgdIAAg9IgbAAIAAghIAbAAIAAggIAlgWIAAA2IAnAAIAAAhIgnAAIAAA7QAAAWAQgBQAHABAHgGIARAeQgPALgUAAQgYAAgMgMgAgLBaQgNgOAAgdIAAg9IgbAAIAAghIAbAAIAAggIAlgWIAAA2IAmAAIAAAhIgmAAIAAA7QAAAWAQgBQAHABAGgGIARAeQgPALgUAAQgYAAgLgMgAi1BQQgWgVAAghQAAgfAXgXQAWgWAhAAQAhAAAVAWQAWAUAAAhIAAANIh1AAQADAPAMAJQALAHAQABQAZgBAMgTIAeASQgLAQgQAJQgRAJgYAAQgiAAgWgWgAiWgKQgLAHgEAMIBOAAQgDgMgKgIQgLgHgOAAQgOgBgLAJgAFvBjIAAAAIAAAAgAFKBjIAAglIAlAlgAluBjIAAjGIBSAAQAhAAASAOQASAPAAAaQAAAOgGALQgFAJgMAHQANAGAHAKQAGAMAAAPQAAAdgTAPQgSAPgiAAgAlIBAIAtAAQAQAAAIgGQAIgHAAgMQAAgMgHgGQgJgGgRAAIgsAAgAlIgTIAuAAQAOAAAIgHQAHgGAAgLQAAgLgIgFQgHgGgPAAIgtAAg");
	this.shape_5.setTransform(-39.475,14.35);

	var maskedShapeInstanceList = [this.shape_4,this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},20).to({state:[]},7).wait(118));

	// txt_Better
	this.instance = new lib.txt_better_04();
	this.instance.setTransform(-40.3,14.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({_off:true},18).wait(118));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.2,0,80,24.6);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-4.15,alpha:1},13,cjs.Ease.quadOut).wait(89).to({_off:true},1).wait(42));

	// txt_is
	this.instance_1 = new lib.txt_is();
	this.instance_1.setTransform(0.05,-8.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({y:-0.95,alpha:1},15,cjs.Ease.quadOut).wait(82).to({_off:true},1).wait(42));

	// better_animation
	this.instance_2 = new lib.better_animation("synched",9,false);
	this.instance_2.setTransform(3.25,-59,0.4446,0.4446,0,0,0,-36.8,14.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({y:-55.4,alpha:1,startPosition:19},11,cjs.Ease.quadOut).wait(82).to({startPosition:101},0).to({_off:true},1).wait(42));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-134.7,-71,156,20.299999999999997);


// stage content:
(lib.BSWH_IrvingFacility_320x50 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [125];
	// timeline functions:
	this.frame_125 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(125).call(this.frame_125).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,2,0,3).p("A4/j5MAx/AAAIAAHzMgx/AAAg");
	this.shape.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(126));

	// BSWH_Logo
	this.instance = new lib.BSWH_Logo();
	this.instance.setTransform(150.1,469.5,0.5114,0.5114,0,0,0,0.1,0.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},10).wait(116));

	// angle_shape
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AwPHgIFGpcIBRiVIARggIBeiuIYZAAIAAO/g");
	this.shape_1.setTransform(256.025,25.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(126));

	// txt_01
	this.instance_1 = new lib.txt_01("synched",0,false);
	this.instance_1.setTransform(148.05,74.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(23).to({_off:false},0).wait(103));

	// txt_inside
	this.instance_2 = new lib.txt_inside();
	this.instance_2.setTransform(195.7,89.35);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({_off:false},0).to({alpha:1},17).wait(50));

	// txt_and
	this.instance_3 = new lib.txt_and();
	this.instance_3.setTransform(66.55,117.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(77).to({_off:false},0).to({alpha:1},18).wait(31));

	// white_fade
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_2.setTransform(160,25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.965)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_3.setTransform(160,25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.925)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_4.setTransform(160,25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.89)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_5.setTransform(160,25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.851)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_6.setTransform(160,25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.816)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_7.setTransform(160,25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.776)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_8.setTransform(160,25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.741)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_9.setTransform(160,25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.702)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_10.setTransform(160,25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.667)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_11.setTransform(160,25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.631)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_12.setTransform(160,25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.592)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_13.setTransform(160,25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.557)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_14.setTransform(160,25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.518)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_15.setTransform(160,25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.482)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_16.setTransform(160,25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.443)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_17.setTransform(160,25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.408)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_18.setTransform(160,25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.369)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_19.setTransform(160,25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.333)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_20.setTransform(160,25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.298)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_21.setTransform(160,25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.259)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_22.setTransform(160,25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,255,0.224)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_23.setTransform(160,25);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.184)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_24.setTransform(160,25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.149)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_25.setTransform(160,25);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,255,0.11)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_26.setTransform(160,25);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.075)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_27.setTransform(160,25);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,255,255,0.035)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_28.setTransform(160,25);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0)").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_29.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).wait(99));

	// image_01_jpg
	this.instance_4 = new lib.image_01_1();
	this.instance_4.setTransform(108.3,24.65,1,1,0,0,0,-90.2,-214.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:90.7},120,cjs.Ease.quadOut).wait(6));

	// background
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("Eg5nAHwIAAvfMBzPAAAIAAPfg");
	this.shape_30.setTransform(364.8,46.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(126));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(90.9,2.6,642.7,93.4);
// library properties:
lib.properties = {
	id: 'CE4A800F7D87429483811C3DCB880A36',
	width: 320,
	height: 50,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"image_01.jpg", id:"image_01"}
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