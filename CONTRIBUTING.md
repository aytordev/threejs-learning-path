# 🚀 Contributing Guide

Welcome to the project! This guide covers the essential standards for contributing code.

## 📋 Table of Contents

- [🔀 Branch Naming](#-branch-naming)
- [✨ Commit Standards](#-commit-standards)
- [🔄 Workflow](#-workflow)
- [📝 Examples](#-examples)

## 🔀 Branch Naming

Create feature branches using this format:

```
type/description-in-kebab-case
```

### Types

- `feat/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation changes
- `refactor/` - Code improvements
- `test/` - Test additions
- `chore/` - Maintenance tasks

### Examples

```bash
feat/add-user-authentication
feat/add-lighting-system
fix/login-form-validation
fix/camera-controls-bug
docs/update-api-documentation
docs/update-setup-guide
refactor/user-service
refactor/scene-manager
chore/update-dependencies
```

## ✨ Commit Standards

We use [Conventional Commits](https://www.conventionalcommits.org/) with [Gitmoji](https://gitmoji.dev/) for consistent commit messages.

### Format

```
:gitmoji: type(scope): description

[optional body]

[optional footer]
```

### Complete Gitmoji Reference

| Type | Gitmoji Code | When to Use | Example |
|------|--------------|-------------|---------|
| `feat` | `:sparkles:` | New features or significant additions | `:sparkles: feat(auth): add MFA support` |
| `fix` | `:bug:` | Bug fixes | `:bug: fix(api): handle null user edge case` |
| `docs` | `:memo:` | Documentation changes | `:memo: docs: update API reference` |
| `style` | `:art:` | Code style/formatting changes | `:art: style: format with prettier` |
| `refactor` | `:recycle:` | Code changes that neither fix bugs nor add features | `:recycle: refactor(auth): simplify token validation` |
| `perf` | `:zap:` | Performance improvements | `:zap: perf(db): optimize query performance` |
| `test` | `:white_check_mark:` | Adding or modifying tests | `:white_check_mark: test(utils): add test coverage` |
| `chore` | `:wrench:` | Build process or auxiliary tool changes | `:wrench: chore(deps): update dependencies` |
| `ci` | `:construction_worker:` | CI configuration changes | `:construction_worker: ci: add GitHub Actions workflow` |
| `build` | `:package:` | Build system or external dependencies | `:package: build: update webpack config` |
| `revert` | `:rewind:` | Revert previous commit | `:rewind: revert: revert auth changes` |
| `wip` | `:construction:` | Work in progress | `:construction: wip: implement payment flow` |
| `security` | `:lock:` | Security-related changes | `:lock: security: upgrade vulnerable packages` |
| `i18n` | `:globe_with_meridians:` | Internationalization/localization | `:globe_with_meridians: i18n: add Spanish translation` |

### Rules

- Use **gitmoji codes** (`:sparkles:`), not emoji characters
- Use **imperative mood** ("add" not "added")
- Keep description **under 72 characters**
- Don't capitalize first letter
- No period at the end

## 🔄 Workflow

### 1. Create Branch

```bash
# Get latest changes
git checkout main
git pull origin main

# Create new branch
git checkout -b type/descriptive-name
```

### 2. Make Changes

```bash
# Stage changes
git add .

# Commit with gitmoji
git commit -m ":sparkles: feat(scene): add particle system"
```

### 3. Push and PR

```bash
# Push branch
git push -u origin type/descriptive-name

# Create PR on GitHub
```

## 📝 Examples

### Feature Addition Examples

```bash
# Simple feature
git commit -m ":sparkles: feat(auth): add MFA support"

# Feature with scope
git commit -m ":sparkles: feat(profile): add user profile page"

# Feature with detailed body
git commit -m ":sparkles: feat(auth): implement OAuth2 with GitHub

- Add OAuth2 authentication flow
- Create user model extensions
- Update configuration documentation

Closes #123"
```

### Bug Fix Examples

```bash
# Simple bug fix
git commit -m ":bug: fix(auth): validate email format on login"

# Bug fix with scope
git commit -m ":bug: fix(api): handle null user edge case"

# Bug fix with breaking change
git commit -m ":bug: fix(api): handle null user sessions

- Add null checks in session middleware
- Update error handling in auth service
- Add test cases for edge cases

BREAKING CHANGE: Session middleware now requires valid user object

Closes #789"
```

### Documentation Examples

```bash
# Simple docs update
git commit -m ":memo: docs: update API reference"

# Detailed documentation
git commit -m ":memo: docs: update contribution guidelines

- Add detailed commit message guidelines
- Include Gitmoji reference
- Update code review checklist
- Add examples for common scenarios

Addresses #101"
```

### Performance Examples

```bash
git commit -m ":zap: perf(db): optimize query performance"
git commit -m ":zap: perf(render): improve frame rate in complex scenes"
```

### Test Examples

```bash
git commit -m ":white_check_mark: test(utils): add test coverage"
git commit -m ":white_check_mark: test(auth): add integration tests for login flow"
```

### Refactor Examples

```bash
git commit -m ":recycle: refactor(auth): simplify token validation"
git commit -m ":recycle: refactor(user-service): extract common utilities"
```

### Chore Examples

```bash
# Dependencies update
git commit -m ":wrench: chore(deps): update dependencies"

# Multiple dependencies with details
git commit -m ":wrench: chore(deps): update security packages

- Update express from 4.17.1 to 4.18.2
- Upgrade react and react-dom to 18.2.0
- Update jest and related testing libraries

Resolves security advisory GHSA-xxxx-xxxx-xxxx"
```

### CI/Build Examples

```bash
git commit -m ":construction_worker: ci: add GitHub Actions workflow"
git commit -m ":package: build: update webpack config"
```

### Security Examples

```bash
git commit -m ":lock: security: upgrade vulnerable packages"
git commit -m ":lock: security(auth): implement rate limiting"
```

### Work in Progress Examples

```bash
git commit -m ":construction: wip: implement payment flow"
git commit -m ":construction: wip: add user dashboard layout"
```

## Best Practices

### ✅ Good Examples
```bash
✅ ":sparkles: feat(scene): add fog effect"
✅ ":bug: fix(controls): prevent camera inversion"
✅ ":memo: docs: update API reference"
✅ ":recycle: refactor(utils): simplify math helpers"
✅ ":zap: perf(render): optimize shader compilation"
✅ ":white_check_mark: test(camera): add unit tests"
✅ ":wrench: chore(deps): update three.js to v0.150.0"
✅ ":art: style: format code with prettier"
```

### ❌ Common Mistakes
```bash
❌ "add stuff"                     # Too vague
❌ "fix bug"                       # No context
❌ "Update file.js"                # Not descriptive
❌ "WIP"                          # Use :construction: wip: instead
❌ ":sparkles: FIX: Login issue"   # Wrong format, inconsistent case
❌ "feat: add user auth and update styles"  # Multiple changes in one commit
```

### Workflow Integration

#### Starting a New Feature

```bash
# Make sure you have the latest changes
git checkout main
git pull origin main

# Create and switch to a new feature branch
git checkout -b feat/user-profile

# Make your changes
# ...

# Stage changes
git add .

# Commit with descriptive message using gitmoji code
git commit -m ":sparkles: feat(profile): add user profile page"

# Push to your fork
git push -u origin feat/user-profile
```

#### Fixing a Bug

```bash
# Create a branch for the fix
git checkout -b fix/login-validation

# Make your changes
# ...

git add .
git commit -m ":bug: fix(auth): validate email format on login"

# Push to your fork
git push -u origin fix/login-validation
```

#### Updating Documentation

```bash
git checkout -b docs/update-readme

# Update documentation
# ...

git add .
git commit -m ":memo: docs: update installation instructions"
git push -u origin docs/update-readme
```

### Keep PRs Small
- **One feature per PR**
- **300-500 lines max**
- **Focus on single concern**
- **Test your changes**

---

**Questions?** Open an issue or check existing discussions!