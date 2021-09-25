interface INavData {
    [key: string]: INavData | boolean;
  };
  
 export const navData:INavData = {
    Home: {
      "Electric Vehicle": {
        battery: {
          "2Din": true,
  
          Electrode: {
            common: true,
  
            Night: false,
  
            Afternoon: true
          }
        },
  
        Switch: {
          startStop: true,
  
          "Round light": true,
  
          Mirror: {
            sideMirror: true,
  
            WindowMirror: true
          }
        }
      },
  
      "Disel Vehicle": {
        battery: {
          lithiomIon: false,
  
          "2Din": true,
  
          Electrode: {
            common: true,
  
            Night: false,
  
            Afternoon: true
          }
        },
  
        Switch: {
          startStop: true,
  
          "Round light": true,
  
          Mirror: {
            sideMirror: true,
  
            WindowMirror: true
          }
        },
  
        "AC belt": {
          Minor: true,
  
          Major: true
        }
      }
    },
    Details: {
      "Electric Vehicle": {
        battery: {
          lithiomIon: true,
  
          "2Din": true,
  
          Electrode: {
            common: true,
  
            Night: false,
  
            Afternoon: true
          }
        },
  
        Switch: {
          startStop: true,
  
          "Round light": true,
  
          Mirror: {
            sideMirror: true,
  
            WindowMirror: true
          }
        }
      },
  
      "Disel Vehicle": {
        battery: {
          lithiomIon: true,
  
          "2Din": true,
  
          Electrode: {
            common: true,
  
            Night: false,
  
            Afternoon: true
          }
        },
  
        Switch: {
          startStop: true,
  
          "Round light": true,
  
          Mirror: {
            sideMirror: true,
  
            WindowMirror: true
          }
        },
  
        "AC belt": {
          Minor: true,
  
          Major: true
        }
      }
    }
  };