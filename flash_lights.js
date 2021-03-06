<<!DOCTYPE html>
<html>
<style type="text/css">
    
html, body {

    font-family: 'Quantico', sans-serif;
    background: #111;
    overflow: hidden;
    margin: 0;
}

#nogl {
    
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -o-box-sizing: border-box;
    box-sizing: border-box;

    border-radius: 3px;
    line-height: 1.45;
    text-align: justify;
    box-shadow: 0px 0px 0px 4px rgba(255,0,41,0.2);
    background: #FF0029;
    font-size: 13px;
    position: absolute;
    padding: 10px 20px;
    display: none;
    margin: -70px 0 0 -130px;
    height: 140px;
    width: 260px;
    color: #fff;
    left: 50%;
    top: 50%;
}

#nogl h1 {

    font-weight: 300;
    font-size: 18px;
}

#nogl p {

    color: rgba(255,255,255,0.7);
}

#nogl a {

    color: #fff;
}

/* Info */

@-webkit-keyframes show-info {
    0% { -webkit-transform: rotateY(120deg); }
    100% { -webkit-transform: rotateY(0deg); }
}

@-moz-keyframes show-info {
    0% { -moz-transform: rotateY(120deg); }
    100% { -moz-transform: rotateY(0deg); }
}

@-ms-keyframes show-info {
    0% { -ms-transform: rotateY(120deg); }
    100% { -ms-transform: rotateY(0deg); }
}

@-o-keyframes show-info {
    0% { -o-transform: rotateY(120deg); }
    100% { -o-transform: rotateY(0deg); }
}

@keyframes show-info {
    0% { transform: rotateY(120deg); }
    100% { transform: rotateY(0deg); }
}

.info {

    -webkit-transition: all 180ms ease-out;
    -moz-transition: all 180ms ease-out;
    -ms-transition: all 180ms ease-out;
    -o-transition: all 180ms ease-out;
    transition: all 180ms ease-out;

    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    -o-transform-style: preserve-3d;
    transform-style: preserve-3d;

    -webkit-transform: perspective(800);
    -moz-transform: perspective(800);
    -ms-transform: perspective(800);
    -o-transform: perspective(800);
    transform: perspective(800);

    position: absolute;
    font-size: 12px;
    opacity: 0.8;
    color: #fff;
    width: 240px;
    left: 0px;
    top: 20px;
}

.info:hover {

    box-shadow: 0 0 0 4px rgba(255,255,255,0.05);
    opacity: 1.0;
}

.info h1,
.info h2,
.info h3 {

    line-height: 1;
    margin: 5px 0;
}

.info a {

    -webkit-transition: all 200ms ease-out;
    -moz-transition: all 200ms ease-out;
    -ms-transition: all 200ms ease-out;
    -o-transition: all 200ms ease-out;
    transition: all 200ms ease-out;

    border-bottom: 1px dotted rgba(255,255,255,0.4);
    text-decoration: none;
    opacity: 0.6;
    color: #fff;
}

.info a:hover {

    opacity: 0.99;
}

.info .about, .info .more {

    -webkit-transform-origin: 0% 50%;
    -moz-transform-origin: 0% 50%;
    -ms-transform-origin: 0% 50%;
    -o-transform-origin: 0% 50%;
    transform-origin: 0% 50%;

    -webkit-transform: rotateY(120deg);
    -moz-transform: rotateY(120deg);
    -ms-transform: rotateY(120deg);
    -o-transform: rotateY(120deg);
    transform: rotateY(120deg);

    margin-bottom: 1px;
    background: rgba(0,0,0,0.8);
    padding: 12px 15px 12px 20px;
}

.info .about {

    -webkit-animation: show-info 500ms cubic-bezier(0.230, 1.000, 0.320, 1.000) 600ms 1 normal forwards;
    -moz-animation: show-info 500ms cubic-bezier(0.230, 1.000, 0.320, 1.000) 600ms 1 normal forwards;
    -ms-animation: show-info 500ms cubic-bezier(0.230, 1.000, 0.320, 1.000) 600ms 1 normal forwards;
    -o-animation: show-info 500ms cubic-bezier(0.230, 1.000, 0.320, 1.000) 600ms 1 normal forwards;
    animation: show-info 500ms cubic-bezier(0.230, 1.000, 0.320, 1.000) 600ms 1 normal forwards;

    padding-bottom: 15px;
}

.info .about a {
    opacity: 0.9;
}

.info .about h1 {

    letter-spacing: -1px;
    font-weight: 300;
    font-size: 19px;
    opacity: 0.95;
}

