//? I think this is like a Sanity config file that is maybe referenced by default settings in the studio.

import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'puadnmze',
  dataset: 'production',
})
