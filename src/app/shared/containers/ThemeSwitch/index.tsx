import React from 'react';
import { FormLabel } from 'app/shared/components/FormLabel';
import { Radio } from 'app/shared/components/Radio';
import styled from 'styled-components/macro';
import { changeTheme, selectThemeKey } from 'styles/theme/slice';
import { useDispatch, useSelector } from 'react-redux';
import { saveTheme } from 'styles/theme/utils';
import { ThemeKeyType } from 'styles/theme/types';
import { translations } from 'locales/i18n';
import { useTranslation } from 'react-i18next';

export function ThemeSwitch() {
  const theme = useSelector(selectThemeKey);
  const dispatch = useDispatch();

  // I18 setting
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  // hook for change theme
  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as ThemeKeyType;
    saveTheme(value);
    dispatch(changeTheme(value));
  };

  return (
    <Wrapper>
      <FormLabel>{t(translations.theme.choice())}</FormLabel>
      <Themes>
        <Radio
          id="system"
          label="System theme"
          className="radio"
          name="theme"
          onChange={handleThemeChange}
          value="system"
          isSelected={theme === 'system'}
        />
        <Radio
          id="light"
          label="Light"
          className="radio"
          name="theme"
          onChange={handleThemeChange}
          value="light"
          isSelected={theme === 'light'}
        />
        <Radio
          id="dark"
          label="Dark"
          className="radio"
          name="theme"
          onChange={handleThemeChange}
          value="dark"
          isSelected={theme === 'dark'}
        />
      </Themes>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${FormLabel} {
    margin-bottom: 0.625rem;
  }
`;
const Themes = styled.div`
  display: flex;
  .radio {
    margin-right: 1.5rem;
  }
`;
