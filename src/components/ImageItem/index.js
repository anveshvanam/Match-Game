import './index.css'

const ImageItem = props => {
  const {imageDetails, updateImage} = props
  const {id, imageUrl, thumbnailUrl, category} = imageDetails

  const onClickImage = () => {
    updateImage(id)
  }

  return (
    <li className="image-item">
      <button type="button" className="button" onClick={onClickImage}>
        <img src={thumbnailUrl} className="thumbnail" alt="thumbnail" />
      </button>
    </li>
  )
}

export default ImageItem
