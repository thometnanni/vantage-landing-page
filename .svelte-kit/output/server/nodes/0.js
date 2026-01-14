import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.DYSV7gde.js","_app/immutable/chunks/BArpSiJ7.js","_app/immutable/chunks/C9FWihKz.js","_app/immutable/chunks/0waum1Sv.js"];
export const stylesheets = ["_app/immutable/assets/0.B-wU069N.css"];
export const fonts = [];
