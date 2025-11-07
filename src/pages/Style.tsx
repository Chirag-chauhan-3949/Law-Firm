import React from "react";

// StyleGuide.tsx — Modern / Clean — All Sans-serif (Inter)
// This page demonstrates the color tokens, typography, and components
// for the Modern / Clean theme using Tailwind CSS tokens.

export default function StyleGuide() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] px-6 py-10 font-sans">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-2">Style Guide — Modern / Clean</h1>
        <p className="text-muted max-w-2xl">
          Theme: Modern & clean. Typeface: Inter (all sans-serif). Use these tokens
          to keep the site consistent.
        </p>
      </header>

      {/* Color Swatches */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          <div className="text-center">
            <div className="w-full h-20 rounded-lg" style={{ background: 'var(--primary)' }} />
            <p className="font-medium mt-2">Primary</p>
            <code className="text-sm text-muted">#0EA5A4</code>
          </div>

          <div className="text-center">
            <div className="w-full h-20 rounded-lg" style={{ background: 'var(--accent)' }} />
            <p className="font-medium mt-2">Accent / Dark</p>
            <code className="text-sm text-muted">#0F1724</code>
          </div>

          <div className="text-center">
            <div className="w-full h-20 rounded-lg border" style={{ background: 'var(--bg)' }} />
            <p className="font-medium mt-2">Background</p>
            <code className="text-sm text-muted">#F7F9FA</code>
          </div>

          <div className="text-center">
            <div className="w-full h-20 rounded-lg" style={{ background: 'var(--text)' }} />
            <p className="font-medium mt-2">Text</p>
            <code className="text-sm text-muted">#0B1220</code>
          </div>

          <div className="text-center">
            <div className="w-full h-20 rounded-lg" style={{ background: 'var(--muted)' }} />
            <p className="font-medium mt-2">Muted</p>
            <code className="text-sm text-muted">#64748B</code>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Typography</h2>
        <div className="space-y-6 max-w-3xl">
          <div>
            <h1 className="text-5xl font-bold">Display / H1 — Inter</h1>
            <p className="text-muted text-sm mt-1">className="text-5xl font-bold"</p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold">H2 — Inter</h2>
            <p className="text-muted text-sm mt-1">className="text-3xl font-semibold"</p>
          </div>

          <div>
            <h3 className="text-xl font-medium">H3 — Inter</h3>
            <p className="text-muted text-sm mt-1">className="text-xl font-medium"</p>
          </div>

          <div>
            <p className="text-base">Body — Inter: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <p className="text-muted text-sm mt-1">className="text-base"</p>
          </div>

          <div>
            <a className="text-primary underline font-medium" href="#">Link example</a>
            <p className="text-muted text-sm mt-1">className="text-primary underline"</p>
          </div>
        </div>
      </section>

      {/* Buttons */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Buttons</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <button className="px-6 py-2 rounded-md font-medium" style={{ background: 'var(--primary)', color: 'var(--bg)' }}>
            Primary
          </button>
          <button className="px-6 py-2 rounded-md font-medium" style={{ background: 'var(--accent)', color: 'var(--bg)' }}>
            Dark
          </button>
          <button className="px-6 py-2 rounded-md font-medium border" style={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}>
            Outline
          </button>
          <button className="px-6 py-2 rounded-md font-medium text-muted">Text</button>
        </div>
      </section>

      {/* Small components */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Card Example</h2>
        <div className="max-w-sm bg-white shadow rounded-lg overflow-hidden">
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Card Title</h3>
            <p className="text-muted mb-4">Supporting copy that shows how body text looks inside a card component.</p>
            <button className="px-4 py-2 rounded-md font-medium" style={{ background: 'var(--primary)', color: 'var(--bg)' }}>Action</button>
          </div>
        </div>
      </section>

      <style jsx>{`
        :root {
          --primary: #0EA5A4; /* teal */
          --accent: #0F1724;  /* deep slate */
          --bg: #F7F9FA;      /* off-white */
          --text: #0B1220;    /* near-black text */
          --muted: #64748B;   /* muted slate */
        }

        .text-muted { color: var(--muted); }
        .text-primary { color: var(--primary); }
        .bg-primary { background: var(--primary); }
        .bg-accent { background: var(--accent); }
      `}</style>
    </div>
  );
}
