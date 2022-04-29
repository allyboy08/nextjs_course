// our-domain.com/news
import Link from 'next/link';
import { Fragment } from "react";

function NewsPage () {
    return (
        <Fragment>
            <h1>news page</h1>
            <ul>
                <li>
                    <Link href="/news/nextjs-framework">
                        nextjs framework
                    </Link>
                </li>
                <li>soething-else</li>
            </ul>
        </Fragment>
    )
};

export default NewsPage;