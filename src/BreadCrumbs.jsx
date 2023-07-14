import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

function BreadCrumbs() {
    const location = useLocation();
    const { category, documentId } = useParams();

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const renderBreadcrumb = () => {
        const pathnames = location.pathname.split('/').filter((path) => path !== '');

        return pathnames.map((pathname, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;

            if (index === pathnames.length - 1) {
                return (
                    <li key={pathname}>
                        {capitalizeFirstLetter(pathname)}
                    </li>
                );
            }

            return (
                <li key={pathname}>
                    <Link to={routeTo}>
                        {capitalizeFirstLetter(pathname)}
                    </Link>
                </li>
            );
        });
    };

    return (
        <>
            <div className="text-sm breadcrumbs p-5">
                <ul>
                    <li>
                        <Link to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                            Home
                        </Link>
                    </li>
                    {category && (
                        <li>
                            <Link to={`/documents/${category}`}>
                                {capitalizeFirstLetter(category)}
                            </Link>
                        </li>
                    )}
                    {documentId && (
                        <li>
                            {capitalizeFirstLetter(documentId)}
                        </li>
                    )}
                    {renderBreadcrumb()}
                </ul>
            </div>
        </>
    );
}

export default BreadCrumbs;
