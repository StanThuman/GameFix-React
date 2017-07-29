class MasterTemplate extends React.Component{
  constructor(props){
    super(props);
    //this.state.selectedLink = props.routes[1].path;
  }
  componentDidMount(){
    //console.log(this.props);
  }

  shouldComponentUpdate(nextProps, nextState){
    // console.log("this props");
    // console.log(this.props);
    // console.log("nextProps");
    // console.log(nextProps.routes);
    //this.selectedLink = nextProps.routes[1].path;
    // console.log("nextState");
    // console.log(nextState);
    // console.log();

    return true;
  }
  render(){
    //this.setState({selectedLink: this.props.routes[1].path})
    return(
      <div>
        <div className="ui column centered grid left aligned">
          <div className="fourteen wide column">
            <Segment classNames="blue inverted">
                <dl>
                  <dt><h1>GameFix</h1></dt>
                  <dd><h3>- Don't have it your way</h3></dd>
                </dl>
                <div className="ui divider"></div>
                <div className="right-align">
                  <span>By StanThuman</span>
                </div>
            </Segment>
          </div>
        </div>
        <div>
          <NavigationBar />
        </div>
        <main className="ui stackable grid">
          {this.props.children}
        </main>

        <div className="ui column centered grid">
            <div className="fourteen wide column">
              <Segment columnSize="twelve" classNames="inverted blue">
                <div className="">
                  GameFix 2050. All Rights Reserved 
                </div>
              </Segment>
            </div>

        </div>
      </div>


    );
  }
}
MasterTemplate.propTypes = { selectedLink: React.PropTypes.string };
MasterTemplate.defaultPropts = { selectedLink: 'nothing yet'};

// <div className="ui column centered grid">
//   <div className="twelve wide column">
//     <Segment columnSize="twelve" classNames="wide column sticky bottom inverted blue">
//       <div className="">
//         Travel Match 2015. All Rights Reserved
//       </div>
//     </Segment>
//   </div>
// </div>
