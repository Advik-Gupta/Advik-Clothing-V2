import { createAction } from "../../utils/reducer/reducer.utils"
import CategoriesActionTypes from "./category.types"

export const setCategories = (categories) => {
    return createAction(CategoriesActionTypes.SET_CATEGORIES, categories)
}