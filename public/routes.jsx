import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';


ReactDOM.render((
  <Router history={browserHistory} >
      <Route path='/' component={MasterTemplate}>
        <IndexRedirect to='/home' />
        <Route path='home' component={HomePageContent} />
        <Route path='news' component={NewsPageContent} />
        <Route path='locations' component={LocationsPageContent} />
        <Route path='test' component={Playstation4PageContent} />
        <Route path='about' component={AboutPageContent} />

        <Route path='playstation4' component={Playstation4PageContent} ></Route>
        <Route path='playstationVita' component={PlaystationVitaPageContent} ></Route>
        <Route path='xboxone' component={XboxOnePageContent} ></Route>
        <Route path='xbox360' component={Xbox360PageContent} ></Route>
        <Route path='wiiu' component={WiiUPageContent} ></Route>
        <Route path='3ds' component={ ThreeDSPageContent}></Route>


      </Route>
  </Router>
), document.getElementById('content'));
