
export const postFavorite = async (req, res) => {
  res.json({
    message: 'Favorite was successfully',
  })
}

export const deleteFavorite = async (req, res) => {
  res.json({
    message: 'Favorite deleted successfully',
  })
}