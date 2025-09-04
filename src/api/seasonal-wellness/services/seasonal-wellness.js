'use strict';

/**
 * seasonal-wellness service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::seasonal-wellness.seasonal-wellness');
