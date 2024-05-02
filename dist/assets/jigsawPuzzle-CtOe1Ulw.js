(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=i(s);fetch(s.href,r)}})();function J(e){return e instanceof HTMLElement}function T(){}class ${constructor(t){this._logger=t}load(t){return new Promise((i,n)=>{const s=new Image;s.src=t,s.onload=()=>{this._logger.debug("Image loaded"),i(s)},s.onerror=()=>{const r="Image not loaded: "+t;this._logger.debug(r),n(r)}})}}const O=3,F=2,A=!0,R="gold",k=2,U="round",H="rgba(255, 230, 0, .25)",W="rgb(221, 250, 182)",z="./default.jpg",B="jigsaw_puzzle_root",j=375,N=500,V=30,Y=0,Z=30,q=0,X=50,C=Object.freeze(Object.defineProperty({__proto__:null,DEFAULT_BOARD_FILL:W,DEFAULT_CANVAS_HEIGHT:N,DEFAULT_CANVAS_WIDTH:j,DEFAULT_COLS:F,DEFAULT_FILL_STYLE:H,DEFAULT_FPS:V,DEFAULT_IMAGE_URL:z,DEFAULT_LINE_CAP:U,DEFAULT_LINE_WIDTH:k,DEFAULT_LOCAL_PADDING:q,DEFAULT_OFFSET:Y,DEFAULT_PIECE_DISTANCE:X,DEFAULT_RADIUS:Z,DEFAULT_ROOT_ELEMENT:B,DEFAULT_ROWS:O,DEFAULT_SHOW_CURVES:A,DEFAULT_STROKE_STYLE:R},Symbol.toStringTag,{value:"Module"}));class tt{constructor(t,i){this._config=t,this._logger=i,this._rows=this._config.rows??O,this._columns=this._config.columns??F,this._imageUrl=this._config.imageUrl??z,this._showCurves=this._config.showCurves??A,this._strokeStyle=this._config.strokeStyle??R,this._lineWidth=this._config.lineWidth??k,this._lineCap=this._config.lineCap??U,this._fillStyle=this._config.fillStyle??H,this._canvasWidth=this._config.canvasWidth??j,this._canvasHeight=this._config.canvasHeight??N,this._fps=this._config.fps??V,this._offset=this._config.offset??Y,this._radius=this._config.radius??Z,this._localPadding=this._config.localPadding??q,this._boardFill=this._config.boardFill??W,this._pieceDistance=this._config.pieceDistance??X,this._onReady=this._config.onReady??T,this._onReset=this._config.onReset??T,this._onSuccess=this._config.onSuccess??T,this._onError=this._config.onError??T,this._rootElement=this.getRoot(this._config.rootElement)}getRoot(t){return J(t)?t:(this._logger.warn("Root element is not an HTMLElement. Using default root element selector"),document.getElementById(B)||(this._logger.error("Root element not found"),null))}get localPadding(){return this._localPadding}get radius(){return this._radius}get offset(){return this._offset}get fps(){return this._fps}get onReady(){return this._onReady}get onReset(){return this._onReset}get onSuccess(){return this._onSuccess}get onError(){return this._onError}get rootElement(){return this._rootElement}get columns(){return this._columns}get fillStyle(){return this._fillStyle}get imageUrl(){return this._imageUrl}get lineCap(){return this._lineCap}get lineWidth(){return this._lineWidth}get rows(){return this._rows}get showCurves(){return this._showCurves}get strokeStyle(){return this._strokeStyle}get canvasWidth(){return this._canvasWidth}get canvasHeight(){return this._canvasHeight}get boardFill(){return this._boardFill}get pieceDistance(){return this._pieceDistance}}class et{constructor(t,i,n,s){this._config=t,this._image=i,this._pieceService=n,this._logger=s,this._rows=this._config.rows,this._columns=this._config.columns,this._x=this._config.offset,this._y=this._config.offset,this._pieceWidth=i.width/this._columns,this._pieceHeight=i.height/this._rows,this._pieces=this._pieceService.createPieces(this._x,this._y,this._rows,this._columns,this.mask.bind(this),this._image),this._logger.debug("Board constructor done")}positionByIndex(t){return{x:t%this._columns,y:Math.floor(t/this._columns)}}checkPieces(){let t=0;for(let i=0;i<this._pieces.length;i++){if(this._pieces[i].index!==t||this._pieces[i].x!==0||this._pieces[i].y!==0)return!1;t++}return!0}unHoverPieces(){this._pieces.forEach(t=>t.unHover())}getPieceByPosition(t,i,n){return this.piecesByZDesc.find(s=>{const r=s.maskPiece();return r&&t.isPointInPath(r,i,n,"nonzero")})??null}render(t){t.save();const i=this.piecesByZAsc;if(!i.length){t.drawImage(this._image,this._x,this._y,this._image.width,this._image.height),t.restore();return}t.fillStyle=this._config.boardFill,t.rect(this._x,this._y,this._image.width,this._image.height),t.fill(),i.forEach(n=>n.render(t)),t.restore()}mask(t,i,n){return(s,r)=>{let o=new Path2D;return o.moveTo(s+this._x+t*this._pieceWidth,r+this._y+i*this._pieceHeight),i===0?o.lineTo(s+this._x+(t+1)*this._pieceWidth,r+this._y+i*this._pieceHeight):(o.lineTo(s+this._x+(t+.5)*this._pieceWidth-n,r+this._y+i*this._pieceHeight),o.arc(s+this._x+(t+.5)*this._pieceWidth,r+this._y+i*this._pieceHeight,n,Math.PI,0,!0),o.lineTo(s+this._x+(t+1)*this._pieceWidth,r+this._y+i*this._pieceHeight)),t===this._columns-1?o.lineTo(s+this._x+(t+1)*this._pieceWidth,r+this._y+(i+1)*this._pieceHeight):(o.lineTo(s+this._x+(t+1)*this._pieceWidth,r+this._y+(i+.5)*this._pieceHeight-n),o.arc(s+this._x+(t+1)*this._pieceWidth,r+this._y+(i+.5)*this._pieceHeight,n,-Math.PI/2,Math.PI/2,!1),o.lineTo(s+this._x+(t+1)*this._pieceWidth,r+this._y+(i+1)*this._pieceHeight)),i===this._rows-1?o.lineTo(s+this._x+t*this._pieceWidth,r+this._y+(i+1)*this._pieceHeight):(o.lineTo(s+this._x+(t+.5)*this._pieceWidth+n,r+this._y+(i+1)*this._pieceHeight),o.arc(s+this._x+(t+.5)*this._pieceWidth,r+this._y+(i+1)*this._pieceHeight,n,0,Math.PI,!1),o.lineTo(s+this._x+t*this._pieceWidth,r+this._y+(i+1)*this._pieceHeight)),t===0?o.lineTo(s+this._x+t*this._pieceWidth,r+this._y+i*this._pieceHeight):(o.lineTo(s+this._x+t*this._pieceWidth,r+this._y+(i+.5)*this._pieceHeight+n),o.arc(s+this._x+t*this._pieceWidth,r+this._y+(i+.5)*this._pieceHeight,n,Math.PI/2,-Math.PI/2,!0),o.lineTo(s+this._x+t*this._pieceWidth,r+this._y+i*this._pieceHeight)),o}}get pieceWidth(){return this._pieceWidth}get pieceHeight(){return this._pieceHeight}get pieces(){return this._pieces}set pieces(t){this._pieces=t}get piecesByZAsc(){return[...this._pieces].sort((t,i)=>t.z-i.z)}get piecesByZDesc(){return[...this._pieces].sort((t,i)=>i.z-t.z)}}const it=(e,t,i,n)=>new et(e,t,i,n);class st{constructor(t,i,n,s){this._boardX=t,this._boardY=i,this._config=n,this._logger=s,this._x=0,this._y=0,this._z=0,this._index=0,this._image=null,this._mask=null,this._isHover=!1,this._placed=!0,this._logger.debug("Piece constructor done")}isNearToPlace(){return Math.sqrt(Math.pow(this._x,2)+Math.pow(this._y,2))<this._config.pieceDistance}hover(){this._isHover=!0,this.z=this._placed?0:100}unHover(){this._isHover=!1,this.dropZ()}render(t){t.save();const i=this.maskPiece();!i||!this._image||(t.strokeStyle=this._config.strokeStyle,t.lineWidth=this._config.lineWidth,t.lineCap=this._config.lineCap,t.stroke(i),t.clip(i,"evenodd"),t.drawImage(this._image,this._x+this._boardX,this._y+this._boardY,this._image.width,this._image.height),this._isHover&&(t.fillStyle=this._config.fillStyle,t.fill(i)),t.restore())}dropZ(){this.z=this._placed?0:this._index+1}maskPiece(){return this._mask&&this._mask(this._x,this._y)}get mask(){return this._mask}set mask(t){this._mask=t}get x(){return this._x}set x(t){this._x=t}get y(){return this._y}set y(t){this._y=t}get z(){return this._z}set z(t){this._z=t}get index(){return this._index}set index(t){this._index=t}get image(){return this._image}set image(t){this._image=t}get placed(){return this._placed}set placed(t){this._placed=t}}const nt=(e,t,i,n)=>new st(e,t,i,n);var p=Object.freeze({Linear:Object.freeze({None:function(e){return e},In:function(e){return this.None(e)},Out:function(e){return this.None(e)},InOut:function(e){return this.None(e)}}),Quadratic:Object.freeze({In:function(e){return e*e},Out:function(e){return e*(2-e)},InOut:function(e){return(e*=2)<1?.5*e*e:-.5*(--e*(e-2)-1)}}),Cubic:Object.freeze({In:function(e){return e*e*e},Out:function(e){return--e*e*e+1},InOut:function(e){return(e*=2)<1?.5*e*e*e:.5*((e-=2)*e*e+2)}}),Quartic:Object.freeze({In:function(e){return e*e*e*e},Out:function(e){return 1- --e*e*e*e},InOut:function(e){return(e*=2)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2)}}),Quintic:Object.freeze({In:function(e){return e*e*e*e*e},Out:function(e){return--e*e*e*e*e+1},InOut:function(e){return(e*=2)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2)}}),Sinusoidal:Object.freeze({In:function(e){return 1-Math.sin((1-e)*Math.PI/2)},Out:function(e){return Math.sin(e*Math.PI/2)},InOut:function(e){return .5*(1-Math.sin(Math.PI*(.5-e)))}}),Exponential:Object.freeze({In:function(e){return e===0?0:Math.pow(1024,e-1)},Out:function(e){return e===1?1:1-Math.pow(2,-10*e)},InOut:function(e){return e===0?0:e===1?1:(e*=2)<1?.5*Math.pow(1024,e-1):.5*(-Math.pow(2,-10*(e-1))+2)}}),Circular:Object.freeze({In:function(e){return 1-Math.sqrt(1-e*e)},Out:function(e){return Math.sqrt(1- --e*e)},InOut:function(e){return(e*=2)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1)}}),Elastic:Object.freeze({In:function(e){return e===0?0:e===1?1:-Math.pow(2,10*(e-1))*Math.sin((e-1.1)*5*Math.PI)},Out:function(e){return e===0?0:e===1?1:Math.pow(2,-10*e)*Math.sin((e-.1)*5*Math.PI)+1},InOut:function(e){return e===0?0:e===1?1:(e*=2,e<1?-.5*Math.pow(2,10*(e-1))*Math.sin((e-1.1)*5*Math.PI):.5*Math.pow(2,-10*(e-1))*Math.sin((e-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(e){var t=1.70158;return e===1?1:e*e*((t+1)*e-t)},Out:function(e){var t=1.70158;return e===0?0:--e*e*((t+1)*e+t)+1},InOut:function(e){var t=2.5949095;return(e*=2)<1?.5*(e*e*((t+1)*e-t)):.5*((e-=2)*e*((t+1)*e+t)+2)}}),Bounce:Object.freeze({In:function(e){return 1-p.Bounce.Out(1-e)},Out:function(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},InOut:function(e){return e<.5?p.Bounce.In(e*2)*.5:p.Bounce.Out(e*2-1)*.5+.5}}),generatePow:function(e){return e===void 0&&(e=4),e=e<Number.EPSILON?Number.EPSILON:e,e=e>1e4?1e4:e,{In:function(t){return Math.pow(t,e)},Out:function(t){return 1-Math.pow(1-t,e)},InOut:function(t){return t<.5?Math.pow(t*2,e)/2:(1-Math.pow(2-t*2,e))/2+.5}}}}),P=function(){return performance.now()},rt=function(){function e(){this._tweens={},this._tweensAddedDuringUpdate={}}return e.prototype.getAll=function(){var t=this;return Object.keys(this._tweens).map(function(i){return t._tweens[i]})},e.prototype.removeAll=function(){this._tweens={}},e.prototype.add=function(t){this._tweens[t.getId()]=t,this._tweensAddedDuringUpdate[t.getId()]=t},e.prototype.remove=function(t){delete this._tweens[t.getId()],delete this._tweensAddedDuringUpdate[t.getId()]},e.prototype.update=function(t,i){t===void 0&&(t=P()),i===void 0&&(i=!1);var n=Object.keys(this._tweens);if(n.length===0)return!1;for(;n.length>0;){this._tweensAddedDuringUpdate={};for(var s=0;s<n.length;s++){var r=this._tweens[n[s]],o=!i;r&&r.update(t,o)===!1&&!i&&delete this._tweens[n[s]]}n=Object.keys(this._tweensAddedDuringUpdate)}return!0},e}(),f={Linear:function(e,t){var i=e.length-1,n=i*t,s=Math.floor(n),r=f.Utils.Linear;return t<0?r(e[0],e[1],n):t>1?r(e[i],e[i-1],i-n):r(e[s],e[s+1>i?i:s+1],n-s)},Bezier:function(e,t){for(var i=0,n=e.length-1,s=Math.pow,r=f.Utils.Bernstein,o=0;o<=n;o++)i+=s(1-t,n-o)*s(t,o)*e[o]*r(n,o);return i},CatmullRom:function(e,t){var i=e.length-1,n=i*t,s=Math.floor(n),r=f.Utils.CatmullRom;return e[0]===e[i]?(t<0&&(s=Math.floor(n=i*(1+t))),r(e[(s-1+i)%i],e[s],e[(s+1)%i],e[(s+2)%i],n-s)):t<0?e[0]-(r(e[0],e[0],e[1],e[1],-n)-e[0]):t>1?e[i]-(r(e[i],e[i],e[i-1],e[i-1],n-i)-e[i]):r(e[s?s-1:0],e[s],e[i<s+1?i:s+1],e[i<s+2?i:s+2],n-s)},Utils:{Linear:function(e,t,i){return(t-e)*i+e},Bernstein:function(e,t){var i=f.Utils.Factorial;return i(e)/i(t)/i(e-t)},Factorial:function(){var e=[1];return function(t){var i=1;if(e[t])return e[t];for(var n=t;n>1;n--)i*=n;return e[t]=i,i}}(),CatmullRom:function(e,t,i,n,s){var r=(i-e)*.5,o=(n-t)*.5,a=s*s,h=s*a;return(2*t-2*i+r+o)*h+(-3*t+3*i-2*r-o)*a+r*s+t}}},ot=function(){function e(){}return e.nextId=function(){return e._nextId++},e._nextId=0,e}(),I=new rt,G=function(){function e(t,i){i===void 0&&(i=I),this._object=t,this._group=i,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=p.Linear.None,this._interpolationFunction=f.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=ot.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return e.prototype.getId=function(){return this._id},e.prototype.isPlaying=function(){return this._isPlaying},e.prototype.isPaused=function(){return this._isPaused},e.prototype.getDuration=function(){return this._duration},e.prototype.to=function(t,i){if(i===void 0&&(i=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=t,this._propertiesAreSetUp=!1,this._duration=i<0?0:i,this},e.prototype.duration=function(t){return t===void 0&&(t=1e3),this._duration=t<0?0:t,this},e.prototype.dynamic=function(t){return t===void 0&&(t=!1),this._isDynamic=t,this},e.prototype.start=function(t,i){if(t===void 0&&(t=P()),i===void 0&&(i=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var n in this._valuesStartRepeat)this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=t,this._startTime+=this._delayTime,!this._propertiesAreSetUp||i){if(this._propertiesAreSetUp=!0,!this._isDynamic){var s={};for(var r in this._valuesEnd)s[r]=this._valuesEnd[r];this._valuesEnd=s}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,i)}return this},e.prototype.startFromCurrentValues=function(t){return this.start(t,!0)},e.prototype._setupProperties=function(t,i,n,s,r){for(var o in n){var a=t[o],h=Array.isArray(a),_=h?"array":typeof a,c=!h&&Array.isArray(n[o]);if(!(_==="undefined"||_==="function")){if(c){var u=n[o];if(u.length===0)continue;for(var E=[a],g=0,m=u.length;g<m;g+=1){var w=this._handleRelativeValue(a,u[g]);if(isNaN(w)){c=!1,console.warn("Found invalid interpolation list. Skipping.");break}E.push(w)}c&&(n[o]=E)}if((_==="object"||h)&&a&&!c){i[o]=h?[]:{};var y=a;for(var d in y)i[o][d]=y[d];s[o]=h?[]:{};var u=n[o];if(!this._isDynamic){var S={};for(var d in u)S[d]=u[d];n[o]=u=S}this._setupProperties(y,i[o],u,s[o],r)}else(typeof i[o]>"u"||r)&&(i[o]=a),h||(i[o]*=1),c?s[o]=n[o].slice().reverse():s[o]=i[o]||0}}},e.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},e.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},e.prototype.pause=function(t){return t===void 0&&(t=P()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=t,this._group&&this._group.remove(this),this)},e.prototype.resume=function(t){return t===void 0&&(t=P()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=t-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},e.prototype.stopChainedTweens=function(){for(var t=0,i=this._chainedTweens.length;t<i;t++)this._chainedTweens[t].stop();return this},e.prototype.group=function(t){return t===void 0&&(t=I),this._group=t,this},e.prototype.delay=function(t){return t===void 0&&(t=0),this._delayTime=t,this},e.prototype.repeat=function(t){return t===void 0&&(t=0),this._initialRepeat=t,this._repeat=t,this},e.prototype.repeatDelay=function(t){return this._repeatDelayTime=t,this},e.prototype.yoyo=function(t){return t===void 0&&(t=!1),this._yoyo=t,this},e.prototype.easing=function(t){return t===void 0&&(t=p.Linear.None),this._easingFunction=t,this},e.prototype.interpolation=function(t){return t===void 0&&(t=f.Linear),this._interpolationFunction=t,this},e.prototype.chain=function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return this._chainedTweens=t,this},e.prototype.onStart=function(t){return this._onStartCallback=t,this},e.prototype.onEveryStart=function(t){return this._onEveryStartCallback=t,this},e.prototype.onUpdate=function(t){return this._onUpdateCallback=t,this},e.prototype.onRepeat=function(t){return this._onRepeatCallback=t,this},e.prototype.onComplete=function(t){return this._onCompleteCallback=t,this},e.prototype.onStop=function(t){return this._onStopCallback=t,this},e.prototype.update=function(t,i){var n=this,s;if(t===void 0&&(t=P()),i===void 0&&(i=!0),this._isPaused)return!0;var r,o=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(t>o)return!1;i&&this.start(t,!0)}if(this._goToEnd=!1,t<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0);var a=t-this._startTime,h=this._duration+((s=this._repeatDelayTime)!==null&&s!==void 0?s:this._delayTime),_=this._duration+this._repeat*h,c=function(){if(n._duration===0||a>_)return 1;var y=Math.trunc(a/h),d=a-y*h,S=Math.min(d/n._duration,1);return S===0&&a===n._duration?1:S},u=c(),E=this._easingFunction(u);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,E),this._onUpdateCallback&&this._onUpdateCallback(this._object,u),this._duration===0||a>=this._duration)if(this._repeat>0){var g=Math.min(Math.trunc((a-this._duration)/h)+1,this._repeat);isFinite(this._repeat)&&(this._repeat-=g);for(r in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[r]=="string"&&(this._valuesStartRepeat[r]=this._valuesStartRepeat[r]+parseFloat(this._valuesEnd[r])),this._yoyo&&this._swapEndStartRepeatValues(r),this._valuesStart[r]=this._valuesStartRepeat[r];return this._yoyo&&(this._reversed=!this._reversed),this._startTime+=h*g,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var m=0,w=this._chainedTweens.length;m<w;m++)this._chainedTweens[m].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},e.prototype._updateProperties=function(t,i,n,s){for(var r in n)if(i[r]!==void 0){var o=i[r]||0,a=n[r],h=Array.isArray(t[r]),_=Array.isArray(a),c=!h&&_;c?t[r]=this._interpolationFunction(a,s):typeof a=="object"&&a?this._updateProperties(t[r],o,a,s):(a=this._handleRelativeValue(o,a),typeof a=="number"&&(t[r]=o+(a-o)*s))}},e.prototype._handleRelativeValue=function(t,i){return typeof i!="string"?i:i.charAt(0)==="+"||i.charAt(0)==="-"?t+parseFloat(i):parseFloat(i)},e.prototype._swapEndStartRepeatValues=function(t){var i=this._valuesStartRepeat[t],n=this._valuesEnd[t];typeof n=="string"?this._valuesStartRepeat[t]=this._valuesStartRepeat[t]+parseFloat(n):this._valuesStartRepeat[t]=this._valuesEnd[t],this._valuesEnd[t]=i},e}(),l=I;l.getAll.bind(l);l.removeAll.bind(l);l.add.bind(l);l.remove.bind(l);var at=l.update.bind(l);class ht{constructor(t,i,n,s,r,o,a){if(this._config=t,this._imageService=i,this._canvasService=n,this._boardService=s,this._shuffleService=r,this._uiService=o,this._logger=a,this._image=null,this._canvas=null,this._board=null,this._deltaTime=0,this._fpsDeltaTime=0,this._fpsDeltaLimit=0,!this._config.rootElement){this._logger.error("Root element not found");return}this.fpsDeltaLimit=1e3/this._config.fps,this.reset().then(()=>{this.render(0),this._logger.debug("Game ready"),this._config.onReady()}).catch(h=>{this._logger.error(h),this._logger.error("Game not ready"),this._config.onError("game.init.error")})}shuffle(){this._shuffleService.shuffle(this.board,this.canvas),this._uiService.setShuffled(!0)}async reset(){this._canvasService.clear(),this._logger.debug("Canvas cleared"),this.image=await this._imageService.load(this._config.imageUrl),this._logger.debug("Image received"),this.canvas=this._canvasService.createCanvas(),this._logger.debug("Canvas created"),this._canvasService.setSize(this.canvas,this.image),this._logger.debug("Canvas prepared"),this.ctx.drawImage(this.image,0,0,this.canvas.width,this.canvas.height),this._logger.debug("Image drawn on canvas"),this.rootElement.appendChild(this.canvas),this._logger.debug("Canvas appended to root element"),this.board=this._boardService.createBoard(this.image),this._logger.debug("Board created"),this._uiService.init(this.board,this.ctx,this._config),this._logger.debug("UIService ready")}render(t){this.deltaTime=t-this.deltaTime,this.fpsDeltaTime+=this.deltaTime,this.fpsDeltaTime>=this.fpsDeltaLimit&&(at(t),this.board.render(this.ctx),this.fpsDeltaTime=0),this.deltaTime=t,requestAnimationFrame(this.render.bind(this))}get fpsDeltaTime(){return this._fpsDeltaTime}set fpsDeltaTime(t){this._fpsDeltaTime=t}get deltaTime(){return this._deltaTime}set deltaTime(t){this._deltaTime=t}get fpsDeltaLimit(){return this._fpsDeltaLimit}set fpsDeltaLimit(t){this._fpsDeltaLimit=t}get board(){return this._board}set board(t){this._board=t}get image(){return this._image}set image(t){this._image=t}get canvas(){return this._canvas}set canvas(t){this._canvas=t}get ctx(){return this.canvas.getContext("2d")}get rootElement(){return this._config.rootElement}}class ct{constructor(t,i,n,s){this._boardFactory=t,this._config=i,this._pieceService=n,this._logger=s}createBoard(t){const i=this._boardFactory(this._config,t,this._pieceService,this._logger);return this._logger.debug("Board instantiated"),i}}class _t{constructor(t,i){this._config=t,this._logger=i}clear(){this._config.rootElement.innerHTML=""}createCanvas(){return document.createElement("canvas")}setSize(t,i){const{width:n,height:s}=this.getFitSize(i);t.width=n,t.height=s,i.width=n,i.height=s}getFitSize(t){const i=this.getImageRatio(t),{canvasWidth:n}=this.canvasSize;return{height:n/i,width:n}}getImageRatio({width:t,height:i}){return t===0&&this._logger.warn("Image width is 0"),i===0&&this._logger.warn("Image height is 0"),i===t||i===0||t===0?1:t/i}get canvasSize(){const t=this.rootWidth,{canvasWidth:i,canvasHeight:n}=this._config;if(i<=t)return{canvasHeight:n,canvasWidth:i};const s=i/n;return{canvasHeight:t/s,canvasWidth:t}}get rootWidth(){return this._config.rootElement.clientWidth}}class ut{constructor(t,i,n){this._pieceFactory=t,this._config=i,this._logger=n}createPieces(t,i,n,s,r,o){const a=[];for(let h=0;h<n;h++)for(let _=0;_<s;_++){const c=this.createPiece(t,i);c.image=o,c.index=this.getIndex(_,h,s),c.mask=r(_,h,this._config.radius),a.push(c)}return this._logger.debug("Pieces instantiated"),a}createPiece(t,i){const n=this._pieceFactory(t,i,this._config,this._logger);return this._logger.debug("Piece instantiated"),n}getIndex(t,i,n){return t+i*n}}class lt{constructor(t,i){this._config=t,this._logger=i,this.getInitialPositions=()=>({randomPosition:[],currentPosition:[]})}shuffle(t,i){this._logger.debug("Shuffling");const n=this.randomizePiecePositions(t,i);this._logger.debug("Got pieces positions"),this.animatePieces(t,n),this._logger.debug("Shuffled")}randomizePiecePositions(t,i){const n=this.getLimits(i);return t.pieces.reduce((s,r,o)=>{const a=t.positionByIndex(o);return s.randomPosition.push(this.getPieceRandomPosition(a,t,n)),s.currentPosition.push({x:0,y:0}),s},this.getInitialPositions())}getLimits(t){return{left:this._config.localPadding,top:this._config.localPadding,right:t.width-2*this._config.localPadding,bottom:t.height-2*this._config.localPadding}}getPieceRandomPosition(t,i,n){const s=i.pieceHeight,r=i.pieceWidth,o=t.x*r,a=t.y*s;return{x:n.left-o+Math.random()*(n.right-n.left-r),y:n.top-a+Math.random()*(n.bottom-n.top-s)}}animatePieces(t,i){t.pieces.forEach((n,s)=>new G(i.currentPosition[s]).to(i.randomPosition[s],1e3).easing(p.Quadratic.Out).onUpdate(()=>{n.x=i.currentPosition[s].x,n.y=i.currentPosition[s].y,n.z=s+10}).onComplete(()=>{n.placed=!1,n.dropZ()}).start())}}class b{constructor(t){this._logger=t,this._shuffled=!1}init(t,i,n){const s=this.getInitialState();i.canvas.addEventListener("pointerup",this.onUp(s,t,n.onSuccess)),i.canvas.addEventListener("pointerdown",this.onDown(s,t,i)),i.canvas.addEventListener("pointermove",this.onMove(s,t,i)),i.canvas.addEventListener("pointerleave",this.onLeave(s)),i.canvas.addEventListener("pointerenter",this.onEnter(s)),this._shuffled=!1,this._logger.debug("Canvas listeners added"),this.setStyles(n),this._logger.debug("Styles set")}setStyles(t){t.rootElement&&(t.rootElement.style.touchAction="none")}onEnter(t){return()=>{t._isMouseIn=!0}}onLeave(t){return()=>{t._isMouseIn=!1,t._isPieceMoving=!1,t._piece=null}}onMove(t,i,n){return s=>{b.isMouse(s)&&!t._isPieceMoving&&t._isMouseIn&&i&&(t._piece=i.getPieceByPosition(n,s.offsetX,s.offsetY),i.unHoverPieces(),t._piece&&t._piece.hover()),b.isTouch(s)&&t._isPieceMoving&&t._piece?(s.preventDefault(),s.stopPropagation(),t._piece.x+=s.movementX,t._piece.y+=s.movementY):t._isPieceMoving&&t._piece&&(s.preventDefault(),s.stopPropagation(),t._piece.x+=s.offsetX-t._pointerCoordinates.x,t._piece.y+=s.offsetY-t._pointerCoordinates.y),t._pointerCoordinates.x=s.offsetX,t._pointerCoordinates.y=s.offsetY}}onDown(t,i,n){return s=>{b.isTouch(s)&&!t._isPieceMoving&&t._isMouseIn&&i&&(t._piece=i.getPieceByPosition(n,s.offsetX,s.offsetY),i.unHoverPieces(),t._piece&&t._piece.hover()),t._piece&&(t._isPieceMoving=!0)}}onUp(t,i,n){return()=>{if(t._isPieceMoving=!1,t._piece&&t._piece.isNearToPlace()){const s=t._piece,r={x:s.x,y:s.y};new G(r).to({x:0,y:0},250).easing(p.Quadratic.In).onUpdate(()=>{s.x=r.x,s.y=r.y,s.z=100}).onComplete(()=>{s.placed=!0,s.dropZ(),s.unHover(),i.checkPieces()&&this._shuffled&&(n(),i.pieces=[])}).start()}else t._piece&&t._piece.dropZ();t._piece=null}}static isMouse(t){return t.pointerType==="mouse"}static isTouch(t){return t.pointerType==="touch"}getInitialState(){return{_isMouseIn:!1,_isPieceMoving:!1,_piece:null,_pointerCoordinates:{x:0,y:0}}}setShuffled(t){this._shuffled=t}}function Q(e,t=console){const i=new tt(e,t),n=new $(t),s=new _t(i,t),r=new ut(nt,i,t),o=new ct(it,i,r,t),a=new lt(i,t),h=new b(t);return new ht(i,n,s,o,a,h,t)}let v;const M=document.getElementById("radius"),K=()=>({rootElement:document.getElementById(C.DEFAULT_ROOT_ELEMENT),onSuccess:()=>alert("You win!"),radius:M&&parseInt(M.value)||C.DEFAULT_RADIUS});v=Q(K());const L=document.getElementById("shuffle");L&&L.addEventListener("click",()=>{v&&v.shuffle()});const x=document.getElementById("reset");x&&x.addEventListener("click",async()=>{v&&await v.reset()});const D=document.getElementById("apply");D&&D.addEventListener("click",async()=>{v=Q(K())});
//# sourceMappingURL=jigsawPuzzle-CtOe1Ulw.js.map
