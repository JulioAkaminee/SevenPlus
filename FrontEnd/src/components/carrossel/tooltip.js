import React from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import styles from '../../styles/homeStyle'; 

const Tooltip = ({ abrirMenuUsuario }) => {  
    return (
        <>
            <TouchableWithoutFeedback onPress={abrirMenuUsuario}>
                <View style={styles.fundoMenu} />
            </TouchableWithoutFeedback>
            <View style={styles.menuUsuario}>
                <View style={styles.seta}></View>
                <TouchableOpacity>
                    <Text style={styles.textMenuUsuario}>Configurações</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.textMenuUsuario}>Favoritos</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

export default Tooltip;
