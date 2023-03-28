export const Comment = {
  "id": "Comment",
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "email": {
      "type": "string",
      "format": "email"
    },
    "comment": {
      "type": "string"
    },
    "slug": {
      "type": "string"
    },
    "key": {
      "type": "string"
    }
  }
}