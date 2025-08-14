import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Array: { input: any; output: any };
  JsonArgument: { input: any; output: any };
};

export type AssetContainer = {
  handle: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
};

export type AssetInterface = {
  blueprint?: Maybe<Scalars["String"]["output"]>;
  /** Generate a blurhash for an image */
  blurhash?: Maybe<Scalars["String"]["output"]>;
  container: AssetContainer;
  duration?: Maybe<Scalars["Float"]["output"]>;
  edit_url?: Maybe<Scalars["String"]["output"]>;
  extension: Scalars["String"]["output"];
  focus_css?: Maybe<Scalars["String"]["output"]>;
  folder?: Maybe<Scalars["String"]["output"]>;
  height?: Maybe<Scalars["Float"]["output"]>;
  id: Scalars["String"]["output"];
  is_audio?: Maybe<Scalars["Boolean"]["output"]>;
  is_image?: Maybe<Scalars["Boolean"]["output"]>;
  is_video?: Maybe<Scalars["Boolean"]["output"]>;
  last_modified?: Maybe<Scalars["String"]["output"]>;
  orientation?: Maybe<Scalars["String"]["output"]>;
  path: Scalars["String"]["output"];
  permalink?: Maybe<Scalars["String"]["output"]>;
  ratio?: Maybe<Scalars["Float"]["output"]>;
  size?: Maybe<Scalars["String"]["output"]>;
  size_b?: Maybe<Scalars["Int"]["output"]>;
  size_bytes?: Maybe<Scalars["Int"]["output"]>;
  size_gb?: Maybe<Scalars["Float"]["output"]>;
  size_gigabytes?: Maybe<Scalars["Float"]["output"]>;
  size_kb?: Maybe<Scalars["Float"]["output"]>;
  size_kilobytes?: Maybe<Scalars["Float"]["output"]>;
  size_mb?: Maybe<Scalars["Float"]["output"]>;
  size_megabytes?: Maybe<Scalars["Float"]["output"]>;
  /** Generate a thumbnail for an image */
  thumbnail?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
  width?: Maybe<Scalars["Float"]["output"]>;
};

export type AssetInterfaceThumbnailArgs = {
  width?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AssetInterfacePagination = {
  /** Current page of the cursor */
  current_page: Scalars["Int"]["output"];
  /** List of items on the current page */
  data: Array<AssetInterface>;
  /** Number of the first item returned */
  from?: Maybe<Scalars["Int"]["output"]>;
  /** Determines if cursor has more pages after the current page */
  has_more_pages: Scalars["Boolean"]["output"];
  /** The last page (number of pages) */
  last_page: Scalars["Int"]["output"];
  /** Number of items returned per page */
  per_page: Scalars["Int"]["output"];
  /** Number of the last item returned */
  to?: Maybe<Scalars["Int"]["output"]>;
  /** Number of total items selected by the query */
  total: Scalars["Int"]["output"];
};

export type Asset_Assets = AssetInterface & {
  alt?: Maybe<Scalars["String"]["output"]>;
  blueprint?: Maybe<Scalars["String"]["output"]>;
  /** Generate a blurhash for an image */
  blurhash?: Maybe<Scalars["String"]["output"]>;
  container: AssetContainer;
  duration?: Maybe<Scalars["Float"]["output"]>;
  edit_url?: Maybe<Scalars["String"]["output"]>;
  extension: Scalars["String"]["output"];
  focus_css?: Maybe<Scalars["String"]["output"]>;
  folder?: Maybe<Scalars["String"]["output"]>;
  height?: Maybe<Scalars["Float"]["output"]>;
  id: Scalars["String"]["output"];
  is_audio?: Maybe<Scalars["Boolean"]["output"]>;
  is_image?: Maybe<Scalars["Boolean"]["output"]>;
  is_video?: Maybe<Scalars["Boolean"]["output"]>;
  last_modified?: Maybe<Scalars["String"]["output"]>;
  orientation?: Maybe<Scalars["String"]["output"]>;
  path: Scalars["String"]["output"];
  permalink?: Maybe<Scalars["String"]["output"]>;
  ratio?: Maybe<Scalars["Float"]["output"]>;
  size?: Maybe<Scalars["String"]["output"]>;
  size_b?: Maybe<Scalars["Int"]["output"]>;
  size_bytes?: Maybe<Scalars["Int"]["output"]>;
  size_gb?: Maybe<Scalars["Float"]["output"]>;
  size_gigabytes?: Maybe<Scalars["Float"]["output"]>;
  size_kb?: Maybe<Scalars["Float"]["output"]>;
  size_kilobytes?: Maybe<Scalars["Float"]["output"]>;
  size_mb?: Maybe<Scalars["Float"]["output"]>;
  size_megabytes?: Maybe<Scalars["Float"]["output"]>;
  /** Generate a thumbnail for an image */
  thumbnail?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
  width?: Maybe<Scalars["Float"]["output"]>;
};

export type Asset_AssetsThumbnailArgs = {
  width?: InputMaybe<Scalars["Int"]["input"]>;
};

export type BardText = {
  text?: Maybe<Scalars["String"]["output"]>;
  type: Scalars["String"]["output"];
};

export type Code = {
  code: Scalars["String"]["output"];
  mode: Scalars["String"]["output"];
};

export type Collection = {
  handle: Scalars["String"]["output"];
  structure?: Maybe<CollectionStructure>;
  title: Scalars["String"]["output"];
};

export type CollectionStructure = {
  expects_root: Scalars["Boolean"]["output"];
  handle: Scalars["String"]["output"];
  max_depth?: Maybe<Scalars["Int"]["output"]>;
  title: Scalars["String"]["output"];
  tree?: Maybe<Array<Maybe<CollectionTreeBranch>>>;
};

export type CollectionStructureTreeArgs = {
  site?: InputMaybe<Scalars["String"]["input"]>;
};

export type CollectionTreeBranch = {
  children?: Maybe<Array<Maybe<CollectionTreeBranch>>>;
  depth: Scalars["Int"]["output"];
  entry?: Maybe<EntryInterface>;
  /** @deprecated Replaced by `entry` */
  page?: Maybe<EntryInterface>;
};

export type DateRange = {
  end?: Maybe<Scalars["String"]["output"]>;
  start?: Maybe<Scalars["String"]["output"]>;
};

export type DateRangeEndArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
};

export type DateRangeStartArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
};

export type EntryInterface = {
  blueprint?: Maybe<Scalars["String"]["output"]>;
  breadcrumbs?: Maybe<Array<Maybe<Breadcrumbs>>>;
  collection: Collection;
  date?: Maybe<Scalars["String"]["output"]>;
  edit_url: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  last_modified?: Maybe<Scalars["String"]["output"]>;
  locale: Scalars["String"]["output"];
  parent?: Maybe<EntryInterface>;
  permalink?: Maybe<Scalars["String"]["output"]>;
  private: Scalars["Boolean"]["output"];
  published: Scalars["Boolean"]["output"];
  /** The read time of the entry */
  readtime?: Maybe<Scalars["Int"]["output"]>;
  /** The SEO meta data */
  seo?: Maybe<SeoTypes>;
  site: Site;
  slug: Scalars["String"]["output"];
  status: Scalars["String"]["output"];
  /** The testimonial link */
  testimonial_link?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  /** Generate a TOC from Bard content */
  toc?: Maybe<TocTypes>;
  uri?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
};

export type EntryInterfaceBreadcrumbsArgs = {
  get_full_path_of_mount_page?: InputMaybe<Scalars["Boolean"]["input"]>;
  use_navigation_structure?: InputMaybe<Scalars["String"]["input"]>;
};

export type EntryInterfaceDateArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
};

export type EntryInterfaceLast_ModifiedArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
};

export type EntryInterfaceReadtimeArgs = {
  handle?: InputMaybe<Scalars["String"]["input"]>;
};

export type EntryInterfacePagination = {
  /** Current page of the cursor */
  current_page: Scalars["Int"]["output"];
  /** List of items on the current page */
  data: Array<EntryInterface>;
  /** Number of the first item returned */
  from?: Maybe<Scalars["Int"]["output"]>;
  /** Determines if cursor has more pages after the current page */
  has_more_pages: Scalars["Boolean"]["output"];
  /** The last page (number of pages) */
  last_page: Scalars["Int"]["output"];
  /** Number of items returned per page */
  per_page: Scalars["Int"]["output"];
  /** Number of the last item returned */
  to?: Maybe<Scalars["Int"]["output"]>;
  /** Number of total items selected by the query */
  total: Scalars["Int"]["output"];
};

export type Entry_Brands_Brand = EntryInterface & {
  blueprint?: Maybe<Scalars["String"]["output"]>;
  breadcrumbs?: Maybe<Array<Maybe<Breadcrumbs>>>;
  collection: Collection;
  date?: Maybe<Scalars["String"]["output"]>;
  edit_url: Scalars["String"]["output"];
  icon?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  last_modified?: Maybe<Scalars["String"]["output"]>;
  link?: Maybe<Scalars["String"]["output"]>;
  locale: Scalars["String"]["output"];
  parent?: Maybe<EntryInterface>;
  permalink?: Maybe<Scalars["String"]["output"]>;
  private: Scalars["Boolean"]["output"];
  published: Scalars["Boolean"]["output"];
  /** The read time of the entry */
  readtime?: Maybe<Scalars["Int"]["output"]>;
  /** The SEO meta data */
  seo?: Maybe<SeoTypes>;
  site: Site;
  slug: Scalars["String"]["output"];
  status: Scalars["String"]["output"];
  /** The testimonial link */
  testimonial_link?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  /** Generate a TOC from Bard content */
  toc?: Maybe<TocTypes>;
  uri?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
};

export type Entry_Brands_BrandBreadcrumbsArgs = {
  get_full_path_of_mount_page?: InputMaybe<Scalars["Boolean"]["input"]>;
  use_navigation_structure?: InputMaybe<Scalars["String"]["input"]>;
};

export type Entry_Brands_BrandDateArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
};

export type Entry_Brands_BrandLast_ModifiedArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
};

export type Entry_Brands_BrandReadtimeArgs = {
  handle?: InputMaybe<Scalars["String"]["input"]>;
};

