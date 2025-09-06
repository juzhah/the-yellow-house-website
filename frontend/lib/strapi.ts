import { Endpoint } from "@/types/api-endpoints-types";

const { STRAPI_API_TOKEN, STRAPI_DOMAIN } = process.env;

export default async function strapiQuery(endpoint: Endpoint, params?: string) {
  const urlParams = params ? `?${params}` : "";
  const URL = `${STRAPI_DOMAIN}/api/${endpoint}` + urlParams;

  return await fetch(URL, {
    headers: {
      Authorization: `Bearer ${STRAPI_API_TOKEN}`,
    },
  }).then((res) => res.json());
}
