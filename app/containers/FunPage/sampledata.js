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
      stocksmallcap:20,
      stockmidcap:20,
      stocklargecap:20,
      stockforeign:20,
      bond:20,
    }
  },
  {
    label:"Low Risk",
    value:2,
    profile:{
      stocksmallcap:20,
      stockmidcap:20,
      stocklargecap:20,
      stockforeign:20,
      bond:20,
    }
  },
  {
    label:"Low Risk",
    value:3,
    profile:{
      stocksmallcap:20,
      stockmidcap:20,
      stocklargecap:20,
      stockforeign:20,
      bond:20,
    }
  },
  {
    label:"Low Risk",
    value:4,
    profile:{
      stocksmallcap:20,
      stockmidcap:20,
      stocklargecap:20,
      stockforeign:20,
      bond:20,
    }
  },
  {
    label:"Middle Risk",
    value:5,
    profile:{
      stocksmallcap:20,
      stockmidcap:20,
      stocklargecap:20,
      stockforeign:20,
      bond:20,
    }
  },
  {
    label:"Middle Risk Level 1",
    value:6,
    profile:{
      stocksmallcap:20,
      stockmidcap:20,
      stocklargecap:20,
      stockforeign:25,
      bond:15,
    }
  },
  {
    label:"Low Risk",
    value:7,
    profile:{
      stocksmallcap:20,
      stockmidcap:20,
      stocklargecap:20,
      stockforeign:20,
      bond:20,
    }
  },
  {
    label:"Low Risk",
    value:8,
    profile:{
      stocksmallcap:20,
      stockmidcap:20,
      stocklargecap:20,
      stockforeign:20,
      bond:20,
    }
  },
  {
    label:"High Risk",
    value:9,
    profile:{
      stocksmallcap:20,
      stockmidcap:20,
      stocklargecap:20,
      stockforeign:20,
      bond:20,
    }
  },
  {
    label:"Maximum Risk",
    value:10,
    profile:{
      stocksmallcap:30,
      stockmidcap:30,
      stocklargecap:10,
      stockforeign:30,
      bond:0,
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