export type Entry_Careers_Career = EntryInterface & {
  blueprint?: Maybe<Scalars["String"]["output"]>;
  breadcrumbs?: Maybe<Array<Maybe<Breadcrumbs>>>;
  career_content?: Maybe<Array<Maybe<Sets_CareerContent>>>;
  collection: Collection;
  date?: Maybe<Scalars["String"]["output"]>;
  edit_url: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  last_modified?: Maybe<Scalars["String"]["output"]>;
  locale: Scalars["String"]["output"];
  meta?: Maybe<Scalars["String"]["output"]>;
  parent?: Maybe<EntryInterface>;
  permalink?: Maybe<Scalars["String"]["output"]>;
  private: Scalars["Boolean"]["output"];
  published: Scalars["Boolean"]["output"];
  /** The read time of the entry */
  readtime?: Maybe<Scalars["Int"]["output"]>;
  /** The SEO meta data */
  seo?: Maybe<SeoTypes>;
  seo_canonical?: Maybe<LabeledValue>;
  seo_canonical_custom_entry?: Maybe<Array<Maybe<EntryInterface>>>;
  seo_canonical_url?: Maybe<Scalars["String"]["output"]>;
  seo_custom_meta_description?: Maybe<Scalars["String"]["output"]>;
  seo_custom_meta_title?: Maybe<Scalars["String"]["output"]>;
  seo_custom_og_desc?: Maybe<Scalars["String"]["output"]>;
  seo_custom_og_title?: Maybe<Scalars["String"]["output"]>;
  seo_custom_tw_desc?: Maybe<Scalars["String"]["output"]>;
  seo_custom_tw_title?: Maybe<Scalars["String"]["output"]>;
  seo_meta_description?: Maybe<LabeledValue>;
  seo_og_description?: Maybe<LabeledValue>;
  seo_og_image?: Maybe<Array<Maybe<AssetInterface>>>;
  seo_og_site_name?: Maybe<Scalars["String"]["output"]>;
  seo_og_title?: Maybe<LabeledValue>;
  seo_og_type?: Maybe<Scalars["String"]["output"]>;
  seo_title?: Maybe<LabeledValue>;
  seo_tw_description?: Maybe<LabeledValue>;
  seo_tw_title?: Maybe<LabeledValue>;
  short_description?: Maybe<Scalars["String"]["output"]>;
  site: Site;
  slug: Scalars["String"]["output"];
  social?: Maybe<Scalars["String"]["output"]>;
  status: Scalars["String"]["output"];
  /** The testimonial link */
  testimonial_link?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  /** Generate a TOC from Bard content */
  toc?: Maybe<TocTypes>;
  uri?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
};

export type Entry_Careers_CareerBreadcrumbsArgs = {
  get_full_path_of_mount_page?: InputMaybe<Scalars["Boolean"]["input"]>;
  use_navigation_structure?: InputMaybe<Scalars["String"]["input"]>;
};

export type Entry_Careers_CareerDateArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
};

export type Entry_Careers_CareerLast_ModifiedArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
};

export type Entry_Careers_CareerReadtimeArgs = {
  handle?: InputMaybe<Scalars["String"]["input"]>;
};

export type Entry_CaseStudies_CaseStudy = EntryInterface & {
  blueprint?: Maybe<Scalars["String"]["output"]>;
  breadcrumbs?: Maybe<Array<Maybe<Breadcrumbs>>>;
  case_blocks?: Maybe<Array<Maybe<Sets_CaseBlocks>>>;
  category?: Maybe<LabeledValue>;
  client?: Maybe<Scalars["String"]["output"]>;
  collection: Collection;
  date?: Maybe<Scalars["String"]["output"]>;
  edit_url: Scalars["String"]["output"];
  hero_image?: Maybe<AssetInterface>;
  id: Scalars["ID"]["output"];
  last_modified?: Maybe<Scalars["String"]["output"]>;
  locale: Scalars["String"]["output"];
  meta?: Maybe<Scalars["String"]["output"]>;
  parent?: Maybe<EntryInterface>;
  permalink?: Maybe<Scalars["String"]["output"]>;
  private: Scalars["Boolean"]["output"];
  published: Scalars["Boolean"]["output"];
  /** The read time of the entry */
  readtime?: Maybe<Scalars["Int"]["output"]>;
  related_case_studies?: Maybe<Array<Maybe<EntryInterface>>>;
  /** The SEO meta data */
  seo?: Maybe<SeoTypes>;
  seo_canonical?: Maybe<LabeledValue>;
  seo_canonical_custom_entry?: Maybe<Array<Maybe<EntryInterface>>>;
  seo_canonical_url?: Maybe<Scalars["String"]["output"]>;
  seo_custom_meta_description?: Maybe<Scalars["String"]["output"]>;
  seo_custom_meta_title?: Maybe<Scalars["String"]["output"]>;
  seo_custom_og_desc?: Maybe<Scalars["String"]["output"]>;
  seo_custom_og_title?: Maybe<Scalars["String"]["output"]>;
  seo_custom_tw_desc?: Maybe<Scalars["String"]["output"]>;
  seo_custom_tw_title?: Maybe<Scalars["String"]["output"]>;
  seo_meta_description?: Maybe<LabeledValue>;
  seo_og_description?: Maybe<LabeledValue>;
  seo_og_image?: Maybe<Array<Maybe<AssetInterface>>>;
  seo_og_site_name?: Maybe<Scalars["String"]["output"]>;
  seo_og_title?: Maybe<LabeledValue>;
  seo_og_type?: Maybe<Scalars["String"]["output"]>;
  seo_title?: Maybe<LabeledValue>;
  seo_tw_description?: Maybe<LabeledValue>;
  seo_tw_title?: Maybe<LabeledValue>;
  short_description?: Maybe<Scalars["String"]["output"]>;
  site: Site;
  slug: Scalars["String"]["output"];
  social?: Maybe<Scalars["String"]["output"]>;
  status: Scalars["String"]["output"];
  technologies?: Maybe<Array<Maybe<EntryInterface>>>;
  /** The testimonial link */
  testimonial_link?: Maybe<Scalars["String"]["output"]>;
  thumbnail_image?: Maybe<AssetInterface>;
  title: Scalars["String"]["output"];
  /** Generate a TOC from Bard content */
  toc?: Maybe<TocTypes>;
  uri?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
};

export type Entry_CaseStudies_CaseStudyBreadcrumbsArgs = {
  get_full_path_of_mount_page?: InputMaybe<Scalars["Boolean"]["input"]>;
  use_navigation_structure?: InputMaybe<Scalars["String"]["input"]>;
};

export type Entry_CaseStudies_CaseStudyDateArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
};

export type Entry_CaseStudies_CaseStudyLast_ModifiedArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
};

export type Entry_CaseStudies_CaseStudyReadtimeArgs = {
  handle?: InputMaybe<Scalars["String"]["input"]>;
};

export type Entry_Ctas_Cta = EntryInterface & {
  blueprint?: Maybe<Scalars["String"]["output"]>;
  breadcrumbs?: Maybe<Array<Maybe<Breadcrumbs>>>;
  collection: Collection;
  content?: Maybe<Scalars["String"]["output"]>;
  cp_title?: Maybe<Scalars["String"]["output"]>;
  cta_headshots?: Maybe<AssetInterface>;
  cta_image: AssetInterface;
  date?: Maybe<Scalars["String"]["output"]>;
  edit_url: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  label?: Maybe<Scalars["String"]["output"]>;
  last_modified?: Maybe<Scalars["String"]["output"]>;
  link?: Maybe<Scalars["String"]["output"]>;
  locale: Scalars["String"]["output"];
  parent?: Maybe<EntryInterface>;
  permalink?: Maybe<Scalars["String"]["output"]>;
  private: Scalars["Boolean"]["output"];
  published: Scalars["Boolean"]["output"];
  /** The read time of the entry */
  readtime?: Maybe<Scalars["Int"]["output"]>;
  /** The SEO meta data */
  seo?: Maybe<SeoTypes>;
  site: Site;
  slug: Scalars["String"]["output"];
  status: Scalars["String"]["output"];
  /** The testimonial link */
  testimonial_link?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  /** Generate a TOC from Bard content */
  toc?: Maybe<TocTypes>;
  uri?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
};

export type Entry_Ctas_CtaBreadcrumbsArgs = {
  get_full_path_of_mount_page?: InputMaybe<Scalars["Boolean"]["input"]>;
  use_navigation_structure?: InputMaybe<Scalars["String"]["input"]>;
};

export type Entry_Ctas_CtaDateArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
};

export type Entry_Ctas_CtaLast_ModifiedArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
};

export type Entry_Ctas_CtaReadtimeArgs = {
  handle?: InputMaybe<Scalars["String"]["input"]>;
};

export type Entry_LandingPages_LandingPage = EntryInterface & {
  blocks?: Maybe<Array<Maybe<Sets_Blocks>>>;
  blueprint?: Maybe<Scalars["String"]["output"]>;
  breadcrumbs?: Maybe<Array<Maybe<Breadcrumbs>>>;
  collection: Collection;
  date?: Maybe<Scalars["String"]["output"]>;
  edit_url: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  last_modified?: Maybe<Scalars["String"]["output"]>;
  locale: Scalars["String"]["output"];
  meta?: Maybe<Scalars["String"]["output"]>;
  parent?: Maybe<EntryInterface>;
  permalink?: Maybe<Scalars["String"]["output"]>;
  private: Scalars["Boolean"]["output"];
  published: Scalars["Boolean"]["output"];
  /** The read time of the entry */
  readtime?: Maybe<Scalars["Int"]["output"]>;
  scripts?: Maybe<Array<Maybe<Sets_Scripts>>>;
  /** The SEO meta data */
  seo?: Maybe<SeoTypes>;
  seo_canonical?: Maybe<LabeledValue>;
  seo_canonical_custom_entry?: Maybe<Array<Maybe<EntryInterface>>>;
  seo_canonical_url?: Maybe<Scalars["String"]["output"]>;
  seo_custom_meta_description?: Maybe<Scalars["String"]["output"]>;
  seo_custom_meta_title?: Maybe<Scalars["String"]["output"]>;
  seo_custom_og_desc?: Maybe<Scalars["String"]["output"]>;
  seo_custom_og_title?: Maybe<Scalars["String"]["output"]>;
  seo_custom_tw_desc?: Maybe<Scalars["String"]["output"]>;
  seo_custom_tw_title?: Maybe<Scalars["String"]["output"]>;
  seo_meta_description?: Maybe<LabeledValue>;
  seo_og_description?: Maybe<LabeledValue>;
  seo_og_image?: Maybe<Array<Maybe<AssetInterface>>>;
  seo_og_site_name?: Maybe<Scalars["String"]["output"]>;
  seo_og_title?: Maybe<LabeledValue>;
  seo_og_type?: Maybe<Scalars["String"]["output"]>;
  seo_title?: Maybe<LabeledValue>;
  seo_tw_description?: Maybe<LabeledValue>;
  seo_tw_title?: Maybe<LabeledValue>;
  site: Site;
  slug: Scalars["String"]["output"];
  social?: Maybe<Scalars["String"]["output"]>;
  status: Scalars["String"]["output"];
  /** The testimonial link */
  testimonial_link?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  /** Generate a TOC from Bard content */
  toc?: Maybe<TocTypes>;
  uri?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
};

