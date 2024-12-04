
import { SafeAreaView, View, Text, Image, ImageBackground, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from '../styles/loginOuCadastrarStyle'
import CarregarFontes from './carregarFontes';

export default function LoginOuCadastrar({ navigation }){
    return(
        <>
        <CarregarFontes>
        <SafeAreaView style={styles.container}>

        <View style={styles.containerImage}>
            <Image style={styles.logo} source={require('../../assets/images/logoSevenPlusPreta.png')}/>
        </View>
        <View style={styles.containerInfos}>
            <Text style={styles.tituloBemVindo}>Seja Bem Vindo</Text> 
            <Text style={styles.textoBemVindo}>Descubra um universo de filmes e séries na palma da sua mão! No <Text style={{fontFamily:'Epilogue-ExtraBold'}}>SevenPlus</Text>, você tem acesso ao melhor do entretenimento, com opções para todos os gostos, dos grandes clássicos aos lançamentos mais esperados.
            Crie sua lista, explore novos gêneros e aproveite momentos incríveis sem sair de casa. Estamos felizes por ter você aqui!</Text>
            <Text style={styles.textoPipoca}>Prepare a pipoca e comece agora mesmo! 🍿</Text>

            
            <View style={styles.containerButtons}>
            <TouchableOpacity onPress={()=> navigation.navigate('Login')} style={styles.containerButton}>
                <Text style={styles.btnEntrar}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('Cadastro')} style={styles.containerButton}>
                <Text style={styles.btnCadastrar}>Cadastrar</Text>
            </TouchableOpacity>
            </View>
        </View>
        </SafeAreaView>
        </CarregarFontes>
        </>
    )
}