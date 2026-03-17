export type Project = {
  id: number
  slug: string;
  title: string;
  description: string;
  stack: { id: string; name: string; icon: string }[];
  image: string;
};
