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

let sampledata = [
  {
    label:"Minimum Risk",
    value:1,
    profile:[
      {
        id:"stocksmallcap",
        key:"Small Cap Stock",
        value:0,
      },
      {
        id:"stockmidcap",
        label:"Mid Cap Stock",
        value:0,
      },
      {
        id:"stocklargecap",
        label:"Large Cap Stock",
        value:0,
      },
      {
        id:"stockforeign",
        label:"Foreign Stock",
        value:0,
      },
      {
        id:"bond",
        key:"Bonds",
        value:100,
      },
    ]
  },
  {
    label:"Low Risk",
    value:2,
    profile:[
      {
        id:"stocksmallcap",
        key:"Small Cap Stock",
        value:0,
      },
      {
        id:"stockmidcap",
        key:"Mid Cap Stock",
        value:0,
      },
      {
        id:"stocklargecap",
        key:"Large Cap Stock",
        value:10,
      },
      {
        id:"stockforeign",
        key:"Foreign Stock",
        value:0,
      },
      {
        id:"bond",
        key:"Bonds",
        value:90,
      },
    ]
  },
  {
    label:"Low Risk",
    value:3,
    profile:[
      {
        id:"stocksmallcap",
        key:"Small Cap Stock",
        value:0,
      },
      {
        id:"stockmidcap",
        key:"Mid Cap Stock",
        value:0,
      },
      {
        id:"stocklargecap",
        key:"Large Cap Stock",
        value:10,
      },
      {
        id:"stockforeign",
        key:"Foreign Stock",
        value:0,
      },
      {
        id:"bond",
        key:"Bonds",
        value:90,
      },
    ]
  },
  {
    label:"Low Risk",
    value:4,
    profile:[
      {
        id:"stocksmallcap",
        key:"Small Cap Stock",
        value:0,
      },
      {
        id:"stockmidcap",
        key:"Mid Cap Stock",
        value:0,
      },
      {
        id:"stocklargecap",
        key:"Large Cap Stock",
        value:10,
      },
      {
        id:"stockforeign",
        key:"Foreign Stock",
        value:0,
      },
      {
        id:"bond",
        key:"Bonds",
        value:90,
      },
    ]
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
    profile:[
      {
        id:"stocksmallcap",
        key:"Small Cap Stock",
        value:0,
      },
      {
        id:"stockmidcap",
        key:"Mid Cap Stock",
        value:0,
      },
      {
        id:"stocklargecap",
        key:"Large Cap Stock",
        value:10,
      },
      {
        id:"stockforeign",
        key:"Foreign Stock",
        value:0,
      },
      {
        id:"bond",
        key:"Bonds",
        value:90,
      },
    ]
  },
  {
    label:"Low Risk",
    value:8,
    profile:[
      {
        id:"stocksmallcap",
        key:"Small Cap Stock",
        value:0,
      },
      {
        id:"stockmidcap",
        key:"Mid Cap Stock",
        value:0,
      },
      {
        id:"stocklargecap",
        key:"Large Cap Stock",
        value:10,
      },
      {
        id:"stockforeign",
        key:"Foreign Stock",
        value:0,
      },
      {
        id:"bond",
        key:"Bonds",
        value:90,
      },
    ]
  },
  {
    label:"High Risk",
    value:9,
    profile:[
      {
        id:"stocksmallcap",
        key:"Small Cap Stock",
        value:0,
      },
      {
        id:"stockmidcap",
        key:"Mid Cap Stock",
        value:0,
      },
      {
        id:"stocklargecap",
        key:"Large Cap Stock",
        value:10,
      },
      {
        id:"stockforeign",
        key:"Foreign Stock",
        value:0,
      },
      {
        id:"bond",
        key:"Bonds",
        value:90,
      },
    ]
  },
  {
    label:"Maximum Risk",
    value:10,
    profile:[
      {
        id:"stocksmallcap",
        key:"Small Cap Stock",
        value:30,
      },
      {
        id:"stockmidcap",
        key:"Mid Cap Stock",
        value:30,
      },
      {
        id:"stocklargecap",
        key:"Large Cap Stock",
        value:20,
      },
      {
        id:"stockforeign",
        key:"Foreign Stock",
        value:15,
      },
      {
        id:"bond",
        key:"Bonds",
        value:5,
      },
    ]
  },
];

export function getRiskLevel(value) {
  return sampledata.find( item => item.value == value)
}

export function getRiskLevelProfile(value) {
  return getRiskLevel(value).profile;
}

export default sampledata;
