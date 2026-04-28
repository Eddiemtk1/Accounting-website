class SiteHeader extends HTMLElement {
    connectedCallback() {
        const activePage = this.getAttribute('active') || 'Home';
        const isPortal = this.hasAttribute('portal');

        const navItems = [
            { name: 'Home', href: 'home.html' },
            { name: 'Services', href: 'services.html' },
            { name: 'About Us', href: 'about_us.html' },
            { name: 'Contact', href: 'contact.html' }
        ];

        let navHtml = '';
        if (!isPortal) {
            navHtml = `
            <nav class="hidden md:flex items-center space-x-8 font-serif antialiased tracking-tight">
                ${navItems.map(item => `
                    <a class="${activePage === item.name ? 'text-blue-900 border-b-2 border-blue-900 pb-1 font-semibold' : 'text-slate-500 hover:text-blue-900 transition-colors'}"
                       href="${item.href}">${item.name}</a>
                `).join('')}
            </nav>`;
        } else {
             navHtml = `
            <div class="hidden md:flex items-center gap-8 font-serif antialiased tracking-tight">
                ${navItems.map(item => `
                    <a class="${activePage === item.name ? 'text-blue-900 dark:text-blue-400 border-b-2 border-blue-900 dark:border-blue-400 pb-1 font-semibold' : 'text-slate-500 dark:text-slate-400 hover:text-blue-900 dark:hover:text-blue-200 transition-colors'} cursor-pointer active:scale-95 transition-transform"
                       href="${item.href}">${item.name}</a>
                `).join('')}
                <button class="bg-[#002366] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-opacity-90 transition-all duration-300 cursor-pointer active:scale-95">
                    Schedule Consultation
                </button>
            </div>`;
        }

        const headerClass = isPortal
            ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm fixed top-0 w-full z-50 border-b border-slate-200 dark:border-slate-800 shadow-[0_4px_20px_-5px_rgba(0,35,102,0.05)]"
            : "fixed top-0 w-full z-50 border-b border-slate-200/20 bg-white/95 backdrop-blur-sm nav-shadow";

        const titleColor = isPortal ? "text-[#002366] dark:text-white" : "text-blue-900";

        this.innerHTML = `
        <header class="${headerClass}">
            <div class="flex items-center justify-between mx-auto max-w-[1200px] h-20 px-6">
                <div class="text-xl font-bold tracking-widest ${titleColor} uppercase font-serif">
                    Sterling Ledger Partners
                </div>
                ${navHtml}
                ${!isPortal ? `
                <button class="bg-primary text-white px-6 py-3 rounded-lg font-body-md font-semibold cursor-pointer active:scale-95 transition-transform">
                    Schedule Consultation
                </button>` : ''}
            </div>
        </header>`;
    }
}

class SiteFooter extends HTMLElement {
    connectedCallback() {
        const isPortal = this.hasAttribute('portal');

        if (isPortal) {
            this.innerHTML = `
            <footer class="bg-[#F8F9FA] dark:bg-slate-950 w-full border-t border-slate-200 dark:border-slate-800 font-noto-serif text-sm tracking-tight">
                <div class="max-w-[1200px] mx-auto py-12 px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div class="text-slate-600 dark:text-slate-400 order-2 md:order-1 text-center md:text-left">
                        © 2024 Sterling Ledger Partners. Institutional Excellence in Wealth Management.
                    </div>
                    <div class="flex flex-wrap justify-center gap-6 order-1 md:order-2">
                        <a class="text-slate-500 dark:text-slate-400 hover:text-[#002366] dark:hover:text-slate-200 transition-all cursor-default" href="#">Privacy Policy</a>
                        <a class="text-slate-500 dark:text-slate-400 hover:text-[#002366] dark:hover:text-slate-200 transition-all cursor-default" href="#">Terms of Service</a>
                        <a class="text-slate-500 dark:text-slate-400 hover:text-[#002366] dark:hover:text-slate-200 transition-all cursor-default" href="#">Security Disclosure</a>
                        <a class="text-slate-500 dark:text-slate-400 hover:text-[#002366] dark:hover:text-slate-200 transition-all cursor-default" href="#">Regulatory Filings</a>
                    </div>
                </div>
            </footer>`;
        } else {
            this.innerHTML = `
            <footer class="w-full border-t border-slate-200 bg-slate-50">
                <div class="mx-auto max-w-[1200px] py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <div class="text-lg font-semibold text-blue-900 mb-4 font-serif">
                            Sterling Ledger Partners
                        </div>
                        <p class="font-serif text-sm leading-relaxed text-slate-500">
                            © 2024 Sterling Ledger Partners. Institutional Excellence in Wealth Management.
                        </p>
                    </div>
                    <div class="flex flex-wrap md:justify-end gap-x-8 gap-y-4">
                        <a class="font-serif text-sm text-slate-500 hover:text-blue-900 underline underline-offset-4 transition-all duration-200" href="#">Privacy Policy</a>
                        <a class="font-serif text-sm text-slate-500 hover:text-blue-900 underline underline-offset-4 transition-all duration-200" href="#">Terms of Service</a>
                        <a class="font-serif text-sm text-slate-500 hover:text-blue-900 underline underline-offset-4 transition-all duration-200" href="#">Tax Resources</a>
                        <a class="font-serif text-sm text-slate-500 hover:text-blue-900 underline underline-offset-4 transition-all duration-200" href="#">Client Portal</a>
                        <a class="font-serif text-sm text-slate-500 hover:text-blue-900 underline underline-offset-4 transition-all duration-200" href="#">Careers</a>
                    </div>
                </div>
            </footer>`;
        }
    }
}

customElements.define('site-header', SiteHeader);
customElements.define('site-footer', SiteFooter);
