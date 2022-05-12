interface Post {
  uid: string;
  data: {
    title: {
      text:string;
    }[];
    subtitle: {
      text:string;
    }[];
    author: {
      text:string;
    }[];
    banner:{
      url:string;
    }
  };
  first_publication_date: string;
}

interface PostsFormatted{
  slug:string;
  first_publication_date:string;
  title: string;
  subtitle:string;
  author:string;
  bannerURL:string;
}

interface PostPagination {
  next_page: string|null;
  results: Post[];
}

export function useGetPosts(posts: PostPagination):PostsFormatted[] {
  const postsFormatted = posts.results.map(post => {
    return {
      slug: post.uid,
      first_publication_date: new Date(post.first_publication_date).toLocaleDateString(
        "pt-BR",
        {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }
      ),
        title: post.data.title[0].text,
        subtitle: post.data.subtitle[0].text,
        author: post.data.author[0].text,
        bannerURL: post.data.banner.url
      }
  });
  return postsFormatted;
}
