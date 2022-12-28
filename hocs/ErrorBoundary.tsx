import { ErrorBoundary } from 'react-error-boundary'

function ErrorFallback() {
    return <div role="alert">
        <p>Something went wrong:</p>
    </div>
}

const ErrorBoundaryUI = ({ children }: { children: React.ReactNode }) => {
    return <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
}

export default ErrorBoundaryUI