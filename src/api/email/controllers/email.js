// 'use strict';

// /**
//  * email controller
//  */

// module.exports = {
//   async send(ctx) {
//     try {
//       const { to, subject, text, html } = ctx.request.body;

//       if (!to || !subject) {
//         return ctx.badRequest('Missing required fields: to, subject');
//       }

//       await strapi.plugin('email').service('email').send({
//         to,
//         subject,
//         text: text || 'Default plain text',
//         html: html || `<p>${text || 'Default HTML content'}</p>`,
//       });

//       return { message: 'Email sent successfully' };
//     } catch (err) {
//       ctx.throw(500, err);
//     }
//   },
// };
