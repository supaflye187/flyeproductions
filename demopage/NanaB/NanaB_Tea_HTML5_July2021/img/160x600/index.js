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



(lib.BG = function() {
	this.initialize(img.BG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.lemonTea = function() {
	this.initialize(img.lemonTea);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,243,591);


(lib.peach = function() {
	this.initialize(img.peach);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,243,591);


(lib.raspberry = function() {
	this.initialize(img.raspberry);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,243,591);


(lib.sweetTea = function() {
	this.initialize(img.sweetTea);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,243,591);// helper functions:

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


(lib.txt_sweetLife = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("Ag7A5QgKgLAAgSQAAghAXggQAXgfAdAAQAMAAAIAGQAGAHABALQAAARgPALQgPALgSAAQgKAAgLgFQgGASAAANQABAbATAAQASAAAXgVQAXgUARghIALAFQgRAmgdAaQgeAagYAAQgSAAgLgMgAgPguQgJAKgIAQQAGACAIAAQAMAAAJgIQAKgIgBgLQABgLgKAAQgJAAgJAKg");
	this.shape.setTransform(-14.8,105.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhDBxIAuh6QACgKgEgIQgDgIgIAAIADgPIAbAAIgBgMQAAgYANgNQANgNASAAQAUAAAJAQIgJAZQgBgJgFgFQgHgFgHAAQgLAAgHAJQgHAIAAAPIAAAIIAfAAIgEAPIgeAAIg2CUgAgQgWIAFgNIgHAAQACAFAAAIg");
	this.shape_1.setTransform(-24.275,104.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgvBTQgGgGAAgMIABgGIACgIIADgJIAEgMIAEgMIAGgOIAFgOIANgiIAYAAIgJAVIgNAjQgOAnAAAHQAAAJAHAAQANAAASgXQAUgYANgZIAKAFQgPAigYAcQgYAcgWAAQgKAAgGgHgAgDhAQgDgDAAgGQAAgHAEgFQAEgEAHAAQAGAAADADQAEAEAAAGQAAAGgFAFQgGAFgGAAQgFAAgDgEg");
	this.shape_2.setTransform(-30.025,103.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAaBsIgPgFIgMgGIgOgIIgNgHQgWAXgdAAQgTAAgKgIQgLgHAAgMQAAgNAMgHQAMgGAVAAQASAAAUAFIALggIAOgpQAOgpAVgaQAVgZAfAAQAWAAALANQALAMAAATQAAAWgNASQgOASgTAAQgNAAgHgIQgHgHAAgMQAAgMAJgNQAIgMAPgFQgNAMAAARQAAAOAMAAQALAAAHgLQAHgLAAgNQAAgNgGgIQgHgJgNAAQgKAAgHAFQgHAEgGAHQgFAFgGAOIgJAVIgJAaQgSA4gOAXIAMADIALAEIALAEIANADIALABIAMACQAUAAAOgLQABAMgOAOQgNANgYAAgAhcBGQgGADAAAFQAAAFAFACQAFAEAJAAQAXAAALgPQgQgHgPAAQgKAAgGADg");
	this.shape_3.setTransform(-45.275,102.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag1A6QAAgJADgHQALgiASgtIgSAAIAEgQIAUAAIAIgcIAZAAIgMAcIAYAAIgFAQIgXAAQgeBQAAAJQAAAGAIABQALAAASgVQATgTAOghIAMAGQgRAlgYAaQgWAagWAAQgWABAAgYg");
	this.shape_4.setTransform(-65.975,104.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag7A5QgKgLAAgSQAAghAXggQAXgfAdAAQAMAAAIAGQAGAHABALQAAARgPALQgOALgTAAQgKAAgLgFQgFASgBANQAAAbAUAAQASAAAXgVQAXgUARghIALAFQgQAmgeAaQgeAagZAAQgRAAgLgMgAgPguQgJAKgIAQQAGACAIAAQAMAAAJgIQAJgIAAgLQAAgLgJAAQgJAAgJAKg");
	this.shape_5.setTransform(-74.3,105.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag7A5QgKgLAAgSQAAghAXggQAXgfAdAAQANAAAHAGQAGAHABALQAAARgPALQgOALgTAAQgKAAgLgFQgFASgBANQAAAbAUAAQASAAAXgVQAXgUARghIALAFQgQAmgeAaQgeAagZAAQgRAAgLgMgAgPguQgJAKgIAQQAGACAIAAQAMAAAJgIQAJgIAAgLQAAgLgJAAQgJAAgJAKg");
	this.shape_6.setTransform(-84.65,105.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgDBDIAMhwIgBAAIg2BwIgYAAIANhvIgBAAQgFARgJAQIgPACQAPgcAIgdIAfAAIgLBiIABAAIAuhiIAcAAIgKBiIABAAQAMgMAQggQAPgfABgXIAWAAQgGAUgOAaIgeA0IgTAjg");
	this.shape_7.setTransform(-99.15,105.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhaB4IAdgpQgQgPgBgZQAAgYAQgQQAPgRAZAAQAPAAAJAFIASgbQgMgTAAgPQAAgUAPgMQAOgNATAAQAPAAAKAJQAKAIAAAQQAAAMgHAKQgIAJgMAAQgMAAgGgGIgFAJIAIALIAKAOIAIANQAFAJABAHIACASQABAigbAWQgbAXggAAQgOAAgNgFQgIARgCAJgAgZBFIANABQAXAAATgNQASgOAAgXQAAgJgCgJIgIgPIgKgQIgOAaQAHAIAAAKQAAAKgHAJQAAgQgHgIgAg0AIQgKAKAAAOQgBARAPALIApg8QgFgBgKAAQgTAAgLAJgAAkhnQgIAIAAALQAAAKAHAMIAGgMIAAgCQAAgLAIgGIgBAIQABAHADADQAEAFAGAAQAFgBAFgFQAEgDAAgJQAAgJgGgGQgIgGgIgBQgKABgIAGg");
	this.shape_8.setTransform(-117.6,103.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag6A5QgLgLAAgSQAAghAXggQAXgfAdAAQANAAAGAGQAIAHAAALQAAARgPALQgOALgSAAQgLAAgLgFQgGASABANQAAAbATAAQATAAAWgVQAYgUAQghIALAFQgRAmgdAaQgdAagZAAQgSAAgKgMgAgPguQgKAKgGAQQAFACAIAAQAMAAAJgIQAKgIAAgLQAAgLgKAAQgJAAgJAKg");
	this.shape_9.setTransform(-21.8,82.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgQBeQgHgGAAgJQABgLAPgiQANgiAAgIQAAgFgDgEQgDgDgFAAQgIAAgHAGQgHAHgFAKIgjBfIgYAAIBLjFIAWAAIgcBKIABAAQAOgNAQAAQALAAAHAGQAGAGAAAKQAAAMgOAhQgPAigBAHQAAAHAIAAQAMAAAWgUQAVgUAPghIALAFQgQAkgbAbQgbAcgWAAQgLAAgFgGg");
	this.shape_10.setTransform(-34.55,79.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag1A6QAAgIADgJQALggASgvIgSAAIAEgOIAUAAIAIgdIAZAAIgMAdIAYAAIgFAOIgXAAQgeBRAAAIQAAAIAIgBQALAAASgTQATgVAOgfIAMAFQgRAlgYAbQgWAagWAAQgWAAAAgYg");
	this.shape_11.setTransform(-43.675,81);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgUAbQAUgPAAgMQAAgEgCgDQgDgDgDABQgBAAgBAAQgBAAAAAAQgBAAAAAAQgBABAAAAIgBgFQAAgIAGgGQAFgFAHAAQAIAAAFAFQAEAEAAAIQAAANgMANQgMAPgNAHg");
	this.shape_12.setTransform(-54.6,72.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgQBAQgHgGAAgJQABgMAPgiQANggAAgJQAAgNgLAAQgHAAgIAHQgIAHgEAKIgjBfIgYAAIAyiFIAaAAIgJANIABAAQAPgQARAAQAMAAAGAGQAGAGAAAJQAAAMgOAjQgPAggBAHQAAAHAIAAQALAAAWgUQAWgTAPghIALAGQgQAigbAcQgbAbgWAAQgLAAgFgFg");
	this.shape_13.setTransform(-66.4,82.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgvBTQgGgGAAgMIABgGIACgIIADgJIAEgMIAEgMIAGgOIAFgOIANgiIAYAAIgJAVIgNAjQgOAnAAAHQAAAJAHAAQANAAASgXQAUgYANgZIAKAFQgPAigYAcQgYAcgWAAQgKAAgGgHgAgDhAQgDgDAAgGQAAgHAEgFQAEgEAHAAQAGAAADADQAEAEAAAGQAAAGgFAFQgGAFgGAAQgFAAgDgEg");
	this.shape_14.setTransform(-75.625,80.125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgjBDIAJhwIgCAAQgGARgJARIgOACQAOgcAIgdIAfAAIgGBmIABAAIAUggQAJgNAHgUQAKgWABgPIAVAAQgHAagfA0IggA3g");
	this.shape_15.setTransform(-85.15,82.325);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgvBTQgGgGAAgMIABgGIACgIIADgJIAEgMIAEgMIAGgOIAFgOIANgiIAYAAIgJAVIgNAjQgOAnAAAHQAAAJAHAAQANAAASgXQAUgYANgZIAKAFQgPAigYAcQgYAcgWAAQgKAAgGgHgAgDhAQgDgDAAgGQAAgHAEgFQAEgEAHAAQAGAAADADQAEAEAAAGQAAAGgFAFQgGAFgGAAQgFAAgDgEg");
	this.shape_16.setTransform(-93.775,80.125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAaBsIgPgFIgMgGIgOgIIgNgHQgWAXgdAAQgTAAgKgIQgLgHAAgMQAAgNAMgHQAMgGAVAAQASAAAUAFIALggIAOgpQAOgpAVgaQAVgZAfAAQAWAAALANQALAMAAATQAAAWgNASQgOASgTAAQgNAAgHgIQgHgHAAgMQAAgMAJgNQAIgMAPgFQgNAMAAARQAAAOAMAAQALAAAHgLQAHgLAAgNQAAgNgGgIQgHgJgNAAQgKAAgHAFQgHAEgGAHQgFAFgGAOIgJAVIgJAaQgSA4gOAXIAMADIALAEIALAEIANADIALABIAMACQAUAAAOgLQABAMgOAOQgNANgYAAgAhcBGQgGADAAAFQAAAFAFACQAFAEAJAAQAXAAALgPQgQgHgPAAQgKAAgGADg");
	this.shape_17.setTransform(-109.025,79.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_sweetLife, new cjs.Rectangle(-130.9,59.6,122.10000000000001,64.19999999999999), null);


(lib.txt_refreshingly = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgPA8QgGgGAAgJQAAgKAOggQANgeAAgIQAAgMgKAAQgIAAgHAGQgHAGgDAKIgiBYIgWAAIAuh7IAYAAIgIAMIACAAQANgQAQAAQALAAAGAGQAFAGAAAJQAAALgNAgQgOAeAAAGQAAAHAGAAQALAAAVgTQAUgSAOgeIALAFQgPAhgZAZQgaAagUAAQgKAAgFgFg");
	this.shape.setTransform(-31.475,69.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgiBCQgGgGAAgLQAAgQAKgYQAMgbALgSIAAgBIgNABIgNgBQgFAQgLAVIgKgFQAGgMAHgXIgEgfIAWAAIgCAVIAQABIAagCIAFAHQgLATgKAcQgLAdAAALQAAAHAHAAQAJAAATgUQAQgSANgcIALAEQgLAcgZAcQgYAcgUAAQgIAAgGgGg");
	this.shape_1.setTransform(-41.3,68.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag2A2QgKgLAAgRQAAgfAVgdQAWgeAaAAQAMAAAHAGQAGAHAAAKQAAAQgNAKQgOAKgQAAQgKAAgKgEQgGAQAAANQAAAZATAAQARAAAVgTQAWgUAPgeIAKAEQgPAjgcAaQgbAYgYAAQgPAAgKgLgAgOgrQgJAKgHAOQAGADAHAAQAMAAAIgIQAJgIAAgKQAAgKgJAAQgIAAgJAJg");
	this.shape_2.setTransform(-51.925,69.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgPBYQgGgGAAgJQAAgKAOgfQANggAAgHQAAgFgDgEQgDgDgFAAQgHAAgHAGQgHAHgDAJIgiBYIgWAAIBFi3IAVAAIgaBFIABAAQANgMAPgBQAKAAAGAHQAGAFAAAJQAAALgNAfQgOAgAAAGQAAAGAGAAQAMABAUgUQAUgRAOgfIALAEQgPAigZAZQgaAagUAAQgKAAgFgFg");
	this.shape_3.setTransform(-63.925,66.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgxA2QAAgHACgIQALgfARgrIgSAAIAEgNIATAAIAHgbIAYAAIgLAbIAVAAIgDANIgXAAQgbBLAAAIQAAAGAHAAQAKAAARgSQASgTANgdIALAEQgQAjgVAZQgVAYgVAAQgUAAAAgWg");
	this.shape_4.setTransform(-72.65,68.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgOA4QgGgGACgLIgCAAQgQAYgVAAQgWAAAAgZQAAgIADgJIANgkIASgvIAWAAIgSAwIgOAmQgCAHACAFQADAGAHAAQAIAAAJgGQAJgHAEgKIAehRIAWAAIgUA1QgOAjAAAHQAAAIAIAAQAMAAARgVQASgVAMgZIAKAEQgOAggXAaQgXAbgUAAQgJAAgFgHg");
	this.shape_5.setTransform(-82.125,69.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhBA2QgIgKAAgRQAAgdAWgfQAWgfAbAAQANAAAHAKQAIAJAAARQAAAWgNAZQAdAAAVgrIALAFQgMAZgRAPQgSAPgTAAIgFgBQgTAegaAAQgPAAgIgLgAgZgjQgLAPgHAUQgHATAAAPQAAARAKAAQANAAAOgYQgIgJAAgNQAAgZAYgaQgCgEgFAAQgKAAgLAPgAgJgDQAAAIAEAFQAKgZAAgUIAAgDQgOATAAAQg");
	this.shape_6.setTransform(-93.925,69.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhUBvIAbglQgPgPAAgXQAAgWAOgPQAOgQAXAAQAOAAAJAFIARgaQgMgRAAgOQAAgTAOgLQAOgLARAAQAOAAAKAHQAJAIAAAOQAAANgHAIQgHAJgMAAQgLAAgFgHIgFAJIAIALIAKANIAHAMQAEAIACAHIABARQAAAggYAUQgaAVgdAAQgNAAgNgEQgHAPgCAIgAgXBAIAMACQAVAAASgNQARgNAAgWQAAgIgDgJIgGgNIgKgPIgNAYQAHAHAAAKQAAAKgHAIQAAgPgHgJgAgwAHQgKAKAAANQAAAPAOALIAmg4QgGgBgIAAQgSAAgKAIgAAihgQgIAHAAALQAAAJAGAKIAGgKIAAgBQAAgLAIgGIgBAIQAAAGAEADQADAEAFAAQAFAAAFgEQAEgEAAgIQAAgJgGgGQgHgFgIAAQgKAAgGAGg");
	this.shape_7.setTransform(-109.275,67.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag5BUQgIgGAAgJQAAgJAGgFQAHgFAIAAQALAAAGAHQgGgBgGACQgHACAAAGQAAAEADACQAEADAGAAQANAAAIgMQAJgNALgiIgCAAQgPATgSAAQgXAAAAgZQAAgHADgJIANglIATguIAVAAIgRAvIgOAnQgDAHADAFQACAFAHABQAJAAAHgHQAJgHAFgJIAehRIAWAAIgeBQIgHASIgFASIgEAMQgJAagLANQgMAMgVAAQgQAAgIgGg");
	this.shape_8.setTransform(-16.975,48.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgsBXQgFgFAAgLQAAgHADgJIAdhRIAYhCIAWAAIgZBDQgeBQAAAIQAAAJAHgBQAKAAARgSQARgSAPgfIAKAEQgQAkgWAYQgUAZgVAAQgJAAgGgGg");
	this.shape_9.setTransform(-23.575,42.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ag5BWQgJgGAAgJQAAgJAHgFQAHgFAIAAQALAAAGAHIgGgBQgGAAgEAEQgDADAAADQAAAEADACQAEADAHAAQAMAAAIgMQAJgMALgjIgBAAQgPATgRAAQgMAAgFgJQgGgJAAgPQAAgeAUghQAVghAbAAQARAAAEAPIABAAIAAgKIAZAAIgfBQIgQAwQgJAagLANQgMAMgVAAQgQAAgIgGgAAAg/QgLAOgGAQQgHASAAAOQAAARALAAQAHAAAIgHQAIgGAEgJIACgGIADgFIAHgVIAIgTIABgJQAAgKgLgBQgMAAgMAOg");
	this.shape_10.setTransform(-33.925,48.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgPA8QgGgGAAgJQAAgKAOggQANgeAAgIQAAgMgKAAQgIAAgHAGQgHAGgDAKIgiBYIgWAAIAuh7IAYAAIgIAMIACAAQANgQAQAAQALAAAGAGQAFAGAAAJQAAALgNAgQgOAeAAAGQAAAHAGAAQALAAAVgTQAUgSAOgeIALAFQgPAhgZAZQgaAagUAAQgKAAgFgFg");
	this.shape_11.setTransform(-44.225,45.575);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgsBOQgFgGgBgLIABgGIACgHIADgJIAEgLIAEgLIAFgNIAFgNIAMgfIAWAAIgIATIgMAgQgNAlAAAGQAAAJAGAAQANAAAQgWQATgXALgWIAKAEQgOAggXAaQgWAagUAAQgJAAgGgGgAgDg8QgDgDAAgFQAAgGAEgFQAEgEAHAAQAFAAADADQADAEAAAFQAAAGgFAEQgEAFgHAAQgEAAgDgEg");
	this.shape_12.setTransform(-53,43.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgPBYQgGgGAAgIQAAgLAOggQANgfAAgHQAAgFgDgDQgDgEgFAAQgHAAgHAGQgHAHgDAJIgiBZIgWAAIBFi4IAVAAIgaBFIABAAQANgNAPAAQAKABAGAFQAGAGAAAJQAAALgNAfQgOAfAAAHQAAAHAGgBQAMABAUgUQAUgSAOgeIALAEQgPAigZAZQgaAagUAAQgKAAgFgFg");
	this.shape_13.setTransform(-63.075,42.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ag0A3QgJgKAAgVIAJgCQAAALAFAIQAEAHAIAAQAJgBAGgJQAGgLAAgQIgBgUIgBgcIgBAAQgHAUgIALIgKgEQASgoAEgNIAYAAQgDAKAAAKQAAAMAEATQAEAUAAAGQAAAJgDAGQgDAGgGAHIAAABQAdgTAag1IAKAFQgSArgYAWQgXAXgYAAQgPAAgKgJg");
	this.shape_14.setTransform(-72.9762,45.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ag2A2QgKgLAAgRQAAgfAVgdQAWgeAaAAQAMAAAHAGQAGAHAAAKQAAAQgNAKQgOAKgQAAQgKAAgKgEQgGAQAAANQAAAZATAAQARAAAVgTQAWgUAPgeIAKAEQgPAjgcAaQgbAYgYAAQgPAAgKgLgAgOgrQgJAKgHAOQAGADAHAAQAMAAAIgIQAJgIAAgKQAAgKgJAAQgIAAgJAJg");
	this.shape_15.setTransform(-81.525,45.575);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgiBCQgGgGAAgLQAAgQAKgYQAMgaALgTIgBgBIgMABIgNgBQgFAQgLAVIgLgFQAHgNAHgWIgEgfIAWAAIgCAUIAQABIAagCIAFAIQgMASgJAcQgLAeAAALQAAAIAHgBQAJABASgVQARgSANgcIAMAEQgMAcgYAcQgZAcgTAAQgJAAgGgGg");
	this.shape_16.setTransform(-90.95,44.85);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("Ag/BpIAshxQABgKgDgHQgDgIgIABIAEgOIAZAAIgBgNQAAgVALgMQANgMAQAAQATAAAIAOIgIAXQgBgHgFgFQgGgEgHgBQgJAAgIAIQgGAHAAAPIAAAIIAeAAIgFAOIgbAAIgzCJgAgPgVIAFgLIgHAAQACAEAAAHg");
	this.shape_17.setTransform(-100.65,44.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("Ag2A2QgKgLAAgRQAAgfAVgdQAWgeAaAAQAMAAAHAGQAGAHAAAKQAAAQgNAKQgOAKgQAAQgKAAgKgEQgGAQAAANQAAAZATAAQARAAAVgTQAWgUAPgeIAKAEQgPAjgcAaQgbAYgYAAQgPAAgKgLgAgOgrQgJAKgHAOQAGADAHAAQAMAAAIgIQAJgIAAgKQAAgKgJAAQgIAAgJAJg");
	this.shape_18.setTransform(-107.725,45.575);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AhUBbQgHgGgBgKIACAAQAUAAAQgPQASgOAKgVQANgWAIgVQAJgVALgUQAJgTAKgGQgKgDgOAAQgdAAgZAOQgYAOAAAYQAAANAIAHQAHAHANAAQAJAAAGgDQgJAOgWAAQgSAAgKgJQgLgKAAgQQAAgUARgPQASgQAZgHQAZgHAbAAQAlAAAVANQAVAPAAASQAAASgSAPQgSAPgfADIABABQAMACAGAIQAHAJgBANIAAAJIAAALQAAAWAKAAQAKAAAGgNIAHADQgFAQgLAHQgMAIgKAAQgZAAABgbIACgYIACgVQAAgKgEgEQgGgFgMgBIgNAjQgEAMgKARQgJAPgLAIQgMAHgMAAQgMAAgIgHgAASgfIgIAZQAaABARgNQAQgOAAgRQAAgVgZgLQgLAGgPAsg");
	this.shape_19.setTransform(-123.7,42.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_refreshingly, new cjs.Rectangle(-136.8,24.1,128.4,62.9), null);


(lib.txt_footStompin = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgPAPQgGgFAAgJQAAgIAHgHQAGgGAJAAQAJAAAGAFQAGAFAAAJQAAAIgHAHQgHAHgJAAQgIAAgGgGg");
	this.shape.setTransform(-6.575,69.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag6ByQgHgGAAgOQAAgKAEgMIAnhqIAghXIAdAAIghBXQgoBrAAAKQAAALAJAAQANAAAXgYQAWgYATgpIAOAGQgVAugdAhQgbAggcAAQgMAAgHgIg");
	this.shape_1.setTransform(-14.75,59.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag6ByQgHgGAAgOQAAgKAEgMIAnhqIAfhXIAeAAIghBXQgpBrAAAKQAAALAKAAQAOAAAVgYQAYgYASgpIAOAGQgVAugdAhQgbAggbAAQgNAAgHgIg");
	this.shape_2.setTransform(-23.6,59.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgTBNQgHgKACgOIgCAAQgWAggaAAQgPAAgHgLQgIgMAAgUQAAgZALgdQALgdAWgWQAVgVAZAAQAWAAAEARIACAAIACgMIAgAAIgaBFQgSAvAAAJQAAAKAKABQAPgBAXgcQAZgdAPgfIANAGQgTAqgeAiQgeAjgaAAQgNAAgGgIgAgngvQgQASgIAXQgKAWAAASQAAAXAQAAQAJAAALgIQALgJAFgNIADgHIADgHIATg0QAEgLgDgIQgEgHgJAAQgQAAgPASg");
	this.shape_3.setTransform(-36.375,63);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgZAiQAZgTAAgQQAAgFgDgDQgDgDgEAAQgEAAgCACIgBgHQAAgIAHgHQAGgIAKABQAIgBAGAGQAGAGAAAJQAAAQgQARQgOASgPAJg");
	this.shape_4.setTransform(-46.65,51.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhLBuQgLgHAAgNQAAgLAJgHQAJgGALgBQAOAAAHAKQgIgCgIADQgIAEgBAGQABAGAEADQAFAFAIAAQAQAAAMgRQAMgSAOgtIgCAAQgVAagYAAQgdAAAAggQAAgLADgLIASgwIAYg+IAcAAIgXA/IgSAyQgDAKADAGQADAIAKAAQAKAAALgJQAMgJAFgMIAphrIAcAAIgnBpIgJAYIgHAYIgFARQgLAigQAQQgPARgcAAQgVAAgLgJg");
	this.shape_5.setTransform(-62.05,66.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgZAhQAZgSAAgPQAAgGgDgDQgDgDgFAAQgDAAgCABIgBgFQAAgKAGgHQAHgGAJgBQAJABAGAFQAGAGAAAJQAAAQgPARQgOASgRAIg");
	this.shape_6.setTransform(-82.975,71.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgTByQgHgJACgOIgCAAQgWAfgaAAQgPAAgHgLQgIgMAAgTQAAgaALgeQALgbAWgWQAVgWAZAAQAXAAAFATIACAAIAhhdIAdAAIghBXQgpBrAAAKQAAAFADADQADADAEAAQANAAAXgYQAXgYATgpIANAGQgUAugdAhQgdAggaAAQgNAAgHgIgAgngKQgQARgIAXQgKAXAAASQAAAXAQAAQAJAAALgIQALgJAFgNIADgHIADgHIAGgPIAHgUIAGgRQAEgLgDgHQgEgHgJAAQgQAAgPARg");
	this.shape_7.setTransform(-94.975,59.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhVBHQgLgOAAgWQAAgnAdgoQAcgoAkAAQARAAAKAMQAKANAAAVQAAAegRAhQAmAAAcg5IAOAHQgPAhgXAUQgYATgYAAIgHgBQgaAngiAAQgUAAgJgOgAghgvQgPAUgJAaQgJAZAAAUQAAAXAOAAQAQAAATggQgLgLAAgSQAAggAggjQgDgFgGgBQgNABgPATgAgMgEQAAAKAFAHQAOgiAAgaIAAgDQgTAZAAAVg");
	this.shape_8.setTransform(-111.325,63);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhVBHQgLgOAAgWQAAgnAdgoQAcgoAkAAQARAAAKAMQAKANAAAVQAAAegRAhQAmAAAcg5IAOAHQgPAhgXAUQgYATgYAAIgHgBQgaAngiAAQgUAAgJgOgAghgvQgPAUgJAaQgJAZAAAUQAAAXAOAAQAQAAATggQgLgLAAgSQAAggAggjQgDgFgGgBQgNABgPATgAgMgEQAAAKAFAHQAOgiAAgaIAAgDQgTAZAAAVg");
	this.shape_9.setTransform(-126.475,63);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhMBxQgKgIgBgNQAAgKAJgIQAIgGAMAAQAPAAAHAKIgHgBQgJAAgFADQgEAEAAAFQAAAGAEADQAFAEAJAAQARAAAKgQQAMgRAOguIgBAAQgUAZgXAAQgOABgIgMQgIgMAAgTQAAgpAcgrQAagqAkAAQAWAAAFATIACAAIAAgPIAhAAIgoBqQgLAagLAmQgLAjgPAQQgQAQgbABQgWAAgLgJgAABhTQgQARgIAXQgKAXAAATQAAAVAQAAQAJABAKgJQALgJAGgMIACgHIAEgHIAKgbIAJgZIACgMQAAgOgPAAQgPAAgPASg");
	this.shape_10.setTransform(-143.7,66.65);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgZAhQAZgSAAgQQAAgFgDgDQgDgDgEAAQgEAAgCACIgBgHQAAgIAHgHQAGgIAJABQAKAAAFAFQAGAGAAAJQAAAQgPARQgOASgRAJg");
	this.shape_11.setTransform(13.15,20.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgUBOQgIgHAAgMQAAgNATgqQARgoAAgLQAAgPgOAAQgJAAgJAHQgKAJgFANIgsB0IgdAAIA9iiIAfAAIgKAPIACAAQARgUAWAAQAOAAAIAHQAHAIAAAMQAAAOgSAqQgSAoAAAJQAAAJAJAAQAOgBAbgYQAbgYASgoIAOAHQgUAqggAiQgiAigcAAQgNAAgGgHg");
	this.shape_12.setTransform(-1.925,32.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ag7BmQgGgIAAgOIAAgHIADgKIADgMIAGgOIAFgPIAHgRIAGgRIAQgpIAdAAIgKAZIgQArQgSAwAAAIQAAALAJAAQAQAAAWgcQAZgeAPgeIANAGQgTAqgeAiQgcAjgbAAQgNAAgIgJgAgEhPQgEgEgBgGQAAgJAHgGQAFgGAHAAQAIAAAEAFQAEAEAAAHQABAIgHAGQgHAGgHAAQgHAAgDgFg");
	this.shape_13.setTransform(-13.9,29.925);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ah+CDIBjkFIAdAAIgNAgIABAAQAOgSAUABQARAAAMAMQALAMAAAXQAAAZgNAdQgOAbgVAPIAAABQAagFAdgaQAbgZAPglIAOAHQgVAxgiAeQgkAggsAAQglgBgNgWIgCAAIglBkgAgFgmQgQADgNARQgMAQAAAPQAAATARAAQAPAAAOgRQAPgPAJgXQAJgXAAgSQAAgegXAAQgUAAgKAWIgNAhQAIgDAHAAQAJAAAEAEg");
	this.shape_14.setTransform(-28.875,35.65);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AARBOQgIgHAAgMQAAgNATgqQARgpABgKQgBgHgDgEQgEgFgHABQgJAAgKAHQgJAJgEANIgrB0IgeAAIAphuQAEgKAAgIQAAgRgPAAQgVAAgMAeIgsBzIgdAAIA9iiIAfAAIgKAPIACAAQAUgUAWAAQAOAAAGAHQAHAHgBALIACAAQASgZAaAAQAPAAAIAHQAHAIAAAMQABAOgTAqQgSAoAAAJQAAAJAJAAQAOgBAbgYQAagYATgoIAOAHQgUAqggAiQgiAigcAAQgOAAgGgHg");
	this.shape_15.setTransform(-47.95,32.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhVBHQgLgOAAgVQAAgnAdgpQAcgoAkAAQARAAAKANQAKALAAAWQAAAegRAhQAmAAAcg5IAOAHQgPAhgXAUQgYASgYABIgHgBQgaAngiAAQgUAAgJgOgAghgvQgPAUgJAaQgJAaAAATQAAAXAOgBQAQAAATgeQgLgMAAgSQAAggAggjQgDgFgGgBQgNABgPATgAgMgEQAAAKAFAHQAOghAAgbIAAgDQgTAYAAAWg");
	this.shape_16.setTransform(-66.775,32.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhBBHQAAgKADgKQAOgpAWg4IgWAAIAEgSIAZAAIAJgjIAhAAIgQAjIAdAAIgFASIgdAAQglBjAAAKQAAAIAKAAQANAAAXgYQAXgYARgoIAPAHQgVAtgdAhQgbAggcAAQgaAAAAgdg");
	this.shape_17.setTransform(-78.85,31.025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhEBHQgNgMABgbIAMgDQAAAOAGAKQAGAJAKAAQAMAAAIgNQAIgNAAgWIgCgZIgBgmIgBAAQgKAbgJAOIgOgGQAYg0AEgRIAgAAQgDANAAANQAAAQAFAZQAFAaAAAIQAAAMgEAHQgEAJgIAJIABACQAmgaAihFIAMAGQgXA5ggAeQgeAdgfAAQgUAAgNgNg");
	this.shape_18.setTransform(-89.2537,32.925);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AhBBHQAAgKAEgKQANgpAXg4IgYAAIAGgSIAYAAIAKgjIAfAAIgPAjIAdAAIgGASIgcAAQgkBjAAAKQAAAIAJAAQANAAAWgYQAYgYASgoIAOAHQgVAtgdAhQgbAggcAAQgaAAAAgdg");
	this.shape_19.setTransform(-107.7,31.025);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhVBHQgLgOAAgVQAAgnAdgpQAcgoAkAAQARAAAKANQAKALAAAWQAAAegRAhQAmAAAcg5IAOAHQgPAhgXAUQgYASgYABIgHgBQgaAngiAAQgUAAgJgOgAghgvQgPAUgJAaQgJAaAAATQAAAXAOgBQAQAAATgeQgLgMAAgSQAAggAggjQgDgFgGgBQgNABgPATgAgMgEQAAAKAFAHQAOghAAgbIAAgDQgTAYAAAWg");
	this.shape_20.setTransform(-119.725,32.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AhVBHQgLgOAAgVQAAgnAdgpQAcgoAkAAQARAAAKANQAKALAAAWQAAAegRAhQAmAAAcg5IAOAHQgPAhgXAUQgYASgYABIgHgBQgaAngiAAQgUAAgJgOgAghgvQgPAUgJAaQgJAaAAATQAAAXAOgBQAQAAATgeQgLgMAAgSQAAggAggjQgDgFgGgBQgNABgPATgAgMgEQAAAKAFAHQAOghAAgbIAAgDQgTAYAAAWg");
	this.shape_21.setTransform(-134.875,32.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AiDBiIAEAAQASAAAQgJQAQgIAMgQQAPgUAHgNIATgmIgcAAIAEgSIAfAAIAOggIAKgWQAHgNAHgHQgzgPgYAAQgjgBgRASQgRAPAAAXQAAARAMALQALAMASgBIASgCQgNASgcAAQgXAAgOgQQgOgPAAgVQAAgdAZgWQAYgWAuAAQATAAA2AFQA2AFAaAAQAqAAAXgKQgYArgsABQgVAAgigKQgMAMgRA6IAaAAIgFASIgaAAIgJAfIgMAfQgIAUgGAJIgQAWQgJAMgLAFQgMAFgMABQghAAgDggg");
	this.shape_22.setTransform(-147.075,28.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_footStompin, new cjs.Rectangle(-166.5,5.4,182.2,79.19999999999999), null);


(lib.txt_flavorful = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgrBVQgGgFABgJQAAgIADgIIAchQIAYhBIAVAAIgXBBQgfBQAAAHQAAAJAIAAQAKgBAQgSQARgRAOggIALAFQgQAjgWAYQgUAYgUAAQgKABgFgHg");
	this.shape.setTransform(-29.65,21.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgOA3QgFgGABgLIgBAAQgRAYgTAAQgXAAAAgYQAAgIADgKIANgiIASgvIAWAAIgSAvIgNAlQgDAIACAFQADAGAHAAQAIAAAIgHQAJgGAFgLIAchPIAWAAIgTA0QgOAjAAAGQAAAJAIAAQAMAAARgVQARgVAMgYIAKAEQgPAfgWAaQgWAagUAAQgJAAgFgHg");
	this.shape_1.setTransform(-39.175,24.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag+BnIArhvQACgKgEgHQgDgHgHAAIADgNIAZAAIgBgNQAAgUALgMQAMgNAQAAQATAAAIAOIgIAYQgCgIgEgFQgFgEgIAAQgJAAgHAIQgHAHABAOIAAAIIAdAAIgFANIgbAAIgyCHgAgPgUIAFgMIgGAAQACAEgBAIg");
	this.shape_2.setTransform(-49.35,23.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgiBBQgFgFAAgMQAAgQAKgYQALgZALgTIAAAAIgNABIgMgBQgFAPgLAVIgKgFQAGgMAHgWIgEgfIAVAAIgCAUIARABIAZgBIAFAGQgMATgJAbQgLAdAAALQAAAIAHAAQAJAAASgUQARgTAMgbIALAEQgLAcgYAbQgYAcgTAAQgJAAgGgGg");
	this.shape_3.setTransform(-56.175,23.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhAA1QgHgKAAgQQAAgeAVgeQAVgdAbAAQAMgBAIAKQAHAJAAARQAAAVgNAZQAdAAAVgrIAKAGQgLAYgRAOQgSAPgSAAIgFAAQgTAdgagBQgPAAgHgKgAgZgjQgLAPgHAUQgHATAAAOQAAARALAAQAMAAAOgXQgIgJAAgOQAAgXAYgaQgCgFgFAAQgKAAgLAPgAgJgCQAAAHAEAFQAKgaAAgTIAAgCQgOASAAARg");
	this.shape_4.setTransform(-67.725,24.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgfA9IAHhmIgBAAQgGAPgJAQIgNACQAOgaAHgaIAcAAIgFBdIABAAIASgeQAIgMAHgRQAJgVAAgNIAUAAQgGAXgdAvIgdAzg");
	this.shape_5.setTransform(-79.375,24.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgOA5QgFgHABgKIgBAAQgRAYgTgBQgLAAgGgIQgGgJAAgPQAAgSAJgWQAIgVAQgQQAQgRATABQAQgBADANIABAAIABgJIAZAAIgUA0QgNAjAAAGQAAAJAHAAQALgBASgVQASgWAMgXIAKAFQgPAfgWAZQgXAagTAAQgJAAgFgGgAgdgjQgMANgGARQgHARAAAOQAAARALAAQAHAAAJgHQAHgGAFgKIACgFIACgGIAOgmQADgJgDgFQgCgFgHAAQgMAAgLANg");
	this.shape_6.setTransform(-90.725,24.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgrBVQgGgFABgJQAAgIADgIIAchQIAYhBIAVAAIgXBBQgfBQAAAHQAAAJAIAAQAKgBAQgSQARgRAOggIALAFQgQAjgWAYQgUAYgUAAQgKABgFgHg");
	this.shape_7.setTransform(-100.75,21.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhiBJIADAAQANAAAMgGQANgHAJgMQALgOAFgKIAOgcIgUAAIACgOIAYAAIAKgXIAIgRQAEgKAGgFQgmgLgSAAQgaAAgNAMQgMAMAAAQQAAAOAIAIQAJAIANAAIAOgCQgKAOgVAAQgRAAgLgLQgLgMAAgQQAAgWATgQQASgQAiAAQAOAAApADQAoAEAUAAQAfAAARgIQgRAhghAAQgQAAgagHQgJAIgMAsIAUAAIgEAOIgUAAIgHAXIgIAXQgGAPgFAHIgLAQQgIAJgIAEQgJAEgJAAQgYAAgDgYg");
	this.shape_8.setTransform(-107.4,21.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag3BTQgJgGAAgJQAAgJAHgFQAGgFAIAAQALAAAGAIQgGgCgGACQgHACAAAGQAAAEADACQAEAEAHAAQALAAAJgNQAJgNAKgiIgBAAQgQATgRAAQgWAAAAgXQAAgIACgJIANgjIASgvIAVAAIgQAvIgOAmQgCAHABAEQADAHAHAAQAIgBAHgGQAKgHAEgJIAdhQIAWAAIgdBPIgHARIgFASIgEANQgIAZgMANQgLAMgUAAQgRAAgHgGg");
	this.shape_9.setTransform(-21.45,3.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgrBWQgFgGgBgJQAAgIADgJIAehQIAXhAIAWAAIgZBBQgdBQAAAHQAAAJAGAAQAKAAAQgTQASgRAOggIAKAFQgPAjgWAZQgUAXgVAAQgIAAgGgFg");
	this.shape_10.setTransform(-28.25,-1.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag5BVQgHgHgBgJQABgIAGgFQAHgFAIAAQAKAAAGAHIgFgBQgGAAgEADQgEADAAAEQAAAEAEACQADADAHAAQANAAAHgMQAJgMAKgjIgBAAQgOATgRAAQgLAAgFgIQgHgJAAgPQAAgeAVggQAUggAaAAQARAAAEAPIABAAIAAgLIAZAAIgfBPQgHATgIAdQgJAZgLAMQgLANgVAAQgQAAgJgGgAABg+QgMANgGARQgHASAAANQAAAQALAAQAIAAAHgGQAHgGAFgJIACgFIACgGIAHgUIAIgTIABgJQAAgKgLAAQgMAAgKANg");
	this.shape_11.setTransform(-38.7,3.775);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgPA7QgGgGAAgJQAAgKAOgfQANgeAAgIQAAgLgKAAQgHgBgHAHQgHAGgEAJIggBXIgWAAIAth5IAYAAIgIAMIABAAQANgQAQAAQALABAGAFQAFAGAAAIQAAALgNAgQgOAeAAAFQAAAIAHAAQAKAAAUgTQAUgSAOgeIAKAFQgOAggZAZQgZAagUgBQgKAAgFgEg");
	this.shape_12.setTransform(-49.175,1.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgrBMQgGgGAAgKIABgGIACgHIADgJIAEgKIADgLIAGgNIAFgNIALgfIAWAAIgIATIgMAgQgNAkAAAGQAAAJAHAAQAMAAAQgVQASgXAMgWIAKAEQgPAfgWAaQgVAagUAAQgKAAgFgHgAgDg6QgDgEAAgFQAAgGAEgEQAEgFAGAAQAFAAAEAEQADADAAAFQAAAGgFAEQgFAFgGAAQgEAAgDgDg");
	this.shape_13.setTransform(-58.125,-0.875);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AANA7QgGgGAAgJQAAgKAOgfQANgfAAgHQAAgEgCgFQgDgCgGAAQgGgBgHAHQgHAGgDAJIghBXIgWAAIAfhSQADgHAAgHQAAgNgMABQgPgBgJAXIghBWIgWAAIAuh5IAXAAIgIAMIACAAQAPgQAQAAQALAAAFAGQAEAFAAAIIABAAQAOgSATgBQALABAGAFQAGAGAAAIQAAALgOAgQgNAeAAAFQAAAIAGAAQALAAAUgTQAUgSAOgeIAKAFQgPAggYAZQgZAagWgBQgJAAgFgEg");
	this.shape_14.setTransform(-71.175,1.05);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgiBBQgFgFAAgMQAAgQAKgYQALgZALgTIAAAAIgNABIgMgBQgFAPgLAVIgKgFQAGgMAHgWIgEgfIAVAAIgCAUIARABIAZgBIAFAGQgMATgJAbQgLAdAAALQAAAIAHAAQAJAAASgUQARgTAMgbIALAEQgLAcgYAbQgYAcgTAAQgJAAgGgGg");
	this.shape_15.setTransform(-83.975,0.325);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgOA5QgFgGABgLIgBAAQgRAYgTgBQgLAAgGgIQgGgJAAgOQAAgUAJgVQAIgVAQgQQAQgQATgBQAQABADANIABAAIABgKIAZAAIgUA0QgNAjAAAGQAAAJAHAAQALAAASgWQASgWAMgXIAKAFQgPAfgWAZQgXAagTAAQgJAAgFgGgAgdgjQgMANgGASQgHAQAAANQAAARALABQAHgBAJgGQAHgGAFgKIACgFIACgGIAOgmQADgIgDgGQgCgFgHAAQgMAAgLANg");
	this.shape_16.setTransform(-96.175,1.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgPBXQgGgGAAgJQAAgKAOgfQANgfAAgHQAAgEgDgFQgDgCgEAAQgIgBgGAHQgHAGgEAIIggBYIgWAAIBEi0IAUAAIgZBDIABAAQAMgMAPAAQAKABAGAFQAGAGAAAIQAAALgNAfQgOAeAAAHQAAAGAHABQAKAAAVgTQATgSAOgfIAKAFQgOAhgZAZQgZAagUgBQgKAAgFgEg");
	this.shape_17.setTransform(-109.725,-1.75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("Ag4BRQgPgTAAgfQAAgcANgdQALgeAYgVQAXgWAdAAQAVAAALAMQALAMAAARQAAAUgMAQQgNAQgSAAQgMAAgFgHQgHgHAAgKQAAgMAIgLQAIgLANgEQgMALAAAPQAAAGADADQADAEAGAAQAJAAAHgKQAHgLAAgMQAAgLgHgIQgHgIgOAAQgUAAgQASQgSASgJAZQgIAZAAAYQAAAaAKARQALARAUAAQANAAANgIQAMgIAJgOIAHAFQgKAVgSALQgSAMgVAAQgcAAgOgTg");
	this.shape_18.setTransform(-123.425,-1.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_flavorful, new cjs.Rectangle(-134.6,-20,121.89999999999999,61.7), null);


(lib.txt_allNatural = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgyA1QgJgJAAgUIAJgCQAAAKAFAHQAEAHAIAAQAIAAAGgKQAGgKAAgQIgBgSIgBgcIgBAAQgHAUgHAKIgKgEQASgnADgMIAXAAQgCAJAAAKQAAAMADASQAEATAAAGQAAAJgDAGQgDAGgGAHIABABQAcgTAZgzIAJAEQgRArgXAVQgWAWgXAAQgQAAgJgJg");
	this.shape.setTransform(-19.9513,80.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgwA0QAAgHADgHQAKgfAQgpIgRAAIAEgNIASAAIAHgaIAYAAIgMAaIAWAAIgEANIgWAAQgaBJAAAHQAAAHAHAAQAKAAAQgSQARgSANgdIALAEQgQAigVAYQgUAYgUAAQgUAAAAgWg");
	this.shape_1.setTransform(-27.125,79.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgPA6QgFgGAAgIQAAgKANgfQAMgeAAgIQAAgLgJAAQgHAAgHAGQgHAGgEAKIggBVIgVAAIAth3IAXAAIgIALIACAAQAMgPAQAAQAKAAAGAFQAGAGAAAJQAAALgOAfQgNAdAAAGQAAAHAGAAQALAAAUgSQATgSAOgdIAKAEQgOAggYAYQgZAagUAAQgKAAgFgFg");
	this.shape_2.setTransform(-37.225,80.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag1A0QgKgLAAgQQAAgeAVgcQAVgdAaAAQAMAAAGAGQAHAGgBAKQAAAPgNAKQgNAKgQAAQgKAAgKgEQgFAQAAAMQAAAYATAAQAQAAAUgSQAVgTAPgdIAKAEQgPAigbAYQgaAYgXAAQgPAAgKgLgAgNgqQgJAJgHAPQAGACAGAAQAMAAAHgHQAJgIAAgKQAAgKgJAAQgHAAgIAJg");
	this.shape_3.setTransform(-47.55,80.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgrBLQgFgGAAgKIAAgFIADgIIACgIIAEgLIAEgLIAFgNIAFgMIALgeIAWAAIgIASIgLAgQgOAjAAAHQAAAIAHAAQAMAAAQgVQASgWALgWIAKAEQgOAfgWAZQgVAagUAAQgJAAgGgHgAgDg6QgDgDAAgFQAAgGAFgFQADgEAGAAQAFAAADADQAEAEAAAFQAAAFgFAFQgFAEgGAAQgEAAgDgDg");
	this.shape_4.setTransform(-56.025,78.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgOBUQgFgGABgLIgBAAQgRAYgSAAQgLgBgGgIQgGgJAAgOQAAgTAJgWQAIgUAQgQQAPgQATAAQARAAADAOIABAAIAZhFIAWAAIgZBAQgeBPAAAHQAAAEACACQACADAEAAQAJAAARgSQARgSAOgfIAKAFQgPAjgWAXQgVAZgUAAQgJgBgFgGgAgcgHQgMANgHAQQgGARAAAOQAAARALAAQAHAAAIgHQAIgGAEgKIACgEIACgGIAEgLIAGgPIAEgMQADgIgDgGQgCgFgHAAQgLAAgLANg");
	this.shape_5.setTransform(-65.475,77.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag1A0QgJgLAAgQQAAgeAUgcQAWgdAZAAQAMAAAGAGQAGAGAAAKQAAAPgNAKQgNAKgQAAQgKAAgKgEQgFAQAAAMQAAAYASAAQARAAAVgSQAUgTAPgdIALAEQgPAigcAYQgaAYgXAAQgPAAgKgLgAgOgqQgJAJgGAPQAFACAIAAQALAAAHgHQAJgIAAgKQAAgKgJAAQgIAAgIAJg");
	this.shape_6.setTransform(-76.75,80.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AghBAQgGgFAAgLQAAgQAKgYQAMgZAKgSIAAgBIgMABIgNgBQgFAQgLAUIgKgFQAHgMAGgWIgDgeIAVAAIgCATIAQACIAZgCIAFAHQgLASgJAcQgLAcAAAKQAAAIAGAAQAJAAASgTQARgTAMgbIALAEQgLAbgYAcQgYAbgTAAQgIAAgGgGg");
	this.shape_7.setTransform(-86.225,79.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag3BUQgJgHAAgJQAAgIAHgFQAGgFAIAAQALAAAGAIIgGgBQgGAAgDACQgEADAAAEQAAAEAEACQADADAHAAQAMAAAIgMQAIgMALgiIgCAAQgOATgQAAQgLAAgGgJQgGgJAAgOQAAgeAUggQAUgfAaAAQARAAAEAOIABAAIAAgKIAYAAIgdBNQgIAUgJAcQgIAZgLAMQgLANgVAAQgPAAgIgGgAABg+QgLAOgHAQQgGASAAANQAAAQALAAQAHAAAHgGQAIgHAEgIIACgFIACgGIAIgTIAHgUIABgIQAAgLgLAAQgLAAgLANg");
	this.shape_8.setTransform(-99.225,82.825);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgPA6QgFgGAAgIQAAgKANgfQAMgeAAgIQAAgLgJAAQgHAAgHAGQgHAGgEAKIggBVIgVAAIAth3IAXAAIgIALIACAAQAMgPAQAAQAKAAAGAFQAGAGAAAJQAAALgOAfQgNAdAAAGQAAAHAGAAQALAAAUgSQATgSAOgdIAKAEQgOAggYAYQgZAagUAAQgKAAgFgFg");
	this.shape_9.setTransform(-109.575,80.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ag3BaQgHgGgBgKIADAAQASAAAQgNQAQgNALgVQALgTAKgVIARgoQAJgVAEgGIgUgDIgYgCQgXAAgNAKQgOALAAANQAAAJAIAHQAHAGAOAAQAIAAAFgCQgLAOgWAAQgQAAgJgJQgKgJABgPQAAgVATgNQAUgMAcAAIAfACIAeADIAFAAIADAEQgHAKgJAaIgQAwIgSAvQgJAXgOAPQgOAPgSAAQgLAAgIgHg");
	this.shape_10.setTransform(-121.35,77.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgqBVQgGgGAAgKQAAgGADgKIAdhOIAXhBIAWAAIgYBBQgeBPAAAHQAAAIAGAAQALAAAPgSQARgRAPgeIAKAEQgPAigWAZQgUAYgUgBQgKAAgEgFg");
	this.shape_11.setTransform(-35.65,53.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgOA4QgFgGABgKIgBAAQgRAXgSAAQgLAAgGgJQgGgJAAgOQAAgTAJgVQAIgVAQgQQAPgQATAAQAQAAADANIABAAIABgJIAZAAIgUAzQgNAiAAAGQAAAJAHAAQALAAASgVQASgVALgXIAKAEQgOAfgWAZQgXAagTAAQgJAAgFgHgAgcgjQgMAOgHAQQgGARAAANQAAARALAAQAHAAAIgGQAIgHAEgJIACgFIACgGIAOgmQADgIgDgFQgCgGgHAAQgLAAgLANg");
	this.shape_12.setTransform(-45.125,56.675);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AghBAQgGgFAAgMQAAgPAKgYQAMgZAKgSIAAgBIgMABIgNgBQgFAPgLAVIgKgFQAHgMAGgWIgDgeIAVAAIgCAUIAQABIAZgCIAFAGQgLAUgJAaQgLAdAAALQAAAHAGAAQAJAAASgTQARgTAMgbIALAFQgLAagYAcQgYAbgTAAQgIAAgGgGg");
	this.shape_13.setTransform(-55.925,55.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgNA2QgGgFABgLIgBAAQgRAXgTAAQgWAAAAgYQAAgHADgKIAMgiIASguIAWAAIgRAuIgOAlQgCAIACAEQACAGAHAAQAIAAAJgGQAIgHAFgKIAchOIAVAAIgTAzQgNAiAAAHQAAAIAIAAQALAAARgVQASgUALgYIAKAEQgOAfgWAZQgWAagUAAQgIAAgFgHg");
	this.shape_14.setTransform(-68.05,56.85);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgwA0QAAgHADgHQAKgfAQgpIgRAAIAEgNIASAAIAHgaIAYAAIgMAaIAWAAIgEANIgWAAQgaBJAAAHQAAAHAHAAQAKAAAQgSQARgSANgdIALAEQgQAigVAYQgUAYgUAAQgUAAAAgWg");
	this.shape_15.setTransform(-77.525,55.575);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgOA4QgFgGABgKIgBAAQgRAXgSAAQgLAAgGgJQgGgJAAgOQAAgTAJgVQAIgVAQgQQAPgQATAAQAQAAADANIABAAIABgJIAZAAIgUAzQgNAiAAAGQAAAJAHAAQALAAASgVQASgVALgXIAKAEQgOAfgWAZQgXAagTAAQgJAAgFgHgAgcgjQgMAOgHAQQgGARAAANQAAARALAAQAHAAAIgGQAIgHAEgJIACgFIACgGIAOgmQADgIgDgFQgCgGgHAAQgLAAgLANg");
	this.shape_16.setTransform(-87.025,56.675);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("Ah9BfQgHgGgBgKIADAAQBEAAAxilIAUAAIAAASQAAAdAJAtQAJAvAAAIIABAAQAVhKALgaQAXg5AegFIAFAAQALAAAEAGQADAFAAANQgHgEgHAAQgMAAgKAHQgLAJgHAKQgGAKgIAVQgIAVgEAOIgMAoIgMAqIgdAAQADgGAAgJQAAgLgIgqQgIgngCghIgBAAQgkCVg3AAQgMAAgHgHg");
	this.shape_17.setTransform(-101.7219,53.55);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgqBVQgGgGAAgKQAAgGADgKIAdhOIAXhBIAWAAIgZBBQgdBPAAAHQAAAIAHAAQAJAAARgSQARgRANgeIALAEQgPAigWAZQgUAYgUgBQgKAAgEgFg");
	this.shape_18.setTransform(-58.75,30.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgrBVQgFgGAAgKQAAgGADgKIAdhOIAXhBIAVAAIgYBBQgdBPAAAHQAAAIAHAAQAJAAARgSQAQgRAOgeIALAEQgQAigVAZQgUAYgUgBQgKAAgFgFg");
	this.shape_19.setTransform(-65.4,30.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhaBcQgHgHgBgJIADAAQAcAAAWgTQAWgSAUgfIgSAAIAEgMIAWAAIAPgbIAQgaIAOgUQAIgLAHgFQAHgFAHAAQAHAAAFAGQAFAFABAKQAAAYgSAxIALAAIgEAMIgMAAQgLAfAAANQAAAJADAFQADAFAGAAQAKAAAHgOIAHADQgFAQgMAHQgLAIgMAAQgLAAgFgIQgGgIAAgNQAAgSAOgkIggAAQgVApgXAZQgWAZgaAAQgLAAgGgHgAA9hJQgIANgMAYIgPAgIAeAAIAEgKIAEgLIADgJQAMgcAAgQQAAgHgEAAQgGAAgIAMg");
	this.shape_20.setTransform(-81.15,30.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_allNatural, new cjs.Rectangle(-131.8,12.4,117.80000000000001,84.5), null);


(lib.sweetTea_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgMYApgQgVgKgWgPQgtgggHgcIgFltQAEgqAKgwQAUhfAfgZIAZgjQgGgPgHgZQgOgygDgyQA8pOAKhLIAFtDQAAhpgKg3QgNiggNinQgZlPAGglIADgsQACgvgKgTIgZgtIgLhDQgNhRgHhPQgWj6Arh3IATgvQAag/AnhIQB+jqDOj9IAFg8IgFguIgNgEQgRgGgPgKQgagPgDgEQgKgNAEghIgQgPIAumBIAPgeQAWgjAcgZQBSgeCTgRQEjgjE/A+IArAZIAvBVIAKFPQAKAMAIANQAQAagJAJQgEADgEAHQgJANgDAWQgEAIgIAHQgRAPgWAAIgJCNQBXBmBhCOQDAEaAsDCQgFCEgMCNQgYEZgiApQAPBVgFAeIg8JSQgUBaAAAtQAKLGgFA8IADAyQAEA1ADAWQBaLfgKAFIgJA5QgHA9AGAWIATBEQAWBUANBSQApEEhBCDQgYAMgvAOQhfAbh3ANQkTALkzACIhTAAQogAAiXgsg");
	mask.setTransform(3.7892,-18.0661);

	// Layer_1
	this.instance = new lib.sweetTea();
	this.instance.setTransform(-120.5,-289.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sweetTea_mc, new cjs.Rectangle(-85.5,-288,178.6,539.9), null);


(lib.raspBerrty_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgMYApvQgVgKgWgPQgtgggHgcIgFltQAEgqAKgwQAUhfAfgZIAZgjQgGgPgHgZQgOgygDgyQA8pOAKhLIAFtDQAAhpgKg3QgNiggNinQgZlPAGglIADgsQACgvgKgTIgZgtIgNhDQgOhRgJhPQgbj6Arh3IAQgvQAWg/AkhIQB0jqDOj9IAPgNQARgTADgcIgFguIgNgEQgRgGgPgKQgagPgDgEQgKgNAEghIgQgPIAumfIAPgeQAWgjAcgZQBSgeCTgRQEjgjE/A+IArAZIAvBVIAKFtQAKAMAIANQAQAagJAJQgEADgEAHQgJANgDAWQgEAIgIAHQgRAPgWAAIALCNQA5BLBQB/QCgD/BxEHQgICEgOCNQgdEZgiApQAPBVgFAeIg8JSQgUBaAAAtQAKLGgFA8IADAyQAEA1ADAWQBQLfgKAFIgJA5QgHA9AGAWIAVBEQAYBUAOBSQAuEEhBCDQgdAMg0AOQhpAbh3ANQkOALkuACIhRAAQoYAAiXgsg");
	mask.setTransform(3.775,-19.5661);

	// Layer_1
	this.instance = new lib.raspberry();
	this.instance.setTransform(-119.5,-295.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.raspBerrty_mc, new cjs.Rectangle(-85.5,-291,178.6,542.9), null);


(lib.peach_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgMPApMQgVgKgWgPQgtgggHgcIgFltQAEgqAKgwQAUhfAfgZIAZgjQgGgPgHgZQgOgygDgyQA8pOAKhLIAFtDQAAhpgKg3QgNifgNioQgZlPAGglIADgsQACgvgKgTIgZgtIgLhDQgNhRgHhPQgWj6Arh3IATgvQAag/AnhIQB+jqDOj9IAFg8IgFguIgNgEQgRgGgPgKQgagPgDgEQgKgNAEghIgQgPIAulZIAPgeQAWgjAcgZQBSgeCTgRQEjgjE/A+IArAZIAvBVIAKEnQAKAMAIANQAQAagJAJQgEADgEAHQgJANgDAWQgEAIgIAHQgRAPgWAAIgdCNQBbCNBiChQDEFBAjBhQAACEgHCNQgOEZgiApQAPBVgFAeIg8JSQgUBaAAAtQAKLGgFA8IADAyQAEA1ADAWQBQLfgKAFIgJA5QgHA9AGAWIASBEQAUBUALBSQAkEEhBCDQgYAMgvAOQhfAbh3ANQkOALkuACIhSAAQoXAAiXgsg");
	mask.setTransform(2.8884,-16.0661);

	// Layer_1
	this.instance = new lib.peach();
	this.instance.setTransform(-121.5,-295.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.peach_mc, new cjs.Rectangle(-85.5,-284,176.8,535.9), null);


(lib.new_TAB = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// NEW
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAXA1IgXhIIgXBIIgUAAIgfhpIAZAAIARBDIABAAIAWhDIAUAAIAXBFIAShFIAXAAIgfBpg");
	this.shape.setTransform(-1.05,22.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgkA1IAAhpIBHAAIAAAWIgwAAIAAATIAtAAIAAAVIgtAAIAAAVIAyAAIAAAWg");
	this.shape_1.setTransform(-13.025,22.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAUA1IgthKIgBAAIAABKIgXAAIAAhpIAgAAIAsBJIAAhJIAXAAIAABpg");
	this.shape_2.setTransform(-23.975,22.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1A91CF").s().p("AlgFhQiTiSAAjPQAAjOCTiSQCSiTDOAAQDPAACSCTQCTCSAADOQAADPiTCSQiSCTjPAAQjOAAiSiTg");
	this.shape_3.setTransform(-11.55,-10.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.new_TAB, new cjs.Rectangle(-61.5,-60.5,100,100), null);


(lib.lemon_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgMPApMQgVgKgWgPQgtgggHgcIgFltQAEgqAKgwQAUhfAfgZIAZgjQgGgPgHgZQgOgygDgyQA8pOAKhLIAFtDQAAhpgKg3QgNifgNioQgZlPAGglIADgsQACgvgKgTIgZgtIgLhDQgNhRgHhPQgWj6Arh3IATgvQAag/AnhIQB+jqDOj9IAFg8IgFguIgNgEQgRgGgPgKQgagPgDgEQgKgNAEghIgQgPIAulZIAPgeQAWgjAcgZQBSgeCTgRQEjgjE/A+IArAZIAvBVIAKEnQAKAMAIANQAQAagJAJQgEADgEAHQgJANgDAWQgEAIgIAHQgRAPgWAAIgdCNQBbCNBiChQDEFBAjBhQAACEgHCNQgOEZgiApQAPBVgFAeIg8JSQgUBaAAAtQAKLGgFA8IADAyQAEA1ADAWQBQLfgKAFIgJA5QgHA9AGAWIASBEQAUBUALBSQAkEEhBCDQgYAMgvAOQhfAbh3ANQkOALkuACIhSAAQoXAAiXgsg");
	mask.setTransform(2.8884,-16.0661);

	// Layer_1
	this.instance = new lib.lemonTea();
	this.instance.setTransform(-119.5,-289.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lemon_mc, new cjs.Rectangle(-85.5,-284,176.8,535.9), null);


(lib.findUs_TAB = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgPAmQgGgCgGgFIAMgOQADAEAEACQAEACAEAAIADgBIAEgBIADgDIABgDQAAgEgDgCIgHgDIgHgDQgFgBgEgDQgEgBgDgEQgCgEAAgGQAAgHACgEQADgFAEgDQAEgDAFgCQAFgBAFAAQAHAAAGACQAGABAEAFIgLAMQgCgCgEgBIgGgCIgEABIgDABIgDACIgBAEQAAAEADABIAFAEIAJACQAEABAEADQAEABADAEQADAEAAAHQAAAGgDAFQgCAFgEADQgEADgGACQgFABgFAAQgHAAgHgCg");
	this.shape.setTransform(20.125,-22.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNAlQgGgDgEgEQgEgEgCgGQgCgFAAgHIAAguIAQAAIAAAtQAAAEACADIADAFQACACADABIAFACQADAAADgCQADgBACgCQACgCABgDIABgHIAAgtIARAAIAAAuQAAAHgCAFQgCAGgEAEQgEAEgGADQgGACgIAAQgHAAgGgCg");
	this.shape_1.setTransform(12.825,-22.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiAmIAAhLIAZAAQAJAAAHACQAJACAGAEQAGAFAEAHQADAIAAAJQAAAJgDAIQgEAHgGAEQgGAFgIADQgHACgIAAgAgSAXIAJAAQAGAAAEgCQAFgBAEgCQADgDADgFQACgEAAgGQAAgFgCgFQgDgEgDgCQgEgDgEgBQgEgCgGAAIgKAAg");
	this.shape_2.setTransform(1.025,-22.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAOAmIggg1IgBAAIAAA1IgQAAIAAhLIAXAAIAfA0IAAg0IARAAIAABLg");
	this.shape_3.setTransform(-8.025,-22.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIAmIAAhLIARAAIAABLg");
	this.shape_4.setTransform(-14.45,-22.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgZAmIAAhLIAzAAIAAAPIgiAAIAAAQIAfAAIAAAOIgfAAIAAAeg");
	this.shape_5.setTransform(-19.375,-22.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1,1,1).p("AGEAAQAAChhyBxQhxByihAAQigAAhxhyQhyhxAAihQAAigByhxQBxhyCgAAQChAABxByQByBxAACgg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1A91CF").s().p("AkRESQhyhxAAihQAAigByhxQBxhyCgAAQChAABxByQByBxAACgQAAChhyBxQhxByihAAQigAAhxhyg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.findUs_TAB, new cjs.Rectangle(-39.7,-39.7,79.5,79.5), null);


// stage content:
(lib.NanaB_Banners_160x600 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgMfgu3IY/AAMAAABdvI4/AAg");
	this.shape.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(263));

	// findUs_TAB
	this.instance = new lib.findUs_TAB();
	this.instance.setTransform(77.8,637.25,0.8452,0.8452);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(212).to({_off:false},0).to({scaleX:1,scaleY:1,x:79.8,y:599.75},8,cjs.Ease.quadOut).wait(43));

	// txt_sweetLife
	this.instance_1 = new lib.txt_sweetLife();
	this.instance_1.setTransform(148.5,2.55);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(212).to({_off:false},0).to({y:31.55,alpha:1},8,cjs.Ease.quadOut).wait(43));

	// txt_footStompin
	this.instance_2 = new lib.txt_footStompin();
	this.instance_2.setTransform(76.75,124.8,0.5469,0.5469,0,0,0,-75.7,47);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(167).to({_off:false},0).to({regX:-75.8,scaleX:0.6926,scaleY:0.6926,x:76.7,alpha:1},9,cjs.Ease.quadOut).wait(26).to({regX:-75.7,scaleX:0.5469,scaleY:0.5469,x:76.75,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(51));

	// txt_flavorful
	this.instance_3 = new lib.txt_flavorful();
	this.instance_3.setTransform(127.1,115.55,0.6991,0.6991);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(124).to({_off:false},0).to({scaleX:1,scaleY:1,x:147.3,y:113.05,alpha:1},9,cjs.Ease.quadOut).wait(25).to({scaleX:0.6991,scaleY:0.6991,x:127.6,y:115.05,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(95));

	// txt_refreshingly
	this.instance_4 = new lib.txt_refreshingly();
	this.instance_4.setTransform(123.55,85.95,0.6396,0.6396,0,0,0,0.1,0.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(80).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:149.5,y:71.05,alpha:1},9,cjs.Ease.quadOut).wait(25).to({regX:0.1,regY:0.1,scaleX:0.6396,scaleY:0.6396,x:123.55,y:88.45,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(139));

	// txt_allNatural
	this.instance_5 = new lib.txt_allNatural();
	this.instance_5.setTransform(124.3,88,0.6545,0.6545,0,0,0,0.1,0.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(37).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:146.25,y:68.05,alpha:1},9,cjs.Ease.quadOut).wait(24).to({regX:0.1,regY:0.1,scaleX:0.6545,scaleY:0.6545,x:123.3,y:87,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(183));

	// raspBerrty_mc
	this.instance_6 = new lib.raspBerrty_mc();
	this.instance_6.setTransform(-71,486.65,0.4177,0.4177,0,0,0,1,0.7);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(36).to({_off:false},0).to({x:47},6,cjs.Ease.quadOut).wait(221));

	// peach_mc
	this.instance_7 = new lib.peach_mc();
	this.instance_7.setTransform(224.05,525.5,0.4177,0.4177,0,0,0,0.6,0.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(36).to({_off:false},0).to({x:114.05},6,cjs.Ease.quadOut).wait(221));

	// sweetTea_mc
	this.instance_8 = new lib.sweetTea_mc();
	this.instance_8.setTransform(295.95,359.95,0.4177,0.4177,0,0,0,1.1,0.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(36).to({_off:false},0).to({x:105.95},6,cjs.Ease.quadOut).wait(221));

	// lemon_mc
	this.instance_9 = new lib.lemon_mc();
	this.instance_9.setTransform(-126.55,318.15,0.4174,0.4174,0,0,0,1,0.7);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(36).to({_off:false},0).to({x:49.45},6,cjs.Ease.quadOut).wait(221));

	// raspBerrty_mc
	this.instance_10 = new lib.raspBerrty_mc();
	this.instance_10.setTransform(210.7,506.25,0.3236,0.3236,0,0,0,0.6,0.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(17).to({_off:false},0).to({x:98.7},9,cjs.Ease.quadOut).wait(4).to({x:218.7,y:504.25},6,cjs.Ease.quadIn).wait(227));

	// peach_mc
	this.instance_11 = new lib.peach_mc();
	this.instance_11.setTransform(-59.4,383.05,0.3236,0.3236,0,0,0,0.5,0.3);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(11).to({_off:false},0).to({x:60.6,y:381.05},9,cjs.Ease.quadOut).wait(10).to({x:-59.4,y:379.05},6,cjs.Ease.quadIn).wait(227));

	// sweetTea_mc
	this.instance_12 = new lib.sweetTea_mc();
	this.instance_12.setTransform(200.4,272.85,0.3236,0.3236,0,0,0,0.8,0.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(5).to({_off:false},0).to({x:100.4,y:270.85},9,cjs.Ease.quadOut).wait(16).to({x:220.4,y:268.85},6,cjs.Ease.quadIn).wait(227));

	// lemon_mc
	this.instance_13 = new lib.lemon_mc();
	this.instance_13.setTransform(-55.4,133.3,0.3234,0.3234,0,0,0,0.8,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({x:64.6,y:137.3},9,cjs.Ease.quadOut).wait(21).to({x:-55.4,y:135.3},6,cjs.Ease.quadIn).wait(227));

	// new_TAB
	this.instance_14 = new lib.new_TAB();
	this.instance_14.setTransform(90.9,-44.45);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({scaleX:1.1625,scaleY:1.1625,x:90.85,y:-5.95},7,cjs.Ease.quadOut).wait(256));

	// background
	this.instance_15 = new lib.BG();
	this.instance_15.setTransform(-80,26.1);

	this.instance_16 = new lib.BG();
	this.instance_16.setTransform(-80,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15}]}).wait(263));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-96.8,195.1,443.5,475.29999999999995);
// library properties:
lib.properties = {
	id: '90AA8FCF895B4939A1364AAE7129B0B5',
	width: 160,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"BG.jpg", id:"BG"},
		{src:"lemonTea.jpg", id:"lemonTea"},
		{src:"peach.jpg", id:"peach"},
		{src:"raspberry.jpg", id:"raspberry"},
		{src:"sweetTea.jpg", id:"sweetTea"}
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
an.compositions['90AA8FCF895B4939A1364AAE7129B0B5'] = {
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