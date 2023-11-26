// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client'

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] }

type AbilitiesDocumentDataSlicesSlice = never

/**
 * Content for Abilities documents
 */
interface AbilitiesDocumentData {
  /**
   * title field in *Abilities*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: abilities.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField

  /**
   * Slice Zone field in *Abilities*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: abilities.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<AbilitiesDocumentDataSlicesSlice> /**
   * Meta Description field in *Abilities*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: abilities.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField

  /**
   * Meta Title field in *Abilities*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: abilities.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField
}

/**
 * Abilities document from Prismic
 *
 * - **API ID**: `abilities`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AbilitiesDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<AbilitiesDocumentData>,
    'abilities',
    Lang
  >

/**
 * Item in *FooterLinks → links*
 */
export interface FooterlinksDocumentDataLinksItem {
  /**
   * label field in *FooterLinks → links*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footerlinks.links[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField

  /**
   * url field in *FooterLinks → links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footerlinks.links[].url
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  url: prismic.LinkField
}

/**
 * Content for FooterLinks documents
 */
interface FooterlinksDocumentData {
  /**
   * links field in *FooterLinks*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footerlinks.links[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  links: prismic.GroupField<Simplify<FooterlinksDocumentDataLinksItem>>
}

/**
 * FooterLinks document from Prismic
 *
 * - **API ID**: `footerlinks`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterlinksDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<FooterlinksDocumentData>,
    'footerlinks',
    Lang
  >

/**
 * Item in *HeaderLink → links*
 */
export interface HeaderlinkDocumentDataLinksItem {
  /**
   * label field in *HeaderLink → links*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: headerlink.links[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField

  /**
   * url field in *HeaderLink → links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: headerlink.links[].url
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  url: prismic.LinkField
}

/**
 * Content for HeaderLink documents
 */
interface HeaderlinkDocumentData {
  /**
   * links field in *HeaderLink*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: headerlink.links[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  links: prismic.GroupField<Simplify<HeaderlinkDocumentDataLinksItem>>
}

/**
 * HeaderLink document from Prismic
 *
 * - **API ID**: `headerlink`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HeaderlinkDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HeaderlinkDocumentData>,
    'headerlink',
    Lang
  >

type HomeDocumentDataSlicesSlice = HomeContentSlice

/**
 * Content for Home documents
 */
interface HomeDocumentData {
  /**
   * Slice Zone field in *Home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice> /**
   * Meta Description field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField

  /**
   * Meta Title field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField
}

/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<HomeDocumentData>, 'home', Lang>

type PortfolioDocumentDataSlicesSlice = GallerySlice | CustomerSlice

/**
 * Content for Portfolio documents
 */
interface PortfolioDocumentData {
  /**
   * title field in *Portfolio*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: portfolio.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField

  /**
   * Slice Zone field in *Portfolio*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: portfolio.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PortfolioDocumentDataSlicesSlice> /**
   * Meta Description field in *Portfolio*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: portfolio.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField

  /**
   * Meta Title field in *Portfolio*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: portfolio.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField
}

/**
 * Portfolio document from Prismic
 *
 * - **API ID**: `portfolio`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PortfolioDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<PortfolioDocumentData>,
    'portfolio',
    Lang
  >

type SkillDocumentDataSlicesSlice = SkillDescriptionSlice

/**
 * Content for Skill documents
 */
interface SkillDocumentData {
  /**
   * title field in *Skill*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: skill.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField

  /**
   * Slice Zone field in *Skill*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: skill.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<SkillDocumentDataSlicesSlice>
}

/**
 * Skill document from Prismic
 *
 * - **API ID**: `skill`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SkillDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<SkillDocumentData>, 'skill', Lang>

export type AllDocumentTypes =
  | AbilitiesDocument
  | FooterlinksDocument
  | HeaderlinkDocument
  | HomeDocument
  | PortfolioDocument
  | SkillDocument

/**
 * Primary content in *Customer → Items*
 */
export interface CustomerSliceDefaultItem {
  /**
   * customer_name field in *Customer → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: customer.items[].customer_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  customer_name: prismic.KeyTextField

  /**
   * customer_logo field in *Customer → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: customer.items[].customer_logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  customer_logo: prismic.ImageField<never>
}

/**
 * Default variation for Customer Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CustomerSliceDefault = prismic.SharedSliceVariation<
  'default',
  Record<string, never>,
  Simplify<CustomerSliceDefaultItem>
>

/**
 * Slice variation for *Customer*
 */
type CustomerSliceVariation = CustomerSliceDefault

/**
 * Customer Shared Slice
 *
 * - **API ID**: `customer`
 * - **Description**: Customer
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CustomerSlice = prismic.SharedSlice<
  'customer',
  CustomerSliceVariation
>

/**
 * Primary content in *Gallery → Items*
 */
export interface GallerySliceDefaultItem {
  /**
   * project_image field in *Gallery → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery.items[].project_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  project_image: prismic.ImageField<never>

  /**
   * project_name field in *Gallery → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery.items[].project_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  project_name: prismic.KeyTextField

  /**
   * technology field in *Gallery → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery.items[].technology
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  technology: prismic.RichTextField

  /**
   * gitrepo field in *Gallery → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery.items[].gitrepo
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  gitrepo: prismic.LinkField

  /**
   * app field in *Gallery → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery.items[].app
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  app: prismic.LinkField
}

/**
 * Default variation for Gallery Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GallerySliceDefault = prismic.SharedSliceVariation<
  'default',
  Record<string, never>,
  Simplify<GallerySliceDefaultItem>
>

/**
 * Slice variation for *Gallery*
 */
type GallerySliceVariation = GallerySliceDefault

/**
 * Gallery Shared Slice
 *
 * - **API ID**: `gallery`
 * - **Description**: Gallery
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GallerySlice = prismic.SharedSlice<'gallery', GallerySliceVariation>

/**
 * Primary content in *HomeContent → Primary*
 */
export interface HomeContentSliceDefaultPrimary {
  /**
   * image field in *HomeContent → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home_content.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>

  /**
   * role field in *HomeContent → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home_content.primary.role
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  role: prismic.KeyTextField

  /**
   * name field in *HomeContent → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home_content.primary.name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField

  /**
   * description field in *HomeContent → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home_content.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField
}

/**
 * Default variation for HomeContent Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HomeContentSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<HomeContentSliceDefaultPrimary>,
  never
>

/**
 * Slice variation for *HomeContent*
 */
type HomeContentSliceVariation = HomeContentSliceDefault

/**
 * HomeContent Shared Slice
 *
 * - **API ID**: `home_content`
 * - **Description**: HomeContent
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HomeContentSlice = prismic.SharedSlice<
  'home_content',
  HomeContentSliceVariation
>

/**
 * Primary content in *SkillDescription → Items*
 */
export interface SkillDescriptionSliceDefaultItem {
  /**
   * skill_name field in *SkillDescription → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: skill_description.items[].skill_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  skill_name: prismic.KeyTextField

  /**
   * skill_icon field in *SkillDescription → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: skill_description.items[].skill_icon
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  skill_icon: prismic.ImageField<never>

  /**
   * skill_description field in *SkillDescription → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: skill_description.items[].skill_description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  skill_description: prismic.RichTextField
}

/**
 * Default variation for SkillDescription Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SkillDescriptionSliceDefault = prismic.SharedSliceVariation<
  'default',
  Record<string, never>,
  Simplify<SkillDescriptionSliceDefaultItem>
>

/**
 * Slice variation for *SkillDescription*
 */
type SkillDescriptionSliceVariation = SkillDescriptionSliceDefault

/**
 * SkillDescription Shared Slice
 *
 * - **API ID**: `skill_description`
 * - **Description**: SkillDescription
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SkillDescriptionSlice = prismic.SharedSlice<
  'skill_description',
  SkillDescriptionSliceVariation
>

declare module '@prismicio/client' {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>
  }

  namespace Content {
    export type {
      AbilitiesDocument,
      AbilitiesDocumentData,
      AbilitiesDocumentDataSlicesSlice,
      FooterlinksDocument,
      FooterlinksDocumentData,
      FooterlinksDocumentDataLinksItem,
      HeaderlinkDocument,
      HeaderlinkDocumentData,
      HeaderlinkDocumentDataLinksItem,
      HomeDocument,
      HomeDocumentData,
      HomeDocumentDataSlicesSlice,
      PortfolioDocument,
      PortfolioDocumentData,
      PortfolioDocumentDataSlicesSlice,
      SkillDocument,
      SkillDocumentData,
      SkillDocumentDataSlicesSlice,
      AllDocumentTypes,
      CustomerSlice,
      CustomerSliceDefaultItem,
      CustomerSliceVariation,
      CustomerSliceDefault,
      GallerySlice,
      GallerySliceDefaultItem,
      GallerySliceVariation,
      GallerySliceDefault,
      HomeContentSlice,
      HomeContentSliceDefaultPrimary,
      HomeContentSliceVariation,
      HomeContentSliceDefault,
      SkillDescriptionSlice,
      SkillDescriptionSliceDefaultItem,
      SkillDescriptionSliceVariation,
      SkillDescriptionSliceDefault,
    }
  }
}
