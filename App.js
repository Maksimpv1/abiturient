import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Button, Alert, TouchableHighlight } from 'react-native';

export default function App() {
  const handleClick = () => {
    console.log('Hi click')
  }
  const handleAlert = () => {
    Alert.alert("Title", "Main Message", [
      {text: "Да", onPress: ()=> console.log("Yes")},
      {text: "Отмена", onPress: ()=> console.log("No")}
    ])
  }
  const handleAlertTwo = () => {
    Alert.prompt("Title", "Main Message", text => console.log(text))
  }
  return (
      <View style={styles.container}>
        <SafeAreaView>
          <Text onPress={handleAlertTwo} >Hi</Text>
          <Button title={'Hierererw'}
            onPress={handleAlert}
            style={styles.button} />
            <TouchableHighlight onPress={handleClick}>
              <Image/>
            </TouchableHighlight>
        </SafeAreaView>
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
