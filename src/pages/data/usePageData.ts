import { useState } from "react";



const usePageData = () => {
    
    const [option, setOption] = useState<string>("");



    return {
        option,
        setOption
    }
}

export default usePageData;
