// Copyright 2022 Vincenzo Ingrao Jr.
// Licensed under the MIT License

const validateUrlUnicodeSubDomainSegment = /(?:(?:[a-z0-9]|[^\u0000-\u007f])(?:(?:[a-z0-9_\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i;
export default validateUrlUnicodeSubDomainSegment;
