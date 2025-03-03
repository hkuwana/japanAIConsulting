<script lang="ts">
	import { language } from '$lib/stores/language.svelte';
	import { formData } from '$lib/stores/formData.svelte';

	// Define technology options with translations
	type Technology = {
		id: string;
		en: string;
		ja: string;
	};

	const technologies: Technology[] = [
		{ id: 'excel', en: 'Microsoft Excel', ja: 'Microsoft Excel' },
		{ id: 'sheets', en: 'Google Sheets', ja: 'Google スプレッドシート' },
		{ id: 'salesforce', en: 'Salesforce', ja: 'Salesforce' },
		{ id: 'sap', en: 'SAP', ja: 'SAP' },
		{ id: 'oracle', en: 'Oracle', ja: 'Oracle' },
		{ id: 'ms_office', en: 'Microsoft Office', ja: 'Microsoft Office' },
		{ id: 'airtable', en: 'Airtable', ja: 'Airtable' },
		{ id: 'notion', en: 'Notion', ja: 'Notion' },
		{ id: 'slack', en: 'Slack', ja: 'Slack' },
		{ id: 'email', en: 'Email Only', ja: 'メールのみ' },
		{ id: 'custom_software', en: 'Custom Software', ja: 'カスタムソフトウェア' },
		{ id: 'paper', en: 'Paper-based', ja: '紙ベース' }
	];

	// Initialize selected technologies if not already set
	if (!formData.techStack) {
		formData.techStack = [];
	}

	// Toggle technology selection
	function toggleTech(id: string): void {
		if (formData.techStack.includes(id)) {
			formData.techStack = formData.techStack.filter((item: string) => item !== id);
		} else {
			formData.techStack = [...formData.techStack, id];
		}
	}
</script>

<section>
	<div class="mb-4">
		<p class="mb-2 text-gray-600 dark:text-gray-300">
			{language === 'ja'
				? '現在使用しているテクノロジーを選択してください（複数可）'
				: 'Select the technologies you currently use (multiple selection allowed)'}
		</p>
	</div>

	<div class="grid grid-cols-2 gap-3 sm:grid-cols-3">
		{#each technologies as tech}
			<button
				type="button"
				class="flex items-center justify-between rounded-lg border p-3 text-left transition-colors {formData.techStack.includes(
					tech.id
				)
					? 'border-blue-500 bg-blue-50 dark:border-blue-400 dark:bg-blue-900/30'
					: 'border-gray-300 bg-white hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700'}"
				onclick={() => toggleTech(tech.id)}
			>
				<span>
					{language === 'ja' ? tech.ja : tech.en}
				</span>

				{#if formData.techStack.includes(tech.id)}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5 text-blue-500 dark:text-blue-400"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 13l4 4L19 7"
						/>
					</svg>
				{/if}
			</button>
		{/each}
	</div>

	{#if formData.techStack.length === 0}
		<p class="mt-2 text-sm text-red-500">
			{language === 'ja' ? '少なくとも1つ選択してください' : 'Please select at least one option'}
		</p>
	{/if}
</section>
