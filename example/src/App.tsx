import * as React from 'react';

import {
  StyleSheet,
  View,
  Text,
  Button,
  PermissionsAndroid,
} from 'react-native';
import ContactsWrapper from 'react-native-contacts-wrapper';

export default function App() {
  const [contact, setContact] = React.useState<string | undefined>();

  const onSelect = async () => {
    const granted = await PermissionsAndroid.request(
      'android.permission.READ_CONTACTS'
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const _contact = await ContactsWrapper.getContact();
      setContact(_contact);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Result: {contact}</Text>
      <Button title="select contact" onPress={onSelect} />
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
