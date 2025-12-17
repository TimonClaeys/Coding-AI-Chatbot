# Project Context

## Purpose

Frontend for an AI chatbot application, secured with OAuth login. The website allows authenticated users to interact with the chatbot, generate files, and write them to the filesystem using the File System Access API or a separate bridge program. The application is a Progressive Web App (PWA) for offline support and installability.

## Tech Stack

- Next.js (React framework)
- TypeScript
- OAuth (for authentication)
- File System Access API (browser) and/or bridge program (Node.js or similar)
- Chadcn UI (latest version, released December 2025)
- Tailwind CSS or PostCSS (for styling)
- PWA (Progressive Web App) features

## Project Conventions

### Code Style

- Use Prettier and ESLint for formatting and linting
- TypeScript for type safety
- Functional React components (with hooks)
- File and folder names: kebab-case for files, PascalCase for components
- Use absolute imports where possible

### Architecture Patterns

- Component-based UI (React/Next.js)
- API routes for backend logic (if needed)
- Authentication handled via OAuth provider (e.g., Google, GitHub)
- File operations abstracted via browser API or bridge
- PWA manifest and service worker for offline support

### Testing Strategy

- Unit tests for components and utilities (Jest, React Testing Library)
- Integration tests for authentication and file operations
- Manual and automated PWA audits (Lighthouse)

### Git Workflow

- Feature-branch workflow (main branch is protected)
- Conventional Commits for commit messages
- Pull requests with code review

## Domain Context

AI chatbot frontend with secure login, file generation, and filesystem access. The bridge program may be required for environments where browser APIs are insufficient.

## Important Constraints

- Must be a PWA (offline support, installable)
- All file operations must be secure and respect user permissions
- OAuth required for all access
- File writes may require a bridge program for environments without File System Access API support

## External Dependencies

- OAuth provider (Google, GitHub, etc.)
- File System Access API (browser)
- Bridge program (Node.js or similar, if needed)
