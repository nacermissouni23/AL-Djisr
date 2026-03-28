"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import { galleryCategories, galleryItems } from "@/content/gallery";

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("Toutes");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === "Toutes") {
      return galleryItems;
    }

    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const selectedItem = activeIndex === null ? null : filteredItems[activeIndex] ?? null;

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((current) => {
          if (current === null) return current;
          return (current + 1) % filteredItems.length;
        });
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) => {
          if (current === null) return current;
          return (current - 1 + filteredItems.length) % filteredItems.length;
        });
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, filteredItems.length]);

  return (
    <>
      <div className="flex flex-wrap gap-2 rounded-2xl border border-[var(--color-grenat-100)] bg-white/70 p-2">
        {galleryCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => {
              setActiveCategory(category);
              setActiveIndex(null);
            }}
            className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] transition ${
              activeCategory === category
                ? "border-[var(--color-rose-700)] bg-[var(--color-rose-700)] text-white shadow-md shadow-[var(--color-rose-700)]/25"
                : "border-[var(--color-grenat-200)] bg-white text-[var(--color-ink-700)] hover:border-[var(--color-rose-400)]"
            }`}
            data-track="gallery_filter"
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item, index) => (
          <article
            key={item.id}
            className="group overflow-hidden rounded-3xl border border-[var(--color-grenat-200)] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <button
              type="button"
              className="block w-full text-left"
              onClick={() => setActiveIndex(index)}
              data-track="gallery_interaction"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-2 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-rose-700)]">
                  {item.category}
                </p>
                <h3 className="text-xl font-semibold text-[var(--color-grenat-900)]">{item.title}</h3>
                <p className="text-sm text-[var(--color-ink-700)]">{item.caption}</p>
              </div>
            </button>
          </article>
        ))}
      </div>

      {selectedItem ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--color-grenat-950)]/85 p-4 backdrop-blur-sm"
        >
          <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-[var(--color-grenat-200)] bg-white shadow-2xl">
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="absolute top-3 right-3 z-10 rounded-full border border-[var(--color-grenat-200)] bg-white px-3 py-1 text-sm font-semibold text-[var(--color-grenat-900)] shadow"
            >
              Fermer
            </button>

            <div className="relative aspect-[16/10]">
              <Image
                src={selectedItem.src}
                alt={selectedItem.alt}
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
            </div>

            <div className="flex items-center justify-between gap-3 border-t border-[var(--color-grenat-100)] p-4 sm:p-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-rose-700)]">
                  {selectedItem.category}
                </p>
                <h3 className="text-lg font-semibold text-[var(--color-grenat-900)]">{selectedItem.title}</h3>
                <p className="text-sm text-[var(--color-ink-700)]">{selectedItem.caption}</p>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex((current) => {
                      if (current === null) return current;
                      return (current - 1 + filteredItems.length) % filteredItems.length;
                    })
                  }
                  className="rounded-full border border-[var(--color-grenat-200)] px-4 py-2 text-sm font-semibold text-[var(--color-grenat-900)]"
                >
                  Precedent
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex((current) => {
                      if (current === null) return current;
                      return (current + 1) % filteredItems.length;
                    })
                  }
                  className="rounded-full border border-[var(--color-grenat-200)] px-4 py-2 text-sm font-semibold text-[var(--color-grenat-900)]"
                >
                  Suivant
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
