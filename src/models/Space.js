export default class Space {
  // eslint-disable-next-line camelcase
  constructor ({ date, explanation, title, url, media_type }) {
    this.date = date
    this.explanation = explanation
    this.title = title
    this.url = url
    // eslint-disable-next-line camelcase
    this.media_type = media_type
  }
}
