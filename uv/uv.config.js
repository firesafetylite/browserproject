// uv/uv.config.js — Ultraviolet configuration
// Place this file at /uv/uv.config.js relative to your site root

self.__uv$config = {
  prefix:    '/uv/service/',   // All proxied requests go through this path
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler:   '/uv/uv.handler.js',
  bundle:    '/uv/uv.bundle.js',
  config:    '/uv/uv.config.js',
  sw:        '/uv/uv.sw.js',
};
