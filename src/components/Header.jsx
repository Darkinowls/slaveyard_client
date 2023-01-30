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
                <Link to="/subject">
                    Subjects
                </Link>
                <Link to="/teacher">
                    Teachers
                </Link>
                <Link to="/student">
                    Students
                </Link>
                <Link to="/lesson">
                    Lessons
                </Link>
                <Link to="/class">
                    Classes
                </Link>
                <Link to="/grade">
                    Grades
                </Link>
            </nav>


        </div>
    )
}

export default Header