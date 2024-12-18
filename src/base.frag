precision mediump float;

varying vec2 vUvs;

uniform sampler2D uSampler2;

void main() {
    gl_FragColor = texture2D(uSampler2, vUvs);
}