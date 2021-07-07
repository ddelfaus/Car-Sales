export const removeFeature = id => {
    
    return{type: "remove", payload:id };
  }
  
  
  export const addNewFeature = feature => {
    
    return{type: 'add', payload: feature };
  }