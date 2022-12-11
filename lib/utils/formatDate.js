import siteMetadata from '@/data/siteMetadata'

const formatDate = (date) =>
  new Date(date).toLocaleDateString(siteMetadata.locale, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })

export default formatDate