export type Entry_LandingPages_LandingPageBreadcrumbsArgs = {
  get_full_path_of_mount_page?: InputMaybe<Scalars["Boolean"]["input"]>;
  use_navigation_structure?: InputMaybe<Scalars["String"]["input"]>;
};

export type Entry_LandingPages_LandingPageDateArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
};

export type Entry_LandingPages_LandingPageLast_ModifiedArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
};

export type Entry_LandingPages_LandingPageReadtimeArgs = {
  handle?: InputMaybe<Scalars["String"]["input"]>;
};

export type Entry_Pages_Page = EntryInterface & {
  blocks?: Maybe<Array<Maybe<Sets_Blocks>>>;
  blueprint?: Maybe<Scalars["String"]["output"]>;
  breadcrumbs?: Maybe<Array<Maybe<Breadcrumbs>>>;
  collection: Collection;
  date?: Maybe<Scalars["String"]["output"]>;
  edit_url: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  last_modified?: Maybe<Scalars["String"]["output"]>;
  locale: Scalars["String"]["output"];
  meta?: Maybe<Scalars["String"]["output"]>;
  page_description?: Maybe<Scalars["String"]["output"]>;
  parent?: Maybe<EntryInterface>;
  permalink?: Maybe<Scalars["String"]["output"]>;
  private: Scalars["Boolean"]["output"];
  published: Scalars["Boolean"]["output"];
  /** The read time of the entry */
  readtime?: Maybe<Scalars["Int"]["output"]>;
  scripts?: Maybe<Array<Maybe<Sets_Scripts>>>;
  /** The SEO meta data */
  seo?: Maybe<SeoTypes>;
  seo_canonical?: Maybe<LabeledValue>;
  seo_canonical_custom_entry?: Maybe<Array<Maybe<EntryInterface>>>;
  seo_canonical_url?: Maybe<Scalars["String"]["output"]>;
  seo_custom_meta_description?: Maybe<Scalars["String"]["output"]>;
  seo_custom_meta_title?: Maybe<Scalars["String"]["output"]>;
  seo_custom_og_desc?: Maybe<Scalars["String"]["output"]>;
  seo_custom_og_title?: Maybe<Scalars["String"]["output"]>;
  seo_custom_tw_desc?: Maybe<Scalars["String"]["output"]>;
  seo_custom_tw_title?: Maybe<Scalars["String"]["output"]>;
  seo_meta_description?: Maybe<LabeledValue>;
  seo_og_description?: Maybe<LabeledValue>;
  seo_og_image?: Maybe<Array<Maybe<AssetInterface>>>;
  seo_og_site_name?: Maybe<Scalars["String"]["output"]>;
  seo_og_title?: Maybe<LabeledValue>;
  seo_og_type?: Maybe<Scalars["String"]["output"]>;
  seo_title?: Maybe<LabeledValue>;
  seo_tw_description?: Maybe<LabeledValue>;
  seo_tw_title?: Maybe<LabeledValue>;
  site: Site;
  slug: Scalars["String"]["output"];
  social?: Maybe<Scalars["String"]["output"]>;
  status: Scalars["String"]["output"];
  tagline?: Maybe<Scalars["String"]["output"]>;
  /** The testimonial link */
  testimonial_link?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  /** Generate a TOC from Bard content */
  toc?: Maybe<TocTypes>;
  uri?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
};

export type Entry_Pages_PageBreadcrumbsArgs = {
  get_full_path_of_mount_page?: InputMaybe<Scalars["Boolean"]["input"]>;
  use_navigation_structure?: InputMaybe<Scalars["String"]["input"]>;
};

export type Entry_Pages_PageDateArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
};

export type Entry_Pages_PageLast_ModifiedArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
};

export type Entry_Pages_PageReadtimeArgs = {
  handle?: InputMaybe<Scalars["String"]["input"]>;
};

export type Entry_Peoples_People = EntryInterface & {
  blueprint?: Maybe<Scalars["String"]["output"]>;
  breadcrumbs?: Maybe<Array<Maybe<Breadcrumbs>>>;
  collection: Collection;
  date?: Maybe<Scalars["String"]["output"]>;
  edit_url: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  image?: Maybe<AssetInterface>;
  last_modified?: Maybe<Scalars["String"]["output"]>;
  link?: Maybe<Scalars["String"]["output"]>;
  links?: Maybe<Array<Maybe<GridItem_Links>>>;
  locale: Scalars["String"]["output"];
  parent?: Maybe<EntryInterface>;
  permalink?: Maybe<Scalars["String"]["output"]>;
  position?: Maybe<Scalars["String"]["output"]>;
  private: Scalars["Boolean"]["output"];
  published: Scalars["Boolean"]["output"];
  /** The read time of the entry */
  readtime?: Maybe<Scalars["Int"]["output"]>;
  /** The SEO meta data */
  seo?: Maybe<SeoTypes>;
  site: Site;
  slug: Scalars["String"]["output"];
  status: Scalars["String"]["output"];
  /** The testimonial link */
  testimonial_link?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  /** Generate a TOC from Bard content */
  toc?: Maybe<TocTypes>;
  uri?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
};

export type Entry_Peoples_PeopleBreadcrumbsArgs = {
  get_full_path_of_mount_page?: InputMaybe<Scalars["Boolean"]["input"]>;
  use_navigation_structure?: InputMaybe<Scalars["String"]["input"]>;
};

export type Entry_Peoples_PeopleDateArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
};

export type Entry_Peoples_PeopleLast_ModifiedArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
};

export type Entry_Peoples_PeopleReadtimeArgs = {
  handle?: InputMaybe<Scalars["String"]["input"]>;
};

export type Entry_Posts_Post = EntryInterface & {
  article?: Maybe<Array<Maybe<Sets_Article>>>;
  author?: Maybe<EntryInterface>;
  blueprint?: Maybe<Scalars["String"]["output"]>;
  breadcrumbs?: Maybe<Array<Maybe<Breadcrumbs>>>;
  collection: Collection;
  date?: Maybe<Scalars["String"]["output"]>;
  edit_url: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  last_modified?: Maybe<Scalars["String"]["output"]>;
  locale: Scalars["String"]["output"];
  main_image: AssetInterface;
  meta?: Maybe<Scalars["String"]["output"]>;
  parent?: Maybe<EntryInterface>;
  permalink?: Maybe<Scalars["String"]["output"]>;
  private: Scalars["Boolean"]["output"];
  published: Scalars["Boolean"]["output"];
  /** The read time of the entry */
  readtime?: Maybe<Scalars["Int"]["output"]>;
  related_posts?: Maybe<Array<Maybe<EntryInterface>>>;
  /** The SEO meta data */
  seo?: Maybe<SeoTypes>;
  seo_canonical?: Maybe<LabeledValue>;
  seo_canonical_custom_entry?: Maybe<Array<Maybe<EntryInterface>>>;
  seo_canonical_url?: Maybe<Scalars["String"]["output"]>;
  seo_custom_meta_description?: Maybe<Scalars["String"]["output"]>;
  seo_custom_meta_title?: Maybe<Scalars["String"]["output"]>;
  seo_custom_og_desc?: Maybe<Scalars["String"]["output"]>;
  seo_custom_og_title?: Maybe<Scalars["String"]["output"]>;
  seo_custom_tw_desc?: Maybe<Scalars["String"]["output"]>;
  seo_custom_tw_title?: Maybe<Scalars["String"]["output"]>;
  seo_meta_description?: Maybe<LabeledValue>;
  seo_og_description?: Maybe<LabeledValue>;
  seo_og_image?: Maybe<Array<Maybe<AssetInterface>>>;
  seo_og_site_name?: Maybe<Scalars["String"]["output"]>;
  seo_og_title?: Maybe<LabeledValue>;
  seo_og_type?: Maybe<Scalars["String"]["output"]>;
  seo_title?: Maybe<LabeledValue>;
  seo_tw_description?: Maybe<LabeledValue>;
  seo_tw_title?: Maybe<LabeledValue>;
  site: Site;
  slug: Scalars["String"]["output"];
  social?: Maybe<Scalars["String"]["output"]>;
  state?: Maybe<LabeledValue>;
  status: Scalars["String"]["output"];
  tags?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  technologies?: Maybe<Array<Maybe<EntryInterface>>>;
  /** The testimonial link */
  testimonial_link?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  /** Generate a TOC from Bard content */
  toc?: Maybe<TocTypes>;
  uri?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
};

export type Entry_Posts_PostBreadcrumbsArgs = {
  get_full_path_of_mount_page?: InputMaybe<Scalars["Boolean"]["input"]>;
  use_navigation_structure?: InputMaybe<Scalars["String"]["input"]>;
};

export type Entry_Posts_PostDateArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
};

export type Entry_Posts_PostLast_ModifiedArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
};

export type Entry_Posts_PostReadtimeArgs = {
  handle?: InputMaybe<Scalars["String"]["input"]>;
};

export type Entry_Reusables_Awards = EntryInterface & {
  awards?: Maybe<Array<Maybe<Sets_Awards>>>;
  blueprint?: Maybe<Scalars["String"]["output"]>;
  breadcrumbs?: Maybe<Array<Maybe<Breadcrumbs>>>;
  collection: Collection;
  content?: Maybe<Scalars["String"]["output"]>;
  cta?: Maybe<EntryInterface>;
  date?: Maybe<Scalars["String"]["output"]>;
  edit_url: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  last_modified?: Maybe<Scalars["String"]["output"]>;
  locale: Scalars["String"]["output"];
  parent?: Maybe<EntryInterface>;
  permalink?: Maybe<Scalars["String"]["output"]>;
  private: Scalars["Boolean"]["output"];
  published: Scalars["Boolean"]["output"];
  /** The read time of the entry */
  readtime?: Maybe<Scalars["Int"]["output"]>;
  /** The SEO meta data */
  seo?: Maybe<SeoTypes>;
  site: Site;
  slug: Scalars["String"]["output"];
  status: Scalars["String"]["output"];
  /** The testimonial link */
  testimonial_link?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  /** Generate a TOC from Bard content */
  toc?: Maybe<TocTypes>;
  uri?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
};

export type Entry_Reusables_AwardsBreadcrumbsArgs = {
  get_full_path_of_mount_page?: InputMaybe<Scalars["Boolean"]["input"]>;
  use_navigation_structure?: InputMaybe<Scalars["String"]["input"]>;
};

export type Entry_Reusables_AwardsDateArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
};

export type Entry_Reusables_AwardsLast_ModifiedArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
};

export type Entry_Reusables_AwardsReadtimeArgs = {
  handle?: InputMaybe<Scalars["String"]["input"]>;
};

