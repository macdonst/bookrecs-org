import data from '@begin/data'
import { validator } from '@begin/validator'
import { Comment } from './schemas/comment.mjs'

const deleteComment = async function (key) {
  await data.destroy({ table: 'comments', key })
  return { key }
}

const upsertComment = async function (comment) {
  return data.set({ table: 'comments', ...comment })
}

const getComment = async function (key) {
  return data.get({ table: 'comments', key })
}

const getComments = async function () {
  const databasePageResults = await data.page({
    table: 'comments',
    limit: 25
  })

  let comments = []
  for await (let databasePageResult of databasePageResults) {
    for (let comment of databasePageResult) {
      delete comment.table
      comments.push(comment)
    }
  }

  return comments
}

const validate = {
  shared (req) {
    return validator(req, Comment)
  },
  async create (req) {
    let { valid, problems, data } = validate.shared(req)
    if (req.body.key) {
      problems['key'] = { errors: '<p>should not be included on a create</p>' }
    }
    // Insert your custom validation here
    return !valid ? { problems, comment: data } : { comment: data }
  },
  async update (req) {
    let { valid, problems, data } = validate.shared(req)
    // Insert your custom validation here
    return !valid ? { problems, comment: data } : { comment: data }
  }
}

export {
  deleteComment,
  getComment,
  getComments,
  upsertComment,
  validate
}
