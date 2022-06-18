import { createAction } from "../../utils/reducer/reducer.utils";
import CategoriesActionTypes from "./category.types";
import { getDataFromFirestore } from "../../utils/firebase/firebase.utils";

export const fetchCategoriesStart = () => {
  return createAction(CategoriesActionTypes.FETCH_CATEGORIES_START);
};

export const fetchCategoriesSuccess = (categories) => {
  return createAction(
    CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS,
    categories
  );
};

export const fetchCategoriesFailed = (error) => {
  return createAction(CategoriesActionTypes.FETCH_CATEGORIES_FAILED, error);
};

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());
  try {
    const categoryMap = await getDataFromFirestore();
    dispatch(fetchCategoriesSuccess(categoryMap));
  } catch (error) {
    dispatch(fetchCategoriesFailed(error));
  }
};
