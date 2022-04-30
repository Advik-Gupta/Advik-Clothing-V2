import React from 'react'
import { BackgroundImg, Body, DirectoryItemContainer } from './directory-item.styles.jsx';
import { useNavigate } from 'react-router-dom'

const DirectoryItem = ({category}) => {
    const navigate = useNavigate();
    const {imageUrl, title, routeName} = category

    const takeToCategory = () => {
        navigate(routeName)
    }

    return (
        <DirectoryItemContainer onClick={takeToCategory} >
            <BackgroundImg imageUrl={imageUrl} />
            <Body>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem;