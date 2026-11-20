// One source of truth for the homepage copy, shared by the design versions
// under app/v/* so they all say the same thing in different clothes.

export const CONTACT_EMAIL = 'info@playaspanish.com'

export const hero = {
  headline: 'Your path to Spanish starts here',
  headlineEs: 'Tu camino al español empieza aquí',
  sub: 'You can understand more Spanish than you think.',
  promise: 'Personalized lessons with native Mexican teachers',
  cta: 'Start now'
}

// From Angelica's slide "Buffet lingüístico de PlayaSpanish": who the courses
// are for and what is on the menu. Kept close to her wording.
export const buffet = {
  title: 'The Playa Spanish language buffet',
  titleEs: 'Buffet lingüístico',
  intro:
    'Our Spanish courses are for everyone who wants to learn another language, get to know a different culture, or both. Take what fits you.',
  audiences: [
    {
      title: 'You want to connect',
      description: 'Connect and communicate with people from other parts of the world.'
    },
    {
      title: 'You are traveling',
      description: 'For tourists traveling through Latin America.'
    },
    {
      title: 'You work with Spanish speakers',
      description: 'For professionals who work with Spanish-speaking companies.'
    }
  ],
  courses: [
    {
      title: 'Conversational Spanish',
      titleEs: 'Español conversacional',
      description: 'For travelers. The Spanish you will actually use on the road.'
    },
    {
      title: 'Technical Spanish',
      titleEs: 'Español técnico',
      description:
        'For specific fields: doctors, nurses, lawyers and more. Job interviews too.'
    }
  ]
}

// From Angelica's slide "Maestros mexicanos": what a class is like.
export const inClass = {
  title: 'Mexican teachers, Spanish from day one',
  titleEs: 'Maestros mexicanos',
  lead: 'Class is in Spanish from day one.',
  leadNote: 'English is there whenever you need it.',
  body:
    'You are not here to memorize a few words. You are here to speak, to practice, and to live the language, so every lesson runs in as much Spanish as you can take. Need more English? We blend the two: part of the class in English, part in Spanish, until you no longer need it.',
  topicsLabel: 'In class we talk about',
  topics: [
    { title: 'Grammar', titleEs: 'Gramática' },
    { title: 'Culture', titleEs: 'Cultura' },
    { title: 'Real slang', titleEs: 'Slang real' },
    { title: 'Mexican history', titleEs: 'Historia de México' },
    { title: 'Customs', titleEs: 'Costumbres' },
    { title: 'And more', titleEs: 'Y más' }
  ]
}

export const course = {
  title: 'The Course',
  sub: 'Half structure, half conversation. Half language, half culture. The balance is the method.',
  pillars: [
    {
      title: 'One course, no clock',
      description:
        'Your course is unlimited in time. Learn for as long as you want and need. No expiring seats, no semesters, just steady progress at your pace.'
    },
    {
      title: 'Experience first',
      description:
        'Lessons go beyond grammar: the language, the culture, and the people behind it. You learn Spanish the way it is actually lived.'
    },
    {
      title: 'Mexican Spanish, understood everywhere',
      description:
        'Every teacher is Mexican. The clear, standard Spanish of Mexico bridges Latin America and Spain: one accent that connects you to the whole Spanish-speaking world.'
    }
  ]
}

export const whySpanish = {
  title: 'One language, a whole world',
  sub: 'Spanish is one of the most spoken languages on the planet, and one voice carries you through all of it.',
  stats: [
    { value: '600M+', label: 'speakers worldwide' },
    { value: '21', label: 'countries with Spanish as an official language' },
    { value: '#2', label: 'most spoken native language on Earth' },
    { value: '#4', label: 'most spoken language overall' }
  ]
}

export type TeacherId = 'angelica' | 'neptali'

export type Teacher = {
  id: TeacherId
  name: string
  firstName: string
  role: string
  imageAlt: string
  intro: string
  /** Owner callout, Angelica only */
  badge?: { short: string; long: string }
  credentials: string[]
  sections: { title: string; body: string }[]
}

export const teachersIntro = {
  title: 'Meet Your Teachers',
  sub: 'Every teacher at Playa Spanish is Mexican, so you learn the language the way it is really spoken, straight from the source.'
}

export const teachers: Teacher[] = [
  {
    id: 'angelica',
    name: 'Angelica Torres',
    firstName: 'Angelica',
    role: 'Founder, owner & CEO',
    imageAlt: 'Angelica Torres, Spanish teacher, founder and CEO of Playa Spanish',
    badge: { short: 'Founder & CEO', long: 'Proud owner & CEO of Playa Spanish' },
    intro: 'Real connection, real conversations, and lessons shaped around your life and goals.',
    credentials: [
      'Lic. in English Language',
      'Certified Level C1',
      'More than 15 years of teaching experience'
    ],
    sections: [
      {
        title: 'My Expertise',
        body: 'As the founder of Playa Spanish, I bring extensive experience in teaching Spanish and Mexican culture. My passion for language education and cultural immersion has helped countless students achieve their Spanish learning goals.'
      }
    ]
  },
  {
    id: 'neptali',
    name: 'Neptalí Cruz Gutiérrez',
    firstName: 'Neptalí',
    role: 'Spanish teacher, DELE examiner',
    imageAlt: 'Neptalí Cruz Gutiérrez, Spanish teacher at Playa Spanish',
    intro:
      'For me, teaching is more than passing on knowledge. It means learning every day and being a bridge between my students, my language, and my culture.',
    credentials: [
      'Degree in Education, majoring in Spanish Language & Literature (Universidad de Montemorelos, N.L.)',
      'Certified DELE examiner',
      'More than 23 years teaching Spanish as a foreign language',
      'Teaching online since 2016, with students all over the world'
    ],
    sections: [
      {
        title: 'How I Teach',
        body: 'Since 2002 I have taught students of every age and level, always aiming for classes that are lively, practical, and shaped around each person. My method blends real communication, Mexican culture, and learning technology, with materials I have created myself so you can speak with confidence from day one. Every student teaches me something too: teaching and learning go hand in hand.'
      },
      {
        title: 'Beyond the Classroom',
        body: 'I travel whenever I can, and teaching remotely lets me work from anywhere. I train CrossFit, love cooking for family and friends, and keep up with current events, so there is always something interesting to talk about in class. I am patient, empathetic, and respectful, and I believe our differences should bring us closer, not divide us.'
      }
    ]
  }
]