export type Entry_Reusables_Process = EntryInterface & {
  blueprint?: Maybe<Scalars["String"]["output"]>;
  breadcrumbs?: Maybe<Array<Maybe<Breadcrumbs>>>;
  collection: Collection;
  content?: Maybe<Scalars["String"]["output"]>;
  date?: Maybe<Scalars["String"]["output"]>;
  edit_url: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  last_modified?: Maybe<Scalars["String"]["output"]>;
  locale: Scalars["String"]["output"];
  parent?: Maybe<EntryInterface>;
  permalink?: Maybe<Scalars["String"]["output"]>;
  private: Scalars["Boolean"]["output"];
  process_items?: Maybe<Array<Maybe<Sets_ProcessItems>>>;
  published: Scalars["Boolean"]["output"];
  /** The read time of the entry */
  readtime?: Maybe<Scalars["Int"]["output"]>;
  /** The SEO meta data */
  seo?: Maybe<SeoTypes>;
  site: Site;
  slug: Scalars["String"]["output"];
  status: Scalars["String"]["output"];
  /** The testimonial link */
  testimonial_link?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  /** Generate a TOC from Bard content */
  toc?: Maybe<TocTypes>;
  uri?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
};

export type Entry_Reusables_ProcessBreadcrumbsArgs = {
  get_full_path_of_mount_page?: InputMaybe<Scalars["Boolean"]["input"]>;
  use_navigation_structure?: InputMaybe<Scalars["String"]["input"]>;
};

export type Entry_Reusables_ProcessDateArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
};

export type Entry_Reusables_ProcessLast_ModifiedArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
};

export type Entry_Reusables_ProcessReadtimeArgs = {
  handle?: InputMaybe<Scalars["String"]["input"]>;
};

export type Entry_Reusables_Promise = EntryInterface & {
  blueprint?: Maybe<Scalars["String"]["output"]>;
  breadcrumbs?: Maybe<Array<Maybe<Breadcrumbs>>>;
  collection: Collection;
  content?: Maybe<Scalars["String"]["output"]>;
  date?: Maybe<Scalars["String"]["output"]>;
  edit_url: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  last_modified?: Maybe<Scalars["String"]["output"]>;
  locale: Scalars["String"]["output"];
  parent?: Maybe<EntryInterface>;
  permalink?: Maybe<Scalars["String"]["output"]>;
  private: Scalars["Boolean"]["output"];
  promises: Array<Maybe<GridItem_Promises>>;
  published: Scalars["Boolean"]["output"];
  /** The read time of the entry */
  readtime?: Maybe<Scalars["Int"]["output"]>;
  /** The SEO meta data */
  seo?: Maybe<SeoTypes>;
  site: Site;
  slug: Scalars["String"]["output"];
  status: Scalars["String"]["output"];
  /** The testimonial link */
  testimonial_link?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  /** Generate a TOC from Bard content */
  toc?: Maybe<TocTypes>;
  uri?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
};

export type Entry_Reusables_PromiseBreadcrumbsArgs = {
  get_full_path_of_mount_page?: InputMaybe<Scalars["Boolean"]["input"]>;
  use_navigation_structure?: InputMaybe<Scalars["String"]["input"]>;
};

export type Entry_Reusables_PromiseDateArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
};

export type Entry_Reusables_PromiseLast_ModifiedArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
};

export type Entry_Reusables_PromiseReadtimeArgs = {
  handle?: InputMaybe<Scalars["String"]["input"]>;
};

export type Entry_Reusables_Technology = EntryInterface & {
  blueprint?: Maybe<Scalars["String"]["output"]>;
  breadcrumbs?: Maybe<Array<Maybe<Breadcrumbs>>>;
  collection: Collection;
  content?: Maybe<Scalars["String"]["output"]>;
  cp_title?: Maybe<Scalars["String"]["output"]>;
  cta?: Maybe<EntryInterface>;
  date?: Maybe<Scalars["String"]["output"]>;
  edit_url: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  last_modified?: Maybe<Scalars["String"]["output"]>;
  locale: Scalars["String"]["output"];
  parent?: Maybe<EntryInterface>;
  partner_logos?: Maybe<Array<Maybe<EntryInterface>>>;
  permalink?: Maybe<Scalars["String"]["output"]>;
  private: Scalars["Boolean"]["output"];
  published: Scalars["Boolean"]["output"];
  /** The read time of the entry */
  readtime?: Maybe<Scalars["Int"]["output"]>;
  /** The SEO meta data */
  seo?: Maybe<SeoTypes>;
  site: Site;
  slug: Scalars["String"]["output"];
  status: Scalars["String"]["output"];
  /** The testimonial link */
  testimonial_link?: Maybe<Scalars["String"]["output"]>;
  theme?: Maybe<LabeledValue>;
  title: Scalars["String"]["output"];
  /** Generate a TOC from Bard content */
  toc?: Maybe<TocTypes>;
  uri?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
};

export type Entry_Reusables_TechnologyBreadcrumbsArgs = {
  get_full_path_of_mount_page?: InputMaybe<Scalars["Boolean"]["input"]>;
  use_navigation_structure?: InputMaybe<Scalars["String"]["input"]>;
};

export type Entry_Reusables_TechnologyDateArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
};

export type Entry_Reusables_TechnologyLast_ModifiedArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
};

export type Entry_Reusables_TechnologyReadtimeArgs = {
  handle?: InputMaybe<Scalars["String"]["input"]>;
};

export type Entry_Reusables_ThreeColumnIconCard = EntryInterface & {
  align?: Maybe<LabeledValue>;
  blueprint?: Maybe<Scalars["String"]["output"]>;
  breadcrumbs?: Maybe<Array<Maybe<Breadcrumbs>>>;
  card_items?: Maybe<Array<Maybe<Sets_CardItems>>>;
  collection: Collection;
  content?: Maybe<Scalars["String"]["output"]>;
  date?: Maybe<Scalars["String"]["output"]>;
  edit_url: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  last_modified?: Maybe<Scalars["String"]["output"]>;
  locale: Scalars["String"]["output"];
  parent?: Maybe<EntryInterface>;
  permalink?: Maybe<Scalars["String"]["output"]>;
  private: Scalars["Boolean"]["output"];
  published: Scalars["Boolean"]["output"];
  /** The read time of the entry */
  readtime?: Maybe<Scalars["Int"]["output"]>;
  /** The SEO meta data */
  seo?: Maybe<SeoTypes>;
  site: Site;
  slug: Scalars["String"]["output"];
  status: Scalars["String"]["output"];
  testimonial?: Maybe<EntryInterface>;
  /** The testimonial link */
  testimonial_link?: Maybe<Scalars["String"]["output"]>;
  theme?: Maybe<LabeledValue>;
  title: Scalars["String"]["output"];
  /** Generate a TOC from Bard content */
  toc?: Maybe<TocTypes>;
  uri?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
};

export type Entry_Reusables_ThreeColumnIconCardBreadcrumbsArgs = {
  get_full_path_of_mount_page?: InputMaybe<Scalars["Boolean"]["input"]>;
  use_navigation_structure?: InputMaybe<Scalars["String"]["input"]>;
};

export type Entry_Reusables_ThreeColumnIconCardDateArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
};

export type Entry_Reusables_ThreeColumnIconCardLast_ModifiedArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
};

export type Entry_Reusables_ThreeColumnIconCardReadtimeArgs = {
  handle?: InputMaybe<Scalars["String"]["input"]>;
};

export type Entry_Testimonials_Testimonial = EntryInterface & {
  blueprint?: Maybe<Scalars["String"]["output"]>;
  breadcrumbs?: Maybe<Array<Maybe<Breadcrumbs>>>;
  case_study?: Maybe<Scalars["String"]["output"]>;
  collection: Collection;
  date?: Maybe<Scalars["String"]["output"]>;
  edit_url: Scalars["String"]["output"];
  full_text?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  image: AssetInterface;
  large_text?: Maybe<Scalars["String"]["output"]>;
  last_modified?: Maybe<Scalars["String"]["output"]>;
  link?: Maybe<Scalars["String"]["output"]>;
  locale: Scalars["String"]["output"];
  medium_text?: Maybe<Scalars["String"]["output"]>;
  mini_text?: Maybe<Scalars["String"]["output"]>;
  parent?: Maybe<EntryInterface>;
  permalink?: Maybe<Scalars["String"]["output"]>;
  position: Scalars["String"]["output"];
  private: Scalars["Boolean"]["output"];
  published: Scalars["Boolean"]["output"];
  /** The read time of the entry */
  readtime?: Maybe<Scalars["Int"]["output"]>;
  /** The SEO meta data */
  seo?: Maybe<SeoTypes>;
  site: Site;
  slug: Scalars["String"]["output"];
  status: Scalars["String"]["output"];
  /** The testimonial link */
  testimonial_link?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  /** Generate a TOC from Bard content */
  toc?: Maybe<TocTypes>;
  uri?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
};

export type Entry_Testimonials_TestimonialBreadcrumbsArgs = {
  get_full_path_of_mount_page?: InputMaybe<Scalars["Boolean"]["input"]>;
  use_navigation_structure?: InputMaybe<Scalars["String"]["input"]>;
};

export type Entry_Testimonials_TestimonialDateArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
};

export type Entry_Testimonials_TestimonialLast_ModifiedArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
};

export type Entry_Testimonials_TestimonialReadtimeArgs = {
  handle?: InputMaybe<Scalars["String"]["input"]>;
};

export type Field = {
  config?: Maybe<Scalars["Array"]["output"]>;
  display: Scalars["String"]["output"];
  handle: Scalars["String"]["output"];
  instructions?: Maybe<Scalars["String"]["output"]>;
  type: Scalars["String"]["output"];
  width?: Maybe<Scalars["Int"]["output"]>;
};

export type Form = {
  fields?: Maybe<Array<Maybe<Field>>>;
  handle: Scalars["String"]["output"];
  honeypot?: Maybe<Scalars["String"]["output"]>;
  rules?: Maybe<Scalars["Array"]["output"]>;
  title: Scalars["String"]["output"];
};

export type GlobalSetInterface = {
  handle: Scalars["String"]["output"];
  site: Site;
  title: Scalars["String"]["output"];
};

export type GlobalSet_BlogPosts = GlobalSetInterface & {
  blog_cta?: Maybe<EntryInterface>;
  handle: Scalars["String"]["output"];
  highlighted_post?: Maybe<EntryInterface>;
  site: Site;
  title: Scalars["String"]["output"];
};

