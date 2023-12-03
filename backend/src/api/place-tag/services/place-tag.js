'use strict';

/**
 * place-tag service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::place-tag.place-tag');
