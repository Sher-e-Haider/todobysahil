export const fetchData= (product=[],action)=>{
   switch(action.type){
    //    case "REQUEST":
    //        return {
    //            product:[],
    //            loading:false
    //        }
        case "FETCH":
            return action.payload
               
            
            // case "FAIL":
            //     return {
            //        product:action.payload,
            //        loading:false
            //     }
            case "CREATE":
                return [...product,action.payload]
           
            case "DELETE":
                return product.filter(x=>x._id!==action.payload)
            case "UPDATE":
                    return product.map(x=>x._id===action.payload._id?action.payload:x)
                
    default:
        return product
   }
}

// export const userData= (state={products:[],loading:false},action)=>{
//     switch(action.type){
//         case "CREQUEST":
//             return {
//                 ...state.products,
//                 loading:false
//             }
//          case "CSUCCESS":
//              return [...state.products,action.payload]
//              case "CFAIL":
//                  return {
//                     products:action.payload,
//                     loading:false
//                  }
//      default:
//          return state
//     }
//  }