export type GlobalSet_Footer = GlobalSetInterface & {
  footer_contact?: Maybe<Group_FooterContact>;
  footer_cta?: Maybe<Group_FooterCta>;
  footer_pages?: Maybe<Array<Maybe<EntryInterface>>>;
  handle: Scalars["String"]["output"];
  site: Site;
  social_media?: Maybe<Array<Maybe<GridItem_SocialMedia>>>;
  title: Scalars["String"]["output"];
};

export type GlobalSet_Prompts = GlobalSetInterface & {
  email_classifier?: Maybe<Scalars["String"]["output"]>;
  handle: Scalars["String"]["output"];
  site: Site;
  title: Scalars["String"]["output"];
};

export type GlobalSet_PromptsEmail_ClassifierArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
};

export type GlobalSet_Seo = GlobalSetInterface & {
  append_on_title?: Maybe<Scalars["String"]["output"]>;
  custom_sitemap_pages?: Maybe<Array<Maybe<GridItem_CustomSitemapPages>>>;
  description?: Maybe<Scalars["String"]["output"]>;
  display_og_tags?: Maybe<Scalars["Boolean"]["output"]>;
  display_twitter_tags?: Maybe<Scalars["Boolean"]["output"]>;
  handle: Scalars["String"]["output"];
  meta_description?: Maybe<Scalars["String"]["output"]>;
  og_description?: Maybe<Scalars["String"]["output"]>;
  og_image?: Maybe<AssetInterface>;
  og_site_name?: Maybe<Scalars["String"]["output"]>;
  og_site_title?: Maybe<Scalars["String"]["output"]>;
  open_graph?: Maybe<Scalars["String"]["output"]>;
  prepend_on_title?: Maybe<Scalars["String"]["output"]>;
  site: Site;
  sitemap_change_frequency?: Maybe<LabeledValue>;
  sitemap_collections?: Maybe<Array<Maybe<Collection>>>;
  sitemap_priority?: Maybe<Scalars["String"]["output"]>;
  sitename?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  tw_description?: Maybe<Scalars["String"]["output"]>;
  tw_title?: Maybe<Scalars["String"]["output"]>;
  twitter?: Maybe<Scalars["String"]["output"]>;
  twitter_handle?: Maybe<Scalars["String"]["output"]>;
};

export type GridItem_Blocks_CtaLinks = {
  id?: Maybe<Scalars["String"]["output"]>;
  link: Scalars["String"]["output"];
  link_label: Scalars["String"]["output"];
};

export type GridItem_Blocks_Services_FeatureList = {
  icon: Scalars["String"]["output"];
  id?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
};

export type GridItem_CaseBlocks_Benefits = {
  id?: Maybe<Scalars["String"]["output"]>;
  percentage?: Maybe<Scalars["Int"]["output"]>;
  title: Scalars["String"]["output"];
};

export type GridItem_CaseBlocks_Colors = {
  hex_code: Scalars["String"]["output"];
  id?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type GridItem_CaseBlocks_Stats = {
  id?: Maybe<Scalars["String"]["output"]>;
  number: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
};

export type GridItem_CustomSitemapPages = {
  id?: Maybe<Scalars["String"]["output"]>;
  page_url: Scalars["String"]["output"];
  updated_at?: Maybe<Scalars["String"]["output"]>;
};

export type GridItem_CustomSitemapPagesUpdated_AtArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
};

export type GridItem_Links = {
  icon: Scalars["String"]["output"];
  id?: Maybe<Scalars["String"]["output"]>;
  name: LabeledValue;
  url: Scalars["String"]["output"];
};

export type GridItem_Promises = {
  id?: Maybe<Scalars["String"]["output"]>;
  testimonial?: Maybe<EntryInterface>;
  title: Scalars["String"]["output"];
};

export type GridItem_SocialMedia = {
  id?: Maybe<Scalars["String"]["output"]>;
  label: Scalars["String"]["output"];
  link?: Maybe<Scalars["String"]["output"]>;
};

export type Group_Blocks_CalendarWidget = {
  calLink: Scalars["String"]["output"];
  layout?: Maybe<LabeledValue>;
  namespace: Scalars["String"]["output"];
};

export type Group_FooterContact = {
  address?: Maybe<Scalars["String"]["output"]>;
  email: Scalars["String"]["output"];
  phone: Scalars["String"]["output"];
};

export type Group_FooterCta = {
  description?: Maybe<Scalars["String"]["output"]>;
  headshots: AssetInterface;
  label?: Maybe<Scalars["String"]["output"]>;
  link?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
};

export type LabeledValue = {
  label?: Maybe<Scalars["String"]["output"]>;
  value?: Maybe<Scalars["String"]["output"]>;
};

export type NavBasicPage_FooterNav = NavPage_FooterNav &
  PageInterface & {
    entry_id?: Maybe<Scalars["ID"]["output"]>;
    id: Scalars["ID"]["output"];
    permalink?: Maybe<Scalars["String"]["output"]>;
    title?: Maybe<Scalars["String"]["output"]>;
    url?: Maybe<Scalars["String"]["output"]>;
  };

export type NavEntryPage_FooterNav_LandingPages_LandingPage = EntryInterface &
  NavPage_FooterNav &
  PageInterface & {
    blocks?: Maybe<Array<Maybe<Sets_Blocks>>>;
    blueprint?: Maybe<Scalars["String"]["output"]>;
    breadcrumbs?: Maybe<Array<Maybe<Breadcrumbs>>>;
    collection: Collection;
    date?: Maybe<Scalars["String"]["output"]>;
    edit_url: Scalars["String"]["output"];
    entry_id?: Maybe<Scalars["ID"]["output"]>;
    id: Scalars["ID"]["output"];
    last_modified?: Maybe<Scalars["String"]["output"]>;
    locale: Scalars["String"]["output"];
    meta?: Maybe<Scalars["String"]["output"]>;
    parent?: Maybe<EntryInterface>;
    permalink?: Maybe<Scalars["String"]["output"]>;
    private: Scalars["Boolean"]["output"];
    published: Scalars["Boolean"]["output"];
    /** The read time of the entry */
    readtime?: Maybe<Scalars["Int"]["output"]>;
    scripts?: Maybe<Array<Maybe<Sets_Scripts>>>;
    /** The SEO meta data */
    seo?: Maybe<SeoTypes>;
    seo_canonical?: Maybe<LabeledValue>;
    seo_canonical_custom_entry?: Maybe<Array<Maybe<EntryInterface>>>;
    seo_canonical_url?: Maybe<Scalars["String"]["output"]>;
    seo_custom_meta_description?: Maybe<Scalars["String"]["output"]>;
    seo_custom_meta_title?: Maybe<Scalars["String"]["output"]>;
    seo_custom_og_desc?: Maybe<Scalars["String"]["output"]>;
    seo_custom_og_title?: Maybe<Scalars["String"]["output"]>;
    seo_custom_tw_desc?: Maybe<Scalars["String"]["output"]>;
    seo_custom_tw_title?: Maybe<Scalars["String"]["output"]>;
    seo_meta_description?: Maybe<LabeledValue>;
    seo_og_description?: Maybe<LabeledValue>;
    seo_og_image?: Maybe<Array<Maybe<AssetInterface>>>;
    seo_og_site_name?: Maybe<Scalars["String"]["output"]>;
    seo_og_title?: Maybe<LabeledValue>;
    seo_og_type?: Maybe<Scalars["String"]["output"]>;
    seo_title?: Maybe<LabeledValue>;
    seo_tw_description?: Maybe<LabeledValue>;
    seo_tw_title?: Maybe<LabeledValue>;
    site: Site;
    slug: Scalars["String"]["output"];
    social?: Maybe<Scalars["String"]["output"]>;
    status: Scalars["String"]["output"];
    /** The testimonial link */
    testimonial_link?: Maybe<Scalars["String"]["output"]>;
    title: Scalars["String"]["output"];
    /** Generate a TOC from Bard content */
    toc?: Maybe<TocTypes>;
    uri?: Maybe<Scalars["String"]["output"]>;
    url?: Maybe<Scalars["String"]["output"]>;
  };

export type NavEntryPage_FooterNav_LandingPages_LandingPageBreadcrumbsArgs = {
  get_full_path_of_mount_page?: InputMaybe<Scalars["Boolean"]["input"]>;
  use_navigation_structure?: InputMaybe<Scalars["String"]["input"]>;
};

export type NavEntryPage_FooterNav_LandingPages_LandingPageDateArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
};

export type NavEntryPage_FooterNav_LandingPages_LandingPageLast_ModifiedArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
};

export type NavEntryPage_FooterNav_LandingPages_LandingPageReadtimeArgs = {
  handle?: InputMaybe<Scalars["String"]["input"]>;
};

export type NavEntryPage_FooterNav_Pages_Page = EntryInterface &
  NavPage_FooterNav &
  PageInterface & {
    blocks?: Maybe<Array<Maybe<Sets_Blocks>>>;
    blueprint?: Maybe<Scalars["String"]["output"]>;
    breadcrumbs?: Maybe<Array<Maybe<Breadcrumbs>>>;
    collection: Collection;
    date?: Maybe<Scalars["String"]["output"]>;
    edit_url: Scalars["String"]["output"];
    entry_id?: Maybe<Scalars["ID"]["output"]>;
    id: Scalars["ID"]["output"];
    last_modified?: Maybe<Scalars["String"]["output"]>;
    locale: Scalars["String"]["output"];
    meta?: Maybe<Scalars["String"]["output"]>;
    page_description?: Maybe<Scalars["String"]["output"]>;
    parent?: Maybe<EntryInterface>;
    permalink?: Maybe<Scalars["String"]["output"]>;
    private: Scalars["Boolean"]["output"];
    published: Scalars["Boolean"]["output"];
    /** The read time of the entry */
    readtime?: Maybe<Scalars["Int"]["output"]>;
    scripts?: Maybe<Array<Maybe<Sets_Scripts>>>;
    /** The SEO meta data */
    seo?: Maybe<SeoTypes>;
    seo_canonical?: Maybe<LabeledValue>;
    seo_canonical_custom_entry?: Maybe<Array<Maybe<EntryInterface>>>;
    seo_canonical_url?: Maybe<Scalars["String"]["output"]>;
    seo_custom_meta_description?: Maybe<Scalars["String"]["output"]>;
    seo_custom_meta_title?: Maybe<Scalars["String"]["output"]>;
    seo_custom_og_desc?: Maybe<Scalars["String"]["output"]>;
    seo_custom_og_title?: Maybe<Scalars["String"]["output"]>;
    seo_custom_tw_desc?: Maybe<Scalars["String"]["output"]>;
    seo_custom_tw_title?: Maybe<Scalars["String"]["output"]>;
    seo_meta_description?: Maybe<LabeledValue>;
    seo_og_description?: Maybe<LabeledValue>;
    seo_og_image?: Maybe<Array<Maybe<AssetInterface>>>;
    seo_og_site_name?: Maybe<Scalars["String"]["output"]>;
    seo_og_title?: Maybe<LabeledValue>;
    seo_og_type?: Maybe<Scalars["String"]["output"]>;
    seo_title?: Maybe<LabeledValue>;
    seo_tw_description?: Maybe<LabeledValue>;
    seo_tw_title?: Maybe<LabeledValue>;
    site: Site;
    slug: Scalars["String"]["output"];
    social?: Maybe<Scalars["String"]["output"]>;
    status: Scalars["String"]["output"];
    tagline?: Maybe<Scalars["String"]["output"]>;
    /** The testimonial link */
    testimonial_link?: Maybe<Scalars["String"]["output"]>;
    title: Scalars["String"]["output"];
    /** Generate a TOC from Bard content */
    toc?: Maybe<TocTypes>;
    uri?: Maybe<Scalars["String"]["output"]>;
    url?: Maybe<Scalars["String"]["output"]>;
  };

