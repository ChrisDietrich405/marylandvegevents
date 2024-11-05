import React, { useCallback, useState } from 'react';
import { Link, Stack } from 'expo-router';
import { View, StyleSheet, Image, Linking } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Button, Text, Card, ButtonGroup } from '@rneui/themed';

export default function HomeComponent() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const options = ['Maryland Events', 'D.C. Events'];

  const navigation = useNavigation();

  const routes = [
    { name: 'MarylandEvents', params: { name: 'MarylandEvents' } },
    { name: 'DCEvents', params: { name: 'DCEvents' } }
  ];

  const styles = StyleSheet.create({
    wrapper: {
      marginTop: "100px",
      paddingTop: 8,
      background: "blue"
    },
    fonts: {
      marginBottom: 8,
    },
    user: {
      flexDirection: 'column',
      marginBottom: 6,
      minWidth: "100%",
      width: "100%"
    },
    // image: {
    //   width: 30,
    //   height: 30,
    //   marginRight: 10,
    // },
    name: {
      fontSize: 14,
      marginTop: 5,
    },
  });

  const events = [
    {
      name: 'Earthsave Presents Monthly Potluck',
      date: "10/30/24",
      url: 'https://www.facebook.com/events/537953398951385'
    },
    {
      name: 'Social Happy Hour',
      date: "11/4/24",
      url: 'https://www.facebook.com/events/914804310016943'
    },

  ];

  const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);

    return <Button title={children} onPress={handlePress} />;
  };

  return (
    <View style={styles.wrapper}>
      <Link href={{ pathname: 'MarylandEvents', params: { name: 'MarylandEvents' } }}>Go to Details</Link>
      <Text h2 style={{ textAlign: "center" }}>Maryland/DC Veg Events</Text>
      <ButtonGroup
        buttons={options}
        selectedIndex={selectedIndex}
        onPress={(value) => {
          setSelectedIndex(value);
          const { name, params } = routes[value];
          navigation.navigate(name, params);
        }}
        containerStyle={{ marginBottom: 20 }}
      />
      {events.map((u, i) => {
        return (
          <>

            <Card key={i} style={{ display: "flex", flexDirection: "column" }}>
              <View key={i} style={styles.user}>
                {/* <Image
                style={styles.image}
                resizeMode="cover"
                source={{ uri: u.avatar }}
              /> */}
                <Text style={styles.name}>{u.name}</Text>
                <Text style={styles.name}>{u.date}</Text>
                <OpenURLButton url={u.url}>Learn More </OpenURLButton>
              </View>

            </Card>
          </>
        )
      })}


    </View>
  );
}

