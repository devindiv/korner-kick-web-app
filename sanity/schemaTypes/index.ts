import category from '../schemas/category'
import post from '../schemas/post'
import parentChild from '../parentChild'
import {StructureResolver} from 'sanity/desk'
import blockContent from '../schemas/blockContent'
import twitter from '../schemas/twitter'

export const schemaTypes = [post, category, twitter]
export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Content')
    .items([
      parentChild('category', S, context.documentStore),
      S.divider(),
      // ...all other list items
    ])
