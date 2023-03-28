// View documentation at: https://enhance.dev/docs/learn/starter-project/api
/**
  * @typedef {import('@enhance/types').EnhanceApiFn} EnhanceApiFn
  */
import { getComments, upsertComment, validate } from '../models/comments.mjs'


/**
 * @type {EnhanceApiFn}
 */
export async function get (req) {
  const comments = await getComments()
  if (req.session.problems) {
    let { problems, comment, ...session } = req.session
    return {
      session,
      json: { problems, comments, comment }
    }
  }

  return {
    json: { comments }
  }
}

/**
 * @type {EnhanceApiFn}
 */
export async function post (req) {
  const slug = req.body.slug

  const session = req.session
  // Validate
  let { problems, comment } = await validate.create(req)
  if (problems) {
    return {
      session: { ...session, problems, comment },
      json: { problems, comment },
      location: slug
    }
  }

  // eslint-disable-next-line no-unused-vars
  let { problems: removedProblems, comment: removed, ...newSession } = session
  try {
    comment.date = (new Date()).toLocaleDateString()
    const result = await upsertComment(comment)
    return {
      session: newSession,
      json: { comment: result },
      location: slug
    }
  }
  catch (err) {
    return {
      session: { ...newSession, error: err.message },
      json: { error: err.message },
      location: slug
    }
  }
}
