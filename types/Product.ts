export enum ProductType {
    MAP = 'map',
    GAMEMODE = 'gamemode',
    CHAMPION = 'champion',
    ITEM = 'item',
    APP = 'app',
    API = 'api',   
    SKIN = 'skins'
}

export interface Product {
  name: string;
  description: string;
  dateClose: string;
  dateOpen: string;
  link: string;
  type: ProductType;
}

export type ProductWithSlug = Product & { slug: string };
