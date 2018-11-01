
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    title: DataTypes.STRING,
    artist: DataTypes.STRING,
    genre: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    youtubeId: DataTypes.STRING,
    lyrics: DataTypes.TEXT,
    tabs: DataTypes.TEXT
  })
  Song.associate = function (models) {
  }
  return Song
}
