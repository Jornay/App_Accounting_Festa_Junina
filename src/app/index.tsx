import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { useFonts, Roboto_500Medium } from '@expo-google-fonts/roboto';
import React, { useState } from 'react'

type Counter = {
  id: keyof Counters,
  title: string,
  image: any,
}

type Counters = {
  countCarne: number,
  countPizza: number,
  countQueijo: number,
  countFrango: number,
}

const countersList: Counter[] = [
  { id: 'countCarne', title: 'Pastel: Carne', image: require('../src/assets/images/pastel_carne.jpg') },
  { id: 'countPizza', title: 'Pastel: Pizza', image: require('../src/assets/images/pastel_pizza.jpg') },
  { id: 'countQueijo', title: 'Pastel: Queijo', image: require('../src/assets/images/pastel_queijo.jpg') },
  { id: 'countQueijo', title: 'Bebida: Refrigerante', image: require('../src/assets/images/pastel_queijo.jpg') },
  { id: 'countQueijo', title: 'Bebida: Cerveja', image: require('../src/assets/images/pastel_queijo.jpg') },
  { id: 'countQueijo', title: 'Bebida: DelVale', image: require('../src/assets/images/pastel_queijo.jpg') },
]

export default function Page() {
  const [counters, setCounters] = useState<Counters>({
    countCarne: 0,
    countPizza: 0,
    countQueijo: 0,
    countFrango: 0,
  });
  const [editCounts, setEditCounts] = useState<Partial<Counters>>({});

  let [fontsLoaded] = useFonts({
    Roboto_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleClick = (type: keyof Counters) => {
    setEditCounts((prevEditCounts) => ({
      ...prevEditCounts,
      [type]: counters[type] || 0,
    }));
  }

  const handleEdit = (type: keyof Counters) => {
    if (editCounts[type] !== undefined) {
      setCounters((prevCounters) => ({
        ...prevCounters,
        [type]: editCounts[type]!,
      }));
    }
    setEditCounts({});
  }

  const handleIncrement = (type: keyof Counters) => {
    setEditCounts((prevEditCounts) => ({
      ...prevEditCounts,
      [type]: (prevEditCounts[type] || counters[type] || 0) + 1,
    }));
  }

  const handleDecrement = (type: keyof Counters) => {
    setEditCounts((prevEditCounts) => ({
      ...prevEditCounts,
      [type]: ((prevEditCounts[type] || counters[type] || 0) ) - 1,
    }));
  }
  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titleCentral}>Festa Junina - Filhos do céu</Text>
      {countersList.map((counter, index) => (
        <View key={index} style={styles.row}>
          <View style={styles.square}>
            <Text style={styles.title}>{counter.title}</Text>
            <TouchableOpacity
              accessible
              accessibilityLabel={`Increase ${counter.title}`}
              style={styles.button}
              onPressIn={() => handleIncrement(counter.id)}>
              <Image source={counter.image} style={styles.buttonImage} />
            </TouchableOpacity>

            {editCounts[counter.id] !== undefined && (
              <Stepper
                value={editCounts[counter.id]!}
                onIncrement={() => handleIncrement(counter.id)}
                onDecrement={() => handleDecrement(counter.id)}
              />
            )}
            {editCounts[counter.id] === undefined && (
              <>
                <Text style={styles.textCounter}>Contagem:</Text>
                <Text style={styles.textCounterNumber}>{counters[counter.id]}</Text>
              </>
            )}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

type StepperProps = {
  value: number,
  onIncrement: () => void,
  onDecrement: () => void,
}

const Stepper = ({ value, onIncrement, onDecrement }: StepperProps) => {
  return (
    <View style={styles.stepperContainer}>
      <TouchableOpacity style={styles.stepperButton} onPress={onDecrement}>
        <Text style={styles.stepperButtonText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.stepperValue}>{value}</Text>
      <TouchableOpacity style={styles.stepperButton} onPress={onIncrement}>
        <Text style={styles.stepperButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eff3fb',
    paddingVertical: 20,
    marginTop: 30
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 20,
  },
  square: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 250,
    backgroundColor: '#F5FCFF',
    margin: 10,
    marginTop:0,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonImage: {
    width: 200,
    height: 120,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
    color: '#333',
    fontFamily: 'Roboto_500Medium',
  },
  titleCentral: {
    fontSize: 28,
    fontFamily: 'Roboto_500Medium',
    color: '#333',
    marginBottom: 20,
  },
  textCounter: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
  textCounterNumber: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
  },
  stepperContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  stepperButton: {
    backgroundColor: '#333',
    borderRadius: 5,
    padding: 5,
  },
  stepperButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  stepperValue: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 10,
    color: '#333',
  },
});
