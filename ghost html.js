(function(cjs, an) {
    var p; // shortcut to reference prototypes
    var lib = {};
    var ss = {};
    var img = {};

    lib.ssMetadata = [
        {name: "ghost html_atlas_1", frames: [[0, 0, 1280, 720]]}
    ];

    (lib.AnMovieClip = function() {
        this.actionFrames = [];
        this.ignorePause = false;
        this.gotoAndPlay = function(positionOrLabel) {
            cjs.MovieClip.prototype.gotoAndPlay.call(this, positionOrLabel);
        };
        this.play = function() {
            cjs.MovieClip.prototype.play.call(this);
        };
        this.gotoAndStop = function(positionOrLabel) {
            cjs.MovieClip.prototype.gotoAndStop.call(this, positionOrLabel);
        };
        this.stop = function() {
            cjs.MovieClip.prototype.stop.call(this);
        };
    }).prototype = p = new cjs.MovieClip();

    lib._final = function() {
        this.initialize(ss["ghost html_atlas_1"]);
        this.gotoAndStop(0);
    };
    lib._final.prototype = p = new cjs.Sprite();

    lib.ghost = function(mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // ghost shape
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#E49384").ss(1, 1, 1).p("ABfhkQAAARgIALQgIANgMAAQgMAAgIgNQgJgLAAgRQAAgRAJgMQAIgMAMAAQAMAAAIAMQAIAMAAARgAhBhrQAAARgIAMQgIANgMAAQgLAAgIgNQgIgMAAgRQAAgRAIgMQAIgMALAAQAMAAAIAMQAIAMAAARgAjdiUQD7mfDLG4QBBEChBDYInGAAQhYj6BYj5g");
        this.shape.setTransform(27.6125, 36.0467);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#E49384").s().p("AA8AgQgJgMAAgRQAAgQAJgMQAIgMAMAAQAMAAAIAMQAIAMAAAQQAAARgIAMQgIAMgMAAQgMAAgIgMgAhjAaQgIgMAAgQQAAgRAIgMQAIgMALAAQAMAAAIAMQAIAMAAARQAAAQgIAMQgIAMgMAAQgLAAgIgMg");
        this.shape_1.setTransform(26.325, 25.575);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#EAE5DE").s().p("AjdFfQhYj6BYj5QD7mfDLG4QBBEChBDYgAAviBQgJAMAAARQAAARAJALQAIANAMAAQAMAAAIgNQAIgLAAgRQAAgRgIgMQgIgMgMAAQgMAAgIAMgAhwiIQgIAMAAARQAAARAIAMQAIANALAAQAMAAAIgNQAIgMAAgRQAAgRgIgMQgIgMgMAAQgLAAgIAMg");
        this.shape_2.setTransform(27.6125, 36.0467);

        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_2}, {t: this.shape_1}, {t: this.shape}]}).wait(1));

        this._renderFirstFrame();
    };
    lib.ghost.prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 55.2, 72.1);

    lib.arrows = function(mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // arrow shape
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E49384").s().p("ABbA/IkwAAIAAhwIExAAIgFh5IB/CpIh6Csg");
        this.shape.setTransform(345.75, 84.025);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        this._renderFirstFrame();
    };
    lib.arrows.prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(324.4, 66.9, 42.7, 34.3);

    lib.abutton = function(mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // button shape
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E49384").s().p("AkDEEQhshsAAiYQAAiXBshsQBshsCXAAQCYAABsBsQBsBsAACXQAACYhsBsQhsBsiYAAQiXAAhshsg");
        this.shape.setTransform(36.75, 36.75);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        this._renderFirstFrame();
    };
    lib.abutton.prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 73.5, 73.5);

    lib.bbutton = function(mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // button shape
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E49384").s().p("AkDEEQhshsAAiYQAAiXBshsQBshsCXAAQCYAABsBsQBsBsAACXQAACYhsBsQhsBsiYAAQiXAAhshsg");
        this.shape.setTransform(36.75, 36.75);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        this._renderFirstFrame();
    };
    lib.bbutton.prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 73.5, 73.5);

    // interaction code for button actions
    lib.initButtonHandlers = function() {
        document.getElementById("leftarrow").addEventListener("click", function() {
            exportRoot.ghost.x -= 20;
        });
        document.getElementById("rightarrow").addEventListener("click", function() {
            exportRoot.ghost.x += 20;
        });
        document.getElementById("uparrow").addEventListener("click", function() {
            exportRoot.ghost.y -= 20;
        });
        document.getElementById("downarrow").addEventListener("click", function() {
            exportRoot.ghost.y += 20;
        });
        document.getElementById("abutton").addEventListener("click", function() {
            exportRoot.ghost.rotation += 45;
        });
        document.getElementById("bbutton").addEventListener("click", function() {
            exportRoot.ghost.rotation -= 45;
        });
    };
    lib.initButtonHandlers();
})(createjs, AdobeAn);
