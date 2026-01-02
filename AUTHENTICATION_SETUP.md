# Authentication Setup

This document explains the authentication configuration for the Trovia application.

## API Configuration

The application is configured to use different API URLs based on the environment:

- **Production**: `https://trovia-api.up.railway.app`
- **Development**: `http://localhost:3000`

The configuration is handled automatically in `config/axios.config.ts` based on the `NODE_ENV` environment variable.

## Authentication Endpoints

### Login
- **Endpoint**: `/auth/login`
- **Method**: POST
- **Payload**:
```json
{
  "email": "user@example.com",
  "phone": "+2348012345678",
  "password": "SecurePassword123"
}
```

### Register
- **Endpoint**: `/auth/register`
- **Method**: POST
- **Payload**:
```json
{
  "email": "john.doe@example.com",
  "phone": "+2348012345678",
  "password": "SecurePassword123",
  "firstName": "John",
  "lastName": "Doe"
}
```

## Authentication Flow

1. **Login/Register**: User submits credentials through the login or register forms
2. **API Call**: The application calls the respective authentication endpoint
3. **Token Storage**: On successful authentication, the JWT token is stored in secure HTTP-only cookies
4. **Automatic Headers**: All subsequent API calls automatically include the Authorization header via cookies
5. **Route Protection**: Protected routes are wrapped with the `AuthGuard` component
6. **Token Expiry**: If a 401 response is received, the user is automatically logged out and redirected to login

## Components and Services

### Authentication Service (`services/auth.service.ts`)
- Handles login, register, and logout operations
- Manages token storage and retrieval using secure cookies
- Provides utility functions for authentication state

### Authentication Provider (`providers/auth-provider.tsx`)
- Provides authentication context throughout the application
- Manages user state and authentication status
- Handles automatic authentication checks on app load

### Authentication Guard (`components/auth-guard.tsx`)
- Protects routes that require authentication
- Redirects unauthenticated users to the login page
- Shows loading state while checking authentication

### Cookie Utility (`lib/cookies.ts`)
- Provides secure cookie operations
- Handles cookie encoding/decoding
- Manages cookie expiration and security settings

### Updated Forms
- **Login Page** (`app/login/page.tsx`): Updated to include phone field and use the authentication service
- **Register Page** (`app/onboard/sign-up/page.tsx`): Updated to match the API payload structure

## Usage

### Protecting Routes
Wrap any component that requires authentication with the `AuthGuard`:

```tsx
import { AuthGuard } from "@/components/auth-guard";

export default function ProtectedPage() {
  return (
    <AuthGuard>
      <div>This content is only visible to authenticated users</div>
    </AuthGuard>
  );
}
```

### Using Authentication Context
Access authentication state and functions in any component:

```tsx
import { useAuth } from "@/providers/auth-provider";

export default function MyComponent() {
  const { user, isAuthenticated, logout } = useAuth();
  
  return (
    <div>
      {isAuthenticated ? (
        <div>
          <p>Welcome, {user?.firstName}!</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <p>Please log in</p>
      )}
    </div>
  );
}
```

## Error Handling

The authentication system includes comprehensive error handling:

- **Validation Errors**: Form validation using Yup schemas
- **API Errors**: Proper error messages from the server
- **Network Errors**: Fallback error messages for network issues
- **Token Expiry**: Automatic logout and redirect on 401 responses

## Security Features

- JWT tokens stored in secure HTTP-only cookies
- Automatic token inclusion in API requests via cookies
- Automatic logout on authentication failures
- Protected routes with automatic redirects
- Form validation on both client and server side
- SameSite cookie attribute for CSRF protection 