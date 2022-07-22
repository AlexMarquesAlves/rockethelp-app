import { View, Text, StyleSheet } from 'react-native';

export const Details = () => {
  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>Details</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#312e38',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
  },
});
