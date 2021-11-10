import * as React from 'react';

import { StyleSheet, View, Text, Button } from 'react-native';
import { multiply,add, GetNKey, nghiaText, GetSDE,GetToken, GetIIS } from 'nkey';
//new viewe sion
export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    add(3, 7).then(setResult);

  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <Button title="GetSDE" onPress={()=>GetSDE().then(req=>console.log(req))}></Button>
      <Button title="GetIIS" onPress={()=>GetIIS().then(req=>console.log(req))}></Button>
      <Button title="token" onPress={()=>console.log(GetToken())}></Button>

      {nghiaText()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
