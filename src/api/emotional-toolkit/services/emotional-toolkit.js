'use strict';

/**
 * emotional-toolkit service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::emotional-toolkit.emotional-toolkit');
