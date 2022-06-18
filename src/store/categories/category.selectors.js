import { createSelector } from "reselect";

const selectCategoryRedcuer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryRedcuer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

export const selectIsCategoriesIsLoading = createSelector(
  [selectCategoryRedcuer],
  (categoriesSlice) => categoriesSlice.isLoading
);
