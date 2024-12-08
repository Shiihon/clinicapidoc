function Endpoints() {
    return ( 
        <>
        <h1>Doctors endpoints</h1>
        <br/>
            <table className="api-table">
                <thead>
                    <tr>
                        <th>Method</th>
                        <th>URL</th>
                        <th>Request Body</th>
                        <th>Response</th>
                        <th>Roles</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>GET</td>
                        <td>/</td>
                        <td>-</td>
                        <td>All doctors</td>
                        <td>Anyone</td>
                    </tr>
                    <tr>
                        <td>GET</td>
                        <td>/{`id`}</td>
                        <td>-</td>
                        <td>Doctor by ID</td>
                        <td>User, Admin</td>
                    </tr>
                    <tr>
                        <td>GET</td>
                        <td>/specialities/{`speciality`}</td>
                        <td>-</td>
                        <td>Doctors by Speciality</td>
                        <td>User, Admin</td>
                    </tr>
                    <tr>
                        <td>GET</td>
                        <td>/birthdate/range</td>
                        <td>-</td>
                        <td>Doctors by Birthdate Range</td>
                        <td>User, Admin</td>
                    </tr>
                    <tr>
                        <td>POST</td>
                        <td>/</td>
                        <td>doctor(1) without id</td>
                        <td>Created doctor</td>
                        <td>Admin</td>
                    </tr>
                    <tr>
                        <td>PUT</td>
                        <td>/{`id`}</td>
                        <td>doctor(1) without id</td>
                        <td>Updated doctor</td>
                        <td>Admin</td>
                    </tr>
                </tbody>
            </table>
            <br/>
            <h1>Error Codes</h1>
            <br/>
            <table className="api-table">
                <thead>
                    <tr>
                        <th>Error Code</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>400 Bad request - The request was malformed or contained invalid parameters.</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>404 Not Found - The requested resource could not be found.</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>401 Unauthorized - The request requires user authentication and the user has not provided valid credentials.</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>409 Already exists - A resource with the provided details already exists (e.g., username, email, or meal name).</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>500 Server error - An unexpected error occurred on the server, which may be due to issues in the backend processing.</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default Endpoints;
