class HomePageContent extends React.Component{
  componentDidMount(){
    $('.anim-fade-in')
    .transition({
      animation: 'fade in',
      duration : 500

    });
  }

  render(){
    return(
      <div className="ui two column centered doubling grid row anim-fade-in">
          <div className="ten wide column">
            <Segment header="GameFix News Header 1">

              <div className="ui divider"></div>
              <p>
                Pellentesque habitant morbi tristique senectus et netus et malesuada
                 fames ac turpis egestas. Vestibulum tortor quam,
                 feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero
                 sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat
                 eleifend leo.
               </p>
               <p>
                 Pellentesque habitant morbi tristique senectus et netus et malesuada
                  fames ac turpis egestas. Vestibulum tortor quam,
                  feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero
                  sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat
                  eleifend leo.
                </p>
                <p>
                  Pellentesque habitant morbi tristique senectus et netus et malesuada
                   fames ac turpis egestas. Vestibulum tortor quam,
                   feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero
                   sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat
                   eleifend leo.
                 </p>
            </Segment>
            <Segment header="GameFix News Header 2">
              <div className="ui divider"></div>
              <p>
                Pellentesque habitant morbi tristique senectus et netus et malesuada
                 fames ac turpis egestas. Vestibulum tortor quam,
                 feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero
                 sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat
                 eleifend leo.
               </p>
               <p>
                 Pellentesque habitant morbi tristique senectus et netus et malesuada
                  fames ac turpis egestas. Vestibulum tortor quam,
                  feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero
                  sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat
                  eleifend leo.
                </p>
                <p>
                  Pellentesque habitant morbi tristique senectus et netus et malesuada
                   fames ac turpis egestas. Vestibulum tortor quam,
                   feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero
                   sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat
                   eleifend leo.
                 </p>
            </Segment>
          </div>
          <div className="four wide column">
            <div className="ui raised segment">
              <h3>column 2</h3>
              <div className="ui divider"></div>
              <p>
                Pellentesque habitant morbi tristique senectus et netus et malesuada
                 fames ac turpis egestas. Vestibulum tortor quam,
                 feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero
                 sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat
                 eleifend leo.
               </p>
            </div>
            <div className="ui raised segment">
              <h3>column 2</h3>
              <div className="ui divider"></div>
              <p>
                Pellentesque habitant morbi tristique senectus et netus et malesuada
                 fames ac turpis egestas. Vestibulum tortor quam,
               </p>
            </div>
          </div>
      </div>
    );
  }
}
