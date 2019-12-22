import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Card from '../../components/card/Card';

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
      data: [
        {
          id: 1,
          name: 'Pantai Kenjeran',
          type: 'Beach and Resort',
          address: 'Surabaya , Jawa Timur',
          subType: 'Pariwisata',
          rating: '3.7',
          booked: 1023,
          image: 'https://lorempixel.com/400/200/nature/5/',
          discounts: [
            {id: 1, hour: '09.00-10.00', discount: '50%'},
            {id: 2, hour: '10.00-13.00', discount: '40%'},
            {id: 3, hour: '13.00-16.00', discount: '30%'},
            {id: 4, hour: '16.00-18.00', discount: '20%'},
          ],
        },
        {
          id: 2,
          name: 'Taman Bunga Mawar',
          type: 'Garden',
          address: 'Surabaya , Jawa Timur',
          subType: 'Pariwisata',
          rating: '3.9',
          booked: 1004,
          image: 'https://lorempixel.com/400/200/nature/6/',
          discounts: [
            {id: 1, hour: '09.00-10.00', discount: '50%'},
            {id: 2, hour: '10.00-13.00', discount: '40%'},
            {id: 3, hour: '13.00-16.00', discount: '30%'},
            {id: 4, hour: '16.00-18.00', discount: '20%'},
          ],
        },
        {
          id: 3,
          name: 'Hutan Lindung',
          type: 'Adventure',
          address: 'Banyuwangi , Jawa Timur',
          subType: 'Pariwisata',
          rating: '4.7',
          booked: 603,
          image: 'https://lorempixel.com/400/200/nature/4/',
          discounts: [
            {id: 1, hour: '09.00-10.00', discount: '40%'},
            {id: 2, hour: '10.00-13.00', discount: '35%'},
            {id: 3, hour: '13.00-16.00', discount: '30%'},
            {id: 4, hour: '16.00-18.00', discount: '20%'},
          ],
        },
        {
          id: 4,
          name: 'Cricket',
          type: 'Sport Arena',
          address: 'Surabaya , Jawa Timur',
          subType: 'Olahraga',
          rating: '4.3',
          booked: 980,
          image: 'https://lorempixel.com/400/200/sports/1/',
          discounts: [
            {id: 1, hour: '09.00-10.00', discount: '50%'},
            {id: 2, hour: '10.00-13.00', discount: '30%'},
            {id: 3, hour: '13.00-16.00', discount: '25%'},
            {id: 4, hour: '16.00-18.00', discount: '20%'},
          ],
        },
        {
          id: 5,
          name: 'Pantai Harapan',
          type: 'Beach and Resort',
          address: 'Jember , Jawa Timur',
          subType: 'Pariwisata',
          rating: '4.2',
          booked: 1205,
          image: 'https://lorempixel.com/400/200/nature/3/',
          discounts: [
            {id: 1, hour: '09.00-10.00', discount: '50%'},
            {id: 2, hour: '10.00-13.00', discount: '40%'},
            {id: 3, hour: '13.00-16.00', discount: '30%'},
            {id: 4, hour: '16.00-18.00', discount: '20%'},
          ],
        },
      ],
    };
  }

  render() {
    const {data} = this.state;
    return (
      <ScrollView>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{alignSelf:'flex-start',fontSize:22,fontWeight:'bold',margin:10}}>Deals of The Day</Text>
          {data &&
            data.length > 0 &&
            data.map(obj => {
              return (
                <Card
                  key={obj.id}
                  name={obj.name}
                  type={obj.type}
                  address={obj.address}
                  subType={obj.subType}
                  rating={obj.rating}
                  image={obj.image}
                  bookedTimes={obj.booked}
                  discounts={obj.discounts}
                />
              );
            })}
        </View>
      </ScrollView>
    );
  }
}
