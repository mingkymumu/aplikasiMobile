import  {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Food from '../pages/food/Food';
const AppNavigator = createStackNavigator({

    initialRouteName : Food,
  
    
   
       
    Login : {
        screen: Login,
        navigationOptions :()=>({
        header :null ,
        headerMode:'none'
          
        })
    },
    Home : { 
        screen: Home ,
        navigationOptions : ()=>({
            header : {
                title :'test'
            }
        })
    },
    Food : { 
        screen: Food ,
       
    },
     
    
 
},
// { headerMode: 'none', header: null},
);
export default createAppContainer(AppNavigator);