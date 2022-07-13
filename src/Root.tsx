import { BrowserRouter as Router } from 'react-router-dom';
import App from '@/App';
import { RecoilRoot } from 'recoil';
import { ModalContainer } from '@/components/containers';

function Root() {
  return (
    <RecoilRoot>
      <Router basename={import.meta.env.BASE_URL}>
        <App />
      </Router>
      <ModalContainer />
    </RecoilRoot>
  );
}

export default Root;
