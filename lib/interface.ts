export interface postList {
  title: string;
  currentSlug: string;
  category: string;
  content: any;
  shortDescription: string;
  titleImage: any;
}

export interface singlePost {
  title: string;
  currentSlug: string;
  category: {
    title: string;
  };
  tags: string;
  titleImage: any;
  content: any;
}

export interface categoryList {
  title: string;
  slug: string;
}

export interface clubList {
  name: string;
  slug: string;
}
