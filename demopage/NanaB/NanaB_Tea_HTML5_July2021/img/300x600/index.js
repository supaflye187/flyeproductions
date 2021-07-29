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


(lib.txt_yall = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgYAYQgJgJAAgNQAAgNALgLQAJgKAPAAQAOAAAJAIQAJAJAAANQAAANgLAKQgMAMgNAAQgMAAgKgJg");
	this.shape.setTransform(105.425,90.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhbCxQgLgKAAgVQAAgPAHgSIA8inIAyiHIAtAAIgzCHQg/CnAAAPQAAASAPAAQAVAAAigmQAkglAdhAIAWAJQghBJgtAyQgrAzgqAAQgTAAgMgNg");
	this.shape_1.setTransform(93.175,75.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhbCxQgLgKAAgVQAAgPAHgSIA8inIAyiHIAtAAIgzCHQg/CnAAAPQAAASAPAAQAVAAAigmQAkglAdhAIAWAJQghBJgtAyQgrAzgqAAQgTAAgMgNg");
	this.shape_2.setTransform(79.825,75.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgfB2QgKgOADgVIgDAAQgjAxgnAAQgYAAgLgSQgMgTAAgeQAAgnARgtQASgtAigiQAgghAmAAQAjAAAHAbIACAAIADgUIAyAAIgoBsQgcBJAAANQAAASAPAAQAXAAAlgsQAmguAYgxIAUAJQgdBDgvA1QguA2gpAAQgUAAgLgOgAg9hKQgZAdgNAiQgOAjAAAdQAAAjAYABQAOgBARgOQAQgNAJgTIAFgMIAEgLIAehRQAGgRgFgLQgFgLgPAAQgZAAgXAbg");
	this.shape_3.setTransform(60.575,80.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgnA0QAngcgBgaQABgHgFgFQgFgFgGAAQgHAAgCADIgCgKQAAgOALgLQAJgLAQAAQAOAAAIAJQAJAJAAAOQAAAZgYAbQgWAbgZAOg");
	this.shape_4.setTransform(45.1,62.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ah1CsQgRgNAAgTQAAgSAOgKQANgKARAAQAWgBAMARQgNgFgMAGQgOAEAAAMQAAAIAHAFQAHAHANAAQAagBARgZQATgcAXhGIgDAAQgiApgkAAQguAAAAgzQgBgQAHgTIAahJIAmhhIAsAAIgjBiIgdBPQgFAOAEALQAGAMAOAAQARgBARgNQATgOAIgTIA+inIAtAAIg9CkIgOAmIgKAkIgIAbQgTA1gXAZQgYAagsAAQghAAgQgNg");
	this.shape_5.setTransform(21.65,86.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgnA0QAngcAAgZQAAgJgFgEQgFgFgHAAQgGAAgDADIgBgKQAAgOAKgLQAKgLAPAAQAOAAAJAJQAJAJAAAOQAAAZgYAbQgWAbgZAOg");
	this.shape_6.setTransform(-9.825,93.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgeCwQgMgNAEgWIgDAAQgjAxgnAAQgYAAgLgSQgMgTAAgeQAAgnARguQASgsAigiQAgghAmAAQAlAAAHAdIADAAIA0iRIAtAAIgzCHQhACnAAAPQAAAIAFAFQAEAFAHAAQATAAAkgmQAkglAdhAIAVAJQgfBJguAyQgsAzgpAAQgVAAgKgOgAg9gQQgZAcgNAiQgOAkAAAdQAAAjAYABQAOgBARgOQAQgNAJgTIAFgMIAEgLIAJgXIALgfIAKgbQAGgRgFgLQgFgLgPAAQgZAAgXAbg");
	this.shape_7.setTransform(-27.975,75.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AiGBuQgPgWAAghQAAg9AshAQAsg9A4AAQAbAAAPATQAPATAAAiQAAAugaA0QA7AAAshaIAVALQgXA0gkAeQgkAegmAAIgLAAQgpA8g0AAQgfAAgQgWgAg0hJQgXAegPApQgOAoABAeQgBAjAWAAQAaAAAcgwQgRgSAAgbQAAgzAyg3QgDgIgLAAQgUAAgXAfgAgTgHQAAARAIALQAVg2ABgoIAAgFQgeAlAAAig");
	this.shape_8.setTransform(-52.75,80.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AiFBuQgQgWAAghQAAg9AshAQAsg9A3AAQAbAAAQATQAPATAAAiQAAAugaA0QA7AAArhaIAWALQgYA0gjAeQgkAegmAAIgKAAQgqA8g1AAQgeAAgPgWgAg0hJQgWAegPApQgOAogBAeQABAjAVAAQAaAAAdgwQgSgSABgbQAAgzAxg3QgDgIgKAAQgWAAgWAfgAgTgHQAAARAIALQAWg2gBgoIAAgFQgdAlAAAig");
	this.shape_9.setTransform(-75.75,80.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ah2CvQgRgNAAgSQAAgSAOgKQANgLARAAQAXAAAMAQIgNgCQgLAAgIAGQgIAGAAAHQAAAJAIAFQAHAGAOAAQAaAAAQgaQASgZAXhIIgDAAQgeAogkAAQgXAAgLgSQgNgSAAgeQABhAAqhDQAqhBA3AAQAkAAAGAdIAEAAIAAgWIAyAAIg+CkQgQApgRA7QgSA1gXAaQgZAagsAAQggAAgRgOgAABiDQgYAdgOAiQgOAlAAAcQAAAjAYAAQAPAAAQgOQAQgNAJgTIAFgLIAEgLIAPgpIAQgpIACgRQAAgXgWAAQgZAAgXAbg");
	this.shape_10.setTransform(-102,86.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_yall, new cjs.Rectangle(-113.9,40.5,229.9,72.2), null);


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
	this.shape.graphics.f("#000000").s().p("AhuBrQgUgWAAghQAAg/Arg6QAsg8A2AAQAYAAANAMQAMANAAAUQAAAggbAVQgaAUgjAAQgUABgUgKQgLAjAAAYQAAAyAmAAQAhAAAsgmQArgmAfg/IAVAJQgfBHg4AzQg3AxgvAAQggAAgUgXgAgdhXQgSASgNAeQALAFAOAAQAYAAAQgQQASgPAAgVQAAgUgSAAQgRgBgRAUg");
	this.shape.setTransform(98.2,165.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ah+DUIBVjlQAFgUgHgPQgHgOgQAAIAIgcIAyAAIgCgYQAAgrAYgZQAagZAhAAQAmAAAQAeIgQAvQgEgQgJgJQgLgJgOAAQgUAAgOAPQgNAPAAAdIAAAPIA7AAIgIAcIg4AAIhnEWgAgggqIAKgYIgMAAQAEAIgCAQg");
	this.shape_1.setTransform(79.95,162.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhaCcQgLgNAAgVIABgLIAFgQIAFgRIAIgWIAIgWIALgbIAKgaIAXhAIAuAAIgQAnIgYBCQgcBKAAANQAAARAOAAQAYAAAjgrQAlguAXgvIAVAJQgeBAgtA1QgtA1gpAAQgTAAgMgNgAgGh5QgIgGAAgKQAAgNAKgJQAHgJANAAQALAAAHAGQAGAHAAALQAAALgJAKQgKAJgMAAQgKAAgFgHg");
	this.shape_2.setTransform(68.5,161.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAwDJIgcgJIgXgLIgagOIgYgOQgpArg4AAQgiAAgUgOQgUgOAAgXQAAgXAXgNQAVgNApAAQAhAAAmAKIAUg8IAahMQAchOAogvQAngwA5AAQAoAAAWAXQAVAYAAAkQAAApgZAgQgZAigmAAQgYAAgMgPQgMgNAAgWQAAgXAQgYQAPgWAbgIQgYAWAAAeQAAAbAYAAQAUAAANgUQANgWAAgYQAAgYgMgPQgNgQgZAAQgRAAgOAJQgNAIgLAMQgJAKgMAZIgRApIgRAwQgiBqgZApIAVAHIAWAIIAUAHIAZAFIAUADIAXADQAlAAAagUQACAWgZAZQgaAagsAAgAiuCDQgLAGAAAIQAAAKAKAEQAJAHARAAQAsAAAUgcQgegNgcAAQgTAAgMAGg");
	this.shape_3.setTransform(39.35,160);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhkBsQABgQAEgPQAVg+AihXIgjAAIAIgbIAmAAIANg0IAyAAIgYA0IAtAAIgIAbIgsAAQg4CYAAAPQAAAOAOAAQAVAAAiglQAkgmAag9IAWAKQgfBGgtAyQgpAygqAAQgoAAgBgtg");
	this.shape_4.setTransform(-0.65,163.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhuBrQgUgWAAghQAAg/Arg6QArg8A2AAQAZAAANAMQAMANAAAUQAAAggbAVQgbAUgiAAQgUABgUgKQgLAjAAAYQAAAyAmAAQAhAAAsgmQAsgmAeg/IAVAJQgeBHg5AzQg3AxgvAAQggAAgUgXgAgdhXQgSASgOAeQAMAFAOAAQAYAAARgQQARgPAAgVQAAgUgSAAQgRgBgRAUg");
	this.shape_5.setTransform(-16.85,165.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhuBrQgUgWAAghQAAg/Arg6QArg8A3AAQAYAAANAMQAMANAAAUQABAggcAVQgaAUgjAAQgUABgUgKQgLAjAAAYQAAAyAmAAQAhAAAsgmQArgmAfg/IAVAJQgfBHg4AzQg3AxgvAAQggAAgUgXgAgdhXQgSASgNAeQALAFAOAAQAYAAAQgQQASgPAAgVQAAgUgSAAQgRgBgRAUg");
	this.shape_6.setTransform(-36.9,165.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgGB9IAWjSIgCAAIhlDSIgsAAIAYjQIgCAAQgIAfgTAfIgbADQAcg1APg1IA5AAIgVC4IACAAIBZi4IA0AAIgTC4IACAAQAVgXAeg8QAdg7ACgqIAoAAQgKAlgaAxIg4BiIgkBBg");
	this.shape_7.setTransform(-64.675,165.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AiqDfIA2hKQgegfAAgtQAAgtAdgfQAcggAvAAQAbAAASAKIAigzQgXgkAAgcQAAglAcgXQAcgWAiAAQAcAAAUAPQATAQAAAcQAAAZgOARQgOARgZAAQgVAAgLgMIgKARIAQAWIAUAZIAOAZQAJARADAOIADAhQAABBgxApQgzAqg9AAQgaAAgYgIQgPAegEAQgAgvCCIAYACQAsAAAjgaQAjgaAAgrQAAgQgGgTIgNgbIgUgdIgaAvQAOAPAAAVQAAATgOAQQAAgegOgRgAhiAOQgUAUAAAaQAAAfAcAVIBNhwQgMgDgRAAQgkAAgUARgABDjBQgOANAAAXQAAARALAWIANgVIAAgDQAAgVAQgMIgCAQQAAAMAGAGQAIAIAJAAQALAAAJgJQAIgIAAgPQAAgTgMgLQgNgLgRAAQgTAAgOANg");
	this.shape_8.setTransform(-99.825,161.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhuBrQgUgWAAghQAAg+Arg8QArg7A2AAQAZAAANAMQANAMAAAWQgBAfgbAVQgbAVghAAQgVAAgUgKQgLAjAAAYQAAAyAlAAQAiAAAsgmQAsgnAeg+IAVAJQgeBIg5AyQg3AxgwAAQgfAAgUgXgAgdhYQgSATgOAfQAMAEAOAAQAYAAARgQQARgPAAgVQAAgUgSgBQgRABgRASg");
	this.shape_9.setTransform(85.1,114.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AggCwQgLgLAAgRQAAgWAcg/QAahAAAgOQAAgKgFgHQgGgIgKAAQgPAAgNANQgOANgIASIhDCzIgsAAICLlxIArAAIg2CKIADAAQAZgYAeAAQAWAAAMALQAMALAAATQAAAWgbBAQgcA+AAANQAAAOANAAQAXAAApgnQAogkAcg+IAVAKQgeBDgxAzQg0A0grAAQgTAAgLgLg");
	this.shape_10.setTransform(60.675,109.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhkBsQABgQAEgOQAVg/AihXIgjAAIAIgbIAmAAIANg1IAyAAIgYA1IAtAAIgIAbIgtAAQg3CYAAAQQAAANAOAAQAVAAAiglQAkgmAbg9IAVAKQgfBGgsAzQgqAwgrABQgoAAAAgtg");
	this.shape_11.setTransform(42.9,112.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgnA0QAngdAAgYQAAgJgFgEQgFgFgGAAQgHAAgCADIgCgJQAAgOALgMQAJgKAPAAQAOAAAJAJQAJAJAAANQAAAZgYAaQgWAbgYAOg");
	this.shape_12.setTransform(21.225,96.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AggB3QgLgLAAgRQAAgWAcg/QAag+AAgQQAAgZgUAAQgPAAgOANQgOANgIATIhDCyIgsAAIBdj4IAwAAIgQAYIADAAQAagfAiAAQAVAAAMALQALALAAATQAAAWgbBBQgcA9AAAMQAAAPANAAQAWAAApgnQApgkAcg9IAVAKQgeBCgxAzQg0A0grAAQgTAAgLgLg");
	this.shape_13.setTransform(-1.425,114.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhaCcQgKgNAAgVIABgLIAEgQIAFgRIAJgWIAHgWIALgbIAKgaIAYhAIAtAAIgQAnIgZBCQgbBKAAANQAAARAOAAQAZAAAhgrQAmguAXgvIAUAJQgdBAgtA1QgtA1gpAAQgTAAgMgNgAgHh5QgGgGgBgKQAAgNAKgJQAIgJANAAQAKAAAHAGQAHAHAAALQAAALgKAKQgLAJgLAAQgKAAgGgHg");
	this.shape_14.setTransform(-19.3,110.875);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhBB9IAQjSIgDAAQgMAggSAgIgbADQAcg1APg1IA5AAIgKDAIACAAIAmg8QAPgaAPglQASgpABgcIAoAAQgNAwg6BiIg8Bng");
	this.shape_15.setTransform(-37.725,114.975);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhaCcQgLgNAAgVIABgLIAFgQIAFgRIAIgWIAIgWIALgbIAKgaIAXhAIAuAAIgQAnIgYBCQgcBKAAANQAAARAOAAQAYAAAjgrQAlguAXgvIAVAJQgdBAguA1QgtA1goAAQgVAAgLgNgAgGh5QgIgGABgKQAAgNAJgJQAHgJANAAQALAAAHAGQAGAHABALQAAALgKAKQgKAJgMAAQgKAAgFgHg");
	this.shape_16.setTransform(-54.55,110.875);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAwDJIgcgJIgXgLIgagPIgYgNQgpArg3AAQgjAAgTgOQgVgOAAgWQAAgZAXgMQAVgNApAAQAhAAAnAKIATg7IAahOQAchNAogwQAmgvA6AAQAoAAAWAYQAVAXAAAkQAAApgZAgQgZAiglAAQgYAAgMgPQgNgNAAgVQAAgYAQgYQAPgVAcgJQgZAWAAAfQAAAbAYAAQAUAAAMgVQAOgWAAgYQAAgXgMgQQgNgQgZAAQgRAAgOAIQgNAJgLAMQgJALgMAYIgRApIgRAwQgjBqgZAqIAWAHIAWAHIAUAGIAYAHIAVACIAXACQAlAAAagTQABAWgYAZQgaAagrAAgAiuCDQgLAGAAAJQAAAIAKAFQAKAHARAAQAqAAAVgcQgdgNgdAAQgTAAgMAGg");
	this.shape_17.setTransform(-83.7,109);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_sweetLife, new cjs.Rectangle(-122,75,229.3,122), null);


(lib.txt_southern = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AghB6QgMgLAAgSQAAgWAdhBQAcg/AAgSQAAgYgWAAQgPAAgOANQgPANgIAUIhEC3IgtAAIBej/IAyAAIgRAZIADAAQAbggAjAAQAVAAANALQAMAMAAATQAAAWgdBCQgcBAAAAMQAAAOANAAQAWAAAsgmQApgmAdg+IAWAKQgfBDgzA0Qg1A2gsAAQgUAAgLgLg");
	this.shape.setTransform(86.2,92.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhHCIQgMgLAAgYQAAghAVgzQAXg3AXgmIAAgBIgbACIgagCQgKAggXArIgVgKQANgZAOgvIgIhAIAtAAIgEArIAiACIA2gEIAKANQgYApgUA5QgWA+AAAWQAAAPANAAQAUAAAmgoQAjgoAbg6IAWAJQgYA7gyA6QgyA5gpAAQgSAAgMgMg");
	this.shape_1.setTransform(65.325,91.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhxBuQgUgXAAghQgBhBAtg8QAsg9A4AAQAZAAANAMQANANAAAVQAAAhgcAVQgbAVgkAAQgVAAgTgKQgMAkAAAZQAAAzAmAAQAjAAAtgnQAsgnAghAIAWAJQghBJg5A0Qg4AygxAAQggAAgVgXgAgehaQgTAUgNAeQAMAFAOAAQAYAAASgQQARgQAAgVQAAgVgSAAQgSAAgRATg");
	this.shape_2.setTransform(42.85,92.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AghC1QgMgMAAgRQAAgWAdhCQAchAAAgQQAAgKgGgIQgGgGgLAAQgPAAgNAMQgPAOgIATIhEC3IgtAAICNl7IAtAAIg3COIADAAQAagZAeAAQAXAAANAMQAMALAAATQAAAXgdBBQgcBAAAANQAAAOANAAQAYAAAqgnQApgmAdg/IAWAKQgfBFgzA0Qg1A2gsAAQgUAAgLgLg");
	this.shape_3.setTransform(17.35,87.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhmBvQAAgQAFgPQAVhAAjhaIgkAAIAIgcIAnAAIAOg2IAzAAIgYA2IAuAAIgJAcIgtAAQg5CcAAAQQAAANAOAAQAWAAAjglQAkgnAbg+IAXAKQggBIguA0QgrAxgrAAQgpAAAAgtg");
	this.shape_4.setTransform(-1.325,90.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgeB0QgLgOADgWIgDAAQgjAygpgBQgvAAAAgzQAAgQAGgUIAbhJIAmhiIAtAAIgkBiIgdBPQgGAQAFALQAGALAOAAQARAAASgMQATgOAJgWIA9inIAtAAIgoBtQgcBKAAANQAAARAQAAQAYAAAkgrQAlgtAZgyIAUAJQgeBDguA1QgvA3gqgBQgUABgKgOg");
	this.shape_5.setTransform(-21.475,93.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AiHBvQgQgWAAghQAAg+AthAQAsg+A4AAQAcAAAPATQAQATAAAiQgBAvgaA0QA8AAAshaIAWALQgYA0glAfQgkAegmAAIgKgBQgrA9g1AAQgfAAgPgWgAg1hKQgXAfgOApQgOAogBAfQABAjAVAAQAaAAAdgwQgRgTAAgbQAAg0Azg3QgFgIgKAAQgVAAgXAfgAgTgHQAAARAIALQAVg2AAgpIAAgFQgdAmAAAig");
	this.shape_6.setTransform(-46.4,92.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AiuDlIA3hNQgfgeAAgvQAAgvAegfQAdghAvAAQAcAAATAKIAjg0QgXglAAgdQAAgmAdgYQAcgWAjAAQAdAAATAQQAVAQAAAdQAAAZgPARQgPATgYgBQgWAAgLgNIgLASIARAWIAUAbIANAZQAKASADAOIAEAjQAABCgzAqQg0Aqg+AAQgbABgZgJQgPAggEAQgAgwCFIAYACQAtAAAkgbQAkgaAAgsQAAgRgGgSIgOgdIgUgeIgbAwQAPAQAAAVQAAAUgOAQQAAgegPgSgAhkAPQgVATAAAbQAAAhAdAVIBPhzQgNgDgRAAQglgBgUATgABFjGQgPANAAAXQAAASALAXIAOgWIAAgDQAAgVAQgMIgCAPQAAANAHAGQAHAJAKgBQALABAJgKQAIgIAAgQQAAgTgMgLQgNgLgRAAQgUAAgOANg");
	this.shape_7.setTransform(-78.7,89);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_southern, new cjs.Rectangle(-101.4,52.1,201.9,72.9), null);


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
	this.shape.graphics.f("#000000").s().p("Ah3CuQgQgNgBgTQAAgSAOgLQANgKASAAQAXAAAMAQQgNgEgNAFQgNAFAAALQgBAJAHAFQAHAGAOAAQAaAAARgaQATgbAXhHIgDAAQgiApgkAAQgwAAABgzQgBgRAHgTIAbhKIAmhiIAtAAIgkBjIgeBQQgFAPAFAKQAFAMAPAAQARAAARgNQATgOAIgVIA/ioIAtAAIg9ClIgOAmIgLAmIgIAbQgSA1gYAaQgZAagrAAQghAAgSgNg");
	this.shape.setTransform(117.25,89.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhcC0QgLgLAAgWQAAgPAHgSIA9ipIAyiIIAtAAIgzCJQg/CoAAAQQAAARAOAAQAVAAAjgmQAlglAdhAIAWAJQghBJgtAzQgsAzgrAAQgTAAgMgMg");
	this.shape_1.setTransform(102.975,77.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ah3CyQgRgNAAgUQgBgRAOgLQANgKASAAQAXgBAMARIgMgDQgMAAgIAGQgHAHgBAHQABAJAHAEQAIAHANAAQAaAAARgaQASgZAXhKIgCAAQggAqgjAAQgXgBgMgSQgMgSAAgfQAAhAAqhEQAqhCA5AAQAjAAAIAdIADAAIAAgWIAyAAIg+ClQgQAqgSA9QgRA1gYAZQgZAagsAAQghABgRgNgAABiEQgYAdgNAjQgPAlAAAcQAAAkAYAAQAPAAARgPQAQgNAIgTIAFgLIAEgLIAQgrIAQgoIACgSQABgWgYgBQgZABgXAbg");
	this.shape_2.setTransform(81.05,89.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AghB6QgMgLABgSQgBgWAdhBQAchAAAgRQAAgYgVAAQgPAAgPAMQgOAOgJAUIhFC3IgtAAIBfj/IAyAAIgQAYIADAAQAbgfAiAAQAWAAANALQALAMAAATQABAWgdBCQgdBAAAAMQAAAPAOAAQAWAAArgnQAqgmAdg+IAVAJQgeBEg0A1Qg1A2grAAQgVAAgLgMg");
	this.shape_3.setTransform(59,83.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhcCgQgLgMAAgXIABgLIAEgQIAGgRIAIgXIAIgXIALgbIAKgcIAZhBIAuAAIgQAoIgaBEQgcBLAAAOQAAARAPAAQAZAAAjgsQAngwAXgwIAWAJQgeBDgwA2QgtA3gqAAQgVAAgLgOgAgHh8QgHgHABgKQgBgOAKgJQAIgJANAAQAKAAAIAHQAGAHABALQAAAMgKAJQgLAKgMAAQgKAAgGgHg");
	this.shape_4.setTransform(40.2,79.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AggC1QgMgLgBgSQAAgWAdhBQAchBAAgQQAAgKgGgIQgGgGgKAAQgQAAgNAMQgOAOgJATIhEC4IguAAICPl8IAsAAIg3COIADAAQAagZAfAAQAWAAANAMQAMALAAATQAAAXgcBBQgdBBAAANQAAANAOAAQAXAAArgmQApgmAdg/IAVAJQgfBFgzA0Qg1A2gsAAQgUAAgKgLg");
	this.shape_5.setTransform(18.7,77.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhsBwQgTgUABgpIATgFQgBAWAKAPQAJAPAQAAQATAAANgVQAMgVAAgiIgDgoIgCg7IgCAAQgPApgPAXIgVgJQAmhSAHgbIAyAAQgFAUAAAWQAAAYAIAnQAIApAAANQAAATgHAMQgGANgNAPIABACQA9goA1huIATAKQglBbgxAuQgwAugxAAQggAAgUgUg");
	this.shape_6.setTransform(-2.3774,84.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhxBuQgVgWAAgiQAAhBAsg8QAtg+A4ABQAZgBANAMQANANAAAWQAAAggcAWQgcAVgjAAQgUAAgVgKQgLAjAAAaQAAA0AmAAQAjgBAtgmQAsgoAghAIAWAJQggBKg6AzQg4AzgxAAQghAAgUgYgAgehaQgSATgOAfQALAFAPAAQAZAAARgQQASgPAAgWQAAgVgTgBQgRABgSATg");
	this.shape_7.setTransform(-20.675,83.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhICIQgMgLABgYQAAghAUgzQAZg3AWgmIgBgCIgaADIgagDQgKAhgXArIgWgJQAOgbAOguIgIhAIAtAAIgEAqIAiACIA2gDIAKAOQgXAngVA7QgXA9ABAWQAAAQAMAAQAWAAAlgpQAkgnAag8IAWAKQgYA7gyA6QgyA6gpAAQgSAAgNgNg");
	this.shape_8.setTransform(-40.8,81.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AiCDaIBYjsQAFgUgIgQQgHgOgPAAIAHgcIAzAAIgCgZQAAgsAagaQAZgaAjAAQAnAAARAfIgRAvQgDgQgKgJQgMgJgPAAQgUAAgOAQQgOAPAAAeIAAAQIA9AAIgIAcIg5AAIhrEegAgggrIAJgZIgMAAQAEAJgBAQg");
	this.shape_9.setTransform(-61.475,80.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhxBuQgVgWAAgiQAAhBAsg8QAtg+A4ABQAZgBANAMQANANAAAWQAAAggcAWQgcAVgjAAQgUAAgVgKQgLAjAAAaQAAA0AmAAQAjgBAtgmQAsgoAghAIAWAJQggBKg6AzQg4AzgxAAQghAAgUgYgAgehaQgSATgOAfQALAFAPAAQAZAAARgQQASgPAAgWQAAgVgTgBQgRABgSATg");
	this.shape_10.setTransform(-76.675,83.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AivC8QgPgNgDgVIAGAAQApAAAigeQAjgeAXgrQAZgtASgrQATgsAWgpQAUgnATgOQgTgFgcAAQg/AAgzAdQgyAdAAAwQAAAbAQAPQAQAOAaAAQARAAAPgEQgUAcguAAQgkAAgVgUQgWgVAAggQAAgpAkggQAjgfA1gQQAzgPA4AAQBNAAAsAdQArAdAAAnQAAAkgmAfQglAgg/AGIABACQAaAFANARQANARgBAaIAAAUIAAAWQAAAtAVAAQASAAAOgbIAOAHQgLAhgXAPQgYARgUAAQgzAAAAg5IAGgxIAEgsQABgTgLgJQgKgKgbgDIgaBIQgKAagUAiQgTAggWAPQgYAQgZAAQgaAAgQgPgAAmhBIgRAzQA1AEAjgcQAhgcAAgjQAAgtgzgVQgYAMgdBag");
	this.shape_11.setTransform(-110.25,76.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_refreshingly, new cjs.Rectangle(-133.9,42.5,266.1,73.1), null);


(lib.txt_ingredients = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AhnBrQgTgSABgoIATgFQgBAWAJAOQAJAOAPAAQATAAALgUQAMgUAAghIgDgnIgBg4IgCAAQgPAogOAWIgUgJQAkhPAGgaIAxAAQgFAUAAAUQAAAYAIAlQAHAoAAAMQAAASgGAMQgGAMgNAPIACACQA6gmAyhqIATAJQgjBYgvArQguAtgvAAQgfAAgTgUg");
	this.shape.setTransform(109.5974,96.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhiBrQAAgQAFgPQAUg9AihWIgjAAIAIgaIAlAAIAOg0IAwAAIgWA0IAsAAIgIAaIgsAAQg3CWAAAPQAAAOANAAQAVAAAiglQAjglAag8IAWAJQgfBFgsAyQgpAwgqAAQgnAAAAgrg");
	this.shape_1.setTransform(95.05,94);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgfB1QgLgLAAgQQAAgWAcg+QAag9AAgQQAAgYgVAAQgOAAgOAMQgOANgIATIhCCwIgrAAIBbj1IAvAAIgQAYIAEAAQAagfAgAAQAWAAAMALQAKALAAASQAAAWgbA/QgbA+AAALQAAAOANAAQAWAAApglQAogkAbg8IAUAJQgdBBgwAyQgzA0grAAQgTAAgKgLg");
	this.shape_2.setTransform(74.35,96.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhtBqQgTgWAAggQAAg+Aqg6QArg7A1AAQAZAAANAMQAMAMAAAVQAAAfgbAUQgbAVghAAQgUAAgUgKQgKAiAAAZQAAAxAkAAQAiAAAqgmQArgmAeg9IAVAJQgeBGg4AyQg2AwguAAQgfAAgVgWgAgdhWQgRATgNAdQAKAFAPAAQAYAAAQgQQARgPAAgUQAAgVgSAAQgRAAgRATg");
	this.shape_3.setTransform(53.45,96.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhYCaQgLgMAAgWIACgKIADgQIAGgRIAIgVIAIgXIAKgaIAKgaIAXg+IAsAAIgPAmIgYBBQgcBIABAOQgBAQAOAAQAZAAAhgqQAlguAXguIAUAJQgdA/gsA0QgtA0goAAQgTABgLgNgAgGh3QgHgGAAgKQAAgNAJgJQAIgJANAAQAJABAHAGQAHAHAAALQAAAKgJAJQgLAKgLAAQgKAAgFgHg");
	this.shape_4.setTransform(36.2,92.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgeCrQgLgNAEgVIgDAAQghAvgnAAQgWAAgMgRQgMgSABgdQgBgmASguQARgqAgggQAgghAlAAQAjAAAIAcIACAAIAziMIArAAIgxCDQg+CiAAAOQAAAIAFAFQAEAEAGABQATAAAjglQAigkAdg+IAUAJQgeBGgsAxQgsAxgoAAQgTAAgLgNgAg7gPQgZAagMAiQgOAjAAAbQAAAjAXAAQAOAAARgNQAQgNAIgTIAEgLIAFgKIAIgYIAMgdIAIgaQAGgSgFgKQgFgLgOAAQgXAAgXAbg");
	this.shape_5.setTransform(17,90.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhsBqQgUgWAAggQAAg+Aqg6QArg7A1AAQAYAAANAMQANAMAAAVQAAAfgbAUQgaAVgiAAQgUAAgUgKQgLAiAAAZQAAAxAlAAQAiAAArgmQAqgmAeg9IAVAJQgeBGg3AyQg2AwgwAAQgfAAgTgWgAgchWQgSATgOAdQALAFAPAAQAXAAARgQQARgPAAgUQAAgVgSAAQgQAAgRATg");
	this.shape_6.setTransform(-5.9,96.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhECDQgMgLAAgYQAAgfAUgxQAXg0AWglIgBgBIgZACIgZgCQgKAfgWApIgUgJQAMgZAOgsIgHg9IAqAAIgDAoIAgACIA0gEIAKANQgXAngTA4QgWA6AAAVQAAAQAMAAQAUAAAkgnQAigmAag5IAVAJQgWA5gxA3QgwA3gnAAQgSAAgLgLg");
	this.shape_7.setTransform(-25.175,94.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhyCqQgRgNAAgSQAAgRAOgKQAMgKARAAQAWAAALAPIgLgCQgLAAgIAGQgHAGAAAHQAAAIAHAFQAHAGANAAQAZAAAQgZQARgYAXhGIgDAAQgeAngiAAQgWAAgLgSQgMgRAAgdQAAg+AphBQAohAA2AAQAiAAAHAdIADAAIAAgWIAxAAIg8CfQgPAogSA6QgQAzgXAYQgYAagqAAQggAAgQgNgAABh+QgXAbgNAiQgOAjAAAbQAAAiAXAAQAOAAAQgNQAQgNAIgTIAFgKIAEgLIAPgoIAPgoIADgQQAAgWgXAAQgXAAgXAbg");
	this.shape_8.setTransform(-51.575,101.725);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgfB1QgLgLAAgQQAAgWAbg+QAag9AAgQQABgYgVAAQgPAAgNAMQgPANgHATIhCCwIgrAAIBbj1IAvAAIgPAYIADAAQAZgfAiAAQAUAAANALQALALgBASQAAAWgbA/QgbA+AAALQAAAOANAAQAWAAApglQAogkAbg8IAVAJQgeBBgwAyQgzA0grAAQgTAAgKgLg");
	this.shape_9.setTransform(-72.7,96.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhwC3QgOgMgCgUIAGAAQAkAAAggbQAggaAYgrQAWgmAUgsIAjhTQASgpAIgOIgpgEIgwgEQgwAAgbAVQgbAVAAAaQAAATAPANQAPAOAcAAQAPAAAMgFQgWAdgsAAQghAAgTgTQgUgTAAgdQAAgsApgZQAogZA5AAIBAAFIA9AFIAKAAIAGAIQgOAVgSAzIggBjIglBgQgUAwgcAeQgcAegkAAQgZAAgOgOg");
	this.shape_10.setTransform(-96.675,90.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_ingredients, new cjs.Rectangle(-114.3,57,232.7,70), null);


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
	this.shape.graphics.f("#000000").s().p("AgnA0QAngdAAgYQAAgJgFgEQgFgFgGAAQgHAAgCADIgCgKQAAgOALgKQAKgMAOAAQAOABAJAIQAJAJAAAPQAAAZgYAaQgWAbgZANg");
	this.shape.setTransform(139.7,52.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AggB4QgMgLAAgRQAAgWAdhAQAbg/AAgRQAAgXgVAAQgPAAgOAMQgPANgIAUIhDC0IgtAAIBej7IAwAAIgQAYIADAAQAbgfAiAAQAVAAANALQALALAAATQAAAWgcBBQgcA/AAAMQAAAOANAAQAWAAAqgmQApglAdg9IAVAJQgeBDgyAzQg0A1gsAAQgUAAgKgLg");
	this.shape_1.setTransform(116.375,70.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhbCdQgKgMAAgWIAAgLIAFgPIAFgSIAIgWIAJgWIAKgcIAKgaIAYhBIAuAAIgQAnIgZBDQgcBLAAANQAAARAPAAQAYAAAjgsQAlguAYgvIAVAJQgeBAguA2QgtA2gpAAQgVAAgLgOgAgHh6QgHgGABgLQAAgNAJgJQAIgJAMAAQALAAAHAHQAGAGABAMQgBALgIAJQgLAKgMAAQgKAAgGgHg");
	this.shape_2.setTransform(97.9,66.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AjDDKICYmTIAuAAIgVAxIACAAQAWgaAfAAQAbAAARASQASAUAAAjQAAAmgUAsQgWAsggAWIAAACQAogIAsgoQArgmAWg5IAWAKQggBLg1AvQg3AxhEAAQg6AAgVgjIgCAAIg5CagAgIg7QgZAEgUAaQgTAaAAAYQAAAcAbAAQAXAAAWgaQAYgYANgjQAOgjAAgdQAAgugjAAQgfAAgRAiIgTA0QALgHAMAAQAOAAAGAIg");
	this.shape_3.setTransform(74.775,75.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAaB4QgMgLAAgRQAAgWAchAQAchAAAgQQAAgJgFgIQgGgGgLAAQgOAAgPAMQgOANgHAUIhEC0IgsAAIA/irQAGgQAAgLQAAgbgYAAQgfAAgUAuIhDCzIgtAAIBej7IAwAAIgQAYIADAAQAfgfAhAAQAWAAALAKQAKALAAASIADAAQAbgnAoAAQAWAAANALQAMALAAATQAAAWgcBBQgcA/AAAMQAAAOANAAQAWAAAqgmQApglAdg9IAVAJQgfBDgyAzQg0A1gsAAQgUAAgKgLg");
	this.shape_4.setTransform(45.375,70.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AiFBuQgPgWAAghQAAg9Asg/QArg9A3AAQAcAAAPASQAPATAAAiQAAAugaAzQA6AAAshYIAVAKQgXA0gkAeQgkAeglAAIgLgBQgpA8g0AAQgfAAgPgVgAg0hJQgWAegPApQgOAoAAAeQAAAjAVAAQAaAAAdgwQgRgSAAgcQAAgzAyg1QgFgIgKAAQgUAAgXAegAgTgHQAAARAIALQAVg2AAgoIAAgFQgdAmAAAhg");
	this.shape_5.setTransform(16.325,70.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhlBtQAAgPAFgQQAWg/AihXIgjAAIAHgcIAnAAIAOg1IAyAAIgYA1IAtAAIgIAcIgtAAQg5CZAAAQQAAANAPAAQAVAAAjglQAkgmAag+IAXAKQggBHgtAzQgqAxgrAAQgpAAAAgtg");
	this.shape_6.setTransform(-2.325,68.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhqBuQgTgTABgpIATgFQgBAWAKAPQAIAPAQAAQATAAAMgVQAMgVAAghIgDgoIgCg6IgCAAQgOApgPAWIgVgIQAlhRAHgbIAyAAQgFAUAAAVQAAAYAIAmQAHApAAANQAAASgGAMQgGANgNAPIABACQA8gnA0hsIATAIQgkBagxAtQgvAugwAAQggAAgTgUg");
	this.shape_7.setTransform(-18.3775,71.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhlBtQAAgPAFgQQAWg/AihXIgjAAIAHgcIAnAAIAOg1IAyAAIgYA1IAtAAIgIAcIgtAAQg5CZAAAQQAAANAPAAQAVAAAjglQAkgmAag+IAXAKQggBHgtAzQgqAxgrAAQgpAAAAgtg");
	this.shape_8.setTransform(-46.875,68.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AiFBuQgPgWAAghQAAg9Asg/QArg9A3AAQAcAAAPASQAPATAAAiQAAAugaAzQA6AAAshYIAVAKQgXA0gkAeQgkAeglAAIgLgBQgpA8g0AAQgfAAgPgVgAg0hJQgWAegPApQgOAoAAAeQAAAjAVAAQAaAAAdgwQgRgSAAgcQAAgzAyg1QgFgIgKAAQgUAAgXAegAgTgHQAAARAIALQAVg2AAgoIAAgFQgdAmAAAhg");
	this.shape_9.setTransform(-65.325,70.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AiFBuQgPgWAAghQAAg9Asg/QArg9A3AAQAcAAAPASQAPATAAAiQAAAugaAzQA6AAAshYIAVAKQgXA0gkAeQgkAeglAAIgLgBQgpA8g0AAQgfAAgPgVgAg0hJQgWAegPApQgOAoAAAeQAAAjAVAAQAaAAAdgwQgRgSAAgcQAAgzAyg1QgFgIgKAAQgUAAgXAegAgTgHQAAARAIALQAVg2AAgoIAAgFQgdAmAAAhg");
	this.shape_10.setTransform(-88.675,70.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AjKCYIAFAAQAcAAAZgOQAZgNATgZQAWgeALgUIAdg8IgrAAIAHgbIAwAAIAVgxIAQgjQALgUALgLQhQgYglAAQg1AAgbAaQgaAZAAAiQAAAcASARQASARAbAAIAbgEQgTAcgrAAQgkAAgWgYQgWgYAAghQAAgtAnghQAmgiBGAAQAdAABVAIQBTAHAoAAQBBAAAkgQQglBEhFAAQgfAAg1gPQgSASgcBbIAqAAIgIAbIgpAAIgPAxIgRAwQgNAegJAPIgYAiQgPASgRAIQgSAIgTAAQgyAAgFgwg");
	this.shape_11.setTransform(-107.575,64.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_footStompin, new cjs.Rectangle(-135.6,30.7,277.5,71.8), null);


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
	this.shape.graphics.f("#000000").s().p("AhbCyQgLgLAAgWQAAgPAHgRIA8inIAyiHIAtAAIgzCHQg/CnAAAPQAAARAPAAQAVAAAiglQAkglAdg/IAWAIQghBIgtA0QgrAygqAAQgTAAgMgMg");
	this.shape.setTransform(90.475,85.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeByQgLgNADgWIgDAAQgiAygpAAQgvgBAAgyQAAgRAHgTIAahIIAmhiIAtAAIgkBiIgdBOQgFAQAEALQAGALAOAAQARAAASgNQASgOAJgVIA9imIAtAAIgoBsQgcBKAAANQAAARAQAAQAYAAAjgsQAlgrAZgzIAUAJQgeBDguA1QgvA2gpAAQgTgBgLgOg");
	this.shape_1.setTransform(70.675,91.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AiBDXIBXjoQAFgVgHgPQgHgOgPAAIAHgcIAyAAIgCgZQAAgsAagZQAZgZAiAAQAmAAASAeIgRAvQgEgQgJgJQgMgJgPAAQgTAAgOAPQgOAQAAAdIAAAQIA8AAIgIAcIg4AAIhqEagAgggrIAKgYIgNAAQAEAJgBAPg");
	this.shape_2.setTransform(49.475,88.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhHCHQgMgLAAgYQAAghAVgyQAYg2AXgmIgBgCIgaADIgagDQgKAggXArIgVgJQANgbAOgtIgIg/IAtAAIgEApIAiACIA0gDIALAOQgYAmgTA6QgXA8AAAXQAAAPANAAQAUAAAlgnQAkgoAag6IAWAJQgXA6gyA6QgyA5gpAAQgRAAgNgMg");
	this.shape_3.setTransform(35.325,89.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AiGBuQgPgVAAgiQAAg+Asg+QArg+A4AAQAcAAAPATQAPATAAAiQAAAugaA0QA7AAArhZIAWAKQgXA0gkAeQglAeglAAIgKAAQgqA8g1AAQgeAAgQgWgAg0hKQgXAggPAoQgNAoAAAeQAAAjAVAAQAZAAAegwQgRgSgBgbQAAg0Azg2QgFgIgKAAQgVAAgWAegAgTgHQAAARAIALQAVg2AAgpIAAgEQgdAmAAAhg");
	this.shape_4.setTransform(11.4,91.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhCB/IAQjWIgDAAQgMAhgSAhIgbACQAcg1APg2IA5AAIgKDDIADAAIAmg9QAQgbAPgkQASgrABgcIAoAAQgMAwg8BkIg9Bpg");
	this.shape_5.setTransform(-12.825,91.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgfB2QgLgNAEgWIgEAAQgiAxgoAAQgXAAgLgTQgMgRAAgeQAAgoARguQASgsAigiQAfghAnAAQAjAAAGAbIADAAIADgUIAyAAIgoBsQgcBKAAAMQAAARAPAAQAXABAlgtQAlgtAZgwIAUAJQgdBCgvA1QguA2gpAAQgVAAgKgOgAg9hKQgZAcgNAjQgPAjAAAcQAAAkAYAAQAPAAARgNQAQgNAJgVIAFgLIAEgKIAehRQAFgTgEgKQgFgLgQAAQgYAAgXAbg");
	this.shape_6.setTransform(-36.4,91.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhbCyQgLgLAAgWQAAgPAHgRIA8inIAyiHIAtAAIgzCHQg/CnAAAPQAAARAPAAQAVAAAiglQAkglAdg/IAWAIQghBIgtA0QgrAygqAAQgTAAgMgMg");
	this.shape_7.setTransform(-57.175,85.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AjMCZIAGAAQAcAAAZgOQAZgOATgZQAXgeALgUIAdg8IgsAAIAHgcIAxAAIAVgxIAQgjQALgUALgLQhRgYglAAQg1AAgbAaQgaAaAAAiQAAAbASARQASARAcAAIAbgEQgTAdgsAAQglAAgVgYQgWgYAAghQAAgtAngiQAmgiBHAAQAdAABVAHQBTAIAoAAQBCAAAkgQQglBEhFAAQggAAg1gPQgSASgcBbIAqAAIgIAcIgpAAIgPAyIgSAvQgMAfgJAOIgZAjQgPARgRAJQgRAIgUAAQgzAAgFgwg");
	this.shape_8.setTransform(-71.025,84.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_flavorful, new cjs.Rectangle(-99.2,51,196.60000000000002,72.2), null);


(lib.txt_charmingly = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("Ah2CsQgQgNAAgTQAAgRANgLQAOgKARAAQAWAAAMAQQgNgEgMAFQgOAFAAALQABAJAGAFQAIAGANAAQAaAAARgaQASgbAXhGIgEAAQggAoglAAQguAAgBgyQABgRAGgTIAbhJIAlhhIAsAAIgjBiIgcBPQgGAPAFAKQAFAMAPAAQAQAAASgNQASgOAJgVIA+imIAtAAIg+CkIgOAlIgLAlIgIAbQgRA1gYAZQgYAagrAAQghAAgSgNg");
	this.shape.setTransform(108.1,90.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhbCyQgLgKAAgWQAAgPAHgSIA8inIAyiIIAtAAIgzCIQg/CoAAAPQAAARAPAAQAVAAAigmQAkgkAehBIAVAJQggBJgtAzQgsAzgqAAQgTAAgMgNg");
	this.shape_1.setTransform(93.925,79.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ah2CwQgRgNAAgTQAAgRANgLQAOgKARAAQAXAAALAPIgLgCQgMAAgIAGQgIAGAAAIQAAAIAIAFQAHAGAOAAQAZAAARgZQASgZAXhJIgDAAQgfApgjAAQgXAAgLgTQgNgSAAgeQAAhAArhDQAphCA4AAQAjAAAIAeIACAAIAAgXIAzAAIg+CkQgQAqgSA8QgRA1gXAZQgZAagrAAQghAAgRgNgAABiDQgYAdgNAjQgPAkAAAcQAAAjAYAAQAPAAAQgOQAQgNAJgTIAEgLIAFgLIAPgqIAPgoIAEgSQAAgWgYAAQgYAAgXAbg");
	this.shape_2.setTransform(72.225,90.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AggB5QgMgLAAgSQAAgWAdhAQAbg/AAgRQAAgYgVAAQgPAAgPAMQgOAOgIAUIhEC1IgtAAIBej9IAxAAIgQAZIADAAQAbggAiAAQAWAAAMALQAMAMAAASQAAAXgcBBQgdA/AAAMQAAAPAOAAQAWAAAqgnQApglAdg+IAVAKQgeBDgzA0Qg0A1gsAAQgUAAgKgLg");
	this.shape_3.setTransform(50.375,84.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhbCeQgMgMAAgWIACgLIAEgQIAGgSIAIgVIAIgXIALgcIALgbIAXhAIAuAAIgQAnIgZBEQgcBKAAAOQAAARAOAAQAZAAAjgsQAmgvAYgvIAUAJQgdBBguA2QguA2gqAAQgUAAgLgOgAgHh7QgHgHAAgKQAAgNAKgJQAIgJANAAQAKAAAIAGQAGAHAAALQAAAMgJAJQgLAKgMAAQgJAAgHgHg");
	this.shape_4.setTransform(31.8,80.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAaB5QgMgLAAgSQAAgWAdhAQAchAAAgQQAAgKgGgHQgGgHgLAAQgOAAgPAMQgOAOgHAUIhEC1IgtAAIBAisQAGgQAAgMQAAgbgZAAQgfAAgTAuIhFC1IgtAAIBfj9IAwAAIgQAZIAEAAQAeggAiAAQAWAAALAKQAKALAAASIADAAQAbgnApAAQAWAAANALQAMALAAATQAAAXgcBBQgdA/AAAMQAAAPAOAAQAWAAAqgnQApglAdg+IAWAKQgfBDgzA0Qg0A1gtAAQgTAAgLgLg");
	this.shape_5.setTransform(4.575,84.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhHCHQgLgLAAgZQgBggAVgyQAYg2AWgmIAAgCIgaACIgbgCQgKAggWArIgWgJQAOgaAOguIgIg/IAsAAIgDApIAiACIA1gDIAKANQgXAogUA6QgXA8AAAWQAAAQANAAQAVAAAkgpQAkgnAag6IAXAJQgYA7gyA5QgyA5gpAAQgSAAgMgMg");
	this.shape_6.setTransform(-22.1,83.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgfB2QgLgNADgWIgDAAQgiAxgoAAQgXAAgLgSQgNgTAAgeQAAgnASguQARgsAigiQAhghAmAAQAjAAAGAbIADAAIADgUIAyAAIgoBsQgcBJAAANQAAASAPAAQAXAAAlgtQAmgtAYgwIAVAJQgeBCgvA1QgvA2gpAAQgUAAgKgOgAg9hKQgZAcgNAjQgPAjAAAcQAAAkAYAAQAPAAARgNQAQgNAJgVIAEgLIAFgKIAdhSQAHgSgFgKQgFgLgQAAQgYAAgXAbg");
	this.shape_7.setTransform(-47.425,84.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AggCzQgMgLAAgSQAAgWAdhAQAbhAAAgQQAAgJgGgIQgGgHgKAAQgPAAgOAMQgOAOgIATIhEC2IgtAAICNl5IAsAAIg2CNIACAAQAagYAfAAQAWAAAMALQANALAAAUQAAAWgcBBQgdA/AAANQAAAOAOAAQAWAAArgnQApglAcg/IAVAKQgeBEgzA0Qg0A2gsAAQgUAAgKgMg");
	this.shape_8.setTransform(-75.575,79.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ah2CoQgegoAAhAQAAg7AZg8QAZg+AxgtQAxgsA7gBQAtAAAXAZQAWAYAAAkQAAAqgZAhQgaAiglAAQgZAAgMgPQgNgOAAgWQAAgYAQgXQARgXAbgJQgZAWAAAgQAAANAGAHQAHAIAKgBQAUABAOgVQAOgWAAgZQAAgYgOgRQgPgPgcAAQgqAAgjAlQgkAkgTA1QgSA0AAA0QAAA2AXAiQAVAkArgBQAcAAAagRQAagPASgfIAPALQgVAsglAYQgnAXgrAAQg6AAgegng");
	this.shape_9.setTransform(-104.075,79);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_charmingly, new cjs.Rectangle(-123.8,44.4,246.7,72.4), null);


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
	this.shape.graphics.f("#000000").s().p("AhYCsQgKgKAAgUQgBgPAHgSIA6iiIAxiCIArAAIgxCDQg9CiAAAPQAAAQAOABQAUAAAiglQAigkAdg9IAVAIQggBGgrAxQgrAxgoAAQgTAAgLgMg");
	this.shape.setTransform(115.6,80.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeBzQgKgNADgVIgDAAQghAvgnAAQgXAAgKgSQgMgRAAgdQAAgnAQgsQASgrAgghQAfggAmAAQAiAAAGAbIACAAIADgUIAxAAIgnBpQgbBHAAAMQAAARAOAAQAWAAAlgrQAkgsAYgvIAUAJQgdBAgtA0QguA0goAAQgTAAgKgNgAg7hHQgZAbgMAiQgOAiAAAbQAAAjAXAAQAOAAARgNQAPgNAJgUIAEgKIAEgLIAehPQAFgRgEgKQgFgLgPAAQgXAAgXAbg");
	this.shape_1.setTransform(96.45,86.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhECDQgMgLAAgYQAAgfAUgxQAXg0AWglIgBgBIgZACIgZgCQgKAfgWApIgUgJQAMgZAOgsIgHg9IAqAAIgDAoIAgACIA0gEIAKANQgXAngTA4QgWA6AAAVQAAAQAMAAQAUAAAkgnQAigmAag5IAVAJQgWA5gxA3QgwA3gnAAQgSAAgLgLg");
	this.shape_2.setTransform(74.425,84.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgdBvQgLgNADgVIgDAAQghAvgoAAQgtAAAAgwQAAgQAGgTIAahHIAkhdIAsAAIgjBeIgcBMQgFAPAFAKQAFAMAOAAQAQAAARgNQASgOAJgUIA7igIArAAIgnBoQgbBHAAANQAAARAQAAQAXAAAjgrQAjgqAYgxIAUAJQgdBAgtAzQgtA0goAAQgTAAgKgNg");
	this.shape_3.setTransform(49.875,86.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhiBrQAAgQAFgPQAVg9AhhVIgiAAIAHgbIAlAAIAOg0IAxAAIgYA0IAsAAIgIAbIgrAAQg3CVgBAPQABAOAOAAQAVAAAhglQAjglAag8IAWAKQgfBEgrAyQgqAwgqAAQgnAAAAgrg");
	this.shape_4.setTransform(30.55,84);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgeBzQgKgNADgVIgDAAQghAvgnAAQgWAAgMgSQgMgRABgdQAAgnARgsQARgrAgghQAgggAlAAQAiAAAGAbIADAAIACgUIAxAAIgnBpQgbBHAAAMQAAARAPAAQAWAAAjgrQAlgsAYgvIATAJQgdBAgsA0QguA0goAAQgTAAgKgNgAg7hHQgYAbgNAiQgOAiAAAbQAAAjAXAAQAOAAARgNQAQgNAIgUIAEgKIAFgLIAchPQAHgRgGgKQgEgLgPAAQgXAAgXAbg");
	this.shape_5.setTransform(11.25,86.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Aj/DBQgOgLgCgVIAGAAQCKAABklRIAqAAIgBAkQAAA9ASBbQATBhABAQIABAAQAriYAVg2QAvh0A+gJIALAAQAWAAAHALQAHAMgBAZQgNgIgQAAQgXABgWAPQgUAQgOAWQgNAUgQAqQgRArgIAcIgYBUIgZBUIg8AAQAHgLAAgTQAAgVgQhWQgShSgDhBIgCAAQhKEuhvABQgZgBgOgOg");
	this.shape_6.setTransform(-18.6937,79.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhYCsQgKgKAAgUQgBgPAHgSIA6iiIAxiCIArAAIgxCDQg9CiAAAPQAAAQAOABQAUAAAiglQAigkAdg9IAUAIQgfBGgrAxQgrAxgoAAQgTAAgLgMg");
	this.shape_7.setTransform(-58.1,80.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhYCsQgLgKAAgUQABgPAFgSIA8iiIAviCIAsAAIgxCDQg9CiAAAPQAAAQAOABQAUAAAhglQAkgkAbg9IAWAIQggBGgsAxQgqAxgoAAQgTAAgLgMg");
	this.shape_8.setTransform(-71.55,80.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ai5C7QgNgOgCgTIAGAAQA3AAAuglQAsgkAqhAIgkAAIAGgaIAvAAIAgg3IAfg1IAcgqQARgVAOgKQANgKAPAAQAPAAAMAMQAJALAAASQAAAygkBkIAVAAIgHAaIgYAAQgXA+AAAbQAAASAIALQAHAKALAAQATAAAPgcIAOAHQgLAfgYAPQgXAPgWAAQgYAAgLgQQgKgQgBgaQAAgmAchIIhBAAQgrBUguAyQguAyg2AAQgVAAgNgOgAB9iVQgSAbgYAwIgfBBIA9AAIAJgTIAIgYIAHgTQAXg4AAghQAAgNgIAAQgNAAgOAYg");
	this.shape_9.setTransform(-103.65,80.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_allNatural, new cjs.Rectangle(-122.2,47,244.5,70), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAgBKIgghmIAAAAIggBmIgcAAIgsiTIAkAAIAXBeIAAAAIAgheIAdAAIAfBgIABAAIAYhgIAhAAIgrCTg");
	this.shape.setTransform(-16.75,32.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgzBKIAAiTIBkAAIAAAeIhEAAIAAAcIBAAAIAAAdIhAAAIAAAeIBHAAIAAAeg");
	this.shape_1.setTransform(-33.575,32.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAbBKIg/hpIAAAAIAABpIgiAAIAAiTIAtAAIA+BmIABAAIAAhmIAhAAIAACTg");
	this.shape_2.setTransform(-49,32.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1A91CF").s().p("Al9F+QieieAAjgQAAjfCeieQCeieDfAAQDgAACeCeQCeCeAADfQAADgieCeQieCejgAAQjfAAieieg");
	this.shape_3.setTransform(-32,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.new_TAB, new cjs.Rectangle(-86,-54,108,108), null);


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
(lib.NanaB_Banners_300x600 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(240));

	// findUs_TAB
	this.instance = new lib.findUs_TAB();
	this.instance.setTransform(247.8,641.25);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(189).to({_off:false},0).to({y:599.75},8,cjs.Ease.quadOut).wait(43));

	// txt_sweetLife
	this.instance_1 = new lib.txt_sweetLife();
	this.instance_1.setTransform(148.5,2.55);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(189).to({_off:false},0).to({y:31.55,alpha:1},8,cjs.Ease.quadOut).wait(43));

	// txt_yall
	this.instance_2 = new lib.txt_yall();
	this.instance_2.setTransform(148.7,129.75,0.7091,0.7091);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(150).to({_off:false},0).to({scaleX:1,scaleY:1,x:148.45,y:115.05,alpha:1},9,cjs.Ease.quadOut).wait(20).to({scaleX:0.7091,scaleY:0.7091,x:148.7,y:125.25,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(51));

	// txt_footStompin
	this.instance_3 = new lib.txt_footStompin();
	this.instance_3.setTransform(149.2,101.4,0.7091,0.7091);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(149).to({_off:false},0).to({scaleX:1,scaleY:1,y:75.05,alpha:1},9,cjs.Ease.quadOut).wait(21).to({scaleX:0.7091,scaleY:0.7091,y:96.9,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(51));

	// txt_flavorful
	this.instance_4 = new lib.txt_flavorful();
	this.instance_4.setTransform(147.6,131.55,0.6991,0.6991);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(111).to({_off:false},0).to({scaleX:1,scaleY:1,x:147.3,y:113.05,alpha:1},9,cjs.Ease.quadOut).wait(20).to({scaleX:0.6991,scaleY:0.6991,x:147.6,y:131.55,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(90));

	// txt_charmingly
	this.instance_5 = new lib.txt_charmingly();
	this.instance_5.setTransform(148.3,101.5,0.6991,0.6991);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(110).to({_off:false},0).to({scaleX:1,scaleY:1,y:70.05,alpha:1},9,cjs.Ease.quadOut).wait(21).to({scaleX:0.6991,scaleY:0.6991,y:101.5,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(90));

	// txt_southern
	this.instance_6 = new lib.txt_southern();
	this.instance_6.setTransform(148.55,127.15,0.6396,0.6396,0,0,0,0.1,0);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(73).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,x:147.95,y:112.05,alpha:1},9,cjs.Ease.quadOut).wait(19).to({regX:0.1,scaleX:0.6396,scaleY:0.6396,x:148.55,y:134.15,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(129));

	// txt_refreshingly
	this.instance_7 = new lib.txt_refreshingly();
	this.instance_7.setTransform(149.55,105.95,0.6396,0.6396,0,0,0,0.1,0.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(72).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:149.5,y:71.05,alpha:1},9,cjs.Ease.quadOut).wait(20).to({regX:0.1,regY:0.1,scaleX:0.6396,scaleY:0.6396,x:149.55,y:108.45,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(129));

	// txt_ingredients
	this.instance_8 = new lib.txt_ingredients();
	this.instance_8.setTransform(146.35,123.15,0.6545,0.6545,0,0,0,0.1,0);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(34).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,y:108.05,alpha:1},9,cjs.Ease.quadOut).wait(19).to({regX:0.1,scaleX:0.6545,scaleY:0.6545,y:123.15,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(168));

	// txt_allNatural
	this.instance_9 = new lib.txt_allNatural();
	this.instance_9.setTransform(146.3,95,0.6545,0.6545,0,0,0,0.1,0.1);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(33).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:146.25,y:68.05,alpha:1},9,cjs.Ease.quadOut).wait(20).to({regX:0.1,regY:0.1,scaleX:0.6545,scaleY:0.6545,x:146.3,y:95,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(168));

	// raspBerrty_mc
	this.instance_10 = new lib.raspBerrty_mc();
	this.instance_10.setTransform(410.55,312.45,1,1,0,0,0,0.2,0.1);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(24).to({_off:false},0).to({x:140.55},7,cjs.Ease.quadOut).wait(1).to({regX:0.4,regY:0.4,scaleX:0.452,scaleY:0.452,x:241.9,y:433.15},4,cjs.Ease.quadOut).wait(204));

	// peach_mc
	this.instance_11 = new lib.peach_mc();
	this.instance_11.setTransform(177.5,430.05,0.452,0.452,0,0,0,0.4,0.4);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(28).to({_off:false},0).wait(212));

	// peach_mc
	this.instance_12 = new lib.peach_mc();
	this.instance_12.setTransform(409.65,306.5,1,1,0,0,0,0,0.2);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(16).to({_off:false},0).to({x:141.65},7,cjs.Ease.quadOut).wait(1).to({regX:0.4,regY:0.4,scaleX:0.452,scaleY:0.452,x:177.5,y:430.05},4,cjs.Ease.quadOut).to({_off:true},1).wait(211));

	// sweetTea_mc
	this.instance_13 = new lib.sweetTea_mc();
	this.instance_13.setTransform(410.45,308.4,1,1,0,0,0,0.2,0.1);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(8).to({_off:false},0).to({x:140.45},7,cjs.Ease.quadOut).wait(1).to({regX:0.8,regY:0.5,scaleX:0.452,scaleY:0.452,x:122.75,y:429.85},4,cjs.Ease.quadOut).wait(220));

	// lemon_mc
	this.instance_14 = new lib.lemon_mc();
	this.instance_14.setTransform(412.45,308.5,1,1,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({x:144.45},7,cjs.Ease.quadOut).wait(1).to({regX:0.5,regY:0.4,scaleX:0.4517,scaleY:0.4517,x:54.55,y:427.7},4,cjs.Ease.quadOut).wait(228));

	// new_TAB
	this.instance_15 = new lib.new_TAB();
	this.instance_15.setTransform(90.9,-55.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({x:90.85,y:-11.95},7,cjs.Ease.quadOut).wait(233));

	// background
	this.instance_16 = new lib.BG();

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(240));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(149,190.1,386.79999999999995,490.4);
// library properties:
lib.properties = {
	id: '90AA8FCF895B4939A1364AAE7129B0B5',
	width: 300,
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