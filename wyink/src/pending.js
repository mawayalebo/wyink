const Pending = () => {
    return ( 
        <div className="pending container">
            <div className="loading">
                <h4 className="center">Loading...</h4>
            </div>
            <div className="progress">
                <div className="indeterminate active"></div>
            </div>
        </div>
     );
}
 
export default Pending;