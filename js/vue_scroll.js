var photos = [
    {
        id: 0,
        name: 'IMG_5131.png',
        date: '2017/4/8',
        place: '沖縄県,竹富町',
        title: '竹富島のホテル'
    },
    {
        id: 1,
        name: 'IMG_7338.png',
        date: '2018/10/30',
        place: '山梨県,山梨市',
        title: '秋の西沢渓谷'
    },
    {
        id: 2,
        name: 'IMG_2146.png',
        date: '2018/5/10',
        place: '沖縄県,那覇市',
        title: '那覇市のホテル'
    },
    {
        id: 3,
        name: 'IMG_6479.png',
        date: '2018/5/5',
        place: '鹿児島県,奄美市',
        title: '奄美大島のマングローブ'
    },
    {
        id: 4,
        name: 'IMG_4553.png',
        date: '2018/11/11',
        place: '神奈川県,箱根町',
        title: '箱根美術館の紅葉'
    },
    {
        id: 5,
        name: 'IMG_6783.png',
        date: '2018/5/11',
        place: '千葉県,大多喜町',
        title: '養老渓谷の春'
    }
];



//photodispkayカスタムコンポーネント部分

Vue.component('photo-display',{
  props:['photo'],
  template:`
  <div>
    <h2>{{ photo.title}}</h2>
    <img @click="$emit('next-photo')" width="320" height="240" v-bind:src="'photos/' + photo.name">
    <p>{{ photo.date }}: {{ photo.place }}</p>
  </div>
  `
});

//control-panelカスタムコンポーネント部分
//@change="$emit('toggle-auto',auto)"では、チェックボックスの状態が変わると、
//toggle-autoイベントをautoプロパティを引数に受け渡す
Vue.component('control-panel',{
  template:`
  <div>
    <button @click="$emit('prev-photo')">前へ</button>
    <button @click="$emit('next-photo')">次へ</button>
    <label for="auto">自動：</label>
    <input type=checkbox id="auto" v-model="auto" @change="$emit('toggle-auto',auto)">
    </div>
    `,
    //初期値に戻す
    data:function(){
      return{
        auto:false
      };
    }
});

//次に、vueインスタンスのコンストラクタ部分のリストを示す

var app = new Vue({
    el: '#app',
    data: {
        auto: false,
        photos: photos,
        id: 0,
        photo: null,
        timerID: null,
        // スライドの間隔(msec)
        SLIDEINTERVAL: 3000
    },
  methods:{
    //次のスライドへ
    nextPhoto:function(){
      this.id++;
      if(this.id >= this.photos.lenght){
        this.id = 0;
      }
      this.photo = this.photos[this.id];
    },
    //前のスライドへ
    prevPhoto:function(){
      this.id--;
      if(this.id < 0){
        this.id = this.photos.length - 1;
      }
      this.photo = this.photos[this.id];
    },
    //自動モードをオン、オフする
    toggleAuto:function(auto){
      if (this.auto == auto) return;
      this.auto = auto;
      //自動で行う場合はslideshowメソッド
      if(auto) {
          this.slideShow();
      } else {
          clearTimeout(this.timerID);
      }
  },
    //スライドショーを実行
    slideShow:function(){
      this.nextPhoto();
      //thisを退避
      var self = this;
      //settimeoutは指定された遅延の後に関数またはコードを実行する。
      //この場合、自分自身のslideShowメソッドを行う、SLIDEINTERVAL後に。
      this.timerID = setTimeout(self.slideShow,self.SLIDEINTERVAL);
    }
  },
  //最初のスライドを設定
  created:function(){
    this.photo = this.photos[this.id]
  }
});
