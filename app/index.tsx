import { StyleSheet, Text, View, Button } from "react-native";
import React, {useState} from 'react'

export default function Page() {

  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Quantidade de cliques: {count} </Text>
        <Button title="Clique aqui" onPress={handleClick}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    padding: 24,
    backgroundColor: "#FFFFFF"
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    color: '#000080',

  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
