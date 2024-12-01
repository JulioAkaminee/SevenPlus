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
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor:'#1B5F96',
        marginBottom: 15
    
    },
    containerUsuario:{
        display:'flex',
        flexDirection: 'row',
        alignItems: 'center',
       
    },
    icon:{
        marginLeft: 15,
        color: 'white',
       
    },
    menu:{
        position: 'absolute',
        top: 0,
        right: 0,
        width: 200,
        height: '100%',
        backgroundColor: '#ffff', // Fundo translúcido
        paddingTop: 100,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 1,
        shadowRadius: 10,
        zIndex: 999
        
    },
    menuUsuario:{
      backgroundColor: 'white',
      zIndex: 9999,
      position: 'absolute',
      top: 120,
      left: 216,
      width: 150,
      padding: 10,
      display: 'flex',
  
    },
    textMenuUsuario:{
      textAlign: 'center',
      margin: 5,
      fontSize: 18
    },
    seta: {
      width: 0,
      height: 0,
      borderLeftWidth: 10,
      borderRightWidth: 10,
      borderBottomWidth: 10,
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: 'white', 
      alignSelf: 'center',
      marginBottom: 0,
      position: 'absolute',
      top: -10
    },
    textItemMenu:{
        textAlign: 'center',
        fontSize: 25,
        margin: 10,
        color: 'black'
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
        margin: 10
        
      },
      textCategoriaFilme:{
        marginLeft: 15,
        fontSize: 24,
        fontWeight:'bold',
    
      
        
      },
     containerMenuText:{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
     },
     iconMenu:{
      color:'black'
     },
     footer: {
      backgroundColor: '#1B5F96',
      width: '100%',
      minHeight: 30, 
      padding: 10, 
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center', 
      flexDirection: 'row',
    },
     containerIconFooter:{
      alignItems:'center',
  
     }

   
   
  });

  export default styles;
  