// View documentation at: https://enhance.dev/docs/learn/starter-project/api
import { deleteComment } from '../../../models/comments.mjs'


/**
 * @type {import('@enhance/types').EnhanceApiFn}
 */
export async function post (req) {
  const id = req.pathParameters?.id

  const session = req.session
  // eslint-disable-next-line no-unused-vars
  let { problems: removedProblems, comment: removed, ...newSession } = session
  try {
    let comment = await deleteComment(id)
    return {
      session: newSession,
      json: { comment },
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
