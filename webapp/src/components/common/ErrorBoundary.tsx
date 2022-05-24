import React, { Component, ReactNode } from "react";

import { IS_DEV } from "envConstants";
import LoadError from "./errors/loadError";

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
    } else {
      // logService.error(error);
    }
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;

    return <>{hasError ? <LoadError /> : <div>{this.props.children}</div>}</>;
  }
}

export default ErrorBoundary;
