import { ImgHTMLAttributes } from 'react';
import { URL } from 'url';

interface AfricanCountries {
  [key: number]: {
    Quadrent: string;
    CountryAbbrv: string;
    CountryName: string;
    AreaCode: number;
    officialLanguage: string;
    Capital: string;
    Currency: string;
    Flag: ImgHTMLAttributes;
    //  futureConnections  =  "Internet users" All sourced from https://datareportal.com/ - search by country for the year 2022.
    futureConnections: Number;
    PopulationSize: Number;
  };
}
//<img src =  `${https://flagsapi.com/${AfricanCountryList.CountryAbbrv}/flat/64.png>}`</img>;

//North Africa_(1-8)
//East Africa_(9-28)
//South Africa_(29-33)
//West Africa_(34-50)
//Central Africa_(51-59)

const AfricanCountryList: AfricanCountries = {
  //North Africa__(1-8)_________________________________________________________________________________________________________________________
  1: {
    Quadrent: 'North',
    CountryAbbrv: 'DZ',
    CountryName: 'Algeria',
    AreaCode: 213,
    officialLanguage: 'Arabic',
    Capital: 'Algiers',
    Currency: 'Algerian dinar',
    Flag: <img src='https://flagsapi.com/DZ/flat/64.png'></img>,
    futureConnections: 27280000,
    PopulationSize: 44903225,
  },

  2: {
    Quadrent: 'North',
    CountryAbbrv: 'EG',
    CountryName: 'Egypt',
    AreaCode: 20,
    officialLanguage: 'Arabic',
    Capital: 'Cairo',
    Currency: 'Egyptian Pound',
    Flag: <img src='https://flagsapi.com/EG/flat/64.png'></img>,
    futureConnections: 75660000,
    PopulationSize: 102880000,
  },

  3: {
    Quadrent: 'North',
    CountryAbbrv: 'LY',
    CountryName: 'Libya',
    AreaCode: 218,
    officialLanguage: 'Arabic',
    Capital: 'Tripoli',
    Currency: 'Libyan dinar',
    Flag: <img src='https://flagsapi.com/LY/flat/64.png'></img>,
    futureConnections: 3470000,
    PopulationSize: 6812341,
  },

  4: {
    Quadrent: 'North',
    CountryAbbrv: 'MA',
    CountryName: 'Morocco',
    AreaCode: 212,
    officialLanguage: 'Arabic',
    Capital: 'Rabat',
    Currency: 'Moroccan dirham',
    Flag: <img src='https://flagsapi.com/MA/flat/64.png'></img>,
    futureConnections: 31590000,
    PopulationSize: 36400000,
  },

  5: {
    Quadrent: 'North',
    CountryAbbrv: 'TN',
    CountryName: 'Tunisia',
    AreaCode: 216,
    officialLanguage: 'Arabic',
    Capital: 'Tunis',
    Currency: 'Tunisian dinar',
    Flag: <img src='https://flagsapi.com/TN/flat/64.png'></img>,
    futureConnections: 8000000,
    PopulationSize: 12356117,
  },

  6: {
    Quadrent: 'North',
    CountryAbbrv: 'SD',
    CountryName: 'Sudan',
    AreaCode: 249,
    officialLanguage: 'Arabic',
    Capital: 'Khartoum',
    Currency: 'Sudanese Pound',
    Flag: <img src='https://flagsapi.com/SD/flat/64.png'></img>,
    futureConnections: 14030000,
    PopulationSize: 46874204,
  },

  7: {
    Quadrent: 'North',
    CountryAbbrv: 'EH',
    CountryName: 'Western Sahara',
    AreaCode: 212,
    officialLanguage: 'Arabic',
    Capital: 'Laayoune',
    Currency: 'Sahrawi peseta, Moroccan dirham',
    Flag: <img src='https://flagsapi.com/EH/flat/64.png'></img>,
    futureConnections: 379300,
    PopulationSize: 619000,
  },

  8: {
    Quadrent: 'North',
    CountryAbbrv: 'ES-CN',
    CountryName: 'Canary Islands',
    AreaCode: 928 || 828 || 922 || 822,
    officialLanguage: 'Spanish',
    Capital: 'Las Palmas de Gran Canaria and Santa Cruz de Tenerife',
    Currency: 'Euro',
    Flag: <img src='https://flagsapi.com/IC/flat/64.png'></img>,
    futureConnections: 0,
    PopulationSize: 2252465,
  },

  //East Africa___(9-28)_______________________________________________________________________________________________________
  9: {
    Quadrent: 'East',
    CountryAbbrv: 'BI',
    CountryName: 'Burundi',
    AreaCode: 257,
    officialLanguage: 'Kirundi',
    Capital: 'Bujumbura',
    Currency: 'Burundi franc',
    Flag: <img src='https://flagsapi.com/BI/flat/64.png'></img>,
    futureConnections: 1820000,
    PopulationSize: 12889576,
  },

  10: {
    Quadrent: 'East',
    CountryAbbrv: 'KM',
    CountryName: 'Comoros',
    AreaCode: 269,
    officialLanguage: 'Arabic',
    Capital: 'Moroni',
    Currency: 'Comorian franc',
    Flag: <img src='https://flagsapi.com/KM/flat/64.png'></img>,
    futureConnections: 76100000,
    PopulationSize: 836774,
  },

  11: {
    Quadrent: 'East',
    CountryAbbrv: 'DJ',
    CountryName: 'Djibouti',
    AreaCode: 253,
    officialLanguage: 'French',
    Capital: 'Djibouti (city)',
    Currency: 'Djiboutian franc',
    Flag: <img src='https://flagsapi.com/DJ/flat/64.png'></img>,
    futureConnections: 595400,
    PopulationSize: 1120849,
  },

  12: {
    Quadrent: 'East',
    CountryAbbrv: 'ER',
    CountryName: 'Eritrea',
    AreaCode: 291,
    officialLanguage: 'Afar',
    Capital: 'Asmara',
    Currency: 'Eritrean nakfa',
    Flag: <img src='https://flagsapi.com/ER/flat/64.png'></img>,
    futureConnections: 290500,
    PopulationSize: 3630000,
  },

  13: {
    Quadrent: 'East',
    CountryAbbrv: 'ET',
    CountryName: 'Ethiopia',
    AreaCode: 251,
    officialLanguage: 'Amharic',
    Capital: 'Addis Ababa',
    Currency: 'Ethiopian birr',
    Flag: <img src='https://flagsapi.com/ET/flat/64.png'></img>,
    futureConnections: 29830000,
    PopulationSize: 123000000,
  },

  14: {
    Quadrent: 'East',
    CountryAbbrv: 'KE',
    CountryName: 'Kenya',
    AreaCode: 254,
    officialLanguage: 'English',
    Capital: 'Nairobi',
    Currency: 'Kenyan shilling',
    Flag: <img src='https://flagsapi.com/KE/flat/64.png'></img>,
    futureConnections: 23350000,
    PopulationSize: 54027487,
  },

  15: {
    Quadrent: 'East',
    CountryAbbrv: 'MG',
    CountryName: 'Madagascar',
    AreaCode: 261,
    officialLanguage: 'French',
    Capital: 'Antananarivo',
    Currency: 'Malagasy ariary',
    Flag: <img src='https://flagsapi.com/MG/flat/64.png'></img>,
    futureConnections: 6430000,
    PopulationSize: 29611714,
  },

  16: {
    Quadrent: 'East',
    CountryAbbrv: 'MW',
    CountryName: 'Malawi',
    AreaCode: 265,
    officialLanguage: 'Chichewa',
    Capital: 'Lilongwe',
    Currency: 'Malawian kwacha',
    Flag: <img src='https://flagsapi.com/MW/flat/64.png'></img>,
    futureConnections: 4030000,
    PopulationSize: 20405317,
  },

  17: {
    Quadrent: 'East',
    CountryAbbrv: 'MU',
    CountryName: 'Mauritius',
    AreaCode: 230,
    officialLanguage: 'Creole',
    Capital: 'Port Louis',
    Currency: 'Mauritian rupee',
    Flag: <img src='https://flagsapi.com/MU/flat/64.png'></img>,
    futureConnections: 826900,
    PopulationSize: 1262523,
  },

  18: {
    Quadrent: 'East',
    CountryAbbrv: 'MZ',
    CountryName: 'Mozambique',
    AreaCode: 258,
    officialLanguage: 'Emakhuwa',
    Capital: 'Maputo',
    Currency: 'Mozambican metical',
    Flag: <img src='https://flagsapi.com/MZ/flat/64.png'></img>,
    futureConnections: 7540000,
    PopulationSize: 32969518,
  },

  19: {
    Quadrent: 'East',
    CountryAbbrv: 'RW',
    CountryName: 'Rwanda',
    AreaCode: 250,
    officialLanguage: 'Kinyarwanda',
    Capital: 'Kigali',
    Currency: 'Rwandan franc',
    Flag: <img src='https://flagsapi.com/RW/flat/64.png'></img>,
    futureConnections: 3540000,
    PopulationSize: 13776698,
  },

  20: {
    Quadrent: 'East',
    CountryAbbrv: 'SC',
    CountryName: 'Seychelles',
    AreaCode: 248,
    officialLanguage: 'Creole',
    Capital: 'Victoria',
    Currency: 'Seychellois rupee',
    Flag: <img src='https://flagsapi.com/SC/flat/64.png'></img>,
    futureConnections: 78300,
    PopulationSize: 107341,
  },

  21: {
    Quadrent: 'East',
    CountryAbbrv: 'SO',
    CountryName: 'Somalia',
    AreaCode: 252,
    officialLanguage: 'Somali',
    Capital: 'Mogadishu',
    Currency: 'Somali shilling',
    Flag: <img src='https://flagsapi.com/SO/flat/64.png'></img>,
    futureConnections: 2270000,
    PopulationSize: 17597511,
  },

  22: {
    Quadrent: 'East',
    CountryAbbrv: 'SS',
    CountryName: 'South Sudan',
    AreaCode: 211,
    officialLanguage: 'Arabic',
    Capital: 'Juba',
    Currency: 'South Sudanese Pound',
    Flag: <img src='https://flagsapi.com/SS/flat/64.png'></img>,
    futureConnections: 1250000,
    PopulationSize: 10913164,
  },

  23: {
    Quadrent: 'East',
    CountryAbbrv: 'TZ',
    CountryName: 'Tanzania',
    AreaCode: 255,
    officialLanguage: 'Kiswahili or Swahili',
    Capital: 'Dodoma',
    Currency: 'Tanzanian shilling',
    Flag: <img src='https://flagsapi.com/TZ/flat/64.png'></img>,
    futureConnections: 15600000,
    PopulationSize: 65497748,
  },

  24: {
    Quadrent: 'East',
    CountryAbbrv: 'UG',
    CountryName: 'Uganda',
    AreaCode: 256,
    officialLanguage: 'English',
    Capital: 'Kampala',
    Currency: 'Ugandan shilling',
    Flag: <img src='https://flagsapi.com/UG/flat/64.png'></img>,
    futureConnections: 13920000,
    PopulationSize: 47249585,
  },

  25: {
    Quadrent: 'East',
    CountryAbbrv: 'ZM',
    CountryName: 'Zambia',
    AreaCode: 260,
    officialLanguage: 'English',
    Capital: 'Lusaka',
    Currency: 'Zambian kwacha',
    Flag: <img src='https://flagsapi.com/ZM/flat/64.png'></img>,
    futureConnections: 5470000,
    PopulationSize: 20017675,
  },

  26: {
    Quadrent: 'East',
    CountryAbbrv: 'ZW',
    CountryName: 'Zimbabwe',
    AreaCode: 263,
    officialLanguage: 'English',
    Capital: 'Harare',
    Currency: 'United States Dollar',
    Flag: <img src='https://flagsapi.com/ZW/flat/64.png'></img>,
    futureConnections: 4650000,
    PopulationSize: 15100000,
  },

  27: {
    Quadrent: 'East',
    CountryAbbrv: 'RE',
    CountryName: 'Réunion Island',
    AreaCode: 262,
    officialLanguage: 'French',
    Capital: 'Saint-Denis',
    Currency: 'Euro',
    Flag: <img src='https://flagsapi.com/RE/flat/64.png'></img>,
    futureConnections: 373500,
    PopulationSize: 874400,
  },

  28: {
    Quadrent: 'East',
    CountryAbbrv: 'YT',
    CountryName: 'Mayotte',
    AreaCode: 262,
    officialLanguage: 'French',
    Capital: 'Mamoudzou',
    Currency: 'Euro',
    Flag: <img src='https://flagsapi.com/YT/flat/64.png'></img>,
    futureConnections: 65700,
    PopulationSize: 282900,
  },

  //South Africa_(29-33)___________________________________________________________________________________________________________________________
  29: {
    Quadrent: 'South',
    CountryAbbrv: 'BW',
    CountryName: 'Botswana',
    AreaCode: 267,
    officialLanguage: 'Setswana',
    Capital: 'Gaborone',
    Currency: 'Botswana pula',
    Flag: <img src='https://flagsapi.com/BW/flat/64.png'></img>,
    futureConnections: 1480000,
    PopulationSize: 2630296,
  },

  30: {
    Quadrent: 'South',
    CountryAbbrv: 'LS',
    CountryName: 'Lesotho',
    AreaCode: 266,
    officialLanguage: 'Sesotho',
    Capital: 'Maseru',
    Currency: 'Lesotho loti',
    Flag: <img src='https://flagsapi.com/LS/flat/64.png'></img>,
    futureConnections: 1130000,
    PopulationSize: 2305825,
  },

  31: {
    Quadrent: 'South',
    CountryAbbrv: 'NA',
    CountryName: 'Namibia',
    AreaCode: 264,
    officialLanguage: 'Unknown',
    Capital: 'Windhoek',
    Currency: 'Namibian Dollar',
    Flag: <img src='https://flagsapi.com/NA/flat/64.png'></img>,
    futureConnections: 1330000,
    PopulationSize: 2567012,
  },

  32: {
    Quadrent: 'South',
    CountryAbbrv: 'ZA',
    CountryName: 'South Africa',
    AreaCode: 27,
    officialLanguage: 'IsiZulu',
    Capital: 'Pretoria / Cape Town',
    Currency: 'South African rand',
    Flag: <img src='https://flagsapi.com/ZA/flat/64.png'></img>,
    futureConnections: 41190000,
    PopulationSize: 60600000,
  },

  33: {
    Quadrent: 'South',
    CountryAbbrv: 'SZ',
    CountryName: 'Eswatini',
    AreaCode: 268,
    officialLanguage: 'English',
    Capital: 'Mbabane',
    Currency: 'Swazi lilangeni',
    Flag: <img src='https://flagsapi.com/SZ/flat/64.png'></img>,
    futureConnections: 553900,
    PopulationSize: 1180000,
  },

  //West Africa__(34-50)_______________________________________________________________________________________________________________________________
  34: {
    Quadrent: 'West',
    CountryAbbrv: 'BJ',
    CountryName: 'Benin',
    AreaCode: 229,
    officialLanguage: 'French',
    Capital: 'Porto-Novo',
    Currency: 'West African CFA franc',
    Flag: <img src='https://flagsapi.com/BJ/flat/64.png'></img>,
    futureConnections: 3660000,
    PopulationSize: 13712828,
  },

  35: {
    Quadrent: 'West',
    CountryAbbrv: 'BF',
    CountryName: 'Burkina Faso',
    AreaCode: 226,
    officialLanguage: 'French',
    Capital: 'Ouagadougou',
    Currency: 'West African CFA franc',
    Flag: <img src='https://flagsapi.com/BF/flat/64.png'></img>,
    futureConnections: 5950000,
    PopulationSize: 22673762,
  },

  36: {
    Quadrent: 'West',
    CountryAbbrv: 'CV',
    CountryName: 'Cabo Verde',
    AreaCode: 238,
    officialLanguage: 'Portuguese',
    Capital: 'Praia',
    Currency: 'Cape Verdean escudo',
    Flag: <img src='https://flagsapi.com/CV/flat/64.png'></img>,
    futureConnections: 349800,
    PopulationSize: 593149,
  },

  37: {
    Quadrent: 'West',
    CountryAbbrv: 'CI',
    CountryName: "Cote D'Ivoire",
    AreaCode: 225,
    officialLanguage: 'French',
    Capital: 'Yamoussoukro',
    Currency: 'West African CFA franc',
    Flag: <img src='https://flagsapi.com/CI/flat/64.png'></img>,
    futureConnections: 9940000,
    PopulationSize: 27720000,
  },

  38: {
    Quadrent: 'West',
    CountryAbbrv: 'GH',
    CountryName: 'Ghana',
    AreaCode: 233,
    officialLanguage: 'English',
    Capital: 'Accra',
    Currency: 'Ghanaian cedi',
    Flag: <img src='https://flagsapi.com/GH/flat/64.png'></img>,
    futureConnections: 16990000,
    PopulationSize: 33475870,
  },

  39: {
    Quadrent: 'West',
    CountryAbbrv: 'GM',
    CountryName: 'Gambia',
    AreaCode: 220,
    officialLanguage: 'English',
    Capital: 'Banjul',
    Currency: 'Dalasi',
    Flag: <img src='https://flagsapi.com/GM/flat/64.png'></img>,
    futureConnections: 1290000,
    PopulationSize: 2705992,
  },

  40: {
    Quadrent: 'West',
    CountryAbbrv: 'GN',
    CountryName: 'Guinea',
    AreaCode: 224,
    officialLanguage: 'French',
    Capital: 'Conakry',
    Currency: 'Guinean franc',
    Flag: <img src='https://flagsapi.com/GN/flat/64.png'></img>,
    futureConnections: 3150000,
    PopulationSize: 13859341,
  },

  41: {
    Quadrent: 'West',
    CountryAbbrv: 'GW',
    CountryName: 'Guinea-Bissau',
    AreaCode: 245,
    officialLanguage: 'Portuguese',
    Capital: 'Bissau',
    Currency: 'West African CFA franc',
    Flag: <img src='https://flagsapi.com/GW/flat/64.png'></img>,
    futureConnections: 571000,
    PopulationSize: 2110000,
  },

  42: {
    Quadrent: 'West',
    CountryAbbrv: 'LR',
    CountryName: 'Liberia',
    AreaCode: 231,
    officialLanguage: 'English',
    Capital: 'Monrovia',
    Currency: 'Liberian Dollar',
    Flag: <img src='https://flagsapi.com/LR/flat/64.png'></img>,
    futureConnections: 1150000,
    PopulationSize: 5302681,
  },

  43: {
    Quadrent: 'West',
    CountryAbbrv: 'ML',
    CountryName: 'Mali',
    AreaCode: 223,
    officialLanguage: 'French',
    Capital: 'Bamako',
    Currency: 'West African CFA franc',
    Flag: <img src='https://flagsapi.com/ML/flat/64.png'></img>,
    futureConnections: 6330000,
    PopulationSize: 22593590,
  },

  44: {
    Quadrent: 'West',
    CountryAbbrv: 'MR',
    CountryName: 'Mauritania',
    AreaCode: 222,
    officialLanguage: 'Arabic',
    Capital: 'Nouakchott',
    Currency: 'Mauritanian ouguiya',
    Flag: <img src='https://flagsapi.com/MR/flat/64.png'></img>,
    futureConnections: 1730000,
    PopulationSize: 4736139,
  },

  45: {
    Quadrent: 'West',
    CountryAbbrv: 'NE',
    CountryName: 'Niger',
    AreaCode: 227,
    officialLanguage: 'French',
    Capital: 'Niamey',
    Currency: 'West African CFA franc',
    Flag: <img src='https://flagsapi.com/NE/flat/64.png'></img>,
    futureConnections: 3720000,
    PopulationSize: 26207977,
  },

  46: {
    Quadrent: 'West',
    CountryAbbrv: 'NG',
    CountryName: 'Nigeria',
    AreaCode: 234,
    officialLanguage: 'English',
    Capital: 'Abuja',
    Currency: 'Nigerian naira',
    Flag: <img src='https://flagsapi.com/NG/flat/64.png'></img>,
    futureConnections: 109200000,
    PopulationSize: 218541212,
  },

  47: {
    Quadrent: 'West',
    CountryAbbrv: 'SN',
    CountryName: 'Senegal',
    AreaCode: 221,
    officialLanguage: 'French',
    Capital: 'Dakar',
    Currency: 'West African CFA franc',
    Flag: <img src='https://flagsapi.com/SN/flat/64.png'></img>,
    futureConnections: 8010000,
    PopulationSize: 17316449,
  },

  48: {
    Quadrent: 'West',
    CountryAbbrv: 'SL',
    CountryName: 'Sierra Leone',
    AreaCode: 232,
    officialLanguage: 'English',
    Capital: 'Freetown',
    Currency: 'Sierra Leonean leone',
    Flag: <img src='https://flagsapi.com/SL/flat/64.png'></img>,
    futureConnections: 2670000,
    PopulationSize: 8605718,
  },

  49: {
    Quadrent: 'West',
    CountryAbbrv: 'TG',
    CountryName: 'Togo',
    AreaCode: 228,
    officialLanguage: 'French',
    Capital: 'Lomé',
    Currency: 'West African CFA franc',
    Flag: <img src='https://flagsapi.com/TG/flat/64.png'></img>,
    futureConnections: 2230000,
    PopulationSize: 8848699,
  },

  50: {
    Quadrent: 'West',
    CountryAbbrv: 'SH',
    CountryName: 'Saint Helena, Ascension and Tristan da Cunha',
    AreaCode: 290,
    officialLanguage: 'English',
    Capital: 'Jamestown',
    Currency: 'Saint Helena pound & pound sterling',
    Flag: <img src='https://flagsapi.com/GB/flat/64.png'></img>,
    futureConnections: 2294,
    PopulationSize: 6135,
  },

  //Central Africa__(51-59)________________________________________________________________________________________________________________________
  51: {
    Quadrent: 'Central',
    CountryAbbrv: 'AO',
    CountryName: 'Angola',
    AreaCode: 244,
    officialLanguage: 'Portuguese',
    Capital: 'Luanda',
    Currency: 'Angolan kwanza',
    Flag: <img src='https://flagsapi.com/AO/flat/64.png'></img>,
    futureConnections: 12410000,
    PopulationSize: 35588987,
  },

  52: {
    Quadrent: 'Central',
    CountryAbbrv: 'CM',
    CountryName: 'Cameroon',
    AreaCode: 237,
    officialLanguage: 'Major African languages',
    Capital: 'Yaoundé',
    Currency: 'Central African CFA franc',
    Flag: <img src='https://flagsapi.com/CM/flat/64.png'></img>,
    futureConnections: 10050000,
    PopulationSize: 27914536,
  },

  53: {
    Quadrent: 'Central',
    CountryAbbrv: 'CF',
    CountryName: 'Central African Republic',
    AreaCode: 236,
    officialLanguage: 'French',
    Capital: 'Bangui',
    Currency: 'Central African CFA franc',
    Flag: <img src='https://flagsapi.com/CF/flat/64.png'></img>,
    futureConnections: 355100,
    PopulationSize: 5579144,
  },

  54: {
    Quadrent: 'Central',
    CountryAbbrv: 'TD',
    CountryName: 'Chad',
    AreaCode: 235,
    officialLanguage: 'French',
    Capital: "N'Djamena",
    Currency: 'Central African CFA franc',
    Flag: <img src='https://flagsapi.com/TD/flat/64.png'></img>,
    futureConnections: 3260000,
    PopulationSize: 17723315,
  },

  55: {
    Quadrent: 'Central',
    CountryAbbrv: 'CD',
    CountryName: 'Democratic Republic of the Congo',
    AreaCode: 243,
    officialLanguage: 'French',
    Capital: 'Kinshasa',
    Currency: 'Congolese franc',
    Flag: <img src='https://flagsapi.com/CD/flat/64.png'></img>,
    futureConnections: 16500000,
    PopulationSize: 99010212,
  },

  56: {
    Quadrent: 'Central',
    CountryAbbrv: 'CG',
    CountryName: 'Republic of the Congo',
    AreaCode: 242,
    officialLanguage: 'French',
    Capital: 'Brazzaville',
    Currency: 'Central African CFA franc',
    Flag: <img src='https://flagsapi.com/CG/flat/64.png'></img>,
    futureConnections: 1450000,
    PopulationSize: 5884363,
  },

  57: {
    Quadrent: 'Central',
    CountryAbbrv: 'GQ',
    CountryName: 'Equatorial Guinea',
    AreaCode: 240,
    officialLanguage: 'Spanish',
    Capital: 'Malabo',
    Currency: 'Central African CFA franc',
    Flag: <img src='https://flagsapi.com/GQ/flat/64.png'></img>,
    futureConnections: 386500,
    PopulationSize: 1530098,
  },

  58: {
    Quadrent: 'Central',
    CountryAbbrv: 'GA',
    CountryName: 'Gabon',
    AreaCode: 241,
    officialLanguage: 'French',
    Capital: 'Libreville',
    Currency: 'Central African CFA franc',
    Flag: <img src='https://flagsapi.com/GA/flat/64.png'></img>,
    futureConnections: 1430000,
    PopulationSize: 2388992,
  },

  59: {
    Quadrent: 'Central',
    CountryAbbrv: 'ST',
    CountryName: 'Sao Tome And Principe',
    AreaCode: 239,
    officialLanguage: 'Portuguese',
    Capital: 'São Tomé',
    Currency: 'Sao Tome and Principe dobra',
    Flag: <img src='https://flagsapi.com/ST/flat/64.png'></img>,
    futureConnections: 72200,
    PopulationSize: 227380,
  },
};

export default AfricanCountryList;
