class SearchBox extends React.Component{

  componentDidMount(){

  }
  render(){
    return(
      <div className={this.props.classNames}>
        <div className="ui icon input">
          <input type="text" placeholder="does not work" />
          <i className="search icon"></i>
        </div>
      </div>

    );
  }

}
