# Types

This directory contains all TypeScript type definitions for the Trovia application.

## Structure

```
types/
├── index.ts          # Main export file
├── auth.ts           # Authentication-related types
├── common.ts         # Shared/common types
└── README.md         # This file
```

## Usage

Import types from the main types index:

```typescript
import { User, LoginPayload, ApiResponse } from '@/types';
```

## Type Categories

### Authentication Types (`auth.ts`)

- `User` - User entity interface
- `LoginPayload` - Login form data structure
- `RegisterPayload` - Registration form data structure
- `AuthResponse` - API response for authentication endpoints
- `AuthContextType` - React context type for authentication state

### Common Types (`common.ts`)

- `ApiResponse<T>` - Generic API response wrapper
- `PaginatedResponse<T>` - Paginated API response
- `BaseEntity` - Base entity with common fields
- `SelectOption` - Dropdown/select option interface
- `FormField` - Form field configuration interface

## Best Practices

1. **Single Responsibility**: Each type file should focus on a specific domain
2. **Consistent Naming**: Use PascalCase for interfaces and types
3. **Generic Types**: Use generics for reusable type patterns
4. **Documentation**: Add JSDoc comments for complex types
5. **Export Everything**: All types should be exported through `index.ts`

## Adding New Types

1. Create a new file in the appropriate category
2. Define your types with proper interfaces
3. Export them from the file
4. Add the export to `types/index.ts`
5. Update this README if needed

## Example

```typescript
// types/jobs.ts
export interface Job {
  id: string;
  title: string;
  description: string;
  status: 'open' | 'in-progress' | 'completed';
  createdAt: string;
  updatedAt: string;
}

export interface CreateJobPayload {
  title: string;
  description: string;
}

// types/index.ts
export * from './jobs';
``` 