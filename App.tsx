// Installing Libries
// yarn add react-i18next
// yarn add i18next

import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

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
    <View style={styles.main}>
      <Text style={styles.title}>Alhamdulillah</Text>
      <Text style={styles.text}>{t('greet')}</Text>
      <Text style={styles.text}>{t('name')}</Text>
      <TouchableOpacity style={styles.button} onPress={changeLanguage}>
        <Text style={styles.buttonText}>Change Language</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0', // Light gray background
    padding: 20, // Add some padding around the container
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20, // Space between title and other texts
    color: '#333', // Dark gray color for better contrast
  },
  text: {
    fontSize: 18,
    marginBottom: 10, // Space between text elements
    color: '#666', // Gray color for text
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007bff', // Blue background for button
    borderRadius: 5, // Rounded corners for button
  },
  buttonText: {
    color: '#fff', // White text color for button
    fontSize: 16,
    fontWeight: 'bold',
  },
});