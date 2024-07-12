import mongoose from "mongoose"


const seriesSchema = new mongoose.Schema([{
  name: String,
  description: String,
  image: String,
  background: String,
  seasons:[{
    season: String,
    links: [{name: String, link: String}]
  }]
}])

export default mongoose.models.Series || mongoose.model('Series', seriesSchema)

