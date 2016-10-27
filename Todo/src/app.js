import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Root from './components/Root';
import createFinalStore from './store';

const store = createFinalStore();

render(
	<Provider store={store}>
		<Root title="react test">
              		てすと
		</Root>
	</Provider>,
	document.getElementById('app')
);  
  
