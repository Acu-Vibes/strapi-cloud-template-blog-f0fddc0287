import type { Schema, Struct } from '@strapi/strapi';

export interface BookingSessionScreenFeatures extends Struct.ComponentSchema {
  collectionName: 'components_booking_session_screen_features';
  info: {
    displayName: 'features';
    icon: 'bulletList';
  };
  attributes: {
    bulletPoint: Schema.Attribute.String;
  };
}

export interface EmotionalToolkitScreenHeadingDescription
  extends Struct.ComponentSchema {
  collectionName: 'components_emotional_toolkit_screen_heading_descriptions';
  info: {
    displayName: 'headingRMDescription';
  };
  attributes: {
    description: Schema.Attribute.RichText & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface EmotionalToolkitScreenHeadingDescriptionFrequency
  extends Struct.ComponentSchema {
  collectionName: 'components_emotional_toolkit_screen_heading_description_frequencies';
  info: {
    displayName: 'headingDescriptionFrequency';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    frequency: Schema.Attribute.String;
    heading: Schema.Attribute.String;
  };
}

export interface EmotionalToolkitScreenHeadingTDescription
  extends Struct.ComponentSchema {
  collectionName: 'components_emotional_toolkit_screen_heading_t_descriptions';
  info: {
    displayName: 'headingTDescription';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface HomeScreenExploreNowCard extends Struct.ComponentSchema {
  collectionName: 'components_home_screen_explore_now_cards';
  info: {
    displayName: 'exploreNowCard';
  };
  attributes: {
    background_image: Schema.Attribute.Media<'images'>;
    exploreNow_cta_text: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface HomeScreenPremiumCard extends Struct.ComponentSchema {
  collectionName: 'components_home_screen_premium_cards';
  info: {
    displayName: 'premiumCard';
    icon: 'cast';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    button_text: Schema.Attribute.String;
    description: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images'>;
  };
}

export interface HomeScreenSectionButton extends Struct.ComponentSchema {
  collectionName: 'components_home_screen_section_buttons';
  info: {
    displayName: 'sectionButton';
    icon: 'bulletList';
  };
  attributes: {
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images'>;
  };
}

export interface PremiumFeatures extends Struct.ComponentSchema {
  collectionName: 'components_premium_features';
  info: {
    displayName: 'features';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface ProductProducts extends Struct.ComponentSchema {
  collectionName: 'components_product_products';
  info: {
    displayName: 'products';
  };
  attributes: {
    description: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SeasonWellnessScreenKeyValuePair
  extends Struct.ComponentSchema {
  collectionName: 'components_season_wellness_screen_key_value_pairs';
  info: {
    displayName: 'keyValuePair';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface StartScreenSlider extends Struct.ComponentSchema {
  collectionName: 'components_start_screen_sliders';
  info: {
    displayName: 'slider';
    icon: 'bulletList';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    tagLine: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'booking-session-screen.features': BookingSessionScreenFeatures;
      'emotional-toolkit-screen.heading-description': EmotionalToolkitScreenHeadingDescription;
      'emotional-toolkit-screen.heading-description-frequency': EmotionalToolkitScreenHeadingDescriptionFrequency;
      'emotional-toolkit-screen.heading-t-description': EmotionalToolkitScreenHeadingTDescription;
      'home-screen.explore-now-card': HomeScreenExploreNowCard;
      'home-screen.premium-card': HomeScreenPremiumCard;
      'home-screen.section-button': HomeScreenSectionButton;
      'premium.features': PremiumFeatures;
      'product.products': ProductProducts;
      'season-wellness-screen.key-value-pair': SeasonWellnessScreenKeyValuePair;
      'start-screen.slider': StartScreenSlider;
    }
  }
}
