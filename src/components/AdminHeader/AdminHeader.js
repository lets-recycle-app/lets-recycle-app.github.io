import {Link} from "react-router-dom";

function AdminHeader() {
return (
    <div>
    <ul>
        <li>
            <Link to="/admin/map">Map</Link>
        </li>
        <li>
            <Link to="/admin/drivers-list">Driver's list</Link>
        </li>
    </ul>
    </div>
);
}
export default AdminHeader;