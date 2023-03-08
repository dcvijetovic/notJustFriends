import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Amplify, Auth } from "aws-amplify";
import awsconfig from "./src/aws-exports";
import Navigator from './src/navigation';
import { withAuthenticator } from 'aws-amplify-react-native';

Amplify.configure({ ...awsconfig, Analytics: { disabled: true } });

 function App() {

  // Auth.currentAuthenticatedUser().then((data)=>{})

  return (
    <View style={styles.container}>
      <Navigator/>

      <StatusBar style="auto" />
    </View>
  );
}

export default withAuthenticator(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
