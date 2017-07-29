class NewsPageContent extends React.Component{
  componentDidMount(){
    $('.anim-fade-in')
    .transition({
      animation: 'fade in',
      duration: 500
    });
  }

  render(){
    return(

      <div className='ui column centered doubling grid row anim-fade-in'>

        <div className='fourteen wide column'>

          <Segment header='News 1'>
            <div className='ui divider'></div>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et malesuada
               fames ac turpis egestas. Vestibulum tortor quam,
               feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero
               sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat
               eleifend leo.
             </p>
          </Segment>
          <Segment header='News 2'>
            <div className='ui divider'></div>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et malesuada
               fames ac turpis egestas. Vestibulum tortor quam,
               feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero
               sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat
               eleifend leo.
             </p>
          </Segment>
          <Segment header='News 3'>
            <div className='ui divider'></div>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et malesuada
               fames ac turpis egestas. Vestibulum tortor quam,
               feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero
               sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat
               eleifend leo.
             </p>
          </Segment>
          <Segment header='News 4'>
            <div className='ui divider'></div>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et malesuada
               fames ac turpis egestas. Vestibulum tortor quam,
               feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero
               sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat
               eleifend leo.
             </p>
          </Segment>
          
        </div>

      </div>
    );

  }

}
