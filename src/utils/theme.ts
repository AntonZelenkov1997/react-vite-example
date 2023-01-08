import { Themes } from '@/themes';

export const getPreferedTheme = () => {
  if (matchMedia('(prefers-color-scheme:dark)').matches) {
    return Themes.Dark;
  }
  return Themes.Light;
};