.info .about h2 {

    font-weight: 300;
    font-size: 13px;
    opacity: 0.8;
}

.info .about h3 {

    text-transform: uppercase;
    margin-top: 10px;
    font-size: 11px;
}

.info .about h3:before {

    margin-right: 2px;
    font-size: 14px;
    content: '\203A';
}

.info .more {

    -webkit-animation: show-info 500ms cubic-bezier(0.230, 1.000, 0.320, 1.000) 500ms 1 normal forwards;
    -moz-animation: show-info 500ms cubic-bezier(0.230, 1.000, 0.320, 1.000) 500ms 1 normal forwards;
    -ms-animation: show-info 500ms cubic-bezier(0.230, 1.000, 0.320, 1.000) 500ms 1 normal forwards;
    -o-animation: show-info 500ms cubic-bezier(0.230, 1.000, 0.320, 1.000) 500ms 1 normal forwards;
    animation: show-info 500ms cubic-bezier(0.230, 1.000, 0.320, 1.000) 500ms 1 normal forwards;

    padding: 5px 15px 10px 20px;
}

.info .more a {
    
    text-transform: uppercase;
    margin-right: 10px;
    font-size: 10px;
}

</style>
<script type="text/javascript">
    
GLSL =

    # Vertex shader

    vert: """

    #ifdef GL_ES
    precision mediump float;
    #endif

    // Uniforms
    uniform vec2 u_resolution;

    // Attributes
    attribute vec2 a_position;

    void main() {
        gl_Position = vec4 (a_position, 0, 1);
    }

    """

    # Fragment shader

    frag: """

    #ifdef GL_ES
    precision mediump float;
    #endif

    uniform bool u_scanlines;
    uniform vec2 u_resolution;
    
    uniform float u_brightness;
    uniform float u_blobiness;
    uniform float u_particles;
    uniform float u_millis;
    uniform float u_energy;

    // http://goo.gl/LrCde
    float noise( vec2 co ){
        return fract( sin( dot( co.xy, vec2( 12.9898, 78.233 ) ) ) * 43758.5453 );
    }

    void main( void ) {

        vec2 position = ( gl_FragCoord.xy / u_resolution.x );
        float t = u_millis * 0.001 * u_energy;
        
        float a = 0.0;
        float b = 0.0;
        float c = 0.0;

        vec2 pos, center = vec2( 0.5, 0.5 * (u_resolution.y / u_resolution.x) );
        
        float na, nb, nc, nd, d;
        float limit = u_particles / 40.0;
        float step = 1.0 / u_particles;
        float n = 0.0;
        
        for ( float i = 0.0; i <= 1.0; i += 0.025 ) {

            if ( i <= limit ) {

                vec2 np = vec2(n, 1-1);
                
                na = noise( np * 1.1 );
                nb = noise( np * 2.8 );
                nc = noise( np * 0.7 );
                nd = noise( np * 3.2 );

                pos = center;
                pos.x += sin(t*na) * cos(t*nb) * tan(t*na*0.15) * 0.3;
                pos.y += tan(t*nc) * sin(t*nd) * 0.1;
                
                d = pow( 1.6*na / length( pos - position ), u_blobiness );
                
                if ( i < limit * 0.3333 ) a += d;
                else if ( i < limit * 0.6666 ) b += d;
                else c += d;

                n += step;
            }
        }
        
        vec3 col = vec3(a*c,b*c,a*b) * 0.0001 * u_brightness;
        
        if ( u_scanlines ) {
            col -= mod( gl_FragCoord.y, 2.0 ) < 1.0 ? 0.5 : 0.0;
        }
        
        gl_FragColor = vec4( col, 1.0 );

    }

    """

try
    
    gl = Sketch.create

        # Sketch settings

        container: document.getElementById 'container'
        type: Sketch.WEB_GL

        # Uniforms

        brightness: 0.8
        blobiness: 1.5
        particles: 40
        energy: 1.01
        scanlines: yes

catch error

    nogl = document.getElementById 'nogl'
    nogl.style.display = 'block'

