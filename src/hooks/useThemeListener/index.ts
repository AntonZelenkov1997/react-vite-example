import { Themes } from '@/themes';
import { getPreferedTheme } from '@/utils';
import { useCallback, useEffect } from 'react';

const useThemeListener = (onThemeChange: (currentTheme: Themes) => void) => {
  const onChange = useCallback(() => {
    onThemeChange(getPreferedTheme());
  }, []);

  useEffect(() => {
    matchMedia('(prefers-color-scheme: dark)').addEventListener(
      'change',
      onChange
    );

    return () => {
      matchMedia('(prefers-color-scheme: dark)').removeEventListener(
        'change',
        onChange
      );
    };
  }, []);
};

export default useThemeListener;
