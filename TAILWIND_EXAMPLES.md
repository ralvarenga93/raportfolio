# Tailwind CSS: Side-by-Side Examples

## Real Examples from Your Codebase

### Example 1: About Section

**Your Current Code (Tailwind):**
```tsx
<section className="py-20 md:py-32 bg-background">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground text-center">
      About Me
    </h2>
  </div>
</section>
```

**Equivalent Traditional CSS:**
```css
.about-section {
  padding-top: 5rem;      /* py-20 = 5rem */
  padding-bottom: 5rem;
  background: var(--background);
}

@media (min-width: 768px) {
  .about-section {
    padding-top: 8rem;    /* md:py-32 = 8rem */
    padding-bottom: 8rem;
  }
}

.about-container {
  max-width: 1280px;      /* container */
  margin: 0 auto;         /* mx-auto */
  padding-left: 1rem;     /* px-4 */
  padding-right: 1rem;
}

.about-title {
  font-size: 2.25rem;     /* text-4xl */
  font-weight: bold;      /* font-bold */
  margin-bottom: 2rem;     /* mb-8 */
  color: var(--foreground);
  text-align: center;     /* text-center */
}

@media (min-width: 768px) {
  .about-title {
    font-size: 3rem;      /* md:text-5xl */
  }
}
```

```tsx
<section className="about-section">
  <div className="about-container">
    <h2 className="about-title">About Me</h2>
  </div>
</section>
```

**Bootstrap Equivalent:**
```html
<section class="py-5 py-md-8 bg-light">
  <div class="container px-4">
    <h2 class="display-4 fw-bold mb-4 text-center">
      About Me
    </h2>
  </div>
</section>
```

---

### Example 2: Skills Grid

**Your Current Code (Tailwind):**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
  {skillCategories.map((category) => (
    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
      <h3 className="text-2xl font-semibold mb-4">{category.title}</h3>
    </div>
  ))}
</div>
```

**Equivalent Traditional CSS:**
```css
.skills-grid {
  display: grid;
  grid-template-columns: 1fr;        /* grid-cols-1 */
  gap: 1.5rem;                       /* gap-6 */
  max-width: 72rem;                  /* max-w-6xl */
  margin: 0 auto;                    /* mx-auto */
}

@media (min-width: 768px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr); /* md:grid-cols-2 */
  }
}

.skill-card {
  background: white;
  border-radius: 0.75rem;            /* rounded-xl */
  padding: 1.5rem;                    /* p-6 */
  box-shadow: 0 10px 15px rgba(0,0,0,0.1); /* shadow-lg */
}

@media (prefers-color-scheme: dark) {
  .skill-card {
    background: #111827;              /* dark:bg-gray-900 */
  }
}

.skill-title {
  font-size: 1.5rem;                  /* text-2xl */
  font-weight: 600;                   /* font-semibold */
  margin-bottom: 1rem;                /* mb-4 */
}
```

**Bootstrap Equivalent:**
```html
<div class="container">
  <div class="row g-4">
    <div class="col-12 col-md-6">
      <div class="card shadow">
        <div class="card-body">
          <h3 class="h4 fw-semibold mb-3">Title</h3>
        </div>
      </div>
    </div>
  </div>
</div>
```

---

### Example 3: Navigation (Responsive Menu)

**Your Current Code (Tailwind):**
```tsx
<nav className="fixed top-0 left-0 right-0 z-50">
  <div className="container mx-auto px-4">
    <div className="flex items-center justify-between h-16 md:h-20">
      <a className="text-xl md:text-2xl font-bold">Logo</a>
      <ul className="hidden md:flex items-center space-x-8">
        <li><a>Home</a></li>
      </ul>
      <button className="md:hidden">Menu</button>
    </div>
  </div>
</nav>
```

**Breakdown:**
- `fixed top-0 left-0 right-0` = Sticky navigation
- `hidden md:flex` = Hide on mobile, show on tablet+
- `md:hidden` = Show on mobile, hide on tablet+

**Equivalent Traditional CSS:**
```css
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
}

