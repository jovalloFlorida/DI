/**
 * Template React Native App
 * @author Jose Valverde
 * @version 1.0
 * @format
 * @class
 * @summary Clase base para iniciar una app en React Native
 */

 import React, {Component} from 'react';
 import {View, Text, StyleSheet} from 'react-native';
 import {Button, TextInput} from 'react-native-paper';
 import {CustomButton} from './components/Buttons';
 
 export default class App extends Component {
   constructor(props) {
     super(props);
     this.state = {
       peso: '',
       altura: '',
       resultado: 'Resultado de la clcasificacion IMC...',
       color: 'grey',
     };
   }
 
   getIMCColor = (imc) => {
     if (imc<27){
       colorTexto='green';
     } else if (imc>=27 && imc <=39.9){
       colorTexto='orange';
     } else if (imc>=40){
       colorTexto='orange';
     }
 
     this.setState({color: colorTexto});
 
   };
 
   calculoImc = () => {
     
     let clasificacion = 'Introducido caracter NO admitido... ';
     let colorTexto = 'blue;'
     let alturaMetros = parseFloat(this.state.altura / 100);
     let conDecimal = parseInt(this.state.peso) / Math.pow(alturaMetros, 2);
     let imc = conDecimal.toFixed(1);
     
     //this.setState({...this.state, imc: imc});
     console.log(imc);
 
     if (this.state.peso==='' || this.state.altura===''){
      clasificacion = 'Debes introducir datos...';
      this.setState({color: 'red'});
      this.setState({resultado: clasificacion});
      
    } else{
      if (imc < 18.5) {
        clasificacion = 'Peso insuficiente';
      } else if (imc >= 18.5 && imc <= 24.9) {
        clasificacion = 'Normopeso';
      } else if (imc >= 25 && imc <= 26.9) {
        clasificacion = 'Sobrepeso grado I';
      } else if (imc >= 27 && imc <= 29.9) {
        clasificacion = 'Sobrepeso grado II (preobesidad)';
      } else if (imc >= 30 && imc <= 34.9) {
        clasificacion = 'Obesidad de tipo I';
      } else if (imc >= 35 && imc <= 39.9) {
        clasificacion = 'Obesidad de tipo II';
      } else if (imc >= 40 && imc <= 49.9) {
        clasificacion = 'Obesidad de tipo III (morbida)';
      } else if (imc >= 50) {
        clasificacion = 'Obesidad de tipo IV (extrema)';
      }
  
      this.setState({resultado: clasificacion});
      this.getIMCColor(imc);

    }

    

     
   };
 
   render() {
     return (
       <View style={styles.sectionContainer}>
         <Text
           style={{
             textAlign: 'center',
             paddingBottom: 10,
             color: 'red',
             fontSize: 30,
           }}>
           Calculadora IMC
         </Text>
         <View style={styles.sectionCentral}>
           
           <Text style={{
             paddingTop: 20,
             paddingLeft: 15,
             fontSize: 30,
             color:'red',
             }}
           >Datos</Text>
 
           <Text style={{
             paddingTop: 20,
             fontSize: 20,
             color: 'blue',
             }}
           >Peso</Text>
           <TextInput
             value={this.state.peso}
             placeholder="Introduce el peso..."
             onChangeText={text => this.setState({...this.state, peso: text})}
             keyboardType="numeric"
             backgroundColor="white"
             maxLength={3}></TextInput>
 
           <Text style={{
             paddingTop: 20,
             fontSize: 20,
             color: 'blue',
             }}
           >Altura</Text>
 
           <TextInput
             value={this.state.altura}
             placeholder="Introduce la altura en cm..."
             onChangeText={text => this.setState({...this.state, altura: text})}
             backgroundColor="white"
             keyboardType="numeric"
             maxLength={3}></TextInput>
 
           <View style={{alignItems: 'center', paddingTop: 20}}>
             <CustomButton
               value={this.state.resultado}
               color="white"
               textColor="blue"
               onPress={() => this.calculoImc()}
               text="Calcular IMG"
             />
           </View>
           <View style={{paddingLeft: 20}}>
             <Text
               style={{
                 paddingTop: 20,
               }}>
               Resultado
             </Text>
             <Text
               style={{
                 paddingTop: 10,
                 paddingLeft: 10,
                 color: this.state.color,
               }}>
               {this.state.resultado}
             </Text>
           </View>
         </View>
         <Text
           style={{
             color: 'white',
             paddingTop: 20,
           }}>
           Created for 2n DAM
         </Text>
       </View>
     );
   }
 }
 const styles = StyleSheet.create({
   sectionContainer: {
     flex: 1,
     paddingTop: 20,
     paddingBottom: 20,
     backgroundColor: 'purple',
     borderColor: 'purple',
     borderWidth: 3,
   },
   sectionCentral: {
     flex: 1,
     padding: 5,
     backgroundColor: 'white',
     borderColor: 'white',
     borderWidth: 3,
   },
 });
 