class AboutPageContent extends React.Component{
  componentDidMount(){
    $('.anim-fade-in')
    .transition({
      animation: 'fade in',
      duration : 500

    });
  }
  render(){
    return(

      <div className='ui two column centered stacking grid row anim-fade-in'>
        <div className='fourteen wide column'>
          <Segment header='Our One man Company'>
            <div className='ui divider'></div>
              <p>
                Welcom to GameFix! The place to cure that gaming addiction! I wanted a place where
                gamers could go to get all there gaming needs (minus the purchasing). Check out
                our collection of gameplay videos and reviews of all the newest games! You can also
                check out the latest news on the game companies as well! Enjoy your time here!
                Meet the staff!
               </p>
          </Segment>
        </div>

        <div className='three wide column fixed-width-height'>
          <Segment header="">

              <img className='ui small image' src='stanThuman.png' />

          </Segment>
        </div>
        <div className='eleven wide column'>
          <Segment header='CEO Overlord'>
            <span>Stan Thuman is currently the CEO, HR representative, Front-end
            developer, Back-end devloper, and pretty much every postion you can
            think of. He created this site on his own. He likes videogames so
             much that he created a website about them! Stan Thuman Currently
             lives in the United states. He's going to school currently and
             will graduate in a year. He also hopes he can get a part time
             job under Mr. Yves to work on his project as well Y( &gt; _ &lt; )Y
             fingers crossed. Maybe, just maybe.
            </span>

            <p>- <i>Stan Thuman  Midgar HQ</i></p>
          </Segment>
        </div>
      </div>

    );
  }
}
