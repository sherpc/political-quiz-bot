function getHtml(x, y) {
    const circlesData = [[0, 0], [1, 0], [0, 1], [1, 1]]
        .map(([x, y]) => `<circle cx="${x}" cy="${y}" r="0.01" transform="scale(1000)" fill="white"/>`) +
        `<circle cx="${x / 100}" cy="${y / 100}" r="${1 / 35}" transform="scale(1000)" fill="white"/>`;

    return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <style>
        body {
            position: fixed;
            width: 1920px;
            height: 1080px;
            margin: 0;
            font-family: 'Jost';
        }

        .results {
            width: 1080px;
            height: 1080px;
            position: absolute;
            top: -30px;
            left: 15px;
        }

        .results-data {
            width: 80%;
            height: 80%;
            position: absolute;
            top: 10%;
            left: 10%;
        }

        .results-data-svg {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
        }

        .results-item {
            justify-content: center;
            display: flex;
            position: absolute;
            width: 20%;
            height: 20%;
        }

        .results-top {
            top: 0;
            left: 40%;
        }

        .results-bottom {
            bottom: 0;
            left: 40%;
        }

        .results-left {
            left: 0;
            top: 40%;
        }

        .results-right {
            right: 0;
            top: 40%;
        }

        .results-circle {
            position: absolute;
            top: 25%;
            left: 25%;
            width: 50%;
            height: 50%;
        }

        .results-caption {
            position: absolute;
            bottom: 0;
        }
    </style>
</head>

<body>
    <div class="results">
        <div class="results-data">
            <svg width="1000" height="1000" viewBox="0 0 1000 1000" class="results-data-svg">
                <line x1="0" y1="498" x2="1000" y2="498" stroke="white" stroke-width="4" />
                <line x1="498" y1="0" x2="498" y2="1000" stroke="white" stroke-width="4" />

                <mask id="data-circles">${circlesData}</mask>

                <g mask="url(#data-circles)">
                    <rect x="0" y="0" width="500" height="500" fill="#FF2A31" />
                    <rect x="500" y="0" width="500" height="500" fill="#0BD2DF" />
                    <rect x="0" y="500" width="500" height="500" fill="#00DF4B" />
                    <rect x="500" y="500" width="500" height="500" fill="#DD2FFD" />
                </g>
            </svg>
        </div>
        <div class="results-top results-item">
            <svg width="112" height="112" viewBox="0 0 112 112" class="results-circle">
                <g transform="translate(-913.05 -48.962)">
                    <circle cx="968.38" cy="104.29" r="55.325" fill="#0009db" />
                    <g fill="#fff">
                        <path
                            d="M947.05 98.12l11.876 11.826 17.334-17.234-11.876-11.826zM939.06 101l16.981 16.88 3.891-3.841-16.98-16.88zM963.42 76.794l16.98 16.88 3.892-3.84-16.981-16.88z" />
                        <path
                            d="M974.64 106.41l-6.924-6.924a1.373 1.373 0 00-1.971 0 1.38 1.38 0 00-.404.961c0 .353.151.707.404.96l6.924 6.923c.252.253.606.405.96.405a1.38 1.38 0 001.364-1.365c.051-.354-.05-.707-.353-.96zM939.27 135.62h26.532v-4.649H939.27zM943.77 128.75h17.486v-1.314c0-1.819-1.466-3.335-3.285-3.335h-10.866c-1.819 0-3.285 1.465-3.285 3.335v1.314z" />
                        <path d="M971.31 109.14l22.236 22.287 4.144-4.144-22.236-22.287z" />
                    </g>
                </g>
            </svg>
            <svg width="159.7" height="51.075" class="results-caption">
                <path fill="#0009db" d="M.025 0h159.69v51.075H.025z" />
                <g fill="#fff">
                    <path
                        d="M20.38 25.395h5.559c2.065 0 3.876-.282 5.431-.849 1.586-.594 2.83-1.442 3.735-2.546.933-1.104 1.401-2.433 1.401-3.988 0-1.698-.468-3.099-1.4-4.202-.907-1.132-2.15-1.966-3.736-2.503-1.555-.567-3.366-.849-5.431-.849H15.032v29.706H26.66c2.35 0 4.385-.284 6.111-.849 1.727-.594 3.056-1.5 3.989-2.717.963-1.216 1.443-2.814 1.443-4.795 0-1.499-.339-2.772-1.019-3.819a7.786 7.786 0 00-2.63-2.631 11.566 11.566 0 00-3.692-1.529 18.788 18.788 0 00-4.202-.466h-6.28v3.904h5.475c.706 0 1.342.071 1.91.213.593.113 1.117.311 1.568.594.453.282.807.65 1.062 1.103.254.453.381.99.381 1.612 0 .963-.226 1.727-.678 2.292-.424.537-1.005.933-1.74 1.188-.736.227-1.57.341-2.503.341h-3.651V16.017h2.971c1.217 0 2.165.255 2.843.763.708.51 1.062 1.274 1.062 2.292 0 .68-.156 1.259-.468 1.74-.31.453-.764.806-1.358 1.061-.565.255-1.258.382-2.079.382H20.38zM63.115 20.64H43.594V31.8c0 1.104-.31 1.825-.933 2.164-.594.312-1.315.467-2.164.467v5.73c2.347 0 4.186-.242 5.517-.722 1.357-.51 2.319-1.26 2.886-2.25.565-1.018.847-2.29.847-3.819v-6.916h7.215v13.707h6.153zM73.99 34.35c0-.538.128-.99.383-1.359.281-.367.677-.65 1.187-.847.538-.227 1.175-.341 1.91-.341 1.104 0 2.037.143 2.8.425a8.08 8.08 0 012.293 1.188v-3.012c-.284-.312-.764-.623-1.444-.935-.65-.339-1.427-.607-2.333-.805-.878-.227-1.811-.341-2.801-.341-1.698 0-3.183.255-4.457.765-1.273.509-2.263 1.23-2.97 2.163-.679.935-1.018 2.052-1.018 3.354 0 1.272.297 2.361.891 3.267.622.878 1.472 1.556 2.546 2.037 1.075.453 2.291.68 3.649.68 1.359 0 2.575-.227 3.651-.68 1.103-.481 1.965-1.16 2.588-2.037.65-.906.976-1.98.976-3.225l-.68-2.377c0 1.047-.197 1.867-.593 2.461s-.933 1.019-1.613 1.274c-.651.255-1.372.382-2.164.382-.509 0-.975-.07-1.4-.213-.424-.17-.765-.396-1.018-.678-.256-.312-.383-.693-.383-1.146zm-2.503-7.681c.31-.198.778-.425 1.399-.68a12.186 12.186 0 012.165-.721 11.74 11.74 0 012.674-.297c1.074 0 1.91.255 2.504.765.622.48.933 1.13.933 1.951v12.477h6.154v-13.75c0-1.358-.396-2.504-1.19-3.437-.763-.934-1.838-1.641-3.224-2.122-1.358-.509-2.913-.764-4.668-.764-1.754 0-3.41.24-4.965.722-1.527.48-2.843.99-3.947 1.527zM97.495 30.405c0-.963.226-1.826.68-2.589a5.023 5.023 0 011.865-1.826 5.377 5.377 0 012.633-.678c.706 0 1.428.113 2.163.34a7.509 7.509 0 012.037.976 5.192 5.192 0 011.57 1.57v-6.282c-.679-.48-1.527-.876-2.545-1.188-1.019-.339-2.264-.508-3.735-.508-2.15 0-4.088.424-5.814 1.272-1.698.849-3.04 2.037-4.032 3.565-.962 1.5-1.442 3.282-1.442 5.348 0 2.037.48 3.819 1.442 5.346.991 1.528 2.334 2.716 4.032 3.565 1.726.85 3.664 1.274 5.814 1.274 1.471 0 2.716-.156 3.735-.468 1.018-.339 1.866-.777 2.545-1.316V32.57a5.393 5.393 0 01-1.527 1.57 7.767 7.767 0 01-1.995 1.018 7.33 7.33 0 01-2.248.34 5.648 5.648 0 01-2.633-.637 4.799 4.799 0 01-1.866-1.74c-.453-.764-.679-1.668-.679-2.715zM110.785 20.64v5.304h13.707V20.64zm3.777.847v18.674h6.153V21.487zM127.45 20.64v19.521h6.405V20.64zm4.995 10.735h4.935c.735 0 1.275.185 1.65.552.39.34.6.792.6 1.358 0 .397-.105.75-.3 1.062-.18.282-.435.495-.765.636-.315.141-.705.213-1.185.213h-4.935v4.965h6.075c1.365 0 2.58-.269 3.645-.807a6.285 6.285 0 002.55-2.418c.63-1.047.93-2.264.93-3.651 0-2.093-.69-3.621-2.07-4.583-1.365-.99-3.045-1.485-5.055-1.485h-6.075z" />
                </g>
            </svg>
        </div>
        <div class="results-bottom results-item">
            <svg width="112" height="112" viewBox="0 0 112 112" class="results-circle">
                <g transform="translate(-913.053 -877.648)">
                    <circle cx="968.378" cy="932.973" r="55.325" fill="#d6af00" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M990.837 952.693c3.648 1.639-.262 8.058-3.5 5.943l-1.845 3.132-7.755-4.722 6.107-12.297 10.6 1.795zm-15.207-32.982l-3.771 8.379-7.764-4.099-1.541-4.829-5.518-3.886 6.075.222-1.803-5.075 5.148 2.861 1.426-.262 1.96-5.968 1.689 6.304 1.221.156 5.739-2.074-2.123 4.623 6.952.722zm-27.808-8.386c-3.894.156-3.337-3.903-3.337-3.903l6.632-.073 5.509 14.199-5.115 4.55s-2.804-4.968-3.689-14.773zm4.919-8.756v2.583l-10.429.164v-2.796l2.935-.82c-3.59-2.951-3.418-8.862 4.698-8.288l4.337-3.919.098 7.28-4.984 4.607zm15.904 64.62l5.37-33.787c4.205 1.894 6.665 4.632 6.952 9.264l.147 1.697-7.378 13.453 9.108 5.887.697-.121c-7.452-.763-14.88 3.607-14.88 3.607zm15.953 9.018l-31.251.246.189-7.936 2.23-2.459 2.295-11.349-.566-1.09-1.557.066-2.517-7.051 4.419-9.198-.689-1.64-2.812 1.418-2.828-6.091 7.706-6.165 11.19 7.428-5.919 38.197 3.116 1.64s8.288-5.96 16.216-5.108z"
                        fill="#fff" />
                </g>
            </svg>
            <svg width="195.86" height="51.075" class="results-caption">
                <path fill="#d6af00" d="M.055-.015H195.91V51.06H.055z" />
                <path
                    d="M17.17 25.35c0-1.83.411-3.405 1.232-4.71.819-1.305 1.894-2.295 3.225-2.97 1.357-.675 2.842-1.02 4.455-1.02 1.414 0 2.659.18 3.735.555 1.075.345 2.037.825 2.886 1.44.849.6 1.597 1.23 2.248 1.905v-7.71a14.579 14.579 0 00-3.904-2.22c-1.415-.525-3.21-.795-5.39-.795-2.376 0-4.569.36-6.577 1.095s-3.734 1.8-5.177 3.18a14.534 14.534 0 00-3.352 4.935c-.794 1.89-1.19 4.005-1.19 6.315 0 2.325.396 4.425 1.19 6.33a14.62 14.62 0 003.352 4.92c1.443 1.38 3.168 2.445 5.177 3.18s4.201 1.11 6.577 1.11c2.18 0 3.975-.27 5.39-.81s2.716-1.275 3.904-2.205V30.15a14.75 14.75 0 01-2.248 1.905c-.85.6-1.811 1.08-2.886 1.44-1.076.375-2.321.555-3.735.555-1.613 0-3.098-.33-4.455-1.02-1.331-.675-2.406-1.665-3.225-2.97-.821-1.32-1.232-2.895-1.232-4.71zM44.545 30v2.295h5.645c.451 0 .834.06 1.146.165.31.12.55.255.72.435.198.165.34.36.424.585.086.225.128.465.128.72 0 .495-.183.945-.552 1.365-.34.39-.962.6-1.866.6h-5.645v4.02h7.809c2.235 0 3.833-.51 4.794-1.515.992-1.05 1.487-2.31 1.487-3.78 0-1.275-.312-2.265-.935-2.97s-1.471-1.2-2.545-1.485c-1.076-.285-2.292-.435-3.65-.435zm0 .855h6.536c1.216 0 2.319-.165 3.309-.51 1.018-.375 1.839-.9 2.461-1.62.623-.735.935-1.65.935-2.745 0-1.275-.312-2.295-.935-3.06-.622-.795-1.443-1.365-2.461-1.695-.99-.375-2.093-.555-3.31-.555h-6.535v4.035h5.22c.651 0 1.146.18 1.485.555.339.33.509.75.509 1.26a2 2 0 01-.126.69 1.6 1.6 0 01-.383.585c-.17.18-.382.315-.636.435-.226.075-.51.12-.849.12h-5.22zM40.854 20.67v19.515h6.153V20.67zm20.431 9.78c0 2.025.482 3.81 1.443 5.34.963 1.53 2.292 2.715 3.99 3.57 1.697.84 3.606 1.275 5.729 1.275s4.017-.435 5.686-1.275c1.698-.855 3.027-2.04 3.99-3.57.99-1.53 1.485-3.315 1.485-5.34 0-2.07-.495-3.87-1.485-5.4-.963-1.515-2.292-2.715-3.99-3.555-1.67-.855-3.564-1.275-5.686-1.275s-4.032.42-5.729 1.275c-1.698.84-3.027 2.04-3.99 3.555-.961 1.53-1.443 3.33-1.443 5.4zm6.579 0c0-1.02.212-1.905.636-2.64s.977-1.305 1.655-1.695a4.53 4.53 0 012.292-.6c.82 0 1.57.21 2.25.6.706.39 1.258.96 1.654 1.695.425.735.636 1.62.636 2.64s-.211 1.89-.636 2.625a4.198 4.198 0 01-1.654 1.65c-.68.405-1.43.6-2.25.6-.85 0-1.613-.195-2.292-.6a4.601 4.601 0 01-1.655-1.65c-.424-.735-.636-1.605-.636-2.625zM98.11 25.5c.82 0 1.569.21 2.249.6.708.39 1.258.96 1.654 1.695.425.735.638 1.62.638 2.64s-.213 1.89-.638 2.625a4.578 4.578 0 01-1.654 1.65c-.68.405-1.443.6-2.292.6a4.523 4.523 0 01-2.291-.6 4.594 4.594 0 01-1.656-1.65c-.424-.735-.636-1.605-.636-2.625l-7.087-2.55c0 2.805.495 5.145 1.485 7.05 1.018 1.89 2.406 3.315 4.159 4.275 1.782.945 3.79 1.41 6.026 1.41 2.292 0 4.258-.45 5.899-1.32 1.67-.885 2.957-2.085 3.861-3.615.935-1.545 1.401-3.3 1.401-5.25 0-1.98-.453-3.735-1.357-5.265-.878-1.53-2.123-2.73-3.735-3.615-1.584-.87-3.423-1.305-5.517-1.305zm-7.47 4.935h2.844c0-.795.128-1.485.381-2.085a4.952 4.952 0 011.019-1.575c.453-.42.948-.735 1.486-.93a4.678 4.678 0 011.74-.345l.509-5.25c-1.217 0-2.32.24-3.311.72a6.948 6.948 0 00-2.503 1.995c-.707.87-1.245 1.95-1.613 3.225-.367 1.245-.552 2.655-.552 4.245zm-4.243-2.55l6.663 2.505-1.061-4.635c0-1.41.183-2.73.55-3.975.397-1.245 1.076-2.37 2.038-3.36.991-1.02 2.349-1.86 4.074-2.505 1.557-.6 2.943-1.335 4.159-2.205 1.245-.9 2.249-1.92 3.014-3.06.763-1.125 1.216-2.31 1.357-3.555h-6.153c-.198 1.02-.82 1.905-1.867 2.67-1.019.765-2.49 1.545-4.413 2.325-2.208.915-3.92 2.1-5.136 3.57-1.217 1.44-2.066 3.18-2.546 5.22-.453 2.01-.68 4.35-.68 7.005zm25.693 2.565c0 2.025.48 3.81 1.443 5.34.961 1.53 2.29 2.715 3.988 3.57 1.698.84 3.608 1.275 5.729 1.275 2.122 0 4.018-.435 5.686-1.275 1.698-.855 3.029-2.04 3.99-3.57.99-1.53 1.485-3.315 1.485-5.34 0-2.07-.495-3.87-1.485-5.4-.961-1.515-2.292-2.715-3.99-3.555-1.668-.855-3.564-1.275-5.686-1.275-2.121 0-4.03.42-5.729 1.275-1.698.84-3.027 2.04-3.988 3.555-.963 1.53-1.443 3.33-1.443 5.4zm6.577 0c0-1.02.212-1.905.636-2.64s.977-1.305 1.656-1.695c.678-.39 1.443-.6 2.291-.6.82 0 1.57.21 2.25.6.706.39 1.258.96 1.654 1.695.425.735.638 1.62.638 2.64s-.213 1.89-.638 2.625a4.198 4.198 0 01-1.654 1.65c-.68.405-1.43.6-2.25.6-.848 0-1.613-.195-2.29-.6a4.594 4.594 0 01-1.657-1.65c-.424-.735-.636-1.605-.636-2.625zm29.783-2.1l4.665 10.56 6.195-1.305-10.86-18.42-10.863 18.42 6.195 1.305zm7.125 11.835v3.825h6.03v-8.82h-26.31v8.82h6.239v-3.825zm15.375-5.835c0-.54.12-.99.375-1.365.285-.36.675-.645 1.185-.84.54-.225 1.17-.345 1.92-.345 1.095 0 2.025.135 2.79.42.795.255 1.56.66 2.295 1.2v-3.015c-.285-.315-.765-.63-1.44-.945-.66-.33-1.425-.6-2.34-.795-.87-.225-1.8-.345-2.805-.345-1.695 0-3.18.255-4.455.765-1.26.51-2.25 1.23-2.97 2.16-.675.93-1.02 2.055-1.02 3.36 0 1.275.3 2.355.9 3.27.615.87 1.47 1.545 2.55 2.025 1.065.465 2.28.69 3.645.69 1.35 0 2.58-.225 3.645-.69 1.11-.48 1.965-1.155 2.595-2.025.645-.915.975-1.98.975-3.225l-.675-2.385c0 1.05-.21 1.875-.6 2.46-.39.6-.93 1.02-1.605 1.275-.66.255-1.38.39-2.175.39-.51 0-.975-.075-1.395-.225-.42-.165-.765-.39-1.02-.675-.255-.315-.375-.69-.375-1.14zm-2.505-7.68c.3-.21.765-.435 1.395-.69.615-.27 1.35-.51 2.16-.72.855-.195 1.74-.285 2.67-.285 1.08 0 1.92.255 2.505.75.63.495.945 1.14.945 1.965v12.465h6.15v-13.74c0-1.365-.405-2.505-1.185-3.435-.765-.945-1.845-1.65-3.225-2.13-1.365-.51-2.925-.765-4.68-.765s-3.405.24-4.965.72c-1.515.48-2.835.99-3.945 1.53z"
                    fill="#fff" />
            </svg>
        </div>
        <div class="results-left results-item">
            <svg width="112" height="112" viewBox="0 0 112 112" class="results-circle">
                <g transform="translate(-461.44 -465.31)">
                    <circle cx="516.77" cy="520.63" r="55.325" fill="#ff2a31" />
                    <path
                        d="M528.18 538.98l8.826-26.893c-5.516-.559-9.654-4.758-16.591-6.737l.931 8.206-2.579 2.717.4 20.177 2.538 2.179 1.193 6.951c2.62 1.689 5.84 2.799 10.143 3.978l.104 2.559h-31.886l.269-2.483c4.289-1.006 7.468-2.034 9.964-3.668l.386-7.186 2.621-2.165-.083-20.205-2.524-3.206 1.027-8.889c-6.944 0-11.254 2.676-16.687 2.283l9.136 26.569c-8.061 5.448-15.681 5.455-23.783 0l9.792-27.679a28.64 28.64 0 01-5.91-3.352l1.828-2.393c11.991 6.979 12.329-2.827 29.748-.689 17.419 2.137 17.177 12.833 28.183 7.909l1.379 2.586a21.741 21.741 0 01-4.316 1.938l9.654 27.459c-8.082 5.489-15.702 5.482-23.763.034zm-34.514-31.948l-7.847 22.756 15.433.083zm46.237 5.875l-7.586 22.791 15.433-.083zm-23.301-16.432c-5.124 0-4.896-7.317-.083-7.317s4.765 7.317.083 7.317z"
                        clip-rule="evenodd" fill="#fff" fill-rule="evenodd" />
                </g>
            </svg>
            <svg width="218.36" height="51.075" class="results-caption">
                <path fill="#ff2a31" d="M-.005 0H218.35v51.075H-.005z" />
                <g fill="#fff">
                    <path
                        d="M11.005 10.455v29.706h7.173V10.455zm4.498 5.9h5.814c1.443 0 2.574.325 3.395.974.82.651 1.231 1.6 1.231 2.844 0 1.217-.41 2.15-1.231 2.801s-1.952.976-3.395.976h-5.814v5.898h5.814c2.519 0 4.626-.38 6.324-1.144 1.725-.794 3.027-1.911 3.903-3.353.878-1.471 1.316-3.198 1.316-5.178 0-2.037-.438-3.777-1.316-5.22-.876-1.443-2.178-2.545-3.903-3.31-1.698-.792-3.805-1.188-6.324-1.188h-5.814zM40.495 34.35c0-.537.128-.99.383-1.358.283-.367.679-.65 1.188-.849.538-.226 1.174-.339 1.909-.339 1.104 0 2.037.141 2.802.425a8.072 8.072 0 012.29 1.188v-3.014c-.281-.31-.763-.622-1.442-.933-.65-.339-1.428-.609-2.334-.807a11.158 11.158 0 00-2.801-.339c-1.698 0-3.183.255-4.455.764-1.273.51-2.263 1.231-2.971 2.164-.68.933-1.019 2.051-1.019 3.353 0 1.273.297 2.362.891 3.268.623.876 1.472 1.556 2.547 2.037 1.074.452 2.29.678 3.65.678 1.357 0 2.574-.226 3.649-.678 1.103-.481 1.967-1.16 2.589-2.037.65-.906.975-1.981.975-3.226l-.678-2.376c0 1.047-.198 1.867-.594 2.461s-.934 1.019-1.612 1.274c-.651.253-1.373.381-2.165.381-.51 0-.976-.07-1.401-.212-.424-.169-.763-.396-1.018-.679-.255-.31-.383-.693-.383-1.146zm-2.503-7.68c.312-.198.778-.425 1.4-.68a12.066 12.066 0 012.165-.721c.849-.198 1.74-.297 2.673-.297 1.076 0 1.91.255 2.504.763.622.482.934 1.133.934 1.953v12.476h6.153V26.415c0-1.358-.396-2.504-1.188-3.438-.764-.933-1.839-1.641-3.225-2.121-1.359-.51-2.915-.765-4.668-.765-1.755 0-3.41.241-4.966.721-1.528.482-2.843.992-3.947 1.529zM62.98 29.985v2.292h5.645c.453 0 .834.057 1.146.17.31.113.552.254.721.424.198.17.339.367.425.594.084.226.127.466.127.721 0 .482-.184.935-.552 1.36-.339.395-.962.593-1.868.593H62.98v4.031h7.809c2.235 0 3.834-.509 4.796-1.527.99-1.047 1.485-2.306 1.485-3.777 0-1.274-.311-2.264-.933-2.972-.623-.706-1.472-1.201-2.548-1.485-1.075-.282-2.291-.424-3.649-.424zm0 .849h6.536c1.216 0 2.32-.17 3.31-.509 1.019-.369 1.839-.906 2.462-1.612.622-.737.933-1.656.933-2.759 0-1.273-.311-2.292-.933-3.055-.623-.792-1.443-1.359-2.462-1.698-.99-.368-2.094-.552-3.31-.552H62.98v4.032h5.22c.651 0 1.146.184 1.485.552.34.339.51.763.51 1.272 0 .226-.042.453-.127.68s-.212.424-.383.593c-.17.17-.381.312-.636.425-.226.085-.508.127-.849.127h-5.22zm-3.691-10.185V40.17h6.153V20.649zM83.32 31.77h17.823c.057-.34.085-.651.085-.935v-.721c0-2.066-.41-3.833-1.231-5.304-.792-1.472-1.98-2.603-3.564-3.396-1.557-.792-3.467-1.188-5.73-1.188-2.121 0-3.947.34-5.474 1.018-1.5.68-2.701 1.628-3.607 2.844-.878 1.217-1.457 2.631-1.74 4.244a12.424 12.424 0 00-.17 2.079c0 1.953.425 3.706 1.274 5.262.876 1.528 2.136 2.73 3.777 3.607 1.668.878 3.676 1.316 6.025 1.316 1.896 0 3.494-.227 4.796-.678 1.329-.482 2.446-1.146 3.352-1.995a12.948 12.948 0 002.334-3.098l-5.728-1.4a5.573 5.573 0 01-1.146 1.4c-.453.368-.99.65-1.613.848-.594.198-1.288.297-2.08.297-.848 0-1.613-.183-2.29-.55-.68-.37-1.232-.964-1.657-1.784-.396-.82-.594-1.895-.594-3.225l.086-1.019c0-1.047.183-1.923.552-2.63.367-.736.862-1.288 1.485-1.655.651-.396 1.414-.594 2.29-.594.765 0 1.401.154 1.911.466a2.88 2.88 0 011.23 1.23c.312.539.524 1.203.636 1.995H83.32zM107.26 32.28h15.786v-4.796H107.26zm12.9-11.628v19.521h6.153V20.652zm-14.895 0v19.521h6.195V20.652zM136.765 30.405c0-.962.226-1.824.678-2.589a5.035 5.035 0 011.867-1.824 5.36 5.36 0 012.631-.68c.708 0 1.43.114 2.165.341.735.225 1.414.55 2.037.975a5.192 5.192 0 011.57 1.57v-6.28c-.679-.482-1.528-.878-2.546-1.188-1.019-.34-2.262-.51-3.734-.51-2.151 0-4.089.424-5.814 1.273-1.698.85-3.042 2.037-4.032 3.566-.961 1.498-1.443 3.28-1.443 5.346 0 2.037.482 3.819 1.443 5.347.99 1.527 2.334 2.717 4.032 3.564 1.725.85 3.663 1.274 5.814 1.274 1.472 0 2.715-.156 3.734-.467 1.018-.339 1.867-.778 2.547-1.315v-6.239a5.385 5.385 0 01-1.529 1.571 7.805 7.805 0 01-1.994 1.018 7.34 7.34 0 01-2.25.34c-.933 0-1.81-.212-2.63-.637a4.824 4.824 0 01-1.868-1.74c-.452-.763-.678-1.669-.678-2.716zM150.055 20.64v5.305h13.707V20.64zm3.777.849v18.672h6.153V21.489zM170.86 29.985v2.292h5.644c.452 0 .835.057 1.147.17.31.113.55.254.72.424.199.17.34.367.424.594.086.226.128.466.128.721 0 .482-.184.935-.553 1.36-.339.395-.961.593-1.866.593h-5.644v4.031h7.809c2.235 0 3.832-.509 4.794-1.527.992-1.047 1.486-2.306 1.486-3.777 0-1.274-.312-2.264-.934-2.972-.622-.706-1.472-1.201-2.546-1.485-1.075-.282-2.292-.424-3.649-.424zm0 .849h6.536c1.216 0 2.319-.17 3.31-.509 1.019-.369 1.838-.906 2.46-1.612.623-.737.935-1.656.935-2.759 0-1.273-.312-2.292-.935-3.055-.622-.792-1.441-1.359-2.46-1.698-.991-.368-2.094-.552-3.31-.552h-6.536v4.032h5.22c.651 0 1.146.184 1.485.552.339.339.509.763.509 1.272 0 .226-.042.453-.126.68-.086.226-.213.424-.383.593s-.382.312-.636.425c-.226.085-.51.127-.849.127h-5.22zm-3.691-10.185V40.17h6.153V20.649zM187.585 30.405c0 2.037.481 3.819 1.443 5.347.963 1.527 2.292 2.717 3.99 3.564 1.696.85 3.607 1.274 5.728 1.274 2.123 0 4.017-.425 5.687-1.274 1.698-.847 3.027-2.037 3.99-3.564.99-1.528 1.485-3.31 1.485-5.347 0-2.066-.495-3.861-1.485-5.39-.963-1.527-2.292-2.715-3.99-3.564-1.67-.849-3.564-1.273-5.687-1.273-2.12 0-4.032.424-5.728 1.273-1.698.85-3.027 2.037-3.99 3.564-.962 1.529-1.443 3.324-1.443 5.39zm6.579 0c0-1.019.211-1.895.636-2.631.424-.735.976-1.3 1.654-1.697.68-.397 1.443-.595 2.292-.595.821 0 1.571.198 2.25.595a4.164 4.164 0 011.655 1.697c.424.736.636 1.612.636 2.631s-.212 1.896-.636 2.631a4.232 4.232 0 01-1.655 1.656c-.679.396-1.429.594-2.25.594-.849 0-1.612-.198-2.292-.594a4.642 4.642 0 01-1.654-1.656c-.425-.735-.636-1.613-.636-2.631z" />
                </g>
            </svg>
        </div>
        <div class="results-right results-item">
            <svg width="112" height="112" viewBox="0 0 112 112" class="results-circle">
                <g transform="translate(-1365.6 -465.31)">
                    <circle cx="1420.9" cy="520.64" r="55.325" fill="#00b93e" />
                    <path
                        d="M1450.7 519.2l-2.77-9.275c-3.3.754-6.59-.83-8.23-4.165-11.48 3.099-26.27.837-36.38 6.241 1.04 4.098-.66 7.337-3.04 9.279l2.54 8.603c3.77-.979 6 1.159 7.22 4.003 3.68-1.283 7.3-2.047 10.8-2.539-6.86-4.867-7.37-19.55 3.3-20.568 8.26-.789 11.49 6.472 11.44 12.482-5.3 1.701-7.62 7.387-6.45 12.242-9.06.495-18.44 1.059-27.36 7.567l-8.31-29.012c12.64-14.169 25.59-6.719 44.48-12.611l-.83-2.937c-15.5 5.564-35.77-2.203-47.44 14.692l7.01 23.553-3.85 2.397-7.97-27.734c16.55-22.708 38.79-10.016 54.81-19.325l2.46 7.853c2.1-.848 4.26-1.874 6.51-3.122l8.41 29.292c-2.75 2.806-5.67 4.724-8.71 6.054-2.01-4.122-1.19-10.869 2.36-12.97zm-24.06 20.067c7.74 0 7.94 12.193.53 12.193-8.78 0-8.13-12.193-.53-12.193zm12.09-13.056c8.67 0 8.89 13.649.6 13.649-9.83 0-9.11-13.649-.6-13.649z"
                        clip-rule="evenodd" fill="#fff" fill-rule="evenodd" />
                </g>
            </svg>
            <svg width="159.7" height="51.075" class="results-caption">
                <path fill="#00b93e" d="M-.05.01h159.69v51.075H-.05z" />
                <g fill="#fff">
                    <path
                        d="M16.15 10.465v29.706h7.17V10.465zm4.5 5.898h5.805c1.44 0 2.58.325 3.39.976.825.651 1.245 1.598 1.245 2.843 0 1.216-.42 2.151-1.245 2.802-.81.65-1.95.975-3.39.975H20.65v5.9h5.805c2.52 0 4.635-.383 6.33-1.147 1.725-.792 3.03-1.909 3.9-3.352.87-1.472 1.32-3.197 1.32-5.178 0-2.037-.45-3.777-1.32-5.219-.87-1.443-2.175-2.547-3.9-3.31-1.695-.792-3.81-1.188-6.33-1.188H20.65zM62.05 20.65v19.521h6.45V20.65zm-20.91 0v19.521h6.45V20.65zm5.04 10.736h4.935c.735 0 1.275.184 1.65.552.39.339.585.792.585 1.357 0 .396-.09.75-.285 1.062-.18.282-.435.495-.765.636-.315.141-.705.213-1.185.213H46.18v4.965h6.075c1.35 0 2.58-.27 3.645-.807a6.373 6.373 0 002.55-2.42c.615-1.045.93-2.261.93-3.649 0-2.092-.69-3.621-2.07-4.582-1.365-.99-3.045-1.485-5.055-1.485H46.18zM75.4 32.275h15.795V27.48H75.4zm12.9-11.626v19.52h6.165V20.65zm-14.895 0v19.52h6.21V20.65zM99.55 20.65v19.521h6.15V20.65zm13.245 0l-8.355 8.063 9.33 11.458h7.515l-9.165-11.458 8.31-8.063zM143.8 26.155l.21-7.002-19.68 15.49-.21 7.002zm-13.485-5.516h-6.195v21.006l6.195-5.983zm13.695-1.486l-6.15 5.983V40.16h6.15z" />
                </g>
            </svg>
        </div>
    </div>
</body>

</html>`;
}

(async () => {
    const express = require('express'), https = require('https'), puppeteer = require('puppeteer'), fs = require('fs'),
        app = express(), server = https.createServer({
            key: fs.readFileSync('/letsencrypt/privkey.pem', 'utf-8'),
            cert: fs.readFileSync('/letsencrypt/cert.pem', 'utf-8')
        }, app),
        browser = await puppeteer.launch({ args: ['--no-sandbox'] }), page = await browser.newPage(),
        queue = Promise.resolve();


    app.get('/results/*', async (req, res, next) => {
        const result = req.path.match(/\/results\/(\d+)-(\d+)\.png/);
        if (!result) { next(); return; }
        const x = +result[1], y = +result[2];
        if (x < 0 || x > 100 || y < 0 || y > 100) { next(); return; }

        queue.then(async () => {
            await page.setContent(getHtml(x, y));
            await page.setViewport({ width: 1080, height: 1080 });
            await page.screenshot({ path: `./results/${x}-${y}.png`, omitBackground: true });
            next();
        }).catch(console.error);
    });

    app.use('/results', express.static('./results'));

    server.listen(443);
})().catch(console.error);