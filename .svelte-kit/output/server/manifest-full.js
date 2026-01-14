export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","SpaceGrotesk-Medium.woff2","SpaceGrotesk-Regular.woff2","bmbf.svg","cover.jpg","demo.mp4","favicon.png","openc.svg","pf.svg","vantage.png","vantage.webm"]),
	mimeTypes: {".woff2":"font/woff2",".svg":"image/svg+xml",".jpg":"image/jpeg",".mp4":"video/mp4",".png":"image/png",".webm":"video/webm"},
	_: {
		client: {start:"_app/immutable/entry/start.CWggJ7Pn.js",app:"_app/immutable/entry/app.Cw8MNN4A.js",imports:["_app/immutable/entry/start.CWggJ7Pn.js","_app/immutable/chunks/C45ZWEa1.js","_app/immutable/chunks/C9FWihKz.js","_app/immutable/chunks/BP7RbBvP.js","_app/immutable/entry/app.Cw8MNN4A.js","_app/immutable/chunks/C9FWihKz.js","_app/immutable/chunks/Yzwz9Dcx.js","_app/immutable/chunks/BArpSiJ7.js","_app/immutable/chunks/BP7RbBvP.js","_app/immutable/chunks/BvFvupHY.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
