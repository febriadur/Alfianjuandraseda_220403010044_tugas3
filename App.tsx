import React from 'react';
import { View, Text, TextInput, Image, Button, ScrollView } from 'react-native';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Selamat datang di Aplikasi Penjualan sepatu online</Text>
      <TextInput placeholder="Cari produk..." />
      <ScrollView>
        <Image
        source={{uri:'https://th.bing.com/th/id/OIP.KaLhskRhkT6XCumz4exz3QAAAA?rs=1&pid=ImgDetMaing'}}style={{width:200,height:200}}/>
        <Image
        source={{uri:'https://images.tokopedia.net/img/cache/700/VqbcmM/2023/1/30/d5e458f3-f153-4063-bf09-a7d71b818c76.jpg'}}style={{width:200,height:200}}/>
        <Image
        source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl2SHekI3_HDFWXaHMNoc010Dz4Qj1rFs29uDDWHS0OA&s'}}style={{width:200,height:200}}/>
      </ScrollView>
      <Button title="tambahkan ke-keranjang" onPress={() => ('Produk telah ditambahkan ke keranjang belanja')} />
    </View>
  );
};

export default App;