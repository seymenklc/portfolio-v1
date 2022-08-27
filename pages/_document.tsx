import config from '../config';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang='en'>
            <Head>
                <meta name='description' content={`${config.name} ${config.surname} personal porfolio`} />
                <meta name='title' content={`${config.name} ${config.surname}`} />
                <meta name="author" content={`${config.name} ${config.surname}`} />
                <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
                <meta httpEquiv="expires" content="0" />
                <meta httpEquiv="Pragma" content="no-cache" />
                <meta httpEquiv="Cache-Control" content="no-cache" />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap"
                    rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}