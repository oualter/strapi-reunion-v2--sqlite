import type { Schema, Attribute } from '@strapi/strapi';

export interface XXy extends Schema.Component {
  collectionName: 'components_x_xies';
  info: {
    displayName: 'xy';
    icon: 'pinMap';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'x.xy': XXy;
    }
  }
}
