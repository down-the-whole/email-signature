type LinkType = 'Facebook' | 'Twitter' | 'Instagram' | 'Blog'

export class Link {
    imageUrl: string = ''
    url: string = ''
    onChange: Function = () => {}

    constructor({
        url,
        type,
    }: {
        url: string,
        type: LinkType
    }) {
        switch(type) {
        case 'Facebook':
            this.imageUrl = 'https://cdbattaglia.com/assets-cdbattaglia/media/images/social/facebook.png'
            break
        case 'Blog':
            this.imageUrl = 'https://cdbattaglia.com/assets-cdbattaglia/media/images/social/blog.png'
            break
        case 'Instagram':
            this.imageUrl = 'https://cdbattaglia.com/assets-cdbattaglia/media/images/social/instagram.png'
            break
        case 'Twitter':
            this.imageUrl = 'https://cdbattaglia.com/assets-cdbattaglia/media/images/social/twitter.png'
            break
        default:
            console.log('LinkType does not match')
        }

        this.url = url
    }
}

export class LinkMap {
    Facebook: Link
    Blog: Link
    Instagram: Link
    Twitter: Link
}

export default class User {
    name: string = 'Christian Battaglia'
    title: string = 'hacker && software engineer'
    motto: string = 'believe it; see it.'
    email: string = 'christian.d.battaglia@gmail.com'
    phone: string = '+17705979389'
    website: string = 'https://cdbattaglia.com'

    links: LinkMap = {
        Facebook: new Link({
            url: 'https://www.facebook.com/cdbattags/',
            type: 'Facebook',
        }),
        Blog: new Link({
            url: 'https://cdbattaglia.com/words',
            type: 'Blog',
        }),
        Instagram: new Link({
            url: 'https://www.instagram.com/cdbattags/',
            type: 'Instagram',
        }),
        Twitter: new Link({
            url: 'https://twitter.com/cdbattags',
            type: 'Twitter',
        }),
    }

    constructor(options: Partial<User>) {
        Object.assign(this, options)
    }
}
