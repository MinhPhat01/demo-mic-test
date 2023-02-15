import { ErrorBoundary } from "react-error-boundary";

const ErrorBoundaryUI = ({ children }: { children: React.ReactNode }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
  );
};

function ErrorFallback({ error }) {
  return (
    <div role="alert">
      <p>Something went wrong:{error.message}</p>
    </div>
  );
}

export default ErrorBoundaryUI;
