import React from 'react';
import {Layout, Text, Button, Icon, Input} from 'react-native-ui-kitten';
import {ImageBackground, View} from 'react-native';
export default class Login extends React.Component {
  render () {
    return (
      <View style={{flex: 1, alignItems: 'center',width:'100%',height:'100%'}}>
        <ImageBackground
          source={require ('../../assets/images/background.png')}
          style={{
            flex: 1,
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            opacity: 0.7,
          }}
          resizeMode="cover"
        >
          <Text style={{color: 'white',marginBottom:60}} category="h3">
            Login Page
          </Text>
          <View style={{paddingHorizontal: 32}}>
            <Input
              icon={() => {
                return <Icon name="people" fill="grey"/>;
              }}
              labelStyle={{color: 'white'}}
              style={{width: '100%', backgroundColor: 'white'}}
              label={'Username or Email'}
              placeholder={'Username'}
              size={'small'}
            />
            <Input
              icon={()=>{return(<Icon name='lock' fill='grey' />)}}
              labelStyle={{color: 'white'}}
              style={{width: '100%'}}
              label={'Password'}
              placeholder={'Password'}
              size={'small'}
            />
          </View>
          <View style={{flexDirection: 'row', paddingHorizontal: 16}}>
            <Button
              onPress={() => this.props.navigation.navigate ('Food')}
              icon={() => {
                return <Icon name="log-in" fill="white" />;
              }}
              style={{margin: 16}}
            >
              Login
            </Button>
            <Button
              style={{margin: 16}}
              onPress={() => this.props.navigation.navigate ('Home')}
              icon={() => {
                return <Icon name="people" fill="white" />;
              }}
            >
              Register
            </Button>
          </View>

        </ImageBackground>
      </View>
    );
  }
}
