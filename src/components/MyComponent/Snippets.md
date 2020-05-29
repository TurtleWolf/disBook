# VS Code ES7 React/Redux/React-Native/JS snippets

## close entry scroll

[![Version](https://vsmarketplacebadge.apphb.com/version/dsznajder.es7-react-js-snippets.svg)](https://vsmarketplacebadge.apphb.com/version-short/dsznajder.es7-react-js-snippets.svg)

[![Ratings](https://vsmarketplacebadge.apphb.com/rating-short/dsznajder.es7-react-js-snippets.svg)](https://vsmarketplacebadge.apphb.com/rating-short/dsznajder.es7-react-js-snippets.svg)

This extension provides you JavaScript and React/Redux snippets in ES7 with Babel plugin features for [VS Code](https://code.visualstudio.com/)

### Search command

You can search through snippets with `ES7 snippet search` command which can be run with `CMD + Shift + P` or just use `CMD + Shift + R` keybinding.

---

### Snippets info

Every space inside `{ }` and `( )` means that this is pushed into next line :)
`$` represent each step after `tab`.

_TypeScript_ has own components and own snippets. Use search or just type `ts` before every component snippet.

---

## React Components

---

## React Class Component

### `rcc`

```javascript
import React, { Component } from 'react';

export default class FileName extends Component {
  render() {
    return <div>$2</div>;
  }
}
```

---

## React Class Component Export

### `rce`

```javascript
import React, { Component } from 'react';

export class FileName extends Component {
  render() {
    return <div>$2</div>;
  }
}

export default $1;
```

---

## React Class Component Export & Prop Types

### `rcep`

```javascript
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class FileName extends Component {
  static propTypes = {};

  render() {
    return <div>$2</div>;
  }
}

export default $1;
```

---

## React Class Pure Component

### `rpc`

```javascript
import React, { PureComponent } from 'react';

export default class FileName extends PureComponent {
  render() {
    return <div>$2</div>;
  }
}
```

---

## React Class Pure Component with Prop Types

### `rpcp`

```javascript
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class FileName extends PureComponent {
  static propTypes = {};

  render() {
    return <div>$2</div>;
  }
}
```

---

## React Class Pure Component with Prop Types & Export

### `rpce`

```javascript
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class FileName extends PureComponent {
  static propTypes = {};

  render() {
    return <div>$2</div>;
  }
}

export default FileName;
```

---

## React Pure Class Component with Export

### `rccp`

```javascript
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FileName extends Component {
  static propTypes = {
    $2: $3,
  };

  render() {
    return <div>$4</div>;
  }
}
```

---

## React Functional Component with Prop Types

### `rfcp`

```javascript
import React from 'react';
import PropTypes from 'prop-types';

function $1(props) {
  return <div>$0</div>;
}

$1.propTypes = {};

export default $1;
```

---

## React Functional Component

### `rfc`

```javascript
import React from 'react';

export default function $1() {
  return <div>$0</div>;
}
```

---

## React Functional Component with default Export

### `rfce`

```javascript
import React from 'react';

function $1() {
  return <div>$0</div>;
}

export default $1;
```

---

## React Arrow Funcion Component Const & Prop Types Component

### `rafcp`

```javascript
import React from 'react';
import PropTypes from 'prop-types';

const $1 = (props) => {
  return <div>$0</div>;
};

$1.propTypes = {};

export default $1;
```

---

## React Arrow Funcion Component

### `rafc`

```javascript
import React from 'react';

export const $1 = () => {
  return <div>$0</div>;
};
```

---

## React Arrow Funcion Component with Const & Export

### `rafce`

```javascript
import React from 'react';

const $1 = () => {
  return <div>$0</div>;
};

export default $1;
```

---

## React Memo Component

### `rmc`

```javascript
javascript;
import React, { memo } from 'react';

export default memo(function $1() {
  return <div>$0</div>;
});
```

---

## React Memo Component with Prop Types

### `rmcp`

```javascript
import React, { memo } from 'react';
import PropTypes from 'prop-types';

const $1 = memo(function $1(props) {
  return <div>$0</div>;
});

$1.propTypes = {};

export default $1;
```

---

## React Class Component connected to Redux

### `rcredux`

```javascript
import React, { Component } from 'react';
import { connect } from 'react-redux';

export class FileName extends Component {
  render() {
    return <div>$4</div>;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FileName);
```

---

## React Class Component connected to Redux with Prop Types

### `rcreduxp`

```javascript
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class FileName extends Component {
  static propTypes = {
    $2: $3,
  };

  render() {
    return <div>$4</div>;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FileName);
```

---

## React Functional Component connected to Redux

### `rfcredux`

```javascript
import React, { Component } from 'react';
import { connect } from 'react-redux';

export const FileName = () => {
  return <div>$4</div>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FileName);
```

---

## React Functional Component connected to Redux with Prop Types

### `rfreduxp`

```javascript
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const FileName = () => {
  return <div>$4</div>;
};

FileName.propTypes = {
  $2: $3,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FileName);
```

---

## mapping to props

### `reduxmap`

```javascript
const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};
```

---

## React Native Components

### `rnc`

```javascript
import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class FileName extends Component {
  render() {
    return (
      <View>
        <Text> $2 </Text>
      </View>
    );
  }
}
```

### `rnf`

```javascript
import React from 'react';
import { View, Text } from 'react-native';

const $1 = () => {
  return (
    <View>
      <Text> $2 </Text>
    </View>
  );
};

export default $1;
```

### `rnfs`

```javascript
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const $1 = () => {
  return (
    <View>
      <Text> $2 </Text>
    </View>
  );
};

export default $1;

const styles = StyleSheet.create({});
```

### `rncs`

```javascript
import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default class FileName extends Component {
  render() {
    return (
      <View>
        <Text> $2 </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
```

### `rnce`

```javascript
import React, { Component } from 'react';
import { Text, View } from 'react-native';

export class FileName extends Component {
  render() {
    return (
      <View>
        <Text> $2 </Text>
      </View>
    );
  }
}

export default $1;
```

### `rncredux`

```javascript
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class FileName extends Component {
  static propTypes = {
    $2: $3,
  };

  render() {
    return (
      <View>
        <Text> $2 </Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FileName);
```

---

## Others

### Comment Multi Line Block

#### `cmmb`

```JS
/**
|--------------------------------------------------
| $1
|--------------------------------------------------
*/
```

### describe testing

#### `desc`

```javascript
describe('$1', () => {
  $2;
});
```

### testing

#### `test`

```javascript
test('should $1', () => {
  $2;
});
```

### testing it block

#### `tit`

```javascript
it('should $1', () => {
  $2;
});
```

### set up react test

#### `stest`

```javascript
import React from 'react'
import renderer from 'react-test-renderer'

import { ${1:ComponentName} } from '../${1:ComponentName}'

describe('<${1:ComponentName} />', () => {
  const defaultProps = {}
  const wrapper = renderer.create(<${1:ComponentName} {...defaultProps} />)

  test('render', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
```

### create test component

#### `srtest`

```javascript
import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'

import store from 'src/store'
import { ${1:ComponentName} } from '../${1:ComponentName}'

describe('<${1:ComponentName} />', () => {
  const defaultProps = {}
  const wrapper = renderer.create(
    <Provider store={store}>
      <${1:${TM_FILENAME_BASE}} {...defaultProps} />)
    </Provider>,
  )

  test('render', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
```

### set up react native test

#### `sntest`

```javascript
import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import ${1:ComponentName} from '../${1:ComponentName}'

describe('<${1:ComponentName} />', () => {
  const defaultProps = {

  }

  const wrapper = renderer.create(<${1:ComponentName} {...defaultProps} />)

  test('render', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
```

### set up react native test with redux

#### `snrtest`

```javascript
import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'

import store from 'src/store/configureStore'
import ${1:ComponentName} from '../${1:ComponentName}'

describe('<${1:ComponentName} />', () => {
  const defaultProps = {}
  const wrapper = renderer.create(
    <Provider store={store}>
      <${1:ComponentName} {...defaultProps} />
    </Provider>,
  )

  test('render', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
```

### Higher Order Component with Redux

#### `hocredux`

```javascript
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export const mapStateToProps = state => ({

})

export const mapDispatchToProps = {

}

export const ${1:hocComponentName} = (WrappedComponent) => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />

  hocComponent.propTypes = {
  }

  return hocComponent
}

export default WrapperComponent => connect(mapStateToProps, mapDispatchToProps)(${1:hocComponentName}(WrapperComponent))
```

### Higher Order Component

#### `hoc`

```javascript
import React from 'react';
import PropTypes from 'prop-types';

export default (WrappedComponent) => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

  hocComponent.propTypes = {};

  return hocComponent;
};
```
