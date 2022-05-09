import * as Prismic from '@prismicio/client';

export default function getPrismicClient() {
    const preview = Prismic.createClient(process.env.PRISMIC_API_ENDPOINT!,{
        accessToken: process.env.PRISMIC_ACCESS_TOKEN
      })
  return preview;
}