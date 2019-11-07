

export const initialState = {
  
        additionalPrice: 0,
        car: {
          price: 26395,
          name: '2019 Ford Mustang',
          image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
          features: []
        },
        additionalFeatures: [
          { id: 1, name: 'V-6 engine', price: 1500 },
          { id: 2, name: 'Racing detail package', price: 1500 },
          { id: 3, name: 'Premium sound system', price: 500 },
          { id: 4, name: 'Rear spoiler', price: 250 }
        ]
        }
  
export const reducer = (state = initialState, action) => {
    switch (action.type) {

        case "add" :
                console.log(state.car.features);
                if (state.car.features.find(event => action.payload === event) === undefined) {
                  return {
                    ...state,
                    additionalPrice: state.additionalPrice + action.payload.price,
                    car: {
                      ...state.car,
                      features: [...state.car.features, action.payload]
                    }
                  };
                }
          
              case 'remove':
                const newFeatures = state.car.features.filter(
                  event=> action.payload !== event.id
                );
          
                return {
                  ...state,
                  additionalPrice: newFeatures.reduce((accumative, current) => accumative + current.price , 0),
                  car: {
                    ...state.car,
                    features: newFeatures
                  }
                };
          
              default:
                return { ...state };
            }
     

    }


  


