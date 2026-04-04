---
name: daisyui_design
description: Detailed instructions and rules for designing UI using DaisyUI v5, as specified in daisyui.com/llms.txt. Use this for all UI-related tasks to ensure consistency and correct component syntax.
---

# DaisyUI v5 Design Guidelines

This skill provides comprehensive instructions for building UI components using DaisyUI v5. Follow these rules and syntax patterns for all UI development in this project.

## Core Principles

- **Semantic Components**: Use DaisyUI component classes (e.g., `btn`, `card`, `modal`) instead of building from scratch.
- **Aesthetics**: Prioritize premium designs with vibrant colors, smooth transitions, and responsive layouts.
- **DaisyUI v5 Syntax**: Adhere to the latest syntax for components as described below.

## Component Reference

### Buttons (`btn`)

- Base class: `btn`
- Colors: `btn-primary`, `btn-secondary`, `btn-accent`, `btn-neutral`, `btn-ghost`, `btn-link`, `btn-success`, `btn-info`, `btn-warning`, `btn-error`
- Sizes: `btn-xs`, `btn-sm`, `btn-md`, `btn-lg`, `btn-xl`
- Icons: Can have an icon before or after the text.
- To disable with a class: `tabindex="-1" role="button" aria-disabled="true"`

### Cards (`card`)

- Base class: `card`
- Parts: `card-title`, `card-body`, `card-actions`
- Modifiers: `card-side`, `image-full`, `card-border`, `card-dash`
- Sizes: `card-xs` to `card-xl`
- Syntax:
  ```html
  <div class="card bg-base-100 w-96 shadow-xl">
    <figure><img src="..." alt="..." /></figure>
    <div class="card-body">
      <h2 class="card-title">Title</h2>
      <p>Content</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Action</button>
      </div>
    </div>
  </div>
  ```

### Modals (`modal`)

- Use HTML `<dialog>` element for modern modals.
- Syntax:
  ```html
  <dialog id="my_modal" class="modal">
    <div class="modal-box">
      <h3 class="font-bold text-lg">Hello!</h3>
      <p class="py-4">Press ESC key or click the button below to close</p>
      <div class="modal-action">
        <form method="dialog">
          <button class="btn">Close</button>
        </form>
      </div>
    </div>
  </dialog>
  ```

### Navbar (`navbar`)

- Base class: `navbar`
- Sections: `navbar-start`, `navbar-center`, `navbar-end`
- Recommendation: Use `base-200` for background color.

### Form Elements

- **Input**: `input input-bordered`, `input-primary`, etc.
- **Checkbox**: `checkbox checkbox-primary`, etc.
- **Radio**: `radio radio-primary`, etc.
- **Toggle**: `toggle toggle-primary`, etc.
- **Select**: `select select-bordered`, etc.
- **Validator**: Use `validator` class with `input`/`select`/`textarea` to show success/error states based on validation rules.

### Layout & Spacing

- **Join**: Container for grouping items (buttons, inputs) with `join` and `join-item`.
- **Stack**: Visually stacks elements on top of each other using `stack`.
- **Divider**: `divider`, `divider-horizontal`, `divider-vertical`.

### Feedback & Status

- **Progress**: `progress`, `progress-primary`.
- **Radial Progress**: `radial-progress` (requires setting `--value` CSS variable).
- **Toast**: `toast`, `toast-top`, `toast-end`, etc.
- **Tooltip**: `tooltip`, `tooltip-top`, etc.
- **Skeleton**: `skeleton` for loading states.

## Responsive Design

- Use Tailwind responsive prefixes: `sm:card-side`, `lg:navbar`, `md:join-horizontal`.

## Theming

- Use `theme-controller` for theme switching.
- Example: `<input type="checkbox" value="synthwave" class="toggle theme-controller" />`

## Critical Rules

- **No Placeholders**: Use `generate_image` or real assets.
- **Semantic HTML**: Use proper tags (`<header>`, `<main>`, `<footer`, `<dialog>`).
- **Unique IDs**: For interactive elements like modals and inputs.
- **Premium Look**: Avoid default colors. Use the DaisyUI palette (`primary`, `secondary`, `accent`, `neutral`, `base-100/200/300`).
