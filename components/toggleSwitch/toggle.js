import {ImageBackground} from 'react-native';
import React from 'react';
import {View,TouchableOpacity,TouchableHighlight,Text,StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

 class Togle extends React.PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
  }

  static propTypes = {
    value:PropTypes.bool,
    disabled:PropTypes.bool,
    onTogle:PropTypes.func.isRequired,
    padding:PropTypes.number,
  
  }
  static defaultProps = {
    disabled: false,
    value:undefined,
    padding:8
  }
  

  
  onPress1 = () => {
    const newState = this.props.value = false;
    this.props.onTogle(newState);
  }
  
  onPress2 = () => {
   const newState = this.props.value = undefined;
   this.props.onTogle(newState);
  }
  onPress3 = () => {
   const newState = this.props.value = true;
   this.props.onTogle(newState);
  }
 
  render() {
   return (
     <View  style={styles.container} pointerEvents={this.props.disabled ? 'none':'auto'}>
       <TouchableOpacity
         style={[{padding:this.props.padding},  this.props.value === undefined ? styles.button1 :  !this.props.value ? this.props.disabled ? styles.button1Disable : styles.button1Enable : styles.button1]}
         onPress={this.onPress1}
       
       >
      
       </TouchableOpacity>
       <TouchableOpacity
         style={[{padding:this.props.padding}, this.props.value === undefined ? styles.button2Enable :styles.button2]}
         onPress={this.onPress2}
       >
       
       </TouchableOpacity>
       <TouchableOpacity
         style={[{padding:this.props.padding},this.props.value === undefined ? styles.button3 : this.props.value ?this.props.disabled ? styles.button3Disable : styles.button3Enable : styles.button3]}
         onPress={this.onPress3}
       >
        
       </TouchableOpacity>
     
      </View>
    )
  }
}
export default Togle;
const styles = StyleSheet.create({
  container: {
   
    // justifyContent: 'center',
    // paddingHorizontal: 10,
    // paddingVertical:10 ,
    backgroundColor:'#DDDDDD',
    flexDirection:'row',
    borderRadius:10
   
  },
  button1: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    // padding: 8,
    // height:10,
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10
  },
  button1Enable: {
    alignItems: 'center',
    backgroundColor: '#D72E30',
    // padding: 8,
    // height:10,
    borderRadius:10
    

  },
  button1Disable: {
    alignItems: 'center',
    backgroundColor: '#F98580',
    // padding: 8,
    // height:10,
   borderRadius:10 
  },
  button2: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    // padding: 8,
    // height:10,
    // borderLeftWidth: 0.5,
    // borderRightWidth: 0.5,
    // borderColor: 'white'
  },
  button2Enable: {
    alignItems: 'center',
    backgroundColor: 'white',
    // padding: 8,
    // height:10,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderColor: 'white',
    borderRadius:10
  },
  button3: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    // padding: 8,
    // height:10,
    borderTopRightRadius:10,
    borderBottomRightRadius:10
  },
  button3Enable: {
    alignItems: 'center',
    backgroundColor: '#75CF41',
    // padding: 8,
    // height:10,
    borderRadius:10
  },
  button3Disable: {
    alignItems: 'center',
    backgroundColor: '#B2E996',
    // padding: 8,
    // height:10,
   borderRadius:10
  },
 
})

