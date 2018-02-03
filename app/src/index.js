import React from 'react';
import ReactDOM from 'react-dom';
import App from './common/Layout';
import registerServiceWorker from './registerServiceWorker';

import 'antd/dist/antd.css';
import './index.less'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
