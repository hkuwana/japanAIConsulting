<script lang="ts">
	import { language } from '$lib/stores/language.svelte';
	import { formData } from '$lib/stores/formData.svelte';

	function toggleLanguage() {
		const newLanguage = language === 'en' ? 'ja' : 'en';
		formData.languagePreference = newLanguage;
	}
</script>

<button
	onclick={toggleLanguage}
	class="flex items-center justify-center rounded-full bg-white p-2 shadow-md transition-colors hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
	aria-label={language === 'ja' ? 'Switch to English' : '日本語に切り替え'}
	title={language === 'ja' ? 'Switch to English' : '日本語に切り替え'}
>
	<span class="text-lg font-medium">
		{language === 'ja' ? 'EN' : '日本語'}
	</span>
</button>
