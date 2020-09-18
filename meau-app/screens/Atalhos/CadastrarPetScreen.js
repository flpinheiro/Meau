import React, { Component } from "react";
import { ScrollView, StyleSheet, View, Text, Button, Alert } from "react-native";
import { RadioButton, TextInput  } from 'react-native-paper';
import { RadioButtonApp, CheckboxApp } from "../../components/AppForms";
import { especies, sexo, porte, idade, tempoAcompanhamento } from "../../domain/enum";


export default class CadastrarPetScreen extends Component {
  state = {
    acao: 0,

    nome: '',
    sobre: '',

    especie: 0,
    sexo: 0,
    porte: 0,
    idade: 0,

    brincalhao: false,
    timido: false,
    calmo: false,
    guarda: false,
    amoroso: false,
    preguicoso: false,

    vacinado: false,
    vermifugado: false,
    castrado: false,
    doente: false,
    doenca: '',

    termoAdocao: false,
    fotosCasa: false,
    visitaPrevia: false,
    acompanhamentoAposAdocao: false,
    tempoAcompanhamento: 0,

    termoApadrinhamento: false,
    auxilioFinanceiro: false,
    visitas: false,

    saude: false,
    objetos: false,
    alimento: false,

  }

  renderSelectionButton() {
    return (
      <View style={styles.lineContainer}>
        <Button
          color='#ffd358'
          title="Adoção"
          disabled={this.state.acao === 1}
          onPress={() => this.setState({ acao: 1 })}
        />

        <Button
          color='#ffd358'
          title="Apadrinhar"
          disabled={this.state.acao === 2}
          onPress={() => this.setState({ acao: 2 })}
        />

        <Button
          color='#ffd358'
          title="aJUDA"
          disabled={this.state.acao === 3}
          onPress={() => this.setState({ acao: 3 })}
        />

      </View>
    );
  };

  renderSubmitButton() {
    if (this.state.acao === 0) {
      return <></>;
    }
    if (this.state.acao === 1) {
      return (
        <View>
          <Button
            title="Colocar para adoção "
            onPress={() => console.log(this.state)}
          />
        </View>
      );
    }
    if (this.state.acao === 2) {
      return (
        <View>
          <Button
            title="Procurar Padrinho"
            onPress={() => console.log(this.state)}

          />
        </View>
      );
    }
  };

  renderEspecie() {
    return (
      <RadioButtonApp
        style={styles}
        value={this.state.especie}
        name='Espécie'
        onChange={value => this.setState({ especie: value })}
        list={especies}
      />
    );
  }

  renderSexo() {
    return (
      <RadioButtonApp
        style={styles}
        value={this.state.sexo}
        name='Sexo'
        onChange={value => this.setState({ sexo: value })}
        list={sexo}
      />
    );
  }

  renderPorte() {
    return (
      <RadioButtonApp
        style={styles}
        value={this.state.porte}
        name='Porte'
        onChange={value => this.setState({ porte: value })}
        list={porte}
      />
    );
  }

  renderIdade() {
    return (
      <RadioButtonApp
        style={styles}
        value={this.state.idade}
        name='idade'
        onChange={value => this.setState({ idade: value })}
        list={idade}
      />
    );
  }

  renderTemperamento() {
    return (

      <View>
        <Text style={styles.title}>Temperamento</Text>
        <View style={styles.lineContainer}>

          <CheckboxApp
            name='Brincalhão'
            onChange={value => this.setState({ brincalhao: value })} />

          <CheckboxApp
            name='Tímido'
            onChange={value => this.setState({ timido: value })} />

          <CheckboxApp
            name='Calmo'
            onChange={value => this.setState({ calmo: value })} />
        </View>
        <View style={styles.lineContainer}>
          <CheckboxApp
            name='Guarda'
            onChange={value => this.setState({ guarda: value })} />

          <CheckboxApp
            name='Amoroso'
            onChange={value => this.setState({ amoroso: value })} />

          <CheckboxApp
            name='Preguiçoso'
            onChange={value => this.setState({ preguicoso: value })} />
        </View>
      </View>
    );
  }

  renderSaude() {
    return (
      <View>
        <Text style={styles.title}>Saúde</Text>
        <View style={styles.lineContainer}>
          <CheckboxApp
            name='Vacinado'
            onChange={value => this.setState({ vacinado: value })} />

          <CheckboxApp
            name='Vermifugado'
            onChange={value => this.setState({ vermifugado: value })} />

        </View>
        <View style={styles.lineContainer}>
          <CheckboxApp
            name='Castrado'
            onChange={value => this.setState({ castrado: value })} />

          <CheckboxApp
            name='Doente'
            onChange={value => this.setState({ doente: value })} />

        </View>
        <TextInput
          style={styles.textInput}
          disabled={!this.state.doente}
          onChangeText={text => this.setState({ doenca: text })}
          value={this.state.doenca}
        />
      </View>

    );
  }

