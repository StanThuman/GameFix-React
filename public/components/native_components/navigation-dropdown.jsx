class NavigationDropdown extends React.Component{

  componentDidMount(){
    $('.ui.dropdown')
      .dropdown({
        transition: 'drop',
        on: 'hover',

      });
  }

  render(){
    return(
      <div className="ui dropdown link item">

          <span className="text">Console</span>

        <i className="dropdown icon"></i>
        <div className="menu">
          <div className="header">Categories</div>
            {this.props.children}
        </div>
      </div>
    );
  }
}
