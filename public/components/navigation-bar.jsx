import classNames from 'classnames';

class NavigationBar extends React.Component {
  constructor(props){
    super(props);
    //initialize state values
    //this.state =  {value: null }
    this.nintendo = ['WiiU', '3DS'];
    this.sony = ['Playstation 4', 'Playstation Vita'];
    this.microsoft = ['XBox One', 'XBox 360'];
    // this.state = { isActive: false};

  }

  handleLinkChange(){
      //this.setState({ isActive: true});

      //console.log(this);
  }

  render(){
    return(
      <div className="ui column centered grid">
          <div className="fourteen wide column">
            <div className="ui stackable menu inverted blue" >
              <div className="ui container">
                <Link  className='item' to='/home' activeClassName='active' ><i className="home icon"></i></Link>
                <Link className='item' activeClassName='active' to='/news' >News</Link>

                <NavigationDropdown linkTitle="Console">
                  <DropdownItem title="Nintendo" itemList={ this.nintendo } />
                  <DropdownItem title="Sony" itemList={ this.sony }/>
                  <DropdownItem title="Microsoft" itemList={ this.microsoft }/>
                </NavigationDropdown>

                <Link className="item" activeClassName='active' to='/locations'>Locations</Link>
                <Link className="item" activeClassName='active' to='/about'>About Us</Link>

                <SearchBox classNames="right item" />
              </div>
            </div>
          </div>
      </div>

    );

  }
}
//enforce types for props
NavigationBar.propTypes = {
  drodownValues: React.PropTypes.array
}
//initialize values for deault of props
NavigationBar.defaultProps = {}
