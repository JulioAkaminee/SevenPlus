import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Animated, Image, TouchableOpacity, Easing, TouchableWithoutFeedback } from 'react-native';
import { Checkbox } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import logoSevenPlus from '../../assets/images/logoSevenPlusPreta.png'
import userIcon from '../../assets/images/usuarioIcon.png';
import Header from '../components/header/header';
import Navegacao from '../components/barraNavegacao/navegacao';

export default function AdicionarFilmes({ navigation }) {
    const [menuVisivel, setMenuVisivel] = useState(false);
    const [menuUsuarioVisivel, setMenuUsuarioVisivel] = useState(false);
    const [animacaoMenu, setAnimacaoMenu] = useState(new Animated.Value(0));
    const [categorias, setCategorias] = useState([]);
    const [form, setForm] = useState({
        titulo: '',
        descricao: '',
        url_video: '',
        capa: '',
        data_lancamento: '',
        categorias: [],
    });
    const [erros, setErros] = useState({});
    const [showDatePicker, setShowDatePicker] = useState(false);

    useEffect(() => {
        fetch('http://10.0.0.179:3010/adicionarfilmes/categorias')
            .then(response => response.json())
            .then(data => setCategorias(data))
            .catch(err => console.error('Erro:', err));
    }, []);

    const validarFormulario = () => {
        let errosValidacao = {};
        if (!form.titulo) errosValidacao.titulo = 'Título é obrigatório';
        if (!form.descricao) errosValidacao.descricao = 'Descrição é obrigatória';
        if (!form.url_video) errosValidacao.url_video = 'URL do vídeo é obrigatória';
        if (!form.capa) errosValidacao.capa = 'URL da capa é obrigatória';
        if (!form.data_lancamento) errosValidacao.data_lancamento = 'Data de lançamento é obrigatória';
        if (!/\d{4}-\d{2}-\d{2}/.test(form.data_lancamento)) errosValidacao.data_lancamento = 'Data de lançamento inválida (formato: YYYY-MM-DD)';

        setErros(errosValidacao);
        return Object.keys(errosValidacao).length === 0;
    };

    const handleSubmit = () => {
        if (!validarFormulario()) return;

        fetch('http://10.0.0.179:3010/adicionarfilmes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        })
            .then(response => response.json())
            .then(() => {
                alert('Filme cadastrado com sucesso!');
                setForm({
                    titulo: '',
                    descricao: '',
                    url_video: '',
                    capa: '',
                    data_lancamento: '',
                    categorias: [],
                });
            })
            .catch(err => console.error('Erro:', err));
    };

    const toggleCategoria = (id) => {
        setForm(prevForm => {
            const categoriasAtualizadas = prevForm.categorias.includes(id)
                ? prevForm.categorias.filter(catId => catId !== id)
                : [...prevForm.categorias, id];

            return { ...prevForm, categorias: categoriasAtualizadas };
        });
    };

    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || form.data_lancamento;
        setShowDatePicker(false);
        setForm({ ...form, data_lancamento: currentDate.toISOString().split('T')[0] });
    };

    return (
        <>
            <Header navigation={navigation} />
            <ScrollView contentContainerStyle={styles.container} >
                <Text style={styles.title}>Cadastro de Filmes</Text>

                {erros.titulo && <Text style={styles.errorText}>{erros.titulo}</Text>}
                <TextInput
                    style={[styles.input, erros.titulo && styles.inputError]}
                    placeholder="Título"
                    value={form.titulo}
                    onChangeText={(text) => setForm({ ...form, titulo: text })}
                    multiline
                />

                {erros.descricao && <Text style={styles.errorText}>{erros.descricao}</Text>}
                <TextInput
                    style={[styles.input, erros.descricao && styles.inputError]}
                    placeholder="Descrição"
                    value={form.descricao}
                    onChangeText={(text) => setForm({ ...form, descricao: text })}
                    multiline
                />

                {erros.url_video && <Text style={styles.errorText}>{erros.url_video}</Text>}
                <TextInput
                    style={[styles.input, erros.url_video && styles.inputError]}
                    placeholder="URL do Vídeo"
                    value={form.url_video}
                    onChangeText={(text) => setForm({ ...form, url_video: text })}
                    multiline
                />

                {erros.capa && <Text style={styles.errorText}>{erros.capa}</Text>}
                <TextInput
                    style={[styles.input, erros.capa && styles.inputError]}
                    placeholder="URL da Capa"
                    value={form.capa}
                    onChangeText={(text) => setForm({ ...form, capa: text })}
                    multiline
                />

                {erros.data_lancamento && <Text style={styles.errorText}>{erros.data_lancamento}</Text>}
                <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                    <TextInput
                        style={[styles.input, erros.data_lancamento && styles.inputError]}
                        placeholder="Data de Lançamento (YYYY-MM-DD)"
                        value={form.data_lancamento}
                        editable={false}
                    />
                </TouchableOpacity>

                {showDatePicker && (
                    <DateTimePicker
                        value={new Date(form.data_lancamento || Date.now())}
                        mode="date"
                        locale="pt-br"
                        display="default"
                        onChange={handleDateChange}
                    />
                )}

                <Text style={styles.subtitle}>Categorias</Text>
                <ScrollView  style={{ borderRadius: 15, backgroundColor:'red'}}>
                    {categorias.map(categoria => (
                        <View key={categoria.id} style={styles.containerCategoria}>
                            <View style={styles.checkboxContainer}>
                                <Checkbox
                                    status={form.categorias.includes(categoria.id) ? 'checked' : 'unchecked'}
                                    onPress={() => toggleCategoria(categoria.id)}
                                />
                                <Text style={styles.nameCategoria}>{categoria.nome}</Text>
                            </View>
                        </View>
                    ))}
                </ScrollView>

                <TouchableOpacity onPress={handleSubmit}>
                    <Text style={styles.btnCadastrar}>Cadastrar</Text>
                </TouchableOpacity>
            </ScrollView>
            <Navegacao navigation={navigation} />
        </>
    );
}

const styles = StyleSheet.create({
    container: { padding: 20, backgroundColor: '#222831',},
    nameCategoria: { color: 'black', fontFamily: 'Epilogue-Medium' },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: 'white' },
    containerCategoria: { backgroundColor: 'white', display: 'flex', justifyContent: 'center', height:50 },
    subtitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: 'white' },
    input: { borderWidth: 1, padding: 10, marginBottom: 15, borderRadius: 5, color: 'black', backgroundColor: 'white' },
    inputError: { borderColor: 'white' },
    checkboxContainer: { flexDirection: 'row', alignItems: 'center', marginHorizontal: 10, height: 60 },
    logo: { width: 70, height: 70 },
    header: { display: 'flex', flexDirection: 'row', paddingTop: 40, alignItems: 'center', justifyContent: 'space-between', padding: 10, backgroundColor: '#1E1E26' },
    containerUsuario: { display: 'flex', flexDirection: 'row', alignItems: 'center' },
    btnCadastrar: { textAlign: 'center', padding: 15, backgroundColor: '#0066cc', color: '#fff', borderRadius: 5, marginTop: 20 },
    errorText: { color: 'red', fontSize: 12 },
});
