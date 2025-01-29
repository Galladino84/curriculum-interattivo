import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("❌ Errore catturato in ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 text-red-600 bg-gray-900">
          <h2>⚠️ Si è verificato un errore</h2>
          <p>{this.state.error?.toString()}</p>
          <button
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
            onClick={() => window.location.reload()}
          >
            Ricarica la pagina
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
