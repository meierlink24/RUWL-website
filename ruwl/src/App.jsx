
import './style/App.css'
import { HorizontalNav } from './Nav.jsx'
import { SupportContainer, CreatorContainer, DownloadContainer, InformationContainer,  } from './Content.jsx'
import { BackToTop } from './BackToTop.jsx'

export const App =() => {
  return (
    <div className='App'>
      <HorizontalNav />
      <DownloadContainer />
      <InformationContainer />
      <CreatorContainer />
      <SupportContainer />
      <BackToTop />
    </div>
  )
};


export default App;