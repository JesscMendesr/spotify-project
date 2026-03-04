import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {

    isDarkMode: boolean = localStorage.getItem('theme') === 'dark';

    private darkClass = 'dark';

    constructor() {
        this.loadTheme();
    }

    setDarkMode(isDark: boolean) {
        const html = document.documentElement;

        if (isDark) {
            html.classList.add(this.darkClass);
            localStorage.setItem('theme', 'dark');
        } else {
            html.classList.remove(this.darkClass);
            localStorage.setItem('theme', 'light');
        }
    }

    toggle() {
        const isDark = document.documentElement.classList.contains(this.darkClass);
        this.setDarkMode(!isDark);
    }

    private loadTheme() {
        const saved = localStorage.getItem('theme');
        if (saved === 'dark') {
            document.documentElement.classList.add(this.darkClass);
        }
    }
}