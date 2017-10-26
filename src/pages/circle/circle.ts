import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-circle',
  templateUrl: 'circle.html'
})
export class CirclePage {

  constructor(public navCtrl: NavController) {

  }
  items = [];
  doRefresh(refresher) {
       console.log('Begin async operation', refresher);

         setTimeout(() => {
             this.items = [];
             for (var i = 0; i < 30; i++) {
                 this.items.push( this.items.length );
               }
             console.log('Async operation has ended');
            refresher.complete();
           }, 2000);
  }


  cardsimage = [
    {
      name: "这个世界我想跟你谈谈",
      title:"爱你没有错",
      description: "这个世界充满爱，我喜欢.我很满足现在的生活，很享受这种在忙绿中写代码，代码让我富有成就感。",
      imageAvatar: "assets/img/marty-avatar.png",
      image:"assets/img/advance-card-bttf.png",
      comments:"10"
    },
    {
      name: "明天我会告诉",
      title:"将来的你",
      description: "你从所有的事物中浮现,充满了我的灵魂。 你像我灵魂,一只梦的蝴蝶, 你如同忧郁这个字。 我喜欢你是寂静的,好像你已远去。",
      imageAvatar: "assets/img/sarah-avatar.png.jpeg",
      image:"assets/img/advance-card-tmntr.jpg",
      comments:"8"
    },
    {
      name: "这个世界我主宰",
      title:"未来",
      description: "我开始追问上帝，你来自何方，我又该去何方？ 狼一般的血液沸腾着，我无力求生，我太渺小！我是一小小的多米诺骨牌，但没有他那么震撼的效应！空空       的等得结局，只是一个人惨烈的倒下！",
      imageAvatar: "assets/img/ian-avatar.png",
      image:"assets/img/advance-card-jp.jpg",
      comments:"8"
    },

  ];

}
