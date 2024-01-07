export interface ApiData {
  data: Place[];
  meta: Meta;
}

export interface Place {
  id: number;
  attributes: PlaceAttributes;
}

export interface PlaceAttributes {
  title: string;
  description: Description[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  regions: Regions;
  feature_image: FeatureImage;
}

export interface Description {
  type: string;
  children: DescriptionText[];
}

export interface DescriptionText {
  text: string;
  type?: string;
}

export interface Regions {
  data: Region[];
}

export interface Region {
  id: number;
  attributes: RegionAttributes;
}

export interface RegionAttributes {
  title: string;
  description: Description[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface FeatureImage {
  data: ImageData;
}

export interface ImageData {
  id: number;
  attributes: ImageAttributes;
}

export interface ImageAttributes {
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: ImageFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any | null;
  createdAt: string;
  updatedAt: string;
}

export interface ImageFormats {
  large?: ImageDetails;
  small?: ImageDetails;
  medium?: ImageDetails;
  thumbnail?: ImageDetails;
}

export interface ImageDetails {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
