import React, {Component} from 'react';
import {View, Text, ScrollView,  ActivityIndicator,
} from 'react-native';
import Card from '../../components/card/Card';
import * as configs from '../../constant/Configs';

export default class Food extends Component {
  static navigationOptions = {
    title: 'T e m p a t .com',
    headerStyle: {
      backgroundColor: '#713ADC',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      alignSelf: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      flex: 1,
      fontWeight: 'bold',
      textAlignVertical: 'center',
    },
  };


  constructor(props) {
    super(props);
    this.state = {
      accessToken: undefined,
      data: [],
      isLoading:false,
    //   data: [
    //     {
    //       id: 1,
    //       name: 'Pantai Kenjeran',
    //       type: 'Beach and Resort',
    //       address: 'Surabaya , Jawa Timur',
    //       subType: 'Pariwisata',
    //       rating: '3.7',
    //       booked: 1023,
    //       image: 'https://lorempixel.com/400/200/nature/5/',
    //       discounts: [
    //         {id: 1, hour: '09.00-10.00', discount: '50%'},
    //         {id: 2, hour: '10.00-13.00', discount: '40%'},
    //         {id: 3, hour: '13.00-16.00', discount: '30%'},
    //         {id: 4, hour: '16.00-18.00', discount: '20%'},
    //       ],
    //     },
    //     {
    //       id: 2,
    //       name: 'Taman Bunga Mawar',
    //       type: 'Garden',
    //       address: 'Surabaya , Jawa Timur',
    //       subType: 'Pariwisata',
    //       rating: '3.9',
    //       booked: 1004,
    //       image: 'https://lorempixel.com/400/200/nature/6/',
    //       discounts: [
    //         {id: 1, hour: '09.00-10.00', discount: '50%'},
    //         {id: 2, hour: '10.00-13.00', discount: '40%'},
    //         {id: 3, hour: '13.00-16.00', discount: '30%'},
    //         {id: 4, hour: '16.00-18.00', discount: '20%'},
    //       ],
    //     },
    //     {
    //       id: 3,
    //       name: 'Hutan Lindung',
    //       type: 'Adventure',
    //       address: 'Banyuwangi , Jawa Timur',
    //       subType: 'Pariwisata',
    //       rating: '4.7',
    //       booked: 603,
    //       image: 'https://lorempixel.com/400/200/nature/4/',
    //       discounts: [
    //         {id: 1, hour: '09.00-10.00', discount: '40%'},
    //         {id: 2, hour: '10.00-13.00', discount: '35%'},
    //         {id: 3, hour: '13.00-16.00', discount: '30%'},
    //         {id: 4, hour: '16.00-18.00', discount: '20%'},
    //       ],
    //     },
    //     {
    //       id: 4,
    //       name: 'Cricket',
    //       type: 'Sport Arena',
    //       address: 'Surabaya , Jawa Timur',
    //       subType: 'Olahraga',
    //       rating: '4.3',
    //       booked: 980,
    //       image: 'https://lorempixel.com/400/200/sports/1/',
    //       discounts: [
    //         {id: 1, hour: '09.00-10.00', discount: '50%'},
    //         {id: 2, hour: '10.00-13.00', discount: '30%'},
    //         {id: 3, hour: '13.00-16.00', discount: '25%'},
    //         {id: 4, hour: '16.00-18.00', discount: '20%'},
    //       ],
    //     },
    //     {
    //       id: 5,
    //       name: 'Pantai Harapan',
    //       type: 'Beach and Resort',
    //       address: 'Jember , Jawa Timur',
    //       subType: 'Pariwisata',
    //       rating: '4.2',
    //       booked: 1205,
    //       image: 'https://lorempixel.com/400/200/nature/3/',
    //       discounts: [
    //         {id: 1, hour: '09.00-10.00', discount: '50%'},
    //         {id: 2, hour: '10.00-13.00', discount: '40%'},
    //         {id: 3, hour: '13.00-16.00', discount: '30%'},
    //         {id: 4, hour: '16.00-18.00', discount: '20%'},
    //       ],
    //     },
    //   ],
    };
  }

  componentDidMount() {
    let options = {
      headers: {
        'Content-Type': 'multipart/form-data',
        'cache-control': 'no-cache',
        'Postman-Token': '91749254-c0e7-475e-9054-1b582bd0187e',
      },
      method: 'POST',
      // body: JSON.stringify(configs.CREDENTIAL)
    };
    options.body = new FormData();
    for (let key in configs.CREDENTIAL) {
      options.body.append(key, configs.CREDENTIAL[key]);
    }
    console.log('hasil options', options);

    fetch(configs.USER_AUTHENTICATION, options).then(response => {
      response.json().then(r => {
        
        this.setState({accessToken: r.access_token,isLoading:true}, () => {
          console.log('access token',this.state.accessToken);
          fetch(configs.GET_BRANCH, {
            method: 'GET',
            headers: {
              Authorization: 'Bearer ' + this.state.accessToken,
              'Content-Type': 'application/json',
              'cache-control': 'no-cache',
            },
          }).then(rp => {
            console.log('response datanya', rp);
            rp.json().then((hasil)=>{
              console.log('hasilnya ',hasil.data);
              this.setState({data:hasil.data,isLoading:false});
            })
          });
        });
      });
    });
  }


  render() {
    const {data,isLoading} = this.state;
    return (
      <ScrollView style={{flex:1}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
        
          <Text
            style={{
              alignSelf: 'flex-start',
              fontSize: 22,
              fontWeight: 'bold',
              margin: 10,
            }}>
            Deals of The Day
          </Text>
          <ActivityIndicator animating={isLoading} style={{alignSelf:'center'}} />
          {data &&
            data.length > 0 &&
            data.map(obj => {
              return (
                <Card
                  key={obj._source.id}
                  name={obj._source.branch_name}
                  type={obj._source.branch_group_activity[0].activity_group.group_name}
                  address={obj._source._intersects.kecamatan.name}
                  subType={obj._source.branch_group_activity[0].activity_group.group_name}
                  rating={obj._source.rating_score}
                  image={obj._source.branch_images  .image_url}
                  bookedTimes={obj.booked}
                  discounts={obj.discounts}
                  onPress={()=>{this.props.navigation.navigate('Detail',{accessToken:this.state.accessToken})}}

                  {...this.props}
                />
              );
            })}
        </View>
      </ScrollView>
    );
  }
}
