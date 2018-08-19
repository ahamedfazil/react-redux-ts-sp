import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import App from './containers/App';
import './styles/app.scss';
import configureStore from './store/configureStore';

const storeObj = configureStore();

ReactDOM.render(
   <Fabric>
    <Provider store={storeObj}>
      <App />
    </Provider>
  </Fabric>
  ,
  document.getElementById('root') as HTMLElement
);
