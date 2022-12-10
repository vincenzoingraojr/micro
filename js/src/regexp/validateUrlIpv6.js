// Copyright 2022 Vincenzo Ingrao Jr.
// Licensed under the MIT License

// Punting on real IPv6 validation for now
const validateUrlIpv6 = /(?:\[[a-f0-9:\.]+\])/i;
export default validateUrlIpv6;
