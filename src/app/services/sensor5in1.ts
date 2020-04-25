export interface SensorData {
  device_id: string;
  key?: string;
  csq?: number;
  pm25: number;
  co2: number;
  temp: number;
  humi: number;
  voc_lvl: number;
  lat?: number;
  lon?: number;
  configure?: string;
  time?: string;
}

export interface DeviceState {
  device_id: string;
  state: boolean;
  timer?: NodeJS.Timer;
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
    deviceId: "861011047418186", //上海

    lat: 31.168783,
    lng: 121.403351,
    locString: "地址：上海徐汇区田州路99号",
  },
  {
    deviceId: "861011047485599",

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
    deviceId: "861011047486134", //上海

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
    deviceId: "861011047486209",
    lat: 30.5761,
    lng: 120.678724,
    locString: "地址：海宁市科技绿洲6号楼",
  },
];
