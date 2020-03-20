import {
  Injectable,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy
} from "@angular/core";
import { Subscription } from "rxjs";
import { IMqttMessage, MqttService } from "ngx-mqtt";
@Injectable({
  providedIn: "root" //TBS:whats this mean? https://angular.cn/guide/dependency-injection#injector-hierarchy-and-service-instances
})
export class MyMqttService {
  public MQRRService: MqttService;  //TBS:现在不知道如何在服务中调用其他服务,暂且将MQTTService暴露出来,直接调用
  private subscription: Subscription;
  topicname: string = "data";
  msg: any;
  isConnected: boolean = false;

  constructor(private _mqttService: MqttService) {
    this.MQRRService  = _mqttService;
    //this.subscribeNewTopic();
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  subscribeNewTopic(): void {
    console.log("WEB:Subscribe new topic");
    // TBS:如何在component中订阅这个订阅
    this.subscription = this._mqttService
      .observe(this.topicname)
      .subscribe((message: IMqttMessage) => {
        this.msg = message;
        //console.log("msg: ", message);
        console.log(
          "WEB:Message: " +
            message.payload.toString() +
            "<br> for topic: " +
            message.topic
        );
      });
    console.log("WEB:subscribed to topic: " + this.topicname);
  }

  sendMsg(topicname: string, msg: string): void {
    // use unsafe publish for non-ssl websockets
    this._mqttService.unsafePublish(topicname, msg, { qos: 1, retain: true });
  }
}
