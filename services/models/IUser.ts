type TRole = 'moderator' | 'user'

type TImage = {
  file: string
  alt: string
  title: string
}

enum links {
  github = 'github',
  linkedin = 'linkedin',
  twitter = 'twitter',
  facebook = 'facebook',
  instagram = 'instagram',
  youtube = 'youtube',
  twitch = 'twitch',
  website = 'website',
}

export default interface IUser {
  id: number
  username: string
  email: string
  password: string
  role: TRole
  createdAt: string
  updatedAt: string
  backgroundImage: string
  avatar: TImage
  bio: string
  links: {
    [key in links]: string
  }
  profileType: 'public' | 'private'
  token: string
  articles: {
    // aici o sa mearga articolele la user
  }
  discussions: {
    // aici o sa mearga linkuri la discusions in care participa userul
  }
  followers: {
    // aici o sa mearga linkuri la userii care il urmaresc
  }
  following: {
    // aici o sa mearga linkuri la userii pe care ii urmaresc
  }
}
