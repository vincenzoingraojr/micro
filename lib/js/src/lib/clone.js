// Copyright 2022 Vincenzo Ingrao Jr.
// Licensed under the MIT License

export default function(o) {
  const r = {};
  for (const k in o) {
    if (o.hasOwnProperty(k)) {
      r[k] = o[k];
    }
  }

  return r;
}
