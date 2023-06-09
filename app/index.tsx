import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState } from 'react'

export default function Page() {

  type Counters ={
    countCarne: number,
    countPizza: number,
    countQueijo: number,
    countFrango: number,
  }
  const [counters, setCounters] = useState({
    countCarne: 0,
    countPizza: 0,
    countQueijo: 0,
    countFrango: 0,
  });

  const handleClick = (type: keyof Counters) => {
    setCounters((prevCounters) => ({
      ...prevCounters,
      [type]: prevCounters[type] + 1,
    }));
  }
  return (
    <View style={styles.container}>
      <View style={styles.row}>

        <View style={styles.square}>
          <Text style={styles.title}>Pastel: Carne </Text>
          <TouchableOpacity style={styles.button} onPress={ ()=> handleClick('countCarne')}>
            <Image source={require('../public/pastel_carne.jpg')} style={styles.buttonImage}></Image>
          </TouchableOpacity>

          <Text style={styles.textCounter}>Contagem:</Text>
          <Text style={styles.textCounterNumber}>{counters.countCarne}</Text>
        </View>
        <View style={styles.square}>
          <Text style={styles.title}>Pastel: Pizza </Text>
          <TouchableOpacity style={styles.button} onPress={ ()=> handleClick('countPizza')}>
            <Image source={require('../public/pastel_pizza.jpg')} style={styles.buttonImage}></Image>
          </TouchableOpacity>

          <Text style={styles.textCounter}>Contagem:</Text>
          <Text style={styles.textCounterNumber}>{counters.countPizza}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.square}>
          <Text style={styles.title}>Pastel: Frango </Text>
          <TouchableOpacity style={styles.button} onPress={ ()=> handleClick('countFrango')}>
          <Image source={require('../public/pastel_frango.jpg')} style={styles.buttonImage}></Image>
        </TouchableOpacity>

        <Text style={styles.textCounter}>Contagem:</Text>
        <Text style={styles.textCounterNumber}>{counters.countFrango}</Text>
      </View>
      <View style={styles.square}>
        <Text style={styles.title}>Pastel: Queijo </Text>
        <TouchableOpacity style={styles.button} onPress={ ()=> handleClick('countQueijo')}>
          <Image source={require('../public/pastel_queijo.jpg')} style={styles.buttonImage}></Image>
        </TouchableOpacity>

        <Text style={styles.textCounter}>Contagem:</Text>
        <Text style={styles.textCounterNumber}>{counters.countQueijo}</Text>
      </View>
    </View>
    </View >
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
  row: {
    flexDirection: 'row'
  },
  square: {
    flex: 1,
    alignItems: 'center',
    width: 150,
    height: 250,
    backgroundColor: '#eff3fb',
    margin: 10,
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  buttonImage: {
    width: 130,
    height: 130,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10
  },
  textCounter: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10
  },
  textCounterNumber: {
    fontSize: 30,
    fontWeight: 'bold',
  },

});
