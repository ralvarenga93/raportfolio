# Cursor Rules

This directory contains project-specific rules and guidelines for Cursor AI.

## Structure

- general.md - General coding standards and best practices
- rchitecture.md - Architecture and design patterns
- 	esting.md - Testing guidelines and standards
- documentation.md - Documentation standards
- git-workflow.md - Git workflow and branching strategies

## Usage

Cursor will automatically reference rules from this directory. You can also explicitly reference specific rule files in your prompts using:

`
@cursor_rules/general.md
@cursor_rules/architecture.md
`

## Adding New Rules

1. Create a new .md file in this directory
2. Add clear, actionable rules
3. Commit and push to GitHub
4. Cursor will automatically pick up the new rules
