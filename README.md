node-torrent-extract-hash
==========================================================================================
[![NPM Package](https://img.shields.io/npm/v/torrent-extract-hash.svg)](https://www.npmjs.org/package/torrent-extract-hash)
[![Build Status](https://travis-ci.org/vonthar/node-torrent-extract-hash.svg?branch=master)](https://travis-ci.org/vonthar/node-torrent-extract-hash/branches)
[![Coverage Status](https://coveralls.io/repos/github/vonthar/node-torrent-extract-hash/badge.svg?branch=master)](https://coveralls.io/github/vonthar/node-torrent-extract-hash?branch=master)
[![Dependency Status](https://david-dm.org/vonthar/node-torrent-extract-hash.svg)](https://david-dm.org/vonthar/node-torrent-extract-hash)

Installation
------------
`npm i torrent-extract-hash`


API Reference
-------------
<a name="exp_module_torrent-extract-hash--extractHash"></a>

### extractHash(items) ⇒ <code>Array.&lt;string&gt;</code> ⏏
Extract infohash string from torrent object(s).

**Kind**: Exported function  
**Params**

- items <code>\*</code>

**Example**  
```js
var extractHash = require("torrent-extract-hash");
var file = fs.readFileSync(path.join(__dirname, "checkMyTorrentIp.png.torrent"));
extractHash(parseTorrentFile(file));
//[ 2fa71a2dbb7d53a39373a9c4e2c9d89aaa7a6db1 ]
```


License
-------
MPL 2.0
