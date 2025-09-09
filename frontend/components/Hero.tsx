import { strapiQuery } from "@/lib/strapi";
import { HeroSection } from "@/types/home-sections";
import { StrapiResponse } from "@/types/strapi-api";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { MapPin, Star, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";

export default async function Hero() {
  const params = "populate[homeSections][on][sections.hero][populate]=*";

  try {
    const res: StrapiResponse<HeroSection> = await strapiQuery("home", params);

    const data = res.data.homeSections[0] as HeroSection;
    const { title, description, primaryBtn, secondaryBtn, cover } = data;

    return (
      <section
        id="home"
        className="pt-20 bg-gradient-to-br from-[var(--background-light)] to-white"
        data-name="hero"
        data-file="components/Hero.js"
      >
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="[&>p>strong]:text-[var(--primary-color)] [&>p>strong]:font-bold text-4xl lg:text-6xl font-bold text-[var(--text-dark)] mb-6">
                <BlocksRenderer content={title} />
              </h1>
              <div className="text-xl text-[var(--text-light)] mb-8 leading-relaxed">
                <BlocksRenderer content={description} />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className={"btn-primary"} content={primaryBtn.text} />
                <Link
                  href={"/apartments"}
                  className="btn-secondary text-center"
                >
                  {secondaryBtn.text}
                </Link>
              </div>
              <div className="mt-8 flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Star className="text-lg text-[var(--primary-color)]"></Star>
                  <span className="text-[var(--text-dark)] font-medium">
                    5.0 Rating
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="text-lg text-[var(--primary-color)]"></Users>
                  <span className="text-[var(--text-dark)] font-medium">
                    100+ Happy Guests
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                priority
                src={cover.formats.medium?.url}
                alt={cover.alternativeText}
                className="rounded-2xl shadow-2xl "
                width={cover.width}
                height={cover.height}
                sizes="(min-width: 1360px) 584px, (min-width: 1040px) calc(40vw + 48px), calc(97.78vw - 25px)"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[var(--primary-color)] rounded-lg flex items-center justify-center">
                    <MapPin className=" text-xl text-white"></MapPin>
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--text-dark)]">
                      Boquete, Panama
                    </p>
                    <p className="text-sm text-[var(--text-light)]">
                      Prime Location
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    return <div>Nothing to show</div>;
  }
}
