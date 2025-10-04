<div align="center">
<h1>
<img width="100" src="assets/threejs-logo.png" /> <br>
</h1>
</div>

# Three.js Learning Path

A comprehensive learning journey through Three.js fundamentals, from basic concepts to advanced 3D web development techniques. This repository serves as both a structured curriculum and a practical workspace for mastering 3D graphics in the browser.

Three.js is a cross-browser JavaScript library and application programming interface used to create and display animated 3D computer graphics in a web browser using WebGL. This learning path is designed to take you from complete beginner to confident Three.js developer through hands-on projects and progressive skill building.

## What is Three.js?

Three.js is a powerful JavaScript library that simplifies the creation of 3D graphics for the web by providing:

- **Easy WebGL Integration**: Abstracts complex WebGL operations into simple, intuitive APIs
- **Rich Scene Management**: Built-in support for scenes, cameras, lighting, and materials
- **Extensive Geometry Library**: Pre-built geometries and tools for creating custom shapes
- **Animation System**: Powerful animation capabilities for objects, cameras, and materials
- **Material System**: Comprehensive material types from basic to physically-based rendering
- **Cross-Platform Support**: Works across modern browsers and devices

This learning approach categorizes concepts into two types:

- **Core Concepts**: Fundamental Three.js principles that form the foundation of 3D web development. Examples include:
  - Scene, Camera, Renderer architecture
  - Geometries and Materials
  - Lighting systems
  - Animation loops

- **Advanced Techniques**: Complex implementations and optimization strategies for professional 3D applications. Examples include:
  - Custom shaders and materials
  - Performance optimization
  - Physics integration
  - Advanced animation techniques

This separation allows for better learning progression while building practical skills in modern 3D web development.

## Repository Structure

```
.
├── .direnv/                        # Directory environment cache
├── CONTRIBUTING.md                 # Contribution guidelines
├── LICENSE                         # MIT License
└── README.md                       # Project documentation
```

### Current Status

This repository is in its initial setup phase. The structure will evolve as learning materials and exercises are added. The planned expansion will include:

- **exercises/** - Progressive skill-building exercises
- **projects/** - Complete application builds
- **resources/** - Learning materials and assets
- **docs/** - Detailed documentation and guides

### Development Environment

The repository includes a `.envrc` file that automatically configures the development environment using direnv and Nix. This provides:

- **Node.js 24** - Latest LTS version for modern JavaScript development
- **Package Managers** - npm, yarn, and pnpm available
- **Consistent Environment** - Same development setup across all contributors

## Learning Prerequisites

To get the most out of this Three.js learning path, you should have:

### Essential Skills
- **JavaScript (ES6+)** - Understanding of modern JavaScript syntax and concepts
- **HTML & CSS** - Basic web development knowledge
- **Mathematical Concepts** - Basic understanding of 3D coordinates and transformations

### Recommended Knowledge
- **WebGL Basics** - Helpful but not required (Three.js abstracts most complexity)
- **Linear Algebra** - Vectors, matrices, and transformations (will be taught as needed)
- **Git** - For version control and collaboration

### Development Environment Requirements
- **Nix Package Manager** - For reproducible development environments
- **direnv** - For automatic environment loading
- **Modern Web Browser** - Chrome, Firefox, Safari, or Edge with WebGL support
- **Text Editor/IDE** - VSCode, WebStorm, or your preferred editor
- **Graphics Card** - Dedicated GPU recommended for complex scenes

## Getting Started

### Environment Setup

The development environment is managed through Nix and direnv:

1. **Install Prerequisites**:
   ```bash
   # Install Nix (if not already installed)
   curl --proto '=https' --tlsv1.2 -sSf -L https://install.determinate.systems/nix | sh -s -- install

   # Install direnv
   nix-env -i direnv
   ```

2. **Clone and Enter Directory**:
   ```bash
   git clone <repository-url>
   cd threejs-learning-path

   # Allow direnv to load the environment
   direnv allow
   ```

3. **Verify Environment**:
   ```bash
   # Check that Node.js 24 is available
   node --version  # Should show v24.x.x
   npm --version   # Should show npm version
   ```

### Development Workflow

Follow the project's contribution guidelines defined in [CONTRIBUTING.md](CONTRIBUTING.md):

- **Branch Naming**: Use `type/description-in-kebab-case` format
- **Commit Messages**: Follow Conventional Commits with Gitmoji
- **Code Quality**: Maintain consistent formatting and documentation

Example workflow:
```bash
# Create a feature branch
git checkout -b feat/basic-scene-setup

# Make your changes
# ...

# Commit with proper format
git commit -m ":sparkles: feat(exercises): add basic scene setup tutorial"

# Push and create PR
git push -u origin feat/basic-scene-setup
```

## Planned Learning Path

The curriculum will be organized into progressive modules:

1. **Foundations**: Scene setup, basic geometry, and rendering
2. **Visual Design**: Materials, textures, and lighting
3. **Interaction & Animation**: Movement and user input
4. **Advanced Techniques**: Shaders, optimization, and professional workflows

Each module will build upon previous concepts while introducing new skills, ensuring steady progress from beginner to advanced developer.

## Contributing

We welcome contributions to help build this comprehensive Three.js learning resource! Please read our [Contributing Guidelines](CONTRIBUTING.md) for:

- Code standards and formatting
- Commit message conventions
- Branch naming and workflow
- Pull request process

Whether you're adding new exercises, fixing bugs, improving documentation, or sharing resources, your contributions help make this a better learning experience for everyone.

## Documentation

As the repository grows, detailed documentation will be available:

- **Learning Path Guide** - Structured curriculum with milestones
- **API Reference** - Quick reference for Three.js methods
- **Troubleshooting Guide** - Solutions for common issues

## Acknowledgements

This learning path is built upon the excellent work of many talented individuals and organizations:

### Inspiration & Resources
- **[Three.js Team](https://github.com/mrdoob/three.js/)** - For creating and maintaining this incredible library
- **[Bruno Simon](https://bruno-simon.com/)** - For inspiring creative 3D web experiences
- **[WebGL Fundamentals](https://webglfundamentals.org/)** - For comprehensive WebGL education

### Community Contributors
- **Three.js Community** - For tutorials, examples, and continuous support
- **WebGL & Graphics Communities** - For sharing knowledge and best practices

### Educational Resources
We're grateful for these learning resources that help shape this curriculum:
- **[Three.js Journey](https://threejs-journey.xyz/)** - Comprehensive Three.js course
- **[MDN WebGL Guide](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API)** - Web standards documentation
- **[OpenGL Tutorials](https://learnopengl.com/)** - Graphics programming fundamentals

### Development Tools
- **[Nix](https://nixos.org/)** - Reproducible development environments
- **[direnv](https://direnv.net/)** - Automatic environment management
- **[Node.js](https://nodejs.org/)** - Runtime environment

To the broader web development and graphics programming communities - your contributions make learning resources like this possible.

[Return to top](#threejs-learning-path)
