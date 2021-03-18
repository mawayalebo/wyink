const ErrorComponent = ({error}) => {
    return ( 
        <div className="container">
            <div className="error">
                {error.includes("undefined") && <h3 className="center">Search field cannot be empty</h3>}
                {!error.includes("undefined") && <h3 className="center">{error}</h3>}
            </div>
        </div>
     );
}
 
export default ErrorComponent;