import { CONTACT_EMAIL, pricingSimple, teachers } from './content'

// Schema.org data for the homepage (PLA-31), built from the same content the
// page shows so the two never disagree. Google reads it to understand who
// the school is, what the course costs and who teaches it.
//
// Deliberately no AggregateRating: Google ignores star ratings a business
// publishes about itself, and marking them up can count against the site.

export const SITE_URL = 'https://playaspanish.com'

const priceOf = (label: string) => label.replace(/[^0-9.]/g, '')

export function homeStructuredData() {
  const org = {
    '@type': 'EducationalOrganization',
    '@id': `${SITE_URL}/#school`,
    name: 'Playa Spanish',
    url: SITE_URL,
    logo: `${SITE_URL}/icon.png`,
    image: `${SITE_URL}/og-image.jpg`,
    email: CONTACT_EMAIL,
    description:
      'Online Spanish school with native Mexican teachers: one-on-one lessons over video, Mexican culture and real conversation from the first class.',
    areaServed: 'Worldwide',
    knowsLanguage: ['es', 'en'],
    founder: { '@id': `${SITE_URL}/#angelica` }
  }

  const people = teachers.map((teacher) => ({
    '@type': 'Person',
    '@id': `${SITE_URL}/#${teacher.id}`,
    name: teacher.name,
    jobTitle: teacher.id === 'angelica' ? 'Owner, CEO and Spanish teacher' : 'Spanish teacher',
    worksFor: { '@id': `${SITE_URL}/#school` },
    knowsLanguage: ['es', 'en'],
    nationality: 'Mexican'
  }))

  const course = {
    '@type': 'Course',
    '@id': `${SITE_URL}/#course`,
    name: 'Online Spanish lessons with native Mexican teachers',
    description:
      'One-on-one Spanish lessons online, shaped around your goals: conversation, grammar, Mexican culture and real slang. Learn at your own pace, with no fixed term.',
    inLanguage: 'es',
    provider: { '@id': `${SITE_URL}/#school` },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'online',
      courseWorkload: 'PT1H',
      instructor: people.map((person) => ({ '@id': person['@id'] }))
    },
    offers: pricingSimple.rows.map((row) => ({
      '@type': 'Offer',
      name: row.name,
      category: 'Paid',
      price: priceOf(row.price),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/#pricing`
    }))
  }

  const site = {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: 'Playa Spanish',
    url: SITE_URL,
    inLanguage: 'en',
    publisher: { '@id': `${SITE_URL}/#school` }
  }

  return { '@context': 'https://schema.org', '@graph': [org, site, course, ...people] }
}
