import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      showError: false,
      error: "",
      errorInfo: "",
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    this.setState({ error, errorInfo });
    // if (["production", "staging"].includes(process.env.NODE_ENV)) {
    //   window.location.reload(true);
    // }
  }
  componentDidUpdate() {
    setTimeout(() => this.setState({ showError: true }), 1000);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.state.showError ? (
        <>
          <h1>Something went wrong.</h1>
          <p>{this.state.error.toString()}</p>
          <pre>{JSON.stringify(this.state.errorInfo, null, 4)}</pre>
        </>
      ) : (
        ""
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