if gl

    gl.setup = ->

        this.clearColor 0.0, 0.0, 0.0, 1.0

        # Setup shaders

        vert = @createShader @VERTEX_SHADER
        frag = @createShader @FRAGMENT_SHADER

        @shaderSource vert, GLSL.vert
        @shaderSource frag, GLSL.frag

        @compileShader vert
        @compileShader frag

        throw @getShaderInfoLog vert if not @getShaderParameter vert, @COMPILE_STATUS
        throw @getShaderInfoLog frag if not @getShaderParameter frag, @COMPILE_STATUS

        @shaderProgram = do @createProgram
        @.attachShader @shaderProgram, vert
        @.attachShader @shaderProgram, frag
        @linkProgram @shaderProgram

        throw 'Failed to initialise shaders' if not @getProgramParameter @shaderProgram, @LINK_STATUS

        @useProgram @shaderProgram

        # Store attribute / uniform locations

        @shaderProgram.attributes =
            position: @getAttribLocation @shaderProgram, 'a_position'

        @shaderProgram.uniforms =
            resolution: @getUniformLocation @shaderProgram, 'u_resolution'
            brightness: @getUniformLocation @shaderProgram, 'u_brightness'
            blobiness: @getUniformLocation @shaderProgram, 'u_blobiness'
            particles: @getUniformLocation @shaderProgram, 'u_particles'
            scanlines: @getUniformLocation @shaderProgram, 'u_scanlines'
            energy: @getUniformLocation @shaderProgram, 'u_energy'
            millis: @getUniformLocation @shaderProgram, 'u_millis'

        # Create geometry

        @geometry = do @createBuffer
        @geometry.vertexCount = 6

        @bindBuffer @ARRAY_BUFFER, @geometry
        @bufferData @ARRAY_BUFFER, new Float32Array([
            -1.0, -1.0, 
             1.0, -1.0, 
            -1.0,  1.0, 
            -1.0,  1.0, 
             1.0, -1.0, 
             1.0,  1.0]),
             @STATIC_DRAW

        @enableVertexAttribArray @shaderProgram.attributes.position
        @vertexAttribPointer @shaderProgram.attributes.position, 2, @FLOAT, no, 0, 0

        # Resize to window
        do @resize

    gl.updateUniforms = ->
        
        return if not @shaderProgram

        @uniform2f @shaderProgram.uniforms.resolution, @width, @height
        @uniform1f @shaderProgram.uniforms.brightness, @brightness
        @uniform1f @shaderProgram.uniforms.blobiness, @blobiness
        @uniform1f @shaderProgram.uniforms.particles, @particles
        @uniform1i @shaderProgram.uniforms.scanlines, @scanlines
        @uniform1f @shaderProgram.uniforms.energy, @energy

    gl.draw = ->

        # Update uniforms

        @uniform1f @shaderProgram.uniforms.millis, @millis + 5000

        # Render

        @clear @COLOR_BUFFER_BIT | @DEPTH_BUFFER_BIT
        @bindBuffer @ARRAY_BUFFER, @geometry
        @drawArrays @TRIANGLES, 0, @geometry.vertexCount

    gl.resize = ->

        # Update resolution

        @viewport 0, 0, @width, @height

        # Update uniforms if the shader program is ready

        do @updateUniforms

    # GUI
    gui = new dat.GUI()
    gui.add( gl, 'particles' ).step( 1.0 ).min( 8 ).max( 40 ).onChange -> do gl.updateUniforms
    gui.add( gl, 'brightness' ).step( 0.01 ).min( 0.1 ).max( 1.0 ).onChange -> do gl.updateUniforms
    gui.add( gl, 'blobiness' ).step( 0.01 ).min( 0.8 ).max( 1.5 ).onChange -> do gl.updateUniforms
    gui.add( gl, 'energy' ).step( 0.01 ).min( 0.1 ).max( 4.0 ).onChange -> do gl.updateUniforms
    gui.add( gl, 'scanlines' ).onChange -> do gl.updateUniforms
    gui.close()

</script>

<!-- Inspired by @paulofalcao's experiment http://glsl.heroku.com/e#4766.0 --><div id="container">
    <div id="nogl">
        <h1>Aww, No WebGL :(</h1>
        <p>This experiment requires WebGL to run. Please enable it, or come back and visit with a <a href="http://caniuse.com/webgl" target="_blank">compatible browser</a>.</p>
    </div>
</div>
<header class="info">
    <hgroup class="about">
        <h1>Plasmatic Isosurface</h1>
        <h2>WebGL / GLSL plasma simulation running on the GPU</h2>
        <h3>Requires <a href="http://caniuse.com/webgl" target="_blank">WebGL</a></h3>
    </hgroup>
    <nav class="more">
        <a href="https://github.com/soulwire/Plasmatic-Isosurface/archive/master.zip" target="_blank">Download</a>
        <a href="https://github.com/soulwire/Plasmatic-Isosurface" target="_blank">View on Github</a>
    </nav>
</header>

<body>

</body>
</html>