// Copyright 2022 Vincenzo Ingrao Jr.
// Licensed under the MIT License

// simple string interpolation
export default function(str, map) {
  return str.replace(/#\{(\w+)\}/g, function(match, name) {
    return map[name] || '';
  });
}
