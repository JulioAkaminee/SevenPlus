import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
     backgroundColor:'#071731'
   
    },
    background:{
      flex:1,
   
    },
    logo:{
        width: 60,
        height: 60, 
        borderRadius: 150,
     
        
       
    },
    logoSeven:{
      width:70,
      height:70,
      objectFit:'contain'
    },
    header:{
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 40,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor:'#07142A',
      
    
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
      backgroundColor: '#071731',
      zIndex: 9999,
      position: 'absolute',
      bottom: 0,
      width: '60%',
      right:0 ,
      padding: 10,
      gap: 15,

      height:' 100%',
      display:'flex',
      alignItems:'center'

    },
    textMenuUsuario:{
      textAlign: 'center',
      marginVertical: 5,
      fontSize: 18,
      color: 'white',
      marginLeft: 8
    },
    textMenuUsuarioExit:{
      textAlign: 'center',
      margin: 5,
      fontSize: 18,
      backgroundColor: '#E63946',
      color:'white',
      padding:10,
      paddingHorizontal:70,
      borderRadius: 10
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
     containerLogoMenuUser:{
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      gap: 10,
      marginTop:30,
      width:'100%',
      backgroundColor:'#07142A',
      padding:5,
      borderRadius: 10,
      marginBottom: 40
   
     },
     textNameUsuario:{
      color:'white',
      fontFamily: 'Epilogue-Medium',
      fontSize: 16
     },
     logoMenuUsuario:{
      width: 60,
      height: 60, 
      borderRadius: 150,

      
     
  },
  containerTextMenuUsuario:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center'
  }
    

   
   
  });

  export default styles;
  