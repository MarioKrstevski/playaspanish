# Playa Spanish - Online Spanish School - Project Plan

## Overview
An online Spanish learning platform that provides interactive lessons, progress tracking, and a comprehensive learning experience for students of all levels.

## Core Features

### 1. User Authentication & Profiles
- **Student Registration/Login**
  - Email/password authentication
  - Social login (Google, Facebook)
  - Profile management
  - Learning preferences and goals
  - Progress dashboard

- **Teacher Profiles** (if applicable)
  - Teacher profiles and bios
  - Availability scheduling
  - Student management

### 2. Course Structure
- **Course Catalog**
  - Browse courses by level (Beginner, Intermediate, Advanced)
  - Course categories (Grammar, Vocabulary, Conversation, Business Spanish, etc.)
  - Course previews and descriptions
  - Enrollment system

- **Lesson System**
  - Interactive lessons with multimedia content
  - Video lessons
  - Audio exercises
  - Reading comprehension
  - Writing exercises
  - Progress tracking per lesson
  - Lesson completion certificates

### 3. Learning Tools
- **Vocabulary Builder**
  - Flashcard system
  - Spaced repetition algorithm
  - Custom word lists
  - Pronunciation practice

- **Grammar Exercises**
  - Interactive quizzes
  - Fill-in-the-blank exercises
  - Sentence construction
  - Immediate feedback

- **Speaking Practice**
  - Voice recording exercises
  - Pronunciation feedback (if using speech recognition API)
  - Conversation simulations

- **Listening Practice**
  - Audio exercises with transcripts
  - Comprehension questions
  - Speed adjustment controls

### 4. Progress Tracking
- **Dashboard**
  - Learning streak calendar
  - XP/Points system
  - Level progression
  - Completion percentages
  - Time spent learning
  - Achievement badges

- **Analytics**
  - Weak areas identification
  - Strength areas
  - Recommended next lessons
  - Learning velocity

### 5. Community Features (Optional)
- **Discussion Forums**
  - Course-specific discussions
  - Q&A sections
  - Peer support

- **Study Groups**
  - Create/join study groups
  - Group challenges
  - Collaborative learning

### 6. Payment & Subscriptions
- **Subscription Plans**
  - Free tier (limited access)
  - Monthly/Annual subscriptions
  - Course-specific purchases
  - Payment integration (Stripe)

## Technical Architecture

### Frontend Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Stylus Modules
- **UI Components**: Shadcn UI + Radix UI
- **State Management**: Zustand (for client-side state)
- **URL State**: nuqs (for search params)
- **Forms**: react-hook-form + Zod validation

### Backend/API
- **API Routes**: Next.js API routes
- **Database**: (To be determined - PostgreSQL/MongoDB/Supabase)
- **Authentication**: NextAuth.js or Clerk
- **File Storage**: (For audio/video - AWS S3, Cloudinary, or similar)
- **Email**: Resend or SendGrid

### Third-Party Integrations
- **Payment**: Stripe
- **Video Hosting**: (Vimeo, YouTube, or custom CDN)
- **Analytics**: Vercel Analytics / Google Analytics
- **Error Tracking**: Sentry (optional)

## Database Schema (High Level)

### Users
- id, email, name, password_hash, role (student/teacher/admin)
- created_at, updated_at
- preferences (JSON)

### Courses
- id, title, description, level, category
- thumbnail_url, preview_video_url
- price, is_free
- created_at, updated_at

### Lessons
- id, course_id, title, description, order
- lesson_type (video/audio/reading/writing/quiz)
- content (JSON or separate tables)
- duration_minutes
- created_at, updated_at

### Enrollments
- id, user_id, course_id
- progress_percentage, current_lesson_id
- enrolled_at, completed_at

### Lesson Progress
- id, user_id, lesson_id
- status (not_started/in_progress/completed)
- score, attempts
- completed_at

### Vocabulary
- id, word, translation, audio_url
- category, difficulty_level
- example_sentence

### User Vocabulary
- id, user_id, vocabulary_id
- mastery_level, last_reviewed
- next_review_date (for spaced repetition)

## User Flows

### 1. New Student Onboarding
1. Landing page → Sign up
2. Choose learning goal (travel, business, academic, etc.)
3. Take placement test (optional)
4. Select recommended course or browse catalog
5. Start first lesson

### 2. Daily Learning Flow
1. Login → Dashboard
2. View today's recommended lessons
3. Continue current lesson or start new one
4. Complete lesson activities
5. Review vocabulary flashcards
6. Check progress updates

### 3. Course Completion Flow
1. Complete all lessons in course
2. Take final assessment
3. Receive certificate
4. Get recommendations for next course

## Implementation Phases

### Phase 1: Foundation (MVP)
- [ ] Project setup and configuration
- [ ] Authentication system
- [ ] Basic course catalog (static data)
- [ ] Simple lesson viewer
- [ ] User dashboard
- [ ] Progress tracking basics

### Phase 2: Core Learning Features
- [ ] Interactive lesson types (video, audio, reading, quiz)
- [ ] Vocabulary flashcard system
- [ ] Grammar exercises
- [ ] Lesson completion tracking
- [ ] Course enrollment

### Phase 3: Enhanced Features
- [ ] Spaced repetition algorithm
- [ ] Speaking practice (voice recording)
- [ ] Advanced progress analytics
- [ ] Achievement system
- [ ] Learning streak tracking

### Phase 4: Monetization
- [ ] Payment integration (Stripe)
- [ ] Subscription management
- [ ] Course pricing
- [ ] Free vs. premium content

### Phase 5: Community & Polish
- [ ] Discussion forums
- [ ] Study groups
- [ ] Email notifications
- [ ] Mobile responsiveness optimization
- [ ] Performance optimization

## Design Considerations

### UI/UX Principles
- Clean, modern, and inviting design
- Spanish cultural elements (colors, imagery)
- Mobile-first responsive design
- Accessible (WCAG 2.1 AA compliance)
- Fast loading times
- Smooth animations and transitions

### Color Palette Suggestions
- Primary: Warm oranges/reds (Spanish flag inspired)
- Secondary: Blues (ocean/beach theme - "Playa")
- Accent: Yellows/golds
- Neutral: Grays for text and backgrounds

### Key Pages
1. **Landing Page**: Hero section, features, testimonials, CTA
2. **Dashboard**: Progress overview, quick actions, recommendations
3. **Course Catalog**: Grid/list view, filters, search
4. **Lesson Player**: Video/audio player, exercises, navigation
5. **Profile**: Settings, achievements, learning stats
6. **Vocabulary**: Flashcard interface, word lists

## Next Steps

1. **Design System Setup**
   - Install Shadcn UI
   - Set up Tailwind theme with brand colors
   - Create base components (Button, Card, etc.)

2. **Database Setup**
   - Choose database solution
   - Set up schema
   - Create migration scripts

3. **Authentication**
   - Implement NextAuth.js or Clerk
   - Create login/signup pages
   - Set up protected routes

4. **First Course**
   - Create sample course data
   - Build lesson viewer component
   - Implement basic progress tracking

5. **Testing**
   - Set up testing framework (Jest + React Testing Library)
   - Write tests for critical paths

## Questions to Resolve

- [ ] Which database solution? (PostgreSQL, MongoDB, Supabase, PlanetScale)
- [ ] Authentication provider? (NextAuth.js, Clerk, Auth0)
- [ ] Video hosting solution?
- [ ] Speech recognition for pronunciation? (Web Speech API, third-party)
- [ ] Real-time features needed? (WebSockets for live classes?)
- [ ] Multi-language support? (i18n for the platform itself)
