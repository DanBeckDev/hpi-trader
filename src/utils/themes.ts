import { primary, neutral } from './colors';
import { primaryFont, typeScale } from './typography';

export const defaultTheme = {
  buttonPrimaryColor: neutral[400],
  primaryHoverColor: neutral[300],
  primaryActiveColor: primary[200],

  secondaryColor: primary[300],
  secondaryHoverColor: primary[400],

  tertiaryBorderColor: neutral[400],
  tertiaryHoverColor: primary[200],

  textColor: neutral[500],
  textColorInverted: neutral[100],
  primaryFont: primaryFont,

  menuLinkColor: neutral[300],
  menuLinkFontSize: typeScale.header2,

  spanColor: primary[300],

  pColor: neutral[300],

  bannerColor: primary[400],
};
