// Higher Order Component (HOC) - A component that renders another component
// Advantages: Code Reuse, Render Hijacking, Property Manipulation, Code Abstraction

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}.</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private information. Please do not share.</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>This is restricted content. Please sign in to continue.</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="there are details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="there are details" />, document.getElementById('app'));
