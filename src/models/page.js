import mongoose from "mongoose";

const seriesSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  background: String,
  seasons: [{
    season: String,
    links: [{ name: String, link: String }]
  }]
});

const peliculasSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  background: String,
  link: String,
  trailer: String
});

const Series = mongoose.models.Series || mongoose.model('Series', seriesSchema);
const Peliculas = mongoose.models.Peliculas || mongoose.model('Peliculas', peliculasSchema);

export { Series, Peliculas };
