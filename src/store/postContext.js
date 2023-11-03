import {createContext,useState} from 'react';

export const postContext = createContext('');

function Post({children}){
    const [postDetails,setPostDetails] = useState('gsfgf')

    return(
     <postContext.Provider value={{postDetails,setPostDetails}}>
        {children}
     </postContext.Provider>
    )
    
}

export default Post;