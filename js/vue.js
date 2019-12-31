
/*フォームモーダル、オンオフ。クリックで動く。*/

var app = new Vue({
  el:'.form',
  data: {
    isActive:false,
    input:true,
    count:'',
    email:'',
    name:'',
    post_flg1:false,
    post_flg2:false,
    postConfirm:false,
    postFinish:false,
    error:{}
  },
  computed:{
    charaCount:function(){
      return this.count.length;
    }
  },
  watch: {
    email: function(value){
      if(value === ''){
        this.error.email = 'メールアドレスは必須です。'
        this.input = true;
      }else if(!value.match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)){
          this.error.email = 'メールアドレス形式ではありません。'
          this.input = true;
      }else{
        this.error.email = ''
        this.input = false;
      }
    },
    name: function(value){
      if(value === ''){
        this.error.name = 'できれば名前は入れてください。'
      }else{
        this.error.name = ''
      }
    }
  },
  methods:{
    formsubmit:function(event){
      this.postConfirm = true;
    },
    formCansell:function(event){
      this.postConfirm = false;
    },
    formPost:function(event){
      this.postFinish = true;

      setTimeout(function(){
        location.reload();
      }, 5000);

    }
  }
})



/*ケータリング。クリックすることでいい感じに。*/


new Vue({
  el:'#catering',
  data:{
    menu:1
},
methods:{
  choice1:function(){
    this.menu = 1
    //console.log(this.menu)
  },
  choice2:function(){
    this.menu = 2
    //console.log(this.menu)
  }
}
})



/*About。上に動く。*/
new Vue({
  el:'.js-upto-slide',
  data:{
    scrollY:0,
    elementscroll:0,
    isActiveup:false
  },
  mounted(){
    window.addEventListener('scroll',this.handleScroll);
    //console.log(this.isActiveup);

  },
  methods: {
  handleScroll() {
       this.scrollY = window.scrollY;
       this.heightY = $(".js-upto-slide").offset().top;
       //console.log(this.scrollY );
       //console.log(this.heightY);
       if (this.scrollY >= this.heightY ){
         this.isActiveup = true;
         //console.log(this.isActiveup);
       }else{
         this.isActive = false;
       }
  }
}

})



new Vue({
  el:'.js-left-slide',
  data:{
    scrollY:0,
    isActive:false
  },
  mounted(){
    window.addEventListener('scroll',this.handleScroll);

  },
  methods: {
  handleScroll() {
       this.scrollY = window.scrollY;
       //console.log(this.scrollY );
       if (this.scrollY >= 1500 ){
         this.isActive = true;
         //console.log(this.isActive);
       }
  }
}
})


//価格帯の箇所。ーーーーーーーーーー

Vue.component('all-price',{ //子
  props:['post'],
  template:`
  <table>
  <tr>
  <th>{{post.content}}<br><span style="color:gray;font-size:12px;">¥{{post.price}}</span></th>
  <td class="price-post__button" v-bind:class="{button__active:post.choice_flg}"  
      v-on:click="$emit('emit-price')">
     ¥ {{post.price}} / 1day
  </td>
  </tr>
  </div>
  </table>
  `
})



new Vue({
  el: '#vue-price',//親
  data:{
    allprice:2000,
    posts:[
    {
      id:1,
      price:200,
      content:'Wifi Service',
      disc:"常時接続のインターネットサービス。有線/無線共に提供",
      choice_flg:false
    },

    {
      id:2,
      price:1000,
      content:'Food Service',
      disc:"料金内で各種メニューを食べ飲み放題。",
      choice_flg:false
    },
    {
      id:3,
      price:300,
      content:'Game Service',
      disc:"イベントを盛り上げるテレビゲーム、ボードゲームを提供します。",
      choice_flg:false

    }
  ]},
    methods:{
      priceplus(post){
        post.choice_flg = !post.choice_flg;
        //console.log(post.choice_flg);//postのフラグ状態。
        if(post.choice_flg === true){
          //console.log(this.allprice);
          //console.log(post.price);
          this.allprice += post.price;
        }else{
          this.allprice -= post.price;
        }
        //console.log(this.allprice);
        //console.log(post.price);
      }
    }
  })



//所在地のやつ。
  new Vue({
    el:'.js-show',
    data:{
      scrollY:'',
      isActiveup:false,
    },
    mounted(){
      window.addEventListener('scroll',this.handleScroll);
      //console.log(this.isActiveup);

    },
    methods: {
    handleScroll() {
         this.scrollY = window.scrollY;
         this.heightY = $(".js-show").offset().top;

         console.log(this.heightY);
         //console.log(this.scrollY );
         if (this.scrollY >= this.heightY){
           this.isActiveup = true;
           //console.log(this.isActiveup);
         }else{
           this.isActive = false;
         }
    }
  }
})



// SPメニュー
$('.js-toggle-sp-menu').on('click', function () {
$(this).toggleClass('active');
$('.js-toggle-sp-menu-target').toggleClass('active');
});
