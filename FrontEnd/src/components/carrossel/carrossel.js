import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');

const Carrossel = () => {
  const data = [
    { id: '1', imageUrl: 'https://pbs.twimg.com/media/FywYsv7XoAA8ebe.jpg:large' },
    { id: '2', imageUrl: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1F8EB623545FF22EE45B5EC8060B1977FD8132AC91D9EE7E9F56BFEBBE839641/scale?width=1200&aspectRatio=1.78&format=webp' },
    { id: '3', imageUrl: 'https://anatomiapop.com/wp-content/uploads/2018/08/Para-Todos-os-Garotos-que-J%C3%A1-Amei.jpg' },
    { id: '4', imageUrl: 'https://www.setelagoasnoticias.com.br/sig/www/openged/conteudos/16632/016632_6467dfe8bbe46_Copia_de_Copia_de_Imagem_Site_20230519T174518902.jpg?limite=1&w=760&h=500' },
  
  ];

  return (
    <View style={styles.container}>
      <Swiper autoplay={true} autoplayTimeout={3} showsPagination={true}>
        {data.map((item) => (
          <View key={item.id} style={styles.itemContainer}>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height:245
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width:390,
   
  },
  image: {
    width: 380,
    height: 200,
    borderRadius: 20,
  },
});

export default Carrossel;