export const howItWorks = {
  title: 'How it works',
  sub: 'Four phases, one cycle. Like the moon, it keeps going for as long as you do.',
  steps: [
    {
      title: 'Say hola',
      description:
        'Everything starts with an email. Tell us you want to learn Spanish. That is all it takes.'
    },
    {
      title: 'Your first chat',
      description:
        'A first conversation to understand what you need and where you want to go, so your lessons fit you from the very start.'
    },
    {
      title: 'Find your rhythm',
      description:
        'Lessons begin. How much, how often, and for how long is entirely up to you. The course never expires.'
    },
    {
      title: 'Carry it with you',
      description:
        'Between lessons the language settles in. Our upcoming Anki deck keeps you learning at home, straight from your teacher.'
    }
  ]
}

// The homepage's pricing, kept short on purpose (Mario, 2026-11-20): the
// price, the ten-lesson saving, the money-back promise, nothing more.
export const pricingSimple = {
  title: 'Pricing',
  rows: [
    {
      name: 'One lesson',
      price: '$25',
      points: ['One hour, one-on-one', 'Pay as you go', 'No commitment']
    },
    {
      name: 'Ten lessons',
      price: '$240',
      points: ['$24 per lesson, save $10', 'Book them whenever you like', '50% back if it is not for you']
    }
  ],
  cta: 'Start now',
  custom: 'Need Spanish for your profession? Ask for a custom course.'
}

// The fuller pricing copy, still used by the design versions under /v/*
export const pricing = {
  title: 'Simple, honest pricing',
  lead: 'A lesson is $25. Take ten and pay $24 each.',
  sub: 'Each lesson is a one-hour session: 45 minutes of focused Spanish, with breathing room built in.',
  plans: [
    {
      label: 'The pack',
      badge: 'Best value',
      name: '10 Lessons',
      price: '$24',
      unit: 'per lesson · $240 for the pack',
      tagline: 'Commit to ten, save $10',
      features: [
        'Save $10 on ten lessons',
        'Schedule them whenever you like',
        '50% money back if it is not for you'
      ],
      cta: 'Start with 10 lessons',
      recommended: true
    },
    {
      label: 'Pay as you go',
      badge: null,
      name: 'The Lesson',
      price: '$25',
      unit: 'per lesson · pay as you go',
      tagline: 'One class at a time',
      features: [
        'Pay per class, no commitment',
        'Lessons at your own pace, no expiry',
        'Same price for as long as you learn'
      ],
      cta: null,
      recommended: false
    }
  ],
  note: "Both start the same way: send Angelica an email and she will send you a payment link for a single lesson or the pack. If the pack truly isn't for you, half your money comes back. No questions, no hard feelings.",
  professional: {
    title: 'Spanish for your profession',
    body: 'Lawyers, doctors, job interviews, business negotiations. When you need Spanish for something specific, we start with a conversation. Angelica listens to what you need, then builds a course that fits it exactly. Custom scope, custom quote.',
    cta: 'Tell us what you need'
  }
}

// Placeholder reviews (PLA-7): replace with real student reviews before launch.
export const reviews = {
  title: 'What Our Students Say',
  sub: "Don't just take our word for it. Hear from our students.",
  items: [
    {
      name: 'Sarah M.',
      quote: 'Exactly what I needed to get started.',
      review:
        'Angelica is an amazing teacher! Her personalized approach helped me improve my Spanish quickly in one-on-one sessions.'
    },
    {
      name: 'Michael T.',
      quote: 'It made such a difference on my trip.',
      review:
        'Before visiting Mexico I took travel-focused lessons. I could order food, ask for directions, and hold real conversations.'
    },
    {
      name: 'John D.',
      quote: 'I now speak confidently with my Spanish-speaking clients.',
      review:
        'The business Spanish course was perfect for my work, tailored exactly to the situations I face every week.'
    },
    {
      name: 'Emily R.',
      quote: 'Great progress, wonderful people along the way.',
      review:
        'The classes are fun and engaging, and learning kept going between lessons. Highly recommend!'
    }
  ]
}

export const contact = {
  title: 'Ready to Start?',
  body: 'One email is the whole first step. Every message is read and answered personally. Tell us where you are with Spanish, or just say hola.',
  note: 'Online classes via Zoom or Teams, flexible to your platform if needed.'
}

export const footer = {
  blurb:
    'Learn Spanish as it is lived: language, culture, and people. Native Mexican teachers, for as long as your journey takes.'
}
