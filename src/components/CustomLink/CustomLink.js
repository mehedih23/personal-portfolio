import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom';


function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{
                    color: match ? '#ff651c' : '#6b6b6b',
                }}
                to={to}
                {...props}
            >
                {children}
            </Link>

        </div >
    );
}

export default CustomLink