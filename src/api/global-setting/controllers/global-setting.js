'use strict';

/**
 * global-setting controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::global-setting.global-setting');

module.exports = createCoreController('api::global-setting.global-setting', ({ strapi }) => ({
  async find(ctx) {
    // Explicitly populate all fields including nested relations
    ctx.query = {
      ...ctx.query,
      populate: {
        points: {
          populate: {
            image: {
              fields: ['url', 'alternativeText', 'name', 'width', 'height', 'formats'],
            },
          },
        },
        // Add ALL other fields from your global-setting content type that need population
        // Examples (replace with your actual field names):
        logo: {
          fields: ['url', 'alternativeText', 'name', 'width', 'height', 'formats'],
        },
        banner: {
          fields: ['url', 'alternativeText', 'name', 'width', 'height', 'formats'],
        },
        // Add other relations/components as needed
      },
    };

    const { data, meta } = await super.find(ctx);

    return { data, meta };
  },
}));
