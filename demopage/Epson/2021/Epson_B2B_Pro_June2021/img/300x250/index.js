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



(lib.ecoTank_logo = function() {
	this.initialize(img.ecoTank_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,191,71);


(lib.inkBottles = function() {
	this.initialize(img.inkBottles);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,208,168);


(lib.paintColors = function() {
	this.initialize(img.paintColors);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,567,250);


(lib.printer_01 = function() {
	this.initialize(img.printer_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,210,163);


(lib.printer_02 = function() {
	this.initialize(img.printer_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,147,207);


(lib.shaq_img_01 = function() {
	this.initialize(img.shaq_img_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,278,250);


(lib.shaq_img_02 = function() {
	this.initialize(img.shaq_img_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);// helper functions:

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


(lib.yellowPaint = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_36 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcW0IrQv8Qn0qoiqozQg1iwgOiOQgHhGAEglQAEADCJhvICVh7QgZDOBBDLQAgBlAmA8QDtHJJ7IOQE9EIEOCsQHOEBF3FqQC8C1BfCCg");
	mask.setTransform(738.9409,110.05);

	// Layer_35
	this.instance = new lib.paintColors();
	this.instance.setTransform(318.5,1.05);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(206));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(589.9,1.1,295.6,250);


(lib.txt_unlimitedInk = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgeAfIAAg9IA9AAIAAA9g");
	this.shape.setTransform(117.125,12.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAhCPIg4hdIgWAVIAABIIg4AAIAAkdIA4AAIAACYIBHhJIBDAAIhOBLIBXCDg");
	this.shape_1.setTransform(102.975,0.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAoBqIAAh0QAAgZgHgNQgJgMgUAAQgXAAgJAOQgLANAAAgIAABrIg5AAIAAjOIA2AAIAAAdIABAAQALgSARgIQARgIARAAQAXAAAPAGQAOAGAJALQAIALADAQQAEAQAAATIAAB+g");
	this.shape_2.setTransform(79.6,4.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgfCPIAAkdIA+AAIAAEdg");
	this.shape_3.setTransform(63.3,0.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag0CIQgSgJgLgPQgMgQgGgTQgFgVAAgWQAAgUAFgSQAGgUAMgOQAMgPAQgKQARgIAYgBQARABAQAHQARAIAJAQIABAAIAAhpIA5AAIAAEdIg2AAIAAgaIAAAAQgLARgQAHQgQAIgTgBQgYAAgRgJgAgVgXQgKAGgFAJQgGAIgCAMQgDALAAANQAAAMADAMQACAMAGAKQAHAJAJAGQAJAGAMAAQAPAAAJgGQAKgFAFgKQAFgJADgNQADgLAAgNQAAgNgDgLQgDgMgFgJQgGgIgJgGQgJgFgPgBQgMABgKAFg");
	this.shape_4.setTransform(36.5,1.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgpBlQgTgIgOgOQgNgPgIgTQgHgVAAgXQAAgXAHgUQAIgUAOgPQAOgOATgIQAUgJAWAAQAbAAAUALQATAKANARQAMARAGAWQAFAWgBAXIiUAAQABAbANANQAMAMAXAAQASAAAMgIQAMgJADgKIAyAAQgMAlgZARQgYAQgkAAQgXAAgUgIgAgVg9QgJAFgFAHQgGAGgCAIIgCAOIBbAAQgEgWgKgLQgKgLgVAAQgNAAgJAEg");
	this.shape_5.setTransform(14.6161,4.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAICFQgLgBgIgGQgJgFgGgJQgFgKAAgQIAAh4IgiAAIAAgnIAiAAIAAg9IA4AAIAAA9IApAAIAAAnIgpAAIAABlQAAAOAFAFQAEAFAPAAIAJgBIAIgBIAAAsIgQACIgRAAg");
	this.shape_6.setTransform(-2.625,1.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgcCPIAAjOIA4AAIAADOgAgchfIAAgvIA4AAIAAAvg");
	this.shape_7.setTransform(-13.25,0.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ABlBqIAAh0IgBgTQAAgKgEgGQgEgHgHgEQgHgEgMAAQgMAAgHAEQgHAFgFAHQgEAIgBAJIgCATIAAByIg4AAIAAhzIAAgSQAAgJgDgIQgDgHgHgFQgHgEgOAAIgKABQgHACgGAFQgGAFgFAKQgEAJAAAPIAAB3Ig5AAIAAjOIA2AAIAAAdIAAAAQAMgQAPgJQAQgJAVAAQATAAAQAHQAQAIAIATQAJgNAQgLQAQgKAVAAQARAAAOAEQAOAEAKAJQAKAJAFAOQAGAOAAAUIAACJg");
	this.shape_8.setTransform(-35.075,4.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgbCPIAAjOIA4AAIAADOgAgbhfIAAgvIA4AAIAAAvg");
	this.shape_9.setTransform(-56.95,0.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgbCPIAAkdIA3AAIAAEdg");
	this.shape_10.setTransform(-65.85,0.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAoBqIAAh0QABgZgJgNQgHgMgVAAQgWAAgLAOQgKANAAAgIAABrIg5AAIAAjOIA2AAIAAAdIACAAQAKgSARgIQARgIASAAQAWAAAPAGQAOAGAJALQAJALADAQQADAQAAATIAAB+g");
	this.shape_11.setTransform(-81.45,4.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhZB2QgggcAAg7IAAiwIA/AAIAACwIACAYQACALAGAIQAHAJALAFQALAGATgBQAhABANgPQANgQAAggIAAiwIA/AAIAACwQAAA7ghAcQggAcg5AAQg5AAgggcg");
	this.shape_12.setTransform(-106.675,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_unlimitedInk, new cjs.Rectangle(-123.5,-25.8,247,51.7), null);


(lib.txt_twoYears = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgXBOQgMgCgKgHQgIgGgGgKQgFgKgBgOIAaAAQAAAIADAGQAFAFAFAEQAGADAIACIANABIANgBIAMgCQAGgDADgFQAEgEAAgHQAAgLgHgEQgIgFgLgEIgYgGQgNgCgLgEQgMgFgHgIQgIgIAAgPQAAgMAGgJQAFgHAIgGQAIgFALgDQALgCAKAAQAMAAALACQALADAJAFQAIAGAFAJQAFAKABANIgaAAQAAgHgDgFQgDgFgGgDQgFgDgGgCIgMgBIgLABIgKAEQgGACgCADQgEAEAAAGQAAAGAFAFQAFAEAHADIAQAFIARAEIATAGQAJACAHAEQAIAFADAHQAFAIAAALQAAAOgGAKQgGAJgJAGQgJAFgMACQgMADgMAAQgMAAgLgDg");
	this.shape.setTransform(40.3,3.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgoBPIAAiaIAYAAIAAAhIABAAQAJgTANgJQANgJAVABIAAAbQgQAAgKAEQgLAEgGAIQgGAIgEAMQgCALAAAOIAABFg");
	this.shape_1.setTransform(29.925,3.1736);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAnBLQgGgGAAgMQgLAMgNAGQgNAGgRAAQgKAAgKgDQgJgCgHgFQgHgFgEgJQgEgIAAgLQAAgNAEgJQAFgJAHgFQAIgEAJgDIAUgEIATgEIAQgCQAHgCAFgEQAEgEAAgHQAAgJgDgEQgEgGgEgCQgFgDgHgBIgLgBQgQAAgLAHQgLAFAAARIgaAAQABgNAFgKQAGgLAIgGQAJgGAMgDQAMgCANAAIAUACQAKABAIAFQAJAEAFAIQAFAJAAANIAABPIABANQABAFAGgBIAIgBIAAAUQgHAEgLAAQgKAAgGgGgAATACIgQADIgRADQgIABgHADQgHADgFAGQgEAFAAAKQAAAGADAEQACAFAEACQAEADAGABIALABQANABAIgEQAJgDAFgGQAGgFADgGQACgGAAgGIAAgZQgEADgIABg");
	this.shape_2.setTransform(17.425,3.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgdBLQgNgGgKgLQgJgLgFgPQgEgPgBgRQAAgRAGgPQAFgPAKgLQAJgKAOgGQANgGAPAAQAVAAANAJQAOAIAIANQAIAOAEAPQADAQgBANIhzAAQAAAKACAJQADAJAGAHQAGAHAJAFQAKADALAAQAQAAALgHQAKgIAEgOIAZAAQgFAZgSANQgRAOgaAAQgSAAgOgGgAgRg2QgIADgGAGQgGAGgDAIQgDAIgBAJIBYAAQAAgJgEgIQgDgIgGgGQgGgGgIgDQgIgDgJgBQgJABgIADg");
	this.shape_3.setTransform(2.3536,3.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgNBrIAAhYIhTh9IAiAAIA/BmIA/hmIAhAAIhSB9IAABYg");
	this.shape_4.setTransform(-14.425,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhFBqQABgTAGgNQAEgNAIgKQAJgKAKgIIAVgOIAXgPQAKgGAHgHQAHgIADgIQADgJAAgLQAAgIgDgHQgDgHgGgFQgFgGgHgCQgIgDgIAAQgLAAgHAFQgIAEgGAIQgFAHgCAKQgCAJAAAKIgaAAQAAgQAEgOQAEgOAJgKQAJgKANgGQANgFAQAAQAOAAAMAEQAMAEAJAHQAJAIAGALQAEAMAAAPQAAAOgEALQgEAKgHAJQgHAIgJAGIgUAOIgTALIgSANQgIAGgGAIQgGAIgCAKIBsAAIAAAWg");
	this.shape_5.setTransform(-39.05,0.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_twoYears, new cjs.Rectangle(-48.8,-19.4,97.69999999999999,38.9), null);


(lib.txt_toner_cartridges_color_02 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#02B2E6").s().p("AgQARIAAghIAgAAIAAAhg");
	this.shape.setTransform(100.6,9.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#02B2E6").s().p("AgXBOQgNgCgIgHQgJgGgGgKQgFgKgBgOIAaAAQAAAIAEAGQAEAFAFAEQAGADAHACIAPABIAMgBIAMgCQAGgDAEgFQADgEAAgHQAAgLgIgEQgHgFgLgEIgYgGQgNgCgLgEQgLgFgIgIQgIgIABgPQgBgMAGgJQAFgHAJgGQAIgFAKgDQAKgCAKAAQAMAAAMACQALADAIAFQAJAGAFAJQAFAKABANIgaAAQAAgHgDgFQgDgFgGgDQgFgDgGgCIgMgBIgLABIgKAEQgFACgDADQgDAEAAAGQgBAGAFAFQAFAEAHADIAQAFIARAEIATAGQAJACAHAEQAHAFAEAHQAFAIAAALQAAAOgGAKQgGAJgJAGQgKAFgMACQgMADgLAAQgMAAgLgDg");
	this.shape_1.setTransform(89.65,3.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#02B2E6").s().p("AgdBLQgNgGgKgLQgJgLgFgPQgEgPgBgRQAAgRAGgPQAFgPAKgLQAJgKAOgGQANgGAPAAQAVAAANAJQAOAIAIANQAIAOAEAPQADAQgBANIhzAAQAAAKACAJQADAJAGAHQAGAHAJAFQAKADALAAQAQAAALgHQAKgIAEgOIAZAAQgFAZgSANQgRAOgaAAQgSAAgOgGgAgRg2QgIADgGAGQgGAGgDAIQgDAIgBAJIBYAAQAAgJgEgIQgDgIgGgGQgGgGgIgDQgIgDgJgBQgJABgIADg");
	this.shape_2.setTransform(75.0036,3.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#02B2E6").s().p("AgWBtQgLgDgKgFQgJgGgGgJQgGgJAAgMIAaAAQAAAHADAFQAFAFAFADQAHADAHABIALACQANAAAJgFQAJgFAFgHQAGgIADgKQACgLAAgOIAAgJIgBAAQgGAOgNAGQgOAIgOgBQgRAAgNgGQgNgGgJgLQgJgKgEgOQgEgOAAgQQAAgNADgPQAEgOAJgNQAIgMANgHQAPgIASAAQAPABANAGQALAGAIANIAAgWIAYAAIAACNQAAAmgRATQgSATgkAAQgLAAgLgCgAgShTQgJAFgGAIQgFAIgDAKQgCAKAAALQAAALACAKQACAKAFAIQAFAJAJAFQAIAGAMAAQAMAAAJgGQAJgFAGgJQAFgIACgKQACgLAAgKQAAgLgBgKQgDgKgFgHQgFgIgJgGQgJgEgMAAQgLAAgIAEg");
	this.shape_3.setTransform(58.45,6.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#02B2E6").s().p("AggBmQgOgHgJgLQgJgLgEgOQgFgPAAgRQAAgQAFgOQAEgPAJgLQAIgLAOgGQANgGASAAIAMABIAOAEIANAHQAGAFAEAHIABAAIAAhQIAZAAIAADVIgZAAIAAgVIgBAAQgGANgOAGQgNAGgQAAQgRAAgNgHgAgVgZQgJAFgGAJQgFAIgDAKQgCALAAALQABALACAKQADALAGAIQAFAIAKAFQAJAEALAAQANAAAJgFQAJgFAGgIQAFgIADgLQADgKAAgLQAAgMgDgKQgDgKgGgIQgGgIgIgFQgKgFgNAAQgMAAgJAFg");
	this.shape_4.setTransform(41.65,0.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#02B2E6").s().p("AgMBrIAAiaIAZAAIAACagAgMhLIAAgfIAZAAIAAAfg");
	this.shape_5.setTransform(30.575,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#02B2E6").s().p("AgoBPIAAiaIAYAAIAAAhIABAAQAJgTANgJQANgJAVABIAAAbQgQAAgKAEQgLAEgGAIQgGAIgEAMQgCALAAAOIAABFg");
	this.shape_6.setTransform(23.925,3.1736);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#02B2E6").s().p("AAWBlIgRgCQgGgBgFgEQgEgDgCgHQgCgGAAgLIAAhiIgaAAIAAgWIAaAAIAAgvIAYAAIAAAvIAgAAIAAAWIggAAIAABfIABAIQABAAAAABQAAAAAAABQABAAAAABQAAAAABABIAGACIAKAAIAMAAIAAAXg");
	this.shape_7.setTransform(13.65,1.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#02B2E6").s().p("AgoBPIAAiaIAYAAIAAAhIABAAQAJgTANgJQANgJAVABIAAAbQgQAAgKAEQgLAEgGAIQgGAIgEAMQgCALAAAOIAABFg");
	this.shape_8.setTransform(5.925,3.1736);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#02B2E6").s().p("AAnBLQgGgGAAgMQgLAMgNAGQgNAGgRAAQgKAAgKgDQgJgCgHgFQgHgFgEgJQgEgIAAgLQAAgNAEgJQAFgJAHgFQAIgEAJgDIAUgEIATgEIAQgCQAHgCAFgEQAEgEAAgHQAAgJgDgEQgEgGgEgCQgFgDgHgBIgLgBQgQAAgLAHQgLAFAAARIgaAAQABgNAFgKQAGgLAIgGQAJgGAMgDQAMgCANAAIAUACQAKABAIAFQAJAEAFAIQAFAJAAANIAABPIABANQABAFAGgBIAIgBIAAAUQgHAEgLAAQgKAAgGgGgAATACIgQADIgRADQgIABgHADQgHADgFAGQgEAFAAAKQAAAGADAEQACAFAEACQAEADAGABIALABQANABAIgEQAJgDAFgGQAGgFADgGQACgGAAgGIAAgZQgEADgIABg");
	this.shape_9.setTransform(-7.025,3.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#02B2E6").s().p("AgcBLQgOgFgJgLQgKgLgEgOQgEgOgBgSQAAgRAEgPQAFgPAJgLQAKgLAOgHQANgGARAAQAOAAALADQAMADAIAGQAKAIAFAJQAGALACANIgbAAQgDgOgKgJQgJgHgRgBQgMAAgJAGQgJAEgHAJQgFAIgDALQgCALAAALQABALACAKQACAKAGAIQAGAIAIAFQAJAFAKgBQATABALgLQALgJACgSIAbAAQgFAdgRAPQgSAQgdAAQgRAAgNgGg");
	this.shape_10.setTransform(-22.65,3.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#02B2E6").s().p("AgoBPIAAiaIAYAAIAAAhIABAAQAJgTANgJQANgJAVABIAAAbQgQAAgKAEQgLAEgGAIQgGAIgEAMQgCALAAAOIAABFg");
	this.shape_11.setTransform(-41.725,3.1736);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#02B2E6").s().p("AgdBLQgNgGgKgLQgJgLgFgPQgEgPgBgRQAAgRAGgPQAFgPAKgLQAJgKAOgGQANgGAPAAQAVAAANAJQAOAIAIANQAIAOAEAPQADAQgBANIhzAAQAAAKACAJQADAJAGAHQAGAHAJAFQAKADALAAQAQAAALgHQAKgIAEgOIAZAAQgFAZgSANQgRAOgaAAQgSAAgOgGgAgRg2QgIADgGAGQgGAGgDAIQgDAIgBAJIBYAAQAAgJgEgIQgDgIgGgGQgGgGgIgDQgIgDgJgBQgJABgIADg");
	this.shape_12.setTransform(-54.7964,3.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#02B2E6").s().p("AAnBPIAAhoQAAgOgJgIQgIgJgPAAQgKAAgJAEQgIADgGAHQgGAGgDAJQgDAJAAALIAABWIgZAAIAAiaIAYAAIAAAZIABAAQAQgcAhAAQAPAAAKAEQALAEAGAHQAGAIADAKQACALAAAMIAABlg");
	this.shape_13.setTransform(-70.675,3.175);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#02B2E6").s().p("AgfBLQgPgGgJgMQgKgLgFgOQgEgPAAgRQAAgQAEgPQAFgOAKgMQAJgKAPgHQAOgGARAAQASAAAOAGQAOAHAKAKQAKAMAEAOQAFAPAAAQQAAARgFAPQgEAOgKALQgKAMgOAGQgOAGgSAAQgRAAgOgGgAgSg2QgJAEgGAIQgHAHgEALQgDALAAANQAAAOADALQAEALAHAIQAGAHAJAEQAJADAJAAQAKAAAJgDQAIgEAHgHQAHgIADgLQAEgLAAgOQAAgNgEgLQgDgLgHgHQgHgIgIgEQgJgDgKgBQgJABgJADg");
	this.shape_14.setTransform(-86.875,3.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#02B2E6").s().p("AAWBlIgRgCQgGgBgFgEQgEgDgCgHQgCgGAAgLIAAhiIgbAAIAAgWIAbAAIAAgvIAYAAIAAAvIAgAAIAAAWIggAAIAABfIABAIQABAAAAABQAAAAAAABQABAAAAABQAAAAABABIAGACIAKAAIAMAAIAAAXg");
	this.shape_15.setTransform(-99.85,1.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_toner_cartridges_color_02, new cjs.Rectangle(-106.2,-19.4,212.5,38.9), null);


(lib.txt_toner_cartridges_color = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F023DA").s().p("AgQARIAAghIAgAAIAAAhg");
	this.shape.setTransform(100.6,9.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F023DA").s().p("AgXBOQgNgCgIgHQgJgGgGgKQgFgKgBgOIAaAAQAAAIAEAGQAEAFAFAEQAGADAHACIAPABIAMgBIAMgCQAGgDAEgFQADgEAAgHQAAgLgIgEQgHgFgLgEIgYgGQgNgCgLgEQgLgFgIgIQgIgIABgPQgBgMAGgJQAFgHAJgGQAIgFAKgDQAKgCAKAAQAMAAAMACQALADAIAFQAJAGAFAJQAFAKABANIgaAAQAAgHgDgFQgDgFgGgDQgFgDgGgCIgMgBIgLABIgKAEQgFACgDADQgDAEAAAGQgBAGAFAFQAFAEAHADIAQAFIARAEIATAGQAJACAHAEQAHAFAEAHQAFAIAAALQAAAOgGAKQgGAJgJAGQgKAFgMACQgMADgLAAQgMAAgLgDg");
	this.shape_1.setTransform(89.65,3.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F023DA").s().p("AgdBLQgNgGgKgLQgJgLgFgPQgEgPgBgRQAAgRAGgPQAFgPAKgLQAJgKAOgGQANgGAPAAQAVAAANAJQAOAIAIANQAIAOAEAPQADAQgBANIhzAAQAAAKACAJQADAJAGAHQAGAHAJAFQAKADALAAQAQAAALgHQAKgIAEgOIAZAAQgFAZgSANQgRAOgaAAQgSAAgOgGgAgRg2QgIADgGAGQgGAGgDAIQgDAIgBAJIBYAAQAAgJgEgIQgDgIgGgGQgGgGgIgDQgIgDgJgBQgJABgIADg");
	this.shape_2.setTransform(75.0036,3.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F023DA").s().p("AgWBtQgLgDgKgFQgJgGgGgJQgGgJAAgMIAaAAQAAAHADAFQAFAFAFADQAHADAHABIALACQANAAAJgFQAJgFAFgHQAGgIADgKQACgLAAgOIAAgJIgBAAQgGAOgNAGQgOAIgOgBQgRAAgNgGQgNgGgJgLQgJgKgEgOQgEgOAAgQQAAgNADgPQAEgOAJgNQAIgMANgHQAPgIASAAQAPABANAGQALAGAIANIAAgWIAYAAIAACNQAAAmgRATQgSATgkAAQgLAAgLgCgAgShTQgJAFgGAIQgFAIgDAKQgCAKAAALQAAALACAKQACAKAFAIQAFAJAJAFQAIAGAMAAQAMAAAJgGQAJgFAGgJQAFgIACgKQACgLAAgKQAAgLgBgKQgDgKgFgHQgFgIgJgGQgJgEgMAAQgLAAgIAEg");
	this.shape_3.setTransform(58.45,6.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F023DA").s().p("AggBmQgOgHgJgLQgJgLgEgOQgFgPAAgRQAAgQAFgOQAEgPAJgLQAIgLAOgGQANgGASAAIAMABIAOAEIANAHQAGAFAEAHIABAAIAAhQIAZAAIAADVIgZAAIAAgVIgBAAQgGANgOAGQgNAGgQAAQgRAAgNgHgAgVgZQgJAFgGAJQgFAIgDAKQgCALAAALQABALACAKQADALAGAIQAFAIAKAFQAJAEALAAQANAAAJgFQAJgFAGgIQAFgIADgLQADgKAAgLQAAgMgDgKQgDgKgGgIQgGgIgIgFQgKgFgNAAQgMAAgJAFg");
	this.shape_4.setTransform(41.65,0.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F023DA").s().p("AgMBrIAAiaIAZAAIAACagAgMhLIAAgfIAZAAIAAAfg");
	this.shape_5.setTransform(30.575,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F023DA").s().p("AgoBPIAAiaIAYAAIAAAhIABAAQAJgTANgJQANgJAVABIAAAbQgQAAgKAEQgLAEgGAIQgGAIgEAMQgCALAAAOIAABFg");
	this.shape_6.setTransform(23.925,3.1736);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F023DA").s().p("AAWBlIgRgCQgGgBgFgEQgEgDgCgHQgCgGAAgLIAAhiIgaAAIAAgWIAaAAIAAgvIAYAAIAAAvIAgAAIAAAWIggAAIAABfIABAIQABAAAAABQAAAAAAABQABAAAAABQAAAAABABIAGACIAKAAIAMAAIAAAXg");
	this.shape_7.setTransform(13.65,1.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F023DA").s().p("AgoBPIAAiaIAYAAIAAAhIABAAQAJgTANgJQANgJAVABIAAAbQgQAAgKAEQgLAEgGAIQgGAIgEAMQgCALAAAOIAABFg");
	this.shape_8.setTransform(5.925,3.1736);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F023DA").s().p("AAnBLQgGgGAAgMQgLAMgNAGQgNAGgRAAQgKAAgKgDQgJgCgHgFQgHgFgEgJQgEgIAAgLQAAgNAEgJQAFgJAHgFQAIgEAJgDIAUgEIATgEIAQgCQAHgCAFgEQAEgEAAgHQAAgJgDgEQgEgGgEgCQgFgDgHgBIgLgBQgQAAgLAHQgLAFAAARIgaAAQABgNAFgKQAGgLAIgGQAJgGAMgDQAMgCANAAIAUACQAKABAIAFQAJAEAFAIQAFAJAAANIAABPIABANQABAFAGgBIAIgBIAAAUQgHAEgLAAQgKAAgGgGgAATACIgQADIgRADQgIABgHADQgHADgFAGQgEAFAAAKQAAAGADAEQACAFAEACQAEADAGABIALABQANABAIgEQAJgDAFgGQAGgFADgGQACgGAAgGIAAgZQgEADgIABg");
	this.shape_9.setTransform(-7.025,3.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F023DA").s().p("AgcBLQgOgFgJgLQgKgLgEgOQgEgOgBgSQAAgRAEgPQAFgPAJgLQAKgLAOgHQANgGARAAQAOAAALADQAMADAIAGQAKAIAFAJQAGALACANIgbAAQgDgOgKgJQgJgHgRgBQgMAAgJAGQgJAEgHAJQgFAIgDALQgCALAAALQABALACAKQACAKAGAIQAGAIAIAFQAJAFAKgBQATABALgLQALgJACgSIAbAAQgFAdgRAPQgSAQgdAAQgRAAgNgGg");
	this.shape_10.setTransform(-22.65,3.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F023DA").s().p("AgoBPIAAiaIAYAAIAAAhIABAAQAJgTANgJQANgJAVABIAAAbQgQAAgKAEQgLAEgGAIQgGAIgEAMQgCALAAAOIAABFg");
	this.shape_11.setTransform(-41.725,3.1736);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F023DA").s().p("AgdBLQgNgGgKgLQgJgLgFgPQgEgPgBgRQAAgRAGgPQAFgPAKgLQAJgKAOgGQANgGAPAAQAVAAANAJQAOAIAIANQAIAOAEAPQADAQgBANIhzAAQAAAKACAJQADAJAGAHQAGAHAJAFQAKADALAAQAQAAALgHQAKgIAEgOIAZAAQgFAZgSANQgRAOgaAAQgSAAgOgGgAgRg2QgIADgGAGQgGAGgDAIQgDAIgBAJIBYAAQAAgJgEgIQgDgIgGgGQgGgGgIgDQgIgDgJgBQgJABgIADg");
	this.shape_12.setTransform(-54.7964,3.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F023DA").s().p("AAnBPIAAhoQAAgOgJgIQgIgJgPAAQgKAAgJAEQgIADgGAHQgGAGgDAJQgDAJAAALIAABWIgZAAIAAiaIAYAAIAAAZIABAAQAQgcAhAAQAPAAAKAEQALAEAGAHQAGAIADAKQACALAAAMIAABlg");
	this.shape_13.setTransform(-70.675,3.175);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F023DA").s().p("AgfBLQgPgGgJgMQgKgLgFgOQgEgPAAgRQAAgQAEgPQAFgOAKgMQAJgKAPgHQAOgGARAAQASAAAOAGQAOAHAKAKQAKAMAEAOQAFAPAAAQQAAARgFAPQgEAOgKALQgKAMgOAGQgOAGgSAAQgRAAgOgGgAgSg2QgJAEgGAIQgHAHgEALQgDALAAANQAAAOADALQAEALAHAIQAGAHAJAEQAJADAJAAQAKAAAJgDQAIgEAHgHQAHgIADgLQAEgLAAgOQAAgNgEgLQgDgLgHgHQgHgIgIgEQgJgDgKgBQgJABgJADg");
	this.shape_14.setTransform(-86.875,3.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F023DA").s().p("AAWBlIgRgCQgGgBgFgEQgEgDgCgHQgCgGAAgLIAAhiIgbAAIAAgWIAbAAIAAgvIAYAAIAAAvIAgAAIAAAWIggAAIAABfIABAIQABAAAAABQAAAAAAABQABAAAAABQAAAAABABIAGACIAKAAIAMAAIAAAXg");
	this.shape_15.setTransform(-99.85,1.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_toner_cartridges_color, new cjs.Rectangle(-106.2,-19.4,212.5,38.9), null);


(lib.txt_toner_cartridges = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgQARIAAghIAgAAIAAAhg");
	this.shape.setTransform(100.6,9.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgXBOQgNgCgIgHQgJgGgGgKQgFgKgBgOIAaAAQAAAIAEAGQAEAFAFAEQAGADAHACIAPABIAMgBIAMgCQAGgDAEgFQADgEAAgHQAAgLgIgEQgHgFgLgEIgYgGQgNgCgLgEQgLgFgIgIQgIgIABgPQgBgMAGgJQAFgHAJgGQAIgFAKgDQAKgCAKAAQAMAAAMACQALADAIAFQAJAGAFAJQAFAKABANIgaAAQAAgHgDgFQgDgFgGgDQgFgDgGgCIgMgBIgLABIgKAEQgFACgDADQgDAEAAAGQgBAGAFAFQAFAEAHADIAQAFIARAEIATAGQAJACAHAEQAHAFAEAHQAFAIAAALQAAAOgGAKQgGAJgJAGQgKAFgMACQgMADgLAAQgMAAgLgDg");
	this.shape_1.setTransform(89.65,3.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdBLQgNgGgKgLQgJgLgFgPQgEgPgBgRQAAgRAGgPQAFgPAKgLQAJgKAOgGQANgGAPAAQAVAAANAJQAOAIAIANQAIAOAEAPQADAQgBANIhzAAQAAAKACAJQADAJAGAHQAGAHAJAFQAKADALAAQAQAAALgHQAKgIAEgOIAZAAQgFAZgSANQgRAOgaAAQgSAAgOgGgAgRg2QgIADgGAGQgGAGgDAIQgDAIgBAJIBYAAQAAgJgEgIQgDgIgGgGQgGgGgIgDQgIgDgJgBQgJABgIADg");
	this.shape_2.setTransform(75.0036,3.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgWBtQgLgDgKgFQgJgGgGgJQgGgJAAgMIAaAAQAAAHADAFQAFAFAFADQAHADAHABIALACQANAAAJgFQAJgFAFgHQAGgIADgKQACgLAAgOIAAgJIgBAAQgGAOgNAGQgOAIgOgBQgRAAgNgGQgNgGgJgLQgJgKgEgOQgEgOAAgQQAAgNADgPQAEgOAJgNQAIgMANgHQAPgIASAAQAPABANAGQALAGAIANIAAgWIAYAAIAACNQAAAmgRATQgSATgkAAQgLAAgLgCgAgShTQgJAFgGAIQgFAIgDAKQgCAKAAALQAAALACAKQACAKAFAIQAFAJAJAFQAIAGAMAAQAMAAAJgGQAJgFAGgJQAFgIACgKQACgLAAgKQAAgLgBgKQgDgKgFgHQgFgIgJgGQgJgEgMAAQgLAAgIAEg");
	this.shape_3.setTransform(58.45,6.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AggBmQgOgHgJgLQgJgLgEgOQgFgPAAgRQAAgQAFgOQAEgPAJgLQAIgLAOgGQANgGASAAIAMABIAOAEIANAHQAGAFAEAHIABAAIAAhQIAZAAIAADVIgZAAIAAgVIgBAAQgGANgOAGQgNAGgQAAQgRAAgNgHgAgVgZQgJAFgGAJQgFAIgDAKQgCALAAALQABALACAKQADALAGAIQAFAIAKAFQAJAEALAAQANAAAJgFQAJgFAGgIQAFgIADgLQADgKAAgLQAAgMgDgKQgDgKgGgIQgGgIgIgFQgKgFgNAAQgMAAgJAFg");
	this.shape_4.setTransform(41.65,0.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgMBrIAAiaIAZAAIAACagAgMhLIAAgfIAZAAIAAAfg");
	this.shape_5.setTransform(30.575,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgoBPIAAiaIAYAAIAAAhIABAAQAJgTANgJQANgJAVABIAAAbQgQAAgKAEQgLAEgGAIQgGAIgEAMQgCALAAAOIAABFg");
	this.shape_6.setTransform(23.925,3.1736);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAWBlIgRgCQgGgBgFgEQgEgDgCgHQgCgGAAgLIAAhiIgaAAIAAgWIAaAAIAAgvIAYAAIAAAvIAgAAIAAAWIggAAIAABfIABAIQABAAAAABQAAAAAAABQABAAAAABQAAAAABABIAGACIAKAAIAMAAIAAAXg");
	this.shape_7.setTransform(13.65,1.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgoBPIAAiaIAYAAIAAAhIABAAQAJgTANgJQANgJAVABIAAAbQgQAAgKAEQgLAEgGAIQgGAIgEAMQgCALAAAOIAABFg");
	this.shape_8.setTransform(5.925,3.1736);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAnBLQgGgGAAgMQgLAMgNAGQgNAGgRAAQgKAAgKgDQgJgCgHgFQgHgFgEgJQgEgIAAgLQAAgNAEgJQAFgJAHgFQAIgEAJgDIAUgEIATgEIAQgCQAHgCAFgEQAEgEAAgHQAAgJgDgEQgEgGgEgCQgFgDgHgBIgLgBQgQAAgLAHQgLAFAAARIgaAAQABgNAFgKQAGgLAIgGQAJgGAMgDQAMgCANAAIAUACQAKABAIAFQAJAEAFAIQAFAJAAANIAABPIABANQABAFAGgBIAIgBIAAAUQgHAEgLAAQgKAAgGgGgAATACIgQADIgRADQgIABgHADQgHADgFAGQgEAFAAAKQAAAGADAEQACAFAEACQAEADAGABIALABQANABAIgEQAJgDAFgGQAGgFADgGQACgGAAgGIAAgZQgEADgIABg");
	this.shape_9.setTransform(-7.025,3.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgcBLQgOgFgJgLQgKgLgEgOQgEgOgBgSQAAgRAEgPQAFgPAJgLQAKgLAOgHQANgGARAAQAOAAALADQAMADAIAGQAKAIAFAJQAGALACANIgbAAQgDgOgKgJQgJgHgRgBQgMAAgJAGQgJAEgHAJQgFAIgDALQgCALAAALQABALACAKQACAKAGAIQAGAIAIAFQAJAFAKgBQATABALgLQALgJACgSIAbAAQgFAdgRAPQgSAQgdAAQgRAAgNgGg");
	this.shape_10.setTransform(-22.65,3.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgoBPIAAiaIAYAAIAAAhIABAAQAJgTANgJQANgJAVABIAAAbQgQAAgKAEQgLAEgGAIQgGAIgEAMQgCALAAAOIAABFg");
	this.shape_11.setTransform(-41.725,3.1736);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgdBLQgNgGgKgLQgJgLgFgPQgEgPgBgRQAAgRAGgPQAFgPAKgLQAJgKAOgGQANgGAPAAQAVAAANAJQAOAIAIANQAIAOAEAPQADAQgBANIhzAAQAAAKACAJQADAJAGAHQAGAHAJAFQAKADALAAQAQAAALgHQAKgIAEgOIAZAAQgFAZgSANQgRAOgaAAQgSAAgOgGgAgRg2QgIADgGAGQgGAGgDAIQgDAIgBAJIBYAAQAAgJgEgIQgDgIgGgGQgGgGgIgDQgIgDgJgBQgJABgIADg");
	this.shape_12.setTransform(-54.7964,3.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAnBPIAAhoQAAgOgJgIQgIgJgPAAQgKAAgJAEQgIADgGAHQgGAGgDAJQgDAJAAALIAABWIgZAAIAAiaIAYAAIAAAZIABAAQAQgcAhAAQAPAAAKAEQALAEAGAHQAGAIADAKQACALAAAMIAABlg");
	this.shape_13.setTransform(-70.675,3.175);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgfBLQgPgGgJgMQgKgLgFgOQgEgPAAgRQAAgQAEgPQAFgOAKgMQAJgKAPgHQAOgGARAAQASAAAOAGQAOAHAKAKQAKAMAEAOQAFAPAAAQQAAARgFAPQgEAOgKALQgKAMgOAGQgOAGgSAAQgRAAgOgGgAgSg2QgJAEgGAIQgHAHgEALQgDALAAANQAAAOADALQAEALAHAIQAGAHAJAEQAJADAJAAQAKAAAJgDQAIgEAHgHQAHgIADgLQAEgLAAgOQAAgNgEgLQgDgLgHgHQgHgIgIgEQgJgDgKgBQgJABgJADg");
	this.shape_14.setTransform(-86.875,3.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAWBlIgRgCQgGgBgFgEQgEgDgCgHQgCgGAAgLIAAhiIgbAAIAAgWIAbAAIAAgvIAYAAIAAAvIAgAAIAAAWIggAAIAABfIABAIQABAAAAABQAAAAAAABQABAAAAABQAAAAABABIAGACIAKAAIAMAAIAAAXg");
	this.shape_15.setTransform(-99.85,1.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_toner_cartridges, new cjs.Rectangle(-106.2,-19.4,212.5,38.9), null);


(lib.txt_theAssets = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgfCLIAAg6IA6AAIAAA6gAgaA5IAAgQQACgRAEgLQAFgLAHgHIAOgNIAOgLQAGgGAFgHQAEgHgBgKQAAgRgJgJQgIgIgPAAQgJAAgIADQgHAEgFAHQgFAHgCAJQgCAJgBAKIg4AAQABgVAHgQQAGgRANgNQALgMARgIQARgHAVAAQAaAAASAHQASAIALALQALALAFANQAEANABALQgBARgEAMQgFAMgHAJQgHAIgJAGIgQALQgHAFgGAJQgGAHgCAMIAAANg");
	this.shape.setTransform(80.9,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAIB/QgKgCgJgFQgIgFgFgJQgFgJAAgPIAAhzIghAAIAAgkIAhAAIAAg7IA1AAIAAA7IAnAAIAAAkIgnAAIAABhQAAANAEAFQAFAEANAAIAJAAIAIgBIAAAqIgPABIgQABg");
	this.shape_1.setTransform(64.025,1.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgmBgQgTgIgNgNQgNgOgHgTQgHgTAAgXQAAgVAHgTQAIgTANgOQANgNATgIQASgIAWAAQAZAAASAJQATAKAMAQQAMARAFAUQAFAVgBAWIiNAAQABAaANAMQAMAMAVAAQARAAAMgIQALgJADgJIAwAAQgMAkgXAPQgYAPghAAQgXAAgSgHgAgTg6QgJAFgFAGQgFAHgCAHIgDANIBXAAQgEgVgJgKQgKgLgUAAQgMAAgIAEg");
	this.shape_2.setTransform(47.0923,4.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgfBkQgQgEgNgIQgNgIgIgNQgIgNgBgUIA0AAQAAAJADAGQAEAHAGAEQAFAEAHACIAOABIANgBIALgEQAFgDAEgFQADgEAAgIQAAgMgQgGQgQgGgcgGIgXgGQgLgEgJgFQgJgGgFgJQgGgJAAgNQAAgSAIgNQAHgMAMgHQANgHAPgDQAPgCAQAAQAPAAAPADQAPACAMAIQAMAHAHAMQAIAMACASIgzAAQgBgPgMgGQgKgFgNAAIgKAAIgKADIgHAFQgEAEAAAGQAAAHAGAFQAFAEAIADIAUAFIAWAFIAXAHQALADAJAHQAJAFAFAJQAFAJAAAOQAAATgIAOQgIANgMAIQgMAIgRADQgQADgRAAQgPAAgRgDg");
	this.shape_3.setTransform(26.5,4.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgfBkQgRgEgMgIQgNgIgIgNQgIgNgBgUIAzAAQAAAJAEAGQAEAHAGAEQAFAEAHACIAPABIAMgBIALgEQAGgDADgFQADgEAAgIQAAgMgQgGQgRgGgbgGIgXgGQgLgEgJgFQgJgGgFgJQgFgJgBgNQAAgSAIgNQAHgMAMgHQANgHAPgDQAPgCAQAAQAPAAAPADQAPACAMAIQAMAHAHAMQAIAMACASIgzAAQgBgPgMgGQgKgFgNAAIgLAAIgJADIgHAFQgEAEAAAGQABAHAFAFQAFAEAIADIAUAFIAWAFIAXAHQALADAJAHQAIAFAGAJQAFAJAAAOQAAATgIAOQgIANgMAIQgNAIgQADQgQADgQAAQgQAAgRgDg");
	this.shape_4.setTransform(6.6,4.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag2BkQgMgEgJgHQgJgHgFgLQgGgLAAgPQAAgRAGgLQAGgLAJgGQAKgGAMgDIAYgFIAYgDIAUgDQAJgDAFgEQAFgEAAgJQAAgJgDgFQgDgFgEgDQgFgDgGgBIgOAAQgPAAgJAGQgJAHgCAQIg2AAQACgTAIgMQAIgNANgIQANgHAQgDQARgDAPAAIAeACQAPACANAGQAMAGAIALQAIAKAAASIAABlIACAaQABAMAEAGIg3AAIgCgJIgCgKQgMANgSAGQgRAFgSAAQgOAAgMgDgAAbAHIgLADIgNACIgMABIgMAEIgKAFQgEADgDAFQgDAFAAAHQAAAIADAEQADAFAEADIALAEIANABQAOAAAJgFQAJgFAEgIQAEgHABgIIABgMIAAgUg");
	this.shape_5.setTransform(-14.125,4.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgmBgQgTgIgNgNQgNgOgHgTQgHgTAAgXQAAgVAHgTQAIgTANgOQANgNATgIQASgIAWAAQAZAAASAJQATAKAMAQQAMARAFAUQAFAVgBAWIiNAAQABAaANAMQAMAMAVAAQARAAAMgIQALgJADgJIAwAAQgMAkgXAPQgYAPghAAQgXAAgSgHgAgTg6QgJAFgFAGQgFAHgCAHIgDANIBXAAQgEgVgJgKQgKgLgUAAQgMAAgIAEg");
	this.shape_6.setTransform(-45.3577,4.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAmCIIAAhvQAAgZgIgLQgHgLgTAAQgVAAgKANQgKAMAAAeIAABnIg2AAIAAkPIA2AAIAABnIABAAQAKgSAQgHQAPgIAPAAQAWAAAOAGQAOAGAIAKQAIALADAPQADAPAAARIAAB5g");
	this.shape_7.setTransform(-66.975,0.825);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAIB/QgKgCgJgFQgIgFgFgJQgFgJAAgPIAAhzIghAAIAAgkIAhAAIAAg7IA1AAIAAA7IAnAAIAAAkIgnAAIAABhQAAANAEAFQAFAEANAAIAJAAIAIgBIAAAqIgPABIgQABg");
	this.shape_8.setTransform(-84.575,1.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_theAssets, new cjs.Rectangle(-93.1,-24.6,186.3,49.3), null);


(lib.txt_printInColor = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Print_in_color (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ANqCUQgVgIgPgPQgPgQgIgVQgIgVAAgbQAAgbAIgVQAIgVAPgQQAPgPAVgIQAVgIAaAAQAbAAAVAIQAVAIAPAPQAPAQAJAVQAIAVAAAbQAAAbgIAVQgJAVgPAQQgPAPgVAIQgVAIgbAAQgaAAgVgIgAOAgYQgLAGgGAKQgGAJgDANQgCAMAAAOQAAANACANQADANAGAKQAGAKALAGQAKAGAPAAQAQAAALgGQAKgGAGgKQAGgKADgNQADgNAAgNQAAgOgDgMQgDgNgGgJQgGgKgKgGQgLgGgQAAQgPAAgKAGgAIRCUQgVgIgPgPQgPgQgIgVQgIgVAAgbQAAgbAIgVQAIgVAPgQQAPgPAVgIQAVgIAaAAQAbAAAVAIQAVAIAPAPQAPAQAJAVQAIAVAAAbQAAAbgIAVQgJAVgPAQQgPAPgVAIQgVAIgbAAQgaAAgVgIgAIngYQgLAGgGAKQgGAJgDANQgCAMAAAOQAAANACANQADANAGAKQAGAKALAGQAKAGAPAAQAQAAALgGQAKgGAGgKQAGgKADgNQADgNAAgNQAAgOgDgMQgDgNgGgJQgGgKgKgGQgLgGgQAAQgPAAgKAGgAEnCUQgUgIgPgPQgOgQgJgUQgIgVAAgZQAAgaAIgVQAHgWAPgQQAOgQAVgJQAVgJAcAAQATAAATAFQASAFAOAKQAPALAJAQQAJAPABAVIg8AAQgGglgnAAQgOAAgKAGQgKAHgGAKQgHAKgCANQgDAMAAANQAAAMADAMQACANAGAKQAGAKAKAGQAKAHAOAAQAWAAAMgNQALgMAEgUIA6AAQgGAsgcAXQgcAXgtAAQgZAAgVgIgAmFCXQgMgCgKgGQgJgFgGgLQgGgKAAgRIAAiCIglAAIAAgpIAlAAIAAhCIA9AAIAABCIAtAAIAAApIgtAAIAABtQAAAQAGAFQAFAFAPAAIATgBIAAAvIgkACgAQmCXIAAjeIA6AAIAAAqIABAAQAEgLAHgIQAIgJAJgGQAKgHALgDQAKgDAMAAIANACIAAA4IgWgCQgRAAgLAGQgMAFgHAJQgHAKgDANQgDAMAAAQIAABkgALPCXIAAkyIA9AAIAAEygAAlCXIAAh+QAAgagIgOQgJgNgVAAQgZAAgLAPQgLANAAAiIAAB1Ig9AAIAAjeIA6AAIAAAfIABAAQAMgTASgJQATgIASAAQAZAAAPAGQAQAHAJAMQAJALAEARQAEARAAAUIAACJgAjMCXIAAjeIA9AAIAADegAodCXIAAh+QAAgagJgOQgIgNgWAAQgZAAgLAPQgMANAAAiIAAB1Ig8AAIAAjeIA6AAIAAAfIABAAQAMgTASgJQASgIAUAAQAYAAAQAGQAQAHAJAMQAJALADARQAEARAAAUIAACJgAsPCXIAAjeIA9AAIAADegAuqCXIAAjeIA6AAIAAAqIABAAQAEgLAHgIQAIgJAJgGQAKgHALgDQAKgDAMAAIANACIAAA4IgWgCQgRAAgLAGQgMAFgHAJQgHAKgDANQgDAMAAAQIAABkgAy0CXIAAkyICKAAQAdAAAUAIQAVAJAMANQANAOAGASQAGARAAATQAAATgGASQgGARgNANQgMAOgVAIQgUAJgdAAIhHAAIAABugAxxgLIBLgBQALgCAIgFQAIgFAFgJQAFgJAAgPQAAgOgFgJQgFgJgIgFQgIgFgLgCIhLgCgAjMhpIAAgyIA9AAIAAAygAsPhpIAAgyIA9AAIAAAyg");
	mask.setTransform(2.075,1.225);

	// color_band
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-187.8,-26.7,154.1,-79).s().p("EgoMgJfMBLtgLmIEselMhLtALmg");
	this.shape.setTransform(105.55,-33.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-187.2,-26.6,153.7,-78.8).s().p("EgoFgJdMBLggLkIErefMhLgALkg");
	this.shape_1.setTransform(103.825,-33.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-186.7,-26.5,153.2,-78.5).s().p("Egn+gJbMBLSgLiIEreZMhLSALig");
	this.shape_2.setTransform(102.125,-32.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-186.2,-26.5,152.8,-78.4).s().p("Egn2gJaMBLEgLgIEqeUMhLFALhg");
	this.shape_3.setTransform(100.4,-32.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-185.7,-26.4,152.4,-78.1).s().p("EgnvgJYMBK3gLeIEoePMhK3ALeg");
	this.shape_4.setTransform(98.675,-31.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-185.2,-26.3,151.9,-77.9).s().p("EgnogJXMBKqgLbIEneJMhKpALcg");
	this.shape_5.setTransform(96.95,-31.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-184.7,-26.2,151.5,-77.7).s().p("EgnhgJVMBKcgLZIEneDMhKcALag");
	this.shape_6.setTransform(95.25,-30.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-184.1,-26.2,151.1,-77.5).s().p("EgnagJTMBKPgLYIEmd+MhKPALYg");
	this.shape_7.setTransform(93.525,-30.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-183.6,-26.1,150.7,-77.2).s().p("EgnTgJRMBKBgLVIEmd5MhKBALUg");
	this.shape_8.setTransform(91.8,-30.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-183.1,-26,150.2,-77).s().p("EgnLgJPMBJzgLUIEkd0MhJzALTg");
	this.shape_9.setTransform(90.1,-29.725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-182.5,-25.9,149.8,-76.8).s().p("EgnEgJOMBJmgLRIEjduMhJmALRg");
	this.shape_10.setTransform(88.375,-29.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-182.1,-25.9,149.3,-76.6).s().p("Egm9gJMMBJYgLPIEjdoMhJZALPg");
	this.shape_11.setTransform(86.65,-28.875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-181.5,-25.8,148.9,-76.3).s().p("Egm2gJLMBJLgLNIEidkMhJLALMg");
	this.shape_12.setTransform(84.925,-28.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-181,-25.7,148.5,-76.1).s().p("EgmvgJJMBI+gLLIEhdeMhI+ALLg");
	this.shape_13.setTransform(83.225,-28.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-180.5,-25.6,148,-75.9).s().p("EgmogJHMBIxgLJIEgdYMhIxALJg");
	this.shape_14.setTransform(81.5,-27.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-179.9,-25.5,147.7,-75.7).s().p("EgmggJFMBIigLHIEfdSMhIiALHg");
	this.shape_15.setTransform(79.775,-27.175);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-179.4,-25.5,147.2,-75.5).s().p("EgmZgJDMBIVgLGIEedOMhIVALFg");
	this.shape_16.setTransform(78.05,-26.75);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-178.9,-25.4,146.8,-75.2).s().p("EgmSgJCMBIHgLDIEedIMhIIALDg");
	this.shape_17.setTransform(76.35,-26.325);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-178.4,-25.4,146.3,-75.1).s().p("EgmLgJAMBH6gLBIEddCMhH6ALBg");
	this.shape_18.setTransform(74.625,-25.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-177.9,-25.3,145.9,-74.8).s().p("EgmDgI/MBHsgK+IEbc8MhHsAK/g");
	this.shape_19.setTransform(72.9,-25.475);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-177.3,-25.2,145.5,-74.6).s().p("Egl8gI9MBHegK8IEcc3MhHgAK9g");
	this.shape_20.setTransform(71.2,-25.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-176.8,-25.1,145,-74.4).s().p("Egl1gI7MBHRgK7IEacyMhHRAK7g");
	this.shape_21.setTransform(69.475,-24.625);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-176.3,-25,144.6,-74.1).s().p("EglugI5MBHDgK5IEactMhHEAK4g");
	this.shape_22.setTransform(67.75,-24.225);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-175.7,-25,144.2,-74).s().p("EglngI4MBG2gK2IEZcnMhG2AK2g");
	this.shape_23.setTransform(66.025,-23.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-175.2,-24.9,143.8,-73.7).s().p("EglggI2MBGpgK0IEYchMhGpAK0g");
	this.shape_24.setTransform(64.325,-23.375);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-174.7,-24.8,143.3,-73.5).s().p("EglZgI0MBGbgKzIEXccMhGbAKyg");
	this.shape_25.setTransform(62.6,-22.95);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-174.2,-24.8,142.9,-73.3).s().p("EglRgIzMBGNgKwIEWcXMhGNAKwg");
	this.shape_26.setTransform(60.875,-22.525);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-173.6,-24.7,142.5,-73.1).s().p("EglKgIxMBGAgKuIEVcRMhGAAKug");
	this.shape_27.setTransform(59.175,-22.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-173.1,-24.6,142,-72.8).s().p("EglDgIvMBFzgKsIEUcLMhFzAKsg");
	this.shape_28.setTransform(57.45,-21.675);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-172.6,-24.6,141.6,-72.7).s().p("Egk8gIuMBFlgKpIEUcFMhFlAKqg");
	this.shape_29.setTransform(55.725,-21.25);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-172.1,-24.5,141.2,-72.4).s().p("Egk0gIsMBFXgKoIEScBMhFXAKog");
	this.shape_30.setTransform(54,-20.825);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-171.6,-24.4,140.7,-72.2).s().p("EgkugIrMBFKgKlIETb7MhFLAKmg");
	this.shape_31.setTransform(52.3,-20.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-171.1,-24.3,140.3,-71.9).s().p("EgkmgIpMBE8gKjIERb1MhE9AKkg");
	this.shape_32.setTransform(50.575,-19.975);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-170.5,-24.3,139.9,-71.8).s().p("EgkfgInMBEvgKiIEQbxMhEvAKhg");
	this.shape_33.setTransform(48.85,-19.55);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-170,-24.2,139.5,-71.5).s().p("EgkYgIlMBEhgKgIEQbrMhEiAKgg");
	this.shape_34.setTransform(47.15,-19.125);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-169.5,-24.1,139,-71.3).s().p("EgkRgIjMBEUgKeIEPblMhEVAKeg");
	this.shape_35.setTransform(45.425,-18.725);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-168.9,-24,138.6,-71.1).s().p("EgkKgIiMBEHgKbIEObgMhEHAKbg");
	this.shape_36.setTransform(43.675,-18.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-168.4,-23.9,138.2,-70.8).s().p("EgkDgIgMBD6gKaIEMbbMhD5AKZg");
	this.shape_37.setTransform(41.95,-17.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-167.9,-23.8,137.8,-70.6).s().p("Egj8gIeMBDtgKYIELbWMhDrAKXg");
	this.shape_38.setTransform(40.25,-17.475);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-167.3,-23.8,137.4,-70.4).s().p("Egj0gIcMBDegKWIELbQMhDeAKVg");
	this.shape_39.setTransform(38.525,-17.05);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-166.8,-23.7,136.9,-70.2).s().p("EgjtgIbMBDRgKTIEKbKMhDRAKTg");
	this.shape_40.setTransform(36.8,-16.625);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-166.3,-23.6,136.5,-70).s().p("EgjmgIZMBDDgKRIEKbEMhDDAKRg");
	this.shape_41.setTransform(35.1,-16.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-165.8,-23.5,136.1,-69.7).s().p("EgjfgIYMBC2gKPIEJbAMhC2AKPg");
	this.shape_42.setTransform(33.375,-15.775);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-165.3,-23.5,135.6,-69.5).s().p("EgjXgIWMBCogKNIEIa6MhCoAKNg");
	this.shape_43.setTransform(31.65,-15.35);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-164.7,-23.4,135.2,-69.3).s().p("EgjQgIUMBCbgKLIEGa0MhCaAKLg");
	this.shape_44.setTransform(29.925,-14.925);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-164.2,-23.3,134.8,-69.1).s().p("EgjJgITMBCNgKJIEGavMhCNAKKg");
	this.shape_45.setTransform(28.225,-14.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-163.7,-23.3,134.3,-68.9).s().p("EgjCgIRMBCAgKHIEFaqMhB/AKHg");
	this.shape_46.setTransform(26.5,-14.075);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-163.1,-23.2,133.9,-68.6).s().p("Egi7gIPMBBzgKFIEEakMhByAKFg");
	this.shape_47.setTransform(24.775,-13.65);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-162.6,-23.1,133.5,-68.4).s().p("Egi0gINMBBlgKDIEEaeMhBlAKDg");
	this.shape_48.setTransform(23.075,-13.225);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-162.1,-23.1,133,-68.3).s().p("EgisgIMMBBXgKAIEDaZMhBYAKBg");
	this.shape_49.setTransform(21.35,-12.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-161.6,-23,132.6,-68).s().p("EgilgIKMBBKgJ+IEBaUMhBJAJ+g");
	this.shape_50.setTransform(19.625,-12.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-161.1,-22.9,132.2,-67.8).s().p("EgiegIIMBA8gJ9IEBaPMhA8AJ8g");
	this.shape_51.setTransform(17.9,-11.975);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-160.6,-22.8,131.7,-67.5).s().p("EgiXgIHMBAvgJ6IEAaJMhAvAJ6g");
	this.shape_52.setTransform(16.2,-11.55);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-160,-22.7,131.4,-67.3).s().p("EgiQgIFMBAigJ4ID/aDMhAhAJ4g");
	this.shape_53.setTransform(14.475,-11.125);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-159.5,-22.7,130.9,-67.1).s().p("EgiJgIDMBAUgJ3ID/Z/MhAUAJ1g");
	this.shape_54.setTransform(12.75,-10.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-159,-22.6,130.5,-66.9).s().p("EgiCgICMBAGgJ0ID+Z5MhAGAJ0g");
	this.shape_55.setTransform(11.05,-10.275);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-158.5,-22.6,130,-66.7).s().p("Egh6gIAMA/4gJyID9ZzMg/4AJyg");
	this.shape_56.setTransform(9.325,-9.85);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-157.9,-22.5,129.6,-66.5).s().p("EghzgH+MA/rgJwID8ZtMg/rAJwg");
	this.shape_57.setTransform(7.6,-9.425);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-157.4,-22.4,129.2,-66.3).s().p("EghsgH8MA/egJuID7ZnMg/eAJug");
	this.shape_58.setTransform(5.875,-9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-156.9,-22.3,128.7,-66).s().p("EghlgH7MA/QgJsID7ZjMg/RAJsg");
	this.shape_59.setTransform(4.175,-8.575);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-156.3,-22.2,128.3,-65.8).s().p("EghdgH5MA/CgJqID6ZdMg/DAJqg");
	this.shape_60.setTransform(2.45,-8.15);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-155.8,-22.2,127.9,-65.6).s().p("EghWgH3MA+1gJoID4ZXMg+1AJog");
	this.shape_61.setTransform(0.725,-7.725);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-155.3,-22.1,127.5,-65.4).s().p("EghPgH2MA+ngJmID4ZSMg+oAJmg");
	this.shape_62.setTransform(-1,-7.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-154.8,-22,127,-65.1).s().p("EghIgH0MA+agJkID3ZNMg+aAJkg");
	this.shape_63.setTransform(-2.7,-6.875);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-154.3,-21.9,126.6,-64.9).s().p("EghBgHyMA+NgJiID2ZIMg+NAJhg");
	this.shape_64.setTransform(-4.425,-6.475);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-153.7,-21.9,126.2,-64.7).s().p("Egg6gHxMA+AgJfID0ZCMg9/AJfg");
	this.shape_65.setTransform(-6.15,-6.05);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-153.3,-21.8,125.7,-64.5).s().p("EggzgHvMA9ygJdID1Y8Mg9yAJdg");
	this.shape_66.setTransform(-7.85,-5.625);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-152.7,-21.7,125.3,-64.3).s().p("EggrgHtMA9kgJbIDzY3Mg9kAJbg");
	this.shape_67.setTransform(-9.575,-5.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-152.2,-21.6,124.8,-64).s().p("EggkgHsMA9XgJZIDyYyMg9XAJZg");
	this.shape_68.setTransform(-11.3,-4.775);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-151.6,-21.6,124.5,-63.8).s().p("EggdgHqMA9JgJXIDyYsMg9JAJXg");
	this.shape_69.setTransform(-13.025,-4.35);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-151.1,-21.5,124,-63.6).s().p("EggWgHoMA88gJVIDxYmMg88AJVg");
	this.shape_70.setTransform(-14.725,-3.925);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["#F023DA","#FF3300","#FFFF33","#08FF82","#0066FF"],[0.224,0.318,0.486,0.647,0.765],-150.6,-21.4,123.6,-63.4).s().p("EggPgHnMA8ugJTIDwYiMg8uAJTg");
	this.shape_71.setTransform(-16.45,-3.5);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).wait(311));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.4,-14.4,241,31.299999999999997);


(lib.txt_pain = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AAmBNIAAhlQgBgOgHgIQgJgIgOAAQgKAAgIAEQgJADgGAGQgFAHgCAIQgEAJAAAKIAABUIgYAAIAAiVIAXAAIAAAYIABAAQAPgcAhAAQAPAAAJAEQAKAEAGAIQAGAHACAKQADAKAAAMIAABig");
	this.shape.setTransform(65.15,3.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgLBoIAAiWIAXAAIAACWgAgLhJIAAgdIAXAAIAAAdg");
	this.shape_1.setTransform(54.175,0.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAlBNIAAhlQAAgOgHgIQgIgIgPAAQgKAAgIAEQgIADgHAGQgFAHgDAIQgDAJAAAKIAABUIgYAAIAAiVIAYAAIAAAYIAAAAQAQgcAfAAQAQAAAJAEQAKAEAGAIQAHAHACAKQACAKAAAMIAABig");
	this.shape_2.setTransform(35.35,3.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgLBoIAAiWIAXAAIAACWgAgLhJIAAgdIAXAAIAAAdg");
	this.shape_3.setTransform(24.375,0.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAmBJQgGgGAAgMQgKAMgOAGQgMAFgQABQgKgBgJgCQgKgCgGgFQgHgGgEgIQgDgHAAgMQAAgNADgHQAFgIAHgGQAIgDAIgEIATgEIATgDIAPgDQAIgCADgDQAFgEAAgHQAAgIgDgFQgDgFgFgDQgFgCgGgBIgLAAQgPAAgLAFQgKAGgBARIgZAAQABgOAFgKQAFgJAJgGQAJgHALgCQALgDAMAAIAUACQAKABAIAFQAIAEAFAJQAFAHAAAOIAABLIABAOQABADAGAAIAHgBIAAATQgGAFgMAAQgJgBgFgFgAASACIgPADIgQADIgQADQgGAEgEAFQgFAFABAKQAAAFACAFQADAEAEADIAJADIALABQALABAIgEQAJgDAGgFQAFgFADgGQACgGABgFIAAgYQgFACgIABg");
	this.shape_4.setTransform(13.95,3.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhGBpIAAjOIAYAAIAAAVIABAAQAGgNANgFQANgGAPAAQARAAAOAGQAMAHAJALQAIAKAFAPQAEAOAAAQQAAAQgEANQgFAOgIALQgJAKgMAGQgNAHgRAAIgMgCIgNgDQgHgDgGgFQgGgEgEgHIgBAAIAABNgAgVhNQgKAEgFAIQgGAIgCALQgCAKgBAKQAAALADAKQADAKAFAIQAHAHAIAFQAJAFAMAAQANAAAJgFQAIgFAFgIQAFgIADgKQACgKAAgLQAAgKgDgKQgDgLgFgHQgGgIgJgFQgJgEgLAAQgMAAgIAFg");
	this.shape_5.setTransform(-2,5.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAlBJQgFgGAAgMQgLAMgNAGQgMAFgQABQgKgBgJgCQgKgCgGgFQgGgGgEgIQgFgHAAgMQAAgNAFgHQAEgIAHgGQAHgDAKgEIASgEIATgDIAQgDQAGgCAEgDQAEgEAAgHQAAgIgDgFQgDgFgEgDQgFgCgGgBIgKAAQgQAAgKAFQgLAGgBARIgYAAQAAgOAFgKQAFgJAJgGQAIgHAMgCQALgDANAAIATACQAKABAIAFQAIAEAFAJQAFAHAAAOIAABLIABAOQABADAGAAIAIgBIAAATQgHAFgLAAQgKgBgGgFgAASACIgQADIgQADIgOADQgHAEgEAFQgEAFgBAKQABAFACAFQADAEADADIAJADIALABQAMABAJgEQAIgDAFgFQAGgFADgGQACgGAAgFIAAgYQgEACgIABg");
	this.shape_6.setTransform(-26.05,3.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgmBNIAAiVIAXAAIAAAfIABAAQAIgSAMgJQANgIAVAAIAAAaQgPAAgKAFQgLAEgGAHQgGAIgDALQgCAMAAANIAABDg");
	this.shape_7.setTransform(-45.65,3.0236);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgqBkQgTgJgMgPQgNgPgGgUQgGgUAAgVQAAgUAGgUQAGgTANgPQAMgPATgJQASgJAYAAQAZAAASAJQATAJAMAPQANAPAGATQAGAUAAAUQAAAVgGAUQgGAUgNAPQgMAPgTAJQgSAIgZAAQgYAAgSgIgAgghNQgNAIgJAMQgJAMgEAPQgEAQAAAOQAAAQAEAPQAEAPAJANQAJAMANAHQAOAHASAAQATAAANgHQAOgHAJgMQAIgNAEgPQAFgPAAgQQAAgOgFgQQgEgPgIgMQgJgMgOgIQgNgHgTAAQgSAAgOAHg");
	this.shape_8.setTransform(-62.075,0.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_pain, new cjs.Rectangle(-75.1,-18.9,150.3,37.8), null);


(lib.txt_noMore_color_02 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F023DA").s().p("AgdBLQgNgGgKgLQgJgLgFgPQgEgPgBgRQAAgRAGgPQAFgPAKgLQAJgKAOgGQANgGAPAAQAVAAANAJQAOAIAIANQAIAOAEAPQADAQgBANIhzAAQAAAKACAJQADAJAGAHQAGAHAJAFQAKADALAAQAQAAALgHQAKgIAEgOIAZAAQgFAZgSANQgRAOgaAAQgSAAgOgGgAgRg2QgIADgGAGQgGAGgDAIQgDAIgBAJIBYAAQAAgJgEgIQgDgIgGgGQgGgGgIgDQgIgDgJgBQgJABgIADg");
	this.shape.setTransform(48.0536,3.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F023DA").s().p("AgoBPIAAiaIAYAAIAAAhIABAAQAJgTANgJQANgJAVABIAAAbQgQAAgKAEQgLAEgGAIQgGAIgEAMQgCALAAAOIAABFg");
	this.shape_1.setTransform(36.575,3.1736);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F023DA").s().p("AgfBLQgPgGgJgMQgKgLgFgOQgEgPAAgRQAAgQAEgPQAFgOAKgMQAJgKAPgHQAOgGARAAQASAAAOAGQAOAHAKAKQAKAMAEAOQAFAPAAAQQAAARgFAPQgEAOgKALQgKAMgOAGQgOAGgSAAQgRAAgOgGgAgSg2QgJAEgGAIQgHAHgEALQgDALAAANQAAAOADALQAEALAHAIQAGAHAJAEQAJADAJAAQAKAAAJgDQAIgEAHgHQAHgIADgLQAEgLAAgOQAAgNgEgLQgDgLgHgHQgHgIgIgEQgJgDgKgBQgJABgJADg");
	this.shape_2.setTransform(22.875,3.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F023DA").s().p("ABTBPIAAhkIgBgOQgBgGgDgFQgEgFgFgCQgGgDgKAAQgSAAgLALQgLALAAASIAABfIgZAAIAAhkIgBgOQgBgGgEgFQgDgFgFgCQgGgDgJAAQgLAAgIAFQgIAEgFAGQgFAHgCAGQgCAHAAAFIAABfIgaAAIAAiaIAYAAIAAAXIABAAQARgaAhAAQAPAAALAGQALAGAFAOQAIgNAMgHQANgGAPAAQAMAAAKACQAJADAHAFQAGAFAEAJQAEAJAAAMIAABwg");
	this.shape_3.setTransform(2.275,3.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F023DA").s().p("AgfBLQgPgGgJgMQgKgLgFgOQgEgPAAgRQAAgQAEgPQAFgOAKgMQAJgKAPgHQAOgGARAAQASAAAOAGQAOAHAKAKQAKAMAEAOQAFAPAAAQQAAARgFAPQgEAOgKALQgKAMgOAGQgOAGgSAAQgRAAgOgGgAgSg2QgJAEgGAIQgHAHgEALQgDALAAANQAAAOADALQAEALAHAIQAGAHAJAEQAJADAJAAQAKAAAJgDQAIgEAHgHQAHgIADgLQAEgLAAgOQAAgNgEgLQgDgLgHgHQgHgIgIgEQgJgDgKgBQgJABgJADg");
	this.shape_4.setTransform(-25.775,3.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F023DA").s().p("AA2BrIhvirIAAAAIAACrIgbAAIAAjVIAeAAIBwCsIABAAIAAisIAbAAIAADVg");
	this.shape_5.setTransform(-44.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_noMore_color_02, new cjs.Rectangle(-57.2,-19.4,114.5,38.9), null);


(lib.txt_noMore_color = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#02C4F0").s().p("AgdBLQgNgGgKgLQgJgLgFgPQgEgPgBgRQAAgRAGgPQAFgPAKgLQAJgKAOgGQANgGAPAAQAVAAANAJQAOAIAIANQAIAOAEAPQADAQgBANIhzAAQAAAKACAJQADAJAGAHQAGAHAJAFQAKADALAAQAQAAALgHQAKgIAEgOIAZAAQgFAZgSANQgRAOgaAAQgSAAgOgGgAgRg2QgIADgGAGQgGAGgDAIQgDAIgBAJIBYAAQAAgJgEgIQgDgIgGgGQgGgGgIgDQgIgDgJgBQgJABgIADg");
	this.shape.setTransform(48.0536,3.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#02C4F0").s().p("AgoBPIAAiaIAYAAIAAAhIABAAQAJgTANgJQANgJAVABIAAAbQgQAAgKAEQgLAEgGAIQgGAIgEAMQgCALAAAOIAABFg");
	this.shape_1.setTransform(36.575,3.1736);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#02C4F0").s().p("AgfBLQgPgGgJgMQgKgLgFgOQgEgPAAgRQAAgQAEgPQAFgOAKgMQAJgKAPgHQAOgGARAAQASAAAOAGQAOAHAKAKQAKAMAEAOQAFAPAAAQQAAARgFAPQgEAOgKALQgKAMgOAGQgOAGgSAAQgRAAgOgGgAgSg2QgJAEgGAIQgHAHgEALQgDALAAANQAAAOADALQAEALAHAIQAGAHAJAEQAJADAJAAQAKAAAJgDQAIgEAHgHQAHgIADgLQAEgLAAgOQAAgNgEgLQgDgLgHgHQgHgIgIgEQgJgDgKgBQgJABgJADg");
	this.shape_2.setTransform(22.875,3.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#02C4F0").s().p("ABTBPIAAhkIgBgOQgBgGgDgFQgEgFgFgCQgGgDgKAAQgSAAgLALQgLALAAASIAABfIgZAAIAAhkIgBgOQgBgGgEgFQgDgFgFgCQgGgDgJAAQgLAAgIAFQgIAEgFAGQgFAHgCAGQgCAHAAAFIAABfIgaAAIAAiaIAYAAIAAAXIABAAQARgaAhAAQAPAAALAGQALAGAFAOQAIgNAMgHQANgGAPAAQAMAAAKACQAJADAHAFQAGAFAEAJQAEAJAAAMIAABwg");
	this.shape_3.setTransform(2.275,3.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#02C4F0").s().p("AgfBLQgPgGgJgMQgKgLgFgOQgEgPAAgRQAAgQAEgPQAFgOAKgMQAJgKAPgHQAOgGARAAQASAAAOAGQAOAHAKAKQAKAMAEAOQAFAPAAAQQAAARgFAPQgEAOgKALQgKAMgOAGQgOAGgSAAQgRAAgOgGgAgSg2QgJAEgGAIQgHAHgEALQgDALAAANQAAAOADALQAEALAHAIQAGAHAJAEQAJADAJAAQAKAAAJgDQAIgEAHgHQAHgIADgLQAEgLAAgOQAAgNgEgLQgDgLgHgHQgHgIgIgEQgJgDgKgBQgJABgJADg");
	this.shape_4.setTransform(-25.775,3.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#02C4F0").s().p("AA2BrIhvirIAAAAIAACrIgbAAIAAjVIAeAAIBwCsIABAAIAAisIAbAAIAADVg");
	this.shape_5.setTransform(-44.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_noMore_color, new cjs.Rectangle(-57.2,-19.4,114.5,38.9), null);


(lib.txt_noMore = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgdBLQgNgGgKgLQgJgLgFgPQgEgPgBgRQAAgRAGgPQAFgPAKgLQAJgKAOgGQANgGAPAAQAVAAANAJQAOAIAIANQAIAOAEAPQADAQgBANIhzAAQAAAKACAJQADAJAGAHQAGAHAJAFQAKADALAAQAQAAALgHQAKgIAEgOIAZAAQgFAZgSANQgRAOgaAAQgSAAgOgGgAgRg2QgIADgGAGQgGAGgDAIQgDAIgBAJIBYAAQAAgJgEgIQgDgIgGgGQgGgGgIgDQgIgDgJgBQgJABgIADg");
	this.shape.setTransform(48.0536,3.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgoBPIAAiaIAYAAIAAAhIABAAQAJgTANgJQANgJAVABIAAAbQgQAAgKAEQgLAEgGAIQgGAIgEAMQgCALAAAOIAABFg");
	this.shape_1.setTransform(36.575,3.1736);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgfBLQgPgGgJgMQgKgLgFgOQgEgPAAgRQAAgQAEgPQAFgOAKgMQAJgKAPgHQAOgGARAAQASAAAOAGQAOAHAKAKQAKAMAEAOQAFAPAAAQQAAARgFAPQgEAOgKALQgKAMgOAGQgOAGgSAAQgRAAgOgGgAgSg2QgJAEgGAIQgHAHgEALQgDALAAANQAAAOADALQAEALAHAIQAGAHAJAEQAJADAJAAQAKAAAJgDQAIgEAHgHQAHgIADgLQAEgLAAgOQAAgNgEgLQgDgLgHgHQgHgIgIgEQgJgDgKgBQgJABgJADg");
	this.shape_2.setTransform(22.875,3.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ABTBPIAAhkIgBgOQgBgGgDgFQgEgFgFgCQgGgDgKAAQgSAAgLALQgLALAAASIAABfIgZAAIAAhkIgBgOQgBgGgEgFQgDgFgFgCQgGgDgJAAQgLAAgIAFQgIAEgFAGQgFAHgCAGQgCAHAAAFIAABfIgaAAIAAiaIAYAAIAAAXIABAAQARgaAhAAQAPAAALAGQALAGAFAOQAIgNAMgHQANgGAPAAQAMAAAKACQAJADAHAFQAGAFAEAJQAEAJAAAMIAABwg");
	this.shape_3.setTransform(2.275,3.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgfBLQgPgGgJgMQgKgLgFgOQgEgPAAgRQAAgQAEgPQAFgOAKgMQAJgKAPgHQAOgGARAAQASAAAOAGQAOAHAKAKQAKAMAEAOQAFAPAAAQQAAARgFAPQgEAOgKALQgKAMgOAGQgOAGgSAAQgRAAgOgGgAgSg2QgJAEgGAIQgHAHgEALQgDALAAANQAAAOADALQAEALAHAIQAGAHAJAEQAJADAJAAQAKAAAJgDQAIgEAHgHQAHgIADgLQAEgLAAgOQAAgNgEgLQgDgLgHgHQgHgIgIgEQgJgDgKgBQgJABgJADg");
	this.shape_4.setTransform(-25.775,3.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AA2BrIhvirIAAAAIAACrIgbAAIAAjVIAeAAIBwCsIABAAIAAisIAbAAIAADVg");
	this.shape_5.setTransform(-44.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_noMore, new cjs.Rectangle(-57.2,-19.4,114.5,38.9), null);


(lib.txt_laserPrinter = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgmBNIAAiVIAXAAIAAAfIAAAAQAKgSAMgJQAMgIAVAAIAAAaQgPAAgKAFQgLAEgFAHQgHAIgDALQgCAMAAANIAABDg");
	this.shape.setTransform(71.25,0.0236);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgcBJQgNgHgJgKQgJgKgEgPQgFgOAAgRQAAgRAFgOQAFgOAKgLQAJgJANgGQANgHAOAAQAUABANAIQAOAIAHANQAJANADAOQADAQgBANIhvAAQAAAJACAJQADAJAGAHQAFAGAJAFQAJADAMAAQAPABAKgIQAKgGADgPIAZAAQgFAZgRANQgRAMgZAAQgRAAgOgFgAgRg0QgHADgGAGQgFAGgDAHQgEAIAAAIIBVAAQgBgIgDgIQgDgIgGgFQgGgGgHgDQgIgDgJgBQgJABgIADg");
	this.shape_1.setTransform(58.2286,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAVBiIgQgCQgGgBgEgDQgFgEgCgGQgCgHAAgKIAAhfIgZAAIAAgVIAZAAIAAgtIAZAAIAAAtIAdAAIAAAVIgdAAIAABdIAAAGQAAABAAABQABAAAAABQAAAAABABQAAAAAAABIAHABIAJAAIALAAIAAAXg");
	this.shape_2.setTransform(45.65,-2.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAlBNIAAhlQABgOgJgIQgHgIgPAAQgKAAgJAEQgIADgFAGQgGAHgDAIQgCAJAAAKIAABUIgZAAIAAiVIAYAAIAAAYIAAAAQAQgcAfAAQAQAAAJAEQAKAEAGAIQAGAHACAKQADAKAAAMIAABig");
	this.shape_3.setTransform(33.6,0.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgLBoIAAiVIAXAAIAACVgAgLhIIAAgeIAXAAIAAAeg");
	this.shape_4.setTransform(22.625,-2.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgmBNIAAiVIAXAAIAAAfIAAAAQAKgSAMgJQANgIATAAIAAAaQgOAAgKAFQgLAEgFAHQgHAIgDALQgDAMAAANIAABDg");
	this.shape_5.setTransform(15.7,0.0236);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhGBpIAAjOIAYAAIAAAVIABAAQAGgNANgFQANgGAPAAQARAAAOAGQAMAHAJALQAIAKAFAPQAEAOAAAQQAAAQgEANQgEAOgJALQgJAKgMAGQgOAHgQAAIgMgCIgNgDQgHgDgGgFQgGgEgEgHIgBAAIAABNgAgVhNQgKAEgFAIQgGAIgCALQgCAKgBAKQAAALADAKQADAKAFAIQAHAHAIAFQAJAFAMAAQAMAAAKgFQAIgFAFgIQAFgIACgKQADgKAAgLQAAgKgDgKQgDgLgFgHQgGgIgJgFQgJgEgLAAQgMAAgIAFg");
	this.shape_6.setTransform(2.15,2.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgmBNIAAiVIAXAAIAAAfIAAAAQAKgSAMgJQANgIATAAIAAAaQgOAAgKAFQgLAEgFAHQgHAIgDALQgDAMAAANIAABDg");
	this.shape_7.setTransform(-18.4,0.0236);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgcBJQgNgHgJgKQgJgKgEgPQgFgOAAgRQAAgRAFgOQAFgOAKgLQAJgJANgGQANgHAOAAQAUABANAIQAOAIAHANQAJANADAOQADAQgBANIhvAAQAAAJACAJQADAJAGAHQAFAGAJAFQAJADAMAAQAPABAKgIQAKgGADgPIAZAAQgFAZgRANQgRAMgZAAQgRAAgOgFgAgRg0QgHADgGAGQgFAGgDAHQgEAIAAAIIBVAAQgBgIgDgIQgDgIgGgFQgGgGgHgDQgIgDgJgBQgJABgIADg");
	this.shape_8.setTransform(-31.4214,0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgXBLQgLgCgJgGQgJgGgFgKQgFgJgBgOIAZAAQAAAIAEAFQADAGAGADQAGAEAHACIANAAIAMAAIAMgDQAFgDAEgEQADgFAAgGQAAgKgHgFQgHgFgLgDIgXgGQgMgCgLgEQgLgEgHgIQgIgJAAgNQAAgMAGgIQAFgJAIgFQAHgEALgDQAKgCAJgBQAMABALACQALACAIAFQAIAGAFAJQAFAJABANIgZAAQAAgGgEgFQgDgFgFgDQgFgDgFgBIgMgCIgLABIgKAEQgFACgDADQgDADAAAHQAAAGAFAEQAFAFAGACIAQAEIAQAEIATAFQAJADAGAEQAHAFAEAHQAFAIAAAKQAAAOgGAJQgGAJgJAFQgJAGgLACQgMACgLAAQgMAAgLgDg");
	this.shape_9.setTransform(-46.375,0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAmBJQgGgFAAgMQgKAMgOAFQgMAGgQgBQgKAAgJgCQgJgDgHgFQgHgFgEgHQgDgJAAgKQAAgNADgJQAFgIAHgFQAHgDAJgEIATgDIATgEIAPgDQAIgCADgDQAFgEAAgHQAAgIgEgFQgDgFgEgCQgFgDgGgBIgLgBQgPABgLAFQgKAGgBARIgZAAQABgOAFgKQAGgJAIgHQAJgFALgDQALgCAMgBIAUACQAKACAIAEQAIAFAFAHQAFAJAAANIAABLIABAOQABADAGAAIAHAAIAAATQgGADgMAAQgJABgFgGgAASACIgPADIgQADIgQAEQgGACgEAGQgFAGAAAJQAAAFADAFQACAEAEACIAJAFIAMAAQALAAAIgDQAJgDAGgFQAFgGADgFQACgGABgGIAAgYQgFADgIABg");
	this.shape_10.setTransform(-60.85,0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgLBoIAAjOIAXAAIAADOg");
	this.shape_11.setTransform(-71.875,-2.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_laserPrinter, new cjs.Rectangle(-77.1,-21.9,154.3,37.8), null);


(lib.txt_isYour = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgmBNIAAiVIAXAAIAAAfIABAAQAIgSAMgJQANgIAVAAIAAAaQgPAAgKAFQgLAEgGAHQgGAIgDALQgCAMAAANIAABDg");
	this.shape.setTransform(39.4,3.0236);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgiBJQgKgEgGgIQgGgHgCgKQgDgKAAgMIAAhiIAYAAIAABlQAAAOAJAIQAIAIAOAAQAKAAAJgEQAIgDAFgGQAGgHADgIQADgJAAgKIAAhUIAYAAIAACVIgXAAIAAgYIAAAAQgJAOgLAHQgNAHgQAAQgOAAgKgEg");
	this.shape_1.setTransform(25.65,3.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgeBIQgOgFgJgMQgKgKgEgOQgFgOAAgRQAAgQAFgNQAEgPAKgKQAJgLAOgHQANgFARgBQASABANAFQAOAHAJALQAJAKAFAPQAFANAAAQQAAARgFAOQgFAOgJAKQgJAMgOAFQgNAHgSAAQgRAAgNgHgAgRg0QgJAEgGAHQgGAHgEALQgEALAAAMQAAAOAEALQAEAKAGAHQAGAHAJAEQAIAEAJgBQAJABAJgEQAJgEAGgHQAGgHAEgKQAEgLAAgOQAAgMgEgLQgEgLgGgHQgGgHgJgEQgJgEgJABQgJgBgIAEg");
	this.shape_2.setTransform(9.325,3.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AguBoIgIgBIAAgXIAHACIAHABQAIAAAFgEQAEgDADgHIAKgZIg7iUIAbAAIArB5IABAAIAqh5IAaAAIhBCpIgHATQgFAHgFAFQgFAEgGADQgHACgHAAg");
	this.shape_3.setTransform(-6.25,6.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgXBLQgLgCgJgGQgJgGgFgJQgFgLgBgOIAZAAQAAAJAEAGQADAFAGAEQAGADAHABIANABIAMAAIAMgDQAFgCAEgFQADgFAAgGQAAgKgHgFQgHgFgLgDIgXgFQgMgDgLgEQgLgEgHgIQgIgJAAgOQAAgLAGgIQAFgJAIgFQAHgFALgCQAKgDAJAAQAMAAALADQALACAIAFQAIAGAFAJQAFAJABAOIgZAAQAAgHgEgGQgDgEgFgDQgFgDgFgBIgMgBIgLAAIgKADQgFACgDAEQgDAEAAAGQAAAGAFAEQAFAEAGADIAQAEIAQAFIATAEQAJAEAGADQAHAFAEAIQAFAGAAALQAAAOgGAJQgGAJgJAGQgJAFgLACQgMACgLABQgMAAgLgEg");
	this.shape_4.setTransform(-28.775,3.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgNBoIAAjOIAbAAIAADOg");
	this.shape_5.setTransform(-39.775,0.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_isYour, new cjs.Rectangle(-45.5,-18.9,91.1,37.8), null);


(lib.txt_expensive_color_02 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#E72DD3").s().p("AgqBoQgUgIgOgQQgOgOgHgUQgIgVAAgYQAAgXAIgVQAIgUAOgPQAPgQATgIQAUgJAXAAQAbAAAVALQAUAKAMASQANASAGAWQAGAXgCAXIiYAAQACAdANAMQANANAXAAQASAAANgJQAMgJADgKIA0AAQgNAmgZARQgaARgkAAQgYAAgUgIgAgVg+QgKAEgFAIQgGAGgCAIIgDAPIBeAAQgEgXgKgMQgLgLgVAAQgNAAgJAFg");
	this.shape.setTransform(79.0161,4.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E72DD3").s().p("AgfBqIhJjTIA+AAIAsCQIAAAAIAtiQIA5AAIhHDTg");
	this.shape_1.setTransform(58.6,4.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E72DD3").s().p("AgcCSIAAjTIA5AAIAADTgAgchiIAAgvIA5AAIAAAvg");
	this.shape_2.setTransform(44.7,0.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E72DD3").s().p("AgiBrQgRgDgOgJQgOgIgJgOQgIgOgBgWIA4AAQAAAKADAGQAEAHAGAFQAHAEAIACIAPACIANgCIAMgEQAFgDAEgFQAEgFAAgIQAAgOgRgGQgSgHgegGIgYgHQgNgEgKgFQgJgHgFgJQgGgJAAgOQAAgVAIgNQAIgNANgIQANgHAQgEQARgDARAAQARAAAQADQAQAEAMAIQANAHAIANQAJANACAUIg4AAQgBgRgMgGQgLgGgPAAIgKABIgKADIgIAFQgEAFAAAGQAAAIAFAEQAGAFAKAEIAUAFIAYAFIAZAIQAMAEAKAGQAJAGAGAKQAFAKAAAPQAAAVgIAOQgJAOgNAJQgOAIgRAEQgRADgTABQgRAAgSgFg");
	this.shape_3.setTransform(30.4,4.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E72DD3").s().p("AAqBtIAAh3QAAgagJgNQgIgNgVAAQgXAAgKAOQgLAOAAAhIAABuIg7AAIAAjTIA4AAIAAAdIABAAQAMgSARgJQARgIASAAQAYAAAPAGQAOAHAJALQAJALADARQAEAQgBATIAACCg");
	this.shape_4.setTransform(9.25,4.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E72DD3").s().p("AgqBoQgUgIgOgQQgOgOgHgUQgIgVAAgYQAAgXAIgVQAIgUAOgPQAPgQATgIQAUgJAXAAQAbAAAVALQAUAKAMASQANASAGAWQAGAXgCAXIiYAAQACAdANAMQANANAXAAQASAAANgJQAMgJADgKIA0AAQgNAmgZARQgaARgkAAQgYAAgUgIgAgVg+QgKAEgFAIQgGAGgCAIIgDAPIBeAAQgEgXgKgMQgLgLgVAAQgNAAgJAFg");
	this.shape_5.setTransform(-12.6339,4.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E72DD3").s().p("AhrCSIAAkeIA4AAIAAAbIAAAAQALgQAQgJQARgHASAAQAZAAATAKQARAIAMAQQAMAQAGAUQAGAVAAAXQAAAVgGATQgGAUgMAPQgLAPgRAJQgSAJgYAAQgSAAgRgIQgQgIgLgPIgBAAIAABkgAgYhgQgKAHgGAJQgGAKgDAMQgCAMAAANQABANACAMQADAMAFAIQAHAKAJAGQAKAFAOABQANgBAKgFQAKgGAGgKQAFgIADgMQADgMgBgNQABgMgDgNQgDgMgGgKQgGgJgKgHQgKgFgMgBQgOABgKAFg");
	this.shape_6.setTransform(-34.45,8.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E72DD3").s().p("AAsBqIgshDIgsBDIhBAAIBNhuIhGhlIBCAAIAkA4IAlg4IBBAAIhGBkIBOBvg");
	this.shape_7.setTransform(-56.45,4.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E72DD3").s().p("AgqBoQgUgIgOgQQgOgOgHgUQgIgVAAgYQAAgXAIgVQAIgUAOgPQAPgQATgIQAUgJAXAAQAbAAAVALQAUAKAMASQANASAGAWQAGAXgCAXIiYAAQACAdANAMQANANAXAAQASAAANgJQAMgJADgKIA0AAQgNAmgZARQgaARgkAAQgYAAgUgIgAgVg+QgKAEgFAIQgGAGgCAIIgDAPIBeAAQgEgXgKgMQgLgLgVAAQgNAAgJAFg");
	this.shape_8.setTransform(-77.1839,4.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_expensive_color_02, new cjs.Rectangle(-90.9,-26.4,181.9,52.9), null);


(lib.txt_expensive_color = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#02C4F0").s().p("AgqBoQgUgIgOgQQgOgOgHgUQgIgVAAgYQAAgXAIgVQAIgUAOgPQAPgQATgIQAUgJAXAAQAbAAAVALQAUAKAMASQANASAGAWQAGAXgCAXIiYAAQACAdANAMQANANAXAAQASAAANgJQAMgJADgKIA0AAQgNAmgZARQgaARgkAAQgYAAgUgIgAgVg+QgKAEgFAIQgGAGgCAIIgDAPIBeAAQgEgXgKgMQgLgLgVAAQgNAAgJAFg");
	this.shape.setTransform(79.0161,4.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#02C4F0").s().p("AgfBqIhJjTIA+AAIAsCQIAAAAIAtiQIA5AAIhHDTg");
	this.shape_1.setTransform(58.6,4.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#02C4F0").s().p("AgcCSIAAjTIA5AAIAADTgAgchiIAAgvIA5AAIAAAvg");
	this.shape_2.setTransform(44.7,0.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#02C4F0").s().p("AgiBrQgRgDgOgJQgOgIgJgOQgIgOgBgWIA4AAQAAAKADAGQAEAHAGAFQAHAEAIACIAPACIANgCIAMgEQAFgDAEgFQAEgFAAgIQAAgOgRgGQgSgHgegGIgYgHQgNgEgKgFQgJgHgFgJQgGgJAAgOQAAgVAIgNQAIgNANgIQANgHAQgEQARgDARAAQARAAAQADQAQAEAMAIQANAHAIANQAJANACAUIg4AAQgBgRgMgGQgLgGgPAAIgKABIgKADIgIAFQgEAFAAAGQAAAIAFAEQAGAFAKAEIAUAFIAYAFIAZAIQAMAEAKAGQAJAGAGAKQAFAKAAAPQAAAVgIAOQgJAOgNAJQgOAIgRAEQgRADgTABQgRAAgSgFg");
	this.shape_3.setTransform(30.4,4.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#02C4F0").s().p("AAqBtIAAh3QAAgagJgNQgIgNgVAAQgXAAgKAOQgLAOAAAhIAABuIg7AAIAAjTIA4AAIAAAdIABAAQAMgSARgJQARgIASAAQAYAAAPAGQAOAHAJALQAJALADARQAEAQgBATIAACCg");
	this.shape_4.setTransform(9.25,4.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#02C4F0").s().p("AgqBoQgUgIgOgQQgOgOgHgUQgIgVAAgYQAAgXAIgVQAIgUAOgPQAPgQATgIQAUgJAXAAQAbAAAVALQAUAKAMASQANASAGAWQAGAXgCAXIiYAAQACAdANAMQANANAXAAQASAAANgJQAMgJADgKIA0AAQgNAmgZARQgaARgkAAQgYAAgUgIgAgVg+QgKAEgFAIQgGAGgCAIIgDAPIBeAAQgEgXgKgMQgLgLgVAAQgNAAgJAFg");
	this.shape_5.setTransform(-12.6339,4.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#02C4F0").s().p("AhrCSIAAkeIA4AAIAAAbIAAAAQALgQAQgJQARgHASAAQAZAAATAKQARAIAMAQQAMAQAGAUQAGAVAAAXQAAAVgGATQgGAUgMAPQgLAPgRAJQgSAJgYAAQgSAAgRgIQgQgIgLgPIgBAAIAABkgAgYhgQgKAHgGAJQgGAKgDAMQgCAMAAANQABANACAMQADAMAFAIQAHAKAJAGQAKAFAOABQANgBAKgFQAKgGAGgKQAFgIADgMQADgMgBgNQABgMgDgNQgDgMgGgKQgGgJgKgHQgKgFgMgBQgOABgKAFg");
	this.shape_6.setTransform(-34.45,8.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#02C4F0").s().p("AAsBqIgshDIgsBDIhBAAIBNhuIhGhlIBCAAIAkA4IAlg4IBBAAIhGBkIBOBvg");
	this.shape_7.setTransform(-56.45,4.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#02C4F0").s().p("AgqBoQgUgIgOgQQgOgOgHgUQgIgVAAgYQAAgXAIgVQAIgUAOgPQAPgQATgIQAUgJAXAAQAbAAAVALQAUAKAMASQANASAGAWQAGAXgCAXIiYAAQACAdANAMQANANAXAAQASAAANgJQAMgJADgKIA0AAQgNAmgZARQgaARgkAAQgYAAgUgIgAgVg+QgKAEgFAIQgGAGgCAIIgDAPIBeAAQgEgXgKgMQgLgLgVAAQgNAAgJAFg");
	this.shape_8.setTransform(-77.1839,4.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_expensive_color, new cjs.Rectangle(-90.9,-26.4,181.9,52.9), null);


(lib.txt_expensive = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgqBoQgUgIgOgQQgOgOgHgUQgIgVAAgYQAAgXAIgVQAIgUAOgPQAPgQATgIQAUgJAXAAQAbAAAVALQAUAKAMASQANASAGAWQAGAXgCAXIiYAAQACAdANAMQANANAXAAQASAAANgJQAMgJADgKIA0AAQgNAmgZARQgaARgkAAQgYAAgUgIgAgVg+QgKAEgFAIQgGAGgCAIIgDAPIBeAAQgEgXgKgMQgLgLgVAAQgNAAgJAFg");
	this.shape.setTransform(79.0161,4.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgfBqIhJjTIA+AAIAsCQIAAAAIAtiQIA5AAIhHDTg");
	this.shape_1.setTransform(58.6,4.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgcCSIAAjTIA5AAIAADTgAgchiIAAgvIA5AAIAAAvg");
	this.shape_2.setTransform(44.7,0.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgiBrQgRgDgOgJQgOgIgJgOQgIgOgBgWIA4AAQAAAKADAGQAEAHAGAFQAHAEAIACIAPACIANgCIAMgEQAFgDAEgFQAEgFAAgIQAAgOgRgGQgSgHgegGIgYgHQgNgEgKgFQgJgHgFgJQgGgJAAgOQAAgVAIgNQAIgNANgIQANgHAQgEQARgDARAAQARAAAQADQAQAEAMAIQANAHAIANQAJANACAUIg4AAQgBgRgMgGQgLgGgPAAIgKABIgKADIgIAFQgEAFAAAGQAAAIAFAEQAGAFAKAEIAUAFIAYAFIAZAIQAMAEAKAGQAJAGAGAKQAFAKAAAPQAAAVgIAOQgJAOgNAJQgOAIgRAEQgRADgTABQgRAAgSgFg");
	this.shape_3.setTransform(30.4,4.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAqBtIAAh3QAAgagJgNQgIgNgVAAQgXAAgKAOQgLAOAAAhIAABuIg7AAIAAjTIA4AAIAAAdIABAAQAMgSARgJQARgIASAAQAYAAAPAGQAOAHAJALQAJALADARQAEAQgBATIAACCg");
	this.shape_4.setTransform(9.25,4.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgqBoQgUgIgOgQQgOgOgHgUQgIgVAAgYQAAgXAIgVQAIgUAOgPQAPgQATgIQAUgJAXAAQAbAAAVALQAUAKAMASQANASAGAWQAGAXgCAXIiYAAQACAdANAMQANANAXAAQASAAANgJQAMgJADgKIA0AAQgNAmgZARQgaARgkAAQgYAAgUgIgAgVg+QgKAEgFAIQgGAGgCAIIgDAPIBeAAQgEgXgKgMQgLgLgVAAQgNAAgJAFg");
	this.shape_5.setTransform(-12.6339,4.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhrCSIAAkeIA4AAIAAAbIAAAAQALgQAQgJQARgHASAAQAZAAATAKQARAIAMAQQAMAQAGAUQAGAVAAAXQAAAVgGATQgGAUgMAPQgLAPgRAJQgSAJgYAAQgSAAgRgIQgQgIgLgPIgBAAIAABkgAgYhgQgKAHgGAJQgGAKgDAMQgCAMAAANQABANACAMQADAMAFAIQAHAKAJAGQAKAFAOABQANgBAKgFQAKgGAGgKQAFgIADgMQADgMgBgNQABgMgDgNQgDgMgGgKQgGgJgKgHQgKgFgMgBQgOABgKAFg");
	this.shape_6.setTransform(-34.45,8.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAsBqIgshDIgsBDIhBAAIBNhuIhGhlIBCAAIAkA4IAlg4IBBAAIhGBkIBOBvg");
	this.shape_7.setTransform(-56.45,4.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgqBoQgUgIgOgQQgOgOgHgUQgIgVAAgYQAAgXAIgVQAIgUAOgPQAPgQATgIQAUgJAXAAQAbAAAVALQAUAKAMASQANASAGAWQAGAXgCAXIiYAAQACAdANAMQANANAXAAQASAAANgJQAMgJADgKIA0AAQgNAmgZARQgaARgkAAQgYAAgUgIgAgVg+QgKAEgFAIQgGAGgCAIIgDAPIBeAAQgEgXgKgMQgLgLgVAAQgNAAgJAFg");
	this.shape_8.setTransform(-77.1839,4.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_expensive, new cjs.Rectangle(-90.9,-26.4,181.9,52.9), null);


(lib.txt_ecoTankPro_Logo = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AsgByQgQgHgLgMQgLgMgHgQQgGgRAAgTQAAgUAHgPQAGgRALgMQAMgMAQgHQAQgGATAAQAWAAAQAIQARAIAKAOQAKAOAFASQAFARgCAVIh7AAQABAXALAKQAKAKAUAAQAOAAALgHQAKgHACgJIApAAQgKAggUAMQgVAOgdAAQgUAAgQgGgAsQgUQgHAEgEAGQgFAGgCAEIgCAMIBMAAQgDgRgIgJQgJgKgRABQgLAAgIADgAvVByQgQgHgLgMQgLgMgHgQQgGgRAAgTQAAgUAHgPQAGgRALgMQAMgMAQgHQAQgGATAAQAWAAAQAIQARAIAKAOQAKAOAFASQAFARgCAVIh7AAQABAXALAKQAKAKAUAAQAOAAALgHQAKgHACgJIApAAQgKAggUAMQgVAOgdAAQgUAAgQgGgAvFgUQgHAEgEAGQgFAGgCAEIgCAMIBMAAQgDgRgIgJQgJgKgRABQgLAAgIADgASoBxQgPgHgLgMQgKgMgGgQQgFgRAAgSQAAgUAFgOQAGgRAKgMQALgMAPgHQAQgHAUAAQAUAAAQAHQAPAHALAMQAKAMAGARQAFAOAAAUQAAASgFARQgGAQgKAMQgLAMgPAHQgQAGgUAAQgUAAgQgGgAS3gdQgJAEgIAIQgHAJgEALQgEAMAAAQQAAAPAEAMQAEAMAHAIQAIAIAJAEQAKAFALAAQALAAAKgFQAJgEAIgIQAHgIAEgMQAEgMAAgPQAAgQgEgMQgEgLgHgJQgIgIgJgEQgKgFgLAAQgLAAgKAFgAEjBxQgHgGAAgOQgLAOgQAGQgPAGgSAAQgMAAgKgDQgKgCgIgGQgHgGgFgIQgEgKAAgNQAAgOAFgJQAFgKAIgFQAIgGAKgDIA+gLQAIgCAEgFQAFgEAAgHQAAgJgEgGQgDgGgGgDQgFgCgHgBIgNgCQgSABgMAGQgMAHgBATIgcAAQABgQAGgLQAGgKAKgIQAKgGAMgDQANgDAOAAIAYACQALABAJAGQAJAFAGAIQAGAKAAAPIABBkQABAGAGAAIAJgCIAAAWQgHAEgNAAQgLAAgGgGgAENAhIglAGQgKABgHADQgIADgFAHQgFAGAAAKQAAAHADAFQADAFAEADQAFADAGABIAMACQAOAAAKgFQAKgDAGgGQAHgGADgGQACgHAAgGIAAgdQgFAFgIABgAhCBxQgQgHgKgMQgLgMgFgQQgFgRAAgSQAAgUAFgOQAFgRALgMQAKgMAQgHQAPgHAUAAQAVAAAOAHQAQAHAKAMQALAMAFARQAFAOAAAUQAAASgFARQgFAQgLAMQgKAMgQAHQgOAGgVAAQgUAAgPgGgAgzgdQgKAEgHAIQgHAJgEALQgFAMAAAQQAAAPAFAMQAEAMAHAIQAHAIAKAEQAKAFAKAAQALAAAKgFQAKgEAGgIQAHgIAEgMQAFgMAAgPQAAgQgFgMQgEgLgHgJQgGgIgKgEQgKgFgLAAQgKAAgKAFgAjtBxQgPgGgKgMQgKgMgFgPQgFgQAAgTQAAgUAFgPQAFgRAKgMQAKgNAPgHQAPgHAUAAQAPAAAMADQANAEAKAHQAKAIAGAKQAGALACAPIgdAAQgEgPgKgKQgLgIgSgBQgPABgKAFQgKAGgGAJQgGAJgDALQgDANAAANQAAAMADAKQADALAGAKQAGAIAJAFQAKAGANAAQAVAAAMgLQALgLADgUIAdAAQgFAggTARQgTARghAAQgTAAgPgGgApoBzQgJgBgIgEQgHgEgFgJQgEgHAAgNIAAhjIgcAAIAAggIAcAAIAAgzIAvAAIAAAzIAiAAIAAAgIgiAAIAABSQAAAMAEAFQAEADAMAAIAOgBIAAAkIgNACgAQcBzIAAipIAaAAIAAAkIABAAQAKgVAPgKQAPgJAXAAIAAAdQgRAAgMAGQgMAEgHAJQgHAIgEAMQgDANAAARIAABLgANUBzIAAjqIBnAAQAkAAASASQATASAAAiQAAAhgTARQgSASgkAAIhIAAIAABggANzgHIA+AAQAaABANgLQAMgMAAgUQAAgWgMgLQgNgLgaABIg+AAgAJ5BzIg7hZIgaAZIAABAIgcAAIAAjqIAcAAIAACKIBOhJIAmAAIhEA9IBJBsgAHLBzIAAhzQAAgPgJgJQgJgKgRAAQgMABgKAEQgJADgHAIQgGAHgDAKQgDAIAAAMIAABgIgcAAIAAipIAaAAIAAAbIABAAQARgfAmAAQARAAALAEQAMAFAHAJQAHAHACAMQADAMAAANIAABvgABcBzIAAjPIhPAAIAAgbIC8AAIAAAbIhOAAIAADPgAnOBzIAAjqICjAAIAAAbIiEAAIAABKIB7AAIAAAZIh7AAIAABSICFAAIAAAagAxQBzIAAilIgBAAIg6ClIgoAAIg5ikIgBAAIAACkIgxAAIAAjqIBJAAIA4ChIAAAAIA0ihIBJAAIAADqgAK1gdQgHgCgEgEQgFgFgDgGQgDgGAAgHQAAgJADgGQADgGAFgEQAEgEAHgDQAGgDAHABQAHgBAGADQAGADAFAEQAFAEACAGQADAGAAAJQAAAHgDAGQgCAGgFAFQgFAEgGACQgGADgHAAQgHAAgGgDgAK4hUQgFACgDADQgEAEgCAEQgCAGAAAGQAAAFACAFQACAFAEAEQADADAFACQAEACAGAAQAFAAAFgCQAEgCAEgDQADgEACgFQACgFAAgFQAAgGgCgGQgCgEgDgEQgEgDgEgCQgFgCgFAAQgGAAgEACgALKgpIgJgQIgFAAIAAAQIgIAAIAAgmIAPAAQAHAAADADQAEACAAAHIAAAEIgDADIgDACIgEABIALAQgAK8g/IAGAAIAGgBQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAgBIgBgDIgCgBIgFgBIgGAAg");
	this.shape.setTransform(0.875,0.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_ecoTankPro_Logo, new cjs.Rectangle(-130.2,-11.7,262.2,24), null);


(lib.txt_EcoTankPro = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AMABxQgPgHgLgMQgKgMgGgQQgFgQAAgTQAAgTAFgPQAGgRAKgLQALgNAPgGQAQgIAUAAQAUAAAQAIQAPAGALANQAKALAGARQAFAPAAATQAAATgFAQQgGAQgKAMQgLAMgPAHQgQAGgUABQgUgBgQgGgAMPgdQgJAFgIAIQgHAJgEALQgEAMAAAPQAAAQAEALQAEANAHAHQAIAJAJAEQAKAEALAAQALAAAKgEQAJgEAIgJQAHgHAEgNQAEgLAAgQQAAgPgEgMQgEgLgHgJQgIgIgJgFQgKgEgLAAQgLAAgKAEgAiEBxQgHgFAAgOQgLAOgQAFQgPAHgSAAQgMgBgKgCQgKgCgIgGQgHgGgFgJQgEgJAAgNQAAgOAFgJQAFgKAIgGQAIgGAKgDIA+gLQAIgCAEgFQAFgEAAgGQAAgJgEgHQgDgFgGgDQgFgDgHgBIgNgBQgSAAgMAHQgMAGgBATIgcAAQABgPAGgLQAGgLAKgHQAKgGAMgEQANgDAOAAIAYACQALACAJAFQAJAFAGAJQAGAKAAAOIABBlQABAFAGAAIAJgBIAAAVQgHAFgNAAQgLAAgGgHgAiaAhIglAHQgKABgHADQgIADgFAGQgFAHAAAKQAAAHADAFQADAEAEADQAFAEAGABIAMABQAOAAAKgEQAKgDAGgGQAHgGADgHQACgHAAgFIAAgdQgFAEgIABgAnqBxQgQgHgKgMQgLgMgFgQQgFgQAAgTQAAgTAFgPQAFgRALgLQAKgNAQgGQAPgIAUAAQAVAAAPAIQAQAGAKANQALALAFARQAFAPAAATQAAATgFAQQgFAQgLAMQgKAMgQAHQgPAGgVABQgUgBgPgGgAnbgdQgKAFgHAIQgHAJgEALQgFAMAAAPQAAAQAFALQAEANAHAHQAHAJAKAEQAKAEAKAAQALAAAKgEQAKgEAHgJQAHgHAEgNQAFgLAAgQQAAgPgFgMQgEgLgHgJQgHgIgKgFQgKgEgLAAQgKAAgKAEgAqVBxQgPgGgKgMQgKgLgFgQQgFgQAAgTQAAgUAFgPQAFgRAKgMQAKgMAPgHQAPgIAUAAQAPABAMADQANADAKAIQAKAHAGALQAGALACAOIgdAAQgEgPgKgJQgLgJgSAAQgPAAgKAGQgKAFgGAJQgGAKgDALQgDAMAAANQAAAMADALQADALAGAJQAGAJAJAFQAKAFANAAQAVAAAMgKQALgLADgVIAdAAQgFAhgTARQgTAQghABQgTAAgPgHgAJ0B0IAAiqIAaAAIAAAkIABAAQAKgUAPgLQAPgJAXAAIAAAeQgRAAgMAFQgMAFgHAIQgHAJgEAMQgDAMAAARIAABMgAGsB0IAAjrIBnAAQAkABASARQATATAAAhQAAAhgTASQgSASgkAAIhIAAIAABggAHLgGIA+AAQAaAAANgKQAMgMAAgVQAAgVgMgLQgNgLgaAAIg+AAgADRB0Ig7hZIgaAYIAABBIgcAAIAAjrIAcAAIAACLIBOhKIAmAAIhEA9IBJBtgAAjB0IAAhzQAAgQgJgIQgJgKgRAAQgLAAgKAEQgJAEgHAHQgGAIgDAJQgDAJAAAMIAABgIgcAAIAAiqIAaAAIAAAbIABAAQARgfAlAAQARABALAEQAMAEAHAJQAHAIACALQADAMAAANIAABwgAlLB0IAAjQIhPAAIAAgbIC8AAIAAAbIhOAAIAADQgAt2B0IAAjrICjAAIAAAbIiEAAIAABKIB7AAIAAAaIh7AAIAABRICFAAIAAAbgAENgcQgHgCgEgEQgFgFgDgHQgDgFAAgIQAAgIADgGQADgHAFgEQAEgEAHgDQAGgCAHAAQAHAAAGACQAGADAFAEQAFAEACAHQADAGAAAIQAAAIgDAFQgCAHgFAFQgFAEgGACQgGADgHAAQgHAAgGgDgAEQhUQgFACgDAEQgEADgCAFQgCAFAAAGQAAAGACAEQACAFAEAEQADADAFADQAEACAGAAQAFAAAFgCQAEgDAEgDQADgEACgFQACgEAAgGQAAgGgCgFQgCgFgDgDQgEgEgEgCQgFgBgFAAQgGAAgEABgAEigoIgJgRIgFAAIAAARIgIAAIAAgmIAPAAQAHAAADACQAEADAAAGIAAAEIgDAEIgDABIgEABIALARgAEUg/IAGAAIAGgBQAAAAABAAQAAAAAAgBQAAAAABgBQAAgBAAAAIgBgDIgCgCIgFgBIgGAAg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_EcoTankPro, new cjs.Rectangle(-88.6,-11.9,177.3,23.9), null);


(lib.txt_anAsset = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AghCSIAAg9IA+AAIAAA9gAgbA9IAAgSQABgRAFgMQAFgMAIgHIAOgOIAPgMQAHgGAEgHQAEgIAAgKQAAgTgJgIQgKgJgPAAQgKAAgIAEQgIAEgFAHQgFAHgCAJQgDAKAAALIg6AAQAAgWAHgSQAHgSANgNQAMgNASgIQASgHAWAAQAbAAATAIQATAHAMAMQALAMAFANQAFANAAAMQAAATgFANQgFAMgHAJQgHAJgJAGIgRALQgIAHgHAIQgGAIgCALIAAAQg");
	this.shape.setTransform(75.875,0.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAICFQgLgBgIgGQgJgFgGgJQgFgKAAgQIAAh4IgiAAIAAgnIAiAAIAAg9IA4AAIAAA9IApAAIAAAnIgpAAIAABlQAAAOAFAFQAEAFAPAAIAJgBIAIgBIAAAsIgQACIgRAAg");
	this.shape_1.setTransform(58.825,1.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgpBlQgTgIgOgOQgNgPgIgTQgHgVAAgXQAAgXAHgUQAIgUAOgPQAOgOATgIQAUgJAWAAQAbAAAUALQATAKANARQAMARAGAWQAFAWgBAXIiUAAQABAbANANQAMAMAXAAQASAAAMgIQAMgJADgKIAyAAQgMAlgZARQgYAQgkAAQgXAAgUgIgAgVg9QgJAFgFAHQgGAGgCAIIgCAOIBbAAQgEgWgKgLQgKgLgVAAQgNAAgJAEg");
	this.shape_2.setTransform(41.7161,4.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AghBpQgRgEgNgIQgOgIgIgOQgJgOgBgUIA2AAQAAAJAEAGQAEAHAGAEQAGAEAIACIAPACIANgBIAMgFQAFgDAEgFQADgFAAgHQAAgNgRgGQgRgHgdgHIgYgGQgMgEgKgFQgJgGgFgJQgGgKAAgOQAAgTAIgNQAIgNAMgIQANgHAQgDQAQgDARAAQAQAAAQADQAQADAMAIQAMAHAJAOQAIAMABATIg2AAQgBgQgLgGQgLgGgOAAIgLAAIgKADIgIAGQgDAEAAAGQAAAIAFAEQAGAGAJACIAUAGIAXAFIAYAHQAMAEAKAGQAJAGAFAKQAGAJAAAPQAAAVgIAOQgJANgNAIQgNAJgRAEQgRADgRAAQgRAAgSgEg");
	this.shape_3.setTransform(20.775,4.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AghBpQgRgEgNgIQgOgIgIgOQgJgOgBgUIA2AAQAAAJAEAGQAEAHAGAEQAGAEAIACIAPACIANgBIAMgFQAFgDAEgFQADgFAAgHQAAgNgRgGQgRgHgdgHIgYgGQgMgEgKgFQgJgGgFgJQgGgKAAgOQAAgTAIgNQAIgNAMgIQANgHAQgDQAQgDARAAQAQAAAQADQAQADAMAIQAMAHAJAOQAIAMABATIg2AAQgBgQgLgGQgLgGgOAAIgLAAIgKADIgIAGQgDAEAAAGQAAAIAFAEQAGAGAJACIAUAGIAXAFIAYAHQAMAEAKAGQAJAGAFAKQAGAJAAAPQAAAVgIAOQgJANgNAIQgNAJgRAEQgRADgRAAQgRAAgSgEg");
	this.shape_4.setTransform(0.575,4.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag5BpQgNgEgKgHQgJgHgGgMQgFgMAAgQQAAgSAGgLQAGgMAKgGQAKgGANgDIAZgGIAZgDIAVgEQAKgCAFgEQAGgFAAgJQAAgJgDgGQgDgFgFgDQgFgDgHgBIgOgBQgQAAgKAIQgJAGgCARIg5AAQACgUAJgNQAIgNAOgIQANgIARgEQARgDARAAIAfACQAQADANAGQAOAHAIALQAIALAAATIAABqIACAbQACANAEAGIg6AAIgCgKIgCgKQgNAOgTAGQgRAGgUAAQgOAAgNgEgAAcAHIgMADIgNACIgNACIgMAEIgLAFQgFADgCAFQgDAGAAAIQAAAHADAFQACAGAFACIALAFIAOABQAQAAAJgGQAJgFAEgIQAFgIABgHIABgOIAAgVg");
	this.shape_5.setTransform(-20.475,4.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AApBqIAAh0QAAgZgJgNQgIgMgUAAQgWAAgLAOQgKANAAAgIAABrIg5AAIAAjOIA2AAIAAAdIACAAQAKgSASgIQAPgIATAAQAWAAAPAGQAPAGAIALQAJALADAQQADAQAAATIAAB+g");
	this.shape_6.setTransform(-52.3,4.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag5BpQgNgEgKgHQgJgHgGgMQgFgMAAgQQAAgSAGgLQAGgMAKgGQAKgGANgDIAZgGIAZgDIAVgEQAKgCAFgEQAGgFAAgJQAAgJgDgGQgDgFgFgDQgFgDgHgBIgOgBQgQAAgKAIQgJAGgCARIg5AAQACgUAJgNQAIgNAOgIQANgIARgEQARgDARAAIAfACQAQADANAGQAOAHAIALQAIALAAATIAABqIACAbQACANAEAGIg6AAIgCgKIgCgKQgNAOgTAGQgRAGgUAAQgOAAgNgEgAAcAHIgMADIgNACIgNACIgMAEIgLAFQgFADgCAFQgDAGAAAIQAAAHADAFQACAGAFACIALAFIAOABQAQAAAJgGQAJgFAEgIQAFgIABgHIABgOIAAgVg");
	this.shape_7.setTransform(-74.475,4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_anAsset, new cjs.Rectangle(-87.8,-25.8,175.7,51.7), null);


(lib.txt_allYouWant_color_02 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FF00FF").s().p("AgQARIAAghIAhAAIAAAhg");
	this.shape.setTransform(76.025,9.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF00FF").s().p("AAXBoIgSgBQgGgBgFgEQgEgEgDgHQgCgHABgLIAAhlIgcAAIAAgXIAcAAIAAgwIAZAAIAAAwIAgAAIAAAXIggAAIAABjIAAAHQABADACACIAGABIALABIAMAAIAAAXg");
	this.shape_1.setTransform(67.7,1.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF00FF").s().p("AAoBSIAAhrQAAgQgJgIQgIgJgQAAQgLAAgJAEQgIADgGAIQgGAHgDAIQgDAKAAALIAABZIgaAAIAAifIAYAAIAAAZIABAAQARgdAiAAQAQAAAKAEQALAFAHAHQAGAIADALQACALAAAMIAABpg");
	this.shape_2.setTransform(55.725,3.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF00FF").s().p("AAoBOQgGgGAAgNQgLANgOAGQgNAGgRAAQgLAAgKgDQgJgCgIgGQgHgFgEgIQgEgJAAgMQAAgOAEgIQAFgJAIgFQAHgFAKgDIAUgEIAUgEIAQgDQAIgCAEgEQAFgDAAgIQAAgJgDgFQgEgFgEgDQgGgDgGgBIgMgBQgQAAgLAHQgMAGgBASIgaAAQAAgPAGgKQAGgLAJgGQAJgGAMgDQAMgDANAAIAWACQAKABAJAFQAIAFAFAJQAGAIAAAOIAABRIABAOQABAEAHAAIAIgBIAAAVQgIAEgLAAQgLAAgGgGgAATADIgQADIgRACQgJACgHADQgIADgEAFQgEAGgBAKQABAGACAFQADAEAEADQAEADAGABIALABQAOAAAIgDQAJgEAGgFQAGgFADgHQACgGABgGIAAgaQgFADgJACg");
	this.shape_3.setTransform(40.3,3.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF00FF").s().p("AAhBQIghh+IAAAAIggB+IgcAAIgzifIAdAAIAkCCIABAAIAgiCIAcAAIAhCCIABAAIAkiCIAbAAIgzCfg");
	this.shape_4.setTransform(21.125,3.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF00FF").s().p("AglBNQgKgDgHgIQgGgIgDgKQgCgMAAgNIAAhoIAaAAIAABrQAAAQAJAIQAIAJAPAAQAMAAAIgEQAJgDAGgIQAGgGADgJQADgKAAgLIAAhZIAaAAIAACfIgYAAIAAgZIgBAAQgJAPgNAHQgNAHgQAAQgQAAgLgFg");
	this.shape_5.setTransform(-5.525,3.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF00FF").s().p("AghBNQgOgGgKgLQgKgMgFgPQgFgPAAgSQAAgQAFgQQAFgPAKgLQAKgMAOgGQAPgHASAAQATAAAOAHQAPAGAKAMQAKALAFAPQAFAQAAAQQAAASgFAPQgFAPgKAMQgKALgPAGQgOAHgTAAQgSAAgPgHgAgSg3QgKAEgGAHQgHAIgEALQgEAMAAANQAAAPAEALQAEALAHAIQAGAIAKAEQAIAEAKAAQAKAAAKgEQAJgEAHgIQAGgIAEgLQAEgLAAgPQAAgNgEgMQgEgLgGgIQgHgHgJgEQgKgFgKAAQgKAAgIAFg");
	this.shape_6.setTransform(-21.85,3.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF00FF").s().p("AgxBwIgJgCIAAgZIAIADIAHABQAIAAAFgEQAGgEACgHIALgbIg/ieIAdAAIAvCCIAAAAIAtiCIAcAAIhGC1IgIATQgFAJgFAFQgFAFgHACQgGACgJAAg");
	this.shape_7.setTransform(-37.35,6.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF00FF").s().p("AgMBvIAAjdIAZAAIAADdg");
	this.shape_8.setTransform(-54.8,0.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF00FF").s().p("AgMBvIAAjdIAZAAIAADdg");
	this.shape_9.setTransform(-60.5,0.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF00FF").s().p("AAoBOQgGgGAAgNQgLANgOAGQgOAGgQAAQgLAAgKgDQgKgCgHgGQgHgFgEgIQgEgJgBgMQABgOAEgIQAFgJAIgFQAHgFAKgDIAUgEIAUgEIAQgDQAIgCAFgEQAEgDAAgIQAAgJgDgFQgEgFgEgDQgGgDgGgBIgMgBQgRAAgLAHQgLAGgBASIgaAAQAAgPAGgKQAFgLAKgGQAJgGAMgDQAMgDANAAIAWACQAKABAJAFQAIAFAFAJQAGAIAAAOIAABRIABAOQABAEAHAAIAIgBIAAAVQgIAEgLAAQgLAAgGgGgAAUADIgRADIgRACQgJACgHADQgIADgEAFQgEAGgBAKQABAGACAFQADAEAEADQAEADAGABIAMABQANAAAIgDQAJgEAGgFQAGgFADgHQACgGAAgGIAAgaQgEADgIACg");
	this.shape_10.setTransform(-70.75,3.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_allYouWant_color_02, new cjs.Rectangle(-81.4,-20,162.8,40.1), null);


(lib.txt_allYouWant_color = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#02B2E6").s().p("AgQARIAAghIAhAAIAAAhg");
	this.shape.setTransform(76.025,9.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#02B2E6").s().p("AAXBoIgSgBQgGgBgFgEQgEgEgDgHQgCgHABgLIAAhlIgcAAIAAgXIAcAAIAAgwIAZAAIAAAwIAgAAIAAAXIggAAIAABjIAAAHQABADACACIAGABIALABIAMAAIAAAXg");
	this.shape_1.setTransform(67.7,1.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#02B2E6").s().p("AAoBSIAAhrQAAgQgJgIQgIgJgQAAQgLAAgJAEQgIADgGAIQgGAHgDAIQgDAKAAALIAABZIgaAAIAAifIAYAAIAAAZIABAAQARgdAiAAQAQAAAKAEQALAFAHAHQAGAIADALQACALAAAMIAABpg");
	this.shape_2.setTransform(55.725,3.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#02B2E6").s().p("AAoBOQgGgGAAgNQgLANgOAGQgNAGgRAAQgLAAgKgDQgJgCgIgGQgHgFgEgIQgEgJAAgMQAAgOAEgIQAFgJAIgFQAHgFAKgDIAUgEIAUgEIAQgDQAIgCAEgEQAFgDAAgIQAAgJgDgFQgEgFgEgDQgGgDgGgBIgMgBQgQAAgLAHQgMAGgBASIgaAAQAAgPAGgKQAGgLAJgGQAJgGAMgDQAMgDANAAIAWACQAKABAJAFQAIAFAFAJQAGAIAAAOIAABRIABAOQABAEAHAAIAIgBIAAAVQgIAEgLAAQgLAAgGgGgAATADIgQADIgRACQgJACgHADQgIADgEAFQgEAGgBAKQABAGACAFQADAEAEADQAEADAGABIALABQAOAAAIgDQAJgEAGgFQAGgFADgHQACgGABgGIAAgaQgFADgJACg");
	this.shape_3.setTransform(40.3,3.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#02B2E6").s().p("AAhBQIghh+IAAAAIggB+IgcAAIgzifIAdAAIAkCCIABAAIAgiCIAcAAIAhCCIABAAIAkiCIAbAAIgzCfg");
	this.shape_4.setTransform(21.125,3.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#02B2E6").s().p("AglBNQgKgDgHgIQgGgIgDgKQgCgMAAgNIAAhoIAaAAIAABrQAAAQAJAIQAIAJAPAAQAMAAAIgEQAJgDAGgIQAGgGADgJQADgKAAgLIAAhZIAaAAIAACfIgYAAIAAgZIgBAAQgJAPgNAHQgNAHgQAAQgQAAgLgFg");
	this.shape_5.setTransform(-5.525,3.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#02B2E6").s().p("AghBNQgOgGgKgLQgKgMgFgPQgFgPAAgSQAAgQAFgQQAFgPAKgLQAKgMAOgGQAPgHASAAQATAAAOAHQAPAGAKAMQAKALAFAPQAFAQAAAQQAAASgFAPQgFAPgKAMQgKALgPAGQgOAHgTAAQgSAAgPgHgAgSg3QgKAEgGAHQgHAIgEALQgEAMAAANQAAAPAEALQAEALAHAIQAGAIAKAEQAIAEAKAAQAKAAAKgEQAJgEAHgIQAGgIAEgLQAEgLAAgPQAAgNgEgMQgEgLgGgIQgHgHgJgEQgKgFgKAAQgKAAgIAFg");
	this.shape_6.setTransform(-21.85,3.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#02B2E6").s().p("AgxBwIgJgCIAAgZIAIADIAHABQAIAAAFgEQAGgEACgHIALgbIg/ieIAdAAIAvCCIAAAAIAtiCIAcAAIhGC1IgIATQgFAJgFAFQgFAFgHACQgGACgJAAg");
	this.shape_7.setTransform(-37.35,6.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#02B2E6").s().p("AgMBvIAAjdIAZAAIAADdg");
	this.shape_8.setTransform(-54.8,0.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#02B2E6").s().p("AgMBvIAAjdIAZAAIAADdg");
	this.shape_9.setTransform(-60.5,0.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#02B2E6").s().p("AAoBOQgGgGAAgNQgLANgOAGQgOAGgQAAQgLAAgKgDQgKgCgHgGQgHgFgEgIQgEgJgBgMQABgOAEgIQAFgJAIgFQAHgFAKgDIAUgEIAUgEIAQgDQAIgCAFgEQAEgDAAgIQAAgJgDgFQgEgFgEgDQgGgDgGgBIgMgBQgRAAgLAHQgLAGgBASIgaAAQAAgPAGgKQAFgLAKgGQAJgGAMgDQAMgDANAAIAWACQAKABAJAFQAIAFAFAJQAGAIAAAOIAABRIABAOQABAEAHAAIAIgBIAAAVQgIAEgLAAQgLAAgGgGgAAUADIgRADIgRACQgJACgHADQgIADgEAFQgEAGgBAKQABAGACAFQADAEAEADQAEADAGABIAMABQANAAAIgDQAJgEAGgFQAGgFADgHQACgGAAgGIAAgaQgEADgIACg");
	this.shape_10.setTransform(-70.75,3.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_allYouWant_color, new cjs.Rectangle(-81.4,-20,162.8,40.1), null);


(lib.txt_allYouWant = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgQARIAAghIAhAAIAAAhg");
	this.shape.setTransform(76.025,9.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAXBoIgSgBQgGgBgFgEQgEgEgDgHQgCgHABgLIAAhlIgcAAIAAgXIAcAAIAAgwIAZAAIAAAwIAgAAIAAAXIggAAIAABjIAAAHQABADACACIAGABIALABIAMAAIAAAXg");
	this.shape_1.setTransform(67.7,1.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAoBSIAAhrQAAgQgJgIQgIgJgQAAQgLAAgJAEQgIADgGAIQgGAHgDAIQgDAKAAALIAABZIgaAAIAAifIAYAAIAAAZIABAAQARgdAiAAQAQAAAKAEQALAFAHAHQAGAIADALQACALAAAMIAABpg");
	this.shape_2.setTransform(55.725,3.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAoBOQgGgGAAgNQgLANgOAGQgNAGgRAAQgLAAgKgDQgJgCgIgGQgHgFgEgIQgEgJAAgMQAAgOAEgIQAFgJAIgFQAHgFAKgDIAUgEIAUgEIAQgDQAIgCAEgEQAFgDAAgIQAAgJgDgFQgEgFgEgDQgGgDgGgBIgMgBQgQAAgLAHQgMAGgBASIgaAAQAAgPAGgKQAGgLAJgGQAJgGAMgDQAMgDANAAIAWACQAKABAJAFQAIAFAFAJQAGAIAAAOIAABRIABAOQABAEAHAAIAIgBIAAAVQgIAEgLAAQgLAAgGgGgAATADIgQADIgRACQgJACgHADQgIADgEAFQgEAGgBAKQABAGACAFQADAEAEADQAEADAGABIALABQAOAAAIgDQAJgEAGgFQAGgFADgHQACgGABgGIAAgaQgFADgJACg");
	this.shape_3.setTransform(40.3,3.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAhBQIghh+IAAAAIggB+IgcAAIgzifIAdAAIAkCCIABAAIAgiCIAcAAIAhCCIABAAIAkiCIAbAAIgzCfg");
	this.shape_4.setTransform(21.125,3.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AglBNQgKgDgHgIQgGgIgDgKQgCgMAAgNIAAhoIAaAAIAABrQAAAQAJAIQAIAJAPAAQAMAAAIgEQAJgDAGgIQAGgGADgJQADgKAAgLIAAhZIAaAAIAACfIgYAAIAAgZIgBAAQgJAPgNAHQgNAHgQAAQgQAAgLgFg");
	this.shape_5.setTransform(-5.525,3.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AghBNQgOgGgKgLQgKgMgFgPQgFgPAAgSQAAgQAFgQQAFgPAKgLQAKgMAOgGQAPgHASAAQATAAAOAHQAPAGAKAMQAKALAFAPQAFAQAAAQQAAASgFAPQgFAPgKAMQgKALgPAGQgOAHgTAAQgSAAgPgHgAgSg3QgKAEgGAHQgHAIgEALQgEAMAAANQAAAPAEALQAEALAHAIQAGAIAKAEQAIAEAKAAQAKAAAKgEQAJgEAHgIQAGgIAEgLQAEgLAAgPQAAgNgEgMQgEgLgGgIQgHgHgJgEQgKgFgKAAQgKAAgIAFg");
	this.shape_6.setTransform(-21.85,3.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgxBwIgJgCIAAgZIAIADIAHABQAIAAAFgEQAGgEACgHIALgbIg/ieIAdAAIAvCCIAAAAIAtiCIAcAAIhGC1IgIATQgFAJgFAFQgFAFgHACQgGACgJAAg");
	this.shape_7.setTransform(-37.35,6.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgMBvIAAjdIAZAAIAADdg");
	this.shape_8.setTransform(-54.8,0.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgMBvIAAjdIAZAAIAADdg");
	this.shape_9.setTransform(-60.5,0.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAoBOQgGgGAAgNQgLANgOAGQgOAGgQAAQgLAAgKgDQgKgCgHgGQgHgFgEgIQgEgJgBgMQABgOAEgIQAFgJAIgFQAHgFAKgDIAUgEIAUgEIAQgDQAIgCAFgEQAEgDAAgIQAAgJgDgFQgEgFgEgDQgGgDgGgBIgMgBQgRAAgLAHQgLAGgBASIgaAAQAAgPAGgKQAFgLAKgGQAJgGAMgDQAMgDANAAIAWACQAKABAJAFQAIAFAFAJQAGAIAAAOIAABRIABAOQABAEAHAAIAIgBIAAAVQgIAEgLAAQgLAAgGgGgAAUADIgRADIgRACQgJACgHADQgIADgEAFQgEAGgBAKQABAGACAFQADAEAEADQAEADAGABIAMABQANAAAIgDQAJgEAGgFQAGgFADgHQACgGAAgGIAAgaQgEADgIACg");
	this.shape_10.setTransform(-70.75,3.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_allYouWant, new cjs.Rectangle(-81.4,-20,162.8,40.1), null);


(lib.shaq_02 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.shaq_img_02();
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shaq_02, new cjs.Rectangle(-150,-125,300,250), null);


(lib.shaq_01 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.shaq_img_01();
	this.instance.setTransform(-139,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shaq_01, new cjs.Rectangle(-139,-125,278,250), null);


(lib.printer_02_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.printer_02();
	this.instance.setTransform(-73.5,-103.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.printer_02_1, new cjs.Rectangle(-73.5,-103.5,147,207), null);


(lib.printer_01_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.printer_01();
	this.instance.setTransform(-105,-81.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.printer_01_1, new cjs.Rectangle(-105,-81.5,210,163), null);


(lib.print_colors = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.paintColors();
	this.instance.setTransform(-283.5,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.print_colors, new cjs.Rectangle(-283.5,-125,567,250), null);


(lib.print_color_noColor = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AhHByIAAjdIA7AAIAAApIAAAAQAFgKAGgJQAHgJAKgGQAJgHALgDQALgDALAAIANACIAAA5IgKgCIgLAAQgRgBgMAGQgMAGgGAJQgGAKgEANQgDANAAAOIAABkg");
	this.shape.setTransform(115.45,4.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgvBtQgUgIgQgQQgOgPgJgWQgIgVAAgbQAAgZAIgWQAJgWAOgPQAQgPAUgJQAWgIAZAAQAaAAAVAIQAWAJAOAPQAPAPAJAWQAIAWAAAZQAAAbgIAVQgJAWgPAPQgOAQgWAIQgVAIgaAAQgZAAgWgIgAgZhAQgKAGgHAKQgGAKgDANQgCANAAAMQAAAOACAMQADANAGAKQAHAKAKAGQAKAGAPAAQAPAAALgGQALgGAFgKQAHgKACgNQADgMAAgOQAAgMgDgNQgCgNgHgKQgFgKgLgGQgLgGgPAAQgPAAgKAGg");
	this.shape_1.setTransform(94.25,5.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdCZIAAkyIA7AAIAAEyg");
	this.shape_2.setTransform(77,0.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgvBtQgUgIgQgQQgPgPgIgWQgIgVAAgbQAAgZAIgWQAIgWAPgPQAQgPAUgJQAWgIAZAAQAaAAAVAIQAWAJAPAPQAOAPAJAWQAIAWAAAZQAAAbgIAVQgJAWgOAPQgPAQgWAIQgVAIgaAAQgZAAgWgIgAgZhAQgLAGgFAKQgHAKgCANQgDANAAAMQAAAOADAMQACANAHAKQAFAKALAGQAKAGAPAAQAPAAALgGQALgGAFgKQAGgKADgNQADgMAAgOQAAgMgDgNQgDgNgGgKQgFgKgLgGQgLgGgPAAQgPAAgKAGg");
	this.shape_3.setTransform(59.75,5.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgrBtQgUgJgPgPQgOgPgIgVQgJgVABgZQAAgYAHgXQAHgWAPgQQAOgQAVgJQAWgJAaAAQATAAATAFQASAFAOALQAPAKAJAQQAJAQABAVIg8AAQgFgmgoAAQgNAAgKAHQgKAGgGALQgGAKgDANQgCANAAALQAAAMACANQADAMAGAKQAFAKAKAHQAKAGANAAQAWAAAMgMQAMgMADgVIA6AAQgFAsgdAYQgcAXgtAAQgXAAgWgIg");
	this.shape_4.setTransform(35.95,5.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AArByIAAh8QAAgcgJgOQgIgNgWAAQgYAAgLAPQgMAOAAAjIAABzIg8AAIAAjdIA6AAIAAAeIABAAQAMgTASgJQARgIAUAAQAYAAAQAGQAQAHAJAMQAJALADARQAEARAAAVIAACIg");
	this.shape_5.setTransform(1.525,4.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgdCZIAAjdIA7AAIAADdgAgdhmIAAgzIA7AAIAAAzg");
	this.shape_6.setTransform(-15.35,0.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAICPQgLgBgJgGQgKgGgGgKQgFgKgBgRIAAiCIglAAIAAgpIAlAAIAAhDIA8AAIAABDIAtAAIAAApIgtAAIAABtQABAQAFAEQAFAGAQAAIAJgBIAJAAIAAAuIgRACIgTAAg");
	this.shape_7.setTransform(-37.75,1.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AArByIAAh8QAAgcgJgOQgIgNgWAAQgYAAgLAPQgMAOAAAjIAABzIg8AAIAAjdIA6AAIAAAeIABAAQAMgTASgJQARgIAUAAQAYAAAQAGQAQAHAJAMQAJALADARQAEARAAAVIAACIg");
	this.shape_8.setTransform(-56.425,4.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgdCZIAAjdIA7AAIAADdgAgdhmIAAgzIA7AAIAAAzg");
	this.shape_9.setTransform(-73.3,0.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhHByIAAjdIA6AAIAAApIABAAQAEgKAIgJQAGgJAKgGQAJgHALgDQAKgDAMAAIAOACIAAA5IgLgCIgMAAQgQgBgMAGQgLAGgIAJQgFAKgEANQgDANAAAOIAABkg");
	this.shape_10.setTransform(-84.65,4.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ah5CZIAAkyICJAAQAdABAUAIQAVAJAMANQANAOAFASQAHARgBATQABATgHARQgFASgNANQgMAOgVAIQgUAJgdAAIhGAAIAABtgAg2gIIA0AAIAWgBQALgDAIgFQAIgFAFgIQAFgJAAgPQAAgPgFgJQgFgIgIgFQgIgGgLgCIgWgBIg0AAg");
	this.shape_11.setTransform(-106.2,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.print_color_noColor, new cjs.Rectangle(-123.4,-27.6,246.9,55.3), null);


(lib.panel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#272626").s().p("Al4O7QgFgCgDgCQgCgCgBgEIgBgJIAAgCIAOAAIAAACQAAAEADADQACADAEAAQAEAAACgDQACgCAAgDQAAgBAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAIgFgDIgLgEQgHgCgEgEQgDgFAAgHIABgHQACgEADgDQACgCAFgBQAEgCAHAAQALAAAFAFQAGAEAAAJIAAADIgPAAQAAgFgCgCQgBgDgEAAQgDAAgDACQgCACAAADQAAABAAAAQAAABAAAAQAAABABAAQAAABAAABIAGACIAKAEQAIADADAEQADAEAAAIQAAAEgCAFQgBADgEACQgDADgEABQgEABgGABQgHgBgEgBgAnqO7QgDgCgBgDIgDgFIgBgHIABgIIADgGIAFgDIAHgDIAKgDQAEAAABgCQABgCAAgDQAAgDgBgDQgCgCgEAAQgEAAgCADQgCABAAAFIAAABIgPAAIAAgBQAAgGACgDQACgEADgDIAHgDIAJgBIAMABQAEACADACQACADABAEIABAIIABAoIABAGIgQAAIgCgGQgDAEgEACQgDABgGABQgFgBgDgBgAnVOdIgEABQgFABgCADQgCACAAAFQAAADABADQACADADAAIAEgBIADgCIACgDIABgEIAAgOgAo/O6QgFgEgDgEQgCgGgBgGIAAgMIABgMQABgHACgEQADgEAFgDQAFgDAJAAQAHAAAEACQAFACADAEQACAFABAGIABAOIAAADIghAAIABALIABAFIADADQAAAAABABQAAAAAAAAQABAAABAAQAAABABAAQAEAAACgEQACgCAAgHIAPAAQAAAMgGAFQgFAHgMAAQgJAAgFgDgAo1OFIgDADIgBAFIgBAEIAAACIARAAIAAgGIgBgFIgDgDIgEgBIgEABgAp/O1QgFgJAAgSQAAgSAFgHQAFgIAKAAQAFAAADACQADACADADIAAAAIAAgbIARAAIAABWIgQAAIAAgHQgDAFgEACQgDACgFAAQgKAAgFgIgApyOLQgBAFAAAKQAAAMABAFQACAFAFAAQAGAAACgFQABgFAAgMQAAgKgBgFQgCgGgGABQgFgBgCAGgArwO7QgFgCgDgFQgDgEgBgGIgBgQIABgOQABgGADgFQADgEAFgCQAFgCAHAAQAHgBAFADQAFACADAEQADAFABAGQACAGAAAIQAAAJgCAHQgBAGgDAEQgDAEgFADQgFACgHAAQgHAAgFgCgArpOGQgCABAAADIgCAHIAAATIACAHQAAADACABQACADADAAQAFAAACgGQACgFAAgNQAAgLgCgGQgCgFgFAAQgDAAgCACgAtmO6QgFgEgCgEQgDgGAAgGIgBgMIABgMQABgHADgEQADgEAFgDQAFgDAIAAQAHAAAFACQAEACADAEQADAFABAGIABAOIAAADIghAAIAAALIACAFIACADQABAAAAABQAAAAABAAQAAAAABAAQABABAAAAQAEAAACgEQACgCABgHIAPAAQgBAMgFAFQgGAHgMAAQgJAAgFgDgAtcOFIgCADIgCAFIAAAEIAAACIARAAIgBgGIgBgFIgCgDIgFgBIgEABgAvVO7QgFgCgDgCQgCgCgBgEIgBgJIAAgCIAOAAIAAACQAAAEADADQACADAEAAQAEAAACgDQACgCAAgDQAAgBAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAIgFgDIgLgEQgHgCgEgEQgDgFAAgHIABgHQACgEADgDQACgCAFgBQAEgCAHAAQALAAAFAFQAGAEAAAJIAAADIgPAAQAAgFgCgCQgBgDgEAAQgDAAgDACQgCACAAADQAAABAAAAQAAABAAAAQAAABABAAQAAABAAABIAGACIAKAEQAIADADAEQADAEAAAIQAAAEgCAFQgBADgEACQgDADgEABQgEABgGABQgHgBgEgBgAwDO7QgDgCgDgFIAAAHIgQAAIAAhWIAQAAIAAAbIABAAQACgDADgCQAEgCAEAAQALAAAEAIQAFAHAAASQAAASgFAJQgEAIgLAAQgFAAgDgCgAwHOLQgCAFAAAKQAAAMACAFQACAFAFAAQAFAAACgFQACgFAAgMQAAgKgCgFQgCgGgFABQgFgBgCAGgAxHO6QgFgEgCgEQgDgGAAgGIgBgMIABgMQABgHADgEQADgEAFgDQAFgDAIAAQAHAAAFACQAEACADAEQADAFABAGIABAOIAAADIghAAIAAALIACAFIACADQABAAAAABQAAAAABAAQAAAAABAAQABABAAAAQAEAAACgEQACgCABgHIAPAAQgBAMgFAFQgGAHgMAAQgJAAgFgDgAw9OFIgCADIgCAFIAAAEIAAACIARAAIgBgGIgBgFIgCgDIgFgBIgEABgAoHO7QgDgBgBgCIgDgFIAAgIIAAglIgJAAIAAgLIAJAAIAAgTIAQAAIAAATIAKAAIAAALIgKAAIAAAjQAAAEACABQAAAAAAABQABAAAAAAQABAAABAAQAAAAABAAIAEAAIAAAMIgLABIgIgBgAuFO7QgDgBgCgCIgCgFIgBgIIAAglIgIAAIAAgLIAIAAIAAgTIARAAIAAATIAKAAIAAALIgKAAIAAAjQAAAEABABQABAAAAABQAAAAABAAQAAAAABAAQABAAABAAIAEAAIAAAMIgLABIgIgBgAmcO7IAAhWIAQAAIAABWgAm3O7IAAhAIAQAAIAABAgArDO7IAAhAIAQAAIAAAIQACgEAEgDQAEgDAFAAIADAAIAAAQIgDgBIgCAAIgFABIgEACIgDAEIgBAFIAAAngAsaO7IAAg1IgIAAIAAgLIAIAAIAAgIQAAgEACgDIADgFQACgCADgBIAIgBIAJABIAAAMIgCgBIgCAAQgDAAgCACQAAAAAAABQgBAAAAAAQAAABAAABQAAAAAAABIAAAGIAKAAIAAALIgKAAIAAA1gAurO7IAAhAIARAAIAABAgAx0O7IgJguIAAAAIgIAuIgTAAIgOhAIAQAAIAIAuIAIguIASAAIAJAuIAIguIAPAAIgOBAgAk0OEQADgBABgDQACgDAAgDIAAgCIgGAAIAAgTIAQAAIAAAQIgBAJIgCAHIgFAEQgDACgFABgAlMOEQAEgBABgDQACgDAAgDIAAgCIgHAAIAAgTIAQAAIAAAQIAAAJIgDAHIgFAEQgDACgFABgAm3NzIAAgPIAQAAIAAAPgAurNzIAAgPIARAAIAAAPgAxBM0QgFgEAAgJIAQAAQAAAEACACIADABIADAAQAFAAACgDQACgDAAgFIAAgIQgDADgEACQgDACgEABQgKAAgFgIQgFgIAAgSIABgLQAAgFACgFQACgFAEgDQAFgDAGAAIAHACQAEACADAEIAAgGIAQAAIAAA9QAAAMgHAHQgGAFgOAAQgLABgGgFgAwyLuIgDAEIgBAIIgBALIABAGIABAGQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAIADgDIABgHIABgHQAAgLgCgGQgCgEgFAAIgEAAgAo9M3IAAhUIAQAAIAAAGQADgEAEgCQADgCAFAAQAKAAAFAIQAFAHAAASQAAATgFAHQgFAJgKgBQgFAAgDgBQgDgCgDgEIAAAAIAAAagAorLzQgBAFAAAKQAAAMABAFQACAFAGAAQAFAAACgFQABgFAAgMQAAgKgBgFQgCgFgFAAQgGAAgCAFgAskM3IAAgLIAFAAQAEAAACgCQACgDAAgEIgShAIASAAIAJAsIAJgsIAQAAIgPA7IgEAOQgCAEgDAEQgDACgDABIgKAAgAK2MjQgEgCgDgCQgDgCgBgEIgBgJIAAgCIAPAAIAAACQAAAEACADQACACAFABQADAAADgCQACgDAAgDQAAgBAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAIgEgDIgMgEQgHgCgDgEQgEgFAAgHIACgHQABgEADgDQADgCAEgBQAFgCAGAAQAMAAAFAFQAFAEAAAJIAAADIgPAAQAAgFgBgDQgCgCgEAAQgDAAgCACQgDACAAADQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIAGADIAJAEQAIACAEAFQADAEAAAIQAAAEgCAFQgCADgDACQgDADgFABQgEABgFAAQgHAAgFgBgAJCMiQgFgEgCgEQgDgGAAgFIgBgNIABgMQABgHADgEQADgEAFgDQAFgDAIAAQAHAAAFACQAEACADAEQADAFABAGIABANIAAAEIghAAIAAALIACAFIACADQABAAAAABQAAAAABAAQAAAAABAAQABABAAAAQAEAAACgEQACgCABgHIAPAAQgBAMgFAFQgGAHgMgBQgJAAgFgCgAJMLtIgCADIgCAFIAAAEIAAACIARAAIgBgGIgBgFIgCgDIgFgBIgEABgAHeMgQgFgEAAgJIAAgwIARAAIAAAsQAAAFACACQABACAEAAQAJAAAAgLIAAgqIAQAAIAABAIgQAAIAAgIQgDAFgEADQgEABgFAAQgIAAgEgEgAGNMjQgFgBgDgFQgDgEgCgGQgBgHAAgKQAAgJACgHQACgHADgDQAEgEAEgBQAFgCAGAAQAMAAAFAGQAGAHAAALIgQAAIAAgEIgBgEIgCgDQgBAAAAgBQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAIgDAEIgBAHIAAAUIABAHIADAEQAAAAABABQAAAAABAAQAAAAABAAQABABAAAAQAFgBABgDQACgEAAgIIAQAAQAAANgFAGQgGAIgNgBQgHAAgEgBgAFPMjQgDgBgBgEIgDgFIgBgHIABgIIADgGIAFgDIAHgDIAKgDQAEgBABgBQABgCAAgDQAAgDgBgDQgCgCgEAAQgEAAgCACQgCACAAAFIAAABIgPAAIAAgBQAAgGACgDQACgEADgDIAHgDIAJgBIAMABQAEABADADQACADABAEIABAIIABAoIABAGIgQAAIgCgHQgDAFgEACQgDABgGAAQgFAAgDgBgAFkMFIgEABQgFABgCACQgCADAAAFQAAADABADQACACADABIAEgBIADgCIACgDIABgEIAAgOgADxMgQgEgEAAgJIAAgwIAQAAIAAAsQAAAFACACQACACADAAQAJAAAAgLIAAgqIARAAIAABAIgQAAIAAgIQgDAFgEADQgEABgGAAQgIAAgEgEgACAMjQgDgBgBgEIgDgFIgBgHIABgIIADgGIAFgDIAHgDIAKgDQAEgBABgBQABgCAAgDQAAgDgBgDQgCgCgEAAQgEAAgCACQgCACAAAFIAAABIgPAAIAAgBQAAgGACgDQACgEADgDIAHgDIAJgBIAMABQAEABADADQACADABAEIABAIIABAoIABAGIgQAAIgCgHQgDAFgEACQgDABgGAAQgFAAgDgBgACVMFIgEABQgFABgCACQgCADAAAFQAAADABADQACACADABIAEgBIADgCIACgDIABgEIAAgOgAgmMiQgFgEgDgEQgCgGgBgFIAAgNIABgMQABgHACgEQADgEAFgDQAFgDAJAAQAHAAAEACQAFACADAEQACAFABAGIABANIAAAEIghAAIABALIABAFIADADQAAAAABABQAAAAAAAAQABAAABAAQAAABABAAQAEAAACgEQACgCAAgHIAPAAQAAAMgGAFQgFAHgMgBQgJAAgFgCgAgcLtIgDADIgBAFIgBAEIAAACIARAAIAAgGIgBgFIgDgDIgEgBIgEABgAhcMiQgFgEgDgEQgCgGgBgFIAAgNIABgMQABgHACgEQADgEAFgDQAFgDAJAAQAHAAAEACQAFACADAEQACAFABAGIABANIAAAEIghAAIABALIABAFIADADQAAAAABABQAAAAAAAAQABAAABAAQAAABABAAQAEAAACgEQACgCAAgHIAPAAQAAAMgGAFQgFAHgMgBQgJAAgFgCgAhSLtIgDADIgBAFIgBAEIAAACIARAAIAAgGIgBgFIgDgDIgEgBIgEABgAieMeQgGgHAAgMIAAgDIARAAIAAACIABAGIABAEIAEADIAGABQAEAAADgDQADgCAAgGIgBgEIgCgFIgFgDIgHgCIgKgFQgFgCgCgDQgDgDgCgEIgBgJQAAgNAHgGQAHgGANgBQAFABAFABQAFABAEADQADADACAEQACAEAAAHIAAACIgQAAQAAgGgDgDQgCgDgFAAIgFAAIgDADIgBACIgBAFQAAAEACACQACACAFADIAOAGIAIAEIAFAGIACAFIABAHQAAAOgIAGQgIAGgOAAQgPAAgGgGgAkkMjQgEgBgDgFQgEgEgBgGQgCgHAAgKQAAgJACgHQACgHAEgDQADgEAFgBQAFgCAGAAQALAAAGAGQAGAHAAALIgQAAIAAgEIgCgEIgCgDQAAAAgBgBQAAAAAAAAQgBAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAIgDAEIgCAHIAAAUIACAHIACAEQABAAAAABQABAAAAAAQABAAABAAQAAABABAAQAEgBACgDQACgEAAgIIAQAAQAAANgGAGQgGAIgNgBQgGAAgFgBgAllMgQgFgEAAgJIAAgwIARAAIAAAsQAAAFACACQABACAEAAQAJAAAAgLIAAgqIAQAAIAABAIgQAAIAAgIQgDAFgEADQgEABgFAAQgIAAgEgEgAmhMcQgFgHAAgTQAAgSAFgHQAFgIAKAAQAFAAADACQADACADADIAAAAIAAgbIARAAIAABWIgQAAIAAgHQgDAFgEACQgDABgFAAQgKABgFgJgAmULzQgBAFAAAKQAAAMABAFQACAFAFAAQAGAAACgFQABgFAAgMQAAgKgBgFQgCgFgGAAQgFAAgCAFgAnRMjQgFgCgDgFQgDgEgBgGIgBgQIABgOQABgGADgFQADgEAFgCQAFgCAHAAQAHAAAFACQAFACADAEQADAFABAGQACAGAAAIQAAAJgCAHQgBAGgDAEQgDAEgFADQgFABgHAAQgHAAgFgBgAnKLuQgCABAAADIgCAHIAAATIACAHQAAADACACQACACADAAQAFgBACgFQACgFAAgNQAAgLgCgGQgCgFgFAAQgDAAgCACgAq0MgQgEgEAAgJIAAgwIAQAAIAAAsQAAAFACACQACACADAAQAJAAAAgLIAAgqIARAAIAABAIgQAAIAAgIQgDAFgEADQgEABgGAAQgIAAgEgEgArlMjQgFgCgDgFQgDgEgBgGIgBgQIABgOQABgGADgFQADgEAFgCQAFgCAHAAQAHAAAFACQAFACADAEQADAFABAGQACAGAAAIQAAAJgCAHQgBAGgDAEQgDAEgFADQgFABgHAAQgHAAgFgBgAreLuQgCABAAADIgCAHIAAATIACAHQAAADACACQACACADAAQAFgBACgFQACgFAAgNQAAgLgCgGQgCgFgFAAQgDAAgCACgAuSMiQgFgEgDgEQgCgGgBgFIAAgNIABgMQABgHACgEQADgEAFgDQAFgDAJAAQAHAAAEACQAFACADAEQACAFABAGIABANIAAAEIghAAIABALIABAFIADADQAAAAABABQAAAAABAAQAAAAABAAQAAABABAAQAEAAACgEQACgCAAgHIAPAAQAAAMgGAFQgFAHgMgBQgJAAgFgCgAuILtIgDADIgBAFIgBAEIAAACIARAAIAAgGIgBgFIgDgDIgEgBIgEABgAvnMjQgEgCgDgCQgDgCgBgEIgBgJIAAgCIAPAAIAAACQAAAEACADQACACAFABQADAAADgCQACgDAAgDQAAgBAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAIgEgDIgMgEQgHgCgDgEQgEgFAAgHIACgHQABgEADgDQADgCAEgBQAFgCAGAAQAMAAAFAFQAFAEAAAJIAAADIgPAAQAAgFgBgDQgCgCgEAAQgDAAgCACQgDACAAADQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIAGADIAJAEQAIACAEAFQADAEAAAIQAAAEgCAFQgCADgDACQgDADgFABQgEABgFAAQgHAAgFgBgAxzMiQgFgEgDgEQgCgGgBgFIAAgNIABgMQABgHACgEQADgEAFgDQAFgDAJAAQAHAAAEACQAFACADAEQACAFABAGIABANIAAAEIghAAIABALIABAFIADADQAAAAABABQAAAAABAAQAAAAABAAQAAABABAAQAEAAACgEQACgCAAgHIAPAAQAAAMgGAFQgFAHgMgBQgJAAgFgCgAxpLtIgDADIgBAFIgBAEIAAACIARAAIAAgGIgBgFIgDgDIgEgBIgEABgAHCMjQgDgBgBgCIgDgFIAAgIIAAglIgJAAIAAgLIAJAAIAAgTIAQAAIAAATIAKAAIAAALIgKAAIAAAjQAAAEACABQAAAAAAABQABAAAAAAQABAAABAAQAAABABAAIAEAAIAAALIgLABIgIgBgAjuMjQgDgBgCgCIgCgFIgBgIIAAglIgIAAIAAgLIAIAAIAAgTIARAAIAAATIAKAAIAAALIgKAAIAAAjQAAAEABABQAAAAABABQAAAAABAAQAAAAABAAQABABABAAIAEAAIAAALIgLABIgIgBgAuyMjQgDgBgBgCIgDgFIAAgIIAAglIgJAAIAAgLIAJAAIAAgTIAQAAIAAATIAKAAIAAALIgKAAIAAAjQAAAEACABQAAAAAAABQABAAAAAAQABAAABAAQAAABABAAIAEAAIAAALIgLABIgIgBgAJwMjIAAhAIAQAAIAAAIQACgEAEgDQAEgDAFAAIADAAIAAAQIgDgBIgCAAIgFABIgEACIgDAEIgBAFIAAAngAIUMjIAAhAIAQAAIAAAIQACgEAEgDQAEgDAFAAIADAAIAAAQIgDgBIgCAAIgFABIgEACIgDAEIgBAFIAAAngAErMjIAAg1IgJAAIAAgLIAJAAIAAgIQAAgEABgDIADgFQADgCADgBIAHgBIAJABIAAAMIgCgBIgBAAQgEAAgBACQgBAAAAABQAAAAAAAAQgBABAAABQAAAAAAABIAAAGIAKAAIAAALIgKAAIAAA1gADTMjIAAgsQAAgFgCgDQgCgBgDAAQgJAAAAAKIAAArIgRAAIAAhAIAQAAIAAAHQADgFAEgCQAEgCAGAAQAIAAAEAEQAEAFAAAJIAAAwgABhMjIAAgtQAAgEgCgDQgBgBgEAAQgEgBgCADQgCADAAAFIAAArIgRAAIAAgtQAAgEgCgDQgBgBgEAAQgDgBgDADQgCADAAAFIAAArIgRAAIAAhAIAQAAIAAAGQADgEAEgCQAEgCAGAAQAFAAAEADQAEACACAFQACgFAEgCQAEgDAGAAQAIAAAEAFQAEAFAAAJIAAAvgAjWMjIAAgSIAQAAIAAASgAoCMjIAAhAIAQAAIAAAIQACgEAEgDQAEgDAFAAIADAAIAAAQIgDgBIgCAAIgFABIgEACIgDAEIgBAFIAAAngAp+MjIAAhAIAQAAIAAAIQADgEADgDQAEgDAFAAIADAAIAAAQIgCgBIgDAAIgEABIgEACIgDAEIgBAFIAAAngAtlMjIAAhAIAQAAIAAAIQADgEADgDQAEgDAFAAIADAAIAAAQIgCgBIgDAAIgEABIgEACIgDAEIgBAFIAAAngAwLMjIAAhAIARAAIAABAgAyiMjIAAhAIAQAAIAAAIQADgEADgDQAEgDAFAAIADAAIAAAQIgCgBIgDAAIgEABIgEACIgDAEIgBAFIAAAngAKYLsQADgBACgDQABgDAAgDIAAgCIgGAAIAAgTIAQAAIAAAQIgBAJIgCAHIgFAEQgDACgFABgAwLLbIAAgPIARAAIAAAPgAxBKcQgFgEAAgJIAQAAQAAAEACABIADABIADABQAFAAACgDQACgDAAgFIAAgJQgDAEgEACQgDACgEABQgKgBgFgHQgFgHAAgTIABgLQAAgGACgEQACgFAEgDQAFgDAGAAIAHACQAEABADAGIAAgHIAQAAIAAA9QAAAMgHAHQgGAFgOAAQgLABgGgFgAwyJWIgDAFIgBAHIgBALIABAGIABAGQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAIADgDIABgHIABgHQAAgMgCgEQgCgGgFAAIgEABgAIXKfIAAgLIAFAAQAEAAACgCQACgDAAgEIgShAIASAAIAJAsIAJgsIAQAAIgPA7IgEAOQgCAFgDADQgDACgDABIgKAAgAC/KfIAAhUIAQAAIAAAHQADgGAEgBQADgCAFAAQAKAAAFAIQAFAIAAARQAAATgFAHQgFAJgKgBQgFAAgDgBQgDgCgDgEIAAAAIAAAagADRJbQgBAFAAAKQAAAMABAEQACAGAGAAQAFAAACgGQABgEAAgMQAAgKgBgFQgCgFgFgBQgGABgCAFgAhmKfIAAhUIAQAAIAAAHQADgGADgBQADgCAFAAQALAAAEAIQAFAIAAARQAAATgFAHQgEAJgLgBQgEAAgEgBQgDgCgCgEIgBAAIAAAagAhUJbQgCAFAAAKQAAAMACAEQACAGAFAAQAFAAACgGQACgEAAgMQAAgKgCgFQgCgFgFgBQgFABgCAFgAmrKfIAAhUIAQAAIAAAHQADgGAEgBQADgCAFAAQAKAAAFAIQAFAIAAARQAAATgFAHQgFAJgKgBQgFAAgDgBQgDgCgDgEIAAAAIAAAagAmZJbQgBAFAAAKQAAAMABAEQACAGAGAAQAFAAACgGQABgEAAgMQAAgKgBgFQgCgFgFgBQgGABgCAFgAHiKWQADAAACgDQABgDAAgEIAAgBIgGAAIAAgSIAQAAIAAAPIgBAJQAAAEgCACIgFAFQgDACgFAAgAN1KLQgEgCgDgCQgDgCgBgEIgBgJIAAgCIAPAAIAAACQAAAEACADQACACAFABQADAAADgCQACgCAAgEQAAgBAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAIgEgDIgMgEQgHgCgDgFQgEgEAAgHIACgHQABgEADgDQADgCAEgBQAFgCAGAAQAMAAAFAEQAFAFAAAJIAAADIgPAAQAAgGgBgCQgCgCgEAAQgDAAgCACQgDACAAADQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIAGADIAJAEQAIADAEAEQADAEAAAIQAAAFgCAEQgCADgDADQgDACgFABQgEACgFgBQgHABgFgCgAM2KIQgFgEAAgKIAAgvIARAAIAAAsQAAAFACACQABACAEAAQAJAAAAgKIAAgrIAQAAIAABAIgQAAIAAgIQgDAFgEADQgEABgFAAQgIAAgEgEgAKHKIQgEgEAAgKIAAgvIAQAAIAAAsQAAAFACACQACACADAAQAJAAAAgKIAAgrIARAAIAABAIgQAAIAAgIQgDAFgEADQgEABgGAAQgIAAgEgEgAJWKLQgFgCgDgFQgDgEgBgGIgBgQIABgOQABgGADgEQADgFAFgCQAFgCAHAAQAHAAAFACQAFACADAEQADAEABAHQACAGAAAIQAAAJgCAHQgBAGgDAEQgDAEgFADQgFABgHAAQgHAAgFgBgAJdJVQgCACAAAEIgCAGIAAATIACAHQAAADACACQACACADAAQAFgBACgFQACgFAAgNQAAgLgCgGQgCgFgFAAQgDAAgCABgAF6KLQgFgCgDgFQgDgEgBgGIgBgQIABgOQABgGADgEQADgFAFgCQAFgCAHAAQAHAAAFACQAFACADAEQADAEABAHQACAGAAAIQAAAJgCAHQgBAGgDAEQgDAEgFADQgFABgHAAQgHAAgFgBgAGBJVQgCACAAAEIgCAGIAAATIACAHQAAADACACQACACADAAQAFgBACgFQACgFAAgNQAAgLgCgGQgCgFgFAAQgDAAgCABgAEAKLQgDgBgCgEIgDgFIAAgHIABgIIADgFIAFgEIAHgDIAJgCQAEgCABgBQACgCAAgDQAAgDgCgDQgCgCgEAAQgEAAgCACQgBACAAAFIAAABIgPAAIAAgBQAAgGABgDQACgFADgCQADgCAFgBIAIgBIAMABQAFABACADQADADABAEIABAIIAAAoIACAGIgQAAIgCgHQgDAGgEABQgEACgGgBQgEABgDgCgAEUJtIgDABQgFABgCACQgDADAAAFQAAADACADQABACAEABIADgBIADgCIADgDIABgEIAAgOgAB6KLQgFgBgDgFQgDgEgCgGQgBgHAAgKQAAgJACgHQACgGADgEQAEgEAEgBQAFgCAGAAQAMAAAFAGQAGAHAAALIgQAAIAAgEIgBgEIgCgDQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAIgDAEIgBAHIAAAUIABAHIADAEQAAAAABABQAAAAABAAQAAAAABAAQABABAAAAQAFgBABgDQACgEAAgIIAQAAQAAANgFAGQgGAIgNgBQgHABgEgCgAgmKLQgDgBgBgEIgDgFIgBgHIABgIIADgFIAFgEIAHgDIAKgCQAEgCABgBQABgCAAgDQAAgDgBgDQgCgCgEAAQgEAAgCACQgCACAAAFIAAABIgPAAIAAgBQAAgGACgDQACgFADgCQADgCAEgBIAJgBIAMABQAEABADADQACADAAAEIABAIIABAoIABAGIgPAAIgCgHQgDAGgEABQgDACgGgBQgFABgDgCgAgRJtIgEABQgFABgCACQgCADAAAFQAAADABADQACACADABIAEgBIADgCIACgDIABgEIAAgOgAiuKLQgFgCgDgFQgDgEgBgGIgBgQIABgOQABgGADgEQADgFAFgCQAFgCAHAAQAHAAAFACQAFACADAEQADAEABAHQACAGAAAIQAAAJgCAHQgBAGgDAEQgDAEgFADQgFABgHAAQgHAAgFgBgAinJVQgCACAAAEIgCAGIAAATIACAHQAAADACACQACACADAAQAFgBACgFQACgFAAgNQAAgLgCgGQgCgFgFAAQgDAAgCABgAk/KLQgFgCgDgFQgDgEgBgGIgBgQIABgOQABgGADgEQADgFAFgCQAFgCAHAAQAHAAAFACQAFACADAEQADAEABAHQACAGAAAIQAAAJgCAHQgBAGgDAEQgDAEgFADQgFABgHAAQgHAAgFgBgAk4JVQgCACAAAEIgCAGIAAATIACAHQAAADACACQACACADAAQAFgBACgFQACgFAAgNQAAgLgCgGQgCgFgFAAQgDAAgCABgAoZKLQgFgCgDgFQgDgEgBgGIgBgQIABgOQACgGADgEQADgFAFgCQAEgCAIAAQAHAAAFACQAFACADAEQADAEABAHQABAGAAAIQAAAJgBAHQgCAGgDAEQgDAEgFADQgEABgHAAQgIAAgFgBgAoRJVQgCACgBAEIgBAGIAAATIABAHQABADACACQACACADAAQAFgBABgFQACgFAAgNQAAgLgCgGQgBgFgFAAQgDAAgCABgAr1KLQgFgCgDgFQgDgEgBgGIgBgQIABgOQACgGADgEQADgFAFgCQAEgCAIAAQAHAAAFACQAFACADAEQADAEABAHQABAGAAAIQAAAJgBAHQgCAGgDAEQgDAEgFADQgEABgHAAQgIAAgFgBgArtJVQgCACgBAEIgBAGIAAATIABAHQABADACACQACACADAAQAFgBABgFQACgFAAgNQAAgLgCgGQgBgFgFAAQgDAAgCABgAtvKLQgDgBgBgEIgDgFIgBgHIABgIIADgFIAFgEIAHgDIAKgCQAEgCABgBQABgCAAgDQAAgDgBgDQgCgCgEAAQgEAAgCACQgCACAAAFIAAABIgPAAIAAgBQAAgGACgDQACgFADgCIAHgDIAJgBIAMABQAEABADADQACADABAEIABAIIABAoIABAGIgQAAIgCgHQgDAGgEABQgDACgGgBQgFABgDgCgAtaJtIgEABQgFABgCACQgCADAAAFQAAADABADQACACADABIAEgBIADgCIACgDIABgEIAAgOgAvnKLQgEgCgDgCQgDgCgBgEIgBgJIAAgCIAPAAIAAACQAAAEACADQACACAFABQADAAADgCQACgCAAgEQAAgBAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAIgEgDIgMgEQgHgCgDgFQgEgEAAgHIACgHQABgEADgDQADgCAEgBQAFgCAGAAQAMAAAFAEQAFAFAAAJIAAADIgPAAQAAgGgBgCQgCgCgEAAQgDAAgCACQgDACAAADQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIAGADIAJAEQAIADAEAEQADAEAAAIQAAAFgCAEQgCADgDADQgDACgFABQgEACgFgBQgHABgFgCgAxzKKQgFgDgDgFQgCgFgBgGIAAgNIABgMQABgGACgFQADgEAFgDQAFgDAJAAQAHAAAEACQAFADADAEQACAEABAGIABANIAAAEIghAAIABALIABAFIADADQAAAAABABQAAAAABAAQAAAAABAAQAAABABAAQAEAAACgDQACgEAAgFIAPAAQAAAKgGAGQgFAHgMgBQgJAAgFgCgAxpJVIgDADIgBAFIgBAEIAAADIARAAIAAgHIgBgFIgDgDIgEgBIgEABgAOqKLQgDgBgBgCIgDgFIAAgJIAAglIgJAAIAAgKIAJAAIAAgTIAQAAIAAATIAKAAIAAAKIgKAAIAAAkQAAADACACQAAAAAAABQABAAAAAAQABAAABAAQAAABABAAIAEAAIAAALIgLABIgIgBgAE9KLQgDgBgCgCIgCgFIgBgJIAAglIgIAAIAAgKIAIAAIAAgTIARAAIAAATIAKAAIAAAKIgKAAIAAAkQAAADABACQAAAAABABQAAAAABAAQAAAAABAAQABABABAAIAEAAIAAALIgLABIgIgBgAA8KLQgDgBgBgCIgDgFIAAgJIAAglIgIAAIAAAEIgCgBIgDAAIgEABIgEACIgDAEIgBAFIAAAnIgRAAIAAhAIAQAAIAAAIQADgEADgDQAEgDAFAAIADAAIAAACIAIAAIAAgTIAQAAIAAATIAKAAIAAAKIgKAAIAAAkQAAADACACQAAAAAAABQABAAAAAAQABAAABAAQAAABABAAIAEAAIAAALIgLABIgIgBgAsyKLQgDgBgBgCIgDgFIAAgJIAAglIgJAAIAAgKIAJAAIAAgTIAQAAIAAATIAKAAIAAAKIgKAAIAAAkQAAADACACQAAAAAAABQABAAAAAAQABAAABAAQAAABABAAIAEAAIAAALIgLABIgIgBgAuyKLQgDgBgBgCIgDgFIAAgJIAAglIgJAAIAAgKIAJAAIAAgTIAQAAIAAATIAKAAIAAAKIgKAAIAAAkQAAADACACQAAAAAAABQABAAAAAAQABAAABAAQAAABABAAIAEAAIAAALIgLABIgIgBgAMYKLIAAgtQAAgEgCgDQgBgCgEAAQgEABgCACQgCADAAAFIAAArIgRAAIAAgtQAAgEgCgDQgBgCgEAAQgDABgDACQgCADAAAFIAAArIgRAAIAAhAIAQAAIAAAGQADgEAEgCQAEgCAGAAQAFAAAEADQAEACACAFQACgFAEgCQAEgDAGAAQAIAAAEAEQAEAGAAAJIAAAvgAHHKLIAAgsQAAgFgCgDQgBgCgEAAQgJAAAAALIAAArIgQAAIAAhAIAQAAIAAAHQADgFAEgCQAEgCAFAAQAIAAAEAEQAFAEAAAKIAAAwgAFUKLIAAhAIARAAIAABAgAClKLIAAhAIAQAAIAABAgABUKLIAAhAIAQAAIAABAgAjTKLIAAgtQAAgEgBgDQgCgCgDAAQgEABgDACQgCADAAAFIAAArIgRAAIAAgtQAAgEgBgDQgCgCgDAAQgEABgCACQgDADAAAFIAAArIgQAAIAAhAIAQAAIAAAGQADgEAEgCQAEgCAFAAQAGAAAEADQAEACABAFQACgFAEgCQAFgDAGAAQAIAAAEAEQAEAGAAAJIAAAvgAlwKLIAAhAIAQAAIAAAIQACgEAEgDQAEgDAFAAIADAAIAAAQIgDgBIgCAAIgFABIgEACIgDAEIgBAFIAAAngAnsKLIAAhAIAQAAIAAAIQADgEADgDQAEgDAFAAIADAAIAAAQIgCgBIgDAAIgEABIgEACIgDAEIgBAFIAAAngApXKLIAAhWIAwAAIAAAOIgeAAIAAAUIAcAAIAAAPIgcAAIAAAlgAqMKLIAAgSIAQAAIAAASgAqnKLIAAgsQAAgFgCgDQgCgCgDAAQgJAAAAALIAAArIgRAAIAAhAIAQAAIAAAHQADgFAEgCQAEgCAGAAQAIAAAEAEQAEAEAAAKIAAAwgAsaKLIAAhAIAQAAIAABAgAubKLIAAhAIAQAAIAAAIQADgEADgDQAEgDAFAAIADAAIAAAQIgCgBIgDAAIgEABIgEACIgDAEIgBAFIAAAngAwLKLIAAhAIARAAIAABAgAyiKLIAAhAIAQAAIAAAIQADgEADgDQAEgDAFAAIADAAIAAAQIgCgBIgDAAIgEABIgEACIgDAEIgBAFIAAAngAFUJDIAAgPIARAAIAAAPgAClJDIAAgPIAQAAIAAAPgABUJDIAAgPIAQAAIAAAPgAsaJDIAAgPIAQAAIAAAPgAwLJDIAAgPIARAAIAAAPgAHlIHIAAgMIAFABQAEAAACgCQACgDAAgEIgRg9IAAAHIgKAAIAAAjQAAAEACACQAAAAAAABQABAAAAAAQABAAABAAQAAABABAAIAEAAIAAALIgLAAIgIgBQgDAAgBgCIgDgFIAAgJIAAglIgJAAIAAgKIAJAAIAAgTIAQAAIAAATIAbAAIAJAsIAJgsIAQAAIgPA8IgEAMQgCAFgDAEQgDACgDABIgKAAgAj6IHIAAgMIAFABQAEAAACgCQACgDAAgEIgShAIASAAIAJAsIAJgsIAQAAIgPA8IgEAMQgCAFgDAEQgDACgDABIgKAAgApYIHIAAhUIAQAAIAAAHQADgGAEgBQADgCAFAAQAKAAAFAIQAFAIAAARQAAATgFAHQgFAJgKgBQgFAAgDgCQgDgBgDgEIAAAAIAAAagApGHDQgBAFAAAKQAAAMABAEQACAGAGAAQAFAAACgGQABgEAAgMQAAgKgBgFQgCgFgFgBQgGABgCAFgAreIHIAAgMIAEABQAFAAACgCQACgDAAgEIgShAIARAAIAKAsIAIgsIARAAIgQA8IgEAMQgCAFgDAEQgCACgEABIgKAAgAFXHzQgDgCgCgCIgDgGIAAgHIABgIIADgFIAFgEIAHgDIAJgCQAEgBABgCQACgCAAgDQAAgDgCgDQgCgCgEAAQgEAAgCACQgBADAAAEIAAABIgPAAIAAgBQAAgGABgDQACgEADgDIAIgDIAIgBIAMABQAFABACADQADADABADIABAJIAAAoIACAGIgQAAIgCgHQgDAFgEACQgEACgGgBQgEABgDgCgAFrHVIgDABQgFABgCACQgDADAAAEQAAAEACADQABACAEAAIADAAIADgCIADgDIABgEIAAgOgADTHzQgDgCgCgCIgDgGIAAgHIABgIIADgFIAFgEIAHgDIAJgCQAEgBABgCQACgCAAgDQAAgDgCgDQgCgCgEAAQgEAAgCACQgBADAAAEIAAABIgPAAIAAgBQAAgGABgDQACgEADgDIAIgDIAIgBIAMABQAFABACADQADADABADIABAJIAAAoIACAGIgQAAIgCgHQgDAFgEACQgEACgGgBQgEABgDgCgADnHVIgDABQgFABgCACQgDADAAAEQAAAEACADQABACAEAAIADAAIADgCIADgDIABgEIAAgOgAAoHsQgFgHAAgTQAAgRAFgIQAFgIAKAAQAFAAADACQADABADAFIAAAAIAAgbIARAAIAABVIgQAAIAAgHQgDAEgEACQgDACgFAAQgKABgFgJgAA1HDQgBAFAAAKQAAAMABAEQACAGAFAAQAGAAACgGQABgEAAgMQAAgKgBgFQgCgFgGgBQgFABgCAFgAiKHzQgDgCgCgCIgDgGIAAgHIABgIIADgFIAFgEIAHgDIAJgCQAEgBABgCQACgCAAgDQAAgDgCgDQgCgCgEAAQgEAAgCACQgBADAAAEIAAABIgPAAIAAgBQAAgGABgDQACgEADgDIAIgDIAIgBIAMABQAFABACADQADADABADIABAJIAAAoIACAGIgQAAIgCgHQgDAFgEACQgEACgGgBQgEABgDgCgAh2HVIgDABQgFABgCACQgDADAAAEQAAAEACADQABACAEAAIADAAIADgCIADgDIABgEIAAgOgAi+HyQgFgEgCgFQgDgEAAgGIgBgNIABgNQABgFADgFQADgFAFgDQAFgCAIAAQAHAAAFACQAEADADAEQADAEABAGIABANIAAAEIghAAIAAALIACAFIACADQABAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQAEAAACgCQACgEABgFIAPAAQgBAKgFAHQgGAFgMAAQgJAAgFgCgAi0G9IgCADIgCAFIAAAEIAAADIARAAIgBgHIgBgFIgCgDIgFgBIgEABgAnfHyQgFgCgDgEQgDgEgBgHIgBgPIABgOQACgGADgEQADgFAFgCQAEgCAIAAQAHAAAFACQAFACADAEQADAEABAHQABAGAAAIQAAAJgBAGQgCAHgDAEQgDAEgFACQgEACgHAAQgIAAgFgCgAnXG9QgCACgBAEIgBAGIAAATIABAHQABADACACQACABADAAQAFAAABgFQACgFAAgNQAAgLgCgFQgBgGgFAAQgDAAgCABgAoUHzQgEgCgDgCQgDgDgBgDIgBgJIAAgCIAPAAIAAACQAAAEACADQACACAFAAQADAAADgBQACgDAAgEQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAIgEgDIgMgEQgHgCgDgFQgEgEAAgHIACgIQABgDADgDQADgCAEgBQAFgCAGAAQAMAAAFAEQAFAGAAAIIAAADIgPAAQAAgGgBgCQgCgCgEAAQgDAAgCACQgDACAAADQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIAGAEIAJADQAIADAEAEQADAEAAAHQAAAFgCAEQgCAEgDADQgDACgFABQgEACgFgBQgHABgFgCgAsCHyQgEgCgDgEIAAAHIgQAAIAAhVIARAAIAAAbIAAAAQADgFADgBQADgCAFAAQAKAAAFAIQAFAIAAARQAAATgFAHQgFAJgKgBQgFAAgDgCgAsHHDQgBAFAAAKQAAAMABAEQACAGAGAAQAFAAACgGQABgEAAgMQAAgKgBgFQgCgFgFgBQgGABgCAFgAtrHsQgFgHAAgTQAAgRAFgIQAFgIAKAAQAFAAADACQADABADAFIAAAAIAAgbIARAAIAABVIgQAAIAAgHQgDAEgEACQgDACgFAAQgKABgFgJgAteHDQgBAFAAAKQAAAMABAEQACAGAFAAQAGAAACgGQABgEAAgMQAAgKgBgFQgCgFgGgBQgFABgCAFgAucHyQgFgEgCgFQgDgEAAgGIgBgNIABgNQABgFADgFQADgFAFgDQAFgCAIAAQAHAAAFACQAEADADAEQADAEABAGIABANIAAAEIghAAIAAALIACAFIACADQABAAAAABQAAAAABAAQAAAAABAAQABAAAAAAQAEAAACgCQACgEABgFIAPAAQgBAKgFAHQgGAFgMAAQgJAAgFgCgAuSG9IgCADIgCAFIAAAEIAAADIARAAIgBgHIgBgFIgCgDIgFgBIgEABgAv4HyQgFgEgCgFQgDgEAAgGIgBgNIABgNQABgFADgFQADgFAFgDQAFgCAIAAQAHAAAFACQAEADADAEQADAEABAGIABANIAAAEIghAAIAAALIACAFIACADQABAAAAABQABAAAAAAQAAAAABAAQABAAAAAAQAEAAACgCQACgEABgFIAPAAQgBAKgFAHQgGAFgMAAQgJAAgFgCgAvuG9IgCADIgCAFIAAAEIAAADIARAAIgBgHIgBgFIgCgDIgFgBIgEABgAxhHyQgFgCgDgEQgDgEgBgHIgBgPIABgOQACgGADgEQADgFAFgCQAEgCAIAAQAHAAAFACQAFACADAEQADAEABAHQABAGAAAIQAAAJgBAGQgCAHgDAEQgDAEgFACQgEACgHAAQgIAAgFgCgAxZG9QgCACgBAEIgBAGIAAATIABAHQABADACACQACABADAAQAFAAABgFQACgFAAgNQAAgLgCgFQgBgGgFAAQgDAAgCABgAyWHzQgFgCgDgEQgDgEgCgGQgBgHAAgKQAAgJACgHQACgGADgEQAEgEAEgBQAFgCAGAAQAMAAAFAGQAGAHAAALIgQAAIAAgEIgBgEIgCgDQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAIgDAEIgBAHIAAAUIABAHIADAEQAAAAABABQAAAAABAAQAAAAABAAQABAAAAAAQAFAAABgDQACgEAAgIIAQAAQAAANgFAGQgGAIgNgBQgHABgEgCgAKsHyQgDAAgBgCIgDgFIAAgJIAAglIgJAAIAAgKIAJAAIAAgTIAQAAIAAATIAKAAIAAAKIgKAAIAAAjQAAAEACACQAAAAAAABQABAAAAAAQABAAABAAQAAABABAAIAEAAIAAALIgLAAIgIgBgAAOHyQgDAAgCgCIgCgFIgBgJIAAglIgHAAIAAgKIAHAAIAAgTIARAAIAAATIAKAAIAAAKIgKAAIAAAjQAAAEABACQAAAAABABQAAAAABAAQAAAAABAAQABABABAAIAEAAIAAALIgLAAIgIgBgALkHzIAAgtQAAgFgCgCQgCgCgDAAQgJAAAAALIAAArIgRAAIAAhVIARAAIAAAbIAAAAQAFgIALAAQAIAAAEAEQAEAFAAAJIAAAwgAKHHzIAAhAIAQAAIAABAgAJhHzIgIguIgBAAIgIAuIgTAAIgOhAIARAAIAHAtIAIgtIASAAIAJAtIAIgtIAQAAIgOBAgAGpHzIAAgtQAAgFgCgCQgBgCgEAAQgJAAAAALIAAArIgQAAIAAhAIAQAAIAAAHQADgFAEgCQAEgCAFAAQAIAAAEAEQAFAFAAAJIAAAwgAErHzIAAhAIAQAAIAAAIQACgFAEgDQAEgCAFAAIADAAIAAAQIgDgBIgCAAIgFABIgEACIgDAEIgBAFIAAAngAEFHzIAAhAIAQAAIAAAIQACgFAEgDQAEgCAFAAIADAAIAAAQIgDgBIgCAAIgFABIgEACIgDAEIgBAFIAAAngACoHzIgJguIAAAAIgIAuIgTAAIgOhAIAQAAIAIAtIAIgtIASAAIAJAtIAIgtIAPAAIgOBAgAgXHzIAAhVIARAAIAABVgAhYHzIAAhAIAQAAIAAAIQACgFAEgDQAEgCAFAAIADAAIAAAQIgDgBIgCAAIgFABIgEACIgDAEIgBAFIAAAngAlgHzQAAgGACgEQABgFACgFQACgFAEgDIAIgJIAMgLIACgFIACgEIAAgGQAAgKgIAAIgGABIgCADIgCAFIAAAHIgRAAIAAgEQAAgLAHgHQAGgGAOAAQANAAAGAGQAGAGAAALIAAAIIgDAHIgEAGIgQAPIgGAHIgCAGIAgAAIAAANgAmRHzIAAgtQAAgFgCgCQgCgCgDAAQgJAAAAALIAAArIgRAAIAAhAIAQAAIAAAHQADgFAEgCQAEgCAGAAQAIAAAEAEQAEAFAAAJIAAAwgAqPHzIAAhVIAwAAIAAANIgfAAIAAAUIAdAAIAAAPIgdAAIAAAXIAgAAIAAAOgAvKHzIAAhAIAQAAIAAAIQACgFAEgDQAEgCAFAAIADAAIAAAQIgDgBIgCAAIgFABIgEACIgDAEIgBAFIAAAngAwoHzIgRhAIASAAIAJAtIAAAAIAJgtIAQAAIgQBAgAkkHYIAAgPIAhAAIAAAPgAKHGrIAAgPIAQAAIAAAPgAK5FvIAAgMIAEABQAFAAACgCQACgDAAgEIgShBIARAAIAKAtIAIgtIARAAIgQA9IgEAMQgCAFgDADQgCADgEABIgKAAgAAWFvIAAhVIAQAAIAAAIQADgGAEgCQADgBAFAAQAKAAAFAIQAFAHAAATQAAASgFAHQgFAIgKAAQgFAAgDgCQgDgBgDgEIAAAAIAAAagAAoErQgBAFAAALQAAAKABAFQACAGAGAAQAFAAACgGQABgFAAgKQAAgLgBgFQgCgFgFgBQgGABgCAFgAgjFvIAAhVIAQAAIAAAIQADgGADgCQADgBAFAAQAKAAAEAIQAFAHAAATQAAASgFAHQgEAIgKAAQgEAAgEgCQgDgBgCgEIgBAAIAAAagAgRErQgCAFAAALQAAAKACAFQACAGAFAAQAFAAACgGQACgFAAgKQAAgLgCgFQgCgFgFgBQgFABgCAFgAP+FZQgFgDgCgFQgDgFAAgFIgBgNIABgNQABgFADgFQADgFAFgDQAFgCAIAAQAHAAAFACQAEACADAFQADAEABAGIABANIAAAEIghAAIAAALIACAFIACADQABAAAAABQAAAAABAAQABAAAAAAQABAAAAAAQAEAAACgCQACgDABgGIAPAAQgBALgFAGQgGAFgMAAQgJAAgFgDgAQIElIgCADIgCAEIAAAFIAAADIARAAIgBgHIgBgFIgCgDIgFgBIgEABgAI2FaQgFgCgDgEQgDgEgBgHIgBgOIABgPQACgGADgEQADgFAFgCQAEgCAIAAQAHgBAFACQAFADADAEQADAFABAGQABAGAAAJQAAAIgBAGQgCAHgDAEQgDAEgFACQgEACgHAAQgIAAgFgCgAI+ElQgCADgBADIgBAHIAAASIABAHQABADACACQACABADAAQAFAAABgFQACgFAAgMQAAgMgCgFQgBgGgFAAQgDAAgCABgAE4FaQgFgCgDgEQgDgEgBgHIgBgOIABgPQACgGADgEQADgFAFgCQAEgCAIAAQAHgBAFACQAFADADAEQADAFABAGQABAGAAAJQAAAIgBAGQgCAHgDAEQgDAEgFACQgEACgHAAQgIAAgFgCgAFAElQgCADgBADIgBAHIAAASIABAHQABADACACQACABADAAQAFAAABgFQACgFAAgMQAAgMgCgFQgBgGgFAAQgDAAgCABgADGFbQgEgBgDgDQgDgDgBgDIgBgJIAAgCIAPAAIAAACQAAAEACADQACADAFgBQADAAADgBQACgCAAgFQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAIgEgDIgMgEQgHgCgDgFQgEgEAAgHIACgIQABgDADgDQADgCAEgCQAFgBAGAAQAMAAAFAEQAFAGAAAIIAAADIgPAAQAAgGgBgCQgCgCgEAAQgDAAgCACQgDACAAADQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIAGAEIAJADQAIADAEAEQADAEAAAHQAAAFgCAEQgCAEgDADQgDACgFABQgEABgFAAQgHAAgFgBgACPFZQgFgDgCgFQgDgFAAgFIgBgNIABgNQABgFADgFQADgFAFgDQAFgCAIAAQAHAAAFACQAEACADAFQADAEABAGIABANIAAAEIghAAIAAALIACAFIACADQABAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQAEAAACgCQACgDABgGIAPAAQgBALgFAGQgGAFgMAAQgJAAgFgDgACZElIgCADIgCAEIAAAFIAAADIARAAIgBgHIgBgFIgCgDIgFgBIgEABgAhVFbQgDgBgCgDIgDgGIAAgHIABgIIADgFIAFgEIAHgDIAJgCQAEgBABgCQACgCAAgDQAAgEgCgCQgCgCgEAAQgEAAgCACQgBACAAAEIAAACIgPAAIAAgCQAAgFABgDQACgEADgDIAIgDIAIgBIAMABQAFACACACQADADABADIABAIIAAAqIACAFIgQAAIgCgHQgDAGgEABQgEABgGAAQgEAAgDgBgAhBE9IgDABQgFABgCACQgDADAAAEQAAAEACADQABADAEgBIADAAIADgCIADgDIABgFIAAgMgAjeFaQgFgCgDgEQgDgEgBgHIgBgOIABgPQACgGADgEQADgFAFgCQAEgCAIAAQAHgBAFACQAFADADAEQADAFABAGQABAGAAAJQAAAIgBAGQgCAHgDAEQgDAEgFACQgEACgHAAQgIAAgFgCgAjWElQgCADgBADIgBAHIAAASIABAHQABADACACQACABADAAQAFAAABgFQACgFAAgMQAAgMgCgFQgBgGgFAAQgDAAgCABgAlTFaQgFgCgDgEQgDgEgBgHIgBgOIABgPQACgGADgEQADgFAFgCQAEgCAIAAQAHgBAFACQAFADADAEQADAFABAGQABAGAAAJQAAAIgBAGQgCAHgDAEQgDAEgFACQgEACgHAAQgIAAgFgCgAlLElQgCADgBADIgBAHIAAASIABAHQABADACACQACABADAAQAFAAABgFQACgFAAgMQAAgMgCgFQgBgGgFAAQgDAAgCABgAnkFaQgFgCgDgEQgDgEgBgHIgBgOIABgPQACgGADgEQADgFAFgCQAEgCAIAAQAHgBAFACQAFADADAEQADAFABAGQABAGAAAJQAAAIgBAGQgCAHgDAEQgDAEgFACQgEACgHAAQgIAAgFgCgAncElQgCADgBADIgBAHIAAASIABAHQABADACACQACABADAAQAFAAABgFQACgFAAgMQAAgMgCgFQgBgGgFAAQgDAAgCABgAszFaQgFgCgDgEQgDgEgBgHIgBgOIABgPQABgGADgEQADgFAFgCQAFgCAHAAQAHgBAFACQAFADADAEQADAFABAGQACAGAAAJQAAAIgCAGQgBAHgDAEQgDAEgFACQgFACgHAAQgHAAgFgCgAssElQgCADAAADIgCAHIAAASIACAHQAAADACACQACABADAAQAFAAACgFQACgFAAgMQAAgMgCgFQgCgGgFAAQgDAAgCABgAupFZQgFgDgCgFQgDgFAAgFIgBgNIABgNQABgFADgFQADgFAFgDQAFgCAIAAQAHAAAFACQAEACADAFQADAEABAGIABANIAAAEIghAAIAAALIACAFIACADQABAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQAEAAACgCQACgDABgGIAPAAQgBALgFAGQgGAFgMAAQgJAAgFgDgAufElIgCADIgCAEIAAAFIAAADIARAAIgBgHIgBgFIgCgDIgFgBIgEABgAwFFbQgDgBgCgDIgDgGIAAgHIABgIIADgFIAFgEIAHgDIAJgCQAEgBABgCQACgCAAgDQAAgEgCgCQgCgCgEAAQgEAAgCACQgBACAAAEIAAACIgPAAIAAgCQAAgFABgDQACgEADgDIAIgDIAIgBIAMABQAFACACACQADADABADIABAIIAAAqIACAFIgQAAIgCgHQgDAGgEABQgEABgGAAQgEAAgDgBgAvxE9IgDABQgFABgCACQgDADAAAEQAAAEACADQABADAEgBIADAAIADgCIADgDIABgFIAAgMgAwvFaQgEgCgDgEIAAAHIgQAAIAAhVIARAAIAAAbIAAAAQADgFADgCQADgBAFAAQAKAAAFAIQAFAHAAATQAAASgFAHQgFAIgKAAQgFAAgDgCgAw0ErQgBAFAAALQAAAKABAFQACAGAGAAQAFAAACgGQABgFAAgKQAAgLgBgFQgCgFgFgBQgGABgCAFgAxzFZQgFgDgDgFQgCgFgBgFIAAgNIABgNQABgFACgFQADgFAFgDQAFgCAJAAQAHAAAEACQAFACADAFQACAEABAGIABANIAAAEIghAAIABALIABAFIADADQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAQAEAAACgCQACgDAAgGIAPAAQAAALgGAGQgFAFgMAAQgJAAgFgDgAxpElIgDADIgBAEIgBAFIAAADIARAAIAAgHIgBgFIgDgDIgEgBIgEABgAPfFaQgDAAgCgCIgCgFIgBgJIAAglIgIAAIAAgLIAIAAIAAgSIARAAIAAASIAKAAIAAALIgKAAIAAAjQAAAEABACQABAAAAABQAAAAABAAQAAAAABAAQABABABAAIAEAAIAAALIgLAAIgIgBgAEWFaQgDAAgBgCIgDgFIAAgJIAAglIgJAAIAAgLIAJAAIAAgSIAQAAIAAASIAKAAIAAALIgKAAIAAAjQAAAEACACQAAAAAAABQABAAAAAAQABAAABAAQAAABABAAIAEAAIAAALIgLAAIgIgBgAkbFaQgDAAgBgCIgDgFIAAgJIAAglIgJAAIAAgLIAJAAIAAgSIAQAAIAAASIAKAAIAAALIgKAAIAAAjQAAAEACACQAAAAAAABQABAAAAAAQABAAABAAQAAABABAAIAEAAIAAALIgLAAIgIgBgAvIFaQgDAAgCgCIgCgFIgBgJIAAglIgIAAIAAgLIAIAAIAAgSIARAAIAAASIAKAAIAAALIgKAAIAAAjQAAAEABACQAAAAABABQAAAAABAAQAAAAABAAQABABABAAIAEAAIAAALIgLAAIgIgBgAQsFbIAAhBIAQAAIAAAJQACgFAEgDQAEgCAFAAIADAAIAAAQIgDAAIgCAAIgFAAIgEACIgDAEIgBAFIAAAngAO6FbIAAgtQAAgEgCgDQgCgCgDAAQgJAAAAALIAAArIgRAAIAAhBIAQAAIAAAIQADgFAEgCQAEgCAGAAQAIAAAEAEQAEAFAAAJIAAAwgAN/FbIAAhBIAQAAIAABBgANYFbIAAhBIAQAAIAAAJQADgFADgDQAEgCAFAAIADAAIAAAQIgCAAIgDAAIgEAAIgEACIgDAEIgBAFIAAAngAMcFbIAAhVIAeAAQAHAAAFACQAEACADAEQADADABAEQABAFAAAFQAAAGgCAGQgCAEgDAEIgJAEQgFACgGAAIgJAAIAAAigAMuEsIAHAAQAFAAAEgDQADgDAAgHQAAgGgDgEQgDgDgGAAIgHAAgALnFbIAAgTIAQAAIAAATgAKeFbIAAhVIARAAIAABVgAKEFbIAAgtQAAgEgCgDQgCgCgDAAQgJAAAAALIAAArIgRAAIAAhBIAQAAIAAAIQADgFAEgCQAEgCAGAAQAIAAAEAEQAEAFAAAJIAAAwgAH7FbIgOgbIgGAIIAAATIgRAAIAAhVIARAAIAAAtIAAAAIARgZIASAAIgSAaIAVAngAG8FbIAAgtQAAgEgCgDQgCgCgDAAQgJAAAAALIAAArIgRAAIAAhBIAQAAIAAAIQADgFAEgCQAEgCAGAAQAIAAAEAEQAEAFAAAJIAAAwgAGBFbIAAhBIAQAAIAABBgABsFbIAAhBIARAAIAABBgABRFbIAAhVIARAAIAABVgAiQFbIAAgtQAAgEgCgDQgCgCgDAAQgJAAAAALIAAArIgRAAIAAhBIAQAAIAAAIQADgFAEgCQAEgCAGAAQAIAAAEAEQAEAFAAAJIAAAwgAkDFbIAAhBIAQAAIAABBgAl3FbIAAgtQAAgEgCgDQgBgCgEAAQgEABgCACQgCADAAAFIAAArIgRAAIAAgtQAAgEgCgDQgBgCgEAAQgDABgDACQgCADAAAFIAAArIgRAAIAAhBIAQAAIAAAHQADgEAEgDQAEgBAGAAQAFAAAEACQAEADACAFQACgFAEgDQAEgCAGAAQAIAAAEAEQAEAGAAAJIAAAvgAoVFbIAAhBIAQAAIAAAJQADgFADgDQAEgCAFAAIADAAIAAAQIgCAAIgDAAIgEAAIgEACIgDAEIgBAFIAAAngApRFbIAAhVIAeAAQAHAAAFACQAEACADAEQADADABAEQABAFAAAFQAAAGgCAGQgCAEgDAEIgJAEQgFACgGAAIgJAAIAAAigAo/EsIAHAAQAFAAAEgDQADgDAAgHQAAgGgDgEQgDgDgGAAIgHAAgAqGFbIAAgTIAQAAIAAATgAqhFbIAAgtQAAgEgBgDQgCgCgDAAQgEABgDACQgCADAAAFIAAArIgRAAIAAgtQAAgEgBgDQgCgCgDAAQgEABgCACQgDADAAAFIAAArIgQAAIAAhBIAQAAIAAAHQADgEAEgDQAEgBAFAAQAGAAAEACQAEADABAFQACgFAEgDQAFgCAGAAQAIAAAEAEQAEAGAAAJIAAAvgAsGFbIAAhBIAQAAIAAAJQACgFAEgDQAEgCAFAAIADAAIAAAQIgDAAIgCAAIgFAAIgEACIgDAEIgBAFIAAAngAtdFbIAAg2IgIAAIAAgLIAIAAIAAgHQAAgEACgDIADgFQACgCADAAIAIgCIAJABIAAAMIgCAAIgCAAQgDgBgCACQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIAAAFIAKAAIAAALIgKAAIAAA2gAyiFbIAAhBIAQAAIAAAJQADgFADgDQAEgCAFAAIADAAIAAAQIgCAAIgDAAIgEAAIgEACIgDAEIgBAFIAAAngAN/ESIAAgNIAQAAIAAANgAGBESIAAgNIAQAAIAAANgABsESIAAgNIARAAIAAANgAkDESIAAgNIAQAAIAAANgAK5DUQgFgFAAgHIAQAAQAAACACACIADABIADABQAFAAACgDQACgEAAgEIAAgJQgDAEgEACQgDADgEgBQgKAAgFgHQgFgIAAgRIABgMQAAgGACgFQACgEAEgDQAFgDAGAAIAHABQAEADADAFIAAgIIAQAAIAAA+QAAANgHAFQgGAGgOABQgLAAgGgFgALICOIgDAFIgBAHIgBALIABAGIABAFQAAABABABQAAAAAAABQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQABAAABAAQAAABABAAQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAIADgEIABgFIABgIQAAgMgCgEQgCgFgFgBIgEABgAu2DYIAAgNIAEABQAFAAACgCQACgDAAgEIgRg9IAAAHIgKAAIAAAjQAAAFABABQABAAAAABQAAAAABAAQAAAAABAAQABAAABAAIAEAAIAAAMIgLAAIgIgBQgDAAgCgCIgCgFIgBgJIAAglIgIAAIAAgLIAIAAIAAgSIARAAIAAASIAaAAIAKAtIAIgtIARAAIgQA9IgEAMQgCAGgDACQgCADgEABIgKABgAwTDYIAAhWIAQAAIAAAIQADgFAEgDQADgBAFAAQAKAAAFAIQAFAHAAATQAAARgFAJQgFAHgKAAQgFAAgDgCQgDgBgDgEIAAAAIAAAbgAwBCTQgBAFAAALQAAAKABAFQACAGAGAAQAFAAACgGQABgFAAgKQAAgLgBgFQgCgGgFAAQgGAAgCAGgAJNDCQgFgCgDgEQgDgEgBgHIgBgOIABgPQABgHADgDQADgFAFgCQAFgCAHAAQAHgBAFACQAFADADAEQADAFABAGQACAGAAAJQAAAIgCAGQgBAHgDAEQgDAEgFACQgFACgHAAQgHAAgFgCgAJUCNQgCACAAAEIgCAHIAAASIACAHQAAADACABQACACADAAQAFABACgGQACgFAAgMQAAgNgCgEQgCgGgFAAQgDAAgCABgAH1DDQgDgBgCgDIgDgHIAAgGIABgHIADgGIAFgEIAHgDIAJgCQAEgCABgBQACgCAAgDQAAgEgCgCQgCgCgEAAQgEAAgCACQgBADAAADIAAACIgPAAIAAgCQAAgFABgEQACgDADgDIAIgDIAIgBIAMABQAFABACAEQADACABADIABAIIAAAqIACAFIgQAAIgCgGQgDAFgEABQgEABgGAAQgEAAgDgBgAIJClIgDABQgFABgCACQgDADAAAEQAAAEACADQABADAEgBIADAAIADgCIADgDIABgFIAAgMgAFsDCQgFgCgDgEQgDgEgBgHIgBgOIABgPQACgHADgDQADgFAFgCQAEgCAIAAQAHgBAFACQAFADADAEQADAFABAGQABAGAAAJQAAAIgBAGQgCAHgDAEQgDAEgFACQgEACgHAAQgIAAgFgCgAF0CNQgCACgBAEIgBAHIAAASIABAHQABADACABQACACADAAQAFABABgGQACgFAAgMQAAgNgCgEQgBgGgFAAQgDAAgCABgAEcDDQgEgBgDgDQgDgDgBgEIgBgIIAAgCIAPAAIAAACQAAAEACADQACADAFgBQADAAADgCQACgBAAgFQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAIgEgCIgMgFQgHgCgDgFQgEgEAAgHIACgIQABgDADgCQADgDAEgCQAFgBAGAAQAMAAAFAEQAFAGAAAIIAAADIgPAAQAAgFgBgDQgCgCgEAAQgDAAgCACQgDABAAAEQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIAGAEIAJADQAIADAEAEQADAEAAAHQAAAGgCADQgCAEgDADQgDACgFABQgEABgFAAQgHAAgFgBgADpDDQgFgBgDgDQgCgDgBgEIgBgIIAAgCIAOAAIAAACQAAAEADADQACADAEgBQAEAAACgCQACgBAAgFQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAIgFgCIgLgFQgHgCgEgFQgDgEAAgHIABgIQACgDADgCQACgDAFgCQAEgBAHAAQALAAAFAEQAGAGAAAIIAAADIgPAAQAAgFgCgDQgBgCgEAAQgDAAgDACQgCABAAAEQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAIAGAEIAKADQAIADADAEQADAEAAAHQAAAGgCADQgBAEgEADQgDACgEABQgEABgGAAQgHAAgEgBgABHDCQgDgCgDgEIAAAHIgQAAIAAhVIAQAAIAAAbIABAAQACgFADgCQAEgBAEAAQALAAAEAIQAFAHAAATQAAARgFAJQgEAHgLAAQgFAAgDgCgABDCTQgCAFAAALQAAAKACAFQACAGAFAAQAFAAACgGQACgFAAgKQAAgLgCgFQgCgGgFAAQgFAAgCAGgAgEDAQgFgEAAgKIAAgwIAQAAIAAAtQAAAFACACQABACAEAAQAJAAAAgKIAAgsIAQAAIAABBIgQAAIAAgIQgDAFgEACQgEACgFAAQgHABgEgFgAgzDDQgEgBgDgDQgDgDgBgEIgBgIIAAgCIAPAAIAAACQAAAEACADQACADAFgBQADAAADgCQACgBAAgFQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAIgEgCIgMgFQgHgCgDgFQgEgEAAgHIACgIQABgDADgCQADgDAEgCQAFgBAGAAQAMAAAFAEQAFAGAAAIIAAADIgPAAQAAgFgBgDQgCgCgEAAQgDAAgCACQgDABAAAEQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIAGAEIAJADQAIADAEAEQADAEAAAHQAAAGgCADQgCAEgDADQgDACgFABQgEABgFAAQgHAAgFgBgAiqDCQgFgCgDgEQgDgEgBgHIgBgOIABgPQABgHADgDQADgFAFgCQAFgCAHAAQAHgBAFACQAFADADAEQADAFABAGQACAGAAAJQAAAIgCAGQgBAHgDAEQgDAEgFACQgFACgHAAQgHAAgFgCgAijCNQgCACAAAEIgCAHIAAASIACAHQAAADACABQACACADAAQAFABACgGQACgFAAgMQAAgNgCgEQgCgGgFAAQgDAAgCABgAkgDBQgFgCgCgGQgDgFAAgGIgBgMIABgNQABgFADgFQADgFAFgDQAFgCAIAAQAHAAAFACQAEADADAEQADAEABAGIABAOIAAADIghAAIAAALIACAFIACADQABAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQAEAAACgCQACgEABgFIAPAAQgBAKgFAHQgGAFgMAAQgJAAgFgDgAkWCNIgCADIgCAEIAAAFIAAADIARAAIgBgHIgBgFIgCgDIgFgBIgEABgAm0DCQgFgCgDgEQgDgEgBgHIgBgOIABgPQABgHADgDQADgFAFgCQAFgCAHAAQAHgBAFACQAFADADAEQADAFABAGQACAGAAAJQAAAIgCAGQgBAHgDAEQgDAEgFACQgFACgHAAQgHAAgFgCgAmtCNQgCACAAAEIgCAHIAAASIACAHQAAADACABQACACADAAQAFABACgGQACgFAAgMQAAgNgCgEQgCgGgFAAQgDAAgCABgAnjDCQgEgCgDgEIAAAHIgQAAIAAhVIARAAIAAAbIAAAAQADgFADgCQADgBAFAAQAKAAAFAIQAFAHAAATQAAARgFAJQgFAHgKAAQgFAAgDgCgAnoCTQgBAFAAALQAAAKABAFQACAGAGAAQAFAAACgGQABgFAAgKQAAgLgBgFQgCgGgFAAQgGAAgCAGgAtfDCQgFgCgDgDQgCgEgBgEIgBgIIAAgCIAQAAIABAEIABAFIACADIAFABQAFAAADgDQACgFAAgIIgBgJIgBgFIgDgDIgFgBQgEAAgCACQgCACAAAEIgQAAIADguIAtAAIAAANIggAAIgBAUQACgEAEgCQAEgBAFAAQAHAAAEACQAEADACAEQACAEABAFIABAJIgBANQgBAGgDAEQgDAEgGACQgFACgIAAQgIAAgFgCgAyZDBQgFgCgDgGQgCgFgBgGIAAgMIABgNQABgFACgFQADgFAFgDQAFgCAJAAQAHAAAEACQAFADADAEQACAEABAGIABAOIAAADIghAAIABALIABAFIADADQAAAAABABQAAAAAAAAQABAAABAAQAAAAABAAQAEAAACgCQACgEAAgFIAPAAQAAAKgGAHQgFAFgMAAQgJAAgFgDgAyPCNIgDADIgBAEIgBAFIAAADIARAAIAAgHIgBgFIgDgDIgEgBIgEABgAOCDCQgDAAgBgCIgDgFIAAgJIAAglIgJAAIAAgLIAJAAIAAgSIAQAAIAAASIAKAAIAAALIgKAAIAAAjQAAAFACABQAAAAAAABQABAAAAAAQABAAABAAQAAAAABAAIAEAAIAAAMIgLAAIgIgBgAlaDCQgDAAgCgCIgCgFIgBgJIAAglIgRAAIAAAjQAAAFABABQAAAAABABQAAAAABAAQAAAAABAAQABAAABAAIAEAAIAAAMIgLAAIgIgBQgDAAgCgCIgCgFIgBgJIAAglIgIAAIAAgLIAIAAIAAgSIARAAIAAASIARAAIAAgSIARAAIAAASIAKAAIAAALIgKAAIAAAjQAAAFABABQAAAAABABQAAAAABAAQAAAAABAAQABAAABAAIAEAAIAAAMIgLAAIgIgBgAO6DDIAAgtQAAgEgCgCQgCgDgDAAQgJAAAAALIAAArIgRAAIAAhVIARAAIAAAbIAAAAQAFgIALAAQAIAAAEAEQAEAFAAAJIAAAwgANdDDIAAhBIAQAAIAABBgAM3DDIgIguIgBAAIgIAuIgTAAIgOhBIARAAIAHAuIAIguIASAAIAJAuIAIguIAQAAIgOBBgAKaDDIAAgtQAAgEgCgCQgBgDgEAAQgJAAAAALIAAArIgQAAIAAhBIAQAAIAAAIQADgFAEgCQAEgCAFAAQAIAAAEAEQAFAFAAAJIAAAwgAInDDIAAhVIARAAIAABVgAG6DDIAAgtQAAgEgCgCQgCgDgDAAQgJAAAAALIAAArIgRAAIAAhBIAQAAIAAAIQADgFAEgCQAEgCAGAAQAIAAAEAEQAEAFAAAJIAAAwgAFHDDIAAhBIAQAAIAABBgADFDDIAAhBIAQAAIAABBgACrDDIAAgtQAAgEgCgCQgBgDgEAAQgEAAgCADQgCADAAAGIAAAqIgRAAIAAgtQAAgEgCgCQgBgDgEAAQgDAAgDADQgCADAAAGIAAAqIgRAAIAAhBIAQAAIAAAHQADgFAEgCQAEgBAGAAQAFAAAEACQAEADACAFQACgFAEgDQAEgCAGAAQAIAAAEAEQAEAGAAAJIAAAvgAh9DDIAAhBIAQAAIAAAJQACgFAEgDQAEgCAFAAIADAAIAAAQIgDAAIgCAAIgFAAIgEACIgDAEIgBAFIAAAngAjUDDIAAg2IgIAAIAAgLIAIAAIAAgHQAAgEACgDIADgFQACgCADAAIAIgBIAJAAIAAAMIgCAAIgCAAQgDgBgCACQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIAAAFIAKAAIAAALIgKAAIAAA2gAlDDDIAAhVIARAAIAABVgAoqDDIgOgbIgGAIIAAATIgRAAIAAhVIARAAIAAAtIAAAAIARgZIASAAIgSAaIAVAngAppDDIAAgtQAAgEgCgCQgCgDgDAAQgJAAAAALIAAArIgRAAIAAhBIAQAAIAAAIQADgFAEgCQAEgCAGAAQAIAAAEAEQAEAFAAAJIAAAwgAqkDDIAAhBIAQAAIAABBgAr7DDQAAgGABgFQABgEADgFQACgFADgEIAJgIIALgLIADgFIABgEIAAgGQAAgLgIAAIgFABIgDAEIgBAFIgBAHIgQAAIAAgDQAAgMAGgGQAHgHANAAQANAAAHAGQAGAGAAALIgBAIIgCAGIgEAHIgQAPIgGAHIgDAGIAgAAIAAANgAsVDDIAAgSIgfAAIAAgOIAdg1IASAAIAAA2IAIAAIAAANIgIAAIAAASgAsmCkIARAAIAAghIgBAAgAwsDDIAAgtQAAgEgCgCQgBgDgEAAQgEAAgCADQgCADAAAGIAAAqIgRAAIAAgtQAAgEgCgCQgBgDgEAAQgDAAgDADQgCADAAAGIAAAqIgRAAIAAhBIAQAAIAAAHQADgFAEgCQAEgBAGAAQAFAAAEACQAEADACAFQACgFAEgDQAEgCAGAAQAIAAAEAEQAEAGAAAJIAAAvgANdB6IAAgNIAQAAIAAANgAFHB6IAAgNIAQAAIAAANgADFB6IAAgNIAQAAIAAANgAqkB6IAAgNIAQAAIAAANgALTBAIAAgNIAFABQAEAAACgDQACgCAAgEIgShAIASAAIAJAsIAJgsIAQAAIgPA8IgEAMQgCAGgDACQgDADgDABIgKABgAu2BAIAAhVIAQAAIAAAHQADgEADgDQADgBAFAAQALAAAEAIQAFAHAAASQAAARgFAJQgEAHgLABQgEgBgEgCQgDgBgCgEIgBAAIAAAbgAukgEQgCAEAAALQAAAKACAGQACAFAFAAQAFAAACgFQACgGAAgKQAAgLgCgEQgCgGgFAAQgFAAgCAGgANDAoQgEgEAAgJIAAgwIAQAAIAAAsQAAAFACACQACACADAAQAJAAAAgKIAAgrIARAAIAABAIgQAAIAAgHQgDAEgEACQgEACgGABQgIAAgEgFgAMSAqQgFgCgDgEQgDgEgBgHIgBgOIABgOQABgHADgEQADgEAFgCQAFgCAHAAQAHAAAFABQAFADADAEQADAFABAGQACAFAAAJQAAAIgCAGQgBAHgDAEQgDAEgFACQgFACgHABQgHgBgFgCgAMZgKQgCADAAACIgCAHIAAASIACAHQAAADACABQACACADAAQAFABACgGQACgFAAgMQAAgMgCgEQgCgGgFAAQgDAAgCABgAIxArQgDgBgCgDIgDgHIAAgGIABgHIADgHIAFgDIAHgDIAJgDQAEgBABgBQACgBAAgDQAAgEgCgCQgCgCgEAAQgEAAgCADQgBACAAADIAAACIgPAAIAAgCQAAgFABgEQACgEADgCIAIgDIAIgBIAMABQAFABACAEQADACABADIABAIIAAApIACAFIgQAAIgCgGQgDAFgEABQgEACgGAAQgEAAgDgCgAJFANIgDABQgFABgCADQgDACAAAEQAAAEACADQABACAEAAIADAAIADgCIADgDIABgFIAAgMgAHbApQgFgCgCgGQgDgEAAgHIgBgMIABgMQABgFADgFQADgEAFgEQAFgCAIAAQAHAAAFACQAEADADADQADAFABAGIABANIAAADIghAAIAAALIACAFIACADQABAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQAEAAACgDQACgDABgFIAPAAQgBAKgFAHQgGAFgMABQgJgBgFgDgAHlgKIgCADIgCAEIAAAEIAAACIARAAIgBgFIgBgFIgCgDIgFgBIgEABgAERAqQgFgCgDgEQgDgEgBgHIgBgOIABgOQACgHADgEQADgEAFgCQAEgCAIAAQAHAAAFABQAFADADAEQADAFABAGQABAFAAAJQAAAIgBAGQgCAHgDAEQgDAEgFACQgEACgHABQgIgBgFgCgAEZgKQgCADgBACIgBAHIAAASIABAHQABADACABQACACADAAQAFABABgGQACgFAAgMQAAgMgCgEQgBgGgFAAQgDAAgCABgAC+AqQgFgCgDgEQgDgEgBgHIgBgOIABgOQACgHADgEQADgEAFgCQAEgCAIAAQAHAAAFABQAFADADAEQADAFABAGQABAFAAAJQAAAIgBAGQgCAHgDAEQgDAEgFACQgEACgHABQgIgBgFgCgADGgKQgCADgBACIgBAHIAAASIABAHQABADACABQACACADAAQAFABABgGQACgFAAgMQAAgMgCgEQgBgGgFAAQgDAAgCABgACJArQgFgBgDgEQgDgFgCgGQgBgGAAgKQAAgKACgGQACgGADgEQAEgEAEgCQAFgBAGAAQAMAAAFAHQAGAGAAALIgQAAIAAgEIgBgEIgCgDQgBAAAAgBQAAAAgBAAQAAAAgBAAQgBgBAAAAQgBAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAIgDAEIgBAGIAAAUIABAHIADAEQAAAAABABQAAAAABAAQAAAAABAAQABAAAAAAQAFABABgEQACgEAAgHIAQAAQAAAMgFAHQgGAGgNABQgHAAgEgCgAA1ApQgFgCgDgGQgCgEgBgHIAAgMIABgMQABgFACgFQADgEAFgEQAFgCAJAAQAHAAAEACQAFADADADQACAFABAGIABANIAAADIghAAIABALIABAFIADADQAAAAABABQAAAAAAAAQABAAABAAQAAAAABAAQAEAAACgDQACgDAAgFIAPAAQAAAKgGAHQgFAFgMABQgJgBgFgDgAA/gKIgDADIgBAEIgBAEIAAACIARAAIAAgFIgBgFIgDgDIgEgBIgEABgAheArQgDgBgBgDIgDgHIgBgGIABgHIADgHIAFgDIAHgDIAKgDQAEgBABgBQABgBAAgDQAAgEgBgCQgCgCgEAAQgEAAgCADQgCACAAADIAAACIgPAAIAAgCQAAgFACgEQACgEADgCIAHgDIAJgBIAMABQAEABADAEQACACABADIABAIIABApIABAFIgQAAIgCgGQgDAFgEABQgDACgGAAQgFAAgDgCgAhJANIgEABQgFABgCADQgCACAAAEQAAAEABADQACACADAAIAEAAIADgCIACgDIABgFIAAgMgAiOArQgEgBgDgDQgDgCgBgFIgBgIIAAgCIAPAAIAAACQAAAEACADQACACAFAAQADAAADgCQACgBAAgFQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAIgEgCIgMgFQgHgCgDgFQgEgEAAgGIACgIQABgDADgCQADgDAEgCQAFgBAGAAQAMAAAFAFQAFAEAAAJIAAADIgPAAQAAgGgBgBQgCgDgEAAQgDAAgCACQgDABAAAEQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIAGADIAJADQAIACAEAFQADAEAAAHQAAAGgCADQgCAEgDACQgDADgFABQgEACgFAAQgHAAgFgCgAjgApQgFgCgCgGQgDgEAAgHIgBgMIABgMQABgFADgFQADgEAFgEQAFgCAIAAQAHAAAFACQAEADADADQADAFABAGIABANIAAADIghAAIAAALIACAFIACADQABAAAAABQABAAAAAAQAAAAABAAQABAAAAAAQAEAAACgDQACgDABgFIAPAAQgBAKgFAHQgGAFgMABQgJgBgFgDgAjWgKIgCADIgCAEIAAAEIAAACIARAAIgBgFIgBgFIgCgDIgFgBIgEABgAmvAqQgFgCgDgEQgDgEgBgHIgBgOIABgOQACgHADgEQADgEAFgCQAEgCAIAAQAHAAAFABQAFADADAEQADAFABAGQABAFAAAJQAAAIgBAGQgCAHgDAEQgDAEgFACQgEACgHABQgIgBgFgCgAmngKQgCADgBACIgBAHIAAASIABAHQABADACABQACACADAAQAFABABgGQACgFAAgMQAAgMgCgEQgBgGgFAAQgDAAgCABgAn/ArQgEgBgDgDQgDgCgBgFIgBgIIAAgCIAPAAIAAACQAAAEACADQACACAFAAQADAAADgCQACgBAAgFQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAIgEgCIgMgFQgHgCgDgFQgEgEAAgGIACgIQABgDADgCQADgDAEgCQAFgBAGAAQAMAAAFAFQAFAEAAAJIAAADIgPAAQAAgGgBgBQgCgDgEAAQgDAAgCACQgDABAAAEQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIAGADIAJADQAIACAEAFQADAEAAAHQAAAGgCADQgCAEgDACQgDADgFABQgEACgFAAQgHAAgFgCgAo2ApQgFgCgCgGQgDgEAAgHIgBgMIABgMQABgFADgFQADgEAFgEQAFgCAIAAQAHAAAFACQAEADADADQADAFABAGIABANIAAADIghAAIAAALIACAFIACADQABAAAAABQABAAAAAAQAAAAABAAQABAAAAAAQAEAAACgDQACgDABgFIAPAAQgBAKgFAHQgGAFgMABQgJgBgFgDgAosgKIgCADIgCAEIAAAEIAAACIARAAIgBgFIgBgFIgCgDIgFgBIgEABgArKAqQgFgCgDgEQgDgEgBgHIgBgOIABgOQABgHADgEQADgEAFgCQAFgCAHAAQAHAAAFABQAFADADAEQADAFABAGQACAFAAAJQAAAIgCAGQgBAHgDAEQgDAEgFACQgFACgHABQgHgBgFgCgArDgKQgCADAAACIgCAHIAAASIACAHQAAADACABQACACADAAQAFABACgGQACgFAAgMQAAgMgCgEQgCgGgFAAQgDAAgCABgAr5AqQgEgCgDgEIAAAHIgQAAIAAhUIARAAIAAAbIAAAAQADgEADgDQADgBAFAAQAKAAAFAIQAFAHAAASQAAARgFAJQgFAHgKABQgFgBgDgCgAr+gEQgBAEAAALQAAAKABAGQACAFAGAAQAFAAACgFQABgGAAgKQAAgLgBgEQgCgGgFAAQgGAAgCAGgAtYApQgFgCgDgGQgCgEgBgHIAAgMIABgMQABgFACgFQADgEAFgEQAFgCAJAAQAHAAAEACQAFADADADQACAFABAGIABANIAAADIghAAIABALIABAFIADADQAAAAABABQAAAAAAAAQABAAABAAQAAAAABAAQAEAAACgDQACgDAAgFIAPAAQAAAKgGAHQgFAFgMABQgJgBgFgDgAtOgKIgDADIgBAEIgBAEIAAACIARAAIAAgFIgBgFIgDgDIgEgBIgEABgAxEAoQgFgEAAgJIAAgwIARAAIAAAsQAAAFACACQABACAEAAQAJAAAAgKIAAgrIAQAAIAABAIgQAAIAAgHQgDAEgEACQgEACgFABQgIAAgEgFgAIUAqQgDAAgCgCIgCgFIgBgIIAAglIgIAAIAAgLIAIAAIAAgSIARAAIAAASIAKAAIAAALIgKAAIAAAiQAAAFABABQABAAAAABQAAAAABAAQAAAAABAAQABAAABAAIAEAAIAAAMIgLAAIgIgBgAk6AqQgDAAgBgCIgDgFIAAgIIAAglIgJAAIAAgLIAJAAIAAgSIAQAAIAAASIAKAAIAAALIgKAAIAAAiQAAAFACABQAAAAAAABQABAAAAAAQABAAABAAQAAAAABAAIAEAAIAAAMIgLAAIgIgBgApwAqQgDAAgCgCIgCgFIgBgIIAAglIgRAAIAAAiQAAAFABABQABAAAAABQAAAAABAAQAAAAABAAQABAAABAAIAEAAIAAAMIgLAAIgIgBQgDAAgCgCIgCgFIgBgIIAAglIgIAAIAAgLIAIAAIAAgSIARAAIAAASIARAAIAAgSIARAAIAAASIAKAAIAAALIgKAAIAAAiQAAAFABABQAAAAABABQAAAAABAAQAAAAABAAQABAAABAAIAEAAIAAAMIgLAAIgIgBgAvoAqQgDAAgCgCIgCgFIgBgIIAAglIgIAAIAAgLIAIAAIAAgSIARAAIAAASIAKAAIAAALIgKAAIAAAiQAAAFABABQABAAAAABQAAAAABAAQAAAAABAAQABAAABAAIAEAAIAAAMIgLAAIgIgBgAN5ArIAAhAIAQAAIAAAJQADgEADgEQAEgCAFAAIADAAIAAAQIgCAAIgDAAIgEAAIgEACIgDAEIgBAEIAAAngAKeArIAAgsQAAgEgCgCQgBgCgEgBQgJAAAAAKIAAArIgQAAIAAhAIAQAAIAAAIQADgFAEgCQAEgCAFAAQAIAAAEAEQAFAEAAAKIAAAvgAJjArIAAhAIARAAIAABAgAG6ArIgCgEIgBgVQAAgGgDgCQgCgDgFAAIgJAAIAAAkIgSAAIAAhUIAgAAQALAAAGAFQAGAFAAALQAAAJgEAGQgDAFgHABIAAAAQAGABADADQADADABAHIABAXQABADACABIAAABgAGkgEIAHAAQAGAAADgDQAEgDAAgHQAAgMgMAAIgIAAgAFdArIAAgTIAQAAIAAATgAE+ArIAAhAIAQAAIAAAJQADgEADgEQAEgCAFAAIADAAIAAAQIgCAAIgDAAIgEAAIgEACIgDAEIgBAEIAAAngADsArIAAhUIAQAAIAABUgAATArIAAgsQAAgEgCgCQgBgCgEgBQgEAAgCADQgCADAAAFIAAAqIgQAAIAAgsQAAgEgCgCQgBgCgEgBQgDAAgDADQgCADAAAFIAAAqIgRAAIAAhAIAQAAIAAAHQADgFAEgCQAEgBAGAAQAFAAAEACQADADACAFQACgFAEgDQAEgCAGAAQAIAAAEAFQAEAFAAAJIAAAugAkCArIAAgsQAAgEgCgCQgCgCgDgBQgJAAAAAKIAAArIgRAAIAAhUIARAAIAAAbIAAAAQAFgIALAAQAIAAAEAEQAEAEAAAKIAAAvgAl+ArIAAg1IgJAAIAAgLIAJAAIAAgHQAAgEABgDIADgFQADgCADAAIAHgBIAJAAIAAAMIgCgBIgBAAQgEABgBABQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAABIAAAFIAKAAIAAALIgKAAIAAA1gApZArIAAhUIARAAIAABUgAt7ArIAAhUIAQAAIAABUgAvRArIAAhAIARAAIAABAgAwOArIAAhUIARAAIAABUgAxiArIAAgsQAAgEgCgCQgBgCgEgBQgEAAgCADQgCADAAAFIAAAqIgRAAIAAgsQAAgEgCgCQgBgCgEgBQgDAAgDADQgCADAAAFIAAAqIgRAAIAAhAIAQAAIAAAHQADgFAEgCQAEgBAGAAQAFAAAEACQAEADACAFQACgFAEgDQAEgCAGAAQAIAAAEAFQAEAFAAAJIAAAugAJjgdIAAgNIARAAIAAANgAvRgdIAAgNIARAAIAAANgAtMhXIAAhWIAQAAIAAAHQADgFAEgCQADgBAFAAQAKAAAFAIQAFAIAAASQAAARgFAJQgFAHgKABQgFAAgDgDQgDgBgDgEIAAAAIAAAbgAs6icQgBAFAAALQAAAKABAGQACAFAGAAQAFAAACgFQABgGAAgKQAAgLgBgFQgCgGgFABQgGgBgCAGgALPhsQgDgCgCgDIgDgGIAAgGIABgHIADgHIAFgDIAHgDIAJgDQAEgBABgBQACgCAAgDQAAgDgCgDQgCgCgEAAQgEAAgCADQgBACAAADIAAACIgPAAIAAgCQAAgFABgEQACgEADgCIAIgDIAIgBIAMABQAFACACADQADACABADIABAIIAAAqIACAFIgQAAIgCgGQgDAEgEACQgEACgGAAQgEAAgDgCgALjiKIgDABQgFABgCADQgDACAAAEQAAAEACADQABACAEAAIADAAIADgCIADgDIABgFIAAgMgAI/htQgFgBgDgFQgDgEgBgGIgBgPIABgPQACgHADgEQADgEAFgCQAEgCAIAAQAHAAAFABQAFADADAEQADAEABAHQABAGAAAJQAAAIgBAHQgCAGgDAEQgDAEgFACQgEADgHAAQgIAAgFgDgAJHihQgCACgBACIgBAIIAAASIABAHQABADACABQACACADAAQAFABABgGQACgFAAgMQAAgNgCgFQgBgFgFAAQgDAAgCACgAIKhsQgFgCgDgDQgDgEgCgHQgBgGAAgKQAAgKACgHQACgGADgEQAEgEAEgCQAFgBAGAAQAMAAAFAHQAGAGAAAMIgQAAIAAgFIgBgEIgCgDQgBAAAAgBQAAAAgBAAQAAAAgBAAQgBgBAAAAQgBAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAIgDAEIgBAHIAAAUIABAHIADAEQAAAAABABQAAAAABAAQAAAAABAAQABAAAAAAQAFAAABgDQACgEAAgHIAQAAQAAAMgFAHQgGAGgNABQgHAAgEgCgAGUhtQgFgBgDgFQgDgEgBgGIgBgPIABgPQACgHADgEQADgEAFgCQAEgCAIAAQAHAAAFABQAFADADAEQADAEABAHQABAGAAAJQAAAIgBAHQgCAGgDAEQgDAEgFACQgEADgHAAQgIAAgFgDgAGcihQgCACgBACIgBAIIAAASIABAHQABADACABQACACADAAQAFABABgGQACgFAAgMQAAgNgCgFQgBgFgFAAQgDAAgCACgADihsQgDgCgBgDIgDgGIgBgGIABgHIADgHIAFgDIAHgDIAKgDQAEgBABgBQABgCAAgDQAAgDgBgDQgCgCgEAAQgEAAgCADQgCACAAADIAAACIgPAAIAAgCQAAgFACgEQACgEADgCIAHgDIAJgBIAMABQAEACADADQACACABADIABAIIABAqIABAFIgQAAIgCgGQgDAEgEACQgDACgGAAQgFAAgDgCgAD3iKIgEABQgFABgCADQgCACAAAEQAAAEABADQACACADAAIAEAAIADgCIACgDIABgFIAAgMgACyhsQgFgCgDgDQgDgEgCgHQgBgGAAgKQAAgKACgHQACgGADgEQAEgEAEgCQAFgBAGAAQAMAAAFAHQAGAGAAAMIgQAAIAAgFIgBgEIgCgDQgBAAAAgBQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAIgDAEIgBAHIAAAUIABAHIADAEQAAAAABABQAAAAABAAQAAAAABAAQABAAAAAAQAFAAABgDQACgEAAgHIAQAAQAAAMgFAHQgGAGgNABQgHAAgEgCgAgahsQgDgCgBgDIgDgGIgBgGIABgHIADgHIAFgDIAHgDIAKgDQAEgBABgBQABgCAAgDQAAgDgBgDQgCgCgEAAQgEAAgCADQgCACAAADIAAACIgPAAIAAgCQAAgFACgEQACgEADgCIAHgDIAJgBIALABQAEACADADQACACABADIABAIIABAqIABAFIgPAAIgCgGQgDAEgEACQgDACgGAAQgFAAgDgCgAgFiKIgEABQgFABgCADQgCACAAAEQAAAEABADQACACADAAIAEAAIADgCIACgDIABgFIAAgMgAhjhsQgEgCgDgDQgEgEgBgHQgCgGAAgKQAAgKACgHQACgGAEgEQADgEAFgCQAFgBAGAAQALAAAGAHQAGAGAAAMIgQAAIAAgFIgCgEIgCgDQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBABQgBAAAAAAQgBAAAAAAQgBABAAAAIgDAEIgCAHIAAAUIACAHIACAEQABAAAAABQABAAAAAAQABAAABAAQAAAAABAAQAEAAACgDQACgEAAgHIAQAAQAAAMgGAHQgGAGgNABQgGAAgFgCgAjuhsQgFgCgDgDQgDgEgCgHQgBgGAAgKQAAgKACgHQACgGADgEQAEgEAEgCQAFgBAGAAQAMAAAFAHQAGAGAAAMIgQAAIAAgFIgBgEIgCgDQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAIgDAEIgBAHIAAAUIABAHIADAEQAAAAABABQAAAAABAAQAAAAABAAQABAAAAAAQAFAAABgDQACgEAAgHIAQAAQAAAMgFAHQgGAGgNABQgHAAgEgCgAkshsQgDgCgBgDIgDgGIgBgGIABgHIADgHIAFgDIAHgDIAKgDQAEgBABgBQABgCAAgDQAAgDgBgDQgCgCgEAAQgEAAgCADQgCACAAADIAAACIgPAAIAAgCQAAgFACgEQACgEADgCIAHgDIAJgBIAMABQAEACADADQACACABADIABAIIABAqIABAFIgQAAIgCgGQgDAEgEACQgDACgGAAQgFAAgDgCgAkXiKIgEABQgFABgCADQgCACAAAEQAAAEABADQACACADAAIAEAAIADgCIACgDIABgFIAAgMgApGhsQgDgCgBgDIgDgGIgBgGIABgHIADgHIAFgDIAHgDIAKgDQAEgBABgBQABgCAAgDQAAgDgBgDQgCgCgEAAQgEAAgCADQgCACAAADIAAACIgPAAIAAgCQAAgFACgEQACgEADgCIAHgDIAJgBIAMABQAEACADADQACACABADIABAIIABAqIABAFIgQAAIgCgGQgDAEgEACQgDACgGAAQgFAAgDgCgAoxiKIgEABQgFABgCADQgCACAAAEQAAAEABADQACACADAAIAEAAIADgCIACgDIABgFIAAgMgAqPhsQgEgCgDgDQgEgEgBgHQgCgGAAgKQAAgKACgHQACgGAEgEQADgEAFgCQAFgBAGAAQALAAAGAHQAGAGAAAMIgQAAIAAgFIgCgEIgCgDQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAIgDAEIgCAHIAAAUIACAHQAAABAAAAQABABAAABQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQABAAABAAQAAAAABAAQAEAAACgDQACgEAAgHIAQAAQAAAMgGAHQgGAGgNABQgGAAgFgCgAsJhuQgFgCgCgGQgDgEAAgHIgBgMIABgNQABgGADgEQADgFAFgDQAFgCAIAAQAHAAAFACQAEADADADQADAFABAGIABAOIAAADIghAAIAAALIACAFIACADQABAAAAABQAAAAABAAQABAAAAAAQABAAAAAAQAEAAACgDQACgCABgHIAPAAQgBAMgFAFQgGAGgMABQgJAAgFgEgAr/iiIgCADIgCAEIAAAFIAAACIARAAIgBgGIgBgFIgCgDIgFgBIgEABgAuRhsQgEgBgDgDQgDgDgBgEIgBgIIAAgCIAPAAIAAACQAAAEACADQACACAFAAQADAAADgCQACgCAAgDQAAgBAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAIgEgCIgMgFQgHgCgDgEQgEgFAAgHIACgIQABgDADgCQADgDAEgCQAFgBAGAAQAMAAAFAFQAFAEAAAJIAAADIgPAAQAAgFgBgCQgCgDgEAAQgDAAgCACQgDABAAAEQAAABAAAAQAAABABAAQAAABAAAAQAAABABABIAGACIAJAEQAIACAEAFQADAEAAAHQAAAGgCADQgCAEgDACQgDADgFABQgEACgFAAQgHAAgFgCgAvIhuQgFgCgCgGQgDgEAAgHIgBgMIABgNQABgGADgEQADgFAFgDQAFgCAIAAQAHAAAFACQAEADADADQADAFABAGIABAOIAAADIghAAIAAALIACAFIACADQABAAAAABQAAAAABAAQAAAAABAAQABAAAAAAQAEAAACgDQACgCABgHIAPAAQgBAMgFAFQgGAGgMABQgJAAgFgEgAu+iiIgCADIgCAEIAAAFIAAACIARAAIgBgGIgBgFIgCgDIgFgBIgEABgAxchtQgFgBgDgFQgDgEgBgGIgBgPIABgPQABgHADgEQADgEAFgCQAFgCAHAAQAHAAAFABQAFADADAEQADAEABAHQACAGAAAJQAAAIgCAHQgBAGgDAEQgDAEgFACQgFADgHAAQgHAAgFgDgAxVihQgCACAAACIgCAIIAAASIACAHQAAADACABQACACADAAQAFABACgGQACgFAAgMQAAgNgCgFQgCgFgFAAQgDAAgCACgAyLhtQgEgBgDgFIAAAHIgQAAIAAhWIARAAIAAAcIAAAAQADgFADgCQADgBAFAAQAKAAAFAIQAFAIAAASQAAARgFAJQgFAHgKABQgFAAgDgDgAyQicQgBAFAAALQAAAKABAGQACAFAGAAQAFAAACgFQABgGAAgKQAAgLgBgFQgCgGgFABQgGgBgCAGgAKyhtQgDAAgCgCIgCgFIgBgIIAAglIgIAAIAAgMIAIAAIAAgSIARAAIAAASIAKAAIAAAMIgKAAIAAAiQAAAEABACQAAAAABABQAAAAABAAQAAAAABAAQABAAABAAIAEAAIAAAMIgLABIgIgCgAHMhtQgDAAgBgCIgDgFIAAgIIAAglIgJAAIAAgMIAJAAIAAgSIAQAAIAAASIAKAAIAAAMIgKAAIAAAiQAAAEACACQAAAAAAABQABAAAAAAQABAAABAAQAAAAABAAIAEAAIAAAMIgLABIgIgCgAwChtQgDAAgCgCIgCgFIgBgIIAAglIgRAAIAAAiQAAAEABACQABAAAAABQAAAAABAAQAAAAABAAQABAAABAAIAEAAIAAAMIgLABIgIgCQgDAAgCgCIgCgFIgBgIIAAglIgIAAIAAgMIAIAAIAAgSIARAAIAAASIARAAIAAgSIARAAIAAASIAKAAIAAAMIgKAAIAAAiQAAAEABACQABAAAAABQAAAAABAAQAAAAABAAQABAAABAAIAEAAIAAAMIgLABIgIgCgAM8hsIAAgsQAAgGgCgBQgBgCgEAAQgJgBAAALIAAArIgQAAIAAhBIAQAAIAAAIQADgFAEgCQAEgCAFAAQAIAAAEAEQAFAEAAAKIAAAwgAMBhsIAAhBIARAAIAABBgAKNhsIAAgsQAAgGgCgBQgCgCgDAAQgJgBAAALIAAArIgRAAIAAhBIAQAAIAAAIQADgFAEgCQAEgCAGAAQAIAAAEAEQAEAEAAAKIAAAwgAFvhsIAAgsQAAgGgCgBQgBgCgEAAQgJgBAAALIAAArIgQAAIAAhBIAQAAIAAAIQADgFAEgCQAEgCAFAAQAIAAAEAEQAFAEAAAKIAAAwgAE1hsIAAgsQAAgGgCgBQgCgCgDAAQgJgBAAALIAAArIgRAAIAAhBIAQAAIAAAIQADgFAEgCQAEgCAGAAQAIAAAEAEQAEAEAAAKIAAAwgAByhsIAAgtQAAgEgCgCQgBgCgEAAQgEAAgCACQgCADAAAGIAAAqIgRAAIAAgtQAAgEgCgCQgBgCgEAAQgDAAgDACQgCADAAAGIAAAqIgRAAIAAhBIAQAAIAAAHQADgFAEgCQAEgBAGAAQAFAAAEACQAEADACAFQACgFAEgDQAEgCAGAAQAIAAAEAFQAEAFAAAJIAAAvgAAYhsIAAhBIAQAAIAABBgAg6hsIAAhWIAQAAIAABWgAijhsIAAgsQAAgGgCgBQgCgCgDAAQgJgBAAALIAAArIgRAAIAAhWIARAAIAAAcIAAAAQAFgIALAAQAIAAAEAEQAEAEAAAKIAAAwgAlphsIAAhWIAwAAIAAAPIgfAAIAAAUIAdAAIAAAOIgdAAIAAAXIAgAAIAAAOgAmfhsIAAgTIAQAAIAAATgAm5hsIAAgtQAAgEgCgCQgBgCgEAAQgEAAgCACQgCADAAAGIAAAqIgRAAIAAgtQAAgEgCgCQgBgCgEAAQgDAAgDACQgCADAAAGIAAAqIgRAAIAAhBIAQAAIAAAHQADgFAEgCQAEgBAGAAQAFAAAEACQAEADACAFQACgFAEgDQAEgCAGAAQAIAAAEAFQAEAFAAAJIAAAvgAoThsIAAhBIAQAAIAABBgApmhsIAAhWIAQAAIAABWgArbhsIAAhBIAQAAIAAAJQACgFAEgDQAEgCAFAAIADAAIAAAQIgDAAIgCAAIgFAAIgEACIgDAEIgBAFIAAAngAvrhsIAAhWIARAAIAABWgAMBi1IAAgNIARAAIAAANgAAYi1IAAgNIAQAAIAAANgAoTi1IAAgNIAQAAIAAANgAlzjvIAAhWIAQAAIAAAHQADgEAEgDQADgBAFAAQAKAAAFAIQAFAHAAASQAAASgFAJQgFAHgKABQgFAAgDgCQgDgCgDgEIAAAAIAAAbgAlhk0QgBAFAAAKQAAALABAGQACAFAGAAQAFAAACgFQABgGAAgLQAAgKgBgFQgCgGgFABQgGgBgCAGgApqjvIAAgMIAFAAQAEAAACgDQACgCAAgEIgShBIASAAIAJAtIAJgtIAQAAIgPA8IgEAOQgCAEgDADQgDADgDABIgKABgAJPkFQgEgCgDgDQgDgEgBgEIgBgIIAAgCIARAAIAAAEIABAFIADADIAEABQAGAAACgEQACgDAAgJIAAgIIgCgGIgDgDIgFgBQgDAAgCACQgCADgBADIgPAAIADgvIAsAAIAAAOIgfAAIgCATQADgDAEgCQADgBAGAAQAGAAAEADQAEACACADQADAFABAEIABAKIgBANQgCAGgDAEQgDAEgFACQgFACgJABQgIgBgFgCgAHQkHQgFgEAAgJIAAgxIARAAIAAAtQAAAFACACQABACAEAAQAJAAAAgLIAAgrIAQAAIAABBIgQAAIAAgHQgDAEgEADQgEACgFAAQgIgBgEgEgAGekEQgFgDgDgEQgDgEgBgGIgBgQIABgOQACgGADgFQADgEAFgCQAEgCAIAAQAHAAAFABQAFADADAEQADAEABAHQABAGAAAIQAAAJgBAHQgCAGgDAEQgDAEgFADQgEACgHAAQgIAAgFgCgAGmk5QgCACgBACIgBAIIAAASIABAHQABADACABQACACADABQAFAAABgGQACgFAAgNQAAgMgCgFQgBgFgFAAQgDAAgCACgAAMkGQgFgDgDgEQgCgFgBgHIAAgMIABgMQABgHACgEQADgEAFgDQAFgDAJAAQAHAAAEACQAFACADAEQACAFABAGIABAOIAAADIghAAIABALIABAFIADADQAAAAABABQAAAAABAAQAAAAABAAQAAABABAAQAEgBACgDQACgCAAgHIAPAAQAAAMgGAFQgFAHgMAAQgJAAgFgEgAAWk6IgDADIgBAEIgBAFIAAACIARAAIAAgGIgBgFIgDgDIgEgBIgEABgAgmkEQgEgBgDgDQgDgDgBgEIgBgIIAAgCIAPAAIAAACQAAAEACADQACADAFAAQADgBADgCQACgCAAgDQAAgBAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAIgEgCIgMgFQgHgCgDgEQgEgFAAgHIACgHQABgEADgCQADgDAEgCQAFgBAGAAQAMAAAFAFQAFAEAAAJIAAADIgPAAQAAgFgBgCQgCgDgEAAQgDAAgCACQgDACAAADQAAABAAAAQAAABABAAQAAABAAAAQAAABABABIAGACIAJAEQAIACAEAFQADAEAAAIQAAAEgCAFQgCADgDACQgDADgFABQgEABgFABQgHgBgFgBgAhhkEQgDgCgCgDIgDgGIAAgGIABgHIADgHIAFgDIAHgDIAJgDQAEAAABgCQACgCAAgDQAAgEgCgCQgCgCgEAAQgEAAgCADQgBABAAAEIAAACIgPAAIAAgCQAAgFABgEQACgEADgCIAIgDIAIgBIAMABQAFACACADQADACABAEIABAHIAAApIACAGIgQAAIgCgGQgDAEgEACQgEABgGABQgEgBgDgBgAhNkiIgDABQgFABgCADQgDACAAAFQAAADACADQABADAEAAIADgBIADgCIADgDIABgFIAAgNgAjMkEQgFgCgDgEQgDgDgCgHQgBgGAAgLQAAgJACgHQACgHADgDQAEgEAEgCQAFgBAGAAQAMAAAFAGQAGAHAAAMIgQAAIAAgFIgBgEIgCgDQgBAAAAgBQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAIgDAEIgBAHIAAAUIABAHIADAEQAAAAABABQAAAAABAAQAAAAABAAQABABAAAAQAFAAABgEQACgEAAgHIAQAAQAAAMgFAGQgGAIgNAAQgHgBgEgBgAk0kHQgEgEAAgJIAAgxIAQAAIAAAtQAAAFACACQACACADAAQAJAAAAgLIAAgrIARAAIAABBIgQAAIAAgHQgDAEgEADQgEACgGAAQgIgBgEgEgAndkEQgFgDgDgEQgDgEgBgGIgBgQIABgOQACgGADgFQADgEAFgCQAEgCAIAAQAHAAAFABQAFADADAEQADAEABAHQABAGAAAIQAAAJgBAHQgCAGgDAEQgDAEgFADQgEACgHAAQgIAAgFgCgAnVk5QgCACgBACIgBAIIAAASIABAHQABADACABQACACADABQAFAAABgGQACgFAAgNQAAgMgCgFQgBgFgFAAQgDAAgCACgAotkEQgEgBgDgDQgDgDgBgEIgBgIIAAgCIAPAAIAAACQAAAEACADQACADAFAAQADgBADgCQACgCAAgDQAAgBAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAIgEgCIgMgFQgHgCgDgEQgEgFAAgHIACgHQABgEADgCQADgDAEgCQAFgBAGAAQAMAAAFAFQAFAEAAAJIAAADIgPAAQAAgFgBgCQgCgDgEAAQgDAAgCACQgDACAAADQAAABAAAAQAAABABAAQAAABAAAAQAAABABABIAGACIAJAEQAIACAEAFQADAEAAAIQAAAEgCAFQgCADgDACQgDADgFABQgEABgFABQgHgBgFgBgAqckEQgDgCgBgDIgDgGIgBgGIABgHIADgHIAFgDIAHgDIAKgDQAEAAABgCQABgCAAgDQAAgEgBgCQgCgCgEAAQgEAAgCADQgCABAAAEIAAACIgPAAIAAgCQAAgFACgEQACgEADgCIAHgDIAJgBIAMABQAEACADADQACACABAEIABAHIABApIABAGIgQAAIgCgGQgDAEgEACQgDABgGABQgFgBgDgBgAqHkiIgEABQgFABgCADQgCACAAAFQAAADABADQACADADAAIAEgBIADgCIACgDIABgFIAAgNgArZkKQgFgJAAgSQAAgSAFgHQAFgIAKAAQAFAAADABQADADADADIAAAAIAAgbIARAAIAABWIgQAAIAAgHQgDAEgEADQgDACgFAAQgKgBgFgHgArMk0QgBAFAAAKQAAALABAGQACAFAFAAQAGAAACgFQABgGAAgLQAAgKgBgFQgCgGgGABQgFgBgCAGgAslkEQgFgDgDgEQgDgGgBgIQgCgHAAgMIABgRQABgIACgGQADgHAFgDQAGgEAJAAQAIAAAFACQAFADADAEQADAGABAHQACAIAAAMIgBARQAAAHgDAHQgDAGgFADQgFAFgKAAQgIAAgFgCgAsdlMIgCAEIgCAJIAAAkIACAIIADAEIAEACQABAAAAgBQABAAABAAQAAAAABAAQAAgBABAAQACgBABgDIABgJIAAgkQAAgFgCgEIgCgDIgFgCIgFACgAtkkKQgGgGAAgMIAAgBIAQAAQAAAIACADQACAEAGABIAFgCIADgDIABgEIAAgGIAAgFIgCgEIgDgDQgCgCgEAAIgGAAIAAgLIAGAAIAFgBIADgDIABgFIABgEQAAgHgCgCQgCgDgFAAIgEACIgDACIgBAEIAAAGIgQAAQAAgMAGgHQAHgGAMAAQALAAAHAGQAGAEAAAMQAAAIgDAEQgEAFgGACIAAAAQAJABADAFQADAGAAAIIgBAJQgBAFgDADQgDAEgFACQgGACgJABQgMAAgGgIgAE/kEQgDgBgBgCIgDgFIAAgIIAAglIgJAAIAAgMIAJAAIAAgSIAQAAIAAASIAKAAIAAAMIgKAAIAAAjQAAAEACABQAAAAAAABQABAAAAAAQABAAABAAQAAAAABAAIAEAAIAAAMIgLABIgIgBgAwpkEQgDgBgCgCIgCgFIgBgIIAAglIgIAAIAAgMIAIAAIAAgSIARAAIAAASIAKAAIAAAMIgKAAIAAAjQAAAEABABQAAAAABABQAAAAABAAQAAAAABAAQABAAABAAIAEAAIAAAMIgLABIgIgBgAOEkEIgOgaIgGAHIAAATIgQAAIAAhWIAQAAIAAAtIABAAIAQgYIATAAIgTAaIAVAngANFkEIAAgsQAAgGgCgBQgBgCgEAAQgJAAAAAKIAAArIgQAAIAAhBIAQAAIAAAIQADgFAEgCQAEgCAFAAQAIAAAEAEQAFAFAAAJIAAAwgAMKkEIAAhBIARAAIAABBgAKzkEQAAgFACgGQABgFACgEQACgEAEgFIAIgIIAMgMIACgDIACgGIAAgFQAAgLgIAAIgGACIgCADIgCAGIAAAGIgRAAIAAgDQAAgMAHgGQAGgHAOAAQANAAAGAGQAGAGAAALIAAAIIgDAGIgEAHIgQAPIgGAHIgCAFIAgAAIAAAOgAKZkEIAAgRIgeAAIAAgPIAcg1IASAAIAAA2IAIAAIAAAOIgIAAIAAARgAKIkjIARAAIAAggIAAAAgAIGkEIAAhBIAQAAIAAAJQACgEAEgDQAEgDAFAAIADAAIAAAQIgDgBIgCAAIgFABIgEACIgDAEIgBAFIAAAngAF1kEIAAg1IgJAAIAAgMIAJAAIAAgHQAAgEABgDIADgFQADgCADAAIAHgBIAJAAIAAAMIgCgBIgBAAQgEABgBABQgBAAAAABQAAAAAAAAQgBABAAABQAAAAAAABIAAAFIAKAAIAAAMIgKAAIAAA1gAEakEIAAhBIAQAAIAABBgAEAkEIAAgtQAAgEgCgCQgBgCgEAAQgEAAgCACQgCADAAAGIAAAqIgRAAIAAgtQAAgEgCgCQgBgCgEAAQgDAAgDACQgCADAAAGIAAAqIgRAAIAAhBIAQAAIAAAHQADgEAEgDQAEgBAGAAQAFAAAEADQAEACACAFQACgFAEgCQAEgDAGAAQAIAAAEAFQAEAFAAAJIAAAvgACmkEIAAhBIAQAAIAABBgABwkEIAAhWIARAAIAABIIAfAAIAAAOgAA6kEIAAgSIAQAAIAAASgAiBkEIAAgsQAAgGgCgBQgCgCgDAAQgJAAAAAKIAAArIgRAAIAAhWIARAAIAAAcIAAAAQAFgIALAAQAIAAAEAEQAEAFAAAJIAAAwgAj+kEIAAhBIAQAAIAAAJQADgEADgDQAEgDAFAAIADAAIAAAQIgCgBIgDAAIgEABIgEACIgDAEIgBAFIAAAngAmskEIAAg1IgJAAIAAgMIAJAAIAAgHQAAgEABgDIADgFQADgCADAAIAHgBIAJAAIAAAMIgCgBIgBAAQgEABgBABQgBAAAAABQAAAAAAAAQgBABAAABQAAAAAAABIAAAFIAKAAIAAAMIgKAAIAAA1gAuckEIAAgsQAAgGgCgBQgCgCgDAAQgJAAAAAKIAAArIgRAAIAAhBIAQAAIAAAIQADgFAEgCQAEgCAGAAQAIAAAEAEQAEAFAAAJIAAAwgAvXkEIAAhBIAQAAIAABBgAvykEIAAgsQAAgGgCgBQgBgCgEAAQgJAAAAAKIAAArIgQAAIAAhWIAQAAIAAAcIABAAQAEgIALAAQAIAAAEAEQAFAFAAAJIAAAwgAxPkEIAAhBIARAAIAABBgAx0kEIgJguIAAAAIgIAuIgTAAIgOhBIAQAAIAIAvIAIgvIASAAIAJAvIAIgvIAPAAIgOBBgAMKlMIAAgOIARAAIAAAOgAEalMIAAgOIAQAAIAAAOgACmlMIAAgOIAQAAIAAAOgAvXlMIAAgOIAQAAIAAAOgAxPlMIAAgOIARAAIAAAOgAM+mLQgFgEAAgJIAQAAQAAADACADIADABIADAAQAFAAACgDQACgDAAgFIAAgIQgDADgEACQgDADgEAAQgKAAgFgIQgFgHAAgTIABgLQAAgFACgFQACgFAEgDQAFgDAGAAIAHACQAEACADAEIAAgGIAQAAIAAA9QAAANgHAFQgGAHgOgBQgLAAgGgEgANNnQIgDADIgBAIIgBALIABAGIABAGQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQABAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAIADgDIABgGIABgIQAAgLgCgGQgCgEgFAAIgEABgAR6mjQgFgIAAgSQAAgSAFgHQAEgIALAAQAEAAAEACQADACACADIABAAIAAgbIAQAAIAABWIgQAAIAAgHQgDAFgDACQgDACgFAAQgLAAgEgJgASHnMQgCAFAAAKQAAAMACAFQACAFAFAAQAFAAACgFQACgFAAgMQAAgKgCgFQgCgGgFABQgFgBgCAGgARJmdQgFgEgDgEQgCgGgBgGIAAgMIABgMQABgHACgEQADgEAFgDQAFgDAJAAQAHAAAEACQAFACADAEQACAFABAGIABANIAAAEIghAAIABALIABAFIADADQAAAAABABQAAAAAAAAQABAAABAAQAAABABAAQAEAAACgEQACgCAAgHIAPAAQAAAMgGAFQgFAHgMAAQgJAAgFgDgARTnSIgDADIgBAFIgBAEIAAACIARAAIAAgGIgBgFIgDgDIgEgBIgEABgAPtmdQgFgEgDgEQgCgGgBgGIAAgMIABgMQABgHACgEQADgEAFgDQAFgDAJAAQAHAAAEACQAFACADAEQACAFABAGIABANIAAAEIghAAIABALIABAFIADADQAAAAABABQAAAAAAAAQABAAABAAQAAABABAAQAEAAACgEQACgCAAgHIAPAAQAAAMgGAFQgFAHgMAAQgJAAgFgDgAP3nSIgDADIgBAFIgBAEIAAACIARAAIAAgGIgBgFIgDgDIgEgBIgEABgAOYmcQgEgCgDgCQgDgCgBgEIgBgJIAAgCIAPAAIAAACQAAAEACADQACADAFAAQADAAADgDQACgCAAgDQAAgBAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAIgEgCIgMgFQgHgCgDgEQgEgFAAgHIACgHQABgEADgDQADgCAEgBQAFgCAGAAQAMAAAFAFQAFAEAAAJIAAADIgPAAQAAgFgBgCQgCgDgEAAQgDAAgCACQgDACAAADQAAABAAAAQAAABABAAQAAABAAAAQAAABABABIAGACIAJAEQAIADAEAEQADAEAAAIQAAAEgCAFQgCADgDACQgDADgFABQgEABgFABQgHgBgFgBgAMMmdQgFgEgDgEQgCgGgBgGIAAgMIABgMQABgHACgEQADgEAFgDQAFgDAJAAQAHAAAEACQAFACADAEQACAFABAGIABANIAAAEIghAAIABALIABAFIADADQAAAAABABQAAAAAAAAQABAAABAAQAAABABAAQAEAAACgEQACgCAAgHIAPAAQAAAMgGAFQgFAHgMAAQgJAAgFgDgAMWnSIgDADIgBAFIgBAEIAAACIARAAIAAgGIgBgFIgDgDIgEgBIgEABgAKVmdQgFgEgDgEQgCgGgBgGIAAgMIABgMQABgHACgEQADgEAFgDQAFgDAJAAQAHAAAEACQAFACADAEQACAFABAGIABANIAAAEIghAAIABALIABAFIADADQAAAAABABQAAAAABAAQAAAAABAAQAAABABAAQAEAAACgEQACgCAAgHIAPAAQAAAMgGAFQgFAHgMAAQgJAAgFgDgAKfnSIgDADIgBAFIgBAEIAAACIARAAIAAgGIgBgFIgDgDIgEgBIgEABgAJomcQgDgCgDgFIAAAHIgQAAIAAhWIAQAAIAAAbIABAAQACgDADgCQAEgCAEAAQALAAAEAIQAFAHAAASQAAASgFAIQgEAJgLAAQgFAAgDgCgAJknMQgCAFAAAKQAAAMACAFQACAFAFAAQAFAAACgFQACgFAAgMQAAgKgCgFQgCgGgFABQgFgBgCAGgAHrmcQgFgCgDgCQgCgCgBgEIgBgJIAAgCIAOAAIAAACQAAAEADADQACADAEAAQAEAAACgDQACgCAAgDQAAgBAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAIgFgCIgLgFQgHgCgEgEQgDgFAAgHIABgHQACgEADgDQACgCAFgBQAEgCAHAAQALAAAFAFQAGAEAAAJIAAADIgPAAQAAgFgCgCQgBgDgEAAQgDAAgDACQgCACAAADQAAABAAAAQAAABAAAAQAAABABAAQAAABAAABIAGACIAKAEQAIADADAEQADAEAAAIQAAAEgCAFQgBADgEACQgDADgEABQgEABgGABQgHgBgEgBgAGrmfQgEgEAAgJIAAgwIAQAAIAAAsQAAAFACACQACACADAAQAJAAAAgLIAAgqIARAAIAABAIgQAAIAAgHQgDAEgEADQgEACgGAAQgIgBgEgEgADmmcQgEgCgDgEQgEgDgBgHQgCgGAAgLQAAgJACgHQACgHAEgDQADgEAFgBQAFgCAGAAQALAAAGAGQAGAHAAALIgQAAIAAgEIgCgEIgCgDQAAAAgBgBQAAAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBABAAAAIgDAEIgCAHIAAAUIACAHIACAEQABAAAAABQABAAAAAAQABAAABAAQAAABABAAQAEAAACgEQACgEAAgHIAQAAQAAAMgGAGQgGAIgNAAQgGgBgFgBgAClmfQgFgEAAgJIAAgwIARAAIAAAsQAAAFACACQABACAEAAQAJAAAAgLIAAgqIAQAAIAABAIgQAAIAAgHQgDAEgEADQgEACgFAAQgIgBgEgEgABpmjQgFgIAAgSQAAgSAFgHQAFgIAKAAQAFAAADACQADACADADIAAAAIAAgbIARAAIAABWIgQAAIAAgHQgDAFgEACQgDACgFAAQgKAAgFgJgAB2nMQgBAFAAAKQAAAMABAFQACAFAFAAQAGAAACgFQABgFAAgMQAAgKgBgFQgCgGgGABQgFgBgCAGgAA5mcQgFgCgDgFQgDgEgBgGIgBgQIABgOQABgGADgFQADgEAFgCQAFgCAHAAQAHgBAFADQAFACADAEQADAFABAGQACAGAAAIQAAAJgCAHQgBAGgDAEQgDAEgFADQgFACgHAAQgHAAgFgCgABAnRQgCABAAADIgCAHIAAATIACAHQAAADACABQACADADAAQAFAAACgGQACgFAAgNQAAgLgCgGQgCgFgFAAQgDAAgCACgAkHmcQgFgDgEgEQgDgFgBgJQgBgHAAgMIABgRQAAgIADgGQACgHAGgDQAFgEAKAAQAHAAAFADQAGACADAEQADAGABAHQABAIAAAMIAAARQgBAHgDAHQgCAGgGADQgFAFgJAAQgIAAgFgCgAj/nkIgDAEIgBAJIAAAkIABAIIADAFIAFABQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQACgCABgDIABgIIAAglQAAgEgBgEIgDgDIgEgBIgFABgAl1maIAbhaIANAAIgbBagAmdmcQgFgDgEgEQgDgFgBgJQgBgHAAgMIABgRQAAgIADgGQACgHAGgDQAFgEAKAAQAHAAAFADQAGACADAEQADAGABAHQABAIAAAMIAAARQgBAHgDAHQgCAGgGADQgFAFgJAAQgIAAgFgCgAmVnkIgDAEIgBAJIAAAkIABAIIADAFIAFABQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQACgCABgDIABgIIAAglQAAgEgBgEIgDgDIgEgBIgFABgAndmiQgGgGAAgMIAAgBIARAAQAAAIACADQACAFAFAAIAFgBIADgEIABgEIABgGIgBgEIgBgGIgEgCQgCgCgDAAIgGAAIAAgLIAFAAIAFgBIADgDIACgFIAAgEQAAgGgCgDQgCgCgEAAIgFABIgCACIgCAEIAAAGIgQAAQAAgMAHgHQAGgGAMAAQAMAAAGAGQAHAEAAAMQAAAIgEAEQgDAFgGACIAAAAQAIABAEAGQADAFAAAIIgBAJQgBAEgDAEQgDAEgGACQgFACgJABQgNAAgGgIgAoLmaIAbhaIANAAIgbBagAoxmbQgEgBgDgDQgDgCgCgEQgCgFgBgGIARAAQAAAFACACQABAEAFAAQADAAACgCIAEgFIABgHIAAgMQgCADgEACQgEACgGAAQgFAAgEgCQgEgCgDgDQgCgEgBgFQgCgFAAgFQAAgQAHgHQAHgIAOAAQAJAAAFAEQAFADADAFQADAGABAHIABAPIgBASQAAAIgDAGQgDAHgGADQgFAFgLAAIgJgBgAosnkIgDADIgBAGIAAAGQAAAJACAEQACADAFAAQAFAAACgDQADgEAAgJIgBgGIgBgGIgDgDIgFgBIgFABgAqGmcQgFgCgDgFQgDgEgBgGIgBgQIABgOQACgGADgFQADgEAFgCQAEgCAIAAQAHgBAFADQAFACADAEQADAFABAGQABAGAAAIQAAAJgBAHQgCAGgDAEQgDAEgFADQgEACgHAAQgIAAgFgCgAp+nRQgCABgBADIgBAHIAAATIABAHQABADACABQACADADAAQAFAAABgGQACgFAAgNQAAgLgCgGQgBgFgFAAQgDAAgCACgAr7mcQgFgDgEgEQgDgFgBgJQgBgHAAgMIABgRQAAgIADgGQACgHAGgDQAFgEAKAAQAHAAAFADQAGACADAEQADAGABAHQABAIAAAMIAAARQgBAHgDAHQgCAGgGADQgFAFgJAAQgIAAgFgCgArznkIgDAEIgBAJIAAAkIABAIIADAFIAFABQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQACgCABgDIABgIIAAglQAAgEgBgEIgDgDIgEgBIgFABgAtrmcQgFgDgEgEQgDgFgBgJQgBgHAAgMIABgRQAAgIADgGQACgHAGgDQAFgEAKAAQAHAAAFADQAGACADAEQADAGABAHQABAIAAAMIAAARQgBAHgDAHQgCAGgGADQgFAFgJAAQgIAAgFgCgAtjnkIgDAEIgBAJIAAAkIABAIIADAFIAFABQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQACgCABgDIABgIIAAglQAAgEgBgEIgDgDIgEgBIgFABgAvZmaIAbhaIANAAIgbBagAwDmeQgFgDgDgFQgDgGgBgHIgBgPIABgRQABgJACgGQADgHAGgEQAFgEALAAIAJABQAEABADADQAEACACAFQACADAAAHIgRAAQAAgFgCgDQgBgCgFAAQgDAAgCABQgCABgBADQgCADAAAEIAAANQACgDAEgCQAEgCAGAAQAGAAAEACQADABADAEIAEAIIABAMQAAAOgHAHQgGAJgPAAQgJgBgFgDgAv7nDQgCAEAAAJIAAAHIABAEQAAABABABQAAAAAAABQABAAAAAAQABABAAAAQACACADAAQADAAACgCIADgEIABgEIAAgHQAAgJgCgEQgCgDgFgBQgFABgCADgAxvmaIAbhaIANAAIgbBagAyfmiQgGgGAAgMIAAgBIARAAQAAAIACADQACAFAFAAIAFgBIADgEIABgEIABgGIgBgEIgBgGIgEgCQgCgCgDAAIgGAAIAAgLIAFAAIAFgBIADgDIACgFIAAgEQAAgGgCgDQgCgCgEAAIgFABIgCACIgCAEIAAAGIgQAAQAAgMAHgHQAGgGAMAAQAMAAAGAGQAHAEAAAMQAAAIgEAEQgDAFgGACIAAAAQAIABAEAGQADAFAAAIIgBAJQgBAEgDAEQgDAEgGACQgFACgJABQgNAAgGgIgAPNmcQgDgBgBgCIgDgFIAAgIIAAglIgJAAIAAgLIAJAAIAAgTIAQAAIAAATIAKAAIAAALIgKAAIAAAjQAAAEACABQAAAAAAABQABAAAAAAQABAAABAAQAAAAABAAIAEAAIAAAMIgLABIgIgBgAIgmcQgDgBgCgCIgCgFIgBgIIAAglIgIAAIAAgLIAIAAIAAgTIARAAIAAATIAKAAIAAALIgKAAIAAAjQAAAEABABQAAAAABABQAAAAABAAQAAAAABAAQABAAABAAIAEAAIAAAMIgLABIgIgBgAEcmcQgDgBgCgCIgCgFIgBgIIAAglIgIAAIAAgLIAIAAIAAgTIARAAIAAATIAKAAIAAALIgKAAIAAAjQAAAEABABQAAAAABABQAAAAABAAQAAAAABAAQABAAABAAIAEAAIAAAMIgLABIgIgBgAqomcQgDgBgBgCIgDgFIAAgIIAAglIgJAAIAAgLIAJAAIAAgTIAQAAIAAATIAKAAIAAALIgKAAIAAAjQAAAEACABQAAAAAAABQABAAAAAAQABAAABAAQAAAAABAAIAEAAIAAAMIgLABIgIgBgAQamcIAAhAIAQAAIAAAIQADgEADgDQAEgDAFAAIADAAIAAAQIgCgBIgDAAIgEABIgEACIgDAEIgBAFIAAAngAN0mcIAAhAIARAAIAABAgALdmcIAAhAIAQAAIAAAIQADgEADgDQAEgDAFAAIADAAIAAAQIgCgBIgDAAIgEABIgEACIgDAEIgBAFIAAAngAGNmcIAAgtQAAgEgBgDQgCgBgDAAQgEgBgDADQgCADAAAFIAAArIgRAAIAAgtQAAgEgBgDQgCgBgDAAQgEgBgCADQgDADAAAFIAAArIgQAAIAAhAIAQAAIAAAGQADgFAEgBQAEgCAFAAQAGAAAEADQAEACABAFQACgFAEgCQAFgDAGAAQAIAAAEAFQAEAFAAAJIAAAvgAAImcIAAhAIAQAAIAAAIQACgEAEgDQAEgDAFAAIADAAIAAAQIgDgBIgCAAIgFABIgEACIgDAEIgBAFIAAAngAgzmcIAAhWIAeAAQAHAAAEACQAFADACADQADAEAAAFQACAEAAAFQAAAGgCAFQgBAGgEACIgJAGQgFABgGAAIgJAAIAAAigAginLIAIAAQAFAAADgDQADgDAAgHQAAgGgDgDQgCgEgHAAIgHAAgAhpmcIAAgSIAQAAIAAASgAiRmcIAAg8IgRAAIAAgLIABAAQAJAAAFgEQAFgDABgHIANAAIAABVgAjdmcQAAgFABgFQABgGADgEQACgEADgEIAJgJIALgMIADgDIABgGIAAgFQAAgLgIABIgFABIgDADIgBAGIgBAGIgQAAIAAgEQAAgLAGgHQAHgGANAAQANAAAHAGQAGAGAAALIgBAIIgCAGIgEAHIgQAPIgGAHIgDAFIAgAAIAAAOgAlNmcQAAgFABgFQABgGADgEQACgEADgEIAJgJIALgMIADgDIABgGIAAgFQAAgLgIABIgFABIgDADIgBAGIgBAGIgQAAIAAgEQAAgLAGgHQAHgGANAAQANAAAHAGQAGAGAAALIgBAIIgCAGIgEAHIgQAPIgGAHIgDAFIAgAAIAAAOgAtBmcQAAgFABgFQABgGADgEQACgEADgEIAJgJIALgMIADgDIABgGIAAgFQAAgLgIABIgFABIgDADIgBAGIgBAGIgQAAIAAgEQAAgLAGgHQAHgGANAAQANAAAHAGQAGAGAAALIgBAIIgCAGIgEAHIgQAPIgGAHIgDAFIAgAAIAAAOgAuxmcQAAgFABgFQABgGADgEQACgEADgEIAJgJIALgMIADgDIABgGIAAgFQAAgLgIABIgFABIgDADIgBAGIgBAGIgQAAIAAgEQAAgLAGgHQAHgGANAAQANAAAHAGQAGAGAAALIgBAIIgCAGIgEAHIgQAPIgGAHIgDAFIAgAAIAAAOgAxHmcQAAgFABgFQABgGADgEQACgEADgEIAJgJIALgMIADgDIABgGIAAgFQAAgLgIABIgFABIgDADIgBAGIgBAGIgQAAIAAgEQAAgLAGgHQAHgGANAAQANAAAHAGQAGAGAAALIgBAIIgCAGIgEAHIgQAPIgGAHIgDAFIAgAAIAAAOgAN0nkIAAgPIARAAIAAAPgADmogIAAhUIAQAAIAAAGQADgEADgCQADgCAFAAQALAAAEAIQAFAHAAASQAAATgFAHQgEAJgLgBQgEAAgEgBQgDgCgCgEIgBAAIAAAagAD4pkQgCAFAAAKQAAAMACAEQACAGAFAAQAFAAACgGQACgEAAgMQAAgKgCgFQgCgFgFAAQgFAAgCAFgAicogIAAhUIAQAAIAAAGQADgEAEgCQADgCAFAAQAKAAAFAIQAFAHAAASQAAATgFAHQgFAJgKgBQgFAAgDgBQgDgCgDgEIAAAAIAAAagAiKpkQgBAFAAAKQAAAMABAEQACAGAGAAQAFAAACgGQABgEAAgMQAAgKgBgFQgCgFgFAAQgGAAgCAFgAM7o0QgFgCgDgFQgDgEgBgGIgBgQIABgOQACgGADgFQADgEAFgCQAEgCAIAAQAHAAAFACQAFACADAEQADAFABAGQABAGAAAIQAAAJgBAHQgCAGgDAEQgDAEgFADQgEABgHAAQgIAAgFgBgANDppQgCABgBADIgBAHIAAATIABAHQABADACACQACACADAAQAFgBABgFQACgFAAgNQAAgLgCgGQgBgFgFAAQgDAAgCACgAKWo7QgFgHAAgTQAAgSAFgHQAFgIAKAAQAFAAADACQADACADADIAAAAIAAgbIARAAIAABWIgQAAIAAgHQgDAFgEACQgDABgFAAQgKABgFgJgAKjpkQgBAFAAAKQAAAMABAEQACAGAFAAQAGAAACgGQABgEAAgMQAAgKgBgFQgCgFgGAAQgFAAgCAFgAJlo1QgFgEgCgEQgDgGAAgFIgBgNIABgMQABgHADgEQADgEAFgDQAFgDAIAAQAHAAAFACQAEACADAEQADAFABAGIABANIAAAEIghAAIAAALIACAFIACADQABAAAAABQAAAAABAAQAAAAABAAQABABAAAAQAEAAACgEQACgCABgHIAPAAQgBAMgFAFQgGAHgMgBQgJAAgFgCgAJvpqIgCADIgCAFIAAAEIAAACIARAAIgBgGIgBgFIgCgDIgFgBIgEABgAIzo0QgFgCgDgCQgCgCgBgEIgBgJIAAgCIAOAAIAAACQAAAEADADQACACAEABQAEAAACgCQACgDAAgDQAAgBAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAIgFgDIgLgEQgHgCgEgEQgDgFAAgHIABgHQACgEADgDQACgCAFgBQAEgCAHAAQALAAAFAEQAGAFAAAJIAAADIgPAAQAAgFgCgCQgBgDgEAAQgDAAgDACQgCACAAADQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAIAGADIAKAEQAIACADAFQADAEAAAIQAAAEgCAFQgBADgEACQgDADgEABQgEABgGAAQgHAAgEgBgAH3o0QgDgBgBgEIgDgFIgBgHIABgIIADgGIAFgDIAHgDIAKgDQAEgBABgBQABgCAAgDQAAgDgBgDQgCgCgEAAQgEAAgCADQgCABAAAFIAAABIgPAAIAAgBQAAgGACgDQACgEADgDIAHgDIAJgBIAMABQAEABADADQACADABAEIABAIIABAoIABAGIgQAAIgCgHQgDAFgEACQgDABgGAAQgFAAgDgBgAIMpSIgEABQgFABgCACQgCADAAAFQAAADABADQACACADABIAEgBIADgCIACgDIABgEIAAgOgAGMo0QgEgBgDgFQgEgEgBgGQgCgHAAgKQAAgJACgHQACgHAEgDQADgEAFgBQAFgCAGAAQALAAAGAGQAGAHAAALIgQAAIAAgEIgCgEIgCgDQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBABAAAAIgDAEIgCAHIAAAUIACAHIACAEQABAAAAABQABAAAAAAQABAAABAAQAAABABAAQAEgBACgDQACgEAAgIIAQAAQAAANgGAGQgGAIgNgBQgGAAgFgBgAElo3QgFgEAAgKIAAgvIARAAIAAAsQAAAFACACQABACAEAAQAJAAAAgLIAAgqIAQAAIAABAIgQAAIAAgHQgDAEgEADQgEABgFAAQgIAAgEgEgACho0QgFgCgDgCQgCgCgBgEIgBgJIAAgCIAOAAIAAACQAAAEADADQACACAEABQAEAAACgCQACgDAAgDQAAgBAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAIgFgDIgLgEQgHgCgEgEQgDgFAAgHIABgHQACgEADgDQACgCAFgBQAEgCAHAAQALAAAFAEQAGAFAAAJIAAADIgPAAQAAgFgCgCQgBgDgEAAQgDAAgDACQgCACAAADQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAIAGADIAKAEQAIACADAFQADAEAAAIQAAAEgCAFQgBADgEACQgDADgEABQgEABgGAAQgHAAgEgBgABEo1QgFgEgDgEQgCgGgBgFIAAgNIABgMQABgHACgEQADgEAFgDQAFgDAJAAQAHAAAEACQAFACADAEQACAFABAGIABANIAAAEIghAAIABALIABAFIADADQAAAAABABQAAAAABAAQAAAAABAAQAAABABAAQAEAAACgEQACgCAAgHIAPAAQAAAMgGAFQgFAHgMgBQgJAAgFgCgABOpqIgDADIgBAFIgBAEIAAACIARAAIAAgGIgBgFIgDgDIgEgBIgEABgAjko0QgFgDgEgEQgDgFgBgIQgBgJAAgLIABgQQAAgJADgGQACgGAGgEQAFgEAKAAQAHAAAFADQAGACADAEQADAGABAHQABAIAAALIAAASQgBAHgDAHQgCAGgGAEQgFADgJAAQgIAAgFgBgAjcp8IgDAEIgBAJIAAAkIABAIIADAFIAFABQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQACgCABgDIABgJIAAgkQAAgFgBgDIgDgDIgEgBIgFABgAkeo1QgFgCgDgEQgCgDgBgEIgBgIIAAgDIAQAAIABAGIABAEIACAEIAFABQAFAAADgFQACgDAAgJIgBgIIgBgGIgDgDIgFgBQgEAAgCACQgCADAAADIgQAAIADguIAtAAIAAANIggAAIgBATQACgDAEgBQAEgCAFAAQAHAAAEADQAEACACADQACAFABAEIABAKIgBANQgBAGgDAEQgDAEgGACQgFACgIAAQgIAAgFgCgAlWo2QgFgDgDgFQgDgGgBgHIgBgPIABgRQABgJACgHQADgGAGgEQAFgEALAAIAJABQAEABADADQAEACACAFQACADAAAHIgRAAQAAgFgCgDQgBgCgFAAQgDAAgCABQgCABgBADQgCAEAAADIAAANQACgDAEgCQAEgCAGAAQAGAAAEACQADACADAEIAEAHIABAMQAAAOgHAHQgGAJgPgBQgJAAgFgDgAlOpbQgCAEAAAJIAAAHIABAEQAAABABABQAAAAABABQAAAAAAAAQABABAAAAQACABADABQADgBACgBIADgEIABgEIAAgHQAAgJgCgEQgCgDgFgBQgFABgCADgAmOo2QgFgDgDgFQgDgGgBgHIgBgPIABgRQABgJACgHQADgGAGgEQAFgEALAAIAJABQAEABADADQAEACACAFQACADAAAHIgRAAQAAgFgCgDQgBgCgFAAQgDAAgCABQgCABgBADQgCAEAAADIAAANQACgDAEgCQAEgCAGAAQAGAAAEACQADACADAEIAEAHIABAMQAAAOgHAHQgGAJgPgBQgJAAgFgDgAmGpbQgCAEAAAJIAAAHIABAEQAAABABABQAAAAAAABQABAAAAAAQABABAAAAQACABADABQADgBACgBIADgEIABgEIAAgHQAAgJgCgEQgCgDgFgBQgFABgCADgArQo0QgFgCgDgFQgDgEgBgGIgBgQIABgOQABgGADgFQADgEAFgCQAFgCAHAAQAHAAAFACQAFACADAEQADAFABAGQACAGAAAIQAAAJgCAHQgBAGgDAEQgDAEgFADQgFABgHAAQgHAAgFgBgArJppQgCABAAADIgCAHIAAATIACAHQAAADACACQACACADAAQAFgBACgFQACgFAAgNQAAgLgCgGQgCgFgFAAQgDAAgCACgAsko0QgFgDgDgEQgDgFgBgIQgCgJAAgLIABgQQABgJACgGQADgGAFgEQAGgEAJAAQAIAAAFADQAFACADAEQADAGABAHQACAIAAALIgBASQAAAHgDAHQgDAGgFAEQgFADgKAAQgIAAgFgBgAscp8IgCAEIgCAJIAAAkIACAIIADAFIAEABQABAAAAgBQABAAABAAQAAAAABAAQAAgBABAAQACgCABgDIABgJIAAgkQAAgFgCgDIgCgDIgFgBIgFABgAtco0QgFgDgDgEQgDgFgBgIQgCgJAAgLIABgQQABgJACgGQADgGAFgEQAGgEAJAAQAIAAAFADQAFACADAEQADAGABAHQACAIAAALIgBASQAAAHgDAHQgDAGgFAEQgFADgKAAQgIAAgFgBgAtUp8IgCAEIgCAJIAAAkIACAIIADAFIAEABQABAAAAgBQABAAABAAQAAAAABAAQAAgBABAAQACgCABgDIABgJIAAgkQAAgFgCgDQAAAAAAgBQgBgBAAAAQAAAAgBgBQAAAAAAAAIgFgBIgFABgAuVo2QgGgDgDgFQgCgGgBgHIgBgPIAAgRQABgJADgHQACgGAGgEQAGgEAKAAIAJABQAFABADADQADACACAFQACADAAAHIgQAAQAAgFgCgDQgCgCgEAAQgEAAgCABQgCABgBADQgBAEAAADIgBANQADgDAEgCQAEgCAFAAQAGAAAEACQAEACACAEIAEAHIABAMQAAAOgGAHQgHAJgOgBQgJAAgFgDgAuOpbQgCAEAAAJIAAAHIACAEQAAABAAABQABAAAAABQAAAAABAAQAAABABAAQACABADABQADgBACgBIACgEIACgEIAAgHQAAgJgCgEQgCgDgFgBQgGABgCADgAvNo2QgGgDgDgFQgCgGgBgHIgBgPIAAgRQABgJADgHQACgGAGgEQAGgEAKAAIAJABQAFABADADQADACACAFQACADAAAHIgQAAQAAgFgCgDQgCgCgEAAQgEAAgCABQgCABgBADQgBAEAAADIgBANQADgDAEgCQAEgCAFAAQAGAAAEACQAEACACAEIAEAHIABAMQAAAOgGAHQgHAJgOgBQgJAAgFgDgAvGpbQgCAEAAAJIAAAHIACAEQAAABAAABQABAAAAABQAAAAABAAQAAABABAAQACABADABQADgBACgBIACgEIACgEIAAgHQAAgJgCgEQgCgDgFgBQgGABgCADgAAko0QgDgBgBgCIgDgFIAAgJIAAgkIgJAAIAAgLIAJAAIAAgTIAQAAIAAATIAKAAIAAALIgKAAIAAAjQAAAEACABQAAAAAAABQABAAAAAAQABAAABAAQAAABABAAIAEAAIAAALIgLABIgIgBgAOoo0IAAgtQAAgEgCgDQgBgBgEAAQgEgBgCADQgCADAAAFIAAArIgRAAIAAgtQAAgEgCgDQgBgBgEAAQgDgBgDADQgCADAAAFIAAArIgRAAIAAhAIAQAAIAAAGQADgEAEgCQAEgCAGAAQAFAAAEADQAEACACAFQACgFAEgCQAEgDAGAAQAIAAAEAEQAEAGAAAJIAAAvgAMKo0IAAhAIAQAAIAAAIQADgEADgDQAEgDAFAAIADAAIAAAQIgCgBIgDAAIgEABIgEACIgDAEIgBAFIAAAngALso0IAAg1IgJAAIAAgLIAJAAIAAgIQAAgEABgDIADgFQADgCADgBIAHgBIAJABIAAAMIgCgBIgBAAQgEAAgBACQgBAAAAABQAAAAAAAAQgBABAAABQAAAAAAABIAAAGIAKAAIAAALIgKAAIAAA1gAHXo0IAAgsQAAgFgCgDQgBgBgEAAQgJAAAAAKIAAArIgQAAIAAhWIAQAAIAAAcIABAAQAEgIALAAQAIAAAEAEQAFAFAAAJIAAAwgAFbo0IAAhAIAQAAIAAAIQACgEAEgDQAEgDAFAAIADAAIAAAQIgDgBIgCAAIgFABIgEACIgDAEIgBAFIAAAngABxo0IAAhAIAQAAIAAAIQADgEADgDQAEgDAFAAIADAAIAAAQIgCgBIgDAAIgEABIgEACIgDAEIgBAFIAAAngAAAo0IAAgsQAAgFgCgDQgBgBgEAAQgJAAAAAKIAAArIgQAAIAAhAIAQAAIAAAHQADgFAEgCQAEgCAFAAQAHAAAEAEQAFAFAAAJIAAAwgAg7o0IAAhAIARAAIAABAgAhho0IAAhAIAQAAIAAAIQACgEAEgDQAEgDAFAAIADAAIAAAQIgDgBIgCAAIgFABIgEACIgDAEIgBAFIAAAngAm+o0IAAg8IgRAAIAAgLIABAAQAJAAAFgDQAFgEABgHIANAAIAABVgAoco0IAAhHIgSAAIAAgPIA2AAIAAAPIgSAAIAABHgApio0IAAhWIAwAAIAAAPIgeAAIAAATIAcAAIAAAPIgcAAIAAAXIAfAAIAAAOgAqjo0IAAhAIAQAAIAAAIQACgEAEgDQAEgDAFAAIADAAIAAAQIgDgBIgCAAIgFABIgEACIgDAEIgBAFIAAAngAv+o0IAAg8IgRAAIAAgLIACAAQAIAAAFgDQAFgEACgHIAMAAIAABVgAxbo0IAAhHIgTAAIAAgPIA3AAIAAAPIgTAAIAABHgAyho0IAAhWIAwAAIAAAPIgfAAIAAATIAdAAIAAAPIgdAAIAAAXIAgAAIAAAOgAn5pPIAAgPIAhAAIAAAPgAw5pPIAAgPIAiAAIAAAPgAg7p8IAAgPIARAAIAAAPgAN4rBQADAAABgDQACgDAAgEIAAgBIgGAAIAAgSIAQAAIAAAPIgBAJQgBAEgCACIgEAFQgDACgFAAgAHOrBQADAAACgDQABgDAAgEIAAgBIgGAAIAAgSIAQAAIAAAPIgBAJQAAAEgCACIgFAFQgDACgFAAgAAlrBQADAAABgDQACgDAAgEIAAgBIgGAAIAAgSIAQAAIAAAPIgBAJQgBAEgCACIgEAFQgDACgFAAgAmErBQADAAACgDQABgDAAgEIAAgBIgGAAIAAgSIAQAAIAAAPIgBAJQAAAEgCACIgFAFQgDACgFAAgAstrBQADAAABgDQACgDAAgEIAAgBIgGAAIAAgSIAQAAIAAAPIgBAJQgBAEgCACIgEAFQgDACgFAAgANJrMQgFgDgDgFQgDgFgBgHQgCgJAAgKIABgRQABgJACgGQADgGAFgEQAGgEAJAAQAIAAAFADQAFABADAGQADAFABAHQACAIAAALIgBARQAAAJgDAGQgDAGgFAEQgFADgKAAQgIAAgFgBgANRsUIgCAEIgCAJIAAAkIACAIIADAFIAEABQABAAAAgBQABAAABAAQAAAAABAAQAAgBABAAQACgCABgDIABgJIAAgkQAAgEgCgEIgCgDIgFgBIgFABgAMQrNQgFgDgDgEQgDgDgBgFIgBgIQAAgIAEgGQADgFAHgCQgDgBgCgCIgEgEIgCgFIgBgFQAAgMAHgGQAGgFAMAAQAMAAAGAFQAHAGAAAMIgBAFIgCAFIgEAEQgCACgDABQAHACAEAFQADAGAAAIIgBAIQgBAFgDADQgCAEgGADQgFADgJgBQgJABgFgDgAMZrxIgDACIgBAFIgBAFIABAHIABAEIADAEIAFABIAFgBIADgEQAAAAAAgBQABgBAAAAQAAgBAAAAQAAgBAAAAIABgHIgBgFQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAgBIgDgCQgBgBAAAAQgBAAAAgBQgBAAgBAAQAAAAgBAAQgDAAgCACgAMWsKQAAAGACADQACADAEAAQAEAAACgDQACgDAAgGQAAgLgIAAQgIAAAAALgALYrNQgFgDgDgEQgDgDgBgFIgBgIQAAgIAEgGQADgFAHgCQgDgBgCgCIgEgEIgCgFIgBgFQAAgMAHgGQAGgFAMAAQAMAAAGAFQAHAGAAAMIgBAFIgCAFIgEAEQgCACgDABQAHACAEAFQADAGAAAIIgBAIQgBAFgDADQgCAEgGADQgFADgJgBQgJABgFgDgALhrxIgDACIgBAFIgBAFIABAHIABAEIADAEIAFABIAFgBIADgEQAAAAAAgBQABgBAAAAQAAgBAAAAQAAgBAAAAIABgHIgBgFQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAgBIgDgCQgBgBAAAAQgBAAAAgBQgBAAgBAAQAAAAgBAAQgDAAgCACgALesKQAAAGACADQACADAEAAQAEAAACgDQACgDAAgGQAAgLgIAAQgIAAAAALgAKfrNQgEgCgDgEQgDgDgBgEIgBgIIAAgDIARAAIAAAGIABAEIADAEIAEABQAGAAACgFQACgDAAgJIAAgJIgCgFIgDgDIgFgBQgDAAgCACQgCADgBADIgPAAIADguIAsAAIAAANIgfAAIgCATQADgDAEgBQADgCAGAAQAGAAAEADQAEACACAEQADADABAGIABAJIgBANQgCAGgDAEQgDAEgFACQgFADgJgBQgIABgFgDgAGgrMQgFgDgEgFQgDgFgBgHQgBgJAAgKIABgRQAAgJADgGQACgGAGgEQAFgEAKAAQAHAAAFADQAGABADAGQADAFABAHQABAIAAALIAAARQgBAJgDAGQgCAGgGAEQgFADgJAAQgIAAgFgBgAGosUIgDAEIgBAJIAAAkIABAIIADAFIAFABQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQACgCABgDIABgJIAAgkQAAgEgBgEIgDgDIgEgBIgFABgAFmrNQgFgCgDgEQgCgDgBgEIgBgIIAAgDIAQAAIABAGIABAEIACAEIAFABQAFAAADgFQACgDAAgJIgBgJIgBgFIgDgDIgFgBQgEAAgCACQgCADAAADIgQAAIADguIAtAAIAAANIggAAIgBATQACgDAEgBQAEgCAFAAQAHAAAEADQAEACACAEQACADABAGIABAJIgBANQgBAGgDAEQgDAEgGACQgFADgIgBQgIABgFgDgAEurNQgFgDgDgEQgDgDgBgFIgBgIQAAgIAEgGQAEgFAHgCQgEgBgCgCIgEgEIgCgFIAAgFQAAgMAGgGQAHgFAMAAQALAAAHAFQAHAGAAAMIgBAFIgCAFIgEAEQgCACgEABQAHACAEAFQAEAGAAAIIgBAIQgBAFgDADQgDAEgFADQgGADgIgBQgJABgGgDgAE4rxIgDACIgCAFIAAAFIAAAHIACAEIADAEIAFABIAEgBIADgEQABAAAAgBQAAgBAAAAQABgBAAAAQAAgBAAAAIAAgHIAAgFQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBgBIgDgCQAAgBgBAAQAAAAgBgBQAAAAgBAAQgBAAAAAAQgDAAgCACgAE0sKQAAAGACADQADADAEAAQADAAADgDQACgDAAgGQAAgLgIAAQgJAAAAALgAD2rNQgFgCgDgEQgCgDgBgEIgBgIIAAgDIAQAAIABAGIABAEIACAEIAFABQAFAAADgFQACgDAAgJIgBgJIgBgFIgDgDIgFgBQgEAAgCACQgCADAAADIgQAAIADguIAtAAIAAANIggAAIgBATQACgDAEgBQAEgCAFAAQAHAAAEADQAEACACAEQACADABAGIABAJIgBANQgBAGgDAEQgDAEgGACQgFADgIgBQgIABgFgDgAgJrMQgFgDgDgFQgDgFgBgHQgCgJAAgKIABgRQABgJACgGQADgGAFgEQAGgEAIAAQAIAAAFADQAFABADAGQADAFABAHQACAIAAALIgBARQAAAJgDAGQgDAGgFAEQgFADgKAAQgHAAgFgBgAgBsUIgCAEIgCAJIAAAkIACAIIADAFIADABQABAAAAgBQABAAABAAQAAAAABAAQAAgBABAAQACgCABgDIABgJIAAgkQAAgEgCgEIgCgDIgFgBIgEABgAhBrMQgFgDgDgFQgDgFgBgHQgCgJAAgKIABgRQABgJACgGQADgGAFgEQAGgEAJAAQAIAAAFADQAFABADAGQADAFABAHQACAIAAALIgBARQAAAJgDAGQgDAGgFAEQgFADgKAAQgIAAgFgBgAg5sUIgCAEIgCAJIAAAkIACAIIADAFIAEABQABAAAAgBQABAAABAAQAAAAABAAQAAgBABAAQACgCABgDIABgJIAAgkQAAgEgCgEIgCgDIgFgBIgFABgAh6rNQgFgDgDgEQgDgDgBgFIgBgIQAAgIAEgGQADgFAHgCQgDgBgCgCIgEgEIgCgFIgBgFQAAgMAHgGQAGgFAMAAQAMAAAGAFQAHAGAAAMIgBAFIgCAFIgEAEQgCACgDABQAHACAEAFQADAGAAAIIgBAIQgBAFgDADQgCAEgGADQgFADgJgBQgJABgFgDgAhxrxIgDACIgBAFIgBAFIABAHIABAEIADAEIAFABIAFgBIADgEQAAAAAAgBQABgBAAAAQAAgBAAAAQAAgBAAAAIABgHIgBgFQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAgBIgDgCQgBgBAAAAQgBAAAAgBQgBAAgBAAQAAAAgBAAQgDAAgCACgAh0sKQAAAGACADQACADAEAAQAEAAACgDQACgDAAgGQAAgLgIAAQgIAAAAALgAizrNQgEgCgDgEQgDgDgBgEIgBgIIAAgDIARAAIAAAGIABAEIADAEIAEABQAGAAACgFQACgDAAgJIAAgJIgCgFIgDgDIgFgBQgDAAgCACQgCADgBADIgPAAIADguIAsAAIAAANIgfAAIgCATQADgDAEgBQADgCAGAAQAGAAAEADQAEACACAEQADADABAGIABAJIgBANQgCAGgDAEQgDAEgFACQgFADgJgBQgIABgFgDgAmyrMQgFgDgEgFQgDgFgBgHQgBgJAAgKIABgRQAAgJADgGQACgGAGgEQAFgEAKAAQAHAAAFADQAGABADAGQADAFABAHQABAIAAALIAAARQgBAJgDAGQgCAGgGAEQgFADgJAAQgIAAgFgBgAmqsUIgDAEIgBAJIAAAkIABAIIADAFIAFABQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQACgCABgDIABgJIAAgkQAAgEgBgEIgDgDIgEgBIgFABgApcrNQgFgCgDgEQgCgDgBgEIgBgIIAAgDIAQAAIABAGIABAEIACAEIAFABQAFAAADgFQACgDAAgJIgBgJIgBgFIgDgDIgFgBQgEAAgCACQgCADAAADIgQAAIADguIAtAAIAAANIggAAIgBATQACgDAEgBQAEgCAFAAQAHAAAEADQAEACACAEQACADABAGIABAJIgBANQgBAGgDAEQgDAEgGACQgFADgIgBQgIABgFgDgAtcrMQgFgDgDgFQgDgFgBgHQgCgJAAgKIABgRQABgJACgGQADgGAFgEQAGgEAJAAQAIAAAFADQAFABADAGQADAFABAHQACAIAAALIgBARQAAAJgDAGQgDAGgFAEQgFADgKAAQgIAAgFgBgAtUsUIgCAEIgCAJIAAAkIACAIIADAFIAEABQABAAAAgBQABAAABAAQAAAAABAAQAAgBABAAQACgCABgDIABgJIAAgkQAAgEgCgEQAAAAAAgBQgBgBAAAAQAAgBgBAAQAAAAAAAAIgFgBIgFABgAuWrNQgEgCgDgEQgDgDgBgEIgBgIIAAgDIARAAIAAAGIABAEIADAEIAEABQAGAAACgFQACgDAAgJIAAgJIgCgFIgDgDIgFgBQgDAAgCACQgCADgBADIgPAAIADguIAsAAIAAANIgfAAIgCATQADgDAEgBQADgCAGAAQAGAAAEADQAEACACAEQADADABAGIABAJIgBANQgCAGgDAEQgDAEgFACQgFADgJgBQgIABgFgDgAwGrNQgEgCgDgEQgDgDgBgEIgBgIIAAgDIARAAIAAAGIABAEIADAEIAEABQAGAAACgFQACgDAAgJIAAgJIgCgFIgDgDIgFgBQgDAAgCACQgCADgBADIgPAAIADguIAsAAIAAANIgfAAIgCATQADgDAEgBQADgCAGAAQAGAAAEADQAEACACAEQADADABAGIABAJIgBANQgCAGgDAEQgDAEgFACQgFADgJgBQgIABgFgDgAJKrMIAAhIIgTAAIAAgOIA3AAIAAAOIgTAAIAABIgAIErMIAAhWIAwAAIAAAOIgfAAIAAAUIAdAAIAAAPIgdAAIAAAXIAgAAIAAAOgACgrMIAAhIIgSAAIAAgOIA2AAIAAAOIgSAAIAABIgABarMIAAhWIAwAAIAAAOIgeAAIAAAUIAcAAIAAAPIgcAAIAAAXIAfAAIAAAOgAkIrMIAAhIIgTAAIAAgOIA3AAIAAAOIgTAAIAABIgAlOrMIAAhWIAwAAIAAAOIgfAAIAAAUIAdAAIAAAPIgdAAIAAAXIAgAAIAAAOgAnurMIADgQQABgIAEgKIAHgRQAFgJAGgJIgkAAIAAgOIA1AAIAAANQgGAHgEAJIgHASIgFASIgDASgAocrMIAAg8IgRAAIAAgMIABAAQAJABAFgDQAFgEABgHIANAAIAABVgAqyrMIAAhIIgSAAIAAgOIA2AAIAAAOIgSAAIAABIgAr4rMIAAhWIAwAAIAAAOIgeAAIAAAUIAcAAIAAAPIgcAAIAAAXIAfAAIAAAOgAvGrMIAAg8IgRAAIAAgMIACAAQAIABAFgDQAFgEACgHIAMAAIAABVgAxbrMIAAhIIgTAAIAAgOIA3AAIAAAOIgTAAIAABIgAyhrMIAAhWIAwAAIAAAOIgfAAIAAAUIAdAAIAAAPIgdAAIAAAXIAgAAIAAAOgAJsrnIAAgPIAiAAIAAAPgADDrnIAAgPIAhAAIAAAPgAjmrnIAAgPIAiAAIAAAPgAqPrnIAAgPIAhAAIAAAPgAw5rnIAAgPIAiAAIAAAPgAxPtQIAAgMIAFABQAEAAACgCQACgDAAgEIgShAIASAAIAJAsIAJgsIAQAAIgPA8IgEAMQgCAFgDAEQgDACgDABIgKAAgALdtkQgFgDgDgEQgDgEgBgHIgBgPIABgOQACgGADgEQADgFAFgCQAEgCAIAAQAHAAAFACQAFACADAEQADAEABAHQABAGAAAIQAAAJgBAGQgCAHgDAEQgDAEgFADQgEABgHAAQgIAAgFgBgALluaQgCACgBAEIgBAGIAAATIABAHQABADACACQACABADAAQAFAAABgFQACgFAAgNQAAgLgCgFQgBgGgFAAQgDAAgCABgAJetrQgFgHAAgTQAAgRAFgIQAFgIAKAAQAFAAADACQADABADAFIAAAAIAAgbIARAAIAABVIgQAAIAAgHQgDAEgEADQgDABgFAAQgKABgFgJgAJruUQgBAFAAAKQAAAMABAEQACAGAFAAQAGAAACgGQABgEAAgMQAAgKgBgFQgCgFgGgBQgFABgCAFgAHztkQgDgCgCgCIgDgGIAAgHIABgIIADgFIAFgEIAHgDIAJgCQAEgBABgCQACgCAAgDQAAgDgCgDQgCgCgEAAQgEAAgCACQgBADAAAEIAAABIgPAAIAAgBQAAgGABgDQACgEADgDIAIgDIAIgBIAMABQAFABACADQADADABADIABAJIAAAoIACAGIgQAAIgCgHQgDAFgEACQgEACgGgBQgEABgDgCgAIHuCIgDABQgFABgCACQgDADAAAEQAAAEACADQABACAEAAIADAAIADgCIADgDIABgEIAAgOgAFxtkQgFgDgDgEQgDgEgBgHIgBgPIABgOQACgGADgEQADgFAFgCQAEgCAIAAQAHAAAFACQAFACADAEQADAEABAHQABAGAAAIQAAAJgBAGQgCAHgDAEQgDAEgFADQgEABgHAAQgIAAgFgBgAF5uaQgCACgBAEIgBAGIAAATIABAHQABADACACQACABADAAQAFAAABgFQACgFAAgNQAAgLgCgFQgBgGgFAAQgDAAgCABgADgtkQgFgDgDgEQgDgEgBgHIgBgPIABgOQACgGADgEQADgFAFgCQAEgCAIAAQAHAAAFACQAFACADAEQADAEABAHQABAGAAAIQAAAJgBAGQgCAHgDAEQgDAEgFADQgEABgHAAQgIAAgFgBgADouaQgCACgBAEIgBAGIAAATIABAHQABADACACQACABADAAQAFAAABgFQACgFAAgNQAAgLgCgFQgBgGgFAAQgDAAgCABgAietkQgDgCgCgCIgDgGIAAgHIABgIIADgFIAFgEIAHgDIAJgCQAEgBABgCQACgCAAgDQAAgDgCgDQgCgCgEAAQgEAAgCACQgBADAAAEIAAABIgPAAIAAgBQAAgGABgDQACgEADgDIAIgDIAIgBIAMABQAFABACADQADADABADIABAJIAAAoIACAGIgQAAIgCgHQgDAFgEACQgEACgGgBQgEABgDgCgAiKuCIgDABQgFABgCACQgDADAAAEQAAAEACADQABACAEAAIADAAIADgCIADgDIABgEIAAgOgAjntkQgFgCgDgEQgDgEgCgGQgBgHAAgKQAAgJACgHQACgGADgEQAEgEAEgBQAFgCAGAAQAMAAAFAGQAGAHAAALIgQAAIAAgEIgBgEIgCgDQgBAAAAgBQAAAAgBAAQAAAAgBAAQgBAAAAgBQgBABgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAIgDAEIgBAHIAAAUIABAHIADAEQAAAAABABQAAAAABAAQAAAAABAAQABAAAAAAQAFAAABgDQACgEAAgIIAQAAQAAANgFAGQgGAIgNgBQgHABgEgCgAnytrQgFgHAAgTQAAgRAFgIQAFgIAKAAQAFAAADACQADABADAFIAAAAIAAgbIARAAIAABVIgQAAIAAgHQgDAEgEADQgDABgFAAQgKABgFgJgAnluUQgBAFAAAKQAAAMABAEQACAGAFAAQAGAAACgGQABgEAAgMQAAgKgBgFQgCgFgGgBQgFABgCAFgAojtlQgFgEgCgFQgDgEAAgGIgBgNIABgMQABgGADgFQADgFAFgDQAFgCAIAAQAHAAAFACQAEADADAEQADAEABAGIABANIAAAEIghAAIAAALIACAFIACADQABAAAAABQAAAAABAAQAAAAABAAQABAAAAAAQAEABACgDQACgEABgFIAPAAQgBAKgFAHQgGAFgMAAQgJAAgFgCgAoZuaIgCADIgCAFIAAAEIAAADIARAAIgBgHIgBgFIgCgDIgFgBIgEABgAtotnQgEgEAAgKIAAgvIAQAAIAAAsQAAAFACACQACACADAAQAJAAAAgKIAAgrIARAAIAABAIgQAAIAAgIQgDAFgEADQgEABgGAAQgIABgEgFgAvftkQgDgCgCgCIgDgGIAAgHIABgIIADgFIAFgEIAHgDIAJgCQAEgBABgCQACgCAAgDQAAgDgCgDQgCgCgEAAQgEAAgCACQgBADAAAEIAAABIgPAAIAAgBQAAgGABgDQACgEADgDIAIgDIAIgBIAMABQAFABACADQADADABADIABAJIAAAoIACAGIgQAAIgCgHQgDAFgEACQgEACgGgBQgEABgDgCgAvLuCIgDABQgFABgCACQgDADAAAEQAAAEACADQABACAEAAIADAAIADgCIADgDIABgEIAAgOgAwTtlQgFgEgCgFQgDgEAAgGIgBgNIABgMQABgGADgFQADgFAFgDQAFgCAIAAQAHAAAFACQAEADADAEQADAEABAGIABANIAAAEIghAAIAAALIACAFIACADQABAAAAABQABAAAAAAQAAAAABAAQABAAAAAAQAEABACgDQACgEABgFIAPAAQgBAKgFAHQgGAFgMAAQgJAAgFgCgAwJuaIgCADIgCAFIAAAEIAAADIARAAIgBgHIgBgFIgCgDIgFgBIgEABgApCtkQgDgBgCgCIgCgFIgBgJIAAglIgIAAIAAgKIAIAAIAAgTIARAAIAAATIAKAAIAAAKIgKAAIAAAjQAAAEABACQAAAAABABQAAAAABAAQAAAAABAAQABABABAAIAEAAIAAALIgLAAIgIAAgAMKtkIAAhAIAQAAIAAAIQADgFADgDQAEgCAFAAIADAAIAAAQIgCgBIgDAAIgEABIgEACIgDAEIgBAFIAAAngAK0tkIAAg2IgJAAIAAgKIAJAAIAAgIQAAgEABgDIADgFQADgCADgBIAHgBIAJABIAAAMIgCAAIgBAAQgEAAgBABQgBAAAAABQAAAAAAAAQgBABAAABQAAAAAAABIAAAGIAKAAIAAAKIgKAAIAAA2gAJAtkIAAhAIARAAIAABAgAIltkIAAhVIARAAIAABVgAHFtkIgRhAIASAAIAJAtIAAAAIAJgtIAQAAIgQBAgAFNtkIAAgtQAAgEgCgDQgBgCgEAAQgEABgCACQgCADAAAFIAAArIgRAAIAAgtQAAgEgCgDQgBgCgEAAQgDABgDACQgCADAAAFIAAArIgRAAIAAhAIAQAAIAAAGQADgEAEgCQAEgCAGAAQAFAAAEACQAEADACAFQACgFAEgDQAEgCAGAAQAIAAAEAEQAEAGAAAJIAAAvgACvtkIAAhAIAQAAIAAAIQADgFADgDQAEgCAFAAIADAAIAAAQIgCgBIgDAAIgEABIgEACIgDAEIgBAFIAAAngABztkIAAhVIAeAAQAHAAAFACQAEACADADQADAEABAEQABAFAAAFQAAAGgCAGQgCAEgDAEIgJAEQgFACgGAAIgJAAIAAAigACFuTIAHAAQAFAAAEgDQADgDAAgHQAAgGgDgEQgDgDgGAAIgHAAgAAItkIAAgTIAQAAIAAATgAgStkIAAgtQAAgEgBgDQgCgCgDAAQgEABgDACQgCADAAAFIAAArIgRAAIAAgtQAAgEgBgDQgCgCgDAAQgEABgCACQgDADAAAFIAAArIgQAAIAAhAIAQAAIAAAGQADgEAEgCQAEgCAFAAQAGAAAEACQAEADABAFQACgFAEgDQAFgCAGAAQAIAAAEAEQAEAGAAAJIAAAvgAhstkIAAhAIARAAIAABAgAi/tkIAAhVIARAAIAABVgAkjtkIgOgbIgGAIIAAATIgRAAIAAhVIARAAIAAAtIAAAAIARgYIASAAIgSAZIAVAngAlitkIAAgtQAAgFgCgCQgCgCgDAAQgJAAAAALIAAArIgRAAIAAhAIAQAAIAAAHQADgFAEgCQAEgCAGAAQAIAAAEAEQAEAFAAAJIAAAwgAmetkIAAhVIARAAIAABVgApotkIAAhAIARAAIAABAgAqCtkIAAgtQAAgEgBgDQgCgCgDAAQgEABgDACQgCADAAAFIAAArIgRAAIAAgtQAAgEgBgDQgCgCgDAAQgEABgCACQgDADAAAFIAAArIgQAAIAAhAIAQAAIAAAGQADgEAEgCQAEgCAFAAQAGAAAEACQAEADABAFQACgFAEgDQAFgCAGAAQAIAAAEAEQAEAGAAAJIAAAvgArctkIAAhAIARAAIAABAgAr3tkIAAhVIARAAIAABVgAsRtkIAAgtQAAgFgCgCQgCgCgDAAQgJAAAAALIAAArIgRAAIAAhAIAQAAIAAAHQADgFAEgCQAEgCAGAAQAIAAAEAEQAEAFAAAJIAAAwgAuttkIAAhAIAQAAIAAAIQACgFAEgDQAEgCAFAAIADAAIAAAQIgDgBIgCAAIgFABIgEACIgDAEIgBAFIAAAngAyltkQAAgGABgEQABgFADgFQACgFADgDIAJgJIALgLIADgFIABgEIAAgGQAAgKgIAAIgFAAIgDAEIgBAFIgBAHIgQAAIAAgEQAAgLAGgHQAHgGANAAQANAAAHAGQAGAGAAALIgBAIIgCAHIgEAGIgQAPIgGAHIgDAGIAgAAIAAANgAAIuQIAAgTIAQAAIAAATgABXuTIAAgQIAAgJIADgHIAFgEIAIgCIAAAHQgDACgCACIgCAGIAAACIAHAAIAAATgAA/uTIAAgQIABgJQABgDACgEQABgDADgBIAIgCIAAAHQgDACgBACIgCAGIAAACIAGAAIAAATgAJAutIAAgOIARAAIAAAOgAhsutIAAgOIARAAIAAAOgApoutIAAgOIARAAIAAAOgArcutIAAgOIARAAIAAAOg");
	this.shape.setTransform(158.875,131.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FC0505").s().p("AAUA2IgUglIgVAlIgaAAIAjg2Ighg1IAbAAIASAjIAUgjIAZAAIggA0IAjA3g");
	this.shape_1.setTransform(280.725,20.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_7
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("A3gTxMAAAgnhMAvBAAAMAAAAnhg");
	this.shape_2.setTransform(149.5,123.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-2.9,301,253);


(lib.main_paint = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.paintColors();
	this.instance.setTransform(-283.5,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.main_paint, new cjs.Rectangle(-283.5,-125,567,250), null);


(lib.inkBottles_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.inkBottles();
	this.instance.setTransform(-104,-84);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.inkBottles_mc, new cjs.Rectangle(-104,-84,208,168), null);


(lib.exitBtn = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FF0000").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(0,-175,1,0.4167);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,250);


(lib.epson_logo = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2A3283").s().p("AB/B3QgZgKgOgRQgPgRgIgXQgJgYAAgbQAAgbAJgXQAIgYAPgSQAOgSAZgKQAXgKAbAAQAeAAAWAKQAYAKAOASQAQASAJAYQAHAXAAAbQAAAbgHAYQgJAXgQARQgOARgYAKQgWALgeAAQgbAAgXgLgACThLQgNAGgJANQgHAKgEARQgEAPAAAPQAAAPAEAQQAEAOAHANQAJALANAGQANAJARAAQATAAAOgJQAMgGAIgLQAHgNAEgOQAEgQAAgPQAAgPgEgPQgEgRgHgKQgIgNgMgGQgOgJgTAAQgRAAgNAJgAhnB9QgUgGgOgLQgPgKgJgRQgJgQACgXIAzAAQABANAEAIQAFAJAIAEQAGAGALAEQAJABALAAIAPAAQAJgBAHgFQAHgCAFgHQAGgGAAgKQAAgJgHgIIgQgKIhOgWQgNgFgMgHQgJgIgHgMQgGgMAAgQQAAgUAIgPQAIgMAOgLQANgJAQgFQARgEARAAQATAAASADQASAGANAJQAOALAIAOQAHAPAAAXIgzAAQAAgMgFgIQgDgGgGgEQgIgGgIgBIgTgCIgOABQgGACgEAEQgHAEgCAEQgEAFAAAJQAAAHADAEQADAFAIAEIBRAXQAKADALAHQANAHAIANQAKAOAAAWQAAAQgIAOQgFAQgOALQgMAJgUAHQgSAGgbAAQgTAAgTgFgAHbB8IhnilIAAClIgzAAIAAj2IA3AAIBnCkIABAAIAAikIAyAAIAAD2gAmNB8IAAj2IBxAAQAWAAAQAHQAQAFAKALQALALAFAPQAFAPAAANQAAARgFAOQgFAOgLALQgKALgQAGQgQAHgWAAIg7AAIAABZgAlXgGIA9gBQAIgBAHgFQAHgEAEgIQADgGAAgOQAAgKgDgHQgEgHgHgEQgHgFgIgBIg9gBgApqB8IAAj2IC4AAIAAAsIiCAAIAAA1IB4AAIAAApIh4AAIAAA/ICGAAIAAAtgAJHhKQgFgCgFgDIgFgKQgDgFAAgFQAAgHADgFIAFgJQAFgFAFgBQAFgBAEAAQAGAAAGABQAFABADAFIAHAJIAAAMIAAAKIgHAKQgDADgFACQgGABgGAAQgEAAgFgBgAJJh4QgEACgCADQgEACgCAEIgBAKIABAIQACADAEADQACAEAEACIAHABIAJgBQAEgCADgEIAEgGIABgIIgBgKQgBgEgDgCQgDgDgEgCIgJgBIgHABgAJWhVIgGgNIgEAAIAAANIgHAAIAAgeIALAAQAHAAADACQAEACAAAFIAAAEIgCADIgDAAIgDABIAIANgAJMhmIAEAAIAGAAIAAgFIAAgCIAAgBIgKAAg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.epson_logo, new cjs.Rectangle(-61.9,-12.9,123.9,25.9), null);


(lib.ecoTank_logo_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ecoTank_logo();
	this.instance.setTransform(-93.75,-34.85,0.9817,0.9817);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ecoTank_logo_1, new cjs.Rectangle(-93.7,-34.8,187.5,69.69999999999999), null);


(lib.disclaimerBtn = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAAAMIgKAOIgKgHIALgPIgRgEIAEgMIAQAFIAAgTIANAAIAAATIAQgFIAEAMIgRAEIALAPIgKAHg");
	this.shape.setTransform(-12.975,-333.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FC0505").s().p("AibCZIE1kwQADACgBCXIgBBgIgBA3g");
	this.shape_1.setTransform(-18.0875,-337.85);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4));

	// disclaimerBtn_BG
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.008)").s().p("A3yCiIAAlEMAvlAAAIAAFEg");
	this.shape_2.setTransform(-155.275,-337.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-307.5,-354,305,32.5);


(lib.ctaBtn = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgGAdIAAguIgRAAIAAgLIAvAAIAAALIgSAAIAAAug");
	this.shape.setTransform(25.25,-0.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRAXQgGgFAAgMIAAgiIAMAAIAAAiIAAAFIACAEIAEACQACACADAAQAHAAACgDQADgDAAgHIAAgiIAMAAIAAAiQAAAMgGAFQgHAGgLAAQgLAAgGgGg");
	this.shape_1.setTransform(19.975,-0.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKAcQgGgDgDgEQgEgEgCgFQgCgGAAgGQAAgFACgGQACgFAEgFQADgDAGgDQAEgCAGAAQAHAAAFACQAFADAEADQADAFACAFQACAGAAAFQAAAGgCAGQgCAFgDAEQgEAEgFADQgFACgHAAQgGAAgEgCgAgGgRIgFAEIgDAHIgBAGIABAHIADAGIAFAEQADADADAAQAFAAADgDQADgBABgDIADgGIABgHIgBgGIgDgHIgEgEQgDgCgFAAQgDAAgDACg");
	this.shape_2.setTransform(14,-0.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGAdIAAguIgRAAIAAgLIAuAAIAAALIgRAAIAAAug");
	this.shape_3.setTransform(6.5,-0.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFAdIAAg5IALAAIAAA5g");
	this.shape_4.setTransform(2.975,-0.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AALAdIgQgaIgIAHIAAATIgMAAIAAg5IAMAAIAAAYIAWgYIAPAAIgWAXIAYAig");
	this.shape_5.setTransform(-2.775,-0.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJAcQgGgDgDgEQgEgEgCgFQgCgGAAgGQAAgFACgGQACgFAEgFQADgDAGgDQAFgCAFAAQAFAAAEABQAFACADADQADACACAEQACADABAFIgMAAIgCgEIgCgCIgEgDIgFgBQgDAAgDACIgFAEIgCAHIgBAGIABAHIACAGIAFAEQADADADAAQAGAAADgEQAEgDAAgHIANAAIgDAKQgCAEgDADQgEADgEACQgEACgGAAQgFAAgFgCg");
	this.shape_6.setTransform(-8.775,-0.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVAdIAAg5IAqAAIAAALIgdAAIAAAMIAaAAIAAAJIgaAAIAAAOIAeAAIAAALg");
	this.shape_7.setTransform(-14.075,-0.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AALAdIAAgZIgWAAIAAAZIgMAAIAAg5IAMAAIAAAXIAWAAIAAgXIANAAIAAA5g");
	this.shape_8.setTransform(-19.625,-0.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgJAcQgGgDgDgEQgEgEgCgFQgCgGAAgGQAAgFACgGQACgFAEgFQADgDAGgDQAFgCAFAAQAFAAAEABQAFACADADQADACACAEQACADABAFIgMAAIgCgEIgCgCIgEgDIgFgBQgDAAgDACIgFAEIgCAHIgBAGIABAHIACAGIAFAEQADADADAAQAGAAADgEQAEgDAAgHIANAAIgDAKQgCAEgDADQgEADgEACQgEACgGAAQgFAAgFgCg");
	this.shape_9.setTransform(-25.425,-0.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E61404").s().p("AkjBiQgcAAAAgbIAAiNQAAgbAcAAIJHAAQAcAAAAAbIAACNQAAAbgcAAg");
	this.shape_10.setTransform(-0.125,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ctaBtn, new cjs.Rectangle(-32.1,-9.9,64,19.700000000000003), null);


(lib.bluePaint = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_34 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	mask.setTransform(396.4438,125.0356);

	// Layer_33
	this.instance = new lib.paintColors();
	this.instance.setTransform(318.5,1.05);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(206));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(324.9,1.1,143.10000000000002,250);


// stage content:
(lib.Epson_B2B_Pro_300x250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		var root = this; //Declared variable for access to global scope.
		
		this.popUp_btn.addEventListener("click", popUpBtn.bind(this));
		this.panel.addEventListener("click", exitPanel.bind(this));
		
		
		this.on("click", function (e) {
			window.open(clickTag, "_blank");
			console.log("ClickTag pressed");
			
		});
		
		
		function popUpBtn(e) {
			e.stopPropagation();
			root.panel.x = 0;
			root.stop();
			console.log("PopUp button pressed");
		}
		
		
		function exitPanel(e) {
			e.stopPropagation();
			root.panel.x = 300;
			root.play();
			console.log("Panel Closed");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(360));

	// Border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AXcQlIAAC9Mgu3AAAIAAi9MAAAgkGMAu3AAAg");
	this.shape.setTransform(150,124.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(360));

	// panel
	this.panel = new lib.panel();
	this.panel.name = "panel";
	this.panel.setTransform(300,0);

	this.timeline.addTween(cjs.Tween.get(this.panel).wait(360));

	// popUp_btn
	this.popUp_btn = new lib.disclaimerBtn();
	this.popUp_btn.name = "popUp_btn";
	this.popUp_btn.setTransform(289.2,621.3,1,1,0,0,0,-15.6,15.2);
	new cjs.ButtonHelper(this.popUp_btn, 0, 1, 2, false, new lib.disclaimerBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.popUp_btn).wait(189).to({y:587.3},6,cjs.Ease.quadOut).wait(37).to({y:621.3},6).wait(122));

	// exitBtn
	this.instance = new lib.exitBtn();
	this.instance.setTransform(150,300);
	this.instance.alpha = 0;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.exitBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(360));

	// ctaBtn_Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_351 = new cjs.Graphics().p("AmtCRQgoAAAAgoIAAAAIAAjQQAAgpAoAAIAAAAINbAAQAoAAAAApIAAAAIAADQQAAAogoAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(351).to({graphics:mask_graphics_351,x:72.8658,y:180.4032}).wait(9));

	// shine
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-14.6,-9.6,14.7,9.5).s().p("Ao9ItINW0YIElC/ItWUYg");
	this.shape_1.setTransform(11.225,150.7);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-14.6,-9.6,14.7,9.5).s().p("Ao9ItINW0ZIElDAItWUZg");
	this.shape_2.setTransform(48.825,162.9);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},351).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2,p:{x:48.825,y:162.9}}]},1).to({state:[{t:this.shape_2,p:{x:78.125,y:172.35}}]},1).to({state:[{t:this.shape_2,p:{x:107.375,y:181.8}}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(351).to({_off:false},0).wait(1).to({x:15.425,y:152.05},0).wait(1).to({x:27.925,y:156.1},0).to({_off:true},1).wait(3).to({_off:false,x:128.275,y:188.6},0).wait(1).to({x:140.775,y:192.65},0).wait(1).to({x:144.975,y:194},0).wait(1));

	// ctaBtn
	this.instance_1 = new lib.ctaBtn();
	this.instance_1.setTransform(73.35,180.85,1.4704,1.4704,0,0,0,0.2,0.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(343).to({_off:false},0).to({alpha:1},8).wait(9));

	// txt_EcoTankPro
	this.instance_2 = new lib.txt_EcoTankPro();
	this.instance_2.setTransform(75.7,125.95,0.65,0.65,0,0,0,0.1,0);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(343).to({_off:false},0).to({alpha:1},8).wait(9));

	// epson_logo
	this.instance_3 = new lib.epson_logo();
	this.instance_3.setTransform(43.55,22.3,0.5174,0.5174,0,0,0,0.1,0.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(78).to({_off:false},0).to({alpha:1},8).wait(33).to({alpha:0},7).to({_off:true},1).wait(216).to({_off:false,x:49.55,y:16.8},0).to({alpha:1},8,cjs.Ease.quadOut).wait(9));

	// ecoTank_logo
	this.instance_4 = new lib.ecoTank_logo_1();
	this.instance_4.setTransform(117.3,19.3,0.3093,0.3093);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(78).to({_off:false},0).to({alpha:1},8).wait(33).to({alpha:0},7).to({_off:true},1).wait(216).to({_off:false,scaleX:0.6184,scaleY:0.6184,x:75.3,y:86.85},0).to({alpha:1},8,cjs.Ease.quadOut).wait(9));

	// Layer_85
	this.instance_5 = new lib.printer_02_1();
	this.instance_5.setTransform(296.1,146.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(343).to({_off:false},0).to({x:226.1,alpha:1},8,cjs.Ease.quadOut).wait(9));

	// shaq_02
	this.instance_6 = new lib.shaq_02();
	this.instance_6.setTransform(150.05,244.05);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(312).to({_off:false},0).to({y:124.05,alpha:1},7,cjs.Ease.quadOut).wait(16).to({alpha:0},7).to({_off:true},1).wait(17));

	// Layer_80 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_249 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_1_graphics_250 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_1_graphics_251 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_1_graphics_252 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_1_graphics_253 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_1_graphics_254 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_1_graphics_255 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_1_graphics_256 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_1_graphics_257 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_1_graphics_258 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_1_graphics_259 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_1_graphics_260 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_1_graphics_261 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_1_graphics_262 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_1_graphics_263 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_1_graphics_264 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_1_graphics_265 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_1_graphics_266 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_1_graphics_267 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_1_graphics_268 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_1_graphics_269 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_1_graphics_270 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_1_graphics_271 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_1_graphics_272 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_1_graphics_273 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_1_graphics_274 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_1_graphics_275 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_1_graphics_276 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_1_graphics_277 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_1_graphics_278 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_1_graphics_279 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_1_graphics_280 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_1_graphics_281 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_1_graphics_282 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(249).to({graphics:mask_1_graphics_249,x:377.0438,y:125.0356}).wait(1).to({graphics:mask_1_graphics_250,x:365.8438,y:125.0356}).wait(1).to({graphics:mask_1_graphics_251,x:354.6438,y:125.0356}).wait(1).to({graphics:mask_1_graphics_252,x:343.3938,y:125.0356}).wait(1).to({graphics:mask_1_graphics_253,x:332.1938,y:125.0356}).wait(1).to({graphics:mask_1_graphics_254,x:320.9938,y:125.0356}).wait(1).to({graphics:mask_1_graphics_255,x:309.7938,y:125.0356}).wait(1).to({graphics:mask_1_graphics_256,x:298.5438,y:125.0356}).wait(1).to({graphics:mask_1_graphics_257,x:287.3438,y:125.0356}).wait(1).to({graphics:mask_1_graphics_258,x:276.1438,y:125.0356}).wait(1).to({graphics:mask_1_graphics_259,x:264.9438,y:125.0356}).wait(1).to({graphics:mask_1_graphics_260,x:253.6938,y:125.0356}).wait(1).to({graphics:mask_1_graphics_261,x:242.4938,y:125.0356}).wait(1).to({graphics:mask_1_graphics_262,x:231.2938,y:125.0356}).wait(1).to({graphics:mask_1_graphics_263,x:220.0938,y:125.0356}).wait(1).to({graphics:mask_1_graphics_264,x:208.8438,y:125.0356}).wait(1).to({graphics:mask_1_graphics_265,x:197.6438,y:125.0356}).wait(1).to({graphics:mask_1_graphics_266,x:186.4438,y:125.0356}).wait(1).to({graphics:mask_1_graphics_267,x:175.2438,y:125.0356}).wait(1).to({graphics:mask_1_graphics_268,x:163.9938,y:125.0356}).wait(1).to({graphics:mask_1_graphics_269,x:152.7938,y:125.0356}).wait(1).to({graphics:mask_1_graphics_270,x:141.5938,y:125.0356}).wait(1).to({graphics:mask_1_graphics_271,x:130.3938,y:125.0356}).wait(1).to({graphics:mask_1_graphics_272,x:119.1438,y:125.0356}).wait(1).to({graphics:mask_1_graphics_273,x:107.9438,y:125.0356}).wait(1).to({graphics:mask_1_graphics_274,x:96.7438,y:125.0356}).wait(1).to({graphics:mask_1_graphics_275,x:85.5438,y:125.0356}).wait(1).to({graphics:mask_1_graphics_276,x:74.2938,y:125.0356}).wait(1).to({graphics:mask_1_graphics_277,x:63.0938,y:125.0356}).wait(1).to({graphics:mask_1_graphics_278,x:51.8938,y:125.0356}).wait(1).to({graphics:mask_1_graphics_279,x:40.6938,y:125.0356}).wait(1).to({graphics:mask_1_graphics_280,x:29.4438,y:125.0356}).wait(1).to({graphics:mask_1_graphics_281,x:18.2438,y:125.0356}).wait(1).to({graphics:mask_1_graphics_282,x:7.0438,y:125.0356}).wait(30).to({graphics:null,x:0,y:0}).wait(48));

	// txt_allYouWant_color_02
	this.instance_7 = new lib.txt_allYouWant_color_02();
	this.instance_7.setTransform(150.9,140.1);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(249).to({_off:false},0).wait(27).to({alpha:0},6).to({_off:true},30).wait(48));

	// Layer_64 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_249 = new cjs.Graphics().p("AtgOhQglkThukwQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCIBaByQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_2_graphics_250 = new cjs.Graphics().p("ApPOvQiJgGiKgIQgOhpgYhuQgpi0hEi9QgchQgehIIgNgfIgfhEQgVgUgTgVQgUgXgSgaQiTjJADlpIAAgFQACi3AhicQAHgiALggQAJAECrACIB8ACICSAAICqAHQABA2A0BnQAuBaBTB8QBbCJBdBxQAIAVA2AuQBZBLDKCIIAZAQQCzB1CxBuQBYAoBcA5QCSBcCaCJQBMBEBNBOQCHCIBfB3QAVAbASAag");
	var mask_2_graphics_251 = new cjs.Graphics().p("ApYO4QiGgJiGgPQgOhpgZhvQgpi3hDi8QgchSgehIIgNgeIgfhFQgUgUgTgWQgUgXgSgZQiVjLADlrIAAgFQACi5AhicQAHghAOgfQAKAECqACIB9ACICTAAQBRAFBVAIQADA3A1BnQAvBbBTB7QBZCHBiBzQAJAVA2AuQBcBMDJCHIAZAQQC0B0CyBxQBYApBcA7QCSBcCZCMQBNBFBMBPQCGCKBdB5IAkA0g");
	var mask_2_graphics_252 = new cjs.Graphics().p("AphPCQiBgNiEgWQgOhpgZhwQgpi6hCi7QgdhTgdhHIgNggIgfhFQgUgUgTgWQgUgYgSgZQiXjLADluIAAgEQACi6AhidQAHggAQgeQANAECpACIB9ABICUABQBOAGBWANQADA3A1BnQAxBcBTB7QBXCEBoB2QAKAVA2AtQBeBODICGIAaAQIFoDmQBYArBcA7QCRBeCaCOQBMBHBMBQQCFCLBcB7QARAaAOAYg");
	var mask_2_graphics_253 = new cjs.Graphics().p("ApqPLQh9gQiAgdQgPhpgZhxQgqi+hBi6QgchUgehGIgNggIgehGQgUgUgTgWQgTgYgSgaQiajLADlwIAAgFQACi7AiieQAHgeASgeQAPAECnACIB/ABICVABQBLAIBVARQAFA5A1BmQAyBcBTB8QBVCBBtB4QAMAWA1AtQBiBPDHCEIAZAQQC2BzC0B2QBZArBcA8QCQBgCaCRQBMBIBLBQQCECOBbB9QAPAZANAXg");
	var mask_2_graphics_254 = new cjs.Graphics().p("ApzPVQh6gVh9gjQgPhqgZhxQgqjBhAi5QgchVgdhHIgNgfIgfhHIgmgrQgUgZgRgZQidjLADl0IAAgEQACi9AjieQAHgdAVgdQARAECmACIB/ABICVABQBJAKBVAVQAGA5A2BmQAzBeBTB6QBTCABzB6QAMAWA1AsQBkBQDHCEIAZARQC3BxC2B5QBYAsBcA+QCQBgCaCUQBLBJBLBSQCECPBZB/QANAYALAWg");
	var mask_2_graphics_255 = new cjs.Graphics().p("Ap7PeQh3gZh5goQgQhrgZhzQgqjDg/i4QgdhXgchGIgOggIgehHQgUgVgSgXQgTgYgSgaQifjLADl3IAAgEQACi+AjifQAHgcAYgbQATADCkADICAABICXAAQBGANBUAZQAIA5A2BlQA0BgBTB6QBRB9B5B9QANAWA1ArQBnBSDFCDIAaAQQC3BxC3B7QBZAtBcA/QCQBiCZCWQBMBKBKBTQCCCRBYCBIAUAtg");
	var mask_2_graphics_256 = new cjs.Graphics().p("AqFPoQhygdh3guQgPhsgZh0QgrjFg+i4QgdhZgchFIgNggIgfhHIglgtQgUgYgRgbQiijLAEl5IAAgEQACi/AjihQAHgbAagaQAVAECkACICAABICXABQBEAOBUAdQAJA6A2BlQA1BhBUB6QBPB7B+B+QAOAXA1ArQBqBTDECCIAaAQQC4BwC5B9QBYAvBcBAQCQBjCZCZQBLBLBKBTQCBCUBXCDQAJAWAHAVg");
	var mask_2_graphics_257 = new cjs.Graphics().p("AqNPyQhvghhzg1QgQhsgZh1QgrjJg+i2QgchbgchEIgNghIgghIQgTgVgRgYQgTgYgSgbQikjMAEl7IAAgEQACjAAkihQAGgbAdgZQAXAECiACICBABICZABQBAAQBUAiQAKA6A3BlQA3BiBTB5QBNB5CECAQAPAXA1ArQBsBUDECCIAZAPQC5BwC6CAQBZAwBcBAQCPBlCZCbQBLBNBJBUQCBCVBVCFQAHAVAFAVg");
	var mask_2_graphics_258 = new cjs.Graphics().p("AqWP7Qhrgkhwg8QgQhsgZh2QgsjMg8i2QgdhbgbhFIgOggIgfhIQgSgXgSgXQgTgZgRgbQinjMAEl+IAAgEQACjCAkihQAHgZAfgYQAZADChACICCABICZABQA+ASBUAlQALA8A3BkQA4BkBTB5QBLB1CKCEQAQAWA0ArQBvBVDDCBIAaAPQC6BwC7CBQBZAyBcBCQCOBlCZCeQBMBOBIBVQCACXBUCHQAFAUADAUg");
	var mask_2_graphics_259 = new cjs.Graphics().p("AqfQEQhngohthCQgRhsgZh3QgsjPg7i1QgdhdgbhEIgNggIgghJQgSgXgRgXQgTgagRgcQipjLADmBIAAgEQADjDAkijQAHgXAhgXQAbAECgACICCABICbAAQA7AUBUAqQAMA8A3BkQA5BlBUB4QBJB0CPCFQARAXA0AqQByBXDCCAIAaAPQC7BvC8CDQBZAzBcBDQCOBnCZChQBLBPBIBVQB/CaBSCJQAEATABATg");
	var mask_2_graphics_260 = new cjs.Graphics().p("AqoQOQhjgshrhIQgQhtgZh4QgtjSg6i0QgdhegbhEIgNggIgfhKQgTgXgRgXQgSgagRgcQisjMAEmEIAAgDQACjEAlikQAHgWAkgWQAdADCfACICCABICbABQA5AWBTAuQAOA8A4BkQA6BmBUB4QBGBxCVCIQASAXA0ApQB1BZDBB/IAaAPQC7BuC/CGQBYAzBcBFQCOBoCZCjQBLBRBHBWQB+CbBRCLIABAkg");
	var mask_2_graphics_261 = new cjs.Graphics().p("AqyQYQhggwhnhPQgRhtgZh6QgsjUg6i0QgdhfgbhDIgNghIgfhKQgSgXgRgXQgSgbgSgdQitjMADmGIAAgDQADjGAlikQAHgVAmgVQAfADCeACICDABICcABQA2AYBTAyQAPA9A4BkQA8BnBTB3QBFBvCaCKQAUAXAzApQB4BaDAB+IAaAPQC8BtDACJQBZA1BcBFQCNBpCYCmQBMBSBGBXQB9CdBQCNQgBASgCARg");
	var mask_2_graphics_262 = new cjs.Graphics().p("Aq9QhQhcg0hkhVQgRhtgZh7QgtjXg4izQgdhhgbhDIgNggIgfhLQgSgXgRgYQgSgbgRgdQiwjMADmJIAAgDQADjGAmimQAGgUApgUQAhAECdABICDABICdABQA0AaBTA2QAQA+A4BjQA9BpBUB3QBCBsCgCMQAUAYA0AoQB6BbDAB+IAaAOQC9BtDBCLQBZA2BcBGQCNBrCYCoQBLBUBFBXQB9CfBOCQQgCAQgFAQg");
	var mask_2_graphics_263 = new cjs.Graphics().p("ArIQrQhYg4hhhcQgRhugah7Qgtjag3iyQgdhigahCIgOgiIgfhLIgigvIgjg5QizjMAEmMIAAgDQACjIAnimQAGgTArgSQAkADCbACICEABICeAAQAxAcBSA7QASA+A4BjQA+BpBUB3QBBBqCmCPQAVAYAzAnQB9BdC/B8IAaAPQC+BsDCCNQBZA3BcBIQCMBsCYCrQBLBUBFBZQB8ChBNCRQgFAQgGAPg");
	var mask_2_graphics_264 = new cjs.Graphics().p("ArSQ0QhVg7hehiQgRhugah9Qgtjeg3ixQgdhigahDIgNghIgghLIghgxIgjg5Qi1jMAEmPIAAgCQACjKAnimQAGgSAugSQAmADCaACICFABICeABQAvAeBSA+QASA/A5BjQA/BrBUB1QA/BoCrCSQAXAXAyAoQCABeC+B7IAbAOQC+BsDECPQBZA4BcBJQCMBtCYCuQBLBVBEBbQB7CiBMCTQgHAPgJAOg");
	var mask_2_graphics_265 = new cjs.Graphics().p("ArdQ+QhRg/hbhpQgRhvgah9Qgujgg1ixQgdhkgahCIgNghIgghMIghgxQgSgdgQgdQi4jMAEmSIAAgCQACjLAoinQAGgRAwgQQAoADCZABICFABICfABQAsAgBSBCQAUBAA5BjQBABrBVB2QA8BlCxCUQAXAYAzAnQCDBfC9B6IAaAPQC/BqDFCTQBZA5BcBJQCMBvCYCwQBLBXBDBbQB6CkBLCVQgJAPgKANg");
	var mask_2_graphics_266 = new cjs.Graphics().p("AroRHQhNhDhYhvQgRhvgah+Qgujkg1ivQgdhmgahBIgNgiIgghMIgggyIgjg6Qi6jNAFmTIAAgDQACjMAoioQAGgPAzgQQApADCYACICGABICgAAQAqAiBRBHQAVBAA5BiQBCBtBUB1QA7BjC2CWQAZAZAyAmQCGBgC7B6IAbAOQDABqDHCVQBZA7BcBKQCLBvCYC0QBKBYBEBcQB5CmBJCXIgXAag");
	var mask_2_graphics_267 = new cjs.Graphics().p("ArzRRQhJhHhVh1QgRhwgaiAQgvjlg0ivQgchogahAIgNgiIgghMIgggzIgig7Qi9jNAFmWIAAgDQACjNAoipQAGgOA2gPQArADCXACICGABIChABIB4BuQAXBBA5BiQBDBuBVB1QA4BgC8CYQAZAZAzAmQCIBiC7B5IAbAOQDBBpDHCXQBZA8BcBLQCMBxCXC2QBKBaBDBcQB4CoBICZIgbAZg");
	var mask_2_graphics_268 = new cjs.Graphics().p("Ar+RaQhFhKhSh8QgShwgaiBQgvjpgzitQgchpgahBIgNgiIgghMIgfg0QgSgdgQgfQi/jMAEmaIAAgBQACjOApirQAGgNA4gNQAuACCVADICHABICiAAQAkAmBRBPQAYBBA6BiQBEBvBUB0QA2BfDCCaQAbAYAyAmQCKBkC7B3IAbAPQDBBnDKCaQBZA9BcBNQCLByCXC5QBKBaBCBdQB3CqBHCbIgfAXg");
	var mask_2_graphics_269 = new cjs.Graphics().p("AsIRkQhChPhPiCQgShwgaiCQgvjsgyisQgdhrgZg/IgNgjIgghNIgfg0Igig8QjBjNAEmcIAAgCQACjQAqirQAFgMA7gMQAwADCUACICIABICiAAQAiAoBQBTQAZBCA7BhQBFBxBUBzQA0BcDICdQAcAZAxAlQCNBlC6B3IAcAOQDCBnDKCdQBZA9BcBOQCLB0CXC7QBKBcBCBeQB2CsBFCdIgjAVg");
	var mask_2_graphics_270 = new cjs.Graphics().p("AsTRtQg+hShLiJQgThxgaiCQgwjvgxirQgchtgZg+IgNgjIgghNIgfg2Ighg9QjEjMAEmfIAAgCQACjRAqisQAGgLA9gKQAyACCSACICJABICkAAQAfAqBQBYQAaBCA7BhQBGByBVBzQAyBZDNCgQAcAZAyAkQCQBmC5B2IAbAPQDDBmDMCfQBZA/BcBPQCKB0CXC+QBKBeBBBeQB2CuBDCfIgmAUg");
	var mask_2_graphics_271 = new cjs.Graphics().p("AseR3Qg7hXhIiPQgShwgbiFQgvjxgxirQgchtgZg/IgNgjIgghOIgeg2Igig9QjGjNAFmiIAAgBQACjSAqisQAGgKA/gKQA0ACCSACICJABICkAAQAdAsBQBbQAbBDA7BhQBIB0BUByQAwBYDTChQAeAZAxAkQCSBoC5B1IAbANQDEBmDNCiQBaBABcBQQCJB2CXDAQBKBfBABfQB1CwBCChIgqASg");
	var mask_2_graphics_272 = new cjs.Graphics().p("AspSAQg2hZhGiWQgShxgbiGQgwj0gviqQgdhvgYg+IgNgjIgghPIgeg2Ighg+QjJjMAFmlIAAgBQACjUAritQAFgJBCgJQA2ADCRACICJABIClAAQAaAuBQBfQAcBDA8BiQBJBzBUBzQAuBVDZCkQAfAZAwAkQCWBoC3B0IAcAOQDEBmDPCjQBZBCBcBRQCKB3CWDCQBKBhBABgQB0CxBBCkIgvAPg");
	var mask_2_graphics_273 = new cjs.Graphics().p("AszSKQgzhehCicQgThygbiGQgwj3gvipQgchwgYg+IgNgjIghhPIgdg3Ighg/QjLjNAFmnIAAgBQACjVAriuQAGgHBEgIQA4ACCPACICKABICnAAQAXAwBPBkQAeBEA8BgQBKB1BVByQArBTDfCmQAfAaAxAiQCYBrC3BzIAbAOQDGBkDQCnQBZBCBcBSQCJB5CWDFQBKBhA/BhQBzC0BAClIgyAOg");
	var mask_2_graphics_274 = new cjs.Graphics().p("As+STQgwhhg/ijQgThygaiHQgxj6gtipQgdhxgYg9IgNgkIgghPIgdg4Ighg/QjNjNAEmqIAAgBQADjWArivQAGgGBHgHQA6ADCOABICKABICnAAQAVAxBPBpQAfBEA8BhQBLB2BVByQAqBQDkCoQAhAaAwAiQCbBsC2ByIAcAOQDGBkDRCoQBZBEBcBTQCJB6CWDIQBKBiA+BiQByC2A/CnIg2ANg");
	var mask_2_graphics_275 = new cjs.Graphics().p("AtJScQgshkg7iqQgUhygaiIQgxj9gtioQgdhygXg+IgNgkIghhQIgcg3IgghAQjQjNAEmtIAAgBQADjXAsiwQAFgFBJgFQA8ACCNABICMABICoAAQASAzBOBtQAhBGA8BfQBNB4BVBxQAnBNDqCsQAiAaAvAhQCeBuC1BxIAcAOQDHBkDTCqQBZBFBcBUQCIB7CWDLQBKBjA+BjQBxC4A9CoIg6ALg");
	var mask_2_graphics_276 = new cjs.Graphics().p("AtUSnQgnhqg5ivQgUhzgaiJQgykAgrinQgdh0gXg9IgNgkIghhQIgcg4IgghBQjSjNAEmvIAAgBQADjZAsixQAFgDBMgFQA+ACCMACICMABICpAAQAPA1BPBwQAhBGA9BhQBOB4BVBwQAlBMDwCtQAiAbAwAhQChBuC0BxIAcANQDHBkDVCsQBZBGBcBVQCIB9CWDNQBJBlA9BjQBxC6A7CrIg+AJg");
	var mask_2_graphics_277 = new cjs.Graphics().p("AtfSwQgkhtg1i1QgUh0gbiKQgykDgqimQgdh2gXg8IgNgkIghhRIgbg5IgghBQjVjOAFmxIAAgBQACjaAtixQAFgDBPgEQBAADCKABICNABICqAAQANA3BOB1QAiBHA9BfQBPB6BVBwQAkBJD1CvQAkAbAvAhQCkBwCzBwIAcANQDIBjDWCuQBZBHBcBWQCIB+CVDQQBKBnA8BkQBwC7A6CtIhCAIg");
	var mask_2_graphics_278 = new cjs.Graphics().p("AtpS5Qghhxgyi7QgUh0gbiMQgykFgqimQgdh2gWg8IgNgkIghhSIgbg6IgghBQjXjOAFm1IAAAAQACjbAuiyQAFgCBRgCQBCACCJABICNABICrAAQAKA5BOB5QAkBHA9BfQBQB8BWBvQAhBHD7CyQAkAaAwAhQCmBxCyBvIAcANQDKBiDXCxQBZBIBcBYQCHB/CWDSQBJBoA8BlQBvC9A4CvIhFAGg");
	var mask_2_graphics_279 = new cjs.Graphics().p("At0TDIhMk3QgUh0gbiNQgzkIgoilQgdh4gWg8IgOgkIgghRIgbg8IgfhBQjajOAFm4IAAAAQACjcAuizIBZgCQBEACCIABICOABICrAAQAIA7BNB+QAmBIA9BeQBRB9BWBvQAfBEEBC0IBUA7QCpByCyBuIAcAOQDKBhDYC0QBaBJBcBYQCHCBCVDVQBJBoA7BnQBuC/A4CxIhKAEg");
	var mask_2_graphics_280 = new cjs.Graphics().p("At/TNQgZh5gsjIQgVh1gbiNQgykMgoikQgdh5gWg7IgNglIghhSIgbg7IgfhDQjcjOAFm6IAAAAQADjdAui1QAFABBWAAQBGACCHABICPABICsAAQAFA9BNCBQAnBJA9BeQBTB+BVBvQAeBCEGC2IBVA7QCsBzCxBuIAcAMQDLBhDaC2QBZBLBcBZQCGCCCWDYQBJBqA6BmQBtDCA3CzIhOACg");
	var mask_2_graphics_281 = new cjs.Graphics().p("AuKTXQgVh8gpjPIgwkEQgzkOgnijQgdh6gVg7IgOgkIgghUIgag8IgfhDQjfjOAFm9QADjfAvi1QAEADBZABQBIABCGABICPABICtAAQADBABMCFQAoBJA+BeQBUB/BWBuQAbBAEMC5IBWA5QCuB2CwBsIAdANQDLBgDbC5QBaBLBcBaQCGCDCVDbQBJBrA6BoQBsDDA1C1IhSAAg");
	var mask_2_graphics_282 = new cjs.Graphics().p("AuUThQgbjGhNmUQhbnkgwiGQgjheglhXIgfhEQjhjOAFm/QADjgAvi2QAJAGEmACIE9ABQAABkC0EOQBaCHBaBzQATA5FlDtQCyB3CvBrQEsCDFPFMQCFCFCVDdQDTE4BOEZg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(249).to({graphics:mask_2_graphics_249,x:437.5196,y:92.1}).wait(1).to({graphics:mask_2_graphics_250,x:426.647,y:93.075}).wait(1).to({graphics:mask_2_graphics_251,x:415.772,y:94.075}).wait(1).to({graphics:mask_2_graphics_252,x:404.8721,y:95.025}).wait(1).to({graphics:mask_2_graphics_253,x:393.9971,y:96}).wait(1).to({graphics:mask_2_graphics_254,x:383.1222,y:97}).wait(1).to({graphics:mask_2_graphics_255,x:372.2462,y:97.975}).wait(1).to({graphics:mask_2_graphics_256,x:361.3713,y:98.925}).wait(1).to({graphics:mask_2_graphics_257,x:350.4713,y:99.9}).wait(1).to({graphics:mask_2_graphics_258,x:339.5964,y:100.9}).wait(1).to({graphics:mask_2_graphics_259,x:328.7214,y:101.875}).wait(1).to({graphics:mask_2_graphics_260,x:317.8548,y:102.825}).wait(1).to({graphics:mask_2_graphics_261,x:307.1465,y:103.825}).wait(1).to({graphics:mask_2_graphics_262,x:296.4466,y:104.8}).wait(1).to({graphics:mask_2_graphics_263,x:285.7716,y:105.775}).wait(1).to({graphics:mask_2_graphics_264,x:275.0967,y:106.75}).wait(1).to({graphics:mask_2_graphics_265,x:264.3967,y:107.725}).wait(1).to({graphics:mask_2_graphics_266,x:253.7447,y:108.7}).wait(1).to({graphics:mask_2_graphics_267,x:243.0448,y:109.675}).wait(1).to({graphics:mask_2_graphics_268,x:232.3698,y:110.65}).wait(1).to({graphics:mask_2_graphics_269,x:221.6949,y:111.625}).wait(1).to({graphics:mask_2_graphics_270,x:210.995,y:112.6}).wait(1).to({graphics:mask_2_graphics_271,x:200.32,y:113.6}).wait(1).to({graphics:mask_2_graphics_272,x:189.6451,y:114.55}).wait(1).to({graphics:mask_2_graphics_273,x:178.9451,y:115.525}).wait(1).to({graphics:mask_2_graphics_274,x:168.2702,y:116.525}).wait(1).to({graphics:mask_2_graphics_275,x:157.5952,y:117.5}).wait(1).to({graphics:mask_2_graphics_276,x:146.8953,y:118.45}).wait(1).to({graphics:mask_2_graphics_277,x:136.2193,y:119.425}).wait(1).to({graphics:mask_2_graphics_278,x:125.5193,y:120.425}).wait(1).to({graphics:mask_2_graphics_279,x:114.8444,y:121.4}).wait(1).to({graphics:mask_2_graphics_280,x:104.1694,y:122.325}).wait(1).to({graphics:mask_2_graphics_281,x:93.4695,y:123.2}).wait(1).to({graphics:mask_2_graphics_282,x:82.7946,y:124.125}).wait(30).to({graphics:null,x:0,y:0}).wait(48));

	// txt_allYouWant
	this.instance_8 = new lib.txt_allYouWant_color();
	this.instance_8.setTransform(150.9,140.1);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(249).to({_off:false},0).wait(27).to({alpha:0},6).to({_off:true},30).wait(48));

	// Layer_65 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_249 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_3_graphics_250 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_3_graphics_251 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_3_graphics_252 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_3_graphics_253 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_3_graphics_254 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_3_graphics_255 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_3_graphics_256 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_3_graphics_257 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_3_graphics_258 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_3_graphics_259 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_3_graphics_260 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_3_graphics_261 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_3_graphics_262 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_3_graphics_263 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_3_graphics_264 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_3_graphics_265 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_3_graphics_266 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_3_graphics_267 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_3_graphics_268 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_3_graphics_269 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_3_graphics_270 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_3_graphics_271 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_3_graphics_272 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_3_graphics_273 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_3_graphics_274 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_3_graphics_275 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_3_graphics_276 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_3_graphics_277 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_3_graphics_278 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_3_graphics_279 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_3_graphics_280 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_3_graphics_281 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_3_graphics_282 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(249).to({graphics:mask_3_graphics_249,x:377.0438,y:125.0356}).wait(1).to({graphics:mask_3_graphics_250,x:365.8438,y:125.0356}).wait(1).to({graphics:mask_3_graphics_251,x:354.6438,y:125.0356}).wait(1).to({graphics:mask_3_graphics_252,x:343.3938,y:125.0356}).wait(1).to({graphics:mask_3_graphics_253,x:332.1938,y:125.0356}).wait(1).to({graphics:mask_3_graphics_254,x:320.9938,y:125.0356}).wait(1).to({graphics:mask_3_graphics_255,x:309.7938,y:125.0356}).wait(1).to({graphics:mask_3_graphics_256,x:298.5438,y:125.0356}).wait(1).to({graphics:mask_3_graphics_257,x:287.3438,y:125.0356}).wait(1).to({graphics:mask_3_graphics_258,x:276.1438,y:125.0356}).wait(1).to({graphics:mask_3_graphics_259,x:264.9438,y:125.0356}).wait(1).to({graphics:mask_3_graphics_260,x:253.6938,y:125.0356}).wait(1).to({graphics:mask_3_graphics_261,x:242.4938,y:125.0356}).wait(1).to({graphics:mask_3_graphics_262,x:231.2938,y:125.0356}).wait(1).to({graphics:mask_3_graphics_263,x:220.0938,y:125.0356}).wait(1).to({graphics:mask_3_graphics_264,x:208.8438,y:125.0356}).wait(1).to({graphics:mask_3_graphics_265,x:197.6438,y:125.0356}).wait(1).to({graphics:mask_3_graphics_266,x:186.4438,y:125.0356}).wait(1).to({graphics:mask_3_graphics_267,x:175.2438,y:125.0356}).wait(1).to({graphics:mask_3_graphics_268,x:163.9938,y:125.0356}).wait(1).to({graphics:mask_3_graphics_269,x:152.7938,y:125.0356}).wait(1).to({graphics:mask_3_graphics_270,x:141.5938,y:125.0356}).wait(1).to({graphics:mask_3_graphics_271,x:130.3938,y:125.0356}).wait(1).to({graphics:mask_3_graphics_272,x:119.1438,y:125.0356}).wait(1).to({graphics:mask_3_graphics_273,x:107.9438,y:125.0356}).wait(1).to({graphics:mask_3_graphics_274,x:96.7438,y:125.0356}).wait(1).to({graphics:mask_3_graphics_275,x:85.5438,y:125.0356}).wait(1).to({graphics:mask_3_graphics_276,x:74.2938,y:125.0356}).wait(1).to({graphics:mask_3_graphics_277,x:63.0938,y:125.0356}).wait(1).to({graphics:mask_3_graphics_278,x:51.8938,y:125.0356}).wait(1).to({graphics:mask_3_graphics_279,x:40.6938,y:125.0356}).wait(1).to({graphics:mask_3_graphics_280,x:29.4438,y:125.0356}).wait(1).to({graphics:mask_3_graphics_281,x:18.2438,y:125.0356}).wait(1).to({graphics:mask_3_graphics_282,x:7.0438,y:125.0356}).wait(30).to({graphics:null,x:0,y:0}).wait(48));

	// txt_printInColor
	this.instance_9 = new lib.txt_printInColor();
	this.instance_9.setTransform(152.4,103.7);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(249).to({_off:false},0).to({_off:true},63).wait(48));

	// txt_allYouWant
	this.instance_10 = new lib.txt_allYouWant();
	this.instance_10.setTransform(150.9,140.1);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(249).to({_off:false},0).to({_off:true},63).wait(48));

	// Layer_71 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_249 = new cjs.Graphics().p("EgpaAIYQBJktBSkSQAAgZg8h9Ig8h4QgrgygwhuIgnhkQg4iPAXkgQALiQAWh0MBKEAALQBSCcA0N4QAaG7AKGcQCpBXDzEAQB5B/BYBvMhWbAAdQgyh8CRpYg");
	var mask_4_graphics_250 = new cjs.Graphics().p("EgpaAIYQBJktBSkSQAAgZg8h9Ig8h4QgrgygwhuIgnhkQg4iPAXkgQALiQAWh0MBKEAALQBSCcA0N4QAaG7AKGcQCpBXDzEAQB5B/BYBvMhWbAAdQgyh8CRpYg");
	var mask_4_graphics_251 = new cjs.Graphics().p("EgpaAIYQBJktBSkSQAAgZg8h9Ig8h4QgrgygwhuIgnhkQg4iPAXkgQALiQAWh0MBKEAALQBSCcA0N4QAaG7AKGcQCpBXDzEAQB5B/BYBvMhWbAAdQgyh8CRpYg");
	var mask_4_graphics_252 = new cjs.Graphics().p("EgpaAIYQBJktBSkSQAAgZg8h9Ig8h4QgrgygwhuIgnhkQg4iPAXkgQALiQAWh0MBKEAALQBSCcA0N4QAaG7AKGcQCpBXDzEAQB5B/BYBvMhWbAAdQgyh8CRpYg");
	var mask_4_graphics_253 = new cjs.Graphics().p("EgpaAIYQBJktBSkSQAAgZg8h9Ig8h4QgrgygwhuIgnhkQg4iPAXkgQALiQAWh0MBKEAALQBSCcA0N4QAaG7AKGcQCpBXDzEAQB5B/BYBvMhWbAAdQgyh8CRpYg");
	var mask_4_graphics_254 = new cjs.Graphics().p("EgpaAIYQBJktBSkSQAAgZg8h9Ig8h4QgrgygwhuIgnhkQg4iPAXkgQALiQAWh0MBKEAALQBSCcA0N4QAaG7AKGcQCpBXDzEAQB5B/BYBvMhWbAAdQgyh8CRpYg");
	var mask_4_graphics_255 = new cjs.Graphics().p("EgpaAIYQBJktBSkSQAAgZg8h9Ig8h4QgrgygwhuIgnhkQg4iPAXkgQALiQAWh0MBKEAALQBSCcA0N4QAaG7AKGcQCpBXDzEAQB5B/BYBvMhWbAAdQgyh8CRpYg");
	var mask_4_graphics_256 = new cjs.Graphics().p("EgpaAIYQBJktBSkSQAAgZg8h9Ig8h4QgrgygwhuIgnhkQg4iPAXkgQALiQAWh0MBKEAALQBSCcA0N4QAaG7AKGcQCpBXDzEAQB5B/BYBvMhWbAAdQgyh8CRpYg");
	var mask_4_graphics_257 = new cjs.Graphics().p("EgpaAIYQBJktBSkSQAAgZg8h9Ig8h4QgrgygwhuIgnhkQg4iPAXkgQALiQAWh0MBKEAALQBSCcA0N4QAaG7AKGcQCpBXDzEAQB5B/BYBvMhWbAAdQgyh8CRpYg");
	var mask_4_graphics_258 = new cjs.Graphics().p("EgpaAIYQBJktBSkSQAAgZg8h9Ig8h4QgrgygwhuIgnhkQg4iPAXkgQALiQAWh0MBKEAALQBSCcA0N4QAaG7AKGcQCpBXDzEAQB5B/BYBvMhWbAAdQgyh8CRpYg");
	var mask_4_graphics_259 = new cjs.Graphics().p("EgpaAIYQBJktBSkSQAAgZg8h9Ig8h4QgrgygwhuIgnhkQg4iPAXkgQALiQAWh0MBKEAALQBSCcA0N4QAaG7AKGcQCpBXDzEAQB5B/BYBvMhWbAAdQgyh8CRpYg");
	var mask_4_graphics_260 = new cjs.Graphics().p("EgpaAIYQBJktBSkSQAAgZg8h9Ig8h4QgrgygwhuIgnhkQg4iPAXkgQALiQAWh0MBKEAALQBSCcA0N4QAaG7AKGcQCpBXDzEAQB5B/BYBvMhWbAAdQgyh8CRpYg");
	var mask_4_graphics_261 = new cjs.Graphics().p("EgpaAIYQBJktBSkSQAAgZg8h9Ig8h4QgrgygwhuIgnhkQg4iPAXkgQALiQAWh0MBKEAALQBSCcA0N4QAaG7AKGcQCpBXDzEAQB5B/BYBvMhWbAAdQgyh8CRpYg");
	var mask_4_graphics_262 = new cjs.Graphics().p("EgpaAIYQBJktBSkSQAAgZg8h9Ig8h4QgrgygwhuIgnhkQg4iPAXkgQALiQAWh0MBKEAALQBSCcA0N4QAaG7AKGcQCpBXDzEAQB5B/BYBvMhWbAAdQgyh8CRpYg");
	var mask_4_graphics_263 = new cjs.Graphics().p("EgpaAIYQBJktBSkSQAAgZg8h9Ig8h4QgrgygwhuIgnhkQg4iPAXkgQALiQAWh0MBKEAALQBSCcA0N4QAaG7AKGcQCpBXDzEAQB5B/BYBvMhWbAAdQgyh8CRpYg");
	var mask_4_graphics_264 = new cjs.Graphics().p("EgpaAIYQBJktBSkSQAAgZg8h9Ig8h4QgrgygwhuIgnhkQg4iPAXkgQALiQAWh0MBKEAALQBSCcA0N4QAaG7AKGcQCpBXDzEAQB5B/BYBvMhWbAAdQgyh8CRpYg");
	var mask_4_graphics_265 = new cjs.Graphics().p("EgpaAIYQBJktBSkSQAAgZg8h9Ig8h4QgrgygwhuIgnhkQg4iPAXkgQALiQAWh0MBKEAALQBSCcA0N4QAaG7AKGcQCpBXDzEAQB5B/BYBvMhWbAAdQgyh8CRpYg");
	var mask_4_graphics_266 = new cjs.Graphics().p("EgpaAIYQBJktBSkSQAAgZg8h9Ig8h4QgrgygwhuIgnhkQg4iPAXkgQALiQAWh0MBKEAALQBSCcA0N4QAaG7AKGcQCpBXDzEAQB5B/BYBvMhWbAAdQgyh8CRpYg");
	var mask_4_graphics_267 = new cjs.Graphics().p("EgpaAIYQBJktBSkSQAAgZg8h9Ig8h4QgrgygwhuIgnhkQg4iPAXkgQALiQAWh0MBKEAALQBSCcA0N4QAaG7AKGcQCpBXDzEAQB5B/BYBvMhWbAAdQgyh8CRpYg");
	var mask_4_graphics_268 = new cjs.Graphics().p("EgpaAIYQBJktBSkSQAAgZg8h9Ig8h4QgrgygwhuIgnhkQg4iPAXkgQALiQAWh0MBKEAALQBSCcA0N4QAaG7AKGcQCpBXDzEAQB5B/BYBvMhWbAAdQgyh8CRpYg");
	var mask_4_graphics_269 = new cjs.Graphics().p("EgpaAIYQBJktBSkSQAAgZg8h9Ig8h4QgrgygwhuIgnhkQg4iPAXkgQALiQAWh0MBKEAALQBSCcA0N4QAaG7AKGcQCpBXDzEAQB5B/BYBvMhWbAAdQgyh8CRpYg");
	var mask_4_graphics_270 = new cjs.Graphics().p("EgpaAIYQBJktBSkSQAAgZg8h9Ig8h4QgrgygwhuIgnhkQg4iPAXkgQALiQAWh0MBKEAALQBSCcA0N4QAaG7AKGcQCpBXDzEAQB5B/BYBvMhWbAAdQgyh8CRpYg");
	var mask_4_graphics_271 = new cjs.Graphics().p("EgpaAIYQBJktBSkSQAAgZg8h9Ig8h4QgrgygwhuIgnhkQg4iPAXkgQALiQAWh0MBKEAALQBSCcA0N4QAaG7AKGcQCpBXDzEAQB5B/BYBvMhWbAAdQgyh8CRpYg");
	var mask_4_graphics_272 = new cjs.Graphics().p("EgpaAIYQBJktBSkSQAAgZg8h9Ig8h4QgrgygwhuIgnhkQg4iPAXkgQALiQAWh0MBKEAALQBSCcA0N4QAaG7AKGcQCpBXDzEAQB5B/BYBvMhWbAAdQgyh8CRpYg");
	var mask_4_graphics_273 = new cjs.Graphics().p("EgpaAIYQBJktBSkSQAAgZg8h9Ig8h4QgrgygwhuIgnhkQg4iPAXkgQALiQAWh0MBKEAALQBSCcA0N4QAaG7AKGcQCpBXDzEAQB5B/BYBvMhWbAAdQgyh8CRpYg");
	var mask_4_graphics_274 = new cjs.Graphics().p("EgpaAIYQBJktBSkSQAAgZg8h9Ig8h4QgrgygwhuIgnhkQg4iPAXkgQALiQAWh0MBKEAALQBSCcA0N4QAaG7AKGcQCpBXDzEAQB5B/BYBvMhWbAAdQgyh8CRpYg");
	var mask_4_graphics_275 = new cjs.Graphics().p("EgpaAIYQBJktBSkSQAAgZg8h9Ig8h4QgrgygwhuIgnhkQg4iPAXkgQALiQAWh0MBKEAALQBSCcA0N4QAaG7AKGcQCpBXDzEAQB5B/BYBvMhWbAAdQgyh8CRpYg");
	var mask_4_graphics_276 = new cjs.Graphics().p("EgpaAIYQBJktBSkSQAAgZg8h9Ig8h4QgrgygwhuIgnhkQg4iPAXkgQALiQAWh0MBKEAALQBSCcA0N4QAaG7AKGcQCpBXDzEAQB5B/BYBvMhWbAAdQgyh8CRpYg");
	var mask_4_graphics_277 = new cjs.Graphics().p("EgpaAIYQBJktBSkSQAAgZg8h9Ig8h4QgrgygwhuIgnhkQg4iPAXkgQALiQAWh0MBKEAALQBSCcA0N4QAaG7AKGcQCpBXDzEAQB5B/BYBvMhWbAAdQgyh8CRpYg");
	var mask_4_graphics_278 = new cjs.Graphics().p("EgpaAIYQBJktBSkSQAAgZg8h9Ig8h4QgrgygwhuIgnhkQg4iPAXkgQALiQAWh0MBKEAALQBSCcA0N4QAaG7AKGcQCpBXDzEAQB5B/BYBvMhWbAAdQgyh8CRpYg");
	var mask_4_graphics_279 = new cjs.Graphics().p("EgpaAIYQBJktBSkSQAAgZg8h9Ig8h4QgrgygwhuIgnhkQg4iPAXkgQALiQAWh0MBKEAALQBSCcA0N4QAaG7AKGcQCpBXDzEAQB5B/BYBvMhWbAAdQgyh8CRpYg");
	var mask_4_graphics_280 = new cjs.Graphics().p("EgpaAIYQBJktBSkSQAAgZg8h9Ig8h4QgrgygwhuIgnhkQg4iPAXkgQALiQAWh0MBKEAALQBSCcA0N4QAaG7AKGcQCpBXDzEAQB5B/BYBvMhWbAAdQgyh8CRpYg");
	var mask_4_graphics_281 = new cjs.Graphics().p("EgpaAIYQBJktBSkSQAAgZg8h9Ig8h4QgrgygwhuIgnhkQg4iPAXkgQALiQAWh0MBKEAALQBSCcA0N4QAaG7AKGcQCpBXDzEAQB5B/BYBvMhWbAAdQgyh8CRpYg");
	var mask_4_graphics_282 = new cjs.Graphics().p("EgpaAIYQBJktBSkSQAAgZg8h9Ig8h4QgrgygwhuIgnhkQg4iPAXkgQALiQAWh0MBKEAALQBSCcA0N4QAaG7AKGcQCpBXDzEAQB5B/BYBvMhWbAAdQgyh8CRpYg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(249).to({graphics:mask_4_graphics_249,x:581.6775,y:126.05}).wait(1).to({graphics:mask_4_graphics_250,x:570.4775,y:126.05}).wait(1).to({graphics:mask_4_graphics_251,x:559.2775,y:126.05}).wait(1).to({graphics:mask_4_graphics_252,x:548.0275,y:126.05}).wait(1).to({graphics:mask_4_graphics_253,x:536.8275,y:126.05}).wait(1).to({graphics:mask_4_graphics_254,x:525.6275,y:126.05}).wait(1).to({graphics:mask_4_graphics_255,x:514.4275,y:126.05}).wait(1).to({graphics:mask_4_graphics_256,x:503.1775,y:126.05}).wait(1).to({graphics:mask_4_graphics_257,x:491.9775,y:126.05}).wait(1).to({graphics:mask_4_graphics_258,x:480.7775,y:126.05}).wait(1).to({graphics:mask_4_graphics_259,x:469.5775,y:126.05}).wait(1).to({graphics:mask_4_graphics_260,x:458.3275,y:126.05}).wait(1).to({graphics:mask_4_graphics_261,x:447.1275,y:126.05}).wait(1).to({graphics:mask_4_graphics_262,x:435.9275,y:126.05}).wait(1).to({graphics:mask_4_graphics_263,x:424.7275,y:126.05}).wait(1).to({graphics:mask_4_graphics_264,x:413.4775,y:126.05}).wait(1).to({graphics:mask_4_graphics_265,x:402.2775,y:126.05}).wait(1).to({graphics:mask_4_graphics_266,x:391.0775,y:126.05}).wait(1).to({graphics:mask_4_graphics_267,x:379.8775,y:126.05}).wait(1).to({graphics:mask_4_graphics_268,x:368.6275,y:126.05}).wait(1).to({graphics:mask_4_graphics_269,x:357.4275,y:126.05}).wait(1).to({graphics:mask_4_graphics_270,x:346.2275,y:126.05}).wait(1).to({graphics:mask_4_graphics_271,x:335.0275,y:126.05}).wait(1).to({graphics:mask_4_graphics_272,x:323.7775,y:126.05}).wait(1).to({graphics:mask_4_graphics_273,x:312.5775,y:126.05}).wait(1).to({graphics:mask_4_graphics_274,x:301.3775,y:126.05}).wait(1).to({graphics:mask_4_graphics_275,x:290.1775,y:126.05}).wait(1).to({graphics:mask_4_graphics_276,x:278.9275,y:126.05}).wait(1).to({graphics:mask_4_graphics_277,x:267.7275,y:126.05}).wait(1).to({graphics:mask_4_graphics_278,x:256.5275,y:126.05}).wait(1).to({graphics:mask_4_graphics_279,x:245.3275,y:126.05}).wait(1).to({graphics:mask_4_graphics_280,x:234.0775,y:126.05}).wait(1).to({graphics:mask_4_graphics_281,x:222.8775,y:126.05}).wait(1).to({graphics:mask_4_graphics_282,x:211.6775,y:126.05}).wait(30).to({graphics:null,x:0,y:0}).wait(48));

	// txt_printInColor
	this.instance_11 = new lib.txt_printInColor("synched",0,false);
	this.instance_11.setTransform(152.4,103.7);
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(249).to({_off:false},0).wait(55).to({startPosition:55},0).to({alpha:0,startPosition:62},7).to({_off:true},1).wait(48));

	// Layer_67
	this.instance_12 = new lib.main_paint();
	this.instance_12.setTransform(583,125.05);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(249).to({_off:false},0).to({x:280.25},27).to({x:213,alpha:0},6).to({_off:true},30).wait(48));

	// print_color_noColor
	this.instance_13 = new lib.print_color_noColor();
	this.instance_13.setTransform(152.05,112.55,0.4026,0.4026,0,0,0,0,0.1);
	this.instance_13.alpha = 0.1211;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(239).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1,y:104.05,alpha:1},8,cjs.Ease.quadOut).to({_off:true},29).wait(84));

	// txt_allYouWant
	this.instance_14 = new lib.txt_allYouWant();
	this.instance_14.setTransform(151.6,127.05,0.4026,0.4026);
	this.instance_14.alpha = 0.1211;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(239).to({_off:false},0).to({scaleX:1,scaleY:1,x:150.9,y:140.1,alpha:1},8,cjs.Ease.quadOut).wait(57).to({alpha:0},7).to({_off:true},1).wait(48));

	// txt_twoYears
	this.instance_15 = new lib.txt_twoYears();
	this.instance_15.setTransform(147.6,-2.55);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(189).to({_off:false},0).to({y:22.45,alpha:1},9,cjs.Ease.quadInOut).wait(31).to({y:-2.55,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(121));

	// txt_unlimitedInk
	this.instance_16 = new lib.txt_unlimitedInk();
	this.instance_16.setTransform(152.3,33.85);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(189).to({_off:false},0).to({y:53.85,alpha:1},9,cjs.Ease.quadInOut).wait(31).to({y:33.85,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(121));

	// inkBottles
	this.instance_17 = new lib.inkBottles_mc();
	this.instance_17.setTransform(149.05,236.05);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(189).to({_off:false},0).to({y:166.05,alpha:1},9,cjs.Ease.quadOut).wait(31).to({y:236.05,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(121));

	// White_Fade
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0)").s().p("A4mUyMAAAgpjMAxNAAAMAAAApjg");
	this.shape_3.setTransform(150.55,126.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.169)").s().p("A4mUyMAAAgpjMAxNAAAMAAAApjg");
	this.shape_4.setTransform(150.55,126.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.333)").s().p("A4mUyMAAAgpjMAxNAAAMAAAApjg");
	this.shape_5.setTransform(150.55,126.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.502)").s().p("A4mUyMAAAgpjMAxNAAAMAAAApjg");
	this.shape_6.setTransform(150.55,126.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.667)").s().p("A4mUyMAAAgpjMAxNAAAMAAAApjg");
	this.shape_7.setTransform(150.55,126.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.831)").s().p("A4mUyMAAAgpjMAxNAAAMAAAApjg");
	this.shape_8.setTransform(150.55,126.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("A4mUyMAAAgpjMAxNAAAMAAAApjg");
	this.shape_9.setTransform(150.55,126.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3}]},180).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[]},3).wait(171));

	// Layer_55 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_162 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhWIgfhEQjhjNAFnAQADjfAvi3QAJAGEmADIE9ABQAABkC0EOQBaCHBaBzQATA4FkDuQCzB1CvBsQEsCDFPFNQCnCmBsCMg");
	var mask_5_graphics_163 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_5_graphics_164 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_5_graphics_165 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_5_graphics_166 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_5_graphics_167 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_5_graphics_168 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_5_graphics_169 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_5_graphics_170 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_5_graphics_171 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_5_graphics_172 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_5_graphics_173 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_5_graphics_174 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_5_graphics_175 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_5_graphics_176 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_5_graphics_177 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_5_graphics_178 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_5_graphics_179 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_5_graphics_180 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_5_graphics_181 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_5_graphics_182 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_5_graphics_183 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_5_graphics_184 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_5_graphics_185 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_5_graphics_186 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_5_graphics_187 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_5_graphics_188 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(162).to({graphics:mask_5_graphics_162,x:365.5196,y:91.0875}).wait(1).to({graphics:mask_5_graphics_163,x:355.0696,y:91.1}).wait(1).to({graphics:mask_5_graphics_164,x:344.6196,y:91.1}).wait(1).to({graphics:mask_5_graphics_165,x:334.1196,y:91.1}).wait(1).to({graphics:mask_5_graphics_166,x:323.6696,y:91.1}).wait(1).to({graphics:mask_5_graphics_167,x:313.2196,y:91.1}).wait(1).to({graphics:mask_5_graphics_168,x:302.7696,y:91.1}).wait(1).to({graphics:mask_5_graphics_169,x:292.2696,y:91.1}).wait(1).to({graphics:mask_5_graphics_170,x:281.8196,y:91.1}).wait(1).to({graphics:mask_5_graphics_171,x:271.3696,y:91.1}).wait(1).to({graphics:mask_5_graphics_172,x:260.9196,y:91.1}).wait(1).to({graphics:mask_5_graphics_173,x:250.4196,y:91.1}).wait(1).to({graphics:mask_5_graphics_174,x:239.9696,y:91.1}).wait(1).to({graphics:mask_5_graphics_175,x:229.5196,y:91.1}).wait(1).to({graphics:mask_5_graphics_176,x:219.0696,y:91.1}).wait(1).to({graphics:mask_5_graphics_177,x:208.6196,y:91.1}).wait(1).to({graphics:mask_5_graphics_178,x:198.1196,y:91.1}).wait(1).to({graphics:mask_5_graphics_179,x:187.6696,y:91.1}).wait(1).to({graphics:mask_5_graphics_180,x:177.2196,y:91.1}).wait(1).to({graphics:mask_5_graphics_181,x:166.7696,y:91.1}).wait(1).to({graphics:mask_5_graphics_182,x:156.2696,y:91.1}).wait(1).to({graphics:mask_5_graphics_183,x:145.8196,y:91.1}).wait(1).to({graphics:mask_5_graphics_184,x:135.3696,y:91.1}).wait(1).to({graphics:mask_5_graphics_185,x:124.9196,y:91.1}).wait(1).to({graphics:mask_5_graphics_186,x:114.4196,y:91.1}).wait(1).to({graphics:mask_5_graphics_187,x:103.9696,y:91.1}).wait(1).to({graphics:mask_5_graphics_188,x:93.5196,y:91.1}).wait(1).to({graphics:null,x:0,y:0}).wait(171));

	// txt_toner_cartridges
	this.instance_18 = new lib.txt_toner_cartridges_color_02();
	this.instance_18.setTransform(139.75,141.2);
	this.instance_18._off = true;

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(162).to({_off:false},0).wait(20).to({alpha:0},6).to({_off:true},1).wait(171));

	// Layer_53 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_162 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_6_graphics_163 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_6_graphics_164 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_6_graphics_165 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_6_graphics_166 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_6_graphics_167 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_6_graphics_168 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_6_graphics_169 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_6_graphics_170 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_6_graphics_171 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_6_graphics_172 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_6_graphics_173 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_6_graphics_174 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_6_graphics_175 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_6_graphics_176 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_6_graphics_177 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_6_graphics_178 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_6_graphics_179 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_6_graphics_180 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_6_graphics_181 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_6_graphics_182 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_6_graphics_183 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_6_graphics_184 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_6_graphics_185 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_6_graphics_186 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_6_graphics_187 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_6_graphics_188 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(162).to({graphics:mask_6_graphics_162,x:306.0438,y:125.0356}).wait(1).to({graphics:mask_6_graphics_163,x:295.5938,y:125.0356}).wait(1).to({graphics:mask_6_graphics_164,x:285.1438,y:125.0356}).wait(1).to({graphics:mask_6_graphics_165,x:274.6438,y:125.0356}).wait(1).to({graphics:mask_6_graphics_166,x:264.1938,y:125.0356}).wait(1).to({graphics:mask_6_graphics_167,x:253.7438,y:125.0356}).wait(1).to({graphics:mask_6_graphics_168,x:243.2938,y:125.0356}).wait(1).to({graphics:mask_6_graphics_169,x:232.7938,y:125.0356}).wait(1).to({graphics:mask_6_graphics_170,x:222.3438,y:125.0356}).wait(1).to({graphics:mask_6_graphics_171,x:211.8938,y:125.0356}).wait(1).to({graphics:mask_6_graphics_172,x:201.4438,y:125.0356}).wait(1).to({graphics:mask_6_graphics_173,x:190.9438,y:125.0356}).wait(1).to({graphics:mask_6_graphics_174,x:180.4938,y:125.0356}).wait(1).to({graphics:mask_6_graphics_175,x:170.0438,y:125.0356}).wait(1).to({graphics:mask_6_graphics_176,x:159.5938,y:125.0356}).wait(1).to({graphics:mask_6_graphics_177,x:149.1438,y:125.0356}).wait(1).to({graphics:mask_6_graphics_178,x:138.6438,y:125.0356}).wait(1).to({graphics:mask_6_graphics_179,x:128.1938,y:125.0356}).wait(1).to({graphics:mask_6_graphics_180,x:117.7438,y:125.0356}).wait(1).to({graphics:mask_6_graphics_181,x:107.2938,y:125.0356}).wait(1).to({graphics:mask_6_graphics_182,x:96.7938,y:125.0356}).wait(1).to({graphics:mask_6_graphics_183,x:86.3438,y:125.0356}).wait(1).to({graphics:mask_6_graphics_184,x:75.8938,y:125.0356}).wait(1).to({graphics:mask_6_graphics_185,x:65.4438,y:125.0356}).wait(1).to({graphics:mask_6_graphics_186,x:54.9438,y:125.0356}).wait(1).to({graphics:mask_6_graphics_187,x:44.4938,y:125.0356}).wait(1).to({graphics:mask_6_graphics_188,x:34.0438,y:125.0356}).wait(1).to({graphics:null,x:0,y:0}).wait(171));

	// Layer_57
	this.instance_19 = new lib.txt_toner_cartridges_color();
	this.instance_19.setTransform(139.75,141.2);
	this.instance_19._off = true;

	var maskedShapeInstanceList = [this.instance_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(162).to({_off:false},0).wait(20).to({alpha:0},6).to({_off:true},1).wait(171));

	// Layer_47 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_162 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_7_graphics_163 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_7_graphics_164 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_7_graphics_165 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_7_graphics_166 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_7_graphics_167 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_7_graphics_168 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_7_graphics_169 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_7_graphics_170 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_7_graphics_171 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_7_graphics_172 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_7_graphics_173 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_7_graphics_174 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_7_graphics_175 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_7_graphics_176 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_7_graphics_177 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_7_graphics_178 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_7_graphics_179 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_7_graphics_180 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_7_graphics_181 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_7_graphics_182 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_7_graphics_183 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_7_graphics_184 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_7_graphics_185 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_7_graphics_186 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_7_graphics_187 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_7_graphics_188 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(162).to({graphics:mask_7_graphics_162,x:306.0438,y:125.0356}).wait(1).to({graphics:mask_7_graphics_163,x:295.5938,y:125.0356}).wait(1).to({graphics:mask_7_graphics_164,x:285.1438,y:125.0356}).wait(1).to({graphics:mask_7_graphics_165,x:274.6438,y:125.0356}).wait(1).to({graphics:mask_7_graphics_166,x:264.1938,y:125.0356}).wait(1).to({graphics:mask_7_graphics_167,x:253.7438,y:125.0356}).wait(1).to({graphics:mask_7_graphics_168,x:243.2938,y:125.0356}).wait(1).to({graphics:mask_7_graphics_169,x:232.7938,y:125.0356}).wait(1).to({graphics:mask_7_graphics_170,x:222.3438,y:125.0356}).wait(1).to({graphics:mask_7_graphics_171,x:211.8938,y:125.0356}).wait(1).to({graphics:mask_7_graphics_172,x:201.4438,y:125.0356}).wait(1).to({graphics:mask_7_graphics_173,x:190.9438,y:125.0356}).wait(1).to({graphics:mask_7_graphics_174,x:180.4938,y:125.0356}).wait(1).to({graphics:mask_7_graphics_175,x:170.0438,y:125.0356}).wait(1).to({graphics:mask_7_graphics_176,x:159.5938,y:125.0356}).wait(1).to({graphics:mask_7_graphics_177,x:149.1438,y:125.0356}).wait(1).to({graphics:mask_7_graphics_178,x:138.6438,y:125.0356}).wait(1).to({graphics:mask_7_graphics_179,x:128.1938,y:125.0356}).wait(1).to({graphics:mask_7_graphics_180,x:117.7438,y:125.0356}).wait(1).to({graphics:mask_7_graphics_181,x:107.2938,y:125.0356}).wait(1).to({graphics:mask_7_graphics_182,x:96.7938,y:125.0356}).wait(1).to({graphics:mask_7_graphics_183,x:86.3438,y:125.0356}).wait(1).to({graphics:mask_7_graphics_184,x:75.8938,y:125.0356}).wait(1).to({graphics:mask_7_graphics_185,x:65.4438,y:125.0356}).wait(1).to({graphics:mask_7_graphics_186,x:54.9438,y:125.0356}).wait(1).to({graphics:mask_7_graphics_187,x:44.4938,y:125.0356}).wait(1).to({graphics:mask_7_graphics_188,x:34.0438,y:125.0356}).wait(1).to({graphics:null,x:0,y:0}).wait(171));

	// txt_noMore
	this.instance_20 = new lib.txt_noMore_color_02();
	this.instance_20.setTransform(136.25,73.2);
	this.instance_20._off = true;

	var maskedShapeInstanceList = [this.instance_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(162).to({_off:false},0).wait(20).to({alpha:0},6).to({_off:true},1).wait(171));

	// Layer_45 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_162 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhWIgfhEQjhjNAFnAQADjfAvi3QAJAGEmADIE9ABQAABkC0EOQBaCHBaBzQATA4FkDuQCzB1CvBsQEsCDFPFNQCnCmBsCMg");
	var mask_8_graphics_163 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_8_graphics_164 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_8_graphics_165 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_8_graphics_166 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_8_graphics_167 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_8_graphics_168 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_8_graphics_169 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_8_graphics_170 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_8_graphics_171 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_8_graphics_172 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_8_graphics_173 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_8_graphics_174 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_8_graphics_175 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_8_graphics_176 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_8_graphics_177 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_8_graphics_178 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_8_graphics_179 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_8_graphics_180 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_8_graphics_181 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_8_graphics_182 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_8_graphics_183 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_8_graphics_184 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_8_graphics_185 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_8_graphics_186 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_8_graphics_187 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_8_graphics_188 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(162).to({graphics:mask_8_graphics_162,x:365.5196,y:91.0875}).wait(1).to({graphics:mask_8_graphics_163,x:355.0696,y:91.1}).wait(1).to({graphics:mask_8_graphics_164,x:344.6196,y:91.1}).wait(1).to({graphics:mask_8_graphics_165,x:334.1196,y:91.1}).wait(1).to({graphics:mask_8_graphics_166,x:323.6696,y:91.1}).wait(1).to({graphics:mask_8_graphics_167,x:313.2196,y:91.1}).wait(1).to({graphics:mask_8_graphics_168,x:302.7696,y:91.1}).wait(1).to({graphics:mask_8_graphics_169,x:292.2696,y:91.1}).wait(1).to({graphics:mask_8_graphics_170,x:281.8196,y:91.1}).wait(1).to({graphics:mask_8_graphics_171,x:271.3696,y:91.1}).wait(1).to({graphics:mask_8_graphics_172,x:260.9196,y:91.1}).wait(1).to({graphics:mask_8_graphics_173,x:250.4196,y:91.1}).wait(1).to({graphics:mask_8_graphics_174,x:239.9696,y:91.1}).wait(1).to({graphics:mask_8_graphics_175,x:229.5196,y:91.1}).wait(1).to({graphics:mask_8_graphics_176,x:219.0696,y:91.1}).wait(1).to({graphics:mask_8_graphics_177,x:208.6196,y:91.1}).wait(1).to({graphics:mask_8_graphics_178,x:198.1196,y:91.1}).wait(1).to({graphics:mask_8_graphics_179,x:187.6696,y:91.1}).wait(1).to({graphics:mask_8_graphics_180,x:177.2196,y:91.1}).wait(1).to({graphics:mask_8_graphics_181,x:166.7696,y:91.1}).wait(1).to({graphics:mask_8_graphics_182,x:156.2696,y:91.1}).wait(1).to({graphics:mask_8_graphics_183,x:145.8196,y:91.1}).wait(1).to({graphics:mask_8_graphics_184,x:135.3696,y:91.1}).wait(1).to({graphics:mask_8_graphics_185,x:124.9196,y:91.1}).wait(1).to({graphics:mask_8_graphics_186,x:114.4196,y:91.1}).wait(1).to({graphics:mask_8_graphics_187,x:103.9696,y:91.1}).wait(1).to({graphics:mask_8_graphics_188,x:93.5196,y:91.1}).wait(1).to({graphics:null,x:0,y:0}).wait(171));

	// txt_noMore
	this.instance_21 = new lib.txt_noMore_color();
	this.instance_21.setTransform(136.25,73.2);
	this.instance_21._off = true;

	var maskedShapeInstanceList = [this.instance_21];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(162).to({_off:false},0).wait(20).to({alpha:0},6).to({_off:true},1).wait(171));

	// Layer_51 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_162 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_9_graphics_163 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_9_graphics_164 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_9_graphics_165 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_9_graphics_166 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_9_graphics_167 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_9_graphics_168 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_9_graphics_169 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_9_graphics_170 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_9_graphics_171 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_9_graphics_172 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_9_graphics_173 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_9_graphics_174 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_9_graphics_175 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_9_graphics_176 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_9_graphics_177 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_9_graphics_178 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_9_graphics_179 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_9_graphics_180 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_9_graphics_181 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_9_graphics_182 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_9_graphics_183 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_9_graphics_184 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_9_graphics_185 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_9_graphics_186 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_9_graphics_187 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_9_graphics_188 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(162).to({graphics:mask_9_graphics_162,x:306.0438,y:125.0356}).wait(1).to({graphics:mask_9_graphics_163,x:295.5938,y:125.0356}).wait(1).to({graphics:mask_9_graphics_164,x:285.1438,y:125.0356}).wait(1).to({graphics:mask_9_graphics_165,x:274.6438,y:125.0356}).wait(1).to({graphics:mask_9_graphics_166,x:264.1938,y:125.0356}).wait(1).to({graphics:mask_9_graphics_167,x:253.7438,y:125.0356}).wait(1).to({graphics:mask_9_graphics_168,x:243.2938,y:125.0356}).wait(1).to({graphics:mask_9_graphics_169,x:232.7938,y:125.0356}).wait(1).to({graphics:mask_9_graphics_170,x:222.3438,y:125.0356}).wait(1).to({graphics:mask_9_graphics_171,x:211.8938,y:125.0356}).wait(1).to({graphics:mask_9_graphics_172,x:201.4438,y:125.0356}).wait(1).to({graphics:mask_9_graphics_173,x:190.9438,y:125.0356}).wait(1).to({graphics:mask_9_graphics_174,x:180.4938,y:125.0356}).wait(1).to({graphics:mask_9_graphics_175,x:170.0438,y:125.0356}).wait(1).to({graphics:mask_9_graphics_176,x:159.5938,y:125.0356}).wait(1).to({graphics:mask_9_graphics_177,x:149.1438,y:125.0356}).wait(1).to({graphics:mask_9_graphics_178,x:138.6438,y:125.0356}).wait(1).to({graphics:mask_9_graphics_179,x:128.1938,y:125.0356}).wait(1).to({graphics:mask_9_graphics_180,x:117.7438,y:125.0356}).wait(1).to({graphics:mask_9_graphics_181,x:107.2938,y:125.0356}).wait(1).to({graphics:mask_9_graphics_182,x:96.7938,y:125.0356}).wait(1).to({graphics:mask_9_graphics_183,x:86.3438,y:125.0356}).wait(1).to({graphics:mask_9_graphics_184,x:75.8938,y:125.0356}).wait(1).to({graphics:mask_9_graphics_185,x:65.4438,y:125.0356}).wait(1).to({graphics:mask_9_graphics_186,x:54.9438,y:125.0356}).wait(1).to({graphics:mask_9_graphics_187,x:44.4938,y:125.0356}).wait(1).to({graphics:mask_9_graphics_188,x:34.0438,y:125.0356}).wait(1).to({graphics:null,x:0,y:0}).wait(171));

	// txt_expensive
	this.instance_22 = new lib.txt_expensive_color_02();
	this.instance_22.setTransform(135.2,105.45);
	this.instance_22._off = true;

	var maskedShapeInstanceList = [this.instance_22];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(162).to({_off:false},0).wait(17).to({alpha:0},6).to({_off:true},4).wait(171));

	// Layer_49 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	var mask_10_graphics_162 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhWIgfhEQjhjNAFnAQADjfAvi3QAJAGEmADIE9ABQAABkC0EOQBaCHBaBzQATA4FkDuQCzB1CvBsQEsCDFPFNQCnCmBsCMg");
	var mask_10_graphics_163 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_10_graphics_164 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_10_graphics_165 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_10_graphics_166 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_10_graphics_167 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_10_graphics_168 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_10_graphics_169 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_10_graphics_170 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_10_graphics_171 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_10_graphics_172 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_10_graphics_173 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_10_graphics_174 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_10_graphics_175 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_10_graphics_176 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_10_graphics_177 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_10_graphics_178 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_10_graphics_179 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_10_graphics_180 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_10_graphics_181 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_10_graphics_182 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_10_graphics_183 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_10_graphics_184 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_10_graphics_185 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_10_graphics_186 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_10_graphics_187 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");
	var mask_10_graphics_188 = new cjs.Graphics().p("AtgOiQglkThukxQgjhgglhXIgfhDQjhjNAFnAQADjfAvi3QAJAGEmACIE9ABQAABlC0ENQBaCHBaBzQATA5FkDuQCzB1CvBsQEsCDFPFMQCnCnBsCLg");

	this.timeline.addTween(cjs.Tween.get(mask_10).to({graphics:null,x:0,y:0}).wait(162).to({graphics:mask_10_graphics_162,x:365.5196,y:91.0875}).wait(1).to({graphics:mask_10_graphics_163,x:355.0696,y:91.1}).wait(1).to({graphics:mask_10_graphics_164,x:344.6196,y:91.1}).wait(1).to({graphics:mask_10_graphics_165,x:334.1196,y:91.1}).wait(1).to({graphics:mask_10_graphics_166,x:323.6696,y:91.1}).wait(1).to({graphics:mask_10_graphics_167,x:313.2196,y:91.1}).wait(1).to({graphics:mask_10_graphics_168,x:302.7696,y:91.1}).wait(1).to({graphics:mask_10_graphics_169,x:292.2696,y:91.1}).wait(1).to({graphics:mask_10_graphics_170,x:281.8196,y:91.1}).wait(1).to({graphics:mask_10_graphics_171,x:271.3696,y:91.1}).wait(1).to({graphics:mask_10_graphics_172,x:260.9196,y:91.1}).wait(1).to({graphics:mask_10_graphics_173,x:250.4196,y:91.1}).wait(1).to({graphics:mask_10_graphics_174,x:239.9696,y:91.1}).wait(1).to({graphics:mask_10_graphics_175,x:229.5196,y:91.1}).wait(1).to({graphics:mask_10_graphics_176,x:219.0696,y:91.1}).wait(1).to({graphics:mask_10_graphics_177,x:208.6196,y:91.1}).wait(1).to({graphics:mask_10_graphics_178,x:198.1196,y:91.1}).wait(1).to({graphics:mask_10_graphics_179,x:187.6696,y:91.1}).wait(1).to({graphics:mask_10_graphics_180,x:177.2196,y:91.1}).wait(1).to({graphics:mask_10_graphics_181,x:166.7696,y:91.1}).wait(1).to({graphics:mask_10_graphics_182,x:156.2696,y:91.1}).wait(1).to({graphics:mask_10_graphics_183,x:145.8196,y:91.1}).wait(1).to({graphics:mask_10_graphics_184,x:135.3696,y:91.1}).wait(1).to({graphics:mask_10_graphics_185,x:124.9196,y:91.1}).wait(1).to({graphics:mask_10_graphics_186,x:114.4196,y:91.1}).wait(1).to({graphics:mask_10_graphics_187,x:103.9696,y:91.1}).wait(1).to({graphics:mask_10_graphics_188,x:93.5196,y:91.1}).wait(1).to({graphics:null,x:0,y:0}).wait(171));

	// txt_expensive
	this.instance_23 = new lib.txt_expensive_color();
	this.instance_23.setTransform(135.2,105.45);
	this.instance_23._off = true;

	var maskedShapeInstanceList = [this.instance_23];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(162).to({_off:false},0).wait(17).to({alpha:0},6).to({_off:true},4).wait(171));

	// Layer_43 (mask)
	var mask_11 = new cjs.Shape();
	mask_11._off = true;
	var mask_11_graphics_162 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_11_graphics_163 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_11_graphics_164 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_11_graphics_165 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_11_graphics_166 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_11_graphics_167 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_11_graphics_168 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_11_graphics_169 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_11_graphics_170 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_11_graphics_171 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_11_graphics_172 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_11_graphics_173 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_11_graphics_174 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_11_graphics_175 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_11_graphics_176 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_11_graphics_177 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_11_graphics_178 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_11_graphics_179 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_11_graphics_180 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_11_graphics_181 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_11_graphics_182 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_11_graphics_183 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_11_graphics_184 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_11_graphics_185 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_11_graphics_186 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_11_graphics_187 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");
	var mask_11_graphics_188 = new cjs.Graphics().p("ArDUEQgdjdBWltQAahzA6jSQBAjpAYhkQBPlCCFkHQBDiEAzhDIGeocIHCA3Qm2EBj6HTQh8DqglC2QiKIsB4G/QAmCMA7BwQAdA4AWAcIlXAUQkdAPg9AAIgPgBg");

	this.timeline.addTween(cjs.Tween.get(mask_11).to({graphics:null,x:0,y:0}).wait(162).to({graphics:mask_11_graphics_162,x:306.0438,y:125.0356}).wait(1).to({graphics:mask_11_graphics_163,x:295.5938,y:125.0356}).wait(1).to({graphics:mask_11_graphics_164,x:285.1438,y:125.0356}).wait(1).to({graphics:mask_11_graphics_165,x:274.6438,y:125.0356}).wait(1).to({graphics:mask_11_graphics_166,x:264.1938,y:125.0356}).wait(1).to({graphics:mask_11_graphics_167,x:253.7438,y:125.0356}).wait(1).to({graphics:mask_11_graphics_168,x:243.2938,y:125.0356}).wait(1).to({graphics:mask_11_graphics_169,x:232.7938,y:125.0356}).wait(1).to({graphics:mask_11_graphics_170,x:222.3438,y:125.0356}).wait(1).to({graphics:mask_11_graphics_171,x:211.8938,y:125.0356}).wait(1).to({graphics:mask_11_graphics_172,x:201.4438,y:125.0356}).wait(1).to({graphics:mask_11_graphics_173,x:190.9438,y:125.0356}).wait(1).to({graphics:mask_11_graphics_174,x:180.4938,y:125.0356}).wait(1).to({graphics:mask_11_graphics_175,x:170.0438,y:125.0356}).wait(1).to({graphics:mask_11_graphics_176,x:159.5938,y:125.0356}).wait(1).to({graphics:mask_11_graphics_177,x:149.1438,y:125.0356}).wait(1).to({graphics:mask_11_graphics_178,x:138.6438,y:125.0356}).wait(1).to({graphics:mask_11_graphics_179,x:128.1938,y:125.0356}).wait(1).to({graphics:mask_11_graphics_180,x:117.7438,y:125.0356}).wait(1).to({graphics:mask_11_graphics_181,x:107.2938,y:125.0356}).wait(1).to({graphics:mask_11_graphics_182,x:96.7938,y:125.0356}).wait(1).to({graphics:mask_11_graphics_183,x:86.3438,y:125.0356}).wait(1).to({graphics:mask_11_graphics_184,x:75.8938,y:125.0356}).wait(1).to({graphics:mask_11_graphics_185,x:65.4438,y:125.0356}).wait(1).to({graphics:mask_11_graphics_186,x:54.9438,y:125.0356}).wait(1).to({graphics:mask_11_graphics_187,x:44.4938,y:125.0356}).wait(1).to({graphics:mask_11_graphics_188,x:34.0438,y:125.0356}).wait(1).to({graphics:null,x:0,y:0}).wait(171));

	// txt_expensive
	this.instance_24 = new lib.txt_expensive_color();
	this.instance_24.setTransform(135.2,105.45);
	this.instance_24._off = true;

	var maskedShapeInstanceList = [this.instance_24];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_11;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(162).to({_off:false},0).wait(17).to({alpha:0},6).to({_off:true},4).wait(171));

	// txt_expensive
	this.instance_25 = new lib.txt_expensive();
	this.instance_25.setTransform(135.2,90.45);
	this.instance_25.alpha = 0;
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(129).to({_off:false},0).to({y:105.45,alpha:1},8,cjs.Ease.quadOut).wait(45).to({alpha:0},6).to({_off:true},1).wait(171));

	// Layer_31
	this.instance_26 = new lib.print_colors();
	this.instance_26.setTransform(583.5,125.05);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(127).to({_off:false},0).to({x:513.5},18,cjs.Ease.quadInOut).to({_off:true},17).wait(198));

	// txt_noMore
	this.instance_27 = new lib.txt_noMore();
	this.instance_27.setTransform(136.25,58.2);
	this.instance_27.alpha = 0;
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(127).to({_off:false},0).to({y:73.2,alpha:1},8,cjs.Ease.quadOut).wait(47).to({alpha:0},6).to({_off:true},1).wait(171));

	// bluePaint
	this.instance_28 = new lib.bluePaint();
	this.instance_28.setTransform(512.55,125,1,1,0,0,0,602,125);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(162).to({_off:false},0).to({x:334.7},17).to({x:240.55,alpha:0},9).to({_off:true},1).wait(171));

	// yellowPaint
	this.instance_29 = new lib.yellowPaint();
	this.instance_29.setTransform(513.8,111,1,1,0,0,0,603.5,110);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(162).to({_off:false},0).to({x:335.95},17).to({x:241.8,alpha:0},9).to({_off:true},1).wait(171));

	// txt_toner_cartridges
	this.instance_30 = new lib.txt_toner_cartridges();
	this.instance_30.setTransform(139.75,126.2);
	this.instance_30.alpha = 0;
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(131).to({_off:false},0).to({y:141.2,alpha:1},8,cjs.Ease.quadOut).wait(43).to({alpha:0},6).to({_off:true},1).wait(171));

	// main_paint
	this.instance_31 = new lib.main_paint();
	this.instance_31.setTransform(512,126.05);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(162).to({_off:false},0).to({x:334.15},17).to({x:240,alpha:0},9).to({_off:true},1).wait(171));

	// Layer_22
	this.instance_32 = new lib.txt_ecoTankPro_Logo();
	this.instance_32.setTransform(148.7,56.9);
	this.instance_32.alpha = 0;
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(78).to({_off:false},0).to({y:64.4,alpha:1},8,cjs.Ease.quadOut).wait(33).to({alpha:0},7).to({_off:true},1).wait(233));

	// txt_pain
	this.instance_33 = new lib.printer_01_1();
	this.instance_33.setTransform(146,158.55,0.546,0.546);
	this.instance_33.alpha = 0;
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(78).to({_off:false},0).to({scaleX:1,scaleY:1,x:145,y:169.05,alpha:1},8,cjs.Ease.quadOut).wait(33).to({alpha:0},7).to({_off:true},1).wait(233));

	// txt_theAssets
	this.instance_34 = new lib.txt_theAssets();
	this.instance_34.setTransform(153.65,119.35,0.6461,0.6461,0,0,0,0.1,0.1);
	this.instance_34.alpha = 0;
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(41).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:147.6,y:124.1,alpha:1},7,cjs.Ease.quadInOut).wait(22).to({regX:0.1,scaleX:0.2923,scaleY:0.2923,x:153.65,y:114.55},7,cjs.Ease.quadIn).to({_off:true},1).wait(282));

	// txt_pain
	this.instance_35 = new lib.txt_pain();
	this.instance_35.setTransform(151.05,98.15,0.6461,0.6461);
	this.instance_35.alpha = 0;
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(41).to({_off:false},0).to({scaleX:1,scaleY:1,x:143.6,y:91.35,alpha:1},7,cjs.Ease.quadInOut).wait(22).to({regY:0.1,scaleX:0.2923,scaleY:0.2923,x:152.45,y:105},7,cjs.Ease.quadIn).to({_off:true},1).wait(282));

	// txt_anAsset
	this.instance_36 = new lib.txt_anAsset();
	this.instance_36.setTransform(78.85,84.25);
	this.instance_36.alpha = 0;
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(4).to({_off:false},0).to({x:93.85,alpha:1},8,cjs.Ease.quadOut).wait(22).to({x:14.85,alpha:0},6,cjs.Ease.quadIn).to({_off:true},1).wait(319));

	// txt_laserPrinter
	this.instance_37 = new lib.txt_laserPrinter();
	this.instance_37.setTransform(69.6,57.3);
	this.instance_37.alpha = 0;
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(2).to({_off:false},0).to({x:84.6,alpha:1},8,cjs.Ease.quadOut).wait(24).to({x:5.6,alpha:0},6,cjs.Ease.quadIn).to({_off:true},1).wait(319));

	// txt_isYour
	this.instance_38 = new lib.txt_isYour();
	this.instance_38.setTransform(38.55,23.8);
	this.instance_38.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).to({x:53.55,alpha:1},8,cjs.Ease.quadOut).wait(26).to({x:-25.45,alpha:0},6,cjs.Ease.quadIn).to({_off:true},1).wait(319));

	// shaq_01
	this.instance_39 = new lib.shaq_01();
	this.instance_39.setTransform(241,125.05);
	this.instance_39.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).to({x:161,alpha:1},8,cjs.Ease.quadOut).wait(26).to({x:281,alpha:0},6,cjs.Ease.quadIn).to({_off:true},1).wait(319));

	// background_color
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("A6B3IMA0DAAAQAoAAAAAoMAAAAtBQAAAogoAAMg0DAAAQgoAAAAgoMAAAgtBQAAgoAoAAg");
	this.shape_10.setTransform(155.55,135.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("A6AXJQgpAAAAgpMAAAgtAQAAgnApAAMA0CAAAQAnAAAAAnMAAAAtAQAAApgnAAg");
	this.shape_11.setTransform(155.55,135.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10}]}).wait(360));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(77,89.6,790,279.5);
// library properties:
lib.properties = {
	id: 'D13842C17BB34EAD8425AF1A57942765',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"ecoTank_logo.png", id:"ecoTank_logo"},
		{src:"inkBottles.jpg", id:"inkBottles"},
		{src:"paintColors.png", id:"paintColors"},
		{src:"printer_01.jpg", id:"printer_01"},
		{src:"printer_02.jpg", id:"printer_02"},
		{src:"shaq_img_01.jpg", id:"shaq_img_01"},
		{src:"shaq_img_02.jpg", id:"shaq_img_02"}
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
an.compositions['D13842C17BB34EAD8425AF1A57942765'] = {
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