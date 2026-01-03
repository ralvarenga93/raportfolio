# Cursor Rules

This directory contains project-specific rules that are **automatically loaded** by Cursor AI.

## How It Works

- All .mdc files in this directory are automatically read by Cursor
- No need to reference them in prompts - they're always active
- Rules are project-specific (only apply to this repository)

## Current Rules

- general.mdc - General coding standards and best practices
- Architecture.mdc - Architecture guidelines and design patterns
- 	esting.mdc - Testing guidelines and standards
- documentation.mdc - Documentation standards and requirements
- git-workflow.mdc - Git workflow and branching strategies

## Adding New Rules

1. Create a new .mdc file in this directory
2. Add YAML frontmatter with metadata:
   `yaml
   ---
   description: Your rule description
   alwaysApply: true  # or false if conditional
   globs:             # optional: file patterns
     - "src/**/*.js"
   ---
   `
3. Add your rules content below the frontmatter
4. Commit and push to GitHub
5. Cursor will automatically pick up the new rules

## Rule File Format

Each rule file uses the .mdc format (Markdown with metadata):
- YAML frontmatter at the top (between ---)
- Markdown content below
- AlwaysApply: true makes the rule always active
- globs can specify which files the rule applies to
