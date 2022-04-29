import React from 'react'
import './directory-item.styles.scss';
import { useNavigate } from 'react-router-dom'

const DirectoryItem = ({category}) => {
    const navigate = useNavigate();
    const {imageUrl, title} = category

    const takeToCategory = () => {
        navigate(`/shop/${title}`)
    }

    return (
        <div className="directory-item-container" onClick={takeToCategory} >
            <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}} />
            <div className="body">
                <h2>{title.toUpperCase()}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )
}

export default DirectoryItem;