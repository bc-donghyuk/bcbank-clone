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

  componentDidCatch(error: Error, info: any) {
    if (IS_DEV) {
      console.error(error);
    }
    // logService.error(error);
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    if (hasError) {
      return <div>error</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
