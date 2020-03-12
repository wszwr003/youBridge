import { Injectable } from "@angular/core";
import * as mqttt from "mqtt";
@Injectable({
  providedIn: "root"
})
export class MyMqttService {
  constructor() {
    var client_to_local = mqttt.connect("mqtt://127.0.0.1:1883");
    client_to_local.on("connect", function() {
      client_to_local.subscribe("data", { qos: 1 }); //订阅主题为data的消息
    });

    client_to_local.on("message", function(top, message) {
      //接收订阅的消息推送
      console.log(
        "C<--S 接收到订阅的消息,topic:",
        top,
        ",DATA:",
        message.toString()
      );
      //console.log("C<--S 接收到订阅的消息,topic:", top,",温度:", JSON.parse(message.toString()).temp);
    });
  }

  connectAndSubscribe() {
    var client_to_local = mqttt.connect("mqtt://127.0.0.1:1883");
    client_to_local.on("connect", function() {
      client_to_local.subscribe("data", { qos: 1 }); //订阅主题为data的消息
    });
    return client_to_local;
  }

  getSubscribe(connect) {
    connect.on("message", function(top, message) {
      //接收订阅的消息推送
      console.log(
        "C<--S 接收到订阅的消息,topic:",
        top,
        ",DATA:",
        message.toString()
      );
      //console.log("C<--S 接收到订阅的消息,topic:", top,",温度:", JSON.parse(message.toString()).temp);
    });

  }
}
