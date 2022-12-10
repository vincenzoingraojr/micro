// Copyright 2022 Vincenzo Ingrao Jr.
// Licensed under the MIT License

const codePoint = /(?:[^\uD800-\uDFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF])/;
export default codePoint;
