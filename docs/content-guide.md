# Guide de mise a jour de contenu

Ce projet est structure pour faciliter les evolutions de contenu sans toucher a la logique principale.

## Fichiers a modifier

- `content/site.ts`: infos globales (coordonnees, hero, navigation, horaires).
- `content/courses.ts`: catalogue des formations et details de chaque cours.
- `content/gallery.ts`: galerie visuelle, categories, captions, textes alternatifs.
- `content/faq.ts`: questions/reponses de la FAQ.
- `content/blog.ts`: articles du blog (titre, slug, meta, contenu).
- `content/testimonials.ts`: temoignages d'apprenants.

## Ajouter une formation

1. Ajouter un objet dans `courses` avec un `slug` unique.
2. Renseigner les champs: `title`, `description`, `duration`, `level`, `whatYouWillLearn`, `whoItsFor`, `curriculum`, `skillsGained`, `careerOutcomes`.
3. Verifier le rendu sur:
   - `/formations`
   - `/courses/[slug]`
   - `/` (sections Formations populaires)

## Ajouter une image a la galerie

1. Deposer l'image dans `public/gallery/`.
2. Ajouter l'entree dans `content/gallery.ts`:
   - `src`: chemin du fichier
   - `alt`: description utile et concrete
   - `category`: categorie existante ou nouvelle
3. Si nouvelle categorie: l'ajouter aussi dans `galleryCategories`.

## Ajouter un article de blog

1. Ajouter un objet dans `blogPosts` dans `content/blog.ts`.
2. Le `slug` doit etre unique (URL `/blog/[slug]`).
3. Remplir `metaDescription` pour le SEO.
4. Ajouter des paragraphes exploitables dans `content`.

## Metadonnees et SEO

Les metadonnees de page sont definies dans les fichiers de route via `buildPageMetadata`.

Sitemap et robots sont geres par:

- `app/sitemap.ts`
- `app/robots.ts`

## Formulaire leads

- UI: `components/forms/lead-form.tsx`
- validation: `lib/validation.ts`
- endpoints: `app/api/lead/route.ts`

## Recommandation de publication

Avant chaque publication:

1. Relire textes et ton (orientation carriere).
2. Verifier les coordonnees et liens WhatsApp.
3. Executer `npm run lint` puis `npm run build`.
