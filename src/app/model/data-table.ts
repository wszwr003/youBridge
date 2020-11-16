export interface InitTable {
  tableName: string;
  tableItemName: string[];
  tableItem: string[];
}
export const PFInitTable: InitTable = {
  tableName: '植物生长环境历史数据',
  tableItemName: ['温度', '湿度', 'CO2浓度', '光照强度', 'PH值', '电导率'],
  tableItem: ['temp', 'humi', 'co2', 'ligh', 'ph', 'cond'],
};

export const ENVInitTable: InitTable = {
  tableName: '人居环境历史数据',
  tableItemName: ['温度', '湿度', 'PM2.5', 'PM10', 'VOC', '噪声'],
  tableItem: ['temp', 'humi', 'pm25', 'pm10', 'voc', 'noise'],
};
