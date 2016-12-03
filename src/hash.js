"use strict";

/**
 * @module torrent-extract-hash
 */
module.exports = extractHash;


/**
 * @alias module:torrent-extract-hash
 * @param {*} items
 * @returns {Array.<string>}
 * @description
 * Extract infohash string from torrent object(s).
 * @example
 * ```js
 * var extractHash = require("torrent-extract-hash");
 * var file = fs.readFileSync(path.join(__dirname, "checkMyTorrentIp.png.torrent"));
 * extractHash(parseTorrentFile(file));
 * //[ 2fa71a2dbb7d53a39373a9c4e2c9d89aaa7a6db1 ]
 * ```
 */
function extractHash(items) {
  var hash;
  var list = [];
  [].concat(items).forEach(function (item) {
    switch (typeof item) {
      case "string":
        hash = item;
        break;
      case "object":
        if (item === null) {
          return;
        }
        hash = String(item.hash || item.infoHash || item);
        break;
      default:
        return;
    }
    if (hash.length === 40) {
      list.push(hash);
    }
  });
  return list;
};

