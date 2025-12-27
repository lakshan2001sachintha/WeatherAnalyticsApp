import { useAuth0 } from "@auth0/auth0-react"

export default function Login() {
  const { loginWithRedirect } = useAuth0()

  return (
    <div className="min-h-screen flex items-center justify-center">
      <button
        onClick={() => loginWithRedirect()}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        Login
      </button>
    </div>
  )
}
