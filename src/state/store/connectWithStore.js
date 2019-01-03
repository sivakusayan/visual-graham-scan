/**
 * @fileoverview This is a workaround for an apparent conflict with React-Konva
 * and the store coming from the Provider not reaching children of Konva components.
 * React DevTools suggest this is because React-Konva renders layers outside of
 * the root component. We will stay on redux version 5.1.1 until a fix is found,
 * as redux does not allow passing in the store directly after version 6.
 *
 * This workaround is taken from here and slightly modified:
 * https://github.com/reduxjs/react-redux/issues/390
 */
import React from 'react';
import { connect } from 'react-redux';
import configureStore from './configureStore';

const store = configureStore();

const connectWithStore = (...args) => (WrappedComponent) => {
  const ConnectedWrappedComponent = connect(...args)(WrappedComponent)
  return props => (<ConnectedWrappedComponent {...props} store={store} />);
}

export default connectWithStore;
