class Segment extends React.Component{
  constructor(props){
    super(props);
    this.runOnce = true;
  }
  componentDidMount(){
    if(this.runOnce)
      $('.stuff').transition('fade');

    this.runOnce = false;
  }
  render(){
    return(

      <div style={this.color} className={ "ui segment raised " + this.props.classNames}>
        <div>
          <h3>{this.props.header}</h3>
          {this.props.children}
        </div>
      </div>

    );
  }
}
