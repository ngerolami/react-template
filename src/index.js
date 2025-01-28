import React from 'react'
import {
import { render } from 'react-dom'
```
Combine the `import` statements for better readability.

src/containers/App.js:

```
} from 'react-dom'

import App from './containers/App'

render(
  <App />,
  document.getElementById('root'),
)
