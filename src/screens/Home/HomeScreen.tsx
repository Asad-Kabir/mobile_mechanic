import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'context/ThemeContext';
import { useAuth } from 'context/AuthContext';
import { Button } from '@components/index';
import { hp, normalize, wp } from '@utils/responsive';
// import { useTheme, useAuth } from '@context';
// import { Button } from '@components';
// import { wp, hp, normalize } from '@utils/responsive';

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const { user } = useAuth();

  const services = [
    { id: 1, name: 'Car Service', icon: '🚗' },
    { id: 2, name: 'Bike Service', icon: '🏍️' },
    { id: 3, name: 'Emergency', icon: '🚨' },
    { id: 4, name: 'Towing', icon: '🚛' },
  ];

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={[styles.welcomeText, { color: theme.colors.text }]}>
          Welcome back, {user?.name}!
        </Text>
        <Text style={[styles.subtitle, { color: theme.colors.textSecondary }]}>
          What service do you need today?
        </Text>
      </View>

      <View style={styles.servicesContainer}>
        <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
          Our Services
        </Text>
        <View style={styles.servicesGrid}>
          {services.map((service) => (
            <TouchableOpacity
              key={service.id}
              style={[
                styles.serviceCard,
                { 
                  backgroundColor: theme.colors.surface,
                  borderColor: theme.colors.border,
                }
              ]}
              activeOpacity={0.7}
            >
              <Text style={styles.serviceIcon}>{service.icon}</Text>
              <Text style={[styles.serviceName, { color: theme.colors.text }]}>
                {service.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.quickActions}>
        <Button
          title="Book Service"
          onPress={() => {}}
          variant="primary"
          size="large"
          fullWidth
        />
        <Button
          title="View Profile"
          onPress={() => navigation.navigate('Profile' as never)}
          variant="outline"
          size="medium"
          fullWidth
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp(4),
  },
  header: {
    marginBottom: hp(3),
  },
  welcomeText: {
    fontSize: normalize(24),
    fontWeight: 'bold',
    marginBottom: hp(1),
  },
  subtitle: {
    fontSize: normalize(16),
  },
  servicesContainer: {
    marginBottom: hp(4),
  },
  sectionTitle: {
    fontSize: normalize(20),
    fontWeight: '600',
    marginBottom: hp(2),
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceCard: {
    width: '48%',
    padding: wp(4),
    borderRadius: 12,
    borderWidth: 1,
    alignItems: 'center',
    marginBottom: hp(2),
  },
  serviceIcon: {
    fontSize: normalize(32),
    marginBottom: hp(1),
  },
  serviceName: {
    fontSize: normalize(14),
    fontWeight: '500',
    textAlign: 'center',
  },
  quickActions: {
    gap: hp(2),
  },
});