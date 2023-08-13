export interface IActor {
  _id: string;
  photo: string;
  name: string;
  countMovies: number;
  slug: string;
}

export interface IGenre {
  _id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
}

export interface IParameters {
  year: number;
  duration: number;
  countries: string[];
}

export interface IMovie {
  _id: string;
  imageNormal: string;
  imageMedium: string;
  imageSpinner: string;
  title: string;
  parameters: IParameters;
  genres: IGenre[];
  actors: IActor[];
  countOpened: number;
  videoUrl: string;
  rating: number;
  slug: string;
  createdAt: string;
  updatedAt: string;
}

export interface IUser {
  _id: string;
  email: string;
  password: string;
  createdAt: string;
  isAdmin: string;
}
