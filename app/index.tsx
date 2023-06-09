import { StyleSheet, Text, View, Image } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Seja bem vindo! </Text>
        <Text style={styles.subtitle}>app de teste!</Text>

        <Image
          source={require('../public/gato.jpg')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "#F5F5DC"
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
