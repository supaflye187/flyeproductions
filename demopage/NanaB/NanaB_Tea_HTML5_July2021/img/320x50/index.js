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
p.nominalBounds = new cjs.Rectangle(0,0,320,50);


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
	this.shape.graphics.f("#000000").s().p("AgGAHQgCgDAAgDQAAgDACgEQADgCADAAQAEAAADACQACADAAADQAAADgDACQgDAEgDAAQgDAAgDgCg");
	this.shape.setTransform(-102.525,-10.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeAdQgFgFAAgKQAAgQAMgQQAMgRAOAAQAHAAADADQAEAEAAAFQAAAKgIAFQgHAGgJAAQgGAAgFgDQgDAJAAAHQAAAOAKAAQAKAAALgLQAMgLAIgQIAGADQgIASgQAOQgOAOgNAAQgJAAgGgHgAgHgYQgFAGgEAIQADABAEABQAHgBAEgEQAEgEAAgGQAAgGgFABQgEAAgEAEg");
	this.shape_1.setTransform(-106.675,-13.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgiA6IAXg+QACgFgCgFQgCgDgEAAIABgIIAOAAIAAgHQAAgMAGgHQAHgGAJAAQAKAAAFAIIgFANQAAgFgDgCQgDgDgEAAQgGAAgDAEQgEAFAAAIIAAAEIAQAAIgCAIIgPAAIgcBLgAgIgLIADgGIgEAAQABACAAAEg");
	this.shape_2.setTransform(-111.725,-14.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgYArQgDgDAAgGIAAgDIABgFIACgEIACgGIACgHIADgHIADgHIAHgRIALAAIgEAKIgGASQgIAUAAAEQAAAFAEAAQAHAAAJgMQAKgNAGgMIAGACQgIARgNAPQgLAPgLAAQgGAAgDgEgAgBghQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgEADgCQABgDAEAAQAAAAABAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAADgCADQgDACgEAAQAAAAgBAAQgBAAAAAAQAAgBAAAAQgBAAAAgBg");
	this.shape_3.setTransform(-114.925,-14.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AANA3IgIgCIgFgDIgIgEIgGgDQgLALgPAAQgKAAgGgDQgFgFAAgFQAAgIAGgDQAGgDALgBQAJAAALADIAGgQIAHgVQAGgVAMgNQALgNAPAAQAMAAAFAGQAGAHAAAJQAAAMgHAJQgHAKgKAAQgHAAgDgFQgDgEgBgGQABgGAEgGQAEgHAIgCQgHAGAAAIQAAAIAHAAQAFAAAEgFQADgHAAgGQAAgHgDgEQgEgFgGAAQgFAAgEADQgEACgDADIgGAKIgEAMIgFANQgJAcgGAMIAFACIAGACIAFABIAHADIAGAAIAGABQAKAAAIgGQAAAGgHAIQgHAGgMAAgAgwAkQgCACAAADQAAAAAAABQAAAAAAABQABAAAAAAQABABAAAAQADACAFAAQALAAAHgIQgJgDgIAAQgFgBgEACg");
	this.shape_4.setTransform(-122.95,-15.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgbAeIACgJIAPgoIgKAAIACgIIALAAIADgOIAOAAIgHAOIAMAAIgCAIIgMAAQgPApAAAEQAAAEAEAAQAGAAAIgKQAKgKAIgRIAGADQgJATgMAOQgLANgLAAQgMAAAAgMg");
	this.shape_5.setTransform(-134.1,-14.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgeAdQgFgFAAgKQAAgQAMgQQAMgRAOAAQAHAAADADQAEAEAAAFQAAAKgIAFQgHAGgJAAQgGAAgFgDQgDAJAAAHQAAAOAKAAQAKAAALgLQAMgLAIgQIAGADQgIASgQAOQgOAOgNAAQgJAAgGgHgAgHgYQgFAGgEAIQADABAEABQAHgBAEgEQAEgEAAgGQAAgGgFABQgEAAgEAEg");
	this.shape_6.setTransform(-138.525,-13.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgeAdQgFgFAAgKQAAgQAMgQQAMgRAOAAQAHAAADADQAEAEAAAFQAAAKgIAFQgHAGgJAAQgGAAgFgDQgDAJAAAHQAAAOAKAAQAKAAALgLQAMgLAIgQIAGADQgIASgQAOQgOAOgNAAQgJAAgGgHgAgHgYQgFAGgEAIQADABAEABQAHgBAEgEQAEgEAAgGQAAgGgFABQgEAAgEAEg");
	this.shape_7.setTransform(-144.075,-13.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgBAiIAFg4IAAAAIgbA4IgMAAIAGg4IAAAAQgDAJgFAIIgHABQAHgPAFgOIAPAAIgFAxIAAAAIAYgxIAOAAIgFAxIABAAQAFgGAJgPQAIgRAAgLIALAAQgCAJgIAOIgPAaIgKASg");
	this.shape_8.setTransform(-151.825,-13.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AguA+IAPgVQgJgIAAgNQAAgMAIgIQAIgJANAAQAHAAAFADIAJgOQgGgKAAgIQAAgKAIgGQAHgHAKAAQAHAAAGAFQAFAEAAAIQAAAHgEAEQgEAFgHAAQgFAAgDgDIgDAEIAEAGIAGAIIADAGQADAFABADIABAJQAAASgOAMQgOALgQAAQgHAAgHgCIgFANgAgMAkIAGABQAMAAAJgIQAKgHAAgMIgCgJIgDgHIgGgIIgHANQAEADAAAGQAAAFgEAFQAAgJgEgEgAgaAEQgGAFAAAIQAAAIAIAGIAVgfQgDAAgFAAQgKAAgFAEgAASg0QgEADAAAGQAAAFAEAGIADgGIAAAAQAAgGAEgDIAAAEQAAADACACQAAABABAAQAAAAABABQAAAAABAAQABAAAAAAQADAAADgCQACgDAAgEQAAgFgDgDQgEgDgEAAQgGAAgEAEg");
	this.shape_9.setTransform(-161.525,-14.725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgeAdQgFgFAAgKQAAgQAMgQQAMgRAOAAQAHAAADADQAEAEAAAFQAAAKgIAFQgHAGgJAAQgGAAgFgDQgDAJAAAHQAAAOAKAAQAKAAALgLQAMgLAIgQIAGADQgIASgQAOQgOAOgNAAQgJAAgGgHgAgHgYQgFAGgEAIQADABAEABQAHgBAEgEQAEgEAAgGQAAgGgFABQgEAAgEAEg");
	this.shape_10.setTransform(-172.625,-13.65);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgIAxQgEgDAAgFQABgGAHgSQAHgRAAgEQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAQgEAAgEADQgEAEgCAEIgSAyIgNAAIAnhmIALAAIgOAnIAAAAQAIgHAHAAQAGAAADADQAEADAAAFQAAAGgIARQgHASAAADQAAAEADAAQAGAAALgLQAMgKAHgRIAGADQgIASgNAOQgPAPgLAAQgGAAgCgDg");
	this.shape_11.setTransform(-179.35,-15.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgbAeIACgJIAPgoIgKAAIACgIIALAAIADgOIAOAAIgHAOIAMAAIgCAIIgMAAQgPApAAAEQAAAEAEAAQAGAAAIgKQALgKAGgRIAHADQgJATgMAOQgLANgLAAQgMAAAAgMg");
	this.shape_12.setTransform(-184.3,-14.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgKAOQAKgIAAgGQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBgBAAIgDgBIgCAAIgBgCQAAgEADgDQADgDADAAQAEAAACACQADADAAAEQAAAGgHAHQgFAHgHAEg");
	this.shape_13.setTransform(-190.325,-18.675);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgIAhQgEgDABgFQAAgGAIgSQAGgPAAgFQAAgHgFAAQgEAAgEADQgEAEgCAFIgTAxIgLAAIAZhEIANAAIgEAHIABAAQAHgJAJAAQAFAAAEADQADADAAAFQAAAGgIASQgIARAAADQABAEADAAQAGAAAMgLQALgJAIgRIAFADQgIARgNAOQgPAPgLAAQgFAAgDgDg");
	this.shape_14.setTransform(-196.6,-13.65);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgYArQgDgDAAgGIAAgDIABgFIACgEIACgGIACgHIADgHIADgHIAHgRIALAAIgEAKIgGASQgIAUAAAEQAAAFAEAAQAHAAAJgMQAKgNAGgMIAGACQgIARgNAPQgLAPgLAAQgGAAgDgEgAgBghQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgEADgCQABgDAEAAQAAAAABAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQABABAAAAQAAABAAAAQAAABAAABQAAADgCADQgDACgEAAQAAAAgBAAQgBAAAAAAQAAgBAAAAQgBAAAAgBg");
	this.shape_15.setTransform(-201.575,-14.725);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgRAiIAEg5IgBAAQgDAJgFAJIgHABQAHgPAFgOIAPAAIgCA0IAAAAIAKgRQAEgGAEgKQAFgMAAgHIALAAQgDANgQAaIgQAcg");
	this.shape_16.setTransform(-206.675,-13.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgYArQgDgDAAgGIAAgDIABgFIACgEIACgGIACgHIADgHIADgHIAHgRIALAAIgEAKIgGASQgIAUAAAEQAAAFAEAAQAHAAAJgMQAKgNAGgMIAGACQgIARgNAPQgLAPgLAAQgGAAgDgEgAgBghQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgEADgCQABgDAEAAQAAAAABAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAADgCADQgDACgEAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBg");
	this.shape_17.setTransform(-211.325,-14.725);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AANA3IgIgCIgFgDIgHgEIgHgDQgLALgQAAQgJAAgGgDQgFgFAAgFQAAgIAGgDQAGgDALgBQAKAAAKADIAFgQIAHgVQAIgVAKgNQALgNAQAAQALAAAGAGQAGAHAAAJQAAAMgHAJQgHAKgKAAQgHAAgDgFQgEgEAAgGQAAgGAFgGQAEgHAHgCQgGAGAAAIQAAAIAGAAQAGAAADgFQAEgHAAgGQAAgHgDgEQgEgFgHAAQgEAAgEADQgEACgDADIgFAKIgGAMIgEANQgJAcgGAMIAFACIAFACIAGABIAHADIAFAAIAHABQAKAAAIgGQgBAGgGAIQgIAGgMAAgAgwAkQgDACAAADQAAAAABABQAAAAAAABQABAAAAAAQABABAAAAQADACAEAAQANAAAFgIQgIgDgIAAQgFgBgEACg");
	this.shape_18.setTransform(-219.4,-15.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_sweetLife, new cjs.Rectangle(-226.7,-25,127.49999999999999,20.4), null);


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
	this.shape.graphics.f("#000000").s().p("AgPA6QgGgGABgIQAAgLANgeQANgeAAgIQAAgMgKAAQgHABgHAFQgHAHgDAKIgiBWIgUAAIAth5IAWAAIgHAMIACAAQAMgPAQAAQAKAAAHAFQAFAGAAAJQAAAKgNAgQgOAeAAAFQAAAHAGAAQALAAAUgTQATgRAOgdIAKAFQgOAfgYAZQgZAZgUAAQgKAAgFgFg");
	this.shape.setTransform(-133.6,-12.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AghBAQgGgFAAgLQAAgQAKgYQALgZALgSIAAgBIgNABIgMgBQgFAPgLAVIgKgFQAGgMAHgWIgEgeIAWAAIgCATIAQACIAZgCIAFAGQgMATgJAbQgKAdAAALQAAAHAGAAQAJAAASgTQARgTAMgbIALAEQgLAcgYAbQgYAbgTAAQgIAAgGgGg");
	this.shape_1.setTransform(-142.925,-13.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag1A0QgKgLAAgPQAAgeAVgdQAVgdAaAAQAMAAAGAFQAGAHAAAKQAAAPgNAKQgNALgQgBQgKAAgKgEQgFAQAAAMQAAAYASAAQARAAAUgSQAWgTAOgeIALAFQgPAigcAYQgaAYgXAAQgPAAgKgLgAgOgqQgIAJgHAPQAGACAHAAQALAAAIgIQAIgHAAgKQAAgKgJAAQgHAAgJAJg");
	this.shape_2.setTransform(-153.025,-12.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgPBWQgFgGgBgIQAAgLAOgeQAMgfAAgHQABgFgDgDQgDgEgFAAQgHAAgGAGQgHAHgEAIIggBXIgWAAIBEizIAUAAIgZBDIABAAQAMgLAOAAQALAAAGAFQAGAFAAAJQAAALgOAeQgNAfAAAGQAAAHAHAAQAKAAAUgTQAUgSAOgdIAKAEQgPAhgYAYQgZAagVAAQgJAAgFgFg");
	this.shape_3.setTransform(-164.6,-15.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgwA0QAAgHACgHQAKgfARgpIgRAAIAEgOIASAAIAHgZIAXAAIgLAZIAVAAIgDAOIgVAAQgcBJAAAIQABAGAGAAQALAAAQgSQARgSANgeIALAGQgPAhgWAYQgUAYgVAAQgTAAAAgWg");
	this.shape_4.setTransform(-172.9,-13.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgOA3QgFgHABgKIgBAAQgQAXgUAAQgWAAAAgYQAAgIADgJIANgiIARguIAWAAIgRAuIgOAlQgDAIADAFQACAFAHAAQAIAAAJgGQAJgHAEgKIAchOIAWAAIgTAzQgOAjAAAGQAAAIAIAAQALAAARgVQASgUAMgYIAJAEQgOAfgWAaQgWAZgUAAQgJAAgFgGg");
	this.shape_5.setTransform(-181.925,-12.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag/A1QgIgLAAgPQAAgeAVgeQAVgdAbAAQAMAAAIAJQAHAJAAARQAAAVgNAZQAdgBAUgqIALAGQgLAYgSAOQgRAPgSAAIgFgBQgTAdgZAAQgPAAgHgKgAgYgiQgLAOgHAUQgHASAAAOQAAASAKgBQAMAAAOgWQgIgJAAgOQAAgYAYgZQgCgEgFAAQgKAAgKAPgAgJgDQAAAIAEAFQAKgaAAgSIAAgDQgOASAAAQg");
	this.shape_6.setTransform(-193.175,-12.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhSBtIAaglQgOgOAAgWQAAgXAOgOQANgQAXAAQANAAAJAFIAQgZQgLgRAAgOQAAgSAOgLQANgLARAAQANAAAKAIQAJAIAAANQAAAMgGAIQgHAJgMAAQgLAAgFgGIgFAIIAIALIAJAMIAHAMQAFAIABAHIACAQQAAAfgYAUQgZAVgdAAQgNAAgMgEQgHAPgCAIgAgWA/IALABQAVAAARgNQARgMAAgVQAAgIgDgJIgGgNIgKgOIgMAXQAGAHAAAKQAAAJgGAIQAAgPgHgIgAgvAHQgKAJAAANQAAAPAOAKIAlg2QgFgBgJAAQgRAAgKAIgAAhhdQgHAGAAALQAAAIAFALIAGgKIAAgCQAAgKAIgFIgBAHQAAAGADADQAEAEAFAAQAFAAAEgFQAEgEAAgHQAAgJgGgFQgGgGgIAAQgKAAgGAHg");
	this.shape_7.setTransform(-207.975,-14.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag3BSQgJgGABgJQAAgIAGgFQAGgFAIAAQALAAAGAHQgGgCgGADQgHACAAAFQAAAFADACQAEADAGAAQANAAAIgMQAIgNALgiIgBAAQgQATgRAAQgWAAgBgYQABgIADgIIAMgjIASguIAVAAIgQAuIgPAmQgCAHACAFQADAFAHAAQAIAAAHgGQAKgHADgJIAehPIAVAAIgcBOIgHARIgFASIgFANQgHAZgMAMQgLAMgVAAQgQAAgHgGg");
	this.shape_8.setTransform(-229.1,-9.975);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgqBVQgGgFAAgKQAAgHADgJIAdhPIAXhBIAWAAIgZBBQgdBPAAAHQAAAJAHAAQAKAAAQgSQARgSAOgeIAKAEQgPAigVAZQgVAYgUAAQgKAAgEgGg");
	this.shape_9.setTransform(-235.35,-15.625);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ag4BUQgIgGAAgKQAAgHAGgFQAHgFAIgBQALAAAGAIIgGgBQgGAAgDACQgEAEAAADQAAAEAEADQADACAGAAQAMABAJgMQAIgMAKgjIgBAAQgOATgQAAQgLAAgGgIQgGgKAAgOQAAgdAUghQAUgfAaAAQARAAADAOIACAAIAAgLIAYAAIgdBPQgIATgIAcQgJAagLAMQgLAMgVAAQgPAAgJgGgAABg+QgMAOgFAQQgIARABAOQAAAQALAAQAHAAAHgGQAIgHAEgIIACgGIACgEIAHgUIAIgUIABgIQAAgLgLAAQgMAAgKANg");
	this.shape_10.setTransform(-245.15,-10.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgPA6QgGgGABgIQAAgLANgeQANgeAAgIQAAgMgKAAQgHABgHAFQgHAHgDAKIgiBWIgUAAIAth5IAWAAIgHAMIACAAQAMgPAQAAQAKAAAHAFQAFAGAAAJQAAAKgOAgQgNAeAAAFQAAAHAGAAQALAAAUgTQAUgRANgdIAKAFQgOAfgYAZQgZAZgVAAQgJAAgFgFg");
	this.shape_11.setTransform(-255,-12.85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgrBMQgGgGAAgLIABgFIADgHIACgJIAEgKIAEgLIAFgNIAFgNIALgeIAWAAIgIASIgMAgQgNAkAAAGQAAAIAHAAQAMAAAQgVQASgWALgWIAKAEQgOAfgWAaQgVAZgUAAQgKAAgFgGgAgDg6QgDgDAAgFQAAgGAFgFQADgEAGAAQAFAAAEADQACADAAAGQAAAFgEAFQgFAEgGAAQgEAAgDgDg");
	this.shape_12.setTransform(-263.4,-14.775);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgPBWQgGgGABgIQAAgLANgeQANgfAAgHQgBgFgCgDQgDgEgEAAQgIAAgGAGQgHAHgDAIIgiBXIgUAAIBCizIAVAAIgZBDIABAAQAMgLAOAAQALAAAGAFQAGAFAAAJQAAALgOAeQgNAfAAAGQAAAHAGAAQALAAAVgTQATgSANgdIAKAEQgOAhgYAYQgZAagVAAQgJAAgFgFg");
	this.shape_13.setTransform(-273,-15.625);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgyA1QgKgJABgUIAJgCQgBALAFAGQAFAIAHgBQAJABAGgLQAGgKAAgQIgCgSIgBgcIgBAAQgHAUgHAKIgKgEQASgnADgNIAYAAQgDAKAAAKQAAAMAEASQAEATAAAGQAAAJgDAGQgDAGgGAHIABACQAcgUAZgzIAJAEQgRArgXAWQgXAVgXAAQgPAAgJgJg");
	this.shape_14.setTransform(-282.4762,-12.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ag1A0QgKgLAAgPQAAgeAVgdQAVgdAaAAQAMAAAGAFQAGAHAAAKQAAAPgNAKQgNALgQgBQgKAAgKgEQgFAQAAAMQAAAYASAAQARAAAUgSQAWgTAOgeIALAFQgPAigcAYQgaAYgXAAQgPAAgKgLgAgOgqQgIAJgHAPQAGACAHAAQALAAAIgIQAIgHAAgKQAAgKgJAAQgHAAgJAJg");
	this.shape_15.setTransform(-290.575,-12.85);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AghBAQgGgFAAgLQAAgQAKgYQALgZALgSIAAgBIgNABIgMgBQgFAPgLAVIgKgFQAGgMAHgWIgEgeIAWAAIgCATIAQACIAZgCIAFAGQgMATgJAbQgKAdAAALQAAAHAGAAQAJAAASgTQARgTAMgbIALAEQgLAcgYAbQgYAbgTAAQgIAAgGgGg");
	this.shape_16.setTransform(-299.525,-13.575);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("Ag9BnIAqhvQACgJgEgIQgDgHgHAAIADgNIAYAAIgBgMQAAgVAMgMQAMgMAQAAQATAAAIAOIgIAXQgCgIgEgEQgGgEgHAAQgJAAgHAHQgHAHAAAPIABAHIAcAAIgEANIgbAAIgyCHgAgPgUIAFgMIgGAAQACAFgBAHg");
	this.shape_17.setTransform(-308.775,-14.225);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("Ag1A0QgKgLAAgPQAAgeAVgdQAVgdAaAAQAMAAAGAFQAGAHAAAKQAAAPgNAKQgNALgQgBQgKAAgKgEQgFAQAAAMQAAAYASAAQARAAAUgSQAWgTAOgeIALAFQgPAigcAYQgaAYgXAAQgPAAgKgLgAgOgqQgIAJgHAPQAGACAHAAQALAAAIgIQAIgHAAgKQAAgKgJAAQgHAAgJAJg");
	this.shape_18.setTransform(-315.425,-12.85);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AhSBZQgHgGgCgKIADAAQATAAAQgOQARgOALgVQAMgVAIgUQAIgUALgVQAKgSAJgGQgJgCgOgBQgdAAgYAOQgYAOAAAXQAAANAIAGQAHAHANAAQAIAAAHgCQgKANgVAAQgRAAgKgJQgLgKAAgPQAAgUARgPQARgOAZgIQAYgHAaAAQAkAAAVAOQAVAOAAARQAAASgSAPQgSAPgdACIAAABQAMACAGAIQAGAJAAAMIAAAJIAAAKQAAAWAKAAQAJAAAGgNIAHAEQgGAPgLAHQgLAIgJAAQgYAAAAgbIACgXIADgVQAAgJgFgEQgFgFgNgBIgMAiQgFAMgJAQQgJAPgKAIQgLAHgNAAQgMAAgHgHgAASgeIgIAYQAZACAQgNQAQgOAAgRQAAgUgYgKQgLAFgOArg");
	this.shape_19.setTransform(-330.775,-16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_refreshingly, new cjs.Rectangle(-342.1,-32.3,214.90000000000003,34.699999999999996), null);


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
	this.shape.graphics.f("#000000").s().p("AgKALQgEgEAAgGQAAgGAEgEQAEgFAHAAQAGAAAEAEQAEAEAAAGQAAAFgFAFQgFAFgGAAQgFAAgEgEg");
	this.shape.setTransform(162.25,-45.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgoBQQgFgFAAgKQAAgGACgIIAchLIAWg8IAUAAIgXA9QgbBKgBAHQABAHAGAAQAJAAAPgQQAQgRANgdIAKAEQgPAhgUAXQgTAWgSAAQgJAAgFgFg");
	this.shape_1.setTransform(156.55,-52.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgoBQQgFgFAAgKQAAgGACgIIAchLIAWg8IAUAAIgXA9QgcBKAAAHQAAAHAHAAQAJAAAPgQQAQgRANgdIAKAEQgOAhgVAXQgTAWgTAAQgIAAgFgFg");
	this.shape_2.setTransform(150.35,-52.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgNA1QgFgGABgKIgBAAQgPAWgSAAQgLAAgFgIQgFgIAAgOQAAgRAIgUQAIgUAPgPQAOgPARAAQAQAAACAMIACAAIABgJIAWAAIgSAwQgMAhAAAGQAAAHAHAAQAKAAAQgTQARgUALgWIAJAEQgNAdgVAYQgVAYgSAAQgIAAgFgGgAgbggQgLAMgGAQQgGAPAAANQAAAQALAAQAGAAAIgGQAHgGAEgJIACgFIACgFIANgkQACgIgCgFQgCgFgGAAQgLAAgLANg");
	this.shape_3.setTransform(141.475,-49.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgRAYQARgNAAgLQAAgEgCgCQgCgCgDAAIgEABIgBgEQAAgGAFgFQAFgFAGAAQAGAAAEAEQAEAEAAAGQAAALgKAMQgKAMgLAGg");
	this.shape_4.setTransform(134.3,-57.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag0BNQgIgGABgIQAAgIAFgFQAHgEAIAAQAKAAAEAHQgFgCgGACQgGACAAAFQAAAEADADQAEACAGAAQALAAAIgLQAIgMAJggIgBAAQgOASgRAAQgUAAAAgWQAAgIACgIIANggIAQgsIAUAAIgQAsIgMAjQgDAGACAFQADAFAGAAQAIAAAGgGQAJgGAEgIIAchLIATAAIgbBJIgGARIgFAQIgEAMQgHAYgLALQgKAMgTAAQgQAAgHgGg");
	this.shape_5.setTransform(123.55,-46.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgRAYQARgNAAgLQAAgEgCgCQgCgCgDAAIgEABIAAgEQgBgGAFgFQAFgFAFAAQAHAAAEAEQAEAEAAAGQAAALgLAMQgJAMgMAGg");
	this.shape_6.setTransform(108.95,-43.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgNBPQgFgGABgKIgBAAQgPAWgSAAQgLAAgFgIQgFgIAAgOQAAgRAIgVQAIgTAPgPQAOgPARAAQAQAAAEANIABAAIAXhBIAUAAIgWA9QgdBKAAAHQAAADACACQACACADAAQAJAAAQgQQAQgRANgdIAJAEQgOAhgUAXQgUAWgTAAQgIAAgFgGgAgbgGQgLALgGAQQgGAQAAANQAAAQALAAQAGAAAIgGQAHgGAEgJIACgFIACgFIAEgLIAFgOIAEgLQACgIgCgFQgCgFgGAAQgLAAgLANg");
	this.shape_7.setTransform(100.575,-52.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag7AyQgHgKAAgPQAAgbAUgcQATgcAZAAQAMAAAHAIQAGAJAAAPQAAAVgLAWQAaAAAUgnIAJAFQgKAXgQANQgQANgRAAIgFAAQgSAbgYAAQgNAAgHgJgAgXggQgKAOgGASQgHARAAAOQAAAPAKAAQALAAANgVQgHgIAAgNQAAgWAWgYQgCgEgEAAQgKAAgKAOgAgIgCQAAAHAEAEQAJgXAAgSIAAgCQgNARAAAPg");
	this.shape_8.setTransform(89.225,-49.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag7AyQgHgKAAgPQAAgbAUgcQATgcAZAAQAMAAAHAIQAGAJAAAPQAAAVgLAWQAaAAAUgnIAJAFQgKAXgQANQgQANgRAAIgFAAQgSAbgYAAQgNAAgHgJgAgXggQgKAOgGASQgHARAAAOQAAAPAKAAQALAAANgVQgHgIAAgNQAAgWAWgYQgCgEgEAAQgKAAgKAOgAgIgCQAAAHAEAEQAJgXAAgSIAAgCQgNARAAAPg");
	this.shape_9.setTransform(78.675,-49.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ag0BPQgIgGAAgJQAAgHAHgFQAFgEAIgBQAKAAAFAIIgFgBQgFgBgDADQgEADAAADQAAAEAEACQACADAHAAQALAAAIgMQAHgKALghIgCAAQgNASgQAAQgLAAgEgIQgGgIAAgOQAAgcATgeQATgeAYAAQAQAAADAOIABAAIAAgKIAXAAIgbBJIgQAtQgHAYgLALQgKALgUAAQgPABgHgGgAAAg6QgJANgHAPQgGARAAANQAAAOALAAQAGAAAHgFQAHgHAEgIIACgEIACgGIAHgSIAHgSIACgIQAAgKgLAAQgLAAgLAMg");
	this.shape_10.setTransform(66.65,-46.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgRAYQARgNAAgLQAAgEgBgCQgDgCgDAAIgEABIAAgEQgBgGAFgFQAEgFAHAAQAGAAAEAEQAEAEAAAGQAAALgKAMQgKAMgLAGg");
	this.shape_11.setTransform(56.2,-57.775);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgOA2QgFgFAAgIQAAgJANgdQALgcAAgHQAAgLgJAAQgGAAgHAFQgGAGgEAJIgeBRIgUAAIAqhxIAWAAIgIALIACAAQAMgOAPAAQAJAAAGAFQAFAFAAAIQAAALgNAdQgMAcAAAFQAAAGAGAAQAKAAATgRQASgQANgcIAJAFQgNAdgXAXQgXAYgTAAQgJAAgFgFg");
	this.shape_12.setTransform(45.675,-49.475);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgoBHQgFgGAAgKIAAgEIACgHIADgJIADgJIAEgKIAFgNIAEgMIALgcIAUAAIgHASIgLAdQgMAhAAAHQAAAHAGAAQALAAAPgUQARgUALgVIAJAEQgNAdgVAYQgUAYgSAAQgJAAgFgGgAgDg2QgDgDAAgFQAAgGAFgEQADgEAFAAQAFAAADADQADADAAAFQAAAFgEAFQgFADgFAAQgEAAgDgCg");
	this.shape_13.setTransform(37.375,-51.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhXBbIBEi1IAVAAIgKAWIACAAQAJgMAOAAQAMAAAIAIQAIAJAAAQQAAARgJAUQgKATgPAKIABABQARgDAUgSQAUgRAKgaIAJAFQgOAigYAUQgZAWgeAAQgaAAgJgQIgBAAIgaBGgAgDgaQgLACgJAMQgJALAAAKQAAANAMAAQALAAAJgMQALgKAGgQQAGgQAAgNQAAgUgQAAQgNAAgIAPIgIAXQAFgCAFAAQAGAAADADg");
	this.shape_14.setTransform(26.925,-47.275);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AALA2QgFgFAAgIQAAgJANgdQAMgcAAgHQABgFgDgDQgDgDgFAAQgGAAgGAFQgHAGgCAJIgfBRIgUAAIAchMQADgIAAgFQAAgMgLAAQgOAAgIAUIgfBRIgUAAIAqhxIAWAAIgIALIACAAQAOgOAPAAQAKAAAFAFQADAFABAHIABAAQAMgRASAAQAKAAAGAFQAFAFABAIQAAALgNAdQgNAcAAAFQAAAGAGAAQAKAAATgRQATgQAMgcIAKAFQgOAdgXAXQgXAYgUAAQgJAAgFgFg");
	this.shape_15.setTransform(13.7,-49.475);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("Ag7AyQgHgKAAgPQAAgbAUgcQATgcAZAAQAMAAAHAIQAGAJAAAPQAAAVgLAWQAaAAAUgnIAJAFQgKAXgQANQgQANgRAAIgFAAQgSAbgYAAQgNAAgHgJgAgXggQgKAOgGASQgHARAAAOQAAAPAKAAQALAAANgVQgHgIAAgNQAAgWAWgYQgCgEgEAAQgKAAgKAOgAgIgCQAAAHAEAEQAJgXAAgSIAAgCQgNARAAAPg");
	this.shape_16.setTransform(0.575,-49.475);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgtAyQAAgIACgHQAKgcAPgnIgQAAIAEgNIARAAIAGgXIAWAAIgKAXIAUAAIgEANIgUAAQgZBFAAAGQAAAHAHAAQAJAAAPgRQARgSAMgbIAKAFQgPAfgUAYQgSAVgUAAQgSAAAAgTg");
	this.shape_17.setTransform(-7.825,-50.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgvAyQgJgJAAgTIAJgCQAAALAEAGQAFAHAGAAQAJgBAGgIQAEgKAAgPIgBgRIgBgbIAAAAQgHATgHAKIgJgEQARgkADgNIAWAAQgDAJABAKQAAALADARQAEASAAAFQAAAJgEAFQgCAGgGAGIABACQAbgSAXgwIAIAEQgQAogVAUQgWAUgVAAQgOABgJgJg");
	this.shape_18.setTransform(-15.1,-49.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgtAyQAAgIACgHQAKgcAPgnIgQAAIAEgNIARAAIAGgXIAWAAIgKAXIAUAAIgEANIgUAAQgZBFAAAGQAAAHAHAAQAJAAAPgRQARgSAMgbIAKAFQgPAfgUAYQgSAVgUAAQgSAAAAgTg");
	this.shape_19.setTransform(-27.875,-50.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("Ag7AyQgHgKAAgPQAAgbAUgcQATgcAZAAQAMAAAHAIQAGAJAAAPQAAAVgLAWQAaAAAUgnIAJAFQgKAXgQANQgQANgRAAIgFAAQgSAbgYAAQgNAAgHgJgAgXggQgKAOgGASQgHARAAAOQAAAPAKAAQALAAANgVQgHgIAAgNQAAgWAWgYQgCgEgEAAQgKAAgKAOgAgIgCQAAAHAEAEQAJgXAAgSIAAgCQgNARAAAPg");
	this.shape_20.setTransform(-36.275,-49.475);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("Ag7AyQgHgKAAgPQAAgbAUgcQATgcAZAAQAMAAAHAIQAGAJAAAPQAAAVgLAWQAaAAAUgnIAJAFQgKAXgQANQgQANgRAAIgFAAQgSAbgYAAQgNAAgHgJgAgXggQgKAOgGASQgHARAAAOQAAAPAKAAQALAAANgVQgHgIAAgNQAAgWAWgYQgCgEgEAAQgKAAgKAOgAgIgCQAAAHAEAEQAJgXAAgSIAAgCQgNARAAAPg");
	this.shape_21.setTransform(-46.825,-49.475);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AhbBEIACAAQANAAAMgFQALgHAIgLQAKgNAGgKIAMgaIgTAAIADgMIAWAAIAJgWIAHgQQAFgJAFgFQgkgKgQAAQgYAAgMALQgNAMAAAOQAAANAJAIQAIAHANAAIALgCQgIANgTAAQgRAAgKgLQgJgKAAgPQAAgUARgQQARgPAfABQANgBAmAEQAmAEASAAQAeAAAPgIQgRAegeAAQgOAAgYgGQgIAIgNApIATAAIgEAMIgSAAIgHAWIgHAVQgGAOgEAGIgLAQQgHAIgIADQgHAEgJAAQgWAAgDgWg");
	this.shape_22.setTransform(-55.3,-52.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_footStompin, new cjs.Rectangle(-68.1,-67.7,235.5,32.6), null);


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
	this.shape.graphics.f("#000000").s().p("AgoBRQgFgFAAgKQAAgHACgIIAchLIAWg9IAUAAIgXA9QgcBLAAAHQAAAIAHAAQAJAAAPgRQARgQANgeIAJAFQgOAggUAXQgTAXgUAAQgIAAgFgFg");
	this.shape.setTransform(-65.675,55.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgNA0QgFgGABgKIgBAAQgPAWgTAAQgVAAAAgXQAAgHADgJIAMggIARgsIAUAAIgQAsIgNAjQgDAHADAFQACAFAGAAQAIAAAIgGQAJgHAEgJIAbhKIAUAAIgSAwQgNAiAAAFQAAAIAHAAQALAAAQgUQARgTALgXIAJAEQgNAegVAYQgVAYgTAAQgIAAgFgGg");
	this.shape_1.setTransform(-74.675,58.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag6BhIAohoQACgJgDgHQgEgHgGAAIADgMIAXAAIgBgMQAAgTALgMQALgLAQAAQARAAAIANIgIAWQgBgIgFgEQgFgEgHAAQgJAAgGAHQgGAHAAANIAAAIIAbAAIgEAMIgZAAIgvB/gAgOgTIAFgLIgGAAQACAEgBAHg");
	this.shape_2.setTransform(-84.275,56.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgfA9QgGgFAAgLQAAgPAKgWQAKgZALgQIgBgBIgLABIgMgBQgFAPgKATIgKgFQAGgLAHgVIgEgdIAUAAIgCATIAQABIAXgCIAFAGQgLASgIAaQgKAbAAAKQAAAIAGAAQAIgBARgRQAQgSAMgaIAKAEQgLAZgWAaQgXAagSAAQgIAAgFgFg");
	this.shape_3.setTransform(-90.675,57.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag8AyQgHgKAAgPQAAgbAUgdQATgcAaAAQAMAAAHAJQAGAIAAAQQAAAVgLAXQAbAAATgoIAKAEQgLAYgQANQgQAOgRAAIgFgBQgSAcgYAAQgOAAgHgKgAgXghQgLAOgGATQgHARAAAOQAAAQALAAQALAAANgWQgIgIAAgNQAAgWAWgZQgBgDgFAAQgJAAgKANgAgIgCQAAAHADAEQAKgXgBgTIAAgCQgMARAAAQg");
	this.shape_4.setTransform(-101.5,58.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgeA5IAIhgIgBAAQgGAPgIAPIgMABQAMgYAHgYIAaAAIgFBXIACAAIARgcQAHgLAGgRQAJgTAAgMIASAAQgFAVgbAtIgbAvg");
	this.shape_5.setTransform(-112.5,58.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgNA2QgFgHABgJIgBAAQgQAWgSAAQgKAAgFgJQgGgIAAgNQAAgSAIgUQAIgUAPgQQAPgPARAAQAPAAADANIABAAIACgJIAXAAIgSAwQgNAhAAAGQAAAIAGAAQALAAAQgUQASgUAKgWIAKAEQgOAdgUAYQgVAZgTAAQgJAAgEgGgAgbghQgLANgHAQQgGAPAAANQAAAQALAAQAHAAAHgGQAIgGADgJIADgFIACgFIAMgkQAEgIgDgFQgCgFgHAAQgKAAgLAMg");
	this.shape_6.setTransform(-123.15,58.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgoBRQgFgFAAgKQAAgHACgIIAchLIAWg9IAUAAIgXA9QgcBLAAAHQAAAIAHAAQAJAAAPgRQARgQANgeIAJAFQgOAggUAXQgTAXgUAAQgIAAgFgFg");
	this.shape_7.setTransform(-132.525,55.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhcBFIADAAQAMAAAMgGQALgGAJgMQAKgNAFgJIAOgbIgUAAIADgMIAVAAIAKgXIAHgQQAFgJAFgFQgkgKgRAAQgYAAgMALQgMAMAAAPQAAANAIAIQAJAHAMAAIAMgCQgJANgTAAQgRAAgJgLQgLgKAAgPQABgVARgPQASgQAgAAQAMAAAnAEQAmADASAAQAeAAAPgHQgQAfgfAAQgPAAgYgHQgIAIgNAqIATAAIgDAMIgTAAIgGAWIgIAVIgKAVIgLAQQgHAIgIADQgHAEgKAAQgWAAgDgWg");
	this.shape_8.setTransform(-138.85,55.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag0BOQgIgGAAgIQAAgJAGgFQAGgEAIAAQAKAAAGAHQgHgBgFABQgHADABAFQAAAEACACQAEADAGAAQALAAAIgMQAJgMAJggIgBAAQgOASgQAAQgWABAAgXQAAgIADgHIAMgiIARgsIATAAIgPAsIgNAkQgDAHADAEQACAFAHAAQAHABAIgHQAIgGAEgIIAchMIAUAAIgcBKIgFARIgGAQIgDANQgIAXgLAMQgLAMgTAAQgPgBgHgFg");
	this.shape_9.setTransform(-162.45,60.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgoBRQgFgFAAgKQAAgHACgIIAchLIAWg9IAUAAIgXA9QgcBLAAAHQAAAIAHAAQAJAAAPgRQARgQANgeIAJAFQgOAggUAXQgTAXgUAAQgIAAgFgFg");
	this.shape_10.setTransform(-168.875,55.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag1BQQgIgGAAgJQAAgIAHgFQAGgEAHAAQAKAAAGAHIgGgBQgFAAgDADQgDACgBAEQABADADADQADADAHAAQALAAAIgMQAHgLALghIgCAAQgOASgPAAQgLAAgFgIQgFgIAAgOQAAgcASgeQAUgeAYAAQAQAAADANIACAAIAAgKIAXAAIgcBKQgHASgJAbQgIAYgKAMQgKALgVAAQgOAAgIgFgAAAg6QgKAMgGAQQgHAQAAANQAAAQAMAAQAGAAAHgHQAHgGAEgIIADgFIABgFIAIgSIAGgTIACgIQAAgKgLAAQgLAAgLANg");
	this.shape_11.setTransform(-178.7,60.575);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgOA3QgFgFAAgIQAAgKANgdQALgcAAgIQAAgLgJAAQgGAAgHAGQgGAGgEAJIgfBRIgUAAIArhxIAWAAIgIALIACAAQAMgPAPAAQAKAAAFAFQAFAGAAAIQAAAKgMAeQgNAcAAAFQAAAHAGAAQAKAAATgSQATgQANgcIAJAEQgNAegXAYQgYAYgTAAQgJAAgFgFg");
	this.shape_12.setTransform(-188.575,58.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgpBIQgFgGAAgKIABgFIACgHIACgIIAEgKIADgKIAFgNIAFgLIALgdIAUAAIgHARIgLAeQgNAiAAAGQAAAIAHAAQALAAAPgUQASgVAKgVIAKAEQgOAdgVAYQgUAZgSAAQgKAAgFgGgAgDg3QgDgDAAgFQAAgGAEgEQAEgEAFAAQAFAAADADQADADAAAFQAAAGgEAEQgFAEgFAAQgEAAgDgDg");
	this.shape_13.setTransform(-196.925,56.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAMA3QgGgFAAgIQAAgKANgdQANgdAAgHQAAgEgCgEQgDgDgFAAQgHAAgGAGQgHAGgCAJIgfBRIgVAAIAdhNQADgHAAgFQAAgNgLAAQgOAAgJAVIgfBRIgUAAIArhxIAWAAIgIALIACAAQAOgPAPAAQAKAAAFAFQAEAFAAAIIABAAQAMgSATAAQAKAAAGAFQAFAFAAAJQAAAKgNAeQgMAcAAAFQAAAHAGAAQAJAAAUgSQASgQANgcIAKAEQgOAegXAYQgXAYgVAAQgIAAgFgFg");
	this.shape_14.setTransform(-209.225,58.025);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgfA9QgGgFAAgLQAAgPAKgWQAKgZALgQIgBgBIgLABIgMgBQgFAPgKATIgKgFQAGgLAHgVIgEgdIAUAAIgCATIAQABIAXgCIAFAGQgLASgIAaQgKAbAAAKQAAAIAGAAQAIgBARgRQAQgSAMgaIAKAEQgLAZgWAaQgXAagSAAQgIAAgFgFg");
	this.shape_15.setTransform(-221.325,57.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgNA2QgFgHABgJIgBAAQgQAWgRAAQgLAAgFgJQgGgIAAgNQAAgSAIgUQAIgUAQgQQAOgPARAAQAPAAADANIABAAIACgJIAWAAIgSAwQgMAhAAAGQAAAIAGAAQALAAAQgUQASgUALgWIAJAEQgOAdgUAYQgVAZgTAAQgIAAgFgGgAgbghQgLANgHAQQgGAPAAANQAAAQALAAQAHAAAHgGQAHgGAFgJIACgFIABgFIAOgkQACgIgCgFQgCgFgGAAQgLAAgLAMg");
	this.shape_16.setTransform(-232.75,58.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgOBRQgFgFAAgIQAAgKANgdQALgdAAgHQAAgEgCgEQgDgDgEAAQgHABgGAFQgGAGgEAIIgfBSIgUAAIBAipIATAAIgYBAIABAAQAMgMANAAQAKABAGAFQAFAFAAAIQAAAKgMAdQgNAdAAAGQAAAGAGAAQAKAAATgSQATgQANgdIAJAFQgNAfgXAXQgYAYgTAAQgJAAgFgFg");
	this.shape_17.setTransform(-245.475,55.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("Ag1BMQgOgSAAgdQAAgbAMgaQALgcAWgVQAWgUAaAAQAVAAAKALQAKALAAAQQAAATgLAPQgMAQgQAAQgMAAgFgHQgGgHAAgJQAAgLAHgKQAIgLAMgEQgLAKAAAOQAAAGACAEQAEADAEAAQAJAAAHgKQAGgJAAgMQAAgLgGgHQgHgHgNAAQgTAAgPAQQgQARgJAYQgIAYAAAXQAAAYAKAPQAJAQAUAAQAMAAAMgIQAMgGAHgOIAHAEQgJAUgRALQgRALgTAAQgbAAgNgSg");
	this.shape_18.setTransform(-258.3,55.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_charmingly, new cjs.Rectangle(-267.4,39.6,204.99999999999997,32.99999999999999), null);


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
	this.shape.graphics.f("#000000").s().p("AgwAzQgJgJAAgTIAJgCQgBAKAFAGQAEAIAHgBQAJAAAGgJQAFgKAAgPIgBgSIgBgbIgBAAQgHAUgGAJIgKgEQARglADgMIAXAAQgDAJAAAKQAAALAEASQADASAAAGQAAAIgDAFQgCAHgGAHIABABQAbgTAYgxIAJAEQgRApgWAVQgWAVgWAAQgOAAgJgJg");
	this.shape.setTransform(-44.7763,-15.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AguAzQAAgIACgHQAKgdAQgoIgQAAIAEgNIARAAIAGgYIAXAAIgLAYIAVAAIgEANIgVAAQgZBHAAAGQAAAHAGAAQAKAAAQgRQAQgSAMgcIALAFQgPAggVAYQgSAWgUAAQgTAAAAgUg");
	this.shape_1.setTransform(-51.7,-16.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgOA3QgGgEAAgIQAAgKAOgeQALgdAAgHQAAgLgJAAQgGAAgHAFQgHAGgDAJIggBTIgUAAIArhzIAWAAIgHAMIABAAQAMgPAQgBQAKABAFAFQAGAFAAAIQAAALgNAeQgNAcAAAGQAAAGAGAAQAKAAATgRQATgRAOgcIAJAFQgNAegYAXQgYAZgTAAQgKgBgEgFg");
	this.shape_2.setTransform(-61.45,-15.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgzAyQgJgKAAgPQAAgdAUgcQAUgcAZAAQALABAGAFQAGAGAAAKQAAAOgNAKQgMAKgQAAQgJAAgJgEQgGAPABAMQAAAXARgBQAQAAAUgRQAUgSAOgdIAKAFQgOAhgbAXQgZAWgVABQgPAAgKgLgAgNgoQgJAJgFAOQAEACAIAAQAKAAAHgIQAJgGAAgKQAAgKgJAAQgHAAgIAJg");
	this.shape_3.setTransform(-71.35,-15.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgpBJQgFgGAAgKIAAgFIACgHIADgJIADgKIAEgKIAFgNIAFgLIALgeIAUAAIgHASIgLAfQgNAiAAAGQAAAIAHAAQALAAAPgUQASgWALgVIAJAEQgNAdgWAZQgUAZgTAAQgJAAgFgGgAgDg4QgDgDAAgEQAAgGAEgFQAEgEAFAAQAFAAAEADQADAEAAAFQAAAFgFAEQgFAFgFAAQgEAAgDgEg");
	this.shape_4.setTransform(-79.475,-17.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgNBRQgFgHABgJIgBAAQgQAWgSAAQgLAAgFgJQgGgHAAgOQAAgTAIgVQAIgTAQgQQAPgPARAAQARAAADANIABAAIAYhCIAUAAIgXA+QgdBMAAAHQAAADACADQACACADAAQAJAAAQgRQARgRANgdIAKADQgPAigUAXQgVAXgTAAQgIAAgFgGgAgbgGQgMAMgGAQQgGAPAAANQAAARALAAQAGAAAIgGQAIgGAEgKIACgEIACgGIAEgKIAFgOIAEgMQADgIgDgFQgCgFgGAAQgMAAgKANg");
	this.shape_5.setTransform(-88.575,-18.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgyAyQgKgKAAgPQAAgdAUgcQAUgcAZAAQALABAGAFQAGAGAAAKQAAAOgNAKQgMAKgQAAQgJAAgJgEQgGAPAAAMQABAXARgBQAQAAATgRQAVgSAOgdIAKAFQgOAhgaAXQgaAWgVABQgQAAgIgLgAgNgoQgIAJgHAOQAFACAIAAQAKAAAIgIQAHgGABgKQgBgKgHAAQgIAAgIAJg");
	this.shape_6.setTransform(-99.35,-15.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AggA+QgFgFAAgLQAAgPAJgXQALgZAKgRIAAgBIgMABIgMgBQgEAPgLAUIgJgFQAGgMAGgUIgEgdIAVAAIgCATIAPABIAYgCIAFAGQgLASgIAaQgLAcAAAKQAAAHAGAAQAJAAARgSQAQgSAMgbIAKAFQgKAagXAaQgXAagSAAQgIAAgGgFg");
	this.shape_7.setTransform(-108.425,-16.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag2BRQgHgHAAgJQAAgHAGgFQAGgFAIAAQAKAAAFAIIgFgBQgFgBgEADQgDADAAAEQAAADADACQADAEAHAAQALgBAIgMQAIgLAKghIgBAAQgOASgQABQgKAAgGgJQgFgIAAgOQAAgdATgeQATgeAZgBQAQABAEAOIABAAIAAgLIAXAAIgcBLIgQAtQgIAZgKALQgLAMgUAAQgPAAgIgFgAAAg7QgKANgGAQQgHAQAAANQAAAPALAAQAHAAAHgFQAHgHAEgIIACgFIACgFIAHgTIAHgSIACgIQAAgKgLAAQgLAAgLAMg");
	this.shape_8.setTransform(-120.875,-12.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgOA3QgGgEABgIQgBgKANgeQANgdAAgHQgBgLgIAAQgIAAgGAFQgHAGgDAJIggBTIgUAAIArhzIAWAAIgHAMIACAAQAMgPAPgBQAJABAHAFQAEAFAAAIQAAALgMAeQgNAcAAAGQAAAGAGAAQAKAAATgRQAUgRANgcIAJAFQgOAegXAXQgYAZgTAAQgJgBgFgFg");
	this.shape_9.setTransform(-130.9,-15.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ag0BXQgHgGgBgKIADAAQAQAAAQgMQAPgNALgUIAUgmIAQgnQAJgUAEgGIgUgCIgWgCQgXAAgMAKQgNAKAAAMQAAAJAHAGQAHAHANAAQAIAAAFgDQgKAOgVAAQgQAAgJgJQgJgJAAgOQAAgUATgMQATgMAbAAIAeACIAcADIAFAAIADAEQgHAJgHAZIgQAuIgSAtQgJAXgNAOQgNAOgRAAQgMAAgGgGg");
	this.shape_10.setTransform(-142.25,-17.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgpBRQgFgEAAgKQAAgHADgJIAchLIAWg+IAUAAIgXA+QgcBMAAAHQAAAIAGAAQAKAAAPgRQARgRANgdIAKADQgPAigUAXQgUAXgTAAQgJAAgFgGg");
	this.shape_11.setTransform(-157.975,-18.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgOA3QgEgHABgKIgBAAQgQAWgSABQgLAAgFgJQgGgIAAgOQAAgSAIgUQAIgVAQgPQAPgQARAAQAQAAADANIABAAIABgJIAXAAIgSAxQgNAhAAAGQAAAJAHgBQAKAAARgUQASgUALgXIAJAFQgOAegVAYQgVAZgTAAQgJgBgFgFgAgbghQgMANgGAQQgGAPAAANQAAAQALAAQAGAAAIgFQAIgHAEgJIACgFIACgFIANgkQADgIgDgGQgCgEgGAAQgMAAgKAMg");
	this.shape_12.setTransform(-167.025,-15.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AggA+QgFgFAAgLQAAgPAJgXQALgZAKgRIAAgBIgMABIgMgBQgEAPgLAUIgJgFQAGgMAGgUIgEgdIAVAAIgCATIAPABIAYgCIAFAGQgLASgIAaQgLAcAAAKQAAAHAGAAQAJAAARgSQAQgSAMgbIAKAFQgKAagXAaQgXAagSAAQgIAAgGgFg");
	this.shape_13.setTransform(-177.375,-16.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgNA1QgFgHACgKIgCAAQgQAXgSAAQgWAAAAgXQAAgIADgJIANggIARgtIAUAAIgRAtIgMAjQgDAHACAFQACAFAHAAQAIAAAIgFQAJgHAEgKIAbhLIAUAAIgSAyQgNAhAAAFQAAAJAIAAQAKAAARgUQAQgUAMgXIAJAEQgNAegWAYQgVAZgTAAQgIAAgFgGg");
	this.shape_14.setTransform(-189,-15.275);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AguAzQAAgIADgHQAJgdAQgoIgQAAIADgNIASAAIAGgYIAXAAIgLAYIAVAAIgEANIgVAAQgZBHAAAGQAAAHAHAAQAJAAAQgRQAQgSANgcIAKAFQgPAggVAYQgSAWgUAAQgTAAAAgUg");
	this.shape_15.setTransform(-198.15,-16.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgOA3QgEgHABgKIgBAAQgQAWgSABQgLAAgFgJQgGgIAAgOQAAgSAIgUQAIgVAQgPQAPgQARAAQAQAAADANIABAAIABgJIAXAAIgSAxQgNAhAAAGQAAAJAHgBQAKAAARgUQASgUALgXIAJAFQgOAegVAYQgVAZgTAAQgJgBgFgFgAgbghQgMANgGAQQgGAPAAANQAAAQALAAQAGAAAIgFQAIgHAEgJIACgFIACgFIANgkQADgIgDgGQgCgEgGAAQgMAAgKAMg");
	this.shape_16.setTransform(-207.275,-15.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("Ah4BcQgHgHgBgJIADAAQBBAAAvifIAUAAIgBARQAAAdAJAqQAJAuAAAIIABAAQAUhIAKgZQAWg3AdgEIAGAAQAKAAADAFQAEAGgBAMQgGgEgHABQgLgBgKAIQgKAHgHALQgGAJgIAUIgLAhIgLAnIgNAoIgcAAQAEgFAAgJQAAgKgIgpQgIglgBggIgBAAQgjCPg1AAQgLAAgHgGg");
	this.shape_17.setTransform(-221.3969,-18.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgpBRQgFgEAAgKQAAgHADgJIAchLIAWg+IAUAAIgXA+QgcBMAAAHQAAAIAGAAQAKAAAPgRQARgRANgdIAKADQgPAigUAXQgUAXgTAAQgJAAgFgGg");
	this.shape_18.setTransform(-239.975,-18.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgpBRQgFgEAAgKQAAgHADgJIAchLIAWg+IAUAAIgXA+QgcBMAAAHQAAAIAGAAQAKAAAPgRQARgRANgdIAKADQgPAigUAXQgUAXgTAAQgJAAgFgGg");
	this.shape_19.setTransform(-246.325,-18.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhXBZQgGgIgBgIIADAAQAaAAAVgSQAWgRAUgeIgSAAIADgMIAVAAIAPgaIAQgZIAMgTQAJgKAGgFQAHgFAGAAQAIAAAFAGQAFAEgBAKQAAAXgRAvIAKAAIgDAMIgLAAQgLAdAAANQAAAJADAFQAEAEAFAAQAJAAAIgNIAGADQgGAPgKAIQgLAGgLABQgLAAgFgIQgFgIAAgMQAAgSANgiIgfAAQgUAngWAZQgVAXgaAAQgKAAgGgGgAA6hGQgHANgMAXIgOAeIAdAAIADgJIAFgLIADgJQAKgbAAgPQAAgHgDABQgHAAgHALg");
	this.shape_20.setTransform(-261.5,-18.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_allNatural, new cjs.Rectangle(-270.4,-34.1,229.89999999999998,33.300000000000004), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAYA2IgYhKIAAAAIgXBKIgUAAIgghrIAaAAIARBEIAAAAIAXhEIAVAAIAWBGIAAAAIAShGIAYAAIgfBrg");
	this.shape.setTransform(-38.475,28.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AglA2IAAhrIBIAAIAAAWIgwAAIAAAUIAtAAIAAAVIgtAAIAAAWIAzAAIAAAWg");
	this.shape_1.setTransform(-50.625,28.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAUA2IguhMIAAAAIAABMIgYAAIAAhrIAgAAIAtBKIAAAAIAAhKIAYAAIAABrg");
	this.shape_2.setTransform(-61.775,28.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1A91CF").s().p("Al9F+QieieAAjgQAAjfCeieQCeieDfAAQDgAACeCeQCeCeAADfQAADgieCeQieCejgAAQjfAAieieg");
	this.shape_3.setTransform(-49.5,4.5,0.7222,0.7222);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.new_TAB, new cjs.Rectangle(-88.5,-34.5,78,78), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgLAeQgFgCgFgEIAKgKQACADADABIAGABIADAAIADgBIACgCIAAgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBgBIgFgCIgGgCIgGgDQgEgBgCgDQgCgDAAgFQAAgFACgEIAFgGIAIgDIAHgBIAKABQAFACAEACIgJALIgFgEIgFgBIgDABIgCABIgCACIgBADQAAABAAAAQABABAAAAQAAABAAAAQABABAAAAIAEADIAHACIAHACQADABACAEQACADAAAFQAAAEgCAFIgFAFQgDADgFACIgHABQgGgBgFgBg");
	this.shape.setTransform(16.225,-26.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKAdQgFgCgDgDIgFgIQgCgFAAgFIAAgkIAOAAIAAAkIABAFIACAEIAEADIAEABIAFgBIADgDQABgBAAAAQABAAAAgBQAAAAABgBQAAgBAAAAIABgFIAAgkIAOAAIAAAkQgBAFgBAFQgCAEgDAEQgDADgFACQgFACgGAAQgFAAgFgCg");
	this.shape_1.setTransform(10.5,-26.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbAeIAAg7IAUAAQAHAAAGABQAGACAFAEQAFAEADAFQADAGAAAHQAAAHgDAGQgDAFgEAFQgFADgGACQgGACgGAAgAgNASIAGAAIAIgBIAHgDQADgDABgDQACgEAAgEQAAgEgCgEQgBgDgDgBQgDgDgEgBIgHgBIgHAAg");
	this.shape_2.setTransform(1.225,-26.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AALAeIgZgqIAAAqIgNAAIAAg7IASAAIAYApIABAAIAAgpIAMAAIAAA7g");
	this.shape_3.setTransform(-5.9,-26.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFAeIAAg7IALAAIAAA7g");
	this.shape_4.setTransform(-10.9,-26.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTAeIAAg7IAnAAIAAAMIgaAAIAAANIAYAAIAAAKIgYAAIAAAYg");
	this.shape_5.setTransform(-14.775,-26.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1,1,1).p("AGEAAQAAChhyBxQhxByihAAQigAAhxhyQhyhxAAihQAAigByhxQBxhyCgAAQChAABxByQByBxAACgg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1A91CF").s().p("AkRESQhyhxAAihQAAigByhxQBxhyCgAAQChAABxByQByBxAACgQAAChhyBxQhxByihAAQigAAhxhyg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.findUs_TAB, new cjs.Rectangle(-39.7,-39.7,79.5,79.5), null);


// stage content:
(lib.NanaB_Banners_320x50 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A4/j5MAx/AAAIAAHzMgx/AAAg");
	this.shape.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(296));

	// findUs_TAB
	this.instance = new lib.findUs_TAB();
	this.instance.setTransform(287.25,87.65,0.7935,0.7935);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(250).to({_off:false},0).to({scaleX:1,scaleY:1,y:69.65},8,cjs.Ease.quadOut).wait(38));

	// txt_sweetLife
	this.instance_1 = new lib.txt_sweetLife();
	this.instance_1.setTransform(465.55,17.25,1.4705,1.4705,0,0,0,0,0.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(250).to({_off:false},0).to({y:42.25,alpha:1},8,cjs.Ease.quadOut).wait(38));

	// txt_footStompin
	this.instance_2 = new lib.txt_footStompin();
	this.instance_2.setTransform(453.3,14.05,1,1,0,0,0,304.1,-31.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(203).to({_off:false},0).to({y:43.55,alpha:1},9,cjs.Ease.quadOut).wait(28).to({y:68.55,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(46));

	// txt_charmingly
	this.instance_3 = new lib.txt_charmingly();
	this.instance_3.setTransform(422.35,18,1,1,0,0,0,74,75.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(157).to({_off:false},0).to({y:43,alpha:1},9,cjs.Ease.quadOut).wait(28).to({y:73,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(92));

	// txt_refreshingly
	this.instance_4 = new lib.txt_refreshingly();
	this.instance_4.setTransform(421.55,14.05);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(112).to({_off:false},0).to({y:39.05,alpha:1},10,cjs.Ease.quadOut).wait(26).to({y:65.55,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(138));

	// txt_allNatural
	this.instance_5 = new lib.txt_allNatural();
	this.instance_5.setTransform(445.3,17.05,1,1,0,0,0,95,1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(66).to({_off:false},0).to({y:42.05,alpha:1},9,cjs.Ease.quadOut).wait(28).to({y:66.05,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(183));

	// raspBerrty_mc
	this.instance_6 = new lib.raspBerrty_mc();
	this.instance_6.setTransform(243.7,136.05,0.2728,0.2728,0,0,0,0.4,0.4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(17).to({_off:false},0).to({y:27.55},8,cjs.Ease.quadOut).wait(35).to({y:135.55},9,cjs.Ease.quadIn).to({_off:true},1).wait(226));

	// peach_mc
	this.instance_7 = new lib.peach_mc();
	this.instance_7.setTransform(196.4,135.35,0.2728,0.2728,0,0,0,0.2,0.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(11).to({_off:false},0).to({y:25.35},8,cjs.Ease.quadOut).wait(38).to({y:132.85},9,cjs.Ease.quadIn).to({_off:true},1).wait(229));

	// sweetTea_mc
	this.instance_8 = new lib.sweetTea_mc();
	this.instance_8.setTransform(148.75,135.2,0.2728,0.2728,0,0,0,1.1,0.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(6).to({_off:false},0).to({y:27.2},8,cjs.Ease.quadOut).wait(40).to({y:134.7},9,cjs.Ease.quadIn).to({_off:true},2).wait(231));

	// lemon_mc
	this.instance_9 = new lib.lemon_mc();
	this.instance_9.setTransform(101.75,133.7,0.2729,0.2729,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({y:24.2},8,cjs.Ease.quadOut).wait(42).to({y:133.2},9,cjs.Ease.quadIn).to({_off:true},1).wait(188).to({_off:false,regX:0.2,regY:0.6,scaleX:0.3676,scaleY:0.3676,x:92.7,y:160.45},0).to({y:23.45},10,cjs.Ease.quadOut).wait(38));

	// new_TAB
	this.instance_10 = new lib.new_TAB();
	this.instance_10.setTransform(82.9,-38.95,0.8276,0.8276);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({scaleX:1,scaleY:1,x:90.85,y:-11.95},7,cjs.Ease.quadOut).wait(289));

	// background
	this.instance_11 = new lib.BG();

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(296));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(159,-58.1,167.8,329.20000000000005);
// library properties:
lib.properties = {
	id: '90AA8FCF895B4939A1364AAE7129B0B5',
	width: 320,
	height: 50,
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