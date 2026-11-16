import type { TeacherId } from './content'

// Each teacher's headshot. Chosen by Angelica on 2026-11-16 (PLA-20), out of
// the candidates in public/teachers/<id>/. With one entry per teacher the
// photo switcher hides itself; add entries again to bring it back.
export const teacherPhotos: Record<TeacherId, { src: string; label: string }[]> = {
  angelica: [{ src: '/teachers/angelica/codex-front-studio-blazer.jpg', label: 'Charcoal blazer, studio' }],
  neptali: [{ src: '/teachers/neptali/codex-office-linen.jpg', label: 'White linen shirt, home office' }]
}
