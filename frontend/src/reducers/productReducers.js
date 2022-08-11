import {PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL , PRODUCT_LIST_REQUEST , PRODUCT_LIST_SUCCESS, PRODUCT_SORT_FAIL, PRODUCT_SORT_REQUEST, PRODUCT_SORT_SUCCESS} from '../constants/productConstants'

export const productReducers = (state = { products: [] } , action) =>{
       switch(action.type){
           case PRODUCT_LIST_REQUEST :
               return { loading : true , products : [] }
           case PRODUCT_LIST_SUCCESS : 
               return { loading : false , products : action.payload}
           case PRODUCT_LIST_FAIL : 
               return { loading : false , error : action.payload}
            default:
               return state           
       }    
}


export const productDetailsReducers = (state = { product: {reviews : []} } , action) =>{
    switch(action.type){
        case PRODUCT_DETAILS_REQUEST :
            return { loading : true , product : [] }
        case PRODUCT_DETAILS_SUCCESS : 
            return { loading : false , product : action.payload}
        case PRODUCT_DETAILS_FAIL : 
            return { loading : false , error : action.payload}
         default:
            return state           
    }    
}



export const productSortByReducers = (state = { sortedProducts: [] } , action) =>{
    switch(action.type){
        case PRODUCT_SORT_REQUEST :
            return { loadingSorted : true , sortedProducts : [] }
        case PRODUCT_SORT_SUCCESS : 
            return { loadingSorted : false , sortedProduct : action.payload}
        case PRODUCT_SORT_FAIL : 
            return { loadingSorted : false , errors : action.payload}
         default:
            return state           
    }    
}
