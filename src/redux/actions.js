export const changeFilter = textFilter => {
    return {
      type: "filter/changeFilter",
      payload: textFilter,
    }
  }