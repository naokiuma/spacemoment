
/*フォームモーダル、オンオフ。クリックで動く。*/

var app = new Vue({
  el:'.form',
  data: {
    isActive:false,
    email:'',
    name:'',
    error:{}
  },
  watch: {
    email: function(value){
      if(value === ''){
        this.error.email = 'メールアドレスは必須です。'
      }else{
        this.error.email = ''
      }
    },
    name: function(value){
      if(value === ''){
        this.error.name = '名前は必須です。'
      }else{
        this.error.name = ''
      }
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
       if (this.scrollY >= 2515 ){
         this.isActive = true;
         //console.log(this.isActive);
       }
  }
}
})



Vue.component('all-price',{ //子
  props:['post'],
  template:`
  <div class="price-post">
  <h3>¥{{post.price}}/一人当たり</h3>
  <button class="price-post__button" v-bind:class="{button__active:post.choice_flg}"  v-on:click="$emit('emit-price')">
  <div v-html="post.content"></div>
  </button>

  </div>`
})


new Vue({
  el: '#vue-price',//親
  data:{
    allprice:2000,
    posts:[
    {
      id:1,
      price:1000,
      content:'Food Service',
      choice_flg:false

    },
    {
      id:2,
      price:500,
      content:'Game Service',
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



//場所のやつ。
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
