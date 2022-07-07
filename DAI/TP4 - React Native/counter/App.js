import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useState, Button } from 'react-native';

export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <Text>{counter}</Text>
      <Button onClick={() => setCounter(++counter)}> + </Button>
      <Button onClick={() => setCounter(--counter)}> - </Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
