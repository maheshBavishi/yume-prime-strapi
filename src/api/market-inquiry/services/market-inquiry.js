'use strict';

/**
 * market-inquiry service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::market-inquiry.market-inquiry');
