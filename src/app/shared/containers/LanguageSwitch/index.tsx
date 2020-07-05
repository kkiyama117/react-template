import React from 'react';
import { FormLabel } from 'app/shared/components/FormLabel';
import { Radio } from 'app/shared/components/Radio';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { translations, LanguageKey } from 'locales/i18n';

export function LanguageSwitch() {
  const { t, i18n } = useTranslation();
  const handleLanguageChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const language = event.target.value as LanguageKey;
    await i18n.changeLanguage(language);
  };

  return (
    <Wrapper>
      <FormLabel>{t(translations.i18n.selectLanguage())}</FormLabel>
      <Languages>
        <Radio
          id="ja"
          label="Japanese"
          className="radio"
          name="language"
          onChange={handleLanguageChange}
          value="ja"
          isSelected={i18n.language === 'ja'}
        />
        <Radio
          id="en"
          label="English"
          className="radio"
          name="language"
          onChange={handleLanguageChange}
          value="en"
          isSelected={i18n.language === 'en'}
        />
      </Languages>
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
const Languages = styled.div`
  display: flex;
  .radio {
    margin-right: 1.5rem;
  }
`;
