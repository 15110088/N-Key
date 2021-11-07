import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { multiply,add, GetNKey, nghiaText } from 'nkey';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    add(3, 7).then(setResult);
    GetNKey().then(req=>console.log(req));

  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      
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
