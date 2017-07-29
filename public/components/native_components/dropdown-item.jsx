import React from 'react';
import { Link } from 'react-router';

class DropdownItem extends React.Component{
  constructor(props){
    super(props);

  }
  componentDidMount(){
    $('.ui.dropdown')
      .dropdown({
        transition: 'drop',
        on: 'hover'
      });
  }
  render(){
    var dropdownNode = this.props.itemList.map((links, index) => {

      var url = '/' + links.replace(/\s/g, '').toLowerCase();
      return(
        <Link to={url} className="item" key={ index }>{links}</Link>
      );
    });
    return(
          <div className="item">
            <i className="dropdown icon"></i>
            <span className="text">{this.props.title}</span>
            <div className="menu">
              {dropdownNode}
            </div>
          </div>
    );
  }
}
