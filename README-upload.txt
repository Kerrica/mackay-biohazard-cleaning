FULL REBUILD PACKAGE V2

This package replaces the broken build with a self-contained structure.

Included:
- core config files
- full app folder
- locations/[slug]/page.tsx
- services/[slug]/page.tsx
- privacy policy page
- one hero image in public/images

Important:
- no @/ imports are used
- next is set to 15.2.6
- this package is designed to stop missing-module errors from old alias-based files

Best upload method:
1. Replace repo contents with this package.
2. Delete old app files/folders that are not in this package if they still remain in GitHub.
3. Commit changes.
4. Redeploy.
