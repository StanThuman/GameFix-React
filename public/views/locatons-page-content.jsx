class LocationsPageContent extends React.Component{
  componentDidMount(){
    $('.anim-fade-in')
    .transition({
      animation: 'fade in',
      duration : 500
    });
  }

  render(){
    return(

      <div className='ui column centered doubling grid row anim-fade-in'>
        <div className='fourteen wide column left aligned'>
          <Segment header='Main HQ'>

            <div className="ui divider"></div>

            <img className='ui small left floated image' src='ff7-midgar.jpg'/>
            <span>
              We have placed our main HQ in the city of Midgar within the Sector 7 slums.
              We felt that this location, this place, was the perfect place to put it.
              It has 150 floors dedicated to our service. You can even see Shinra from here!
              Access to the top 20 floors require keycards because enterprise. Sector 7 is a
              prospering community with so much potential. Theres an awesome playground nearby
              and plenty of stores to supply everyone with their supplies. People are always
              Outside playing or helping the community. If you're interested in working here,
              please notify me. We do not accept people with past experiences at Shinra. Blah blah
              blh blah blha blha blah blah blah
            </span>
            <p> </p>
            <p>Main CEO - <i>Stan Thuman</i></p>

          </Segment>
          <Segment header='Human Resources Department'>
            <div className='ui divider'></div>
            <img className='ui small left floated image' src='hr.jpg'/>
            <span>
              Onett is where we've placed our HR department. It's so peacful blah
              blah blah. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              sed lectus pharetra, posuere ante eu, feugiat purus. Vivamus ultrices
              velit ac nunc dictum auctor. Proin vitae gravida nisi, quis
              condimentum magna. Suspendisse volutpat urna eu nibh tempus
              malesuada. Sed non magna lacus. In egestas tempor sem. Curabitur
              quis mollis sapien. In ac odio porttitor, facilisis risus ut, sagittis
              erat. Duis pulvinar eros eget quam dictum faucibus. Etiam faucibus
              dapibus quam, sed volutpat mauris dictum vel. Maecenas libero libero,
               mattis non viverra nec, dictum at diam. Ut sit amet turpis nibh.
             </span>
             <p> </p>
            <p>Human Resources Manager - <i>Stan Thuman</i></p>

          </Segment>
          <Segment header='Department of Deparments'>
            <div className='ui divider'></div>
            <img className='ui small left floated image' src='city1.jpg'/>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              sed lectus pharetra, posuere ante eu, feugiat purus. Vivamus ultrices
              velit ac nunc dictum auctor. Proin vitae gravida nisi, quis
              condimentum magna. Suspendisse volutpat urna eu nibh tempus
              malesuada. Sed non magna lacus. In egestas tempor sem. Curabitur
              quis mollis sapien. In ac odio porttitor, facilisis risus ut, sagittis
              erat. Duis pulvinar eros eget quam dictum faucibus. Etiam faucibus
              dapibus quam, sed volutpat mauris dictum vel. Maecenas libero libero,
              mattis non viverra nec, dictum at diam. Ut sit amet turpis nibh.
              erat. Duis pulvinar eros eget quam dictum faucibus. Etiam faucibus
              apibus quam, sed volutpat mauris dictum vel. Maecenas libero libero,
             </span>
             <p> </p>
            <p>Department of Departments Manager - <i>Stan Thuman</i></p>
          </Segment>
          <Segment header='Header of Sections'>
            <div className='ui divider'></div>
            <img className='ui small left floated image' src='city2.jpg'/>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              sed lectus pharetra, posuere ante eu, feugiat purus. Vivamus ultrices
              velit ac nunc dictum auctor. Proin vitae gravida nisi, quis
              condimentum magna. Suspendisse volutpat urna eu nibh tempus
              malesuada. Sed non magna lacus. In egestas tempor sem. Curabitur
              quis mollis sapien. In ac odio porttitor, facilisis risus ut, sagittis
              erat. Duis pulvinar eros eget quam dictum faucibus. Etiam faucibus
              dapibus quam, sed volutpat mauris dictum vel. Maecenas libero libero,
              mattis non viverra nec, dictum at diam. Ut sit amet turpis nibh.
              erat. Duis pulvinar eros eget quam dictum faucibus. Etiam faucibus
              dapibus quam, sed volutpat mauris dictum vel. Maecenas libero libero,

             </span>
             <p> </p>
            <p>Header of Sections Manager - <i>Stan Thuman</i></p>
          </Segment>

        </div>
      </div>

    );

  }

}
