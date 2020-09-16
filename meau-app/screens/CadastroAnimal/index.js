import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
} from 'react-native';
import { Button } from 'react-native-paper';

import { TextInputApp, RadioButtonApp, CheckboxApp } from '../../components/AppForms';

const acao = [
    { name: 'Adotar', buttonText: 'Colocar para Adotar' },
    { name: 'Apadrinhar', buttonText: 'Procurar Padrinho' },
    { name: 'Ajuda', buttonText: 'Procurar Ajuda' }
];
const especies = [
    { id: 1, name: 'gato' },
    { id: 2, name: 'cachorro' }
];
const sexo = [
    { id: 1, name: 'Macho' },
    { id: 2, name: 'Femea' }
];
const porte = [
    { id: 1, name: 'Pequeno' },
    { id: 2, name: 'Médio' },
    { id: 3, name: 'Grande' }];
const idade = [
    { id: 1, name: 'filhote' },
    { id: 2, name: 'Adulto' },
    { id: 3, name: 'Idoso' }
];
const temperamento = [
    { name: 'Brincalhão', checked: false },
    { name: 'Tímido', checked: false },
    { name: 'Calmo', checked: false },
    { name: 'Guarda', checked: false },
    { name: 'Amoroso', checked: false },
    { name: 'Preguiçoso', checked: false }
];
const saude = [
    { name: 'vacinado', checked: false },
    { name: 'Castrado', checked: false },
    { name: 'Vermifugado', checked: false },
    { name: 'doente', checked: false }
];
const adocao = [
    { name: 'Termo de adoção', checked: false },
    { name: 'Fotos da casa', checked: false },
    { name: 'Visita prévia ao animal', checked: false },
    { name: 'Acompanhamento pós adoção', checked: false }
];
const tempo = [
    { name: '1 mês' },
    { name: '3 meses' },
    { name: '6 meses' }
];

const ajuda = [
    { name: 'Alimento', checked: false },
    { name: 'Auxílio financeiro', checked: false },
    { name: 'Medicamento', checked: false },
    { name: 'Objetos', checked: false }
];

const apadrinhar = [
    { name: 'Termo de apadrinhamento', checked: false },
    { name: 'Auxilio financeiro', checked: false },
    { name: 'Visitas ao animal', checked: false }
];

class CadastroAnimal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            acao: [
                { name: 'Adotar', checked: false },
                { name: 'Apadrinhar', checked: false },
                { name: 'Ajudar', checked: false }
            ],
            especie: { id: 0, name: '' },
            sexo: { id: 0, name: '' },
            porte: { id: 0, name: '' },
            idade: { id: 0, name: '' },
            temperamento: [ //radio box
                { name: 'Brincalhão', checked: false, extras: null, hasExtras: false },
                { name: 'Tímido', checked: false, extras: null, hasExtras: false },
                { name: 'Calmo', checked: false, extras: null, hasExtras: false },
                { name: 'Guarda', checked: false, extras: null, hasExtras: false },
                { name: 'Amoroso', checked: false, extras: null, hasExtras: false },
                { name: 'Preguiçoso', checked: false, extras: null, hasExtras: false }
            ],
            saude: [ //radio box
                { name: 'vacinado', checked: false, extras: null, hasExtras: false },
                { name: 'Castrado', checked: false, extras: null, hasExtras: false },
                { name: 'Vermifugado', checked: false, extras: null, hasExtras: false },
                { name: 'Doente', checked: false, extras: '', hasExtras: true }
            ],
            adocao: [ //check box
                { name: 'Termo de adoção', checked: false, extra: null, hasExtras: false },
                { name: 'Fotos da casa', checked: false, extra: null, hasExtras: false },
                { name: 'Visita prévia ao animal', checked: false, extra: null, hasExtras: false },
                { name: 'Acompanhamento pós adoção', checked: false, extra: '', hasExtras: true },
            ],
            ajuda: [ //check box
                { name: 'Alimento', checked: false, extra: null, hasExtras: false },
                { name: 'Auxílio financeiro', checked: false, extra: null, hasExtras: false },
                { name: 'Medicamento', checked: false, extra: null, hasExtras: false },
                { name: 'Objetos', checked: false, extra: '', hasExtras: true }
            ],
            apadrinhar: [ // check box
                { name: 'Termo de apadrinhamento', checked: false },
                { name: 'Auxilio financeiro', checked: false },
                { name: 'Visitas ao animal', checked: false }
            ],
        };
        this.handlePress = this.handlePress.bind(this);
    }
    handlePress() {
        console.log('clicou')
    }
    renderTitle(){
        if (this.state.acao[0].checked) {
            return (
                <View>
                    <Text>Adoção</Text>
                </View>
            );
        }
        if (this.state.acao[1].checked) {
            return (
                <View>
                    <Button>Apadrinhar</Button>
                </View>
            );
        }
        if (this.state.acao[2].checked) {
            return (
                <View>
                    <Button>Ajudar</Button>
                </View>
            );
        }
    }

    renderSubmitButton() {
        // switch (this.state.acao) {
        //     case 'Adotar':
        //         return (
        //             <View>
        //                 <Button>Colocar para adoção</Button>
        //             </View>
        //         );
        //     case 'Apadrinhar':
        //         return (
        //             <View>
        //                 <Button>Procurar Padrinho</Button>
        //             </View>
        //         );
        //     case 'Ajudar':
        //         return (
        //             <View>
        //                 <Button>Procurar ajuda</Button>
        //             </View>
        //         );
        //     default:
        //         return (
        //             <View></View>
        //         );
        // }
        if (this.state.acao[0].checked) {
            return (
                <View>
                    <Button>Colocar para adoção</Button>
                </View>
            );
        }
        if (this.state.acao[1].checked) {
            return (
                <View>
                    <Button>Procurar Padrinhos</Button>
                </View>
            );
        }
        if (this.state.acao[2].checked) {
            return (
                <View>
                    <Button>Procurar Ajuda</Button>
                </View>
            );
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text> Tenho interesse em cadastrar o animal para:</Text>
                </View>
                <View>
                    <Button onPress={this.handlePress}>Adoção</Button>
                </View>
                <View>
                    <Button onPress={this.handlePress}>Apadrinhar</Button>
                </View>
                <View>
                    <Button onPress={this.handlePress}>Ajuda</Button>
                </View>
                <View>
                    {this.renderTitle()}
                    <TextInputApp name='Nome' />

                    <RadioButtonApp name='Espécie' values={especies} />
                    <RadioButtonApp name='Sexo' values={sexo} />
                    <RadioButtonApp name='Porte' values={porte} />
                    <RadioButtonApp name='Idade' values={idade} />

                    <CheckboxApp values={temperamento} name='Temperamento' />
                    <CheckboxApp values={saude} name='Saúde' />

                    <TextInputApp name='Doenças do animal' />

                    <CheckboxApp values={adocao} name='Exigências para adoção' />
                    <RadioButtonApp values={tempo} name='' />

                    <CheckboxApp values={apadrinhar} name='Exigência para apadrinhamento' />

                    <CheckboxApp values={ajuda} name='Necessidades do animal' />

                    <TextInputApp name='sobre o animal' />
                </View>
                {this.renderSubmitButton()}
            </View>
        );
    }
};

export default CadastroAnimal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },

    canvasContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 0,
        marginTop: 0
    },
    canvas: {
        alignItems: "center"
    }
});