import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
     
    },
    background:{
      flex:1,
      backgroundColor:'#222831'
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
        backgroundColor:'#1E1E26',
      
    
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
      backgroundColor: '#1E1E26',
      zIndex: 9999,
      position: 'absolute',
      bottom: 0,
      width: '100%',
      padding: 10,
      display: 'flex',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      height: 150,
      display:'flex',
      alignItems:'center',
      justifyContent:'center'
  
    },
    textMenuUsuario:{
      textAlign: 'center',
      margin: 5,
      fontSize: 18,
      color: 'white'
    },
    textMenuUsuarioExit:{
      textAlign: 'center',
      margin: 5,
      fontSize: 18,
      color: '#FF4C4C'
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
        backgroundColor: 'rgba(0, 0, 0, 0.8)', // Semitransparente
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
        color:'white'
    
      
        
      },
     containerMenuText:{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
     },
     iconMenu:{
      color:'black'
     },
    

   
   
  });

  export default styles;
  