// Installing Libries
// yarn add react-i18next
// yarn add i18next

import React from "react";
import { useTranslation } from "react-i18next";
import { Text, TouchableOpacity, View } from "react-native";

export default function App(): JSX.Element {
  const {t, i18n} = useTranslation();
  
  const changeLanguage = () => {
    if (i18n.language === 'en') {
    i18n.changeLanguage('fr')
    } else {
      i18n.changeLanguage('en')
    }
  }

  return (
    <View>
      <Text>Alhamdulillah</Text>
      <Text>{t('greet')}</Text>
      <Text>{t('name')}</Text>
      <TouchableOpacity onPress={changeLanguage}>
        <Text>Change Language</Text>
      </TouchableOpacity>
    </View>
  )
}