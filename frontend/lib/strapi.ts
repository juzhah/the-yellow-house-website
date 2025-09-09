import { Endpoint } from "@/types/strapi-api";

const STRAPI_DOMAIN = process.env.NEXT_PUBLIC_STRAPI_URL!;
const STRAPI_MEDIA_URL = process.env.NEXT_PUBLIC_STRAPI_MEDIA_URL!;
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

if (!STRAPI_DOMAIN) {
  throw new Error("Missing environment variable: NEXT_PUBLIC_STRAPI_API_URL");
}

async function strapiQuery(endpoint: Endpoint, params?: string) {
  const urlParams = params ? `?${params}` : "";
  const URL = `${STRAPI_DOMAIN}api/${endpoint}` + urlParams;

  return await fetch(URL, {
    headers: {
      Authorization: `Bearer ${STRAPI_API_TOKEN}`,
    },
  }).then((res) => res.json());
}

export { STRAPI_DOMAIN, strapiQuery, STRAPI_MEDIA_URL };
