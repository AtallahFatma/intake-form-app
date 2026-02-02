# Client Intake Application

A multi-step onboarding flow built using a reusable Design System.

This project demonstrates how a standalone Design System can be consumed
in a real product environment to build accessible, composable, and scalable UI flows.

👉 https://intake-form-app-eight.vercel.app
---

## 🔗 Related Project

This application consumes the shared Design System:

👉 [https://my-design-system.chromatic.com](https://697b5aa76a6137e008baafce-cvxkphbqrf.chromatic.com/?path=/docs/components-select--docs)

All form components, layout primitives, and accessibility rules
come from the Design System.

---

## 🎯 Purpose

The goal of this project is to demonstrate:

- Real-world usage of a component library
- Accessible multi-step form patterns
- Controlled form state management
- Validation and error handling
- Clean separation between UI primitives and product logic

---

## 🧱 Architecture

### Design System (external dependency)

Provides:
- Button
- Input
- Textarea
- Select
- FormField
- Tokens (colors, spacing..)
- Accessibility guarantees

### Intake App (this repository)

Provides:
- Step logic
- Navigation
- Validation
- Composition of DS primitives into product flows

---

## 📋 Flow Structure

### Step 1 — Personal Information
- Full name
- Email address
- Country

### Step 2 — Details
- Role
- Company size
- Primary goal
- Additional notes

### Step 3 — Review
- Summary of provided data
- Confirmation

---

## ♿ Accessibility

Accessibility is enforced by the Design System.

This application:

- Uses visible labels via `FormField
- Sets `aria-invalid` for invalid inputs
- Links error messages using `aria-describedby`
- Relies on native form semantics
- Supports keyboard navigation

Accessibility is opt-out only through deliberate misuse.

---

## 🧠 Design Principles

- Small, composable steps
- Explicit validation logic
- Predictable state handling
- No hidden magic
- Separation of concerns

The intake app does not redefine UI behavior.
It consumes primitives and composes them.

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

## 🧪 What This Project Demonstrates

- A reusable Design System working outside Storybook
- Multi-step form UX patterns
- Accessible error handling
- Clean React architecture
- Controlled inputs and validation

---

## 🔮 Roadmap & Improvements

This project is intentionally structured to evolve.

The current implementation focuses on architecture, accessibility,
and clean consumption of the Design System. It is designed to be extended with:

### Validation & Data Integrity
- Schema-based validation (e.g., Zod)

### Persistence
- Local storage persistence between refreshes
- Server-side draft saving

### API Integration
- Real backend submission
- Error states and retry logic
- Loading skeleton states

### UX Enhancements
- Improved progress indicator with checkmarks
- Inline validation feedback
- Success confirmation screen

### Testing
- Unit tests for each step
- E2E tests for step navigation

---

This repository demonstrates a production-ready foundation
rather than a finished product.
