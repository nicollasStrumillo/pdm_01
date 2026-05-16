import {Pressable, TextInput, StyleSheet, View, Text, FlatList } from 'react-native';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons'; 

interface Lembrate {
  id: string;
  texto: string;
}

export default function App() {
  const [lembrate, setLembrate] = useState<Lembrate | null>(null);
  const [lembrates, setLembrates] = useState<Lembrate[]>([]);
  const [modoEditando, setmodoEditando] = useState(false);

  const adicionar = () => {
    if(!lembrate) return;
    //criar um novo lembrete com id e text
    const novoLembrate: Lembrate = {
      id: Date.now().toString(),
      texto: lembrate?.texto || '',
    };
    // atualizar a list de lembrates 
    setLembrates([...lembrates, novoLembrate]);
    //atualizar a variavel de lembrate 
    setLembrate(null);
  }

  const remover = (lembrate: Lembrate) => {
    setLembrates(lembrates.filter(item => item.id !== lembrate.id));
  }

  const atualizar = () =>{
    if(lembrate && lembrate.texto.trim() !== ''){
      setLembrates(lembrates.map(item => item.id === lembrate.id ? lembrate : item));
      setLembrate(null);
      setmodoEditando(false);
    }
  }
  
  return (
    <View style={styles.container}>
      <TextInput
      style={styles.input}
        placeholder="Digite um lembrete..."
        value={lembrate?.texto || ''}
        onChangeText={(texto) => setLembrate({ ...lembrate, texto } as Lembrate)}
      />
      <Pressable
        style={styles.button}
        onPress={modoEditando ? () => atualizar() : () => adicionar()}>
        <AntDesign name="save" size={20} color="white" />
        <Text style={styles.buttonText}>{modoEditando ? 'Atualizar' : 'Adicionar'}</Text>
      </Pressable>
      <FlatList
        data={lembrates}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>{item.texto}</Text>
            <View style={styles.listItemButtons}>
              <Pressable onPress={() => remover(item)}>
                <AntDesign name="delete" size={20} color="red" />
              </Pressable>
              <Pressable onPress={() => {
                setLembrate(item);
                setmodoEditando(true);
              }}>
                <AntDesign name="edit" size={20} color="blue" />
              </Pressable>
            </View>
          </View>
        )}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 4,
    marginTop: 12,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  input: {
    height: 40,
    borderColor: 'green',
    borderWidth: 1,
    width: '80%',
    padding: 8,
    marginBottom: 12,
    textAlign: 'center',
    borderRadius: 4
  },
  listItem: {
    fontSize: 16,
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 4,
    borderRadius: 4,
    alignItems: 'center',
    flexDirection: 'row',
  },
  list: {
    borderWidth: 1,
    borderColor: '#222020',
    width: '80%',
    marginTop: 12,
    borderRadius: 4,
    padding: 8,
  },
  listItemText:{
    textAlign: 'center',
    width: '70%',
    fontSize: 16
  },
  listItemButtons:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 8,
    width: '30%',
  }
});
