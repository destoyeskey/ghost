(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"ghost html_atlas_1", frames: [[0,0,1280,720]]}
];


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



(lib._final = function() {
	this.initialize(ss["ghost html_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ghost = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// ghost
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E49384").ss(1,1,1).p("ABfhkQAAARgIALQgIANgMAAQgMAAgIgNQgJgLAAgRQAAgRAJgMQAIgMAMAAQAMAAAIAMQAIAMAAARgAhBhrQAAARgIAMQgIANgMAAQgLAAgIgNQgIgMAAgRQAAgRAIgMQAIgMALAAQAMAAAIAMQAIAMAAARgAjdiUQD7mfDLG4QBBEChBDYInGAAQhYj6BYj5g");
	this.shape.setTransform(27.6125,36.0467);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E49384").s().p("AA8AgQgJgMAAgRQAAgQAJgMQAIgMAMAAQAMAAAIAMQAIAMAAAQQAAARgIAMQgIAMgMAAQgMAAgIgMgAhjAaQgIgMAAgQQAAgRAIgMQAIgMALAAQAMAAAIAMQAIAMAAARQAAAQgIAMQgIAMgMAAQgLAAgIgMg");
	this.shape_1.setTransform(26.325,25.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EAE5DE").s().p("AjdFfQhYj6BYj5QD7mfDLG4QBBEChBDYgAAviBQgJAMAAARQAAARAJALQAIANAMAAQAMAAAIgNQAIgLAAgRQAAgRgIgMQgIgMgMAAQgMAAgIAMgAhwiIQgIAMAAARQAAARAIAMQAIANALAAQAMAAAIgNQAIgMAAgRQAAgRgIgMQgIgMgMAAQgLAAgIAMg");
	this.shape_2.setTransform(27.6125,36.0467);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55.2,72.1);


(lib.arrows = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// arrows
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E49384").s().p("ABbA/IkwAAIAAhwIExAAIgFh5IB/CpIh6Csg");
	this.shape.setTransform(345.75,84.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(324.4,66.9,42.700000000000045,34.3);


(lib.abutton = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#E49384").s().p("AkDEEQhshsAAiYQAAiXBshsQBshsCXAAQCYAABsBsQBsBsAACXQAACYhsBsQhsBsiYAAQiXAAhshsg");
	this.shape.setTransform(36.75,36.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,73.5,73.5);


// stage content:
(lib.project2_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.rightarrow.on('click', function(){
		/*
		Moves the specified symbol instance to the left or right by decreasing or increasing its x property by the specified number of pixels.
		To move the instance to the left input a negative number.
		*/
		_this.ghost.x+=40;
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.leftarrow.on('click', function(){
		/*
		Moves the specified symbol instance to the left or right by decreasing or increasing its x property by the specified number of pixels.
		To move the instance to the left input a negative number.
		*/
		_this.ghost.x+=-40;
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.uparrow.on('click', function(){
		/*
		Moves the specified symbol instance up or down by decreasing or increasing its y property by the specified number of pixels.
		To move the instance up input a negative number.
		*/
		_this.ghost.y+=-40;
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.downarrow.on('click', function(){
		/*
		Moves the specified symbol instance up or down by decreasing or increasing its y property by the specified number of pixels.
		To move the instance up input a negative number.
		*/
		_this.ghost.y+=40;
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.abutton.on('click', function(){
		
		/*
		Rotates the symbol inst,ance by updating its rotation property by the specified number of degrees.
		To rotate the symbol instance counter clock-wise input a negative number.
		*/
		_this.ghost.rotation+=-30;
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.bbutton.on('click', function(){
		
		/*
		Rotates the symbol inst,ance by updating its rotation property by the specified number of degrees.
		To rotate the symbol instance counter clock-wise input a negative number.
		*/
		_this.ghost.rotation+=30;
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// ghost
	this.ghost = new lib.ghost();
	this.ghost.name = "ghost";
	this.ghost.setTransform(681.95,265.75,0.8102,0.6263,0,0,0,27.7,36.1);

	this.timeline.addTween(cjs.Tween.get(this.ghost).wait(1));

	// AB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EAE5DE").s().p("Ah1CiIAAlDIBkAAQApAAAaAKQAYAIANARQARATAAAbQAAAigWATQgSAPgcAGIAAABQAiAFAVAQQAcAWAAAiQAAA0guAWQgfAQgvAAgAhRCEIBIAAQAjAAAVgLQAIgEAHgHQAQgQAAgXQAAgggfgRQgdgPgnABIg8AAgAhRgUIA6AAQAgAAAXgLQAggNAAgfQAAg4hUAAIg9AAg");
	this.shape.setTransform(998.3,654.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EAE5DE").s().p("ABrCjIglhgIiLAAIgkBgIgpAAICAlFIAlAAICAFFgAgYg0IgiBYIB1AAIghhYQgTgwgGgYIgBAAQgGAXgSAxg");
	this.shape_1.setTransform(909.65,654.625);

	this.bbutton = new lib.abutton();
	this.bbutton.name = "bbutton";
	this.bbutton.setTransform(993.2,658.45,1,1,0,0,0,36.8,36.8);

	this.abutton = new lib.abutton();
	this.abutton.name = "abutton";
	this.abutton.setTransform(911.15,658.45,1,1,0,0,0,36.8,36.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.abutton},{t:this.bbutton},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// arrow
	this.uparrow = new lib.arrows();
	this.uparrow.name = "uparrow";
	this.uparrow.setTransform(1168.25,689.9,1,1,-90.0105,0,0,183.5,87.5);

	this.downarrow = new lib.arrows();
	this.downarrow.name = "downarrow";
	this.downarrow.setTransform(1161.4,501.05,1,1,90,0,0,183.6,87.4);

	this.leftarrow = new lib.arrows();
	this.leftarrow.name = "leftarrow";
	this.leftarrow.setTransform(1118.15,635.4,1,1,-179.3198,0,0,322.7,41.4);

	this.rightarrow = new lib.arrows();
	this.rightarrow.name = "rightarrow";
	this.rightarrow.setTransform(1071.85,595.65,1,1,0,0,0,183.6,87.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.rightarrow},{t:this.leftarrow},{t:this.downarrow},{t:this.uparrow}]}).wait(1));

	// bg
	this.instance = new lib._final();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(640,360,640,360);
// library properties:
lib.properties = {
	id: '2879927ECA3FF3408B7646B11434C72A',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/ghost html_atlas_1.png", id:"ghost html_atlas_1"}
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
an.compositions['2879927ECA3FF3408B7646B11434C72A'] = {
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