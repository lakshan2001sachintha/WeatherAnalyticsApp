import { Auth0Provider } from "@auth0/auth0-react"

export default function AuthProvider({ children }) {
  return (
    <Auth0Provider
      domain="YOUR_DOMAIN.auth0.com"
      clientId="YOUR_CLIENT_ID"
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: "https://weather-api"
      }}
    >
      {children}
    </Auth0Provider>
  )
}
