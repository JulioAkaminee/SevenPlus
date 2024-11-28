import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      background: 'white'
    },
    logo:{
        width: 70,
        height: 70, 
        
       
    },
    header:{
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 40,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    
    },
    containerUsuario:{
        display:'flex',
        flexDirection: 'row',
        alignItems: 'center',
       
    },
    icon:{
        marginLeft: 15,
        color: 'black',
       
    },
    menu:{
        position: 'absolute',
        top: 0,
        right: 0,
        width: 250,
        height: '100%',
        backgroundColor: '#707070', // Fundo translúcido
        paddingTop: 100,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 1,
        shadowRadius: 10,
        zIndex: 999
        
    },
    textItemMenu:{
        textAlign: 'center',
        fontSize: 25,
        margin: 10,
        color: 'white'
    },
    fundoMenu: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semitransparente
        zIndex: 998, // Fica atrás do menu
      },
      imagemFilme:{
        width: 250,
        height:140,

        margin: 5
      },
      containerFilmes:{
        display:'flex',
        flexDirection: 'row',
        
      },
      textCategoriaFilme:{
        margin: 10,
        fontSize: 24,
        fontWeight:'bold',
        
      }
   
   
  });

  export default styles;
  