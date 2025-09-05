export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Something went wrong
        </h1>
        <p className="text-gray-600 mb-4">
          We're sorry, but something unexpected happened.
        </p>
        <button
          /* onClick={() => window.location.reload()} */
          className="btn-primary"
        >
          Reload Page
        </button>
      </div>
    </div>
  );
}
