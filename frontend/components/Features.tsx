import { STRAPI_DOMAIN, strapiQuery } from "@/lib/strapi";
import { Feature } from "@/types/features";
import { Check } from "lucide-react";

export default async function Features() {
  const params = `populate[homeSections][on][sections.amenities][populate]=*&populate[homeSections][on][sections.features][populate][heading][populate]=*&populate[homeSections][on][sections.features][populate][features][populate]=icon`;

  try {
    const res = await strapiQuery("home", params);

    const [features, amenities] = res.data.homeSections;

    const amenitiesBadges = amenities.amenities.map((amenity: any) => (
      <div
        key={amenity.id}
        className="flex items-center space-x-2 justify-center"
      >
        <Check className="text-sm text-[var(--primary-color)]" />
        <span className="text-sm font-medium text-[var(--text-dark)]">
          {amenity.name}
        </span>
      </div>
    ));

    const featuresCards = features.features.map((feature: Feature) => (
      <div
        key={feature.id}
        className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors duration-200"
      >
        <div className="text-sm text-[var(--primary-color)] w-16 h-16 bg-[var(--background-light)] rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            width={feature.icon.width}
            height={feature.icon.height}
            className="text-2xl text-[var(--primary-color)]"
          >
            <image
              xlinkHref={STRAPI_DOMAIN + feature.icon.url}
              width={feature.icon.width}
              height={feature.icon.height}
            />
          </svg>
        </div>

        <h3 className="text-xl font-bold text-[var(--text-dark)] mb-3">
          {feature.title}
        </h3>
        <p className="text-[var(--text-light)] leading-relaxed">
          {feature.description}
        </p>
      </div>
    ));

    return (
      <section
        id="features"
        className="bg-white section-padding"
        data-name="features"
        data-file="components/Features.js"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-dark)] mb-4">
              {features.heading.title}
            </h2>
            <p className="text-xl text-[var(--text-light)] max-w-3xl mx-auto">
              {features.heading.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresCards}
          </div>

          <div className="mt-16 bg-[var(--background-light)] rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-[var(--text-dark)] mb-4">
              {amenities.heading.title}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {amenitiesBadges}
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    return <div>Nothing to show</div>;
  }
}
