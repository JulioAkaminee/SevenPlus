import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,

    },
    background: {
      flex: 1,
      width: '100%',
     
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
        marginLeft: 15
    },
    menu:{
        position: 'absolute',
        top: 0,
        left: 0,
        width: 250,
        height: '100%',
        backgroundColor: '#707070', // Fundo translúcido
        paddingTop: 100,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        
    },
    textItemMenu:{
        textAlign: 'center',
        fontFamily: 'MemoirDisplay',
        fontSize: 25,
        margin: 10,
        color: 'white'
    }
   
   
  });

  export default styles;
  