export type NavEntryPage_FooterNav_Pages_PageBreadcrumbsArgs = {
  get_full_path_of_mount_page?: InputMaybe<Scalars["Boolean"]["input"]>;
  use_navigation_structure?: InputMaybe<Scalars["String"]["input"]>;
};

export type NavEntryPage_FooterNav_Pages_PageDateArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
};

export type NavEntryPage_FooterNav_Pages_PageLast_ModifiedArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
};

export type NavEntryPage_FooterNav_Pages_PageReadtimeArgs = {
  handle?: InputMaybe<Scalars["String"]["input"]>;
};

export type NavPage_FooterNav = {};

export type NavTreeBranch = {
  children?: Maybe<Array<Maybe<NavTreeBranch>>>;
  depth: Scalars["Int"]["output"];
  page?: Maybe<PageInterface>;
};

export type Navigation = {
  expects_root: Scalars["Boolean"]["output"];
  handle: Scalars["String"]["output"];
  max_depth?: Maybe<Scalars["Int"]["output"]>;
  title: Scalars["String"]["output"];
  tree?: Maybe<Array<Maybe<NavTreeBranch>>>;
};

export type NavigationTreeArgs = {
  site?: InputMaybe<Scalars["String"]["input"]>;
};

export type PageInterface = {
  entry_id?: Maybe<Scalars["ID"]["output"]>;
  id: Scalars["ID"]["output"];
  permalink?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
};

export type Query = {
  asset?: Maybe<AssetInterface>;
  assetContainer?: Maybe<AssetContainer>;
  assetContainers?: Maybe<Array<Maybe<AssetContainer>>>;
  assets?: Maybe<AssetInterfacePagination>;
  collection?: Maybe<Collection>;
  collections?: Maybe<Array<Maybe<Collection>>>;
  entries?: Maybe<EntryInterfacePagination>;
  entry?: Maybe<EntryInterface>;
  globalSet?: Maybe<GlobalSetInterface>;
  globalSets?: Maybe<Array<Maybe<GlobalSetInterface>>>;
  nav?: Maybe<Navigation>;
  navs?: Maybe<Array<Maybe<Navigation>>>;
  ping?: Maybe<Scalars["String"]["output"]>;
};

