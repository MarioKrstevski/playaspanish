import type { TeacherId } from './content'

// TEMPORARY (PLA-18): candidate headshots for the photo switcher under each
// teacher. To add one, drop the file in public/teachers/<id>/ and add a line
// here. The first entry is what visitors see by default. Once Angelica picks,
// keep one entry per teacher and remove the switcher.
export const teacherPhotos: Record<TeacherId, { src: string; label: string }[]> = {
  angelica: [
    { src: '/teachers/angelica/courtyard-olive.jpg', label: 'Courtyard, olive blouse' },
    { src: '/teachers/angelica/courtyard-terracotta.jpg', label: 'Courtyard, terracotta blouse' },
    { src: '/teachers/angelica/office-blazer.jpg', label: 'Office, blazer' },
    { src: '/teachers/angelica/office-sweater.jpg', label: 'Office, black sweater' },
    { src: '/teachers/angelica/original.jpg', label: 'Her own photo' },
    // Generated from her own photo (Codex image generation, 2026-11-12)
    { src: '/teachers/angelica/codex-courtyard-blazer.jpg', label: 'From her photo: camel blazer, courtyard' },
    { src: '/teachers/angelica/codex-office-teal.jpg', label: 'From her photo: teal blouse, home office' },
    { src: '/teachers/angelica/codex-cafe-terracotta.jpg', label: 'From her photo: terracotta jacket, café' },
    // Same source photo, re-posed as a straight-on headshot
    { src: '/teachers/angelica/codex-front-courtyard-blazer.jpg', label: 'From her photo, facing forward: camel blazer, courtyard' },
    { src: '/teachers/angelica/codex-front-studio-blazer.jpg', label: 'From her photo, facing forward: charcoal blazer, studio' }
  ],
  neptali: [
    { src: '/teachers/neptali/courtyard.jpg', label: 'Courtyard, terracotta shirt' },
    { src: '/teachers/neptali/original.jpg', label: 'His own photo' }
  ]
}
