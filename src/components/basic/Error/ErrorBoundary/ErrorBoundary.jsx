
import React from "react";

class ErrorBoundary extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            hasError: false,
        };
    }

    // Update state when a child component throws an error
    static getDerivedStateFromError() {
        return {
            hasError: true,
        };
    }

    // Log error details for debugging
    componentDidCatch(error, info) {
        console.error("Component rendering error:", error, info);
    }

    render() {

        // Display fallback UI when an error occurs
        if (this.state.hasError) {
            return this.props.fallback || (
                <div className="w-full p-5 text-center bg-red-50 text-red-700 rounded-xl">
                    <p>Unable to load this content.</p>
                </div>
            );
        }

        // Render children normally
        return this.props.children;
    }
}

export default ErrorBoundary;
