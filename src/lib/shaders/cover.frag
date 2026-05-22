precision highp float;

varying vec2 v_uv;

uniform sampler2D u_texA;
uniform sampler2D u_texB;
uniform sampler2D u_noise;
uniform float u_t;
uniform vec2 u_res;
uniform vec2 u_sizeA;
uniform vec2 u_sizeB;
uniform float u_dpr;

float hash(vec3 p) {
  p = fract(p * vec3(443.8975, 397.2973, 491.1871));
  p += dot(p.zxy, p.yxz + 19.19);
  return fract(p.x * p.y * p.z);
}

float vnoise(vec3 p) {
  vec3 i = floor(p);
  vec3 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(mix(hash(i),               hash(i + vec3(1,0,0)), f.x),
        mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
    mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x),
        mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y),
    f.z
  );
}

// object-fit: cover — scale to fill, center, crop overflow
vec2 coverUV(vec2 uv, vec2 imgSize) {
  float ca = u_res.x / u_res.y;
  float ia = imgSize.x / imgSize.y;
  // multiply (not divide) by the scale factor
  vec2 scale = ca > ia ? vec2(1.0, ia / ca) : vec2(ca / ia, 1.0);
  return (uv - 0.5) * scale + 0.5;
}

void main() {
  vec4 colorA = texture2D(u_texA, coverUV(v_uv, u_sizeA));
  vec4 colorB = texture2D(u_texB, coverUV(v_uv, u_sizeB));

  // work in CSS pixels so sizes are DPR-independent
  vec2 cssRes = u_res / u_dpr;

  float bnVal = texture2D(u_noise, fract(v_uv * cssRes / 64.0)).r;

  vec2 px = v_uv * cssRes;
  float noiseVal = vnoise(vec3(px * 0.001, u_t * 3.0));

  // t=0 → all A, t=1 → all B
  float threshold = (1.0 - u_t) * 1.5 - 0.25 + (bnVal - 0.5) * 0.5;
  float useB = step(threshold, noiseVal);

  gl_FragColor = mix(colorA, colorB, useB);
}
