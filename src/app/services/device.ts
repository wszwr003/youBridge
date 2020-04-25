export interface Device {
  device_id: number; //数据库里的key字段不需要,命名相同需要注意,这里是设备序列号
  device_no: string; //数据库里的key字段不需要,命名相同需要注意,这里是设备序列号
  key: string;
  ver: string;
  device_state: number;
  location: string;
  lat: number;
  lon: number;
}
