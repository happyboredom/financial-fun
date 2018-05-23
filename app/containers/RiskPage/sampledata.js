const labels = {
  stocksmallcap:"Small Cap",
  stockmidcap:"Mid Cap",
  stocklargecap:"Large Cap",
  stockforeign:"Foreign",
  bond:"Bonds",
}

export function getAllocationLabel(id) {
  return labels[id];
};


/*
Converts map into chart-compatible output.
Input: A map
{
key1:val1,
key2:val2,
}

Output: An array of the key/vals suitable for chart.
{
  id:key1,
  value:val1,
  key:label1,
}
*/
export function convertToChartData(myData, labelFunc = getAllocationLabel) {
  return Object
    .entries(myData)
    .map(
      (obj, index) => {
        return {
          id:obj[0],
          value:obj[1],
          key:labelFunc(obj[0])
        }
      });
}

export function convertToTableData(myData) {
  // console.log("convertToTableData", myData);
  return myData.map(
      (object, i) => {
        // need to COPY this object
        // mutation will have bad effects.
        let object_copy = Object.assign({}, object);
        object_copy['profile'] = convertToChartData(object['profile']);
        return object_copy;
      });
}

const sampledata = [
  {
    label:"Minimum Risk",
    value:1,
    profile:{
      stocksmallcap:0,
      stockmidcap:0,
      stocklargecap:20,
      stockforeign:0,
      bond:80,
    }
  },
  {
    label:"Low Risk",
    value:2,
    profile:{
      stocksmallcap:0,
      stockmidcap:15,
      stocklargecap:15,
      stockforeign:0,
      bond:70,
    }
  },
  {
    label:"Low Risk",
    value:3,
    profile:{
      bond:60,
      stocklargecap:15,
      stockmidcap:15,
      stockforeign:10,
      stocksmallcap:0,
    }
  },
  {
    label:"Low Risk",
    value:4,
    profile:{
      bond:50,
      stocklargecap:20,
      stockmidcap:20,
      stockforeign:10,
      stocksmallcap:0,
    }
  },
  {
    label:"Middle Risk",
    value:5,
    profile:{
      bond:40,
      stocklargecap:20,
      stockmidcap:20,
      stockforeign:20,
      stocksmallcap:0,
    }
  },
  {
    label:"Middle Risk Level 1",
    value:6,
    profile:{
      bond:35,
      stocklargecap:25,
      stockmidcap:5,
      stockforeign:30,
      stocksmallcap:5,
    }
  },
  {
    label:"Low Risk",
    value:7,
    profile:{
      bond:20,
      stocklargecap:25,
      stockmidcap:25,
      stockforeign:25,
      stocksmallcap:5,
    }
  },
  {
    label:"Low Risk",
    value:8,
    profile:{
      bond:10,
      stocklargecap:20,
      stockmidcap:40,
      stockforeign:20,
      stocksmallcap:10,
    }
  },
  {
    label:"High Risk",
    value:9,
    profile:{
      bond:5,
      stocklargecap:20,
      stockmidcap:40,
      stockforeign:20,
      stocksmallcap:10,
    }
  },
  {
    label:"Maximum Risk",
    value:10,
    profile:{
      bond:0,
      stocklargecap:5,
      stockmidcap:25,
      stockforeign:30,
      stocksmallcap:40,
    }
  },
];

export {
  sampledata
};

export function getRiskLevel(value) {
  return sampledata.find( item => item.value == value)
}

export function getRiskLevelProfile(value) {
  return getRiskLevel(value).profile;
}
