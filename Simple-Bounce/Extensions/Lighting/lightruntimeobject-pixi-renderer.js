var gdjs;(function(j){const A=new j.Logger("Light object"),b=GlobalPIXIModule.PIXI,f=class{constructor(t,e){this._texture=null;this._light=null;this._debugMode=!1;this._debugLight=null;this._debugGraphics=null;this._object=t,this._runtimeScene=e,this._manager=t.getObstaclesManager(),this._radius=t.getRadius();const i=t._color;this._color=[i[0]/255,i[1]/255,i[2]/255],this.updateTexture(),this._center=new Float32Array([t.x,t.y]),this._defaultVertexBuffer=new Float32Array(8),this._vertexBuffer=new Float32Array([t.x-this._radius,t.y+this._radius,t.x+this._radius,t.y+this._radius,t.x+this._radius,t.y-this._radius,t.x-this._radius,t.y-this._radius]),this._indexBuffer=new Uint16Array([0,1,2,0,2,3]),this.updateMesh(),this._isPreview=e.getGame().isPreview(),this._lightBoundingPoly=j.Polygon.createRectangle(0,0),this.updateDebugMode(),this._light&&e.getLayer("").getRenderer().addRendererObject(this.getRendererObject(),t.getZOrder())}static _verticesWithAngleComparator(t,e){return t.angle<e.angle?-1:t.angle>e.angle?1:0}static _computeClosestIntersectionPoint(t,e,i,n){const r=t.getX(),o=t.getY(),h=r+n*Math.cos(e),l=o+n*Math.sin(e);let _=n*n;const u=[null,null];for(const g of i){const d=j.Polygon.raycastTest(g,r,o,h,l);d.collision&&d.closeSqDist<=_&&(_=d.closeSqDist,u[0]=d.closeX,u[1]=d.closeY)}return u[0]&&u[1]?u:null}getRendererObject(){return this._debugLight?this._debugLight:this._light}ensureUpToDate(){this._object.isHidden()||(this._debugGraphics&&this._updateDebugGraphics(),this._updateBuffers())}updateMesh(){if(!b.utils.isWebGLSupported()){A.warn("This device does not support webgl, which is required for Lighting Extension.");return}this.updateTexture();const t=this._texture===null?f.defaultFragmentShader:f.texturedFragmentShader,e={center:this._center,radius:this._radius,color:this._color};this._texture&&(e.uSampler=this._texture);const i=b.Shader.from(f.defaultVertexShader,t,e),n=new b.Geometry;n.addAttribute("aVertexPosition",this._vertexBuffer,2).addIndex(this._indexBuffer),this._light?(this._light.shader=i,this._light.geometry=n):(this._light=new b.Mesh(n,i),this._light.blendMode=b.BLEND_MODES.ADD)}updateRadius(){!this._light||(this._radius=this._object.getRadius(),this._light.shader.uniforms.radius=this._radius)}updateColor(){if(!this._light)return;const t=this._object._color;this._color=[t[0]/255,t[1]/255,t[2]/255],this._light.shader.uniforms.color=this._color}updateTexture(){const t=this._object.getTexture();this._texture=t!==""?this._runtimeScene.getGame().getImageManager().getPIXITexture(t):null}updateDebugMode(){!this._light||(this._debugMode=this._object.getDebugMode(),!this._debugLight&&(this._isPreview||this._debugMode)&&(this._debugLight=new b.Container,this._debugLight.addChild(this._light)),this._debugMode&&!this._debugGraphics&&(this._debugGraphics=new b.Graphics,this._debugLight.addChild(this._debugGraphics)),!this._debugMode&&this._debugGraphics&&(this._debugLight.removeChild(this._debugGraphics),this._debugGraphics.destroy(),this._debugGraphics=null),this.ensureUpToDate())}_updateDebugGraphics(){const t=this._debugGraphics,e=this._computeLightVertices();if(!e.length){t.clear(),t.lineStyle(1,16711680,1).moveTo(this._object.x,this._object.y).lineTo(this._object.x-this._radius,this._object.y+this._radius).lineTo(this._object.x+this._radius,this._object.y+this._radius).moveTo(this._object.x,this._object.y).lineTo(this._object.x+this._radius,this._object.y+this._radius).lineTo(this._object.x+this._radius,this._object.y-this._radius).moveTo(this._object.x,this._object.y).lineTo(this._object.x+this._radius,this._object.y-this._radius).lineTo(this._object.x-this._radius,this._object.y-this._radius).moveTo(this._object.x,this._object.y).lineTo(this._object.x-this._radius,this._object.y-this._radius).lineTo(this._object.x-this._radius,this._object.y+this._radius);return}const i=new Array(2*e.length+2);i[0]=this._object.x,i[1]=this._object.y;for(let r=2;r<2*e.length+2;r+=2)i[r]=e[r/2-1][0],i[r+1]=e[r/2-1][1];t.clear(),t.moveTo(i[2],i[3]);const n=i.length;for(let r=2;r<n;r+=2){const o=r%4==0?16711680:65280,h=r+2>=n?2:r+2,l=r+3>=n?3:r+3;t.lineStyle(1,o,1).lineTo(i[r],i[r+1]).lineTo(i[h],i[l]).moveTo(i[0],i[1]).lineTo(i[r],i[r+1]).moveTo(i[0],i[1]).lineTo(i[h],i[l])}}_updateBuffers(){if(!this._light)return;this._center[0]=this._object.x,this._center[1]=this._object.y;const t=this._computeLightVertices();if(t.length===0){this._defaultVertexBuffer[0]=this._object.x-this._radius,this._defaultVertexBuffer[1]=this._object.y+this._radius,this._defaultVertexBuffer[2]=this._object.x+this._radius,this._defaultVertexBuffer[3]=this._object.y+this._radius,this._defaultVertexBuffer[4]=this._object.x+this._radius,this._defaultVertexBuffer[5]=this._object.y-this._radius,this._defaultVertexBuffer[6]=this._object.x-this._radius,this._defaultVertexBuffer[7]=this._object.y-this._radius,this._light.shader.uniforms.center=this._center,this._light.geometry.getBuffer("aVertexPosition").update(this._defaultVertexBuffer),this._light.geometry.getIndex().update(f._defaultIndexBuffer);return}const e=t.length;let i=!1,n=null,r=null;this._vertexBuffer.length>2*e+2&&(this._vertexBuffer.length<4*e+4?(i=!0,n=this._vertexBuffer.subarray(0,2*e+2),r=this._indexBuffer.subarray(0,3*e)):(this._vertexBuffer=new Float32Array(2*e+2),this._indexBuffer=new Uint16Array(3*e))),this._vertexBuffer.length<2*e+2&&(this._vertexBuffer=new Float32Array(2*e+2),this._indexBuffer=new Uint16Array(3*e)),this._vertexBuffer[0]=this._object.x,this._vertexBuffer[1]=this._object.y;for(let o=2;o<2*e+2;o+=2)this._vertexBuffer[o]=t[o/2-1][0],this._vertexBuffer[o+1]=t[o/2-1][1];for(let o=0;o<3*e;o+=3)this._indexBuffer[o]=0,this._indexBuffer[o+1]=o/3+1,o/3+1!==e?this._indexBuffer[o+2]=o/3+2:this._indexBuffer[o+2]=1;this._light.shader.uniforms.center=this._center,i?(this._light.geometry.getBuffer("aVertexPosition").update(n),this._light.geometry.getIndex().update(r)):(this._light.geometry.getBuffer("aVertexPosition").update(this._vertexBuffer),this._light.geometry.getIndex().update(this._indexBuffer))}_computeLightVertices(){const t=[];this._manager&&this._manager.getAllObstaclesAround(this._object,this._radius,t);const e=this._object.getX()-this._radius,i=this._object.getY()-this._radius,n=this._object.getX()+this._radius,r=this._object.getY()+this._radius;if(t.length===0)return t;const o=this._object.getHitBoxes()[0];for(let s=0;s<4;s++)this._lightBoundingPoly.vertices[s][0]=o.vertices[s][0],this._lightBoundingPoly.vertices[s][1]=o.vertices[s][1];const h=[];h.push(this._lightBoundingPoly);for(let s=0;s<t.length;s++){const c=t[s].owner.getHitBoxesAround(e,i,n,r);for(const v of c)h.push(v)}let l=this._object.x+this._radius,_=this._object.x-this._radius,u=this._object.y+this._radius,g=this._object.y-this._radius;const d=[];for(let s=1;s<h.length;s++){const c=h[s].vertices,v=c.length;for(let a=0;a<v;a++)d.push(c[a]),c[a][0]<_&&(_=c[a][0]),c[a][0]>l&&(l=c[a][0]),c[a][1]<g&&(g=c[a][1]),c[a][1]>u&&(u=c[a][1])}h[0].vertices[0][0]=_,h[0].vertices[0][1]=g,h[0].vertices[1][0]=l,h[0].vertices[1][1]=g,h[0].vertices[2][0]=l,h[0].vertices[2][1]=u,h[0].vertices[3][0]=_,h[0].vertices[3][1]=u;const p=Math.sqrt(Math.max((this._object.x-_)*(this._object.x-_)+(this._object.y-g)*(this._object.y-g),(l-this._object.x)*(l-this._object.x)+(this._object.y-g)*(this._object.y-g),(l-this._object.x)*(l-this._object.x)+(u-this._object.y)*(u-this._object.y),(this._object.x-_)*(this._object.x-_)+(u-this._object.y)*(u-this._object.y)));for(let s=0;s<4;s++)d.push(h[0].vertices[s]);const x=[],V=d.length;for(let s=0;s<V;s++){const c=d[s][0]-this._object.x,v=d[s][1]-this._object.y,a=Math.atan2(v,c),B=f._computeClosestIntersectionPoint(this._object,a,h,p);B&&x.push({vertex:B,angle:a});const P=f._computeClosestIntersectionPoint(this._object,a+1e-4,h,p);P&&x.push({vertex:P,angle:a+1e-4});const I=f._computeClosestIntersectionPoint(this._object,a-1e-4,h,p);I&&x.push({vertex:I,angle:a-1e-4})}x.sort(f._verticesWithAngleComparator);const m=[x[0].vertex],C=x.length;for(let s=1;s<C;s++)x[s].angle!==x[s-1].angle&&m.push(x[s].vertex);return m}};let y=f;y._defaultIndexBuffer=new Uint16Array([0,1,2,0,2,3]),y.defaultVertexShader=`
  precision highp float;
  attribute vec2 aVertexPosition;

  uniform mat3 translationMatrix;
  uniform mat3 projectionMatrix;
  varying vec2 vPos;

  void main() {
      vPos = aVertexPosition;
      gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
  }`,y.defaultFragmentShader=`
  precision highp float;
  uniform vec2 center;
  uniform float radius;
  uniform vec3 color;
  varying vec2 vPos;

  void main() {
      float l = length(vPos - center);
      float intensity = 0.0;
      if(l < radius)
        intensity = clamp((radius - l)*(radius - l)/(radius*radius), 0.0, 1.0);
      gl_FragColor = vec4(color*intensity, 1.0);
  }`,y.texturedFragmentShader=`
  precision highp float;
  uniform vec2 center;
  uniform float radius;
  uniform vec3 color;
  uniform sampler2D uSampler;
  varying vec2 vPos;

  void main() {
    vec2 topleft = vec2(center.x - radius, center.y - radius);
    vec2 texCoord = (vPos - topleft)/(2.0 * radius);
    gl_FragColor = (texCoord.x > 0.0 && texCoord.x < 1.0 && texCoord.y > 0.0 && texCoord.y < 1.0)
      ? vec4(color, 1.0) * texture2D(uSampler, texCoord)
      : vec4(0.0, 0.0, 0.0, 0.0);
  }`,j.LightRuntimeObjectPixiRenderer=y,j.LightRuntimeObjectRenderer=y})(gdjs||(gdjs={}));
//# sourceMappingURL=lightruntimeobject-pixi-renderer.js.map
