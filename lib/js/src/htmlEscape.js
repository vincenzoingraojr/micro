// Copyright 2022 Vincenzo Ingrao Jr.
// Licensed under the MIT License

const HTML_ENTITIES = {
  '&': '&amp;',
  '>': '&gt;',
  '<': '&lt;',
  '"': '&quot;',
  "'": '&#39;'
};

export default function(text) {
  return (
    text &&
    text.replace(/[&"'><]/g, function(character) {
      return HTML_ENTITIES[character];
    })
  );
}
