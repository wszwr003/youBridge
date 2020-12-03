export interface SensorData {
  device_id: string;
  key?: string;
  csq?: number;
  pm25: number;
  co2: number;
  temp: number;
  humi: number;
  voc_lvl: number;
  Air_H?: number;
  Air_T?: number;
  Shine?: number;
  Soil_Temperature?: number;
  PH?: number;
  CO2?: number;
  H2S?: number;
  PM25?: number;
  PM10?: number;
  Noise?: number;
  Speed?: number;
  Direction?: number;
  Conductivity?: number;
  VOC?: number;
  Water_Height?: number;
  lat?: number;
  lon?: number;
  configure?: string;
  time?: number;
}

export interface DeviceState {
  device_id: string;
  state: boolean;
}
export interface GPS {
  deviceId: string;
  locString?: string;
  lat: number;
  lng: number;
}
export const LOCATIONS: GPS[] = [
  {
    deviceId: "861011047511899",
    lat: 30.5761,
    lng: 120.678724,
    locString: "地址：海宁市科技绿洲6号楼",
  },
  {
    deviceId: "861011047455360",
    lat: 30.5761,
    lng: 120.678724,
    locString: "地址：海宁市科技绿洲6号楼",
  },
  {
    deviceId: "861011047485656",
    lat: 30.5761,
    lng: 120.678724,
    locString: "地址：海宁市科技绿洲6号楼",
  },
  {
    deviceId: "861011047485565",
    lat: 30.5761,
    lng: 120.678724,
    locString: "地址：海宁市科技绿洲6号楼",
  },
  {
    deviceId: "861011047485599", //上海
    lat: 31.168783,
    lng: 121.403351,
    locString: "地址：上海徐汇区田州路99号",
  },
  {
    deviceId: "861011047418186",

    lat: 30.5761,
    lng: 120.678724,
    locString: "地址：海宁市科技绿洲6号楼",
  },
  {
    deviceId: "861011047486225",

    lat: 30.5761,
    lng: 120.678724,
    locString: "地址：海宁市科技绿洲6号楼",
  },
  {
    deviceId: "861011047486209", //上海

    lat: 31.168783,
    lng: 121.403351,
    locString: "地址：上海徐汇区田州路99号",
  },
  {
    deviceId: "861011047486233",

    lat: 30.5761,
    lng: 120.678724,
    locString: "地址：海宁市科技绿洲6号楼",
  },
  {
    deviceId: "861011047486134",
    lat: 30.5761,
    lng: 120.678724,
    locString: "地址：海宁市科技绿洲6号楼",
  },
];
