// Copyright 2022 Vincenzo Ingrao Jr.
// Licensed under the MIT License

const nonBmpCodePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/gm;
export default nonBmpCodePairs;
