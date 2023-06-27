export const checkIfNull= (element) =>{
    if (element === null || undefined) {
      
      throw new Error( `the element you put in is actually equal to  ${element} so it is not a HtmlElement`)
    }
    return  element
   }