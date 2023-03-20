// Copyright 2022 Vincenzo Ingrao Jr.
// Licensed under the MIT License

import invalidChars from './regexp/invalidChars';

export default function(text) {
  return invalidChars.test(text);
}
