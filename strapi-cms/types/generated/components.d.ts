import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsAmenities extends Struct.ComponentSchema {
  collectionName: 'components_sections_amenities';
  info: {
    displayName: 'Amenities';
  };
  attributes: {
    amenities: Schema.Attribute.Relation<'oneToMany', 'api::amenity.amenity'>;
    heading: Schema.Attribute.Component<'shared.heading', false> &
      Schema.Attribute.Required;
  };
}

export interface SectionsC2A extends Struct.ComponentSchema {
  collectionName: 'components_sections_c2_as';
  info: {
    displayName: 'C2A';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false> &
      Schema.Attribute.Required;
    heading: Schema.Attribute.Component<'shared.heading', false> &
      Schema.Attribute.Required;
  };
}

export interface SectionsContact extends Struct.ComponentSchema {
  collectionName: 'components_sections_contacts';
  info: {
    displayName: 'Contact';
  };
  attributes: {
    contacts: Schema.Attribute.Relation<'oneToMany', 'api::contact.contact'>;
    heading: Schema.Attribute.Component<'shared.heading', false> &
      Schema.Attribute.Required;
  };
}

export interface SectionsFeatured extends Struct.ComponentSchema {
  collectionName: 'components_sections_featureds';
  info: {
    displayName: 'Featured';
  };
  attributes: {
    heading: Schema.Attribute.Component<'shared.heading', false> &
      Schema.Attribute.Required;
    properties: Schema.Attribute.Relation<
      'oneToMany',
      'api::property.property'
    >;
  };
}

export interface SectionsFeatures extends Struct.ComponentSchema {
  collectionName: 'components_sections_features';
  info: {
    displayName: 'Features';
  };
  attributes: {
    features: Schema.Attribute.Relation<'oneToMany', 'api::feature.feature'>;
    heading: Schema.Attribute.Component<'shared.heading', false> &
      Schema.Attribute.Required;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    cover: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    description: Schema.Attribute.Blocks & Schema.Attribute.Required;
    primaryBtn: Schema.Attribute.Component<'shared.button', false> &
      Schema.Attribute.Required;
    secondaryBtn: Schema.Attribute.Component<'shared.button', false> &
      Schema.Attribute.Required;
    title: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedHeading extends Struct.ComponentSchema {
  collectionName: 'components_shared_headings';
  info: {
    displayName: 'Heading';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sections.amenities': SectionsAmenities;
      'sections.c2-a': SectionsC2A;
      'sections.contact': SectionsContact;
      'sections.featured': SectionsFeatured;
      'sections.features': SectionsFeatures;
      'sections.hero': SectionsHero;
      'shared.button': SharedButton;
      'shared.heading': SharedHeading;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
