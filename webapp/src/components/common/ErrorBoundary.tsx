import React, { Component, ReactNode } from "react";

import { IS_DEV } from "envConstants";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state = {
    hasError: false,
  };

  conponentDidCatch(error: Error) {
    if (IS_DEV) {
      console.error(error);
    }
    // TODO : logService
    // logService.error(error);
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;

    if (hasError) {
      // TODO : Add Error page
      return <div>error</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