export type QueryAssetArgs = {
  container?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  path?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryAssetContainerArgs = {
  handle: Scalars["String"]["input"];
};

export type QueryAssetsArgs = {
  container: Scalars["String"]["input"];
  filter?: InputMaybe<Scalars["JsonArgument"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryCollectionArgs = {
  handle?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryEntriesArgs = {
  collection?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  filter?: InputMaybe<Scalars["JsonArgument"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  site?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryEntryArgs = {
  collection?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Scalars["JsonArgument"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Scalars["String"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  uri?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryGlobalSetArgs = {
  handle?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryNavArgs = {
  handle?: InputMaybe<Scalars["String"]["input"]>;
};

export type Role = {
  handle?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
};

/** The SEO computed meta data */
export type SeoTypes = {
  /** The SEO description */
  description?: Maybe<Scalars["String"]["output"]>;
  /** The SEO OG Description */
  og_description?: Maybe<Scalars["String"]["output"]>;
  /** The SEO OG Sitename */
  og_siteName?: Maybe<Scalars["String"]["output"]>;
  /** The SEO OG Title */
  og_title?: Maybe<Scalars["String"]["output"]>;
  /** The SEO OG Type */
  og_type?: Maybe<Scalars["String"]["output"]>;
  /** The SEO title */
  title?: Maybe<Scalars["String"]["output"]>;
};

export type Set_Article_Code = {
  code_field: Scalars["String"]["output"];
  id?: Maybe<Scalars["String"]["output"]>;
  language: Scalars["String"]["output"];
  type: Scalars["String"]["output"];
};

export type Set_Article_Image = {
  id?: Maybe<Scalars["String"]["output"]>;
  image: AssetInterface;
  type: Scalars["String"]["output"];
};

export type Set_Awards_Award = {
  id?: Maybe<Scalars["String"]["output"]>;
  logo: AssetInterface;
  organization?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  type: Scalars["String"]["output"];
  year?: Maybe<Scalars["String"]["output"]>;
};

export type Set_Awards_Partner = {
  id?: Maybe<Scalars["String"]["output"]>;
  partner?: Maybe<EntryInterface>;
  title?: Maybe<Scalars["String"]["output"]>;
  type: Scalars["String"]["output"];
};

export type Set_Blocks_Article = {
  content?: Maybe<Scalars["String"]["output"]>;
  full_width?: Maybe<Scalars["Boolean"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  position?: Maybe<LabeledValue>;
  theme?: Maybe<LabeledValue>;
  type: Scalars["String"]["output"];
};

export type Set_Blocks_CalendarWidget = {
  calLink: Scalars["String"]["output"];
  id?: Maybe<Scalars["String"]["output"]>;
  layout?: Maybe<LabeledValue>;
  namespace: Scalars["String"]["output"];
  type: Scalars["String"]["output"];
};

export type Set_Blocks_CardItems_NewIconCard = {
  content?: Maybe<Scalars["String"]["output"]>;
  icon?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  link?: Maybe<Scalars["String"]["output"]>;
  link_label?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  type: Scalars["String"]["output"];
};

export type Set_Blocks_Cards_NewSet = {
  content?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  image?: Maybe<AssetInterface>;
  link?: Maybe<Scalars["String"]["output"]>;
  link_label?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  type: Scalars["String"]["output"];
  variant?: Maybe<LabeledValue>;
};

export type Set_Blocks_CaseStudyList = {
  case_studies?: Maybe<Array<Maybe<EntryInterface>>>;
  content?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  show_all?: Maybe<Scalars["Boolean"]["output"]>;
  testimonial?: Maybe<EntryInterface>;
  title?: Maybe<Scalars["String"]["output"]>;
  type: Scalars["String"]["output"];
};

export type Set_Blocks_ColumnSection = {
  columns: Array<Maybe<Sets_Blocks_Columns>>;
  id?: Maybe<Scalars["String"]["output"]>;
  type: Scalars["String"]["output"];
};

export type Set_Blocks_ColumnsFeatureSection = {
  columns?: Maybe<LabeledValue>;
  content?: Maybe<Scalars["String"]["output"]>;
  cta?: Maybe<EntryInterface>;
  feature_cards?: Maybe<Array<Maybe<Sets_Blocks_FeatureCards>>>;
  id?: Maybe<Scalars["String"]["output"]>;
  testimonial?: Maybe<EntryInterface>;
  theme?: Maybe<LabeledValue>;
  title: Scalars["String"]["output"];
  type: Scalars["String"]["output"];
};

export type Set_Blocks_Columns_NewColumn = {
  content?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  image?: Maybe<AssetInterface>;
  title?: Maybe<Scalars["String"]["output"]>;
  type: Scalars["String"]["output"];
};

export type Set_Blocks_ContactFormSection = {
  content?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  short_description?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  type: Scalars["String"]["output"];
};

export type Set_Blocks_Cta = {
  cta: EntryInterface;
  id?: Maybe<Scalars["String"]["output"]>;
  theme?: Maybe<LabeledValue>;
  type: Scalars["String"]["output"];
};

export type Set_Blocks_Faq = {
  align?: Maybe<LabeledValue>;
  content?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  questions?: Maybe<Array<Maybe<Sets_Blocks_Questions>>>;
  single_cta?: Maybe<EntryInterface>;
  testimonial?: Maybe<EntryInterface>;
  theme?: Maybe<LabeledValue>;
  title?: Maybe<Scalars["String"]["output"]>;
  type: Scalars["String"]["output"];
};

export type Set_Blocks_FeatureCards_NewSet = {
  content?: Maybe<Scalars["String"]["output"]>;
  icon?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  type: Scalars["String"]["output"];
};

export type Set_Blocks_FullImage = {
  has_link?: Maybe<Scalars["Boolean"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  image: AssetInterface;
  link?: Maybe<Scalars["String"]["output"]>;
  section_type?: Maybe<LabeledValue>;
  theme?: Maybe<LabeledValue>;
  type: Scalars["String"]["output"];
};

export type Set_Blocks_GalleryWithText = {
  id?: Maybe<Scalars["String"]["output"]>;
  items?: Maybe<Array<Maybe<Sets_Blocks_Items>>>;
  title: Scalars["String"]["output"];
  type: Scalars["String"]["output"];
};

export type Set_Blocks_HeroCenteredWithImage = {
  content?: Maybe<Scalars["String"]["output"]>;
  hero_image?: Maybe<AssetInterface>;
  id?: Maybe<Scalars["String"]["output"]>;
  partner_logos?: Maybe<Array<Maybe<EntryInterface>>>;
  tagline?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  type: Scalars["String"]["output"];
};

export type Set_Blocks_HeroHorizontalWithImage = {
  content?: Maybe<Scalars["String"]["output"]>;
  hero_image: AssetInterface;
  id?: Maybe<Scalars["String"]["output"]>;
  tagline?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  type: Scalars["String"]["output"];
};

export type Set_Blocks_HeroSection = {
  content?: Maybe<Scalars["String"]["output"]>;
  cta_links?: Maybe<Array<Maybe<GridItem_Blocks_CtaLinks>>>;
  has_logos?: Maybe<Scalars["Boolean"]["output"]>;
  has_tagline?: Maybe<Scalars["Boolean"]["output"]>;
  has_tagline_post?: Maybe<Scalars["Boolean"]["output"]>;
  has_testimonials?: Maybe<Scalars["Boolean"]["output"]>;
  hero_tagline?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  partner_logos?: Maybe<Array<Maybe<EntryInterface>>>;
  tagline_post?: Maybe<EntryInterface>;
  testi_spacer?: Maybe<Scalars["String"]["output"]>;
  testimonials?: Maybe<Array<Maybe<EntryInterface>>>;
  title: Scalars["String"]["output"];
  type: Scalars["String"]["output"];
};

export type Set_Blocks_HeroWithHeadshots = {
  calendar_widget?: Maybe<Group_Blocks_CalendarWidget>;
  content?: Maybe<Scalars["String"]["output"]>;
  headshots?: Maybe<AssetInterface>;
  id?: Maybe<Scalars["String"]["output"]>;
  tagline?: Maybe<Scalars["String"]["output"]>;
  testimonials?: Maybe<Array<Maybe<EntryInterface>>>;
  title: Scalars["String"]["output"];
  type: Scalars["String"]["output"];
};

export type Set_Blocks_ImageGallery = {
  columns?: Maybe<LabeledValue>;
  id?: Maybe<Scalars["String"]["output"]>;
  images?: Maybe<Array<Maybe<AssetInterface>>>;
  type: Scalars["String"]["output"];
};

export type Set_Blocks_Items_Column = {
  content?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  image: AssetInterface;
  title: Scalars["String"]["output"];
  type: Scalars["String"]["output"];
};

export type Set_Blocks_Items_Gallery = {
  id?: Maybe<Scalars["String"]["output"]>;
  images?: Maybe<Array<Maybe<AssetInterface>>>;
  type: Scalars["String"]["output"];
};

export type Set_Blocks_Questions_NewQuestion = {
  content?: Maybe<Scalars["String"]["output"]>;
  icon?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  type: Scalars["String"]["output"];
};

export type Set_Blocks_ReusableSection = {
  id?: Maybe<Scalars["String"]["output"]>;
  reusable?: Maybe<EntryInterface>;
  type: Scalars["String"]["output"];
};

export type Set_Blocks_ServicesList = {
  id?: Maybe<Scalars["String"]["output"]>;
  mode?: Maybe<LabeledValue>;
  services?: Maybe<Array<Maybe<Sets_Blocks_Services>>>;
  type: Scalars["String"]["output"];
};

export type Set_Blocks_Services_NewSet = {
  content?: Maybe<Scalars["String"]["output"]>;
  feature_list?: Maybe<Array<Maybe<GridItem_Blocks_Services_FeatureList>>>;
  id?: Maybe<Scalars["String"]["output"]>;
  image_large?: Maybe<AssetInterface>;
  image_small?: Maybe<AssetInterface>;
  label: Scalars["String"]["output"];
  link: Scalars["String"]["output"];
  short_description?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  type: Scalars["String"]["output"];
};

export type Set_Blocks_SingleTestimonial = {
  full_version?: Maybe<Scalars["Boolean"]["output"]>;
  has_id?: Maybe<Scalars["Boolean"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  module_id?: Maybe<Scalars["String"]["output"]>;
  testimonial: EntryInterface;
  theme?: Maybe<LabeledValue>;
  type: Scalars["String"]["output"];
};

export type Set_Blocks_ThreeColumnIconCards = {
  align?: Maybe<LabeledValue>;
  card_items?: Maybe<Array<Maybe<Sets_Blocks_CardItems>>>;
  content?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  testimonial?: Maybe<EntryInterface>;
  theme?: Maybe<LabeledValue>;
  title: Scalars["String"]["output"];
  type: Scalars["String"]["output"];
};

export type Set_Blocks_TwoColumnImageCards = {
  cards?: Maybe<Array<Maybe<Sets_Blocks_Cards>>>;
  content?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  type: Scalars["String"]["output"];
};

export type Set_Blocks_TwoColumnsWithImage = {
  content?: Maybe<Scalars["String"]["output"]>;
  has_large_title?: Maybe<Scalars["Boolean"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  image: AssetInterface;
  theme?: Maybe<LabeledValue>;
  title: Scalars["String"]["output"];
  type: Scalars["String"]["output"];
};

export type Set_CardItems_NewIconCard = {
  content?: Maybe<Scalars["String"]["output"]>;
  icon?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  link?: Maybe<Scalars["String"]["output"]>;
  link_label?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  type: Scalars["String"]["output"];
};

export type Set_CareerContent_ButtonSection = {
  id?: Maybe<Scalars["String"]["output"]>;
  label: Scalars["String"]["output"];
  link?: Maybe<Scalars["String"]["output"]>;
  type: Scalars["String"]["output"];
  variant?: Maybe<LabeledValue>;
};

export type Set_CaseBlocks_Article = {
  content?: Maybe<Scalars["String"]["output"]>;
  full_width?: Maybe<Scalars["Boolean"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  position?: Maybe<LabeledValue>;
  theme?: Maybe<LabeledValue>;
  type: Scalars["String"]["output"];
};

export type Set_CaseBlocks_BeforeAfter = {
  after: AssetInterface;
  before: AssetInterface;
  id?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  type: Scalars["String"]["output"];
};

export type Set_CaseBlocks_ColorSection = {
  colors?: Maybe<Array<Maybe<GridItem_CaseBlocks_Colors>>>;
  id?: Maybe<Scalars["String"]["output"]>;
  type: Scalars["String"]["output"];
};

export type Set_CaseBlocks_ColumnSection = {
  columns: Array<Maybe<Sets_CaseBlocks_Columns>>;
  id?: Maybe<Scalars["String"]["output"]>;
  type: Scalars["String"]["output"];
};

export type Set_CaseBlocks_ColumnWithHeading = {
  content?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  theme?: Maybe<LabeledValue>;
  title: Scalars["String"]["output"];
  type: Scalars["String"]["output"];
};

export type Set_CaseBlocks_Columns_NewColumn = {
  content?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  image?: Maybe<AssetInterface>;
  title?: Maybe<Scalars["String"]["output"]>;
  type: Scalars["String"]["output"];
};

export type Set_CaseBlocks_ContentWithImage = {
  content?: Maybe<Scalars["String"]["output"]>;
  direction?: Maybe<LabeledValue>;
  full_width?: Maybe<Scalars["Boolean"]["output"]>;
  has_title?: Maybe<Scalars["Boolean"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  image: AssetInterface;
  position?: Maybe<LabeledValue>;
  theme?: Maybe<LabeledValue>;
  title?: Maybe<Scalars["String"]["output"]>;
  type: Scalars["String"]["output"];
  variant?: Maybe<LabeledValue>;
};

export type Set_CaseBlocks_ContentWithStats = {
  benefits?: Maybe<Array<Maybe<GridItem_CaseBlocks_Benefits>>>;
  content?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  type: Scalars["String"]["output"];
};

export type Set_CaseBlocks_Cta = {
  cta: EntryInterface;
  id?: Maybe<Scalars["String"]["output"]>;
  theme?: Maybe<LabeledValue>;
  type: Scalars["String"]["output"];
};

export type Set_CaseBlocks_FullImage = {
  has_link?: Maybe<Scalars["Boolean"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  image: AssetInterface;
  link?: Maybe<Scalars["String"]["output"]>;
  section_type?: Maybe<LabeledValue>;
  theme?: Maybe<LabeledValue>;
  type: Scalars["String"]["output"];
};

export type Set_CaseBlocks_ResultsSection = {
  content?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  stats?: Maybe<Array<Maybe<GridItem_CaseBlocks_Stats>>>;
  title?: Maybe<Scalars["String"]["output"]>;
  type: Scalars["String"]["output"];
};

export type Set_CaseBlocks_SingleTestimonial = {
  full_version?: Maybe<Scalars["Boolean"]["output"]>;
  has_id?: Maybe<Scalars["Boolean"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  module_id?: Maybe<Scalars["String"]["output"]>;
  testimonial: EntryInterface;
  theme?: Maybe<LabeledValue>;
  type: Scalars["String"]["output"];
};

export type Set_CaseBlocks_TechnologySection = {
  content?: Maybe<Scalars["String"]["output"]>;
  cp_title?: Maybe<Scalars["String"]["output"]>;
  cta?: Maybe<EntryInterface>;
  id?: Maybe<Scalars["String"]["output"]>;
  partner_logos?: Maybe<Array<Maybe<EntryInterface>>>;
  theme?: Maybe<LabeledValue>;
  title: Scalars["String"]["output"];
  type: Scalars["String"]["output"];
};

export type Set_ProcessItems_NewProcess = {
  content?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  image: AssetInterface;
  title: Scalars["String"]["output"];
  type: Scalars["String"]["output"];
};

export type Set_Scripts_NewSet = {
  id?: Maybe<Scalars["String"]["output"]>;
  jsonld?: Maybe<Scalars["String"]["output"]>;
  type: Scalars["String"]["output"];
};

export type Set_Scripts_NewSetJsonldArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
};

export type Sets_Article = BardText | Set_Article_Code | Set_Article_Image;

export type Sets_Awards = Set_Awards_Award | Set_Awards_Partner;

export type Sets_Blocks =
  | Set_Blocks_Article
  | Set_Blocks_CalendarWidget
  | Set_Blocks_CaseStudyList
  | Set_Blocks_ColumnSection
  | Set_Blocks_ColumnsFeatureSection
  | Set_Blocks_ContactFormSection
  | Set_Blocks_Cta
  | Set_Blocks_Faq
  | Set_Blocks_FullImage
  | Set_Blocks_GalleryWithText
  | Set_Blocks_HeroCenteredWithImage
  | Set_Blocks_HeroHorizontalWithImage
  | Set_Blocks_HeroSection
  | Set_Blocks_HeroWithHeadshots
  | Set_Blocks_ImageGallery
  | Set_Blocks_ReusableSection
  | Set_Blocks_ServicesList
  | Set_Blocks_SingleTestimonial
  | Set_Blocks_ThreeColumnIconCards
  | Set_Blocks_TwoColumnImageCards
  | Set_Blocks_TwoColumnsWithImage;

export type Sets_Blocks_CardItems = Set_Blocks_CardItems_NewIconCard;

export type Sets_Blocks_CardItems_Content = BardText;

export type Sets_Blocks_Cards = Set_Blocks_Cards_NewSet;

export type Sets_Blocks_Cards_Content = BardText;

export type Sets_Blocks_Columns = Set_Blocks_Columns_NewColumn;

export type Sets_Blocks_Columns_Content = BardText;

export type Sets_Blocks_Content = BardText;

export type Sets_Blocks_FeatureCards = Set_Blocks_FeatureCards_NewSet;

export type Sets_Blocks_FeatureCards_Content = BardText;

export type Sets_Blocks_Items = Set_Blocks_Items_Column | Set_Blocks_Items_Gallery;

export type Sets_Blocks_Items_Content = BardText;

export type Sets_Blocks_Questions = Set_Blocks_Questions_NewQuestion;

export type Sets_Blocks_Questions_Content = BardText;

export type Sets_Blocks_Services = Set_Blocks_Services_NewSet;

export type Sets_Blocks_Services_Content = BardText;

export type Sets_CardItems = Set_CardItems_NewIconCard;

export type Sets_CardItems_Content = BardText;

export type Sets_CareerContent = BardText | Set_CareerContent_ButtonSection;

export type Sets_CaseBlocks =
  | Set_CaseBlocks_Article
  | Set_CaseBlocks_BeforeAfter
  | Set_CaseBlocks_ColorSection
  | Set_CaseBlocks_ColumnSection
  | Set_CaseBlocks_ColumnWithHeading
  | Set_CaseBlocks_ContentWithImage
  | Set_CaseBlocks_ContentWithStats
  | Set_CaseBlocks_Cta
  | Set_CaseBlocks_FullImage
  | Set_CaseBlocks_ResultsSection
  | Set_CaseBlocks_SingleTestimonial
  | Set_CaseBlocks_TechnologySection;

export type Sets_CaseBlocks_Columns = Set_CaseBlocks_Columns_NewColumn;

export type Sets_CaseBlocks_Columns_Content = BardText;

export type Sets_CaseBlocks_Content = BardText;

export type Sets_Content = BardText;

export type Sets_FullText = BardText;

export type Sets_LargeText = BardText;

export type Sets_MediumText = BardText;

export type Sets_MiniText = BardText;

export type Sets_ProcessItems = Set_ProcessItems_NewProcess;

export type Sets_ProcessItems_Content = BardText;

export type Sets_Scripts = Set_Scripts_NewSet;

export type Site = {
  handle: Scalars["String"]["output"];
  locale: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  short_locale: Scalars["String"]["output"];
  url: Scalars["String"]["output"];
};

/** A Table of Contents item */
export type TocItem = {
  /** The anchor ID for the heading */
  anchor_id?: Maybe<Scalars["String"]["output"]>;
  /** Child items (for h3 under h2) */
  children?: Maybe<Array<Maybe<TocItem>>>;
  /** The heading level (h2 or h3) */
  level?: Maybe<Scalars["Int"]["output"]>;
  /** The heading text */
  text?: Maybe<Scalars["String"]["output"]>;
};

/** The Table of Contents computed data */
export type TocTypes = {
  /** Table of Contents */
  items?: Maybe<Array<Maybe<TocItem>>>;
};

export type TableRow = {
  cells?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
};

export type Taxonomy = {
  handle: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
};

export type TermInterface = {
  edit_url: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  permalink?: Maybe<Scalars["String"]["output"]>;
  slug: Scalars["String"]["output"];
  taxonomy: Taxonomy;
  title: Scalars["String"]["output"];
  uri?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
};

export type User = {
  avatar?: Maybe<AssetInterface>;
  edit_url?: Maybe<Scalars["String"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  groups?: Maybe<Array<Maybe<UserGroup>>>;
  id?: Maybe<Scalars["String"]["output"]>;
  initials?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  roles?: Maybe<Array<Maybe<Role>>>;
};

export type UserGroup = {
  handle?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type Breadcrumbs = {
  blueprint?: Maybe<Scalars["String"]["output"]>;
  entry?: Maybe<EntryInterface>;
  id?: Maybe<Scalars["String"]["output"]>;
  permalink?: Maybe<Scalars["String"]["output"]>;
  slug?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  url?: Maybe<Scalars["String"]["output"]>;
};

export type CtaBlockFragment = { id?: string | null | undefined; type: string };

export type FullImageBlockFragment = {
  id?: string | null | undefined;
  type: string;
  has_link?: boolean | null | undefined;
  link?: string | null | undefined;
  section_type?: { value?: string | null | undefined } | null | undefined;
  image: {
    alt?: string | null | undefined;
    width?: number | null | undefined;
    height?: number | null | undefined;
    blurhash?: string | null | undefined;
    permalink?: string | null | undefined;
    focus_css?: string | null | undefined;
  };
};

export type HeroSectionBlockFragment = {
  id?: string | null | undefined;
  type: string;
  title: string;
  has_tagline?: boolean | null | undefined;
  has_tagline_post?: boolean | null | undefined;
  hero_tagline?: string | null | undefined;
};

export type GetPageBySlugQueryVariables = Exact<{
  slug: Scalars["String"]["input"];
}>;

export type GetPageBySlugQuery = {
  entries?:
    | {
        data: Array<
          | {
              id: string;
              title: string;
              slug: string;
              uri?: string | null | undefined;
              status: string;
              date?: string | null | undefined;
            }
          | {
              id: string;
              title: string;
              slug: string;
              uri?: string | null | undefined;
              status: string;
              date?: string | null | undefined;
            }
          | {
              id: string;
              title: string;
              slug: string;
              uri?: string | null | undefined;
              status: string;
              date?: string | null | undefined;
            }
          | {
              id: string;
              title: string;
              slug: string;
              uri?: string | null | undefined;
              status: string;
              date?: string | null | undefined;
            }
          | {
              id: string;
              title: string;
              slug: string;
              uri?: string | null | undefined;
              status: string;
              date?: string | null | undefined;
            }
          | {
              title: string;
              tagline?: string | null | undefined;
              page_description?: string | null | undefined;
              id: string;
              slug: string;
              uri?: string | null | undefined;
              status: string;
              date?: string | null | undefined;
              blocks?:
                | Array<
                    | { id?: string | null | undefined; type: string }
                    | {
                        id?: string | null | undefined;
                        type: string;
                        has_link?: boolean | null | undefined;
                        link?: string | null | undefined;
                        section_type?: { value?: string | null | undefined } | null | undefined;
                        image: {
                          alt?: string | null | undefined;
                          width?: number | null | undefined;
                          height?: number | null | undefined;
                          blurhash?: string | null | undefined;
                          permalink?: string | null | undefined;
                          focus_css?: string | null | undefined;
                        };
                      }
                    | {
                        id?: string | null | undefined;
                        type: string;
                        title: string;
                        has_tagline?: boolean | null | undefined;
                        has_tagline_post?: boolean | null | undefined;
                        hero_tagline?: string | null | undefined;
                      }
                    | {}
                    | null
                    | undefined
                  >
                | null
                | undefined;
            }
          | {
              id: string;
              title: string;
              slug: string;
              uri?: string | null | undefined;
              status: string;
              date?: string | null | undefined;
            }
          | {
              id: string;
              title: string;
              slug: string;
              uri?: string | null | undefined;
              status: string;
              date?: string | null | undefined;
            }
          | {
              id: string;
              title: string;
              slug: string;
              uri?: string | null | undefined;
              status: string;
              date?: string | null | undefined;
            }
          | {
              id: string;
              title: string;
              slug: string;
              uri?: string | null | undefined;
              status: string;
              date?: string | null | undefined;
            }
          | {
              id: string;
              title: string;
              slug: string;
              uri?: string | null | undefined;
              status: string;
              date?: string | null | undefined;
            }
          | {
              id: string;
              title: string;
              slug: string;
              uri?: string | null | undefined;
              status: string;
              date?: string | null | undefined;
            }
          | {
              id: string;
              title: string;
              slug: string;
              uri?: string | null | undefined;
              status: string;
              date?: string | null | undefined;
            }
          | {
              id: string;
              title: string;
              slug: string;
              uri?: string | null | undefined;
              status: string;
              date?: string | null | undefined;
            }
          | {
              id: string;
              title: string;
              slug: string;
              uri?: string | null | undefined;
              status: string;
              date?: string | null | undefined;
            }
          | {
              id: string;
              title: string;
              slug: string;
              uri?: string | null | undefined;
              status: string;
              date?: string | null | undefined;
            }
        >;
      }
    | null
    | undefined;
};

export const CtaBlockFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CtaBlock" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Set_Blocks_Cta" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "type" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CtaBlockFragment, unknown>;
export const FullImageBlockFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FullImageBlock" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Set_Blocks_FullImage" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "has_link" } },
          { kind: "Field", name: { kind: "Name", value: "link" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "section_type" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "value" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "image" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "width" } },
                { kind: "Field", name: { kind: "Name", value: "height" } },
                { kind: "Field", name: { kind: "Name", value: "blurhash" } },
                { kind: "Field", name: { kind: "Name", value: "permalink" } },
                { kind: "Field", name: { kind: "Name", value: "focus_css" } },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "Asset_Assets" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "Field", name: { kind: "Name", value: "alt" } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FullImageBlockFragment, unknown>;
export const HeroSectionBlockFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "HeroSectionBlock" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Set_Blocks_HeroSection" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "has_tagline" } },
          { kind: "Field", name: { kind: "Name", value: "has_tagline_post" } },
          { kind: "Field", name: { kind: "Name", value: "hero_tagline" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<HeroSectionBlockFragment, unknown>;
export const GetPageBySlugDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetPageBySlug" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "slug" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "entries" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "collection" },
                value: { kind: "StringValue", value: "pages", block: false },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "slug" },
                      value: { kind: "Variable", name: { kind: "Name", value: "slug" } },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: { kind: "IntValue", value: "1" },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                      { kind: "Field", name: { kind: "Name", value: "uri" } },
                      { kind: "Field", name: { kind: "Name", value: "status" } },
                      { kind: "Field", name: { kind: "Name", value: "date" } },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "Entry_Pages_Page" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "title" } },
                            { kind: "Field", name: { kind: "Name", value: "tagline" } },
                            { kind: "Field", name: { kind: "Name", value: "page_description" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blocks" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "FragmentSpread",
                                    name: { kind: "Name", value: "CtaBlock" },
                                  },
                                  {
                                    kind: "FragmentSpread",
                                    name: { kind: "Name", value: "HeroSectionBlock" },
                                  },
                                  {
                                    kind: "FragmentSpread",
                                    name: { kind: "Name", value: "FullImageBlock" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CtaBlock" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Set_Blocks_Cta" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "type" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "HeroSectionBlock" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Set_Blocks_HeroSection" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "has_tagline" } },
          { kind: "Field", name: { kind: "Name", value: "has_tagline_post" } },
          { kind: "Field", name: { kind: "Name", value: "hero_tagline" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FullImageBlock" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Set_Blocks_FullImage" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "has_link" } },
          { kind: "Field", name: { kind: "Name", value: "link" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "section_type" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "value" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "image" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "width" } },
                { kind: "Field", name: { kind: "Name", value: "height" } },
                { kind: "Field", name: { kind: "Name", value: "blurhash" } },
                { kind: "Field", name: { kind: "Name", value: "permalink" } },
                { kind: "Field", name: { kind: "Name", value: "focus_css" } },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "Asset_Assets" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "Field", name: { kind: "Name", value: "alt" } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetPageBySlugQuery, GetPageBySlugQueryVariables>;
