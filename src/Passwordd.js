import React from 'react'; 


const Passwordd = ({error, value, handleChange}) => {

    const style = {
        // background: error > "red" : " "
    }

    return (
        <div>
        <label> Password </label>

        <input 
            type = "password" 
            style={style}
            value={ value } 
            onChange ={ handleChange }
        />
        </div>
    );
};

export default Passwordd;






// step 1 - write the child component
// write the JSX - html bits
// hook the JSX up to the data source (props)
// add interactivity


// step 2 write the parent component
// write the JSX - html bits
// hook the JSX up to the data source (props)
// add interactivity

