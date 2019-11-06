export const removeFeature = id => {
    console.log("REMOVE_FEATURE")
    return{type: "remove", payload:id };
  }
  
  
  export const addNewFeature = feature => {
    console.log("action fired", feature )
    return{type: 'add', payload: feature };
  }