import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { Icon } from '../Icon/Icon';
import { useTheme } from 'context/ThemeContext';

export const ThemeToggleButton = () => {
  const { toggleTheme, theme , isDarkMode } = useTheme();
  const [pressed, setPressed] = useState(false);

  return (
    <TouchableOpacity
      onPress={toggleTheme}
      activeOpacity={1}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      style={[
        styles.button,
        {
          backgroundColor: theme.colors.surface,
          opacity: pressed ? 1 : 0.4,
          borderColor: theme.colors.border,
        },
      ]}>
      <Icon
        name={isDarkMode? 'sun' : 'moon'}
        type="Feather"
        size={20}
        color={theme.colors.text}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 30,
    right: 20,
    borderRadius: 30,
    padding: 12,
    borderWidth: 1,
    zIndex: 999,
  },
});
