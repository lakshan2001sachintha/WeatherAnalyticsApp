import { useAuth0 } from "@auth0/auth0-react"

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useAuth0()

  if (isLoading) return <p>Loading...</p>

  if (!isAuthenticated) {
    return <p className="text-center">Unauthorized</p>
  }

  return children
}
