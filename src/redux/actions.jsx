import { INCREMENT, DECREMENT,TOGGLESHOW } from "./actionTypes";

export const inc = () => {
     return{
        type :INCREMENT,
        //payload:no parameter here

     };

};

export const dec = () => {
    return{
       type : DECREMENT,
       //payload:no parameter here

    };
};

    export const handleShow = () => {
        return{
           type : TOGGLESHOW,
        //payload:no parameter here
    
        };

};
