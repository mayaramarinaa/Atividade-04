import { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

export default function App() {
  const [produtos, setProdutos] = useState([]);

  // roda uma vez quando o app abre
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women's%20clothing")
      .then(resposta => resposta.json())
      .then(dados => setProdutos(dados));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Moda Feminina</Text>

      <FlatList
        data={produtos}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.foto} />
            <View style={styles.info}>
              <Text style={styles.nome}>{item.title}</Text>
              <Text style={styles.preco}>$ {item.price}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 50, paddingHorizontal: 20 },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 15 },
  card: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  foto: { width: 80, height: 80, marginRight: 15, resizeMode: 'contain' },
  info: { flex: 1 },
  nome: { fontSize: 16 },
  preco: { fontSize: 16, fontWeight: 'bold', marginTop: 4 },
});
