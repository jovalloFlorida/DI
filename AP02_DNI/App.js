/**
 * App para calcular letra del DNI
 */

import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

import {calculaLetraNif} from './Utils/utils';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dni: '',
      letraNif: '',
    };
  }

  actualizaDNI = unDni => {
    this.setState({dni: unDni});
  };

  actualizaLetraNif = unaLetraNif => {
    this.setState({letraNif: unaLetraNif});
  };

  /*   
   Actualizamos el estado del DNI, y cuando tenemos un DNI completo,
    calculamos la letra y la guardamos en el estado
    * params:
       - unDni: campo de tipo entero de entre 0 y 8 caracteres
   */
  verificaNif = unDni => {
    /* this.setState({ dni: unDni }, () => {
        if (this.state.dni.length === 8) {
          let letraCalculada = calculaLetraNif(unDni);
          this.setState({ letraNif: letraCalculada })
        } else {
          this.setState({ letraNif: '' })
        }
      });*/

    //this.setState({ dni: unDni });
    this.actualizaDNI(unDni);
    if (unDni.length === 8) {
      /*let letraCalculada = calculaLetraNif(unDni);
       this.setState({ letraNif: letraCalculada })*/
      //let letraCalculada = calculaLetraNif(unDni);
      this.actualizaLetraNif(calculaLetraNif(unDni));
    } else {
      //this.setState({ letraNif: '' })
      this.actualizaLetraNif('');
    }
  };

  render() {
    return (
      <View>
        <View style={{flexDirection: 'row'}}>
          <Text>DNI:</Text>
          <TextInput
            onChangeText={this.verificaNif}
            value={this.state.dni}
            placeholder="Escribe el DNI"
            keyboardType="numeric"
            underlineColorAndroid="blue"
            maxLength={8}></TextInput>
          <TextInput
            value={this.state.letraNif}
            placeholder="Letra"
            editable={false}
            underlineColorAndroid="blue"></TextInput>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({});

export default App;
