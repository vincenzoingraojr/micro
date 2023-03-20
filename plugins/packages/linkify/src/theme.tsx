import { css } from 'linaria';

export interface LinkifyPluginTheme {
  link: string;
}

export const defaultTheme: LinkifyPluginTheme = {
  link: css`
    &,
    &:visited {
      font-weight: 400;
      color: #039BE5;
      text-decoration: none;
    };
    &:hover, &:active {
      text-decoration: underline;
    };
  `,
};