  renderExigenciaAdocao() {
    return (
      <View>
        <Text style={styles.title}>Exigência para Adoção</Text>
        <View style={styles.lineContainer}>
          <CheckboxApp
            name='Termo de Adoção'
            onChange={value => this.setState({ termoAdocao: value })} />
        </View>

        <View style={styles.lineContainer}>
          <CheckboxApp
            name='Fotos da casa'
            onChange={value => this.setState({ fotosCasa: value })} />
        </View>

        <View style={styles.lineContainer}>
          <CheckboxApp
            name='Visita Prévia'
            onChange={value => this.setState({ visitaPrevia: value })} />
        </View>

        <View style={styles.lineContainer}>
          <CheckboxApp
            name='Acompanhamento após Adoção'
            onChange={value => this.setState({ acompanhamentoAposAdocao: value })} />
        </View>

        <View style={styles.lineContainer}></View>
        <RadioButtonApp
          disabled={!this.state.acompanhamentoAposAdocao}
          value={this.state.tempoAcompanhamento}
          name=''
          onChange={value => this.setState({ tempoAcompanhamento: value })}
          list={tempoAcompanhamento}
        />
      </View>
    );
  }

  renderExigenciaApadrinhamento() {
    return (
      <View>
        <Text style={styles.title}>Exigência para Apadrinhamento</Text>
        <View style={styles.lineContainer}>
          <CheckboxApp
            name='Termo de Apadrinhamento'
            onChange={value => this.setState({ termoApadrinhamento: value })} />
        </View>
        <View style={styles.lineContainer}>
          <CheckboxApp
            name='Auxílio Financeiro'
            onChange={value => this.setState({ auxilioFinanceiro: value })} />
        </View>

        <View style={styles.lineContainer}>
          <CheckboxApp
            name='Saúde'
            disabled={!this.state.auxilioFinanceiro}
            onChange={value => this.setState({ saude: value })} />
        </View>
        <View style={styles.lineContainer}>
          <CheckboxApp
            name='Objetos'
            disabled={!this.state.auxilioFinanceiro}
            onChange={value => this.setState({ objetos: value })} />
        </View>
        <View style={styles.lineContainer}>
          <CheckboxApp
            name='Alimento'
            disabled={!this.state.auxilioFinanceiro}
            onChange={value => this.setState({ alimento: value })} />
        </View>


        <View style={styles.lineContainer}>
          <CheckboxApp
            name='Visitas ao Animal'
            onChange={value => this.setState({ visitas: value })} />
        </View>

      </View>
    );
  }

  renderExigencia() {
    if (this.state.acao === 1) {
      return this.renderExigenciaAdocao();
    }
    if (this.state.acao === 2) {
      return this.renderExigenciaApadrinhamento();
    }
  }

  render() {
    return (
      <View style={styles.container, styles.canvasContainer}>
        <ScrollView>
          <View style={styles.canvasContainer}>
            <View style={{ margin: 16 }}>
              <Text style={styles.text}>Tenho interesse em colocar o animal para:</Text>
            </View>
            {this.renderSelectionButton()}


            <View>
              <Text style={styles.title}>Nome</Text>
              <TextInput
                style={styles.textInput}
                onChangeText={text => this.setState({ nome: text })}
                value={this.state.nome}
              />
            </View>

            {this.renderEspecie()}
            {this.renderSexo()}
            {this.renderPorte()}
            {this.renderIdade()}
            {this.renderTemperamento()}
            {this.renderSaude()}
            {this.renderExigencia()}

            <View>
              <Text style={styles.title}>Sobre</Text>
              <TextInput
                style={styles.textInput}
                onChangeText={text => this.setState({ sobre: text })}
                value={this.state.sobre}
              />
            </View>
            {this.renderSubmitButton()}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  canvasContainer: {
    justifyContent: "center",
    alignItems: "stretch",
    margin: 12,
    marginBottom: 0,
    marginTop: 0
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: "center",
  },
  canvas: {
    alignItems: "center"
  },
  textInput: {
    height: 40,
    borderColor: '#bdbdbd',
    borderWidth: 0,
    width: 312
  },
  title: {
    color: '#f7a800',
    fontSize: 12,
    fontFamily: 'Roboto'
  },
  text: {
    color: '#757575',
    fontSize: 14,
    fontFamily: 'Roboto'
  },
  button: {
    backgroundColor: 'red',
    color: 'red',
    width: 40,
    height: 100,
    borderWidth: 2
  },
  yellowColor: {
    color: '#ffd358',
  },
  yellowBackgroundColor: {
    backgroundColor: '#ffd358',
  }
});
