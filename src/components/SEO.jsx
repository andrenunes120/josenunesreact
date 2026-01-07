import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords }) {
    const siteTitle = "José Nunes";
    const defaultDescription = " Distribuidor oficial Repsol em Gondomar. Gás butano, propano e acessórios. Entregas ao domicílio rápidas e eficientes.";
    const defaultKeywords = "gás, repsol, gondomar, butano, propano, entregas, aquecimento";

    return (
        <Helmet>
            <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta name="keywords" content={keywords || defaultKeywords} />
            <meta property="og:title" content={title || siteTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:type" content="website" />
        </Helmet>
    );
}
