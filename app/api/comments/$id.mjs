// View documentation at: https://enhance.dev/docs/learn/starter-project/api
/**
  * @typedef {import('@enhance/types').EnhanceApiFn} EnhanceApiFn
  */
import { getComment, upsertComment, validate } from '../../models/comments.mjs'


/**
 * @type {EnhanceApiFn}
 */
export async function get (req) {
  if (req.session.problems) {
    let { problems, comment, ...session } = req.session
    return {
      session,
      json: { problems, comment }
    }
  }

  const id = req.pathParameters?.id
  const result = await getComment(id)
  return {
    json: { comment: result }
  }
}

/**
 * @type {EnhanceApiFn}
 */
export async function post (req) {
  const id = req.pathParameters?.id

  const session = req.session
  // Validate
  let { problems, comment } = await validate.update(req)
  if (problems) {
    return {
      session: {...session, problems, comment },
      json: { problems, comment },
      location: `/comments/${comment.key}`
    }
  }

  // eslint-disable-next-line no-unused-vars
  let { problems: removedProblems, comment: removed, ...newSession } = session
  try {
    const result = await upsertComment({ key: id, ...comment })
    return {
      session: newSession,
      json: { comment: result },
      location: '/comments'
    }
  }
  catch (err) {
    return {
      session: { ...newSession, error: err.message },
      json: { error: err.message },
      location: '/comments'
    }
  }
}
