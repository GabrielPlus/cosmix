import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/Feather';

export default function Onboarding() {
  const router = useRouter();

  return (
    <LinearGradient colors={['#F8995A', '#F26C3B']} style={styles.container}>
      <View style={styles.content}>
        <Icon name="zap" size={48} color="#fff" />
        <Text style={styles.logo}>Comix</Text>
        <Text style={styles.subtitle}>
        Beauty that fits your lifestyle — anytime, anywhere.
        </Text>

        <TouchableOpacity style={styles.button} onPress={() => router.replace('/(tabs)')}>
          <Text style={styles.buttonText}>View as Guest</Text>
        </TouchableOpacity>

        <View style={styles.authOptions}>
           <TouchableOpacity onPress={() => router.push('/login')}> {/* not implemented yet */}
            <Text style={styles.linkText}>Log In</Text>
          </TouchableOpacity>

          <Text style={styles.separator}>•</Text>

          <TouchableOpacity onPress={() => router.push('/register')}> {/* not implemented yet */}
            <Text style={styles.linkText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  logo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginVertical: 20,
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 30,
    marginTop: 30,
  },
  buttonText: {
    color: '#F26C3B',
    fontWeight: '600',
    fontSize: 16,
  },
  authOptions: {
    flexDirection: 'row',
    marginTop: 25,
  },
  linkText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '500',
    marginHorizontal: 10,
    textDecorationLine: 'underline',
  },
  separator: {
    color: '#fff',
    fontSize: 18,
  },
});
