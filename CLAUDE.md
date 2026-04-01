# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A TypeScript-based download cleaner using the Effect functional programming library. The application provides a Node.js runtime environment with access to the file system.

## Commands

- **Run the application**: `npm run start` or `npx tsx src/main.ts`
- **Type check**: `npx tsc --noEmit`
- **Compile to JavaScript**: `npx tsc`

## Architecture

- **Runtime**: Uses Effect library with `@effect/platform-node` for Node.js integration
- **Entry point**: `src/main.ts` - initializes the Effect program and runs it via `NodeRuntime.runMain`
- **TypeScript config**: ESNext target with NodeNext module resolution, strict type checking enabled

## Dependencies

- **effect**: Core functional programming library
- **@effect/platform**: Platform-agnostic APIs
- **@effect/platform-node**: Node.js-specific implementations