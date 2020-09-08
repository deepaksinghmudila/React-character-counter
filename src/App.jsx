import React, {useState} from 'react'; 
 
const App = () => {

            const [len, setLength] = useState();     
            const wordCount = (e) => {
                setLength(e.target.value.length);
            };
    return (
        <>            
            <textarea onChange = {wordCount} />
            <h1>Length of textarea input: {len}</h1>
        </>
     );
};
    export default App;
