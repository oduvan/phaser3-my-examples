var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
	watch: true,
	plugins: [
		new BrowserSyncPlugin({
            host: process.env.IP || 'localhost',
            port: process.env.PORT || 3000,
            server: {
                baseDir: ['./']
            }
        })
	]
};