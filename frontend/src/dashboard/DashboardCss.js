import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async'
import Index from './Index';

export default function Dashboard(){
    return(
        <HelmetProvider>
                <Helmet>
                    <link rel="icon" type="image/x-icon" href="../admin/img/favicon/favicon.ico" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
                        rel="stylesheet"
                    />
                    <link rel="stylesheet" href="../admin/vendor/fonts/boxicons.css" />
                    <link rel="stylesheet" href="../admin/vendor/css/core.css" class="template-customizer-core-css" />
                    <link rel="stylesheet" href="../admin/vendor/css/theme-default.css" class="template-customizer-theme-css" />
                    <link rel="stylesheet" href="../admin/css/demo.css" />
                    <link rel="stylesheet" href="../admin/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
                    <link rel="stylesheet" href="../admin/vendor/libs/apex-charts/apex-charts.css" />
                    <link rel="stylesheet" href="../admin/style.css" />
                    <script src="../admin/vendor/js/helpers.js"></script>
                    <script src="../admin/js/config.js"></script>
                </Helmet>
                <Index/>
            </HelmetProvider>
    )
}