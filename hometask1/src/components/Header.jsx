const Mycard = ({name,children}) => {

    return (
        <div className="all">
            <img className="imgYou" src="./images/image.png" alt="" />
            <h1>Hello my name is {name} {children}</h1>
        </div>
    )
}
export default Mycard