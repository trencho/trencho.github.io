import { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

/**
 * Error Boundary component to handle errors in the component tree
 * and display a fallback UI instead of crashing the entire app.
 */
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  override componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Error caught by Error Boundary:', error, errorInfo);
  }

  handleReset = (): void => {
    this.setState({ hasError: false, error: null });
  };

  override render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div
          className='min-h-screen flex items-center justify-center bg-gradient-to-r from-red-500 to-red-700 p-4'
          role='alert'
          aria-live='assertive'
        >
          <div className='bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center'>
            <h2 className='text-2xl font-bold text-red-600 mb-4'>
              Oops! Something went wrong
            </h2>
            <p className='text-gray-600 mb-4'>
              We&apos;re sorry for the inconvenience. Please try refreshing the
              page or contact support if the problem persists.
            </p>
            {this.state.error && (
              <details className='text-left mb-6'>
                <summary className='cursor-pointer text-sm text-gray-500 hover:text-gray-700'>
                  Error details
                </summary>
                <pre className='mt-2 text-xs bg-gray-100 p-2 rounded overflow-auto max-h-32'>
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
            <button
              onClick={this.handleReset}
              className='bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded transition'
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
