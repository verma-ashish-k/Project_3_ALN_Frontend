interface AfricanCountryList {
  Number: [
    GeoLocation: string,
    CountryAbbrv: string,
    CountryName: string,
    AreaCode: number,
    officialLanguage: string,
    Capital: string,
    Currency: string,
    Flag: string,
    Capital: string,
    Currency: string,
    //  futureConnections  =  "Internet users" All sourced from https://datareportal.com/ - search by country for the year 2022.
    futureConnections: Number,
    PopulationSize: Number
  ];
}
//<img src =  `${https://flagsapi.com/${AfricanCountryList.CountryAbbrv}/flat/64.png>}`</img>;

//North Africa_(1-8)
//East Africa_(9-28)
//South Africa_(29-33)
//West Africa_(34-50)
//Central Africa_(51-59)

const AfricanCountryList = {
  //North Africa__(1-8)_________________________________________________________________________________________________________________________
  1: {
    GeoLocation: 'North',
    CountryAbbrv: 'DZ',
    CountryName: 'Algeria',
    AreaCode: 213,
    officialLanguage: 'Arabic',
    Capital: 'Algiers',
    Currency: 'Algerian dinar',
    Flag: 'DZ',
    futureConnections: 27280000,
    PopulationSize: 44903225,
  },

  2: {
    GeoLocation: 'North',
    CountryAbbrv: 'EG',
    CountryName: 'Egypt',
    AreaCode: 20,
    officialLanguage: 'Arabic',
    Capital: 'Cairo',
    Currency: 'Egyptian Pound',
    Flag: '🇪🇬',
    futureConnections: 75660000,
    PopulationSize: 102880000,
  },

  3: {
    GeoLocation: 'North',
    CountryAbbrv: 'LY',
    CountryName: 'Libya',
    AreaCode: 218,
    officialLanguage: 'Arabic',
    Capital: 'Tripoli',
    Currency: 'Libyan dinar',
    Flag: '🇱🇾',
    futureConnections: 3470000,
    PopulationSize: 6812341,
  },

  4: {
    GeoLocation: 'North',
    CountryAbbrv: 'MA',
    CountryName: 'Morocco',
    AreaCode: 212,
    officialLanguage: 'Arabic',
    Capital: 'Rabat',
    Currency: 'Moroccan dirham',
    Flag: '🇲🇦',
    futureConnections: 31590000,
    PopulationSize: 36400000,
  },

  5: {
    GeoLocation: 'North',
    CountryAbbrv: 'TN',
    CountryName: 'Tunisia',
    AreaCode: 216,
    officialLanguage: 'Arabic',
    Capital: 'Tunis',
    Currency: 'Tunisian dinar',
    Flag: '🇹🇳',
    futureConnections: 8000000,
    PopulationSize: 12356117,
  },

  6: {
    GeoLocation: 'North',
    CountryAbbrv: 'SD',
    CountryName: 'Sudan',
    AreaCode: 249,
    officialLanguage: 'Arabic',
    Capital: 'Khartoum',
    Currency: 'Sudanese Pound',
    Flag: '🇸🇩',
    futureConnections: 14030000,
    PopulationSize: 46874204,
  },

  7: {
    GeoLocation: 'North',
    CountryAbbrv: 'EH',
    CountryName: 'Western Sahara',
    Capital: 'Laayoune',
    Currency: 'Sahrawi peseta, Moroccan dirham',
    Flag: '🇲🇦/🇪🇭',
    futureConnections: 379300,
    PopulationSize: 619000,
  },

  8: {
    GeoLocation: 'North',
    CountryAbbrv: 'ES-CN',
    CountryName: 'Canary Islands',
    Capital: 'Las Palmas de Gran Canaria and Santa Cruz de Tenerife',
    Currency: 'Euro',
    Flag: '🇮🇨',
    futureConnections: null,
    PopulationSize: 2252465,
  },

  //East Africa___(9-28)_______________________________________________________________________________________________________
  9: {
    GeoLocation: 'East',
    CountryAbbrv: 'BI',
    CountryName: 'Burundi',
    AreaCode: 257,
    officialLanguage: 'Kirundi',
    Capital: 'Bujumbura',
    Currency: 'Burundi franc',
    Flag: '🇧🇮',
    futureConnections: 1820000,
    PopulationSize: 12889576,
  },

  10: {
    GeoLocation: 'East',
    CountryAbbrv: 'KM',
    CountryName: 'Comoros',
    AreaCode: 269,
    officialLanguage: 'Arabic',
    Capital: 'Moroni',
    Currency: 'Comorian franc',
    Flag: '🇰🇲',
    futureConnections: 76100000,
    PopulationSize: 836774,
  },

  11: {
    GeoLocation: 'East',
    CountryAbbrv: 'DJ',
    CountryName: 'Djibouti',
    AreaCode: 253,
    officialLanguage: 'French',
    Capital: 'Djibouti (city)',
    Currency: 'Djiboutian franc',
    Flag: '🇩🇯',
    futureConnections: 595400,
    PopulationSize: 1120849,
  },

  12: {
    GeoLocation: 'East',
    CountryAbbrv: 'ER',
    CountryName: 'Eritrea',
    AreaCode: 291,
    officialLanguage: 'Afar',
    Capital: 'Asmara',
    Currency: 'Eritrean nakfa',
    Flag: '🇪🇷',
    futureConnections: 290500,
    PopulationSize: 3630000,
  },

  13: {
    GeoLocation: 'East',
    CountryAbbrv: 'ET',
    CountryName: 'Ethiopia',
    AreaCode: 251,
    officialLanguage: 'Amharic',
    Capital: 'Addis Ababa',
    Currency: 'Ethiopian birr',
    Flag: '🇪🇹',
    futureConnections: 29830000,
    PopulationSize: 123000000,
  },

  14: {
    GeoLocation: 'East',
    CountryAbbrv: 'KE',
    CountryName: 'Kenya',
    AreaCode: 254,
    officialLanguage: 'English',
    Capital: 'Nairobi',
    Currency: 'Kenyan shilling',
    Flag: '🇰🇪',
    futureConnections: 23350000,
    PopulationSize: 54027487,
  },

  15: {
    GeoLocation: 'East',
    CountryAbbrv: 'MG',
    CountryName: 'Madagascar',
    AreaCode: 261,
    officialLanguage: 'French',
    Capital: 'Antananarivo',
    Currency: 'Malagasy ariary',
    Flag: '🇲🇬',
    futureConnections: 6430000,
    PopulationSize: 29611714,
  },

  16: {
    GeoLocation: 'East',
    CountryAbbrv: 'MW',
    CountryName: 'Malawi',
    AreaCode: 265,
    officialLanguage: 'Chichewa',
    Capital: 'Lilongwe',
    Currency: 'Malawian kwacha',
    Flag: '🇲🇼',
    futureConnections: 4030000,
    PopulationSize: 20405317,
  },

  17: {
    GeoLocation: 'East',
    CountryAbbrv: 'MU',
    CountryName: 'Mauritius',
    AreaCode: 230,
    officialLanguage: 'Creole',
    Capital: 'Port Louis',
    Currency: 'Mauritian rupee',
    Flag: '🇲🇺',
    futureConnections: 826900,
    PopulationSize: 1262523,
  },

  18: {
    GeoLocation: 'East',
    CountryAbbrv: 'MZ',
    CountryName: 'Mozambique',
    AreaCode: 258,
    officialLanguage: 'Emakhuwa',
    Capital: 'Maputo',
    Currency: 'Mozambican metical',
    Flag: '🇲🇿',
    futureConnections: 7540000,
    PopulationSize: 32969518,
  },

  19: {
    GeoLocation: 'East',
    CountryAbbrv: 'RW',
    CountryName: 'Rwanda',
    AreaCode: 250,
    officialLanguage: 'Kinyarwanda',
    Capital: 'Kigali',
    Currency: 'Rwandan franc',
    Flag: '🇷🇼',
    futureConnections: 3540000,
    PopulationSize: 13776698,
  },

  20: {
    GeoLocation: 'East',
    CountryAbbrv: 'SC',
    CountryName: 'Seychelles',
    AreaCode: 248,
    officialLanguage: 'Creole',
    Capital: 'Victoria',
    Currency: 'Seychellois rupee',
    Flag: '🇸🇨',
    futureConnections: 78300,
    PopulationSize: 107341,
  },

  21: {
    GeoLocation: 'East',
    CountryAbbrv: 'SO',
    CountryName: 'Somalia',
    AreaCode: 252,
    officialLanguage: 'Somali',
    Capital: 'Mogadishu',
    Currency: 'Somali shilling',
    Flag: '🇸🇴',
    futureConnections: 2270000,
    PopulationSize: 17597511,
  },

  22: {
    GeoLocation: 'East',
    CountryAbbrv: 'SS',
    CountryName: 'South Sudan',
    AreaCode: 211,
    officialLanguage: 'Arabic',
    Capital: 'Juba',
    Currency: 'South Sudanese Pound',
    Flag: '🇸🇸',
    futureConnections: 1250000,
    PopulationSize: 10913164,
  },

  23: {
    GeoLocation: 'East',
    CountryAbbrv: 'TZ',
    CountryName: 'Tanzania',
    AreaCode: 255,
    officialLanguage: 'Kiswahili or Swahili',
    Capital: 'Dodoma',
    Currency: 'Tanzanian shilling',
    Flag: '🇹🇿',
    futureConnections: 15600000,
    PopulationSize: 65497748,
  },

  24: {
    GeoLocation: 'East',
    CountryAbbrv: 'UG',
    CountryName: 'Uganda',
    AreaCode: 256,
    officialLanguage: 'English',
    Capital: 'Kampala',
    Currency: 'Ugandan shilling',
    Flag: '🇺🇬',
    futureConnections: 13920000,
    PopulationSize: 47249585,
  },

  25: {
    GeoLocation: 'East',
    CountryAbbrv: 'ZM',
    CountryName: 'Zambia',
    AreaCode: 260,
    officialLanguage: 'English',
    Capital: 'Lusaka',
    Currency: 'Zambian kwacha',
    Flag: '🇿🇲',
    futureConnections: 5470000,
    PopulationSize: 20017675,
  },

  26: {
    GeoLocation: 'East',
    CountryAbbrv: 'ZW',
    CountryName: 'Zimbabwe',
    AreaCode: 263,
    officialLanguage: 'English',
    Capital: 'Harare',
    Currency: 'United States Dollar',
    Flag: '🇿🇼',
    futureConnections: 4650000,
    PopulationSize: 15100000,
  },

  27: {
    GeoLocation: 'East',
    CountryAbbrv: 'RE',
    CountryName: 'Réunion Island',
    Capital: 'Saint-Denis',
    Currency: 'Euro',
    Flag: '🇷🇪',
    futureConnections: 373500,
    PopulationSize: 874400,
  },

  28: {
    GeoLocation: 'East',
    CountryAbbrv: 'YT',
    CountryName: 'Mayotte',
    Capital: 'Mamoudzou',
    Currency: 'Euro',
    Flag: '🇾🇹',
    futureConnections: 65700,
    PopulationSize: 282900,
  },

  //South Africa_(29-33)___________________________________________________________________________________________________________________________
  29: {
    GeoLocation: 'South',
    CountryAbbrv: 'BW',
    CountryName: 'Botswana',
    AreaCode: 267,
    officialLanguage: 'Setswana',
    Capital: 'Gaborone',
    Currency: 'Botswana pula',
    Flag: '🇧🇼',
    futureConnections: 1480000,
    PopulationSize: 2630296,
  },

  30: {
    GeoLocation: 'South',
    CountryAbbrv: 'LS',
    CountryName: 'Lesotho',
    AreaCode: 266,
    officialLanguage: 'Sesotho',
    Capital: 'Maseru',
    Currency: 'Lesotho loti',
    Flag: '🇱🇸',
    futureConnections: 1130000,
    PopulationSize: 2305825,
  },

  31: {
    GeoLocation: 'South',
    CountryAbbrv: 'NA',
    CountryName: 'Namibia',
    AreaCode: 264,
    officialLanguage: null,
    Capital: 'Windhoek',
    Currency: 'Namibian Dollar',
    Flag: '🇳🇦',
    futureConnections: 1330000,
    PopulationSize: 2567012,
  },

  32: {
    GeoLocation: 'South',
    CountryAbbrv: 'ZA',
    CountryName: 'South Africa',
    AreaCode: 27,
    officialLanguage: 'IsiZulu',
    Capital: 'Pretoria / Cape Town',
    Currency: 'South African rand',
    Flag: '🇿🇦',
    futureConnections: 41190000,
    PopulationSize: 60600000,
  },

  33: {
    GeoLocation: 'South',
    CountryAbbrv: 'SZ',
    CountryName: 'Eswatini',
    AreaCode: 268,
    officialLanguage: 'English',
    Capital: 'Mbabane',
    Currency: 'Swazi lilangeni',
    Flag: '🇸🇿',
    futureConnections: 553900,
    PopulationSize: 1180000,
  },

  //West Africa__(34-50)_______________________________________________________________________________________________________________________________
  34: {
    GeoLocation: 'West',
    CountryAbbrv: 'BJ',
    CountryName: 'Benin',
    AreaCode: 229,
    officialLanguage: 'French',
    Capital: 'Porto-Novo',
    Currency: 'West African CFA franc',
    Flag: '🇧🇯',
    futureConnections: 3660000,
    PopulationSize: 13712828,
  },

  35: {
    GeoLocation: 'West',
    CountryAbbrv: 'BF',
    CountryName: 'Burkina Faso',
    AreaCode: 226,
    officialLanguage: 'French',
    Capital: 'Ouagadougou',
    Currency: 'West African CFA franc',
    Flag: '🇧🇫',
    futureConnections: 5950000,
    PopulationSize: 22673762,
  },

  36: {
    GeoLocation: 'West',
    CountryAbbrv: 'CV',
    CountryName: 'Cabo Verde',
    AreaCode: 238,
    officialLanguage: 'Portuguese',
    Capital: 'Praia',
    Currency: 'Cape Verdean escudo',
    Flag: '🇨🇻',
    futureConnections: 349800,
    PopulationSize: 593149,
  },

  37: {
    GeoLocation: 'West',
    CountryAbbrv: 'CI',
    CountryName: "Cote D'Ivoire",
    AreaCode: 225,
    officialLanguage: 'French',
    Capital: 'Yamoussoukro',
    Currency: 'West African CFA franc',
    Flag: '🇨🇮',
    futureConnections: 9940000,
    PopulationSize: 27720000,
  },

  38: {
    GeoLocation: 'West',
    CountryAbbrv: 'GH',
    CountryName: 'Ghana',
    AreaCode: 233,
    officialLanguage: 'English',
    Capital: 'Accra',
    Currency: 'Ghanaian cedi',
    Flag: '🇬🇭',
    futureConnections: 16990000,
    PopulationSize: 33475870,
  },

  39: {
    GeoLocation: 'West',
    CountryAbbrv: 'GM',
    CountryName: 'Gambia',
    AreaCode: 220,
    officialLanguage: 'English',
    Capital: 'Banjul',
    Currency: 'Dalasi',
    Flag: '🇬🇲',
    futureConnections: 1290000,
    PopulationSize: 2705992,
  },

  40: {
    GeoLocation: 'West',
    CountryAbbrv: 'GN',
    CountryName: 'Guinea',
    AreaCode: 224,
    officialLanguage: 'French',
    Capital: 'Conakry',
    Currency: 'Guinean franc',
    Flag: '🇬🇳',
    futureConnections: 3150000,
    PopulationSize: 13859341,
  },

  41: {
    GeoLocation: 'West',
    CountryAbbrv: 'GW',
    CountryName: 'Guinea-Bissau',
    AreaCode: 245,
    officialLanguage: 'Portuguese',
    Capital: 'Bissau',
    Currency: 'West African CFA franc',
    Flag: '🇬🇼',
    futureConnections: 571000,
    PopulationSize: 2110000,
  },

  42: {
    GeoLocation: 'West',
    CountryAbbrv: 'LR',
    CountryName: 'Liberia',
    AreaCode: 231,
    officialLanguage: 'English',
    Capital: 'Monrovia',
    Currency: 'Liberian Dollar',
    Flag: '🇱🇷',
    futureConnections: 1150000,
    PopulationSize: 5302681,
  },

  43: {
    GeoLocation: 'West',
    CountryAbbrv: 'ML',
    CountryName: 'Mali',
    AreaCode: 223,
    officialLanguage: 'French',
    Capital: 'Bamako',
    Currency: 'West African CFA franc',
    Flag: '🇲🇱',
    futureConnections: 6330000,
    PopulationSize: 22593590,
  },

  44: {
    GeoLocation: 'West',
    CountryAbbrv: 'MR',
    CountryName: 'Mauritania',
    AreaCode: 222,
    officialLanguage: 'Arabic',
    Capital: 'Nouakchott',
    Currency: 'Mauritanian ouguiya',
    Flag: '🇲🇷',
    futureConnections: 1730000,
    PopulationSize: 4736139,
  },

  45: {
    GeoLocation: 'West',
    CountryAbbrv: 'NE',
    CountryName: 'Niger',
    AreaCode: 227,
    officialLanguage: 'French',
    Capital: 'Niamey',
    Currency: 'West African CFA franc',
    Flag: '🇳🇪',
    futureConnections: 3720000,
    PopulationSize: 26207977,
  },

  46: {
    GeoLocation: 'West',
    CountryAbbrv: 'NG',
    CountryName: 'Nigeria',
    AreaCode: 234,
    officialLanguage: 'English',
    Capital: 'Abuja',
    Currency: 'Nigerian naira',
    Flag: '🇳🇬',
    futureConnections: 109200000,
    PopulationSize: 218541212,
  },

  47: {
    GeoLocation: 'West',
    CountryAbbrv: 'SN',
    CountryName: 'Senegal',
    AreaCode: 221,
    officialLanguage: 'French',
    Capital: 'Dakar',
    Currency: 'West African CFA franc',
    Flag: '🇸🇳',
    futureConnections: 8010000,
    PopulationSize: 17316449,
  },

  48: {
    GeoLocation: 'West',
    CountryAbbrv: 'SL',
    CountryName: 'Sierra Leone',
    AreaCode: 232,
    officialLanguage: 'English',
    Capital: 'Freetown',
    Currency: 'Sierra Leonean leone',
    Flag: '🇸🇱',
    futureConnections: 2670000,
    PopulationSize: 8605718,
  },

  49: {
    GeoLocation: 'West',
    CountryAbbrv: 'TG',
    CountryName: 'Togo',
    AreaCode: 228,
    officialLanguage: 'French',
    Capital: 'Lomé',
    Currency: 'West African CFA franc',
    Flag: '🇹🇬',
    futureConnections: 2230000,
    PopulationSize: 8848699,
  },

  50: {
    GeoLocation: 'West',
    CountryAbbrv: 'SH',
    CountryName: 'Saint Helena, Ascension and Tristan da Cunha',
    Capital: 'Jamestown',
    Currency: 'Saint Helena pound & pound sterling',
    Flag: '🇸🇭',
    futureConnections: 2294,
    PopulationSize: 6135,
  },

  //Central Africa__(51-59)________________________________________________________________________________________________________________________
  51: {
    GeoLocation: 'Central',
    CountryAbbrv: 'AO',
    CountryName: 'Angola',
    AreaCode: 244,
    officialLanguage: 'Portuguese',
    Capital: 'Luanda',
    Currency: 'Angolan kwanza',
    Flag: '🇦🇴',
    futureConnections: 12410000,
    PopulationSize: 35588987,
  },

  52: {
    GeoLocation: 'Central',
    CountryAbbrv: 'CM',
    CountryName: 'Cameroon',
    AreaCode: 237,
    officialLanguage: 'Major African languages',
    Capital: 'Yaoundé',
    Currency: 'Central African CFA franc',
    Flag: '🇨🇲',
    futureConnections: 10050000,
    PopulationSize: 27914536,
  },

  53: {
    GeoLocation: 'Central',
    CountryAbbrv: 'CF',
    CountryName: 'Central African Republic',
    AreaCode: 236,
    officialLanguage: 'French',
    Capital: 'Bangui',
    Currency: 'Central African CFA franc',
    Flag: '🇨🇫',
    futureConnections: 355100,
    PopulationSize: 5579144,
  },

  54: {
    GeoLocation: 'Central',
    CountryAbbrv: 'TD',
    CountryName: 'Chad',
    AreaCode: 235,
    officialLanguage: 'French',
    Capital: "N'Djamena",
    Currency: 'Central African CFA franc',
    Flag: '🇹🇩',
    futureConnections: 3260000,
    PopulationSize: 17723315,
  },

  55: {
    GeoLocation: 'Central',
    CountryAbbrv: 'CD',
    CountryName: 'Democratic Republic of the Congo',
    AreaCode: 243,
    officialLanguage: 'French',
    Capital: 'Kinshasa',
    Currency: 'Congolese franc',
    Flag: '🇨🇩',
    futureConnections: 16500000,
    PopulationSize: 99010212,
  },

  56: {
    GeoLocation: 'Central',
    CountryAbbrv: 'CG',
    CountryName: 'Republic of the Congo',
    AreaCode: 242,
    officialLanguage: 'French',
    Capital: 'Brazzaville',
    Currency: 'Central African CFA franc',
    Flag: '🇨🇬',
    futureConnections: 1450000,
    PopulationSize: 5884363,
  },

  57: {
    GeoLocation: 'Central',
    CountryAbbrv: 'GQ',
    CountryName: 'Equatorial Guinea',
    AreaCode: 240,
    officialLanguage: 'Spanish',
    Capital: 'Malabo',
    Currency: 'Central African CFA franc',
    Flag: '🇬🇶',
    futureConnections: 386500,
    PopulationSize: 1530098,
  },

  58: {
    GeoLocation: 'Central',
    CountryAbbrv: 'GA',
    CountryName: 'Gabon',
    AreaCode: 241,
    officialLanguage: 'French',
    Capital: 'Libreville',
    Currency: 'Central African CFA franc',
    Flag: '🇬🇦',
    futureConnections: 1430000,
    PopulationSize: 2388992,
  },

  59: {
    GeoLocation: 'Central',
    CountryAbbrv: 'ST',
    CountryName: 'Sao Tome And Principe',
    AreaCode: 239,
    officialLanguage: 'Portuguese',
    Capital: 'São Tomé',
    Currency: 'Sao Tome and Principe dobra',
    Flag: '🇸🇹',
    futureConnections: 72200,
    PopulationSize: 227380,
  },
};

export default AfricanCountryList;