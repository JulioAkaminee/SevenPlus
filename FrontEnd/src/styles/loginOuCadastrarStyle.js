import { StyleSheet } from "react-native";
import CarregarFontes from "../pages/carregarFontes";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    logo:{
        width:  200,
        height: 200,
        objectFit:'contain'
    },
    containerInfos:{
        backgroundColor:'#071731',
        height:'58%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
      
     
      
    },
    containerImage:{
        height:'42%',
        backgroundColor:'white',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    tituloBemVindo:{
        fontFamily: 'Epilogue-Bold',
        color:'white',
        marginLeft:30,
        fontSize: 30,
        marginTop: 25
    },
    textoBemVindo:{
        color:'white',
        marginLeft:30,
        fontSize: 16,
        marginTop: 10,
        fontFamily: 'Epilogue-Medium',
        width:"80%",
        lineHeight: 23
    },
    textoPipoca:{
        fontFamily:'Epilogue-ExtraBold',
        color:'white',
        width:"80%",
        marginLeft:30,
        fontSize: 16,
        marginTop: 10,
    },
    containerButtons:{
      display:'flex',
      flexDirection:'row',
      marginLeft:10,
      marginTop: 20,
      justifyContent:'space-around'
  
       
    },
    btnCadastrar:{
        color:'black',
        backgroundColor:'white',
        width:150,
        textAlign:'center',
        paddingTop:15,
        paddingBottom:15,
        paddingLeft:20,
        paddingRight:20,
        fontFamily:'Epilogue-ExtraBold',
        borderRadius: 10,
        fontSize:15,
        marginRight:15       
    },
    btnEntrar:{
        color:'white',
        backgroundColor:'black',
        width:150,
        textAlign:'center',
        paddingTop:15,
        paddingBottom:15,
        paddingLeft:20,
        paddingRight:20,
        fontFamily:'Epilogue-ExtraBold',
        borderRadius: 10,
        fontSize:15,
        
 
    }
   
})

export default styles;