'use strict';//厳格モード

class Rolling extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      clickdone:false
    }
    this.handleClickRolling = this.handleClickRolling.bind(this);
  }

  handleClickRolling(e){
    this.setState({
      clickdone:true
    });
    setTimeout(function(){
        location.href="https://www.google.com/?hl=ja";
    },1800);
  }



  render(){
    console.log(this.state.clickdone);
    const click = (this.state.clickdone) ? //renderの中でかかないとダメ！
      'slide_move':
      '';

    return(
    <div>
    <button type="button" name="button" onClick={this.handleClickRolling}>Enter</button>
    <section className="top">
      <img src="img/top.jpg" alt="ミーティング" className="top__image" className={click}/>
    </section>
    </div>
  );
  }
}

ReactDOM.render(
  <Rolling />,
  document.getElementById('app')
);

/*function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

var user = {
  firstName: 'kaz',
  lastName: 'kichi'
};

var element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('app')
);
*/
