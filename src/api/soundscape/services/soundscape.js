'use strict';

/**
 * soundscape service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::soundscape.soundscape');
