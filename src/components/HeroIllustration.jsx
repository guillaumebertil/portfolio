// Illustration décorative du hero, dessinée en SVG (léger, net à toutes les tailles).
// Un fichier PHP en arrière-plan, un terminal au premier plan.
// aria-hidden : les lecteurs d'écran l'ignorent, elle n'apporte pas d'information.
export default function HeroIllustration() {
    return (
        <svg
            className="hero-illustration h-auto w-full"
            viewBox="0 0 480 400"
            fontFamily="JetBrains Mono, monospace"
            aria-hidden="true"
        >
            {/* Fenêtre arrière : fichier PHP */}
            <rect x="60" y="30" width="400" height="230" rx="10" fill="#161b22" fillOpacity="0.92" stroke="#30363d" />
            <path d="M60 40 a10 10 0 0 1 10 -10 h380 a10 10 0 0 1 10 10 v22 h-400 z" fill="#1c2128" />
            <text x="80" y="51" fontSize="12" fill="#8b949e">src/Controller/CartController.php</text>
            <g fontSize="12.5">
                <text x="80" y="90" fill="#8b949e">#[Route('/panier', name: 'cart')]</text>
                <text x="80" y="112">
                    <tspan fill="#f2b134">public function</tspan>
                    <tspan fill="#f0f6fc"> index(CartService $cart): Response</tspan>
                </text>
                <text x="80" y="134" fill="#f0f6fc">{'{'}</text>
                <text x="100" y="156">
                    <tspan fill="#f2b134">return</tspan>
                    <tspan fill="#f0f6fc"> $this-&gt;render(</tspan>
                    <tspan fill="#3ddc97">'cart/index.html.twig'</tspan>
                    <tspan fill="#f0f6fc">, [</tspan>
                </text>
                <text x="120" y="178">
                    <tspan fill="#3ddc97">'items'</tspan>
                    <tspan fill="#f0f6fc"> =&gt; $cart-&gt;getItems(),</tspan>
                </text>
                <text x="100" y="200" fill="#f0f6fc">]);</text>
                <text x="80" y="222" fill="#f0f6fc">{'}'}</text>
            </g>

            {/* Fenêtre avant : terminal (glisse légèrement au survol, voir App.css) */}
            <g className="hero-illustration-terminal">
                <rect x="20" y="200" width="330" height="160" rx="10" fill="#0d1117" stroke="#3ddc97" strokeOpacity="0.6" />
                <circle cx="40" cy="218" r="5" fill="#30363d" />
                <circle cx="56" cy="218" r="5" fill="#30363d" />
                <circle cx="72" cy="218" r="5" fill="#30363d" />
                <g fontSize="12.5">
                    <text x="40" y="255">
                        <tspan fill="#3ddc97">~/easyfit</tspan>
                        <tspan fill="#c9d1d9"> $ symfony serve</tspan>
                    </text>
                    <text x="40" y="279" fill="#3ddc97">[OK] Web server listening</text>
                    <text x="40" y="303">
                        <tspan fill="#3ddc97">~/easyfit</tspan>
                        <tspan fill="#c9d1d9"> $ php bin/phpunit</tspan>
                    </text>
                    <text x="40" y="327" fill="#3ddc97">OK</text>
                    <rect x="40" y="336" width="9" height="15" fill="#f2b134" />
                </g>
            </g>
        </svg>
    )
}