.nav-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

.nav-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;              /* h-16 */
}

@media (min-width: 768px) {
  .nav-content {
    height: 5rem;             /* md:h-20 */
  }
}

.nav-logo {
  font-size: 1.25rem;         /* text-xl */
  font-weight: bold;
}

@media (min-width: 768px) {
  .nav-logo {
    font-size: 1.5rem;        /* md:text-2xl */
  }
}

.nav-menu {
  display: none;              /* hidden */
}

@media (min-width: 768px) {
  .nav-menu {
    display: flex;             /* md:flex */
    align-items: center;
    gap: 2rem;                /* space-x-8 */
  }
}

.mobile-menu-btn {
  display: block;             /* visible on mobile */
}

@media (min-width: 768px) {
  .mobile-menu-btn {
    display: none;            /* md:hidden */
  }
}
```

---

## Tailwind Class Reference

### Spacing Scale

Tailwind uses a spacing scale where `1 = 0.25rem (4px)`:

| Class | Value | Pixels |
|-------|-------|--------|
| `p-1` | 0.25rem | 4px |
| `p-2` | 0.5rem | 8px |
| `p-4` | 1rem | 16px |
| `p-6` | 1.5rem | 24px |
| `p-8` | 2rem | 32px |
| `p-12` | 3rem | 48px |
| `p-16` | 4rem | 64px |
| `p-20` | 5rem | 80px |
| `p-24` | 6rem | 96px |

### Typography Scale

| Class | Size | rem |
|-------|------|-----|
| `text-xs` | 0.75rem | 12px |
| `text-sm` | 0.875rem | 14px |
| `text-base` | 1rem | 16px |
| `text-lg` | 1.125rem | 18px |
| `text-xl` | 1.25rem | 20px |
| `text-2xl` | 1.5rem | 24px |
| `text-3xl` | 1.875rem | 30px |
| `text-4xl` | 2.25rem | 36px |
| `text-5xl` | 3rem | 48px |
| `text-6xl` | 3.75rem | 60px |

### Common Patterns

**Centering Content:**
```tsx
<div className="container mx-auto px-4">
  {/* Centered with max-width */}
</div>
```

**Flexbox Centering:**
```tsx
<div className="flex items-center justify-center">
  {/* Centered both ways */}
</div>
```

**Responsive Grid:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* 1 col mobile, 2 tablet, 3 desktop */}
</div>
```

**Responsive Text:**
```tsx
<h1 className="text-2xl md:text-4xl lg:text-6xl">
  {/* Scales with screen size */}
</h1>
```

---

## Quick Reference: Tailwind vs CSS

| CSS Property | Tailwind Class |
|--------------|----------------|
| `display: flex` | `.flex` |
| `display: grid` | `.grid` |
| `flex-direction: column` | `.flex-col` |
| `justify-content: center` | `.justify-center` |
| `align-items: center` | `.items-center` |
| `gap: 1rem` | `.gap-4` |
| `padding: 1rem` | `.p-4` |
| `margin: 1rem` | `.m-4` |
| `width: 100%` | `.w-full` |
| `height: 100%` | `.h-full` |
| `font-weight: bold` | `.font-bold` |
| `text-align: center` | `.text-center` |
| `background-color: blue` | `.bg-blue-500` |
| `color: white` | `.text-white` |
| `border-radius: 0.5rem` | `.rounded-lg` |
| `box-shadow: ...` | `.shadow-lg` |

---

## Responsive Breakpoints Cheat Sheet

```tsx
// Mobile First: Base styles apply to mobile
// Then add larger screen styles with prefixes

<div className="
  text-sm          // Mobile: 14px
  sm:text-base     // 640px+: 16px
  md:text-lg       // 768px+: 18px
  lg:text-xl       // 1024px+: 20px
  xl:text-2xl      // 1280px+: 24px
">
```

**Remember:** The base class (no prefix) is for mobile. Prefixes are for "and up".
