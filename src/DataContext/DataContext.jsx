import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import DataReducer from "./DataReducer";


const initialState = {
    books: [],
    search:"",
    ID:"",
    review: [],
};

const DataContext = createContext();

const useData = () => useContext(DataContext);

const DataProvider = ({children}) => {


    const [data , setData] = useReducer(DataReducer, initialState);
    console.log(data)
    const getBooks = async () => {
       await  axios.get('./data.json').then((res) => 
       setData({type:"BOOK", payload:res.data})
       )
    }
     
    useEffect(() => {
        getBooks()

    },[data.ID]);


    return(
        <DataContext.Provider value={{data, setData}}>
            {children}
        </DataContext.Provider>
    );
};

export {DataProvider, useData}