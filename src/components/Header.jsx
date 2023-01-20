import { Link } from "react-router-dom"

const Header = () => {



    return (
        <div id="header">

            <h3>
                <Link to="/">
                    MY TEST
                </Link>
            </h3>

            <nav>
                <Link to="/students">
                    Students
                </Link>
            </nav>


        </div>
    )
}

export default Header