// Language store with Svelte 5 reactivity
class LanguageStore {
	currentLanguage: string = $state('ja');

	constructor(defaultLang: string = 'ja') {
		this.currentLanguage = defaultLang;
	}

	getCurrent(): string {
		return this.currentLanguage;
	}

	setCurrent(value: string) {
		this.currentLanguage = value;
	}

	isJapanese(): boolean {
		return this.currentLanguage === 'ja';
	}

	isEnglish(): boolean {
		return this.currentLanguage === 'en';
	}

	toggle(): void {
		this.currentLanguage = this.isEnglish() ? 'ja' : 'en';
	}
}

// Create and export a singleton instance
export const language = new LanguageStore();
