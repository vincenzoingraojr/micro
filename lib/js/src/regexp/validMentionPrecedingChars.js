// Copyright 2022 Vincenzo Ingrao Jr.
// Licensed under the MIT License

const validMentionPrecedingChars = /(?:^|[^a-zA-Z0-9_!#$%&*@＠]|(?:^|[^a-zA-Z0-9_+~.-])(?:rt|RT|rT|Rt):?)/;
export default validMentionPrecedingChars